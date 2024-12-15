


var bookmark = document.getElementById("Bookmark");
var website = document.getElementById("website");



var bookmarklist=[];


if(localStorage.getItem("bookmark") !==null    ){

    bookmarklist = JSON.parse(localStorage.getItem("bookmark")  );
displayData();
    
}








function addEmail(){
if(  validationName() && validationemail() ){
    var all ={

        name:bookmark.value,
        website : website.value
    }
    bookmarklist.push(all);
    localStorage.setItem(  "bookmark"   , JSON.stringify(    bookmarklist   )  )
    
    displayData()
    
    console.log(bookmarklist);
    
    clearform();
    
}
}


function clearform(){
    bookmark.value = null;
    website.value = null;
}


function displayData(){
    var cartona = "";

    for( var i= 0   ; i < bookmarklist.length     ; i++   ){
        cartona += `
        
        <tr>
        <td> ${i+1}</td>
        <td> ${bookmarklist[i].name} </td>
        <td> <button onclick="visititem( ${i} )" type="button" class="btn btn-success"><i class="fa-solid fa-eye"></i> Visit</button></td>
        <td><button onclick="deleteitem( ${ i} )" type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i> Delete</button></td>
         </tr>      
         `   

    }
    document.getElementById("row-data").innerHTML = cartona
}

function deleteitem(index ){
    bookmarklist.splice(index , 1);
    localStorage.setItem(  "bookmark"   , JSON.stringify(    bookmarklist   )  );
    displayData();
   
}
var masName = document.getElementById("msgname")


function validationName(){
    var regax = /^[a-zA-Z][a-zA-Z0-9 ]{2,19}$/;
var term = bookmark.value;
if(regax.test(term)){
    bookmark.classList.add("is-valid")
    bookmark.classList.remove("is-invalid")
    masName.classList.add("d-none")
    return true;

}
else{

    bookmark.classList.add("is-invalid")
    bookmark.classList.remove("is-valid")
    masName.classList.remove("d-none")
    return false;

}


}

function validationemail(){
    var pattern =/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/
    var email =  website.value;
    if(pattern.test(email)){
        website.classList.add("is-valid")
        website.classList.remove("is-invalid")
        masemail.classList.add("d-none")
        return true;


    }
    else{
        
    website.classList.add("is-invalid")
    website.classList.remove("is-valid")
    masemail.classList.remove("d-none")
    return false;
    }
}


function visititem(index){
    window.open(bookmarklist[index].website, "blank")
}





