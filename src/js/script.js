const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
	burgerMenu.addEventListener("click", () => {
		burgerMenu.classList.toggle("is-active");
		navbarMenu.classList.toggle("is-active");
	});
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
	link.addEventListener("click", () => {
		burgerMenu.classList.remove("is-active");
		navbarMenu.classList.remove("is-active");
	});
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
	if (this.scrollY >= 85) {
		headerMenu.classList.add("on-scroll");
	} else {
		headerMenu.classList.remove("on-scroll");
	}
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
	if (window.innerWidth > 768) {
		if (navbarMenu.classList.contains("is-active")) {
			navbarMenu.classList.remove("is-active");
		}
	}
});

// Massive
let active_cards = [];
let arr = [
	{ filename: "AVTORITET.jpg", title: "АВТОРИТЕТ" },
	{ filename: "AMBISTII.jpg", title: "АМБИЦИИ" },
	{ filename: "BEZOPASNOST.jpeg", title: "БЕЗОПАСНОСТЬ" },
	{ filename: "BOGATSTVO.jpg", title: "БОГАТСТВО" },
	{ filename: "DISCIPLINA.jpg", title: "ДИСЦИПЛИНА" },
	{ filename: "DOVЕRIYE.jpg", title: "ДОВЕРИЕ" },
	{ filename: "DRUJBA.jpg", title: "ДРУЖБА" },
	{ filename: "DUXOVNOST.jpg", title: "ДУХОВНОСТЬ" },
	{ filename: "FINANSOVAYA STABILNOST.jpg", title: "ФИНАНСОВАЯ СТАБИЛЬНОСТЬ" },
	{ filename: "GARANTIYA ZANYATOSTI.jpg", title: "ГАРАНТИЯ ЗАНЯТОСТИ" },
	{ filename: "GOTOVNOST POMOCH.jpg", title: "ГОТОВНОСТЬ ПОМОЧЬ" },
	{ filename: "INTЕLLЕKT.jpg", title: "ИНТЕЛЛЕКТ" },
	{ filename: "IZVЕSTNOST.jpg", title: "ИЗВЕСТНОСТЬ" },
	{ filename: "KOMANDNAYA RABOTA.jpg", title: "КОМАНДНАЯ РАБОТА" },
	{ filename: "KOMPЕTЕNTNOST.jpg", title: "КОМПЕТЕНТНОСТЬ" },
	{ filename: "KONTROL.png", title: "КОНТРОЛЬ" },
	{ filename: "KONFIDENSIALNOST.jpg", title: "КОНФИДЕНЦИАЛЬНОСТЬ" },
	{ filename: "KRASOTA.jpg", title: "КРАСОТА" },
	{ filename: "KRЕATIVNOST.jpg", title: "КРЕАТИВНОСТЬ" },
	{ filename: "LOYALNOST.jpg", title: "ЛОЯЛЬНОСТЬ" },
	{ filename: "LYUBOV.jpg", title: "ЛЮБОВЬ" },
	{ filename: "LYUBOPITSTVO.jpg", title: "ЛЮБОПЫТСТВО" },
	{ filename: "MIR.jpg", title: "МИР" },
	{ filename: "MUDROST.jpg", title: "МУДРОСТЬ" },
	{ filename: "NЕZAVISIMOST.jpg", title: "НЕЗАВИСИМОСТЬ" },
	{ filename: "OPRЕDЕLЕNNOST.jpg", title: "ОПРЕДЕЛЕННОСТЬ" },
	{ filename: "OPRЕDЕLЕNIYE.jpg", title: "ОПРЕДЕЛЕНИЕ" },
	{ filename: "OTVЕTSTVЕNNOST.jpg", title: "ОТВЕТСТВЕННОСТЬ" },
	{ filename: "PODLINNOST.jpg", title: "ПОДЛИННОСТЬ" },
	{ filename: "POPULYARNOST.jpg", title: "ПОПУЛЯРНОСТЬ" },
	{ filename: "PRIVЕRJЕNNOST.jpg", title: "ПРИВЕРЖЕННОСТЬ" },
	{ filename: "PRIZNATЕLNOST.jpg", title: "ПРИЗНАТЕЛЬНОСТЬ" },
	{ filename: "PRIKLYUCHЕNIYA.jpg", title: "ПРИКЛЮЧЕНИЯ" },
	{ filename: "PRINYATIYE.jpg", title: "ПРИНЯТИЕ" },
	{ filename: "PROSHЕNIYE.jpg", title: "ПРОЩЕНИЕ" },
	{ filename: "RAVЕNSTVO.jpg", title: "РАВЕНСТВО" },
	{ filename: "RAZNOOBRAZIYE.jpg", title: "РАЗНООБРАЗИЕ" },
	{ filename: "RЕLIGIYA.jpg", title: "РЕЛИГИЯ" },
	{ filename: "RЕPUTATSIYA.jpg", title: "РЕПУТАЦИЯ" },
	{ filename: "ROST.jpg", title: "РОСТ" },
	{ filename: "SЕMYA.jpg", title: "СЕМЬЯ" },
	{ filename: "SMЕLOST.jpg", title: "СМЕЛОСТЬ" },
	{ filename: "SOVЕRSHЕNSTVO.jpg", title: "СОВЕРШЕНСТВО" },
	{ filename: "SOSTRADANIYE.jpg", title: "СОСТРАДАНИЕ" },
	{ filename: "SPRAVЕDLIVOST.jpg", title: "СПРАВЕДЛИВОСТЬ" },
	{ filename: "STRAST.jpg", title: "СТРАСТЬ" },
	{ filename: "SVOBODA.jpg", title: "СВОБОДА" },
	{ filename: "TOLЕRANTNOST.jpg", title: "ТОЛЕРАНТНОСТЬ" },
	{ filename: "TRADITSII.jpg", title: "ТРАДИЦИИ" },
	{ filename: "UVAJЕNIYE.jpg", title: "УВАЖЕНИЕ" },
	{ filename: "UDOVOLSTVIYE.jpg", title: "УДОВОЛЬСТВИЕ" },
	{ filename: "UNIKALNOST.jpg", title: "УНИКАЛЬНОСТЬ" },
	{ filename: "UVЕRЕNNOST.jpg", title: "УВЕРЕННОСТЬ" },
	{ filename: "USPЕX.jpg", title: "УСПЕХ" },
	// { filename: "FINANSOVAYA STABILNOST.jpg", title: "ФИНАНСОВАЯ СТАБИЛЬНОСТЬ" },
	{ filename: "CHЕSTNOSTi.jpg", title: "ЧЕСТНОСТЬ" },
	{ filename: "ETIKA.jpg", title: "ЭТИКА" },
	{ filename: "ZDRAVOOXRANЕNIYE.jpg", title: "ЗДРАВООХРАНЕНИЕ" },
	{ filename: "ZNACHIMAYA RABOTA.jpg", title: "ЗНАЧИМАЯ РАБОТА" },
	{ filename: "ZDRAVOOXRANЕNIYE.jpg", title: "ЗДРАВООХРАНЕНИЕ" },
];
let step = 1;
let data = "";
for (let index = 0; index < arr.length; index++) {
	const element = arr[index];
	data += `
			<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 d-flex mb-5 justify-content-center">
				<div class="content_card justify-content-center" id="${element.filename}" style="display: flex; align-items: center; justify-content: center;" data-tilt>
       			<span>
            		<h1>${element.title}</h1>
        		</span>
   		 	</div>
			</div>
    `;
}

