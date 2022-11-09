
// fetch ('https://fakestoreapi.com/products').then((data)=>{
//     return data.json()
// }).then((ObjectData)=>{
//     console.log(ObjectData[0].title)

//     let tabledata='';

//     ObjectData.map((value)=>{

//        tabledata +=`<tr>
//        <td>${value.title}</td>
//          <td>${value.description}</td>
//          <td>${value.price}</td>
//          <td><img src="${value.image}"> </img></td>
//      </tr>`

//     })
//     document.getElementById('table_body').innerHTML=tabledata
  
// })
 





let array = [{value:false}]
   function getVal(){
 fetch ('https://fakestoreapi.com/products').then((data)=>{
        return data.json();
    }).then((ObjectData)=>{
 if(array[0].value === false){

    array.push(ObjectData)
    array[0].value = true
  }
    })
}
 function getVal2(){
let tabledata='';
    array[1].map((value)=>{
        tabledata+=`<tr>
                        <td>${value.title}</td>
                          <td>${value.description}</td>
                          <td>${value.price}</td>
                          <td ><img onclick="preview(this.id)" id=${value.id} src="${value.image}"> </img></td>
                      </tr>`
    })
 document.getElementById('table_body').innerHTML=tabledata
console.log(array)
}
const preview=(id)=>{
    localStorage.setItem('id', id)
    console.log("preview is working",id)
    window.location = '/index1.html'
   
    console.log("_____/\____",  singleProduct)

}
const getSingle = async()=>{

  await fetch ('https://fakestoreapi.com/products').then((data)=>{
        return data.json();
    }).then((ObjectData)=>{
 if(array[0].value === false){

    array.push(ObjectData)
    array[0].value = true
  }
    })

    console.log('------',array)
    let itemId = localStorage.getItem('id')
    let singleProduct  = array[1].find((a)=> a.id == itemId)
    console.log(singleProduct)
    document.getElementById("table_body").innerHTML += `<tr>
    <td>${singleProduct.title}</td>
    <td>${singleProduct.description}</td>
    <td>${singleProduct.price}</td>
    <td><img src="${singleProduct.image}"</img></td>
    </tr>`
}


// .then((ObjectData)=>{
//     let tabledata='';

//     console.log(ObjectData);
    
//     ObjectData.map((value)=>{

//         tabledata+=`<tr>
//                <td>${value.title}</td>
//                  <td>${value.description}</td>
//                  <td>${value.price}</td>
//                  <td><img src="${value.image}"> </img></td>
//              </tr>`
//     })
    
//     document.getElementById('table_body').innerHTML=tabledata;
// })



// function getVal(){
   
//     let tabledata='';
//   fetch('https://fakestoreapi.com/products').then((data)=>{
//   return data.json();
//   }).then((objecdata)=>{
//     objecdata.map((value)=>{
//         tabledata+=`<tr>
        
//                         <td>${value.title}</td>
//                           <td>${value.description}</td>
//                           <td>${value.price}</td>
//                           <td onclick="preview(${value.id})"><img src="${value.image}"> </img></td>
//                       </tr>`
//     })
//     document.getElementById('table_body').innerHTML=tabledata
//   

// }



// let a=[];
// fetch('https://fakestoreapi.com/products').then((data)=>{
//     return data.json();

// }).then((objectdat)=>{
//     a.push(objectdat);
    
// })
// function getdat(){
//     a.map((data)=>{
//     console.log(`${data.price}`)
//     })
// }
