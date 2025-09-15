const propiedades_alquiler = [
    {
        id: 10,
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane',
        habitaciones: 4,
        costo: 5000,
        smoke: false,
        pets: false,
    },
    {
        id: 11,
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane',
        habitaciones: 4,
        costo: 5000,
        smoke: true,
        pets: true,
    },
    {
        id: 12,
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane',
        habitaciones: 4,
        costo: 5000,
        smoke: true,
        pets: false,
    },
]

let grilla2 = document.querySelector("#grilla-alquiler")
let htmlAlquilerTemplate = ""

for (el1 of propiedades_alquiler){
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
    <li class="list-group-item"><i class="fas fa-bed"></i> ${el1.habitaciones}</li>
    <li class="list-group-item">$ ${el1.costo}</li>
    <li class="list-group-item">${el1.smoke == false ? '<i class="fas fa-smoking-ban"></i> No se permite fumar' : '<i class="fas fa-smoking"></i> Permitido fumar'}</li>
    <li class="list-group-item">${el1.pets == false ? '<i class="fa-solid fa-ban"></i> No se permiten mascotas' : '<i class="fas fa-paw"></i> Mascotas permitidas'}</li>
  </ul>
</div>
    `
}

grilla2.innerHTML = htmlAlquilerTemplate;
