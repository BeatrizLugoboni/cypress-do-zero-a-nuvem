Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
	firstName: 'Igor',
	lastName: 'Silva',
	email: 'igor@teste.com',
	openTextArea: 'Teste do Igor'
}) => {
	cy.get('#firstName').type(data.firstName)
	cy.get('#lastName').type(data.lastName)
	cy.get('#email').type(data.email)
	cy.get('#open-text-area').type(data.openTextArea)
	cy.contains('button', 'Enviar').click()
})