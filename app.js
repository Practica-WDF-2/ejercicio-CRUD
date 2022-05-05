console.log('Hola mundo')

let lista = []

function crearTarea() {
  const tituloTarea = document.getElementById('titulo').value
  const descripcionTarea = document.getElementById('descripcion').value

  lista.push({
    titulo: tituloTarea,
    descripcion: descripcionTarea,
    check: false
  })

  console.log(lista)
  renderList(lista)
}


function renderList(tareas) {
  console.log(tareas)
  const container = document.getElementById('container-list')
  container.innerHTML = ''
  tareas.forEach((tarea, i) => {
    console.log(tarea)
    container.innerHTML += `
      <div class="card">
        <h4>
          ${tarea.titulo}
        </h4>
        <p>
          ${tarea.descripcion}
        </p>
        <button onclick="borrarTarea(${i})">X</button>
      </div>
    `
  })
}

function borrarTarea(pos) {
  lista.splice(pos, 1)
  renderList(lista)
}

// const botonGuardar = document.getElementById('guardar')
// botonGuardar.addEventListener('click', function (e) {
//   crearTarea()
// })