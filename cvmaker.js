

let namee = document.querySelector('.nameinput')
let nameee = document.querySelector('.name')

let savedNameee=localStorage.getItem('nameee')
nameee.innerHTML=savedNameee

let skill = document.querySelector('.skill')
let abotMe = document.querySelector('.about-me')
let email = document.querySelector('.email')
let adress = document.querySelector('.adress-3')
let number = document.querySelector('.number')
let number2 = document.querySelector('.number-2')
let adress2 = document.querySelector('.adress-2')
let website2 = document.querySelector('.website-2')
let website = document.querySelector('.website-3')

let bar1 = document.querySelector('.bar1')
let bar2 = document.querySelector('.bar2')
let bar3 = document.querySelector('.bar3')
let bar4 = document.querySelector('.bar4')
let bar5 = document.querySelector('.bar5')
let bar6 = document.querySelector('.bar6')
let bar7 = document.querySelector('.bar7')


let spa1 = document.querySelector('.spa1')
let spa2 = document.querySelector('.spa2')
let spa3 = document.querySelector('.spa3')
let spa4 = document.querySelector('.spa4')
let spa5 = document.querySelector('.spa5')


let art = document.querySelector('.art3')
let music = document.querySelector('.music3')
let books = document.querySelector('.books3')
let movies = document.querySelector('.movies3')
let games = document.querySelector('.games3')


let art1 = document.querySelector('.art-1')
let music1 = document.querySelector('.music-1')
let books1 = document.querySelector('.books-1')
let movies1 = document.querySelector('.movies-1')
let games1 = document.querySelector('.games-1')



let ss1 = document.querySelector('.ss1')
let ss2 = document.querySelector('.ss2')
let ss3 = document.querySelector('.ss3')
let ss4 = document.querySelector('.ss4')

let ss11 = document.querySelector('.ss-1')
let ss22 = document.querySelector('.ss-2')
let ss33 = document.querySelector('.ss-3')
let ss44 = document.querySelector('.ss-4')


let HTML5 = document.querySelector('.HTML-5')
let HTMLcss = document.querySelector('.HTML-css')
let HTMLjs = document.querySelector('.HTML-js')
let HTMLjquery = document.querySelector('.HTML-jquery')
let HTMLmysql = document.querySelector('.HTML-mysql')
let HTMLphp = document.querySelector('.HTML-php')
let HTMLjson = document.querySelector('.HTML-json')

let exp1 = document.querySelector('.exp-1')
let exp2 = document.querySelector('.exp-2')
let exp3 = document.querySelector('.exp-3')
let expe = document.querySelector('.abo')


let edu1 = document.querySelector('.edu-1')
let edu2 = document.querySelector('.edu-2')
let edu3 = document.querySelector('.edu-3')


let exper1 = document.querySelector('.exper1')

let exper2 = document.querySelector('.exper2')
let exper3 = document.querySelector('.exper3')


let education1 = document.querySelector('.education1')
let education2 = document.querySelector('.education2')
let education3 = document.querySelector('.education3')
let job = document.querySelector('.job')



let expPlace1=document.querySelector('.exp-place-1')
let expPlace2=document.querySelector('.exp-place-2')
let expPlace3=document.querySelector('.exp-place-3')


let expDate1=document.querySelector('.exp-date-1')
let expDate2=document.querySelector('.exp-date-2')
let expDate3=document.querySelector('.exp-date-3')


let expPlace11=document.querySelector('.place-exp1')
let expPlace22=document.querySelector('.place-exp2')
let expPlace33=document.querySelector('.place-exp3')


let expDate11=document.querySelector('.date-exp1')
let expDate22=document.querySelector('.date-exp2')
let expDate33=document.querySelector('.date-exp3')

let expDate111=document.querySelector('.date-exp11')
let expDate222=document.querySelector('.date-exp22')
let expDate333=document.querySelector('.date-exp33')


let eduPlace1=document.querySelector('.edu-place-1')
let eduPlace2=document.querySelector('.edu-place-2')
let eduPlace3=document.querySelector('.edu-place-3')


let eduDate1=document.querySelector('.edu-date-1')
let eduDate2=document.querySelector('.edu-date-2')
let eduDate3=document.querySelector('.edu-date-3')


let eduPlace11=document.querySelector('.place-edu1')
let eduPlace22=document.querySelector('.place-edu2')
let eduPlace33=document.querySelector('.place-edu3')


let eduDate11=document.querySelector('.date-edu1')
let eduDate22=document.querySelector('.date-edu2')
let eduDate33=document.querySelector('.date-edu3')

