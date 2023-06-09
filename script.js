const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
const statistics =new Map();

statistics.set('mechanical', [[36000, 76200, 57800],[75800,284900,47500],['-8.3%', "2.0%", "10.0%"], ["194.0%","125.2%"]])
statistics.set('electrical', [[42900, 81400, 60500],[54300, 313600, 42000],["-22.3%","3.0%","7.1%"],["67.1%","108.7%"]])
statistics.set('civil', [[37100, 70400, 60500],[90500, 318300, 67000],["3.9%","7.0%","17.3%"],["56.1%","124%"]])
statistics.set('chemical', [[41000, 84400, 70400],[23200, 26900, 9800],["-25.8%","14.0%","1.0%"],["493.6%","110%"]])
statistics.set('biomedical', [[34000, 77700, 61900],[105000, 17900, 11250],["11.7%","10.0%","5.0%"],["680.4%","251.4%"]])
statistics.set('environmental', [[34900, 77500, 60500],[52100, 44000, 67000],["23.0%","4.0%","17.30%"],["77.6%","124.0%"]])
statistics.set('industrial', [[38600, 76200, 57500],[53800, 301000, 25300],["13%","10%","-2%"],["60.6%","110.5%"]])
statistics.set('materials', [[40000, 78600, 56300],["No Info", 22100, "No Info"],["No Info","6.0%","No Info"],["108.3%","No Info"]])
statistics.set('aerospace', [[40400, 97800, 60900],[40300, 58800, 36400],["No Info","6%","17.3%"],["135.9%","123.9%"]])
statistics.set('computer', [[49500, 87200, 69500],[553600, 1622200, 327500],["50.2%","25.0%","24.6%"],["24%","110%"]]) 
statistics.set('information', [[48800, 72000, 78000],[270500, 496200, 72500],["28.5%","19.0%","28.0%"],["29.9%","125.4%"]])



