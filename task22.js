

  function calculate() {
    var sp = document.getElementById("sp").value;
    var cp = document.getElementById("cp").value;
   
    
  if (sp > cp){
        profit = sp-cp;
        margin = ((sp-cp)/(sp)*100).toFixed(1);
        document.getElementById("pr").innerHTML = "Profit "  + "<br>" + "&#x20b9;"+ "&#160;" + profit + " "; 
        document.getElementById("mr").innerHTML = "Margin " + "<br>" + margin + " " +  "%";
    }
    else {
        profit = sp - cp;
        margin = ((sp-cp)/(sp)*100).toFixed(1);
        document.getElementById("pr").innerHTML = "Profit " + "<br>" + "&#x20b9;" + "&#160;" + profit + ""; 
        document.getElementById("mr").innerHTML = "Margin " + "<br>" +  margin + " " + "%";
    }
}
 /*-----------------------------------------margin price calculate---------------------------------------------*/


let searchKeyword = "";
let options = [
  { value: "Amol", label: "The Quick" },
  { value: "Chan", label: "Brown Fox" },
  { value: "Bite", label: "Jumps Over" },
  { value: "God", label: "The lazy dog" }
]; 


function search(value) { searchKeyword = value; loadOptions();}

function loadOptions() {
  let dropdownElement = document.querySelector("#autoComplete #dropdown");
  dropdownElement.innerHTML = "";

  let filteredOptions = searchKeyword == "" ? options : options.filter((option) => 
  option.label.toLowerCase().includes(searchKeyword.toLowerCase()));

    filteredOptions.forEach((option) => {
    let optionElement = document.createElement("div");

    optionElement.classList.add("option");

    optionElement.innerHTML = option.label;
    
    optionElement.addEventListener("click", (event) => { hideDropdown();

      let selectedValue = event.target.innerHTML;
      document.querySelector("#autoComplete input").value = selectedValue;
    })
    dropdownElement.appendChild(optionElement);
  })
}
loadOptions();
document.querySelector("#autoComplete input").addEventListener("click", (event) => 
{
  event.stopPropagation();
  showDropdown();

});
function showDropdown() {
  let dropdownElement = document.querySelector("#autoComplete #dropdown");
  dropdownElement.classList.add("active");
}
function hideDropdown() {
  let dropdownElement = document.querySelector("#autoComplete #dropdown");
  dropdownElement.classList.remove("active");
  
}
loadOptions();
document.querySelector("#autoComplete input").addEventListener("onclick", (event) => 
{
  event.stopPropagation();
  hideDropdown();
});

document.addEventListener("click", function handleClickOutsideBox(event) {
  document.getElementById("dropdown").classList.remove("active");
    const autoComplete = document.getElementById("#dropdown");
    
  });

  function newE() {
    var g = document.getElementById("rajal");
    if (g.style.display == "none") {
      g.style.display = "none";
    } else {
      g.style.display = "block";
    }
  }
  function change() {
    var g = document.getElementById("rajal");
    if (g.style.display == "none") {
      g.style.display = "none";
    } else {
      g.style.display = "none";
    }
  }
/*-------------------------------------vendor dropdown------------------------------------*/
/*---------------------------------------tag  downword--------------*/

function myFunction() {
  document.getElementById("dropdown22").classList.toggle("show");
}
function filterFunction() {
  var input, filter, ul, li, label, i;
  input = document.getElementById("rocky");
  filter = input.value.toUpperCase();
  div = document.getElementById("dropdown22");
  label = div.getElementsByTagName("label");
  for (i = 0; i < label.length; i++) {
    txtValue = label [i].textContent || label[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      label[i].style.display = "";
    } else {
      label[i].style.display = "none";
    }
  }
}
/*--------------------------------dropdown ^ -------------------------*/
window.onclick = function(event) {
  if (!event.target.matches('.dropinput')) {
    var dropdowns = document.getElementsByClassName("MYdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/*--------------------------------remove tag -------------------------*/
const colors = [
    {
      font: 'black',
      background: 'lightgray'
    },
  ]
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  const removeTag = (event) => {
    if (event.target.classList.contains('tag-close')) {
      event.target.parentElement.remove();
    }
  }
  const addTag = (event) => {
    if (event.keyCode === 13) {
      const input = document.getElementById('input')
      const tagsContainer = document.querySelector('.tag-container');
      const color = getRandomColor();
      const value = event.target.value;
      const spanElement = document.createElement('span');
      spanElement.innerHTML = `
        <span class="tag-text">${value}</span>
        <span class="tag-close">&times;</span>
      `
      spanElement.classList.add('tag');
      spanElement.style.backgroundColor = color.background;
      spanElement.style.color = color.font;
      tagsContainer.appendChild(spanElement);
      input.value = '';
    }
  }
  window.onload = () => {
    const tagsContainer = document.querySelector('.tag-container');
    tagsContainer.addEventListener('click', removeTag);
  }

/*----------------------------checkbox add & remove tags---- -------------------------*/

var tag = [];
  var section = document.getElementsByTagName('section')[0];
  var inpu = document.querySelectorAll('#autocompletebox1 .checkbox');
  function updateCheckboxStatus(element) {
    if(element.checked){
      tag.push(element.value)
    }else{
      tag.splice(tag.indexOf(element.value), 1);
    }
    displayTags();
  }
    function displayTags () {
      section.innerHTML = ""
      tag.forEach( function (val) {
        section.innerHTML += 
        "<span onclick='myDelete(this)'>" + 
        "<span>" + 
        val + 
        "</span>" + 
        "<span class='close_list hide'>&times;</span>" + 
        "</span>";
      })
    }
   function myDelete(index){
    var span = index;
    span.remove(span.selectedIndex);
    tag.splice(tag.indexOf(index.firstChild.innerText), 1);
    console.log(index.firstChild.innerText, tag);
    check();
  }
  function check(){
    console.log(inpu);
    inpu.forEach(function check1(value){
      if(tag.includes(value.value)){
      value.checked=true;
      }else{
        value.checked=false;
      }
      });
  }



/*---------------------------create tag --------------------------------*/

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("span");
  var inputValue = document.getElementById("rocky").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("paragraph").appendChild(li);
  }
  document.getElementById("rocky").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}







