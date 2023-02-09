// class that contains a list of dependent observers

class ObserverList {
	constructor() {
		this.observerList = [];
	}

	add(obj) {
		return this.observerList.push(obj);
	}

	count() {
		return this.observerList.length;
	}

	get(index) {
		if (index > -1 && index < this.observerList.length) {
			return this.observerList[index];
		}
	}

	indexOf(obj, startIndex) {
		let i = startIndex;

		while (i < this.observerList.length) {
			if (this.observersList[i] === obj) {
				return i;
			}
			i += 1;
		}
		return -1;
	}

	removeAt(index) {
		this.observerList.splice(index, 1);
	}
}

//subject class - ability to add, remove, and notify observers on the observer list

class Subject {
	constructor() {
		this.observers = new ObserverList();
	}
	addObserver(observer) {
		this.observers.add(observer);
	}

	removeObserver(observer) {
		this.observers.removeAt(this.observers.indexOf(observer, 0));
	}

	notify(context) {
		const observerCount = this.observers.count();
		for (let i = 0; i < observerCount; i += 1) {
			this.observers.get(i).update(context);
		}
	}
}

// skeleton for creating new observers

class Observer {
	constructor() {}
	update() {
		console.log('main button updated');
	}
}

class ConcreteObserver extends Observer {
	constructor(element) {
		super();
		this.element = element;
	}
	update(context) {
		this.element.checked = context;
		console.log('concrete buttons updated');
	}
}

//concrete subject

class ConcreteSubject extends Subject {
	constructor(element) {
		// call the super class constructor
		super();
		this.element = element;
		// override default behavior
		this.element.onclick = () => {
			this.notify(this.element.checked);
		};
	}
}

// dom element reference
const addBtn = document.getElementById('addNewObserver');
const container = document.getElementById('observersContainer');
const controlCheckbox = new ConcreteSubject(
	document.getElementById('mainCheckbox')
);

const addNewObserver = () => {
	// create a new checkbox to be added
	const check = document.createElement('input');
	check.type = 'checkbox';
	const checkObserver = new ConcreteObserver(check);

	// add new observer to the list of observers for our main subject
	controlCheckbox.addObserver(checkObserver);

	// append
	container.appendChild(check);
};

addBtn.onclick = addNewObserver;