window.onload = sizeAdjust();
function sizeAdjust() {
  let header = document.querySelector("#trapezoid1");
  let footer = document.querySelector("#trapezoid2");
  let headerRight = document.querySelector("#headerRight");
  let banner = document.querySelector("#introBanner");
  let banner2 = document.querySelector("#aboutBanner");
  let pageTitle = document.querySelector("#pageTitle");
  let homeIcon = document.querySelector(".homeIcon");
  let electricalPage = document.querySelector(".electricalPage")


  let mechanical = document.querySelector("#mechanical")
  let electrical = document.querySelector("#electrical")
  let aerospace = document.querySelector("#aerospace")
  let biomedical = document.querySelector("#biomedical")
  let chemical = document.querySelector("#chemical")
  let civil = document.querySelector("#civil")
  let computer = document.querySelector("#computer")
  let information = document.querySelector("#information")
  let materials = document.querySelector("#materials")
  let industrial = document.querySelector("#industrial")
  let environmental = document.querySelector("#environmental")
  let others = document.querySelector("#other")
  const icon = document.querySelector(".homeIcon")

  if (mechanical != null) {
    x = statistics.get('mechanical') 
    mechanical.innerHTML = `<b>United Kingdom</b> <br> &emsp;Salary: £${x[0][0]} <br> &emsp;Total Employed: ${x[1][0]} <br> &emsp;Job Growth: ${x[2][0]} <br> <b> United States </b> <br> &emsp;Salary: £${x[0][1]} <br> &emsp;Total Employed: ${x[1][1]} <br> &emsp;Job Growth: ${x[2][1]} <br> &emsp;Replacement Rate: ${x[3][0]}<br> <b> Canada </b><br> &emsp;Salary: £${x[0][2]} <br> &emsp;Total Employed: ${x[1][2]} <br> &emsp;Job Growth: ${x[2][2]} <br> &emsp;Replacement Rate: ${x[3][1]}`
  } else if (electrical != null) {
    x = statistics.get('electrical') 
    electrical.innerHTML = `<b>United Kingdom</b> <br> &emsp;Salary: £${x[0][0]} <br> &emsp;Total Employed: ${x[1][0]} <br> &emsp;Job Growth: ${x[2][0]} <br> <b> United States </b> <br> &emsp;Salary: £${x[0][1]} <br> &emsp;Total Employed: ${x[1][1]} <br> &emsp;Job Growth: ${x[2][1]} <br> &emsp;Replacement Rate: ${x[3][0]}<br> <b> Canada </b><br> &emsp;Salary: £${x[0][2]} <br> &emsp;Total Employed: ${x[1][2]} <br> &emsp;Job Growth: ${x[2][2]} <br> &emsp;Replacement Rate: ${x[3][1]}`
  } else if (environmental != null) {
    x = statistics.get('environmental') 
    environmental.innerHTML = `<b>United Kingdom</b> <br> &emsp;Salary: £${x[0][0]} <br> &emsp;Total Employed: ${x[1][0]} <br> &emsp;Job Growth: ${x[2][0]} <br> <b> United States </b> <br> &emsp;Salary: £${x[0][1]} <br> &emsp;Total Employed: ${x[1][1]} <br> &emsp;Job Growth: ${x[2][1]} <br> &emsp;Replacement Rate: ${x[3][0]}<br> <b> Canada </b><br> &emsp;Salary: £${x[0][2]} <br> &emsp;Total Employed: ${x[1][2]} <br> &emsp;Job Growth: ${x[2][2]} <br> &emsp;Replacement Rate: ${x[3][1]}`
  } else if (aerospace != null) {
    x = statistics.get('aerospace') 
    aerospace.innerHTML = `<b>United Kingdom</b> <br> &emsp;Salary: £${x[0][0]} <br> &emsp;Total Employed: ${x[1][0]} <br> &emsp;Job Growth: ${x[2][0]} <br> <b> United States </b> <br> &emsp;Salary: £${x[0][1]} <br> &emsp;Total Employed: ${x[1][1]} <br> &emsp;Job Growth: ${x[2][1]} <br> &emsp;Replacement Rate: ${x[3][0]}<br> <b> Canada </b><br> &emsp;Salary: £${x[0][2]} <br> &emsp;Total Employed: ${x[1][2]} <br> &emsp;Job Growth: ${x[2][2]} <br> &emsp;Replacement Rate: ${x[3][1]}`
  } else if (biomedical != null) {
    x = statistics.get('biomedical') 
    biomedical.innerHTML = `<b>United Kingdom</b> <br> &emsp;Salary: £${x[0][0]} <br> &emsp;Total Employed: ${x[1][0]} <br> &emsp;Job Growth: ${x[2][0]} <br> <b> United States </b> <br> &emsp;Salary: £${x[0][1]} <br> &emsp;Total Employed: ${x[1][1]} <br> &emsp;Job Growth: ${x[2][1]} <br> &emsp;Replacement Rate: ${x[3][0]}<br> <b> Canada </b><br> &emsp;Salary: £${x[0][2]} <br> &emsp;Total Employed: ${x[1][2]} <br> &emsp;Job Growth: ${x[2][2]} <br> &emsp;Replacement Rate: ${x[3][1]}`
  } else if (chemical != null) {
    x = statistics.get('chemical') 
    chemical.innerHTML = `<b>United Kingdom</b> <br> &emsp;Salary: £${x[0][0]} <br> &emsp;Total Employed: ${x[1][0]} <br> &emsp;Job Growth: ${x[2][0]} <br> <b> United States </b> <br> &emsp;Salary: £${x[0][1]} <br> &emsp;Total Employed: ${x[1][1]} <br> &emsp;Job Growth: ${x[2][1]} <br> &emsp;Replacement Rate: ${x[3][0]}<br> <b> Canada </b><br> &emsp;Salary: £${x[0][2]} <br> &emsp;Total Employed: ${x[1][2]} <br> &emsp;Job Growth: ${x[2][2]} <br> &emsp;Replacement Rate: ${x[3][1]}`
  } else if (civil != null) {
    x = statistics.get('civil') 
    civil.innerHTML = `<b>United Kingdom</b> <br> &emsp;Salary: £${x[0][0]} <br> &emsp;Total Employed: ${x[1][0]} <br> &emsp;Job Growth: ${x[2][0]} <br> <b> United States </b> <br> &emsp;Salary: £${x[0][1]} <br> &emsp;Total Employed: ${x[1][1]} <br> &emsp;Job Growth: ${x[2][1]} <br> &emsp;Replacement Rate: ${x[3][0]}<br> <b> Canada </b><br> &emsp;Salary: £${x[0][2]} <br> &emsp;Total Employed: ${x[1][2]} <br> &emsp;Job Growth: ${x[2][2]} <br> &emsp;Replacement Rate: ${x[3][1]}`
  } else if (computer != null) {
    x = statistics.get('computer') 
    computer.innerHTML = `<b>United Kingdom</b> <br> &emsp;Salary: £${x[0][0]} <br> &emsp;Total Employed: ${x[1][0]} <br> &emsp;Job Growth: ${x[2][0]} <br> <b> United States </b> <br> &emsp;Salary: £${x[0][1]} <br> &emsp;Total Employed: ${x[1][1]} <br> &emsp;Job Growth: ${x[2][1]} <br> &emsp;Replacement Rate: ${x[3][0]}<br> <b> Canada </b><br> &emsp;Salary: £${x[0][2]} <br> &emsp;Total Employed: ${x[1][2]} <br> &emsp;Job Growth: ${x[2][2]} <br> &emsp;Replacement Rate: ${x[3][1]}`
  } else if (information != null) {
    x = statistics.get('information') 
    information.innerHTML = `<b>United Kingdom</b> <br> &emsp;Salary: £${x[0][0]} <br> &emsp;Total Employed: ${x[1][0]} <br> &emsp;Job Growth: ${x[2][0]} <br> <b> United States </b> <br> &emsp;Salary: £${x[0][1]} <br> &emsp;Total Employed: ${x[1][1]} <br> &emsp;Job Growth: ${x[2][1]} <br> &emsp;Replacement Rate: ${x[3][0]}<br> <b> Canada </b><br> &emsp;Salary: £${x[0][2]} <br> &emsp;Total Employed: ${x[1][2]} <br> &emsp;Job Growth: ${x[2][2]} <br> &emsp;Replacement Rate: ${x[3][1]}`
  } else if (materials != null) {
    x = statistics.get('materials') 
    materials.innerHTML = `<b>United Kingdom</b> <br> &emsp;Salary: £${x[0][0]} <br> &emsp;Total Employed: ${x[1][0]} <br> &emsp;Job Growth: ${x[2][0]} <br> <b> United States </b> <br> &emsp;Salary: £${x[0][1]} <br> &emsp;Total Employed: ${x[1][1]} <br> &emsp;Job Growth: ${x[2][1]} <br> &emsp;Replacement Rate: ${x[3][0]}<br> <b> Canada </b><br> &emsp;Salary: £${x[0][2]} <br> &emsp;Total Employed: ${x[1][2]} <br> &emsp;Job Growth: ${x[2][2]} <br> &emsp;Replacement Rate: ${x[3][1]}`
  } else if (industrial != null) {
    x = statistics.get('industrial') 
    industrial.innerHTML = `<b>United Kingdom</b> <br> &emsp;Salary: £${x[0][0]} <br> &emsp;Total Employed: ${x[1][0]} <br> &emsp;Job Growth: ${x[2][0]} <br> <b> United States </b> <br> &emsp;Salary: £${x[0][1]} <br> &emsp;Total Employed: ${x[1][1]} <br> &emsp;Job Growth: ${x[2][1]} <br> &emsp;Replacement Rate: ${x[3][0]}<br> <b> Canada </b><br> &emsp;Salary: £${x[0][2]} <br> &emsp;Total Employed: ${x[1][2]} <br> &emsp;Job Growth: ${x[2][2]} <br> &emsp;Replacement Rate: ${x[3][1]}`
  }
  


  if (homeIcon != null) {
    footer.style.marginTop = "300px";
  }

  if (electricalPage != null) {
    pageTitle.style.color = "black"
  }

  document.querySelectorAll(".homeIcon").forEach((button) => {
    const homeButton = button
    const temp = homeButton.firstElementChild
    const svg = temp.firstElementChild
    console.log(svg);
    button.addEventListener("mouseenter", ()  => {
      svg.style.setProperty("fill", "white", "important");
    })
    button.addEventListener("mouseleave", ( )=> {
      svg.style.fill = "black";
    })
  })

  /* Collapsible Menu */
  document.querySelectorAll(".menuButton").forEach((button) => {
    button.addEventListener("click", () => {
      const menuContent = button.nextElementSibling;

      button.classList.toggle("menuButton--active");

      if (button.classList.contains("menuButton--active")) {
        menuContent.style.marginBottom = "50px";
        menuContent.style.maxHeight = menuContent.scrollHeight + "px";
      } else {
        menuContent.style.maxHeight = 0;
        menuContent.style.marginBottom = "20px";
      }
    });
  });
}
function openCompare() {
  const compareContent = document.querySelector("#compareContent1")
  const compareBox = document.querySelector("#compareBox1")

  compareBox.classList.toggle("compareBox--active")
  compareContent.classList.toggle("compareContent--active")
  if (compareContent.classList.contains("compareContent--active")) {
    compareContent.style.marginBottom = "50px";
    compareContent.style.maxHeight = compareContent.scrollHeight + "px";
  } else {
    compareContent.style.maxHeight = 0;
    compareContent.style.marginBottom = "20px";
  }
}

