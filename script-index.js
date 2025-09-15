const propiedades_venta = [
    {
        id: 0,
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 5000,
        smoke: false,
        pets: false,
    },
    {
        id: 1,
        nombre: 'Apartamento acogedor en la montaña',
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: 'Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        costo: 1200,
        smoke: true,
        pets: true,
    },
    {
        id: 2,
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 5000,
        smoke: true,
        pets: false,
    },
    {
        id: 3,
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 4500,
        smoke: false,
        pets: true,
    },
    {
        id: 4,
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 4500,
        smoke: false,
        pets: true,
    },
]

let grilla = document.querySelector("#grilla-venta")
let htmlVentasTemplate = ""

for (el of propiedades_venta.slice(0,3)){
    htmlVentasTemplate += 
    `
   <div class="card" id="${el.id}" style="width: 18rem;">
  <img src="${el.src}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${el.nombre}</h5>
    <p class="card-text">${el.descripcion}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><i class="fas fa-map-marker-alt"></i> ${el.ubicacion}</li>
    <li class="list-group-item"><i class="fas fa-bed"></i> ${el.habitaciones} Habitaciones</li>
    <li class="list-group-item">$ ${el.costo}</li>
    <li class="list-group-item">${el.smoke == false ? '<i class="fas fa-smoking-ban"></i> No se permite fumar' : '<i class="fas fa-smoking"></i> Permitido fumar'}</li>
    <li class="list-group-item">${el.pets == false ? '<i class="fa-solid fa-ban"></i> No se permiten mascotas' : '<i class="fas fa-paw"></i> Mascotas permitidas'}</li>
  </ul>
</div>
    `
}

grilla.innerHTML = htmlVentasTemplate



const propiedades_alquiler = [
    {
        id: 10,
        nombre: 'Apartamento en el centro de la ciudad',
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true,
    },
    {
        id: 11,
        nombre: 'Apartamento luminoso con vista al mar',
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        costo: 2500,
        smoke: true,
        pets: true,
    },
    {
        id: 12,
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2200,
        smoke: false,
        pets: false,
    },
    {
        id: 13,
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2200,
        smoke: true,
        pets: true,
    },
    {
        id: 14,
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 4500,
        smoke: false,
        pets: true,
    },
]

let grilla2 = document.querySelector("#grilla-alquiler")
let htmlAlquilerTemplate = ""

for (el1 of propiedades_alquiler.slice(0,3)){
    htmlAlquilerTemplate += 
    `
   <div class="card" id="${el1.id}" style="width: 18rem;">
  <img src="${el1.src}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${el1.nombre}</h5>
    <p class="card-text">${el1.descripcion}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><i class="fas fa-map-marker-alt"></i> ${el1.ubicacion}</li>
    <li class="list-group-item"><i class="fas fa-bed"></i> ${el1.habitaciones} Habitaciones</li>
    <li class="list-group-item">$ ${el1.costo}</li>
    <li class="list-group-item">${el1.smoke == false ? '<i class="fas fa-smoking-ban"></i> No se permite fumar' : '<i class="fas fa-smoking"></i> Permitido fumar'}</li>
    <li class="list-group-item">${el1.pets == false ? '<i class="fa-solid fa-ban"></i> No se permiten mascotas' : '<i class="fas fa-paw"></i> Mascotas permitidas'}</li>
  </ul>
</div>
    `
}

grilla2.innerHTML = htmlAlquilerTemplate;





