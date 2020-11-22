import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { IProduct } from './product-model'

@Injectable()
export class ProductService{

    getProducts(): Observable<IProduct[]>{

      let subject=new Subject<IProduct[]>()
      setTimeout(() => {subject.next(PRODUCTS); subject.complete();}, 100)

        return subject
    }

    getProductByID(id:number):IProduct{
      return PRODUCTS.find(product => product.id===id)
    }

    getProductSiblings(art:number):IProduct[]{
     let resList:IProduct[]
     resList=new Array

     for(let item of productSiblings){
       console.log()
       if(item.art===art){
         resList.push(item)
       }
     }

     return resList
    }

    addProduct(item:IProduct){
      PRODUCTS.concat(item)
    }
}

const productSiblings : IProduct[]= [

  {
    id: 1,
    art: 1001,
    genderType: 'female',
    type: 'dress',
    price: 7,
    photo: '/assets/images/shoes/1001-1.jpg',
    leftPieces: 9,
    manufacturer: 'Glecer',
    availableSizesEU: [
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44
    ]
  },
  {
    id: 3,
    art: 1003,
    genderType: 'male',
    type: 'sneakers',
    price: 40,
    photo: '/assets/images/shoes/1003-1.jpg',
    leftPieces: 4,
    manufacturer: 'Pronto',
    availableSizesEU: [
      36,
      37,
      38,
      39
    ]
  },
  {
    id: 8,
    art: 1008,
    genderType: 'kidMale',
    type: 'sneakers',
    price: 30,
    photo: '/assets/images/shoes/1008-1.jpg',
    leftPieces: 0,
    manufacturer: 'Pronto',
    availableSizesEU: [
      
    ]
  },
  {
    id: 29,
    art: 1029,
    genderType: 'female',
    type: 'boot',
    price: 87,
    photo: '/assets/images/shoes/1029-1.jpg',
    leftPieces: 0,
    manufacturer: 'Pronto',
    availableSizesEU: [
      
    ]
  },
  {
    id: 33,
    art: 1033,
    genderType: 'female',
    type: 'dress',
    price: 65,
    photo: '/assets/images/shoes/1033-1.jpg',
    leftPieces: 0,
    manufacturer: 'Pronto',
    availableSizesEU: [
      
    ]
  },
  {
    id: 33,
    art: 1033,
    genderType: 'female',
    type: 'dress',
    price: 65,
    photo: '/assets/images/shoes/1033-2.jpg',
    leftPieces: 0,
    manufacturer: 'Pronto',
    availableSizesEU: [
      
    ]
  },
  {
    id: 33,
    art: 1033,
    genderType: 'female',
    type: 'dress',
    price: 65,
    photo: '/assets/images/shoes/1033-3.jpg',
    leftPieces: 0,
    manufacturer: 'Pronto',
    availableSizesEU: [
      
    ]
  }

]

const PRODUCTS : IProduct[]=[
    {
        id: 1,
        art: 1001,
        genderType: 'female',
        type: 'dress',
        price: 7,
        photo: '/assets/images/shoes/1001.jpg',
        leftPieces: 9,
        manufacturer: 'Glecer',
        availableSizesEU: [
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44
        ]
      },
      {
        id: 2,
        art: 1002,
        genderType: 'kidMale',
        type: 'boot',
        price: 92,
        photo: '/assets/images/shoes/1002.jpg',
        leftPieces: 2,
        manufacturer: 'Gemelli',
        availableSizesEU: [
          36,
          37
        ]
      },
      {
        id: 3,
        art: 1003,
        genderType: 'male',
        type: 'sneakers',
        price: 40,
        photo: '/assets/images/shoes/1003.jpg',
        leftPieces: 4,
        manufacturer: 'Pronto',
        availableSizesEU: [
          36,
          37,
          38,
          39
        ]
      },
      {
        id: 4,
        art: 1004,
        genderType: 'kidMale',
        type: 'boot',
        price: 98,
        photo: '/assets/images/shoes/1004.jpg',
        leftPieces: 0,
        manufacturer: 'Pronto',
        availableSizesEU: [
          
        ]
      },
      {
        id: 5,
        art: 1005,
        genderType: 'kidFemale',
        type: 'sneakers',
        price: 58,
        photo: '/assets/images/shoes/1005.jpg',
        leftPieces: 0,
        manufacturer: 'Biana',
        availableSizesEU: [
          
        ]
      },
      {
        id: 6,
        art: 1006,
        genderType: 'kidFemale',
        type: 'mocasin',
        price: 99,
        photo: '/assets/images/shoes/1006.jpg',
        leftPieces: 5,
        manufacturer: 'Glecer',
        availableSizesEU: [
          36,
          37,
          38,
          39,
          40
        ]
      },
      {
        id: 7,
        art: 1007,
        genderType: 'female',
        type: 'mocasin',
        price: 10,
        photo: '/assets/images/shoes/1007.jpg',
        leftPieces: 0,
        manufacturer: 'Biana',
        availableSizesEU: [
          
        ]
      },
      {
        id: 8,
        art: 1008,
        genderType: 'kidMale',
        type: 'sneakers',
        price: 30,
        photo: '/assets/images/shoes/1008.jpg',
        leftPieces: 0,
        manufacturer: 'Pronto',
        availableSizesEU: [
          
        ]
      },
      {
        id: 9,
        art: 1009,
        genderType: 'kidMale',
        type: 'boot',
        price: 55,
        photo: '/assets/images/shoes/1009.jpg',
        leftPieces: 0,
        manufacturer: 'Pronto',
        availableSizesEU: [
          
        ]
      },
      {
        id: 10,
        art: 1010,
        genderType: 'female',
        type: 'boot',
        price: 5,
        photo: '/assets/images/shoes/1010.jpg',
        leftPieces: 8,
        manufacturer: 'Pronto',
        availableSizesEU: [
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43
        ]
      },
      {
        id: 11,
        art: 1011,
        genderType: 'kidFemale',
        type: 'dress',
        price: 97,
        photo: '/assets/images/shoes/1011.jpg',
        leftPieces: 0,
        manufacturer: 'Glecer',
        availableSizesEU: [
          
        ]
      },
      {
        id: 12,
        art: 1012,
        genderType: 'male',
        type: 'dress',
        price: 88,
        photo: '/assets/images/shoes/1012.jpg',
        leftPieces: 6,
        manufacturer: 'Gemelli',
        availableSizesEU: [
          36,
          37,
          38,
          39,
          40,
          41
        ]
      },
      {
        id: 13,
        art: 1013,
        genderType: 'kidFemale',
        type: 'sneakers',
        price: 85,
        photo: '/assets/images/shoes/1013.jpg',
        leftPieces: 3,
        manufacturer: 'Glecer',
        availableSizesEU: [
          36,
          37,
          38
        ]
      },
      {
        id: 14,
        art: 1014,
        genderType: 'female',
        type: 'sneakers',
        price: 37,
        photo: '/assets/images/shoes/1014.jpg',
        leftPieces: 0,
        manufacturer: 'Pronto',
        availableSizesEU: [
          
        ]
      },
      {
        id: 15,
        art: 1015,
        genderType: 'kidFemale',
        type: 'sneakers',
        price: 81,
        photo: '/assets/images/shoes/1015.jpg',
        leftPieces: 0,
        manufacturer: 'Biana',
        availableSizesEU: [
          
        ]
      },
      {
        id: 16,
        art: 1016,
        genderType: 'kidMale',
        type: 'mocasin',
        price: 28,
        photo: '/assets/images/shoes/1016.jpg',
        leftPieces: 0,
        manufacturer: 'Biana',
        availableSizesEU: [
          
        ]
      },
      {
        id: 17,
        art: 1017,
        genderType: 'kidMale',
        type: 'sneakers',
        price: 8,
        photo: '/assets/images/shoes/1017.jpg',
        leftPieces: 0,
        manufacturer: 'Glecer',
        availableSizesEU: [
          
        ]
      },
      {
        id: 18,
        art: 1018,
        genderType: 'female',
        type: 'mocasin',
        price: 92,
        photo: '/assets/images/shoes/1018.jpg',
        leftPieces: 0,
        manufacturer: 'Pronto',
        availableSizesEU: [
          
        ]
      },
      {
        id: 19,
        art: 1019,
        genderType: 'kidMale',
        type: 'sneakers',
        price: 33,
        photo: '/assets/images/shoes/1019.jpg',
        leftPieces: 1,
        manufacturer: 'Glecer',
        availableSizesEU: [
          36
        ]
      },
      {
        id: 20,
        art: 1020,
        genderType: 'female',
        type: 'sneakers',
        price: 0,
        photo: '/assets/images/shoes/1020.jpg',
        leftPieces: 9,
        manufacturer: 'Pronto',
        availableSizesEU: [
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44
        ]
      },
      {
        id: 21,
        art: 1021,
        genderType: 'male',
        type: 'sneakers',
        price: 61,
        photo: '/assets/images/shoes/1021.jpg',
        leftPieces: 0,
        manufacturer: 'Glecer',
        availableSizesEU: [
          
        ]
      },
      {
        id: 22,
        art: 1022,
        genderType: 'female',
        type: 'dress',
        price: 40,
        photo: '/assets/images/shoes/1022.jpg',
        leftPieces: 0,
        manufacturer: 'Gemelli',
        availableSizesEU: [
          
        ]
      },
      {
        id: 23,
        art: 1023,
        genderType: 'male',
        type: 'sneakers',
        price: 62,
        photo: '/assets/images/shoes/1023.jpg',
        leftPieces: 0,
        manufacturer: 'Gemelli',
        availableSizesEU: [
          
        ]
      },
      {
        id: 24,
        art: 1024,
        genderType: 'male',
        type: 'boot',
        price: 23,
        photo: '/assets/images/shoes/1024.jpg',
        leftPieces: 0,
        manufacturer: 'Biana',
        availableSizesEU: [
          
        ]
      },
      {
        id: 25,
        art: 1025,
        genderType: 'kidMale',
        type: 'sneakers',
        price: 52,
        photo: '/assets/images/shoes/1025.jpg',
        leftPieces: 3,
        manufacturer: 'Pronto',
        availableSizesEU: [
          36,
          37,
          38
        ]
      },
      {
        id: 26,
        art: 1026,
        genderType: 'male',
        type: 'boot',
        price: 35,
        photo: '/assets/images/shoes/1026.jpg',
        leftPieces: 0,
        manufacturer: 'Pronto',
        availableSizesEU: [
          
        ]
      },
      {
        id: 27,
        art: 1027,
        genderType: 'kidFemale',
        type: 'sneakers',
        price: 10,
        photo: '/assets/images/shoes/1027.jpg',
        leftPieces: 9,
        manufacturer: 'Glecer',
        availableSizesEU: [
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44
        ]
      },
      {
        id: 28,
        art: 1028,
        genderType: 'kidFemale',
        type: 'mocasin',
        price: 77,
        photo: '/assets/images/shoes/1028.jpg',
        leftPieces: 2,
        manufacturer: 'Biana',
        availableSizesEU: [
          36,
          37
        ]
      },
      {
        id: 29,
        art: 1029,
        genderType: 'female',
        type: 'boot',
        price: 87,
        photo: '/assets/images/shoes/1029.jpg',
        leftPieces: 0,
        manufacturer: 'Pronto',
        availableSizesEU: [
          
        ]
      },
      {
        id: 30,
        art: 1030,
        genderType: 'female',
        type: 'boot',
        price: 65,
        photo: '/assets/images/shoes/1030.jpg',
        leftPieces: 0,
        manufacturer: 'Gemelli',
        availableSizesEU: [
          
        ]
      },
      {
        id: 31,
        art: 1031,
        genderType: 'male',
        type: 'mocasin',
        price: 32,
        photo: '/assets/images/shoes/1031.jpg',
        leftPieces: 0,
        manufacturer: 'Biana',
        availableSizesEU: [
          
        ]
      },
      {
        id: 32,
        art: 1032,
        genderType: 'kidMale',
        type: 'mocasin',
        price: 11,
        photo: '/assets/images/shoes/1032.jpg',
        leftPieces: 2,
        manufacturer: 'Glecer',
        availableSizesEU: [
          36,
          37
        ]
      },
      {
        id: 33,
        art: 1033,
        genderType: 'female',
        type: 'dress',
        price: 65,
        photo: '/assets/images/shoes/1033.jpg',
        leftPieces: 0,
        manufacturer: 'Pronto',
        availableSizesEU: [
          
        ]
      }
]