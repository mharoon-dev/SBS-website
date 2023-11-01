// skating section

let skatingRow = document.querySelector('.skatingRow')
skatingRow.classList.add('d-flex')
skatingRow.classList.add('justify-content-evenly')

let skaters = [
    {
        image:'./images/skate 1.png',
        h3:'Skateboard',
        color:'red',
        p:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations',
    },
    {
        image:'./images/skate 2.png',
        h3:'Skateboard',
        color:'blue',
        p:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations'
    },
    {
        image:'./images/skate 3.png',
        h3:'Skateboard',
        color:'red',
        p:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations'
    },
]

function showSkaters() {
    skaters.forEach(function (skater) {
        let bgColor = skater.color === 'red' ? 'red-bg' : 'blue-bg'; 
        skatingRow.innerHTML += `
        <div class="col-lg-3 col-md-5 col-12 py-5 mb-4  skater ${bgColor}">
              <img src="${skater.image}">
              <h3>${skater.h3}</h3>
              <p>${skater.p}</p>
            </div>
            <div class="row">
            <div class="col">
            <p class="read-more">read more</p>
            </div>
        `
    }) 
}
showSkaters()

    
