const popup = document.querySelector('.popup')
const btnCallMaster = document.getElementsByClassName('btn')
const form = document.getElementsByClassName('form')
const confirm = document.getElementById('confirm')
const showRes = document.getElementById('show-result')
const checkF = document.getElementById('checkFirst')
const checkS = document.getElementById('checkSecond')
const lastBtn = document.getElementById('btnBgChange')
const inpPhones = document.getElementsByClassName('phone')

for (let i = 0; i < btnCallMaster.length; i++) {
    btnCallMaster[i].addEventListener('click',
    (e) => {
        e.preventDefault()
        popup.classList.remove('hide')
    }
    )
}

lastBtn.addEventListener('click', (e) => {
    e.preventDefault()
    confirm.classList.remove('hide')
    setTimeout(() => {
        confirm.classList.add('hide')
    }, 2000)
})

showRes.addEventListener('click', (e) => {
    e.preventDefault()
    confirm.classList.remove('hide')
    setTimeout(() => {
        popup.classList.add('hide')
        confirm.classList.add('hide')
    }, 2000)
})

document.addEventListener ('keydown', (e) => {
    if(e.keyCode == 27) {
        popup.classList.add('hide')
        confirm.classList.add('hide')
    }
})

checkF.addEventListener('click', () => {
    if (showRes.classList.contains('dis')) {
        showRes.classList.add('call-master')
        showRes.disabled = false
        showRes.classList.remove('dis')
    }
    else {
        showRes.classList.add('dis')
        showRes.disabled = true
        showRes.classList.remove('call-master')
    }
})

checkS.addEventListener('click', () => {
    if (lastBtn.classList.contains('dis')) {
        lastBtn.classList.add('call-master')
        lastBtn.disabled = false
        lastBtn.classList.remove('dis')
    }
    else {
        lastBtn.classList.add('dis')
        lastBtn.disabled = true
        lastBtn.classList.remove('call-master')
    }
})

document.addEventListener('submit', (e) => {
    e.preventDefault()
})

$('[href = "#col1"]').click(function() {
    if ($('#opn1').hasClass('rot'))
        $('#opn1').removeClass('rot')
    else 
        $('#opn1').addClass('rot')
    $('#faq1').slideToggle(500)
    t_lazyload_update()
});

$('[href = "#col2"]').click(function() {
    if ($('#opn2').hasClass('rot'))
        $('#opn2').removeClass('rot')
    else 
        $('#opn2').addClass('rot')
    $('#faq2').slideToggle(500)
    t_lazyload_update()
});

$('[href = "#col3"]').click(function() {
    if ($('#opn3').hasClass('rot'))
        $('#opn3').removeClass('rot')
    else 
        $('#opn3').addClass('rot')
    $('#faq3').slideToggle(500)
    t_lazyload_update()
});

$('[href = "#col4"]').click(function() {
    if ($('#opn4').hasClass('rot'))
        $('#opn4').removeClass('rot')
    else 
        $('#opn4').addClass('rot')
    $('#faq4').slideToggle(500)
    t_lazyload_update()
});

