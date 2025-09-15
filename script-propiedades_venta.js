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
]

let grilla = document.querySelector("#grilla-venta")
let htmlVentasTemplate = ""

for (el of propiedades_venta){
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
    <li class="list-group-item"><i class="fas fa-bed"></i> ${el.habitaciones}</li>
    <li class="list-group-item">$ ${el.costo}</li>
    <li class="list-group-item">${el.smoke == false ? '<i class="fas fa-smoking-ban"></i> No se permite fumar' : '<i class="fas fa-smoking"></i> Permitido fumar'}</li>
    <li class="list-group-item">${el.pets == false ? '<i class="fa-solid fa-ban"></i> No se permiten mascotas' : '<i class="fas fa-paw"></i> Mascotas permitidas'}</li>
  </ul>
</div>
    `
}

grilla.innerHTML = htmlVentasTemplate



