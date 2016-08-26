var test = {
	createDiv: function (parent, className, text) {
		var valParent = document.getElementsByClassName(parent)[0];
		var newDiv = document.createElement('div');
		newDiv.className = className;
		valParent.appendChild(newDiv);
		newDiv.innerHTML = text;
	}
	, createOl: function (parent, className) {
		var valParent = document.getElementsByClassName(parent)[0];
		var newOl = document.createElement('ol');
		newOl.className = className;
		valParent.appendChild(newOl);
	}
	, createLiForm: function (parent, className, text) {
		var valParent = document.getElementsByClassName(parent)[0];
		var newLi = document.createElement('li');
		newLi.innerHTML = text;
		valParent.appendChild(newLi);
		var newForm = document.createElement('form');
		newForm.className = className;
		newLi.appendChild(newForm);
	}
	, createInput: function (parent, label) {
		var valParent = document.getElementsByClassName(parent)[0];
		var newLabel = document.createElement('label');
		valParent.appendChild(newLabel);
		newLabel.innerHTML = label;
		var newInput = document.createElement('input');
		newLabel.insertBefore(newInput, newLabel.firstChild);
		newInput.setAttribute('type', 'checkbox');
	}
	, createButton: function (parent, value) {
		var valParent = document.getElementsByClassName(parent)[0];
		var newForm = document.createElement('form');
		valParent.appendChild(newForm);
		var newButton = document.createElement('button');
		//      var t=document.createTextNode(value);
		newButton.appendChild(document.createTextNode(value));
		newButton.setAttribute('type', 'submit');
		newForm.appendChild(newButton);
	}
};
test.createDiv('body', 'wrapper', '');
test.createDiv('wrapper', 'caption', 'Тест по программированию');
test.createDiv('wrapper', 'box', '');
test.createOl('box', 'ol');
var array = {
	'form1': ['Вопрос №1'
  , 'вариант ответа №1'
  , 'вариант ответа №2'
  , 'вариант ответа №3']
	, 'form2': ['Вопрос №2'
  , 'вариант ответа №1'
  , 'вариант ответа №2'
  , 'вариант ответа №3']
	, 'form3': ['Вопрос №3'
  , 'вариант ответа №1'
  , 'вариант ответа №2'
  , 'вариант ответа №3']
};
for (key in array) {
	test.createLiForm('ol', key, array[key][0]);
	for (var i = 1; i < array[key].length; i++) {
		test.createInput(key, array[key][i]);
	}
}
test.createDiv('wrapper', 'divButton', '');
test.createButton('divButton', ' Проверить мои результаты ');
console.log(document.documentElement);