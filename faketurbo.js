let array = [
    {
        image: "https://turbo.azstatic.com/uploads/f460x343/2024%2F04%2F05%2F16%2F25%2F20%2F07bb4fab-ad9d-4c5a-8759-795022cea94f%2F32444_OikwS_ZIYofkU92pw8zouQ.jpg",
        h1: "5 500 AZN",
        p: "Yamaha R15M",
        others: ['https://turbo.azstatic.com/uploads/full/2024%2F03%2F23%2F20%2F23%2F33%2F949d5ac3-c2ab-486f-9c55-0c9e53347ce2%2F32444_OikwS_ZIYofkU92pw8zouQ.jpg',
            "https://turbo.azstatic.com/uploads/full/2024%2F03%2F23%2F20%2F23%2F34%2F4c6c4bfc-0040-41e8-9fcf-f2fe05c5d9aa%2F32444_OikwS_ZIYofkU92pw8zouQ.jpg",
            "https://turbo.azstatic.com/uploads/full/2024%2F03%2F23%2F20%2F23%2F34%2F5dbefd63-1f0a-47d3-915e-e960fbf4911e%2F32444_OikwS_ZIYofkU92pw8zouQ.jpg"
        ]
    },
    {
        image: "https://turbo.azstatic.com/uploads/f460x343/2023%2F08%2F01%2F17%2F47%2F48%2Ff6a5bc95-22c5-4842-bb3a-d7437fe056a7%2F40048_iwcLehthpD7lRf8l-NL2hw.jpg",
        h1: "6 690 AZN",
        p: "Yamaha MT-15",
        others: ['https://turbo.azstatic.com/uploads/full/2023%2F08%2F01%2F17%2F47%2F49%2Fd6cf1c8e-88ad-4d13-9215-371d05e52eb5%2F40034_PkAyidSSA5dzqWQF_8ryyw.jpg',
            "https://turbo.azstatic.com/uploads/full/2023%2F08%2F01%2F17%2F47%2F59%2F71e36bfa-e647-45e9-a870-8e7c1a0dcffa%2F40046_XYh6dMxV2jubUHrafHyn4w.jpg",
            "https://turbo.azstatic.com/uploads/full/2023%2F04%2F25%2F18%2F34%2F43%2F3992cde3-4e70-4c31-9891-6e1406776e82%2F35645_AqlceCG1YFAX4q3gMP4crQ.jpg"
        ]
    },
    {
        image: "https://turbo.azstatic.com/uploads/f460x343/2024%2F04%2F02%2F22%2F04%2F23%2F7023c10c-ac38-45c0-8f8b-7e4b16db3f46%2F90393_ODR1trMUn1QUOVEF2iZirw.jpg",
        h1: "17 000 AZN",
        p: "Yamaha YZF-R1",
        others: ['https://turbo.azstatic.com/uploads/full/2024%2F03%2F23%2F20%2F23%2F33%2F949d5ac3-c2ab-486f-9c55-0c9e53347ce2%2F32444_OikwS_ZIYofkU92pw8zouQ.jpg',
            "https://turbo.azstatic.com/uploads/full/2024%2F04%2F02%2F22%2F04%2F31%2F402843df-f109-4a29-82bf-dd7e85b697df%2F32444_OikwS_ZIYofkU92pw8zouQ.jpg",
            "https://turbo.azstatic.com/uploads/full/2024%2F04%2F02%2F22%2F04%2F37%2Fb7ba9bd2-d3cb-4463-b1a9-e5994dbde3d0%2F32444_OikwS_ZIYofkU92pw8zouQ.jpg"

        ]
    },
]

//arraydan elanlarin getirilmesi +++
for (let i = 0; i < array.length; i++) {
    document.querySelector(".items").innerHTML += `
<div class="item" >
<i class="fa-solid fa-heart"></i>
<img src="${array[i].image}" alt="" onclick="funk (${i})">
<h1>${array[i].h1}</h1>
<p>${array[i].p}</p>
</div>
`
    //add to fav
    var fav = 0
    document.querySelectorAll('.item i').forEach(element => {
        element.addEventListener("click", function () {
            fav = 0;
            element.classList.toggle('heart')
            document.querySelectorAll(".item i").forEach(x => {
                if (x.classList.contains("heart")) {
                    fav++
                }
                document.querySelector('.header span').innerText = fav
            });
        })
    });
}

//balaca sekili maine menimsed+++
function show(i,j) {
    document.querySelector('.main img').src = array[i].others[j]
}
//afterin qurulmasi+++
function funk(i) {
    document.querySelector('.after').style.display = "block"
    document.querySelector('.after').innerHTML = `
    <i class="fa-solid fa-x"></i>
    <div class="info">
    <p>${array[i].p}</p>
    <h1>${array[i].h1}</h1>
    </div>
    <div class="main">//////////////////////////////////////////////////////////////////
        <img src="${array[i].image}" alt="">
    </div>
    <div class="btns">
    <button class="left">Left</button>
    <button class="right">Right</button>
    </div>
    <div class="otherss"></div>
    `


    array[i].others.forEach((x,j) => {
        console.log(x);
        document.querySelector('.otherss').innerHTML +=`<img src="${x}" onclick="show(${i},${j})">`


    })

    let sira = 0
    document.querySelector('.left').addEventListener('click', function () {

        // if(sira==0){
        //     sira= array.length-1
        // }
        // else{
        //     sira--
        // }
        // document.querySelector('.main img').src=array[sira]
        alert()
    })
    document.querySelector('.right').addEventListener('click', function () {

        // if(sira==array.length-1){
        //     sira=0
        // }
        // else{
        //     sira++
        // }
        // document.querySelector('.main img').src=array[sira]
        alert()
    })

    //sehifelerin acilib  baglanma isleri+++
    document.querySelector('.after i').addEventListener("click", function () {
        document.querySelector('.after').style.display = "none"
    })

}

document.querySelector('.add').addEventListener("click", function () {
    document.querySelector('.addpage i').addEventListener("click", function () {
        document.querySelector('.addpage').style.display = "none"
    })


    document.querySelector('.addpage').style.display = 'flex'
})

document.querySelector('.addpage .elavet').addEventListener("click", function () {
    alert("elan elava edildi")
    document.querySelector('.addpage').style.display = "none"

})

let say = 3

//yeni elan elave etmek+++
document.querySelector('.elavet').addEventListener('click', function () {
    say++
    document.querySelector('.header h2').innerText = `
     Göstəriləcək ${say} elan mövcuddur
    `
    let i
    document.querySelector(".items").innerHTML += `
    <div class="item" >
    <i class="fa-solid fa-heart"></i>
    <img src="${document.querySelector('.center .srcc').value}" alt="" onclick="funk (${i})">
    <h1>${document.querySelector('.center .price').value}</h1>
    <p>${document.querySelector('.center .name').value}</p>
    </div>
    `
    document.querySelector('.after').innerHTML = `
    <i class="fa-solid fa-x"></i>
    <div class="info">
    <p>${document.querySelector('.center .name').value}</p>
    <h1>${document.querySelector('.center .price').value}</h1>
    </div>
    <div class="main">
        <img src="${document.querySelector('.center .srcc').value}" alt="">
    </div>
    <div class="btns">
    <button class="left">Left</button>
    <button class="right">Right</button>
    </div>
    `
    //add to fav
    var fav = 0
    document.querySelectorAll('.item i').forEach(element => {
        element.addEventListener("click", function () {
            fav = 0;
            element.classList.toggle('heart')
            document.querySelector('.header div i').classList.add('heart')
            // document.querySelector('.header span').innerText = fav
            // ++fav
              
            document.querySelectorAll(".item i").forEach(x => {
                if (x.classList.contains("heart")) {
                    fav++
                }
                document.querySelector('.header span').innerText = fav
            });
        })
    });
    document.querySelector('.after i').addEventListener("click", function () {
        document.querySelector('.after').style.display = "none"
    })

    //inputlarin deyerini sifirlamaq
    document.querySelectorAll('.center input').forEach(element => {
        element.value = ""
    });
})

//search funk
let deyer = document.querySelector('.header input')
deyer.addEventListener('keyup', function () {
    document.querySelectorAll(' .item p').forEach(element => {
        element.parentElement.style.display = 'none'

        if (element.innerText.toUpperCase().includes(deyer.value.toUpperCase())) {
            element.parentElement.style.display = 'block'
        }
        console.log(element.innerText);
    });
    console.log(deyer.value);
})




