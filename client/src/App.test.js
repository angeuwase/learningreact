import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';
import App from './App';
import LandingPage from './components/LandingPage';

jest.mock('./components/LandingPage');

test("Should render HomePage on default route", () => {
  // Arrange
  LandingPage.mockImplementation(() => <div>LandingPageMock</div>);

  // Act
  render(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
  );

  // Assert
  expect(screen.getByText("LandingPageMock")).toBeInTheDocument();


});

test("Should render feedback form on surveys route", () => {
  // Arrange

  // Act
  render(
    <MemoryRouter initialEntries={['/surveys/tenantA']}>
      <App/>
    </MemoryRouter>
  );

  // Assert
  expect(screen.getByText('TenantAFormMock')).toBeInTheDocument();
});