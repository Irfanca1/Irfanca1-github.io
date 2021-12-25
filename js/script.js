        // const myCarousel = document.querySelector('#carouselExampleControls')
        // const carousel = new bootstrap.Carousel(myCarousel, {
        //   interval: 5000,
        //   pause: false,
        // });

        document.addEventListener("click",function (e) {
          if(e.target.classList.contains("gallery-item")) {
            const src = e.target.getAttribute("src");
            document.querySelector(".modal-img").src = src;
            const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
            myModal.show();
          }
        })

        //SCRIPT AGAR BISA MENERIMA PESAN DARI GITHUB JAMIEWILSON
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwmgMZNguZLe7MZTnmFGh0X_x908eIpC5ROD5Z1god6Ilvtvf7V2V53O1-7PysbsLwb/exec'
        const form = document.forms['profile-contact-form'];

        //SCRIPT AGAR MEMUNCULKAN BUTTON LOADING DAN ALERT BERHASIL
        const btnKirim = document.querySelector('.btn-kirim');
        const btnLoading = document.querySelector('.btn-loading');
        const myAlert = document.querySelector('.my-alert');

        form.addEventListener('submit', e => {
          e.preventDefault();
          //ketika tombol submit di klik
          //tampilkan tombol loading, hilangkan tombol kirim
          btnLoading.classList.toggle('d-none');
          btnKirim.classList.toggle('d-none');
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
              
              //tampilkan tombol kirim, hilangkan tombol loading
              btnLoading.classList.toggle('d-none');
              btnKirim.classList.toggle('d-none');

              //tampilkan alert
              myAlert.classList.toggle('d-none');

              //mereset formnya
              form.reset();
              console.log('Success!', response);
            })
            .catch(error => console.error('Error!', error.message))
        });


        //ANIMASI ON SCROLL ( AOS ) galeri Image
        // const galleryImage = document.querySelectorAll('.gallery-img');

        // galleryImage.forEach((img, i) => {
        //     img.dataset.aos = 'fade-down';
        //     img.dataset.aosDelay = i * 100;
        //     img.dataset.aosDuration = 1000;
        // });

        //ANIMASI ON SCROLL ( AOS ) PROJECTS
        const galleryImage = document.querySelectorAll('.gallery-item');

        galleryImage.forEach((img, i) => {
            img.dataset.aos = 'flip-left';
            img.dataset.aosDelay = i * 100;
            img.dataset.aosDuration = 1000;
        });

        AOS.init({
            once: true,
        });

        //GREENSOCK
        // gsap.registerPlugin(TextPlugin);
        // gsap.to('.carousel-caption', {duration: 2, delay: 1.5, text: 'Some representative placeholder content for the first slide.'});
        // gsap.from('.my-slide img', { duration: 1, y:-100, opacity:0, ease: 'bounce' });

        
        // BAGIAN LOADER
        function loader() {
          document.querySelector('.loader-container').classList.add('fade-out');
        }

        function fadeOut() {
          setInterval(loader, 2000);
        }

        window.onload = fadeOut;