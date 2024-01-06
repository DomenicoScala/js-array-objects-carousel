const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];



const imgContainer = document.querySelector('.elements')

for (let i = 0; i < images.length; i++){
    if(i == 0){
        imgContainer.innerHTML += `
        <div class="slide active">  
            <img src="${images[i].url}" alt="">

            <div class= "text">
                <h3>${images[i].title}</h3>

                <p>${images[i].description}<p>
            </div>    
        </div>
        `;
    }
    else{
        imgContainer.innerHTML += `
        <div class="slide">  
            <img src="${images[i].url}" alt"">

            <div class= "text">
                <h3>${images[i].title}</h3>

                <p>${images[i].description}<p>
            </div>    
        </div>
        `;
    }

}

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const allItem = document.querySelectorAll('.slide')
let imgCounter = 0;

nextButton.addEventListener('click', function(){
    allItem[imgCounter].classList.remove('active');
    if(imgCounter != allItem.length - 1){

        imgCounter++;

    }
    else if(imgCounter == (allItem.length - 1)){
        imgCounter = 0;
    }
    
    allItem[imgCounter].classList.add('active');
})

prevButton.addEventListener('click', function(){
    allItem[imgCounter].classList.remove('active');
    if(imgCounter > 0){
        imgCounter--;
    }
    else if(imgCounter == 0){
        imgCounter = allItem.length - 1;
    }
    allItem[imgCounter].classList.add('active');
})