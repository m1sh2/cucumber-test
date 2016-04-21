
@basic
Feature: This is an example feature
	In order to learn Cucumber
	As a developer
	I want to make this feature pass

	@basic_start
	Scenario: wrote my first scenario
		Given a variable set to 1
		When I increment the variable by 2
		Then the variable should contain 3