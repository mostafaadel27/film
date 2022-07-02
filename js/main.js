let div =document.getElementById('div')
let sear =document.getElementById('word')
let sear_her =document.getElementById('word1')
let film=[]
let search=[]
let film_name=[]
let convBody;
async function display(){
  
  let link='https://image.tmdb.org/t/p/w500'
  let divs=''
  
    for(let i = 0 ; i<film[0].length;i++){
      let filmName =await convBody.results[i].original_title
      
      film_name.push(film[0][i].name||film[0][i].original_title)
      
      if(filmName==undefined){
          filmName =await convBody.results[i].title
          if(filmName==undefined){
            filmName =await convBody.results[i].name
          }
      }
      let dateName =await convBody.results[i].release_date
      let rate =Math.floor(convBody.results[i].vote_average)
      if(dateName==undefined){
          dateName =await convBody.results[i].first_air_date
      }
      let images =await convBody.results[i].poster_path
      divs +=`<div class="col-lg-4  mb-5 ">
      <div class="film bg-dark">
        <img src="${link+images}" class="rounded w-100" alt="${i}">
        <div class="layer text-center p-3">
          <h2>${filmName}</h2>
          <p class="my-4">${await convBody.results[i].overview}</p>
          <p class="my-4">rate: ${await rate}</p>
          <p class="my-4">${await dateName}</p>
        </div>
      </div>
    </div>`
      div.innerHTML=divs
    }
    
  }

  async function getFilm(x){
    let getFilm= await fetch(`https://api.themoviedb.org/3/${x}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`)
  
    convBody=await getFilm.json()
    film.push(convBody.results)
    if(film.length>1){
      film.shift()
      console.log(film)
    }
    display(convBody)
  }
  getFilm('trending/all/day')


  let e;
$('ul li').click(function(){
  e=$(this).attr('id')
  if (e=='trending'){
    e='trending/all/day'
    
  }
  getFilm(e)
})
let h =$('.p').width()
  let y =$('.x').width()
  let a =h-y
$('.p').animate({left :-a},-100)

$('.x i').click(function(){
  
  $('#icon').toggleClass('fa-times')
  let h =$('.p').width()
  let y =$('.x').width()
  let e =h-y
  let k =$('.p').css('left')
  
  if(k==0+'px'){
    $('.p').animate({left :-e},500)
    $('li').css({'margin-top':'200px'})
    
  }else{
    $('.p').animate({left :0},500)
    $('li').css({'margin-top':'10px'})
  }
})

$('.f_search').keyup(async function(){
  let word= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1&query=${sear.value}`)
  let convSearch=await word.json()
  
  film.push(convSearch.results)
    if(film.length>1){
      film.shift()
      console.log(film)
    }
    display(convSearch)
})


$('.s_search').keyup(async function(){
  let divs=''
  let link='https://image.tmdb.org/t/p/w500'
  for(let i =0;i<film_name.length;i++){
    
    if(film_name[i].toLowerCase().includes(sear_her.value.toLowerCase())){


      let filmName =await film_name[i]
      
      
      
      if(filmName==undefined){
          filmName =await convBody.results[i].title
          if(filmName==undefined){
            filmName =await convBody.results[i].name
          }
      }
      let dateName =await convBody.results[i].release_date
      let rate =Math.floor(convBody.results[i].vote_average)
      if(dateName==undefined){
          dateName =await convBody.results[i].first_air_date
      }
      let images =await convBody.results[i].poster_path
      divs +=`<div class="col-lg-4  mb-5 ">
      <div class="film bg-dark">
        <img src="${link+images}" class="rounded w-100" alt="${i}">
        <div class="layer text-center p-3">
          <h2>${filmName}</h2>
          <p class="my-4">${await convBody.results[i].overview}</p>
          <p class="my-4">rate: ${await rate}</p>
          <p class="my-4">${await dateName}</p>
        </div>
      </div>
    </div>`
      div.innerHTML=divs
    }
    }
    console.log(film)
  
    
})


$('#name').blur(function(){
  if($('#name').val()==''){
    $('#namealert').css({display:'block'})
  }else{
    $('#namealert').css({display:'none'})
    $(document).ready(function(){
      if(rePassword.value!=''||password.value!=''||age.value!=''||phone.value!=''||email.value!=''||$('#name').val()!=''){
        $(".btn").attr("disabled", false);
      }else{
        
      }
      
      console.log('ggg')
    })
  }
})
let email=document.getElementById('email')
console.log(email)

var mailformat = '';
$('#email').blur(function(){
  if(email.value.match('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$') || email.value==''){
    $('#emailalert').css({display:'block'})
  }else{
    $('#emailalert').css({display:'none'})
    $(document).ready(function(){
      if(rePassword.value!=''||password.value!=''||age.value!=''||phone.value!=''||email.value!=''||$('#name').val()!=''){
        $(".btn").attr("disabled", false);
      }else{
        
      }
      
      console.log('ggg')
    })
  }
})

let phone=document.getElementById('phone')

var phoneformat = '^[010|011|012][0-9]{8}$';
$('#phone').blur(function(){
  if(phone.value.match(phoneformat) || phone.value==''|| phone.value.length<11){
    $('#phonealert').css({display:'block'})
  }else{
    $('#phonealert').css({display:'none'})
    $(document).ready(function(){
      if(rePassword.value!=''||password.value!=''||age.value!=''||phone.value!=''||email.value!=''||$('#name').val()!=''){
        $(".btn").attr("disabled", false);
      }else{
        
      }
      
      console.log('ggg')
    })
  }
})


let age=document.getElementById('age')

var ageformat = '_[a-zA-Z0-9]+';
$('#age').blur(function(){
  
  if(age.value.match(ageformat) || age.value==''||age.value.length>2){
    $('#agealert').css({display:'block'})
  }else{
    $('#agealert').css({display:'none'})
    $(document).ready(function(){
      if(rePassword.value!=''||password.value!=''||age.value!=''||phone.value!=''||email.value!=''||$('#name').val()!=''){
        $(".btn").attr("disabled", false);
      }else{
        
      }
      
      console.log('ggg')
    })
  }
})




let password=document.getElementById('password')
$('#password').blur(function(){
  if(password.value.match(/[^a-zA-Z\d]/g) || password.value==''||password.value.length<8){
    $('#passwordalert').css({display:'block'})
  }else{
    $('#passwordalert').css({display:'none'})
    $(document).ready(function(){
      if(rePassword.value!=''||password.value!=''||age.value!=''||phone.value!=''||email.value!=''||$('#name').val()!=''){
        $(".btn").attr("disabled", false);
      }else{
        
      }
      
      console.log('ggg')
    
    })
  }
})
let rePassword=document.getElementById('rePassword')
$('#rePassword').blur(function(){
  if(rePassword.value!=password.value || rePassword.value==''){
    $('#repasswordalert').css({display:'block'})
  }else{
    $('#repasswordalert').css({display:'none'})
    $(document).ready(function(){
      if(rePassword.value!=''||password.value!=''||age.value!=''||phone.value!=''||email.value!=''||$('#name').val()!=''){
        $(".btn").attr("disabled", false);
      }else{
        
      }
      
      console.log('ggg')
    })
  }
})
let co= document.getElementsByClassName('form-control')
$(document).ready(function(){
  // if(phone.value =='01226627653'){
  //   $(".btn").attr("disabled", false);
  // }else{
    
  // }
  
  console.log('ggg')
})















