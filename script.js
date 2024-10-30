describe('Example To-Do App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000'); // Adjust this URL as needed
    });

    it('Checking empty table', () => {
        cy.get('tbody#output')
          .should('exist')
          .within(() => {
              cy.get('tr#loading').should('exist'); // Check for loading text
          });
    });

    it('Checking if loading text appears', () => {
        cy.get('tbody#output')
          .find('tr#loading')
          .should('contain', 'Loading...');
    });

    it('Check for promises - 1', () => {
        // Wait for promises to resolve
        cy.get('tbody#output').find('tr').should('have.length.greaterThan', 1); // Check if promises resolved
    });
});
