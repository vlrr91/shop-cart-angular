import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from '../shared/interfaces';

export class ProductData implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      {
        id: 1,
        productName: 'Reloj plateado',
        description: 'Reloj de pulsera, color plateado, con números romanos',
        price: 80000,
        imageUrl: 'assets/images/product1.jpg'
      },
      {
        id: 2,
        productName: 'Cinturón con águila',
        description: 'Color gris, con hebilla metalica en forma de águila',
        price: 20000,
        imageUrl: 'assets/images/product2.jpg'
      },
      {
        id: 3,
        productName: 'Reloj despertador',
        description: 'Reloj de mesa, color gris, con números romanos',
        price: 50000,
        imageUrl: 'assets/images/product3.jpg'
      },
      {
        id: 4,
        productName: 'Suéter',
        description: 'Suéter de lana, con líneas grises y azules',
        price: 60000,
        imageUrl: 'assets/images/product4.jpg'
      },
      {
        id: 5,
        productName: 'Juego de corbatas',
        description: 'Corbatas con diferentes figuras y colores',
        price: 70000,
        imageUrl: 'assets/images/product5.jpg'
      },
      {
        id: 6,
        productName: 'Reloj inteligente',
        description: 'Sumergible, ritmo cardíaco, bluetooth',
        price: 230000,
        imageUrl: 'assets/images/product6.jpg'
      },
      {
        id: 7,
        productName: 'Reloj en acero',
        description: 'Reloj plateado con azul, sumergible 10 metros',
        price: 175000,
        imageUrl: 'assets/images/product7.jpg'
      },
      {
        id: 8,
        productName: 'Tennis de tela',
        description: 'Tennis negros con adornos color blanco',
        price: 40000,
        imageUrl: 'assets/images/product8.jpg'
      },
      {
        id: 9,
        productName: 'Zapatos para bebe',
        description: 'Color verde con cafe, suela antideslizante',
        price: 67500,
        imageUrl: 'assets/images/product9.jpg'
      },
      {
        id: 10,
        productName: 'Reloj café y corbata',
        description: 'Reloj de pulsera en cuero color café, corbata color gris',
        price: 310000,
        imageUrl: 'assets/images/product10.jpg'
      },
      {
        id: 11,
        productName: 'Tennis para mujer',
        description: 'Tennis rosados con líneas blancas, cordones rosados',
        price: 77000,
        imageUrl: 'assets/images/product11.jpg'
      }
    ];

    return { products };
  }
}
