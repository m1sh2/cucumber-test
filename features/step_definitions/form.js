
function Form() {
	
	// var form = document.getelementById('form');
	this.Given(/^I go to homepage$/, function(next) {
		// this.givenNumber = parseInt(number);
		this.visit('http://cucumber.test', next);
		// next();
	});
	
	// var form = document.getelementById('form');
	this.When(/^I on homepage I see the form$/, function(next) {
		// this.givenNumber = parseInt(number);
		this.visit('http://cucumber.test', next);
		// next();
	});

	this.When(/^I click on button form shoud submit$/, function (next) {
		// this.givenNumber = this.givenNumber + parseInt(number);
		next();
	});

	this.Then(/^the form should contain message$/, function (next) {
		// if (this.givenNumber != number)
			// throw(new Error("This test didn't pass, givenNumber is " + this.givenNumber + " expected 0"));
		next();
	});
}

module.exports = Form;