let eduDate111=document.querySelector('.date-edu11')
let eduDate222=document.querySelector('.date-edu22')
let eduDate333=document.querySelector('.date-edu33')


let edu2date1=document.querySelector('.edu2-date-1')
let edu2date2=document.querySelector('.edu2-date-2')
let edu2date3=document.querySelector('.edu2-date-3')

let exp2date1=document.querySelector('.exp2-date-1')
let exp2date2=document.querySelector('.exp2-date-2')
let exp2date3=document.querySelector('.exp2-date-3')
let wel=document.querySelectorAll('input')
let wele=document.querySelectorAll('textarea')

let personalInfoButton=document.querySelector('.personal-info-button')
let personalInfo=document.querySelector('.personal-info')


let personalExpButton=document.querySelector('.personal-experience-button')
let personalExp=document.querySelector('.personal-experience')


let personalEduButton=document.querySelector('.personal-education-button')
let personalEdu=document.querySelector('.personal-education')



let personalSkiButton=document.querySelector('.personal-skills-button')
let personalSki=document.querySelector('.personal-skills')



let personalSoftwareButton=document.querySelector('.personal-software-button')
let personalSoftware=document.querySelector('.personal-software')


let personalIntButton=document.querySelector('.personal-interest-button')
let personalInt=document.querySelector('.personal-interest')

// + BUTTONS 



personalInfoButton.addEventListener('click',function(){

personalInfo.classList.toggle('hide')
if (personalInfoButton.innerHTML === '+') {
    personalInfoButton.innerHTML = '-';
} else {
    personalInfoButton.innerHTML = '+';
}
})

personalExpButton.addEventListener('click',function(){
    personalExp.classList.toggle('hide2')
    if (personalExpButton.innerHTML === '+') {
        personalExpButton.innerHTML = '-';
    } else {
        personalExpButton.innerHTML = '+';
    }
    console.log('shs')
    })


    personalEduButton.addEventListener('click',function(){
        personalEdu.classList.toggle('hide3')

        if (personalEduButton.innerHTML === '+') {
            personalEduButton.innerHTML = '-';
        } else {
            personalEduButton.innerHTML = '+';
        }
        console.log('shs')
        })

        personalSkiButton.addEventListener('click',function(){
            personalSki.classList.toggle('hide4')
            if (personalSkiButton.innerHTML === '+') {
                personalSkiButton.innerHTML = '-';
            } else {
                personalSkiButton.innerHTML = '+';
            }
            console.log('shs')
            })

            
        personalSoftwareButton.addEventListener('click',function(){
            personalSoftware.classList.toggle('hide5')
            if (personalSoftwareButton.innerHTML === '+') {
                personalSoftwareButton.innerHTML = '-';
            } else {
                personalSoftwareButton.innerHTML = '+';
            }
            console.log('shs')
            })
        
            personalIntButton.addEventListener('click',function(){
                personalInt.classList.toggle('hide6')
                if (personalIntButton.innerHTML === '+') {
                    personalIntButton.innerHTML = '-';
                } else {
                    personalIntButton.innerHTML = '+';
                }
                console.log('shs')
                })
            
        
// onload

document.addEventListener("DOMContentLoaded",function(){
    wel.forEach(function(i){
        i.value=''
    })

    wele.forEach(function(o){
        o.value=''
    })
})


// INPUTSSSSSSSSSSSSS

namee.addEventListener('input', function () {
    nameee.innerHTML = namee.value
localStorage.setItem('nameee', nameee.innerHTML)
   
})
localStorage.setItem('nameee', nameee.innerHTML)

