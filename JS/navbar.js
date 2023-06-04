// Adding and removing blocks when hover on links
const navCourses = document.querySelector("#nav-courses")
const navCoursesList = document.querySelector(".nav-courses-list")
// const navCoursesAll = document.querySelector('.nav-courses-all')

function AddHoveringDisplayEffectOnLinks(parent,child,display){
  parent.addEventListener('mouseenter',()=>{
    child.style.display = display;
  })
  
  parent.addEventListener('mouseleave',()=>{
    child.style.display = 'none';
  })  
}

AddHoveringDisplayEffectOnLinks(navCourses,navCoursesList,"block")


document.querySelectorAll(".nav-courses-list>li").forEach((listItem)=>{

    listItem.addEventListener('mouseenter',()=>{

        if(!listItem.getAttribute("selected") || listItem.getAttribute("selected") === "false"){
            listItem.setAttribute("selected","true")
            document.querySelector(".nav-courses-list>li[selected='true'] .nav-courses-all").style.display = "flex"
        }
        
    })
      
    listItem.addEventListener('mouseleave',()=>{
        if(listItem.getAttribute("selected") === "true"){
            document.querySelector(".nav-courses-list>li[selected='true'] .nav-courses-all").style.display = "none"
            listItem.setAttribute("selected","false")
        }
    })
    

})

// Adding effect when hovering on list items in navbar courses
// const navCoursesListItems = document.querySelectorAll(".nav-courses-list>li")

// navCoursesListItems.forEach((item)=>{
//   item.addEventListener('mouseenter',()=>{
//     item.setAttribute("selected",'true')
//   })

//   item.addEventListener('mouseleave',()=>{
//     item.setAttribute("selected",'false')
//   })
// })