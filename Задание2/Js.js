const Student={
	Name:[
		['Алексей'], 
		['Дмитрий'],
		['Наталья'],
		['Максим'],
		['Елена'],
	],
	SurName:[
		['Кот'], 
		['Переходько'],
		['Латышевич'],
		['Кононович'],
		['Редько'],
	],
	Age:[
		[18], 
		[17],
		[19],
		[20],
	],
	Mark:[
		[8], 
		[7],
		[6],
		[10],
	],
}
for(key in Student){
	let row = document.createElement('tr')
	row.innerHTML=`<th>${key}</th>`
	document.querySelector('.content').appendChild(row)
	for(let i = 0; i < Student[key].length; i++){
		let row1 = document.createElement('td')
		row1.innerHTML=`<td>${Student[key][i]}</td>`
		document.querySelector('.content').appendChild(row1)
	}
}

let tr = document.getElementsByTagName('tr');
let summ = 0;
for (let i=0;i<tr.length;i++){
	let td = tr[i].getElementsByTagName('td');

	for (let z=0;z<td.length;z++){
		if (z+1 < td.length) {
			if (td[z + 1].innerText) {
				summ += td[z].innerText;
			}
		}
	}
}
console.log(summ);

