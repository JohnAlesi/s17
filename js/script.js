

let tuitt = [
		"Charles", "Paul", "Sef", "Alex"]

function addName(name, tuitt){
	if (tuitt.indexOf(name)==-1) {
		tuitt.push(name)
		console.log(name + " successfully added");
	}
	else  {
		console.log("Already Exist")
	}
}



