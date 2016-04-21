@form
Feature: This is the form check feature
	
	@form_exist
	Scenario: test form exist
		Given form is exist
		When I click on button form shoud submit
		Then the form should contain message