import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import {Livro} from './livros.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

// Livros: Livro = {
//   isbn: '123',
//   titulo: 'o fogo que molhava 2',
//   sinopise: 'o fogo está de volta',
//   data_lancamento: '11/09/2008',
//   paginas: '1877',
//   autor: [ 
//     {
//     nome: 'jilberto henrique', email: 'yegfw@gmail.com'
//     }
//   ],
//   categoria: [
//     { nome: 'filosofico'}
//   ],
//   editora: {nome: 'helicopetero de combate 268', email: 'cabocriatividade@gmail.com'}
  
// };

Livros = [
{
  isbn: '123',
  titulo: 'o fogo que molhava 2',
  sinopise: 'o fogo está de volta',
  data_lancamento: '11/09/2008',
  paginas: '1877',
  autor: [
    { nome: 'jilberto henrique', email: 'yegfw@gmail.com' }
  ],
  categoria: [{ nome: 'filosofico' }],
  editora: { nome: 'helicopetero de combate 268', email: 'cabocriatividade@gmail.com' }
},
{
  isbn: '124',
  titulo: 'a sombra do vento eterno',
  sinopise: 'um mistério atravessa gerações',
  data_lancamento: '05/03/2010',
  paginas: '450',
  autor: [{ nome: 'marcos silva', email: 'marcos@gmail.com' }],
  categoria: [{ nome: 'drama' }],
  editora: { nome: 'editora horizonte', email: 'contato@horizonte.com' }
},
{
  isbn: '125',
  titulo: 'código das estrelas',
  sinopise: 'segredos escondidos no universo',
  data_lancamento: '21/07/2015',
  paginas: '320',
  autor: [{ nome: 'ana costa', email: 'ana@gmail.com' }],
  categoria: [{ nome: 'ficcao cientifica' }],
  editora: { nome: 'nova era', email: 'novaera@gmail.com' }
},
{
  isbn: '126',
  titulo: 'o silêncio do mar',
  sinopise: 'uma jornada introspectiva',
  data_lancamento: '10/01/2012',
  paginas: '210',
  autor: [{ nome: 'roberto lima', email: 'roberto@gmail.com' }],
  categoria: [{ nome: 'poesia' }],
  editora: { nome: 'mar azul', email: 'contato@marazul.com' }
},
{
  isbn: '127',
  titulo: 'além da montanha',
  sinopise: 'aventura em terras desconhecidas',
  data_lancamento: '18/09/2018',
  paginas: '390',
  autor: [{ nome: 'carla souza', email: 'carla@gmail.com' }],
  categoria: [{ nome: 'aventura' }],
  editora: { nome: 'explorar', email: 'explorar@gmail.com' }
},
{
  isbn: '128',
  titulo: 'mente brilhante',
  sinopise: 'o poder do pensamento humano',
  data_lancamento: '30/11/2020',
  paginas: '275',
  autor: [{ nome: 'fernando alves', email: 'fernando@gmail.com' }],
  categoria: [{ nome: 'autoajuda' }],
  editora: { nome: 'sabedoria viva', email: 'sabedoria@gmail.com' }
},
{
  isbn: '129',
  titulo: 'noite sem fim',
  sinopise: 'um thriller psicológico intenso',
  data_lancamento: '14/06/2016',
  paginas: '340',
  autor: [{ nome: 'juliana rocha', email: 'juliana@gmail.com' }],
  categoria: [{ nome: 'suspense' }],
  editora: { nome: 'mistério editora', email: 'misterio@gmail.com' }
},
{
  isbn: '130',
  titulo: 'raízes do passado',
  sinopise: 'histórias que moldaram o presente',
  data_lancamento: '02/02/2011',
  paginas: '500',
  autor: [{ nome: 'paulo teixeira', email: 'paulo@gmail.com' }],
  categoria: [{ nome: 'historico' }],
  editora: { nome: 'tempo real', email: 'tempo@gmail.com' }
},
{
  isbn: '131',
  titulo: 'o último guardião',
  sinopise: 'fantasia épica de um reino perdido',
  data_lancamento: '25/12/2019',
  paginas: '610',
  autor: [{ nome: 'lucas ferreira', email: 'lucas@gmail.com' }],
  categoria: [{ nome: 'fantasia' }],
  editora: { nome: 'dragão dourado', email: 'dragao@gmail.com' }
},
{
  isbn: '132',
  titulo: 'vida em códigos',
  sinopise: 'a jornada de um programador',
  data_lancamento: '08/08/2021',
  paginas: '290',
  autor: [{ nome: 'gabriel nunes', email: 'gabriel@gmail.com' }],
  categoria: [{ nome: 'tecnologia' }],
  editora: { nome: 'dev books', email: 'dev@gmail.com' }
},
{
  isbn: '133',
  titulo: 'o despertar da alma',
  sinopise: 'reflexões sobre existência',
  data_lancamento: '17/04/2013',
  paginas: '230',
  autor: [{ nome: 'renata oliveira', email: 'renata@gmail.com' }],
  categoria: [{ nome: 'espiritualidade' }],
  editora: { nome: 'luz interior', email: 'luz@gmail.com' }
}
];

}
