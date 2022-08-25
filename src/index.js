console.log('%c HI', 'color: firebrick')


function getmage() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
        .then((response) => response.json())
        .then((images) => {
            const imageDiv = document.querySelector('#dog-image-container');
            images.message.forEach(image => {
                const img = document.createElement('img')
                img.src = image;
                imageDiv.appendChild(img);
            });
        }).catch((error) => error)
}



function getBreed() {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(
            dogBreeds => {
                Object.keys(dogBreeds.message).forEach(breed => {

                    const dogBreed = document.querySelector('#dog-breeds');
                    const list = document.createElement('li');
                    list.textContent = breed;
                    dogBreed.appendChild(li);
                    li.addEventListener('click', (e) => {
                        e.target.color = 'rgb(167,0,0)'
                    })
                })
            }
        );
}

function styleBreed() {
    const choose = document.querySelector('#breed-dropdown');
    const dogs= document.querySelector('#dog-breeds');

    select.addEventListener('click', e => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then((breeds) => {
                dogBreed.innerHTML = '';
                const n = Object.keys(breeds.message).filter(breed => breed[0] === e.target.value);
                n.forEach(breed => {
                    const list = document.createElement('li');
                    list.textContent = breed;
                    dogBreed.appendChild(li)
                })
            })

    })
}