skill.addEventListener('input', function () {
    job.innerHTML = skill.value
   localStorage.setItem('nameee2', job.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee2', job.innerHTML)


expe.addEventListener('input', function () {
    abotMe.innerHTML = expe.value
   localStorage.setItem('nameee3', abotMe.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee3', abotMe.innerHTML)

number2.addEventListener('input', function () {
    number.innerHTML = number2.value
   localStorage.setItem('nameee4', number.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee4', number.innerHTML)


adress2.addEventListener('input', function () {
    adress.innerHTML = adress2.value
   localStorage.setItem('nameee5', adress.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee5', adress.innerHTML)

website2.addEventListener('input', function () {
    website.innerHTML = website2.value
   localStorage.setItem('nameee5', website.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee5', website.innerHTML)


exper1.addEventListener('input', function () {
    exp1.innerHTML = exper1.value
   localStorage.setItem('nameee6', exp1.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee6', exp1.innerHTML)

exper2.addEventListener('input', function () {
    exp2.innerHTML = exper2.value
   localStorage.setItem('nameee7', exp2.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee7', exp2.innerHTML)
exper3.addEventListener('input', function () {
    exp3.innerHTML = exper3.value
   localStorage.setItem('nameee8', exp3.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee8', exp3.innerHTML)

education1.addEventListener('input', function () {
    edu1.innerHTML = education1.value
   localStorage.setItem('nameee9', edu1.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee9', edu1.innerHTML)

education2.addEventListener('input', function () {
    edu2.innerHTML = education2.value
   localStorage.setItem('nameee10', edu2.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee10', edu2.innerHTML)

education3.addEventListener('input', function () {
    edu3.innerHTML = education3.value
   localStorage.setItem('nameee11', edu3.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee11', edu3.innerHTML)

HTML5.addEventListener('input', function () {
    bar1.style.width = `${HTML5.value}%`
   localStorage.setItem('nameee12', bar1.style.width)

    console.log('jdj')
})
localStorage.setItem('nameee12', bar1.style.width)


HTMLcss.addEventListener('input', function () {
    bar2.style.width = `${HTMLcss.value}%`
   localStorage.setItem('nameee13', bar2.style.width)

    console.log('jdj')
})
localStorage.setItem('nameee13', bar2.style.width)

HTMLjs.addEventListener('input', function () {
    bar3.style.width = `${HTMLjs.value}%`
   localStorage.setItem('nameee14', bar3.style.width)

    console.log('jdj')
})
localStorage.setItem('nameee14', bar3.style.width)

HTMLjquery.addEventListener('input', function () {
    bar4.style.width = `${HTMLjquery.value}%`
   localStorage.setItem('nameee15', bar4.style.width)

    console.log('jdj')
})
localStorage.setItem('nameee15', bar4.style.width)

HTMLjson.addEventListener('input', function () {
    bar5.style.width = `${HTMLjson.value}%`
   localStorage.setItem('nameee16', bar5.style.width)

    console.log('jdj')
})
localStorage.setItem('nameee16', bar5.style.width)

HTMLphp.addEventListener('input', function () {
    bar6.style.width = `${HTMLphp.value}%`
   localStorage.setItem('nameee17', bar6.style.width)

    console.log('jdj')
})
localStorage.setItem('nameee17', bar6.style.width)

HTMLmysql.addEventListener('input', function () {
    bar7.style.width = `${HTMLmysql.value}%`
   localStorage.setItem('nameee18', bar7.style.width)

    console.log('jdj')
})
localStorage.setItem('nameee18', bar7.style.width)

ss11.addEventListener('input', function () {
    ss1.innerHTML = `${ss11.value}%`
   localStorage.setItem('nameee19', ss1.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee19', ss1.innerHTML)

ss22.addEventListener('input', function () {
    ss2.innerHTML = `${ss22.value}%`
   localStorage.setItem('nameee20', ss2.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee20', ss2.innerHTML)

ss33.addEventListener('input', function () {
    ss3.innerHTML = `${ss33.value}%`
   localStorage.setItem('nameee21', ss3.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee21', ss3.innerHTML)

ss44.addEventListener('input', function () {
    ss4.innerHTML = `${ss44.value}%`
   localStorage.setItem('nameee22', ss4.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee22', ss4.innerHTML)





art1.addEventListener('input', function () {
    art.src = `${art1.value}.png`
spa1.innerHTML=art1.value
    console.log('jdj')
localStorage.setItem('nameee23', art.src)
localStorage.setItem('nameee24', spa1.innerHTML)

})

localStorage.setItem('nameee23', art.src)
localStorage.setItem('nameee24', spa1.innerHTML)

music1.addEventListener('input', function () {
    music.src = `${music1.value}.png`
   
    spa4.innerHTML = music1.value                           



localStorage.setItem('nameee55', music.src)
localStorage.setItem('nameee56', spa4.innerHTML)
    console.log('jdj')

})

localStorage.setItem('nameee55', music.src)
localStorage.setItem('nameee56', spa4.innerHTML)

games1.addEventListener('input', function () {
    games.src = `${games1.value}.png`
   
    spa5.innerHTML = games1.value                           



localStorage.setItem('nameee25', games.src)
localStorage.setItem('nameee26', spa5.innerHTML)
    console.log('jdj')

})

localStorage.setItem('nameee25', games.src)
localStorage.setItem('nameee26', spa5.innerHTML)

books1.addEventListener('input', function () {
    books.src = `${books1.value}.png`
   

    spa2.innerHTML = books1.value                           


localStorage.setItem('nameee27', books.src)
localStorage.setItem('nameee28', spa2.innerHTML)
    console.log('jdj')

})


localStorage.setItem('nameee27', books.src)
localStorage.setItem('nameee28', spa2.innerHTML)

movies1.addEventListener('input', function () {
    movies.src = `${movies1.value}.png`
    spa3.innerHTML = movies1.value                           
   

localStorage.setItem('nameee29', movies.src)
localStorage.setItem('nameee30', spa3.innerHTML)

    console.log('jdj')

})

localStorage.setItem('nameee29', movies.src)
localStorage.setItem('nameee30', spa3.innerHTML)



expDate11.addEventListener('input', function () {
    expDate1.innerHTML = expDate11.value                           
   localStorage.setItem('nameee31', expDate1.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee31', expDate1.innerHTML)

expDate22.addEventListener('input', function () {
    expDate2.innerHTML = expDate22.value                           
   localStorage.setItem('nameee32', expDate2.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee32', expDate2.innerHTML)

expDate33.addEventListener('input', function () {
    expDate3.innerHTML = expDate33.value                           
   localStorage.setItem('nameee33', expDate3.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee33', expDate3.innerHTML)

expPlace11.addEventListener('input', function () {
    expPlace1.innerHTML = expPlace11.value                           
   localStorage.setItem('nameee34', expPlace1.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee34', expPlace1.innerHTML)

expPlace22.addEventListener('input', function () {
    expPlace2.innerHTML = expPlace22.value                           
   localStorage.setItem('nameee35', expPlace2.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee35', expPlace2.innerHTML)

expPlace33.addEventListener('input', function () {
    expPlace3.innerHTML = expPlace33.value                           
   localStorage.setItem('nameee36', expPlace3.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee36', expPlace3.innerHTML)



eduDate11.addEventListener('input', function () {
    eduDate1.innerHTML = eduDate11.value                           
   localStorage.setItem('nameee37', edu2date1.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee37', edu2date1.innerHTML)

eduDate22.addEventListener('input', function () {
    eduDate2.innerHTML = eduDate22.value                           
   localStorage.setItem('nameee38', edu2date2.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee38', edu2date2.innerHTML)

eduDate33.addEventListener('input', function () {
    eduDate3.innerHTML = eduDate33.value                           
   localStorage.setItem('nameee39', edu2date3.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee39', edu2date3.innerHTML)

eduPlace11.addEventListener('input', function () {
    eduPlace1.innerHTML = eduPlace11.value                           
   localStorage.setItem('nameee40', eduPlace1.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee40', eduPlace1.innerHTML)

eduPlace22.addEventListener('input', function () {
    eduPlace2.innerHTML = eduPlace22.value                           
   localStorage.setItem('nameee41', eduPlace2.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee41', eduPlace2.innerHTML)

eduPlace33.addEventListener('input', function () {
    eduPlace3.innerHTML = eduPlace33.value                           
   localStorage.setItem('nameee42', eduPlace3.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee42', eduPlace3.innerHTML)


eduDate111.addEventListener('input', function () {
    edu2date1.innerHTML = eduDate111.value                           
   localStorage.setItem('nameee43', edu2date1.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee43', edu2date1.innerHTML)

eduDate222.addEventListener('input', function () {
    edu2date2.innerHTML = eduDate222.value                           
   localStorage.setItem('nameee44', edu2date2.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee44', edu2date2.innerHTML)

eduDate333.addEventListener('input', function () {
    edu2date3.innerHTML = eduDate333.value                           
   localStorage.setItem('nameee45', edu2date3.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee45', edu2date3.innerHTML)



expDate111.addEventListener('input', function () {
    exp2date1.innerHTML = expDate111.value                           
   localStorage.setItem('nameee46', exp2date1.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee46', exp2date1.innerHTML)

expDate222.addEventListener('input', function () {
    exp2date2.innerHTML = expDate222.value                           
   localStorage.setItem('nameee47', exp2date2.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee47', exp2date2.innerHTML)

expDate333.addEventListener('input', function () {
    exp2date3.innerHTML = expDate333.value                           
   localStorage.setItem('nameee48', exp2date3.innerHTML)

    console.log('jdj')
})
localStorage.setItem('nameee48', exp2date3.innerHTML)
