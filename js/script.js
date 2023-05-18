const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    spaceBetween: 10,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

});

function sendForm() {
    let modalForm = document.querySelector(".form__contacts");

    async function postData(url, data) {
        const rec = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data)
        })

        return rec.text()
    }

    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();


        let data = new FormData(modalForm);

        postData("server.com", data).then((rec) => {
            console.log(rec);
            console.log("work");
        }).catch(() => console.log("error")).finally(() => console.log("script work"))
    })
}

sendForm();