const $ = document
const HamburgerMenu = $.querySelector('.hamburger-menu')
const mobileMenu = $.querySelector('.mobile-menu')


const disLike = '<symbol id="heart-stroke" xmlns="http://www.w3.org/2000/svg" width="24.037" height="24.037"viewBox="0 0 24.037 24.037"> <path id="Path_955" data-name="Path 955" d="M15.822,8.979v.029H4V-2.1A5.915,5.915,0,0,1,9.912-7.841a5.913,5.913,0,0,1,5.849,5.049,5.912,5.912,0,0,1,.061,11.772ZM14.346-1.314v-.679l-.005-.158A4.434,4.434,0,0,0,9.912-6.363,4.433,4.433,0,0,0,5.478-2.077V7.53h8.87V7.507l.821.023h.064a4.434,4.434,0,0,0,.007-8.868h-.083l-.132,0-.66.036v-.017Z" transform="translate(.71620.496) rotate(-45)" fill="#e76f51"/></symbol>'

const like = '<symbol id="heart" xmlns="http://www.w3.org/2000/svg" width="24.037" height="24.037" viewBox="0 0 24.037 24.037"><path id="Path_955" data-name="Path 955" d="M15.822,8.979v.029H4V-2.1A5.915,5.915,0,0,1,9.912-7.841a5.913,5.913,0,0,1,5.849,5.049,5.912,5.912,0,0,1,.061,11.772Z" transform="translate(2.716 20.496) rotate(-45)" fill="#e76f51"/></symbol>'

let dataList = []


HamburgerMenu.addEventListener('click', () => {
    HamburgerMenu.classList.toggle('hamburger-menu--open')

    if (HamburgerMenu.classList.contains('hamburger-menu--open')) {
        console.log('open')
        mobileMenu.classList.remove('-left-64')
        mobileMenu.classList.add('left-0')
    } else {
        console.log('close')
        mobileMenu.classList.remove('left-0')
        mobileMenu.classList.add('-left-64')
    }
})


// Add Data To DOM

function inItApp() {
    fetch("data.json")
        .then((res) => (res.json()))
        .then((data) => {
            dataList = data
            console.log(dataList)
            addDataToHtml()
        })
}
inItApp()

function addDataToHtml(){
    if(dataList.length > 0){
        dataList.forEach(data => {

            const destinationsWrapperElem = $.querySelector('.destinations-wrapper')

            destinationsWrapperElem.insertAdjacentHTML('beforeend' , `
              <div id="${data.id}" class="bg-white flex-center justify-center flex-col text-center p-6 rounded-2xl">
                      <div class=" relative max-w-[277px] max-h-[180px] rounded-2xl overflow-hidden z-0">
                          <img class="w-full h-full" src="${data.img}" alt="picture">
                          <span class="flex-center justify-center w-10 h-10 bg-white rounded-xl absolute top-[20px] right-[20px] z-10">
                          <i class="fa-regular fa-heart fa-lg text-orange-750 cursor-pointer"></i>
                          </span>
                          <span class="font-RobotoMedium flex-center justify-center bg-white text-orange-750 w-32 h-10 rounded-xl absolute -bottom-[10px] left-0 right-0 mx-auto z-10">
                             $${data.price}/night
                          </span>
                      </div>
                      <h3 class="font-ArchivoBlack text-lg line-clamp-1 mt-10 mb-2">${data.name}</h3>
                      <p class="font-RobotoMedium line-clamp-2">${data.description}</p>
                      <a class="font-RobotoMedium bg-gray-130 text-gray-110 py-3 px-10 rounded-full mt-6 cursor-pointer">Read More</a>
                  </div>`)
        })
    }
}

