//variable
const accordian = document.querySelectorAll('.content-container');
accordian.forEach((item) => {
    item.addEventListener('click', function(){
        this.classList.toggle('active');
    })
})