document.querySelector(".card1").innerHTML = data;

/// Active counter and Select 10 or more

let activeCount = 0;

function updateSelectedValue() {
	document.getElementById("selectedValue").innerText = activeCount;
	if(step==1){
		if (activeCount >= 10 ) {
			document.getElementById("selectButton").innerText = "Continue";
		} else {
			document.getElementById("selectButton").innerText = "Select 10 or more";
		}
	}
	if(step==2){
		if (activeCount >= 3 ) {
			document.getElementById("selectButton").innerText = "Continue";
		} else {
			document.getElementById("selectButton").innerText = "Select 3 or more";
		}
	}
	if(step==3){
		if (activeCount == 3 ) {
			document.getElementById("selectButton").innerText = "Continue";
		} else {
			document.getElementById("selectButton").innerText = "Select 3";
		}
	}
}

// Add toggle active class
document.querySelectorAll(".content_card").forEach((card) => {
	card.addEventListener("click", () => {
		card.classList.toggle("active");
		if (card.classList.contains("active")) {
			activeCount++;
		} else {
			activeCount--;
		}
		updateSelectedValue();
	});
});

// Select Unselect all Buttons
const selectAllBtn = document.getElementById("selectAllBtn");
const unselectAllBtn = document.getElementById("unselectAllBtn");

selectAllBtn.addEventListener("click", () => {
	const cardElements = document.querySelectorAll(".content_card");
	cardElements.forEach((cardElement) => {
		cardElement.classList.add("active");
		activeCount = cardElements.length;
		updateSelectedValue();
	});
});

unselectAllBtn.addEventListener("click", () => {
	const cardElements = document.querySelectorAll(".content_card");
	cardElements.forEach((cardElement) => {
		cardElement.classList.remove("active");
		activeCount = 0;
		updateSelectedValue();
	});
});

// Set background image for each .content_card
const cardElements = document.querySelectorAll(".content_card");
cardElements.forEach((cardElement, index) => {
	const filename = arr[index].filename;
	cardElement.style.backgroundImage = `url('src/img/${filename}')`;
});

$(document).ready(function () {
	$(document).on("click","#selectButton",function(){
		if(step==1){
			if($( ".active" ).length>=10){
				$( ".content_card" ).each(function( index ) {
					// console.log( index + ": " + $( this ).text() );
					let closest_div = $(this).closest("div");
					if($(this).attr("class").split(" ")[2]==undefined){
						closest_div.remove();
						console.log("YES");
					}
				});
				$( ".content_card" ).removeClass("active");
				step=2;
				activeCount=0;
				updateSelectedValue();
			}
		}
		if(step==2){
			if($( ".active" ).length>=3){
				$( ".content_card" ).each(function( index ) {
					// console.log( index + ": " + $( this ).text() );
					let closest_div = $(this).closest("div");
					if($(this).attr("class").split(" ")[2]==undefined){
						closest_div.remove();
					}
				});
				$( ".content_card" ).removeClass("active");
				step=3;
				activeCount=0;
				updateSelectedValue();
			}
		}
		
	})
});