function openCompare2() {
  const compareContent = document.querySelector("#compareContent2")
  const compareBox = document.querySelector("#compareRight")

  compareBox.classList.toggle("compareBox--active")
  compareContent.classList.toggle("compareContent--active")
  if (compareContent.classList.contains("compareContent--active")) {
    compareContent.style.marginBottom = "50px";
    compareContent.style.maxHeight = compareContent.scrollHeight + "px";
  } else {
    compareContent.style.maxHeight = 0;
    compareContent.style.marginBottom = "20px";
  }
}

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1)
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


document.querySelectorAll(".compareButton").forEach((button) => {
  button.addEventListener("click", () => {
    let id = event.srcElement.id;
    let path = id.slice(id.length - 1, id.length)
    let degree = id.slice(0,-1)
    var y = 0
    let compareContent = document.querySelector(".compareContent")
    let compareBox = document.querySelector(".compareBox")
    switch (degree) {
      case "chemical": 
        y = statistics.get('chemical') 
        break;
      case "mechanical": 
        y = statistics.get('mechanical') 
        break
      case "aerospace": 
        y = statistics.get('aerospace');
        break
      case "electrical": 
        y = statistics.get('electrical');
        break
      case "material": 
        y = statistics.get('materials');
        break
      case "civil": 
        y = statistics.get('civil');
        break
      case "industrial": 
        y = statistics.get('industrial');
        break
      case "software": 
        y = statistics.get('computer');
        break
      case "information": 
        y = statistics.get('information');
        break
      case "biomedical": 
        y = statistics.get('biomedical');
        break
      case "environmental": 
        y = statistics.get('environmental');
        break
    } 
    capitalDegree = capitalize(degree)
    if (path == "1") {
      selection = document.getElementById("compareText1")
      compareContent = document.getElementById("compareContent1")

      path = "left"
      salary = document.getElementById('salary1')
      employ = document.getElementById('employ1')
      jobgrowth = document.getElementById('jobgrowth1')
      replacement = document.getElementById('replacement1')

      selection.innerHTML = `${capitalDegree}`
      salary.innerHTML = `UK: £${y[0][0]}<br> US: £${y[0][1]} <br>Canada: £${y[0][2]}`
      employ.innerHTML = `UK: ${numberWithCommas(y[1][0])} people <br> US: ${numberWithCommas(y[1][1])} people <br>Canada: ${numberWithCommas(y[1][2])} people`
      jobgrowth.innerHTML = `UK: ${y[2][0]}<br> US: ${y[2][1]}<br>Canada:${y[2][2]}`
      replacement.innerHTML = `UK: No Info<br> US: ${y[3][0]}<br>Canada: ${y[3][1]}`

    } else {
      selection = document.getElementById("compareText2")
      compareContent = document.getElementById("compareContent2")

      path = "right"
      salary = document.getElementById('salary2')
      employ = document.getElementById('employ2')
      jobgrowth = document.getElementById('jobgrowth2')
      replacement = document.getElementById('replacement2')

      selection.innerHTML = `${capitalDegree}`
      salary.innerHTML = `UK: £${y[0][0]}<br> US: £${y[0][1]} <br>Canada: £${y[0][2]}`
      employ.innerHTML = `UK: ${numberWithCommas(y[1][0])} people <br> US: ${numberWithCommas(y[1][1])} people <br>Canada: ${numberWithCommas(y[1][2])} people`
      jobgrowth.innerHTML = `UK: ${y[2][0]}<br> US: ${y[2][1]}<br>Canada:${y[2][2]}`
      replacement.innerHTML = `UK: No Info<br> US: ${y[3][0]}<br>Canada: ${y[3][1]}`
    }

  
    compareBox.classList.toggle("compareBox--active")
    compareContent.classList.toggle("compareContent--active")

    compareContent.style.maxHeight = 0;
    compareContent.style.marginBottom = "20px";
  })
})



