import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';
import { LoaderService } from '../../core/services/loader.service';
import { ModalService } from '../services/modal.service';
import { Router } from '@angular/router';


@Injectable()
export class Interceptor implements HttpInterceptor {
    private reqs = 0;
    constructor(private loaderService: LoaderService, private modalService: ModalService, private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show()

              console.log(`SOY EL INTERCEPTOR - ${req.url}`);

        let jsonReq: HttpRequest<any> = req.clone({
            setHeaders: { 'Content-Type': 'application/json' }
        });

        this.reqs++;
        return next.handle(jsonReq).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.restartReqs();
                    if (event.status != 200) {
                        //  Porcion de código para realizar cuando venga un error nuestro 
                    }
                }

                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log("ERROR: ", error);
                this.restartReqs();
                this.loaderService.hide();
                if (error.status > 600 && error.status <= 608) {
                    this.modalService.showDescription({
                        tipo: 'error',
                        tipoError: 'http',
                        mensajeImprimir: error.error,
                        error: error
                    });
                    return throwError(error);
                }

                if (error.status == 403) {
                    this.router.navigate(['error']);
                    return throwError(error);
                }
                
                this.modalService.showDescription({
                    tipo: 'error',
                    tipoError: 'http',
                    mensajeImprimir: 'Error desconocido',
                    error: error
                });
                return throwError(error);
                
            }),
            /*
            finalize(() => {
                this.loaderService.hide();
            })
            */
        );
    }

    restartReqs() {
        this.reqs--;
        if (this.reqs <= 0) {
            this.loaderService.hide();
        }
    }
}