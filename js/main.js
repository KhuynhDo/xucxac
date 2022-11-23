function main() {
    const resultUrlImgs = [
        "./images/1.jpg",
        "./images/2.jpg",
        "./images/3.jpg",
        "./images/4.jpg",
        "./images/5.jpg",
        "./images/6.jpg"
    ]

    const eleBtnXoc = document.querySelector('.js-xoc-dia')
    const eleImgResult1 = document.querySelector('.js-result-img')
    const eleImgResult2 = document.querySelector('.js-result-img-2')
    const eleImgResult3 = document.querySelector('.js-result-img-3')
    const eleLoading = document.querySelector('.js-loading')
    const eleReadingResult =document.querySelector('.js-reading-result')
    const eletotalMin = document.querySelector('.js-min')
    const eletotalMax = document.querySelector('.js-max')
    
    eleLoading.style.display = 'none';
    eleBtnXoc.addEventListener('click',() => {
        
        eleLoading.style.display = 'block';
        eleImgResult1.style.display = 'none';
        eleImgResult2.style.display = 'none';
        eleImgResult3.style.display = 'none';
        setTimeout(() => {
           const randomNmber1 = Math.floor(Math.random() *6)     
           const randomNmber2 = Math.floor(Math.random() *6)     
           const randomNmber3 = Math.floor(Math.random() *6)   

           eleImgResult1.style.display = 'block'
           eleImgResult2.style.display = 'block'
           eleImgResult3.style.display = 'block'

           eleLoading.style.display = 'none'
           eleImgResult1.src = resultUrlImgs[randomNmber1]
           eleImgResult2.src = resultUrlImgs[randomNmber2]
           eleImgResult3.src = resultUrlImgs[randomNmber3]
           const totalResult = (Number(randomNmber1) + Number(randomNmber2) + Number(randomNmber3) + 3)

           if(totalResult < 10) {
                eletotalMin.textContent= "THẮNG" 
                eletotalMax.textContent= "THUA"
           }
           else {
                eletotalMin.textContent= "THUA"
                eletotalMax.textContent= "THẮNG "
           }
           const rendertotalResult = (result) => {
                eleReadingResult.innerHTML = `
                <p>${result}</p>
                `
           }
           rendertotalResult(`TỔNG LÀ ${totalResult}`)
        },1000)
    })
}

main()