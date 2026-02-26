import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lista_compras: any = [
    { nome: "fígado", preco: 26.0, marca: "friboi", promocao: true },
    { nome: "chocolate branco", preco: 2.50, marca: "Laka", promocao: false },
    { nome: "tabaco", preco: 10.0, marca: "Malboro", promocao: false },
    { nome: "Refrigerante", preco: 10.0, marca: "Coca-cola", promocao: false },
  ];

}
