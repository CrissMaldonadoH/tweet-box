const input = document.querySelector('.tweet');
		const btn = document.querySelector('.btn');
		const counter = document.querySelector('.counter');
		const progress = document.querySelector('.progress');

		 document.addEventListener('DOMContentLoaded', () =>{
		 	btn.disabled = true;
		 	btn.style.backgroundColor = "#8acdfb";
		 	counter.textContent = "0"
		 });

		input.addEventListener('input', () =>{
			let content = input.textContent;
			counter.textContent = content.length;

			progress.style.background= `
				conic-gradient(
				#1d9bf0 ${content.length * 0.357}%,
				#d9d9d9 ${content.length * 0.357}%
				)
			`;

			if(!content.length){
				btn.disabled = true;
				btn.style.backgroundColor = "#8acdfb";
				btn.style.cursor = "none";
				counter.style.color = "#1d9bf0";
			}else if(content.length > 280){
				btn.disabled = true;
				btn.style.backgroundColor = "#8acdfb";
				btn.style.cursor = "none"
				counter.textContent = 280 - content.length ;
				progress.style.background = "red";
				counter.style.color = "red";
				input.style.color = "red";
			}else{
				btn.disabled = false
				btn.style.backgroundColor = "#1d9bf0";
				btn.style.cursor = "pointer";
				counter.style.color = "#1d9bf0";
				input.style.color = "#000";
			}

			
		})