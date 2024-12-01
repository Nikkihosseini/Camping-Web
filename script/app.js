const $ = document
const HamburgerMenu = $.querySelector('.hamburger-menu')
const mobileMenu = $.querySelector('.mobile-menu')

let datalist = []


HamburgerMenu.addEventListener('click' , () => {
    HamburgerMenu.classList.toggle('hamburger-menu--open')

    if(HamburgerMenu.classList.contains('hamburger-menu--open')){
        console.log('open')
        mobileMenu.classList.remove('-left-64')
        mobileMenu.classList.add('left-0')
    } else{
        console.log('close')
        mobileMenu.classList.remove('left-0')
        mobileMenu.classList.add('-left-64')
    }
})


// Add Data To DOM

function inItApp(){
    fetch(data.json)
        .then((res) => (res.json()))
        .then((data) => {
            datalist = data
            addDataToHtml()
        })
}

function addDataToHtml(){
    const destinationsWrapperElem = $.querySelector('.destinations-wrapper')

    destinationsWrapperElem.innerHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div class="bg-white flex-center justify-center flex-col text-center p-10 rounded-2xl">
                  <div class=" relative w-[277px] h-[180px] rounded-2xl overflow-hidden z-0">
                       <img class="w-full h-full" src="./Images/images/image1.jpg">
                        <span class="flex-center justify-center w-10 h-10 bg-white rounded-xl absolute top-[20px] right-[20px] z-10">
                         <svg class="w-[24.037px] h-[24.037px]">
                             <use href="#filled-heart"></use>
                         </svg>
                          </span>
                          <span class="font-RobotoMedium flex-center justify-center bg-white text-orange-750 w-32 h-10 rounded-xl absolute -bottom-[10px] left-0 right-0 mx-auto z-10">
                           $36/night
                          </span>
              </div>
                      <h3 class="font-ArchivoBlack text-lg line-clamp-1 mt-10 mb-2">Trickle Creek Ranch</h3>
                      <p class="font-RobotoMedium line-clamp-2">Book unique camping experiences on over 300,000 campsites.</p>
                      <a class="font-RobotoMedium bg-gray-130 text-gray-110 py-3 px-10 rounded-full mt-6">Read More</a>
          </div>
    `
}