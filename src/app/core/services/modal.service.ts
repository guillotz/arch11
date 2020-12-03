import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    showModal = new Subject<boolean>();
    showPage = new Subject<boolean>();
    mensajeError = new Subject<any>();
    msg = new Subject<any>();
    accion = new Subject<any>();
    accion2 = new Subject<any>();
    timeout: boolean = false;
    constructor() { }

    showErrorPage(){
        this.showPage.next(true);
    }

    showForbiddenPage(obj: any){
        this.showPage.next(true);
        this.mensajeError.next(obj);
    }

    hideErrorPage(){
        this.showPage.next(false);
    }

    show() {
        this.showModal.next(true);
    }

    hide() {
        this.showModal.next(false);
    }

    showDescription(description: any) {
    	description.tipo = description.tipo ? description.tipo : 'error';
        this.mensajeError.next(description);
        this.showModal.next(true);
    }

    setMsg(msg: string) {
        this.msg.next(msg);
    }
    callBackModal(accion: any){
        let action = {
            btn: accion
        }
        this.accion.next(action);
    }
    callBack2(accion: any){
        let action = {
            btn: accion
        };
        this.accion2.next(action);
    }

}