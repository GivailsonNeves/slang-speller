import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import Modal from './Modal';
import i18n from '../../translations/i18n';

test('render content', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <Modal open={true}><p>Modal content</p></Modal>
    </I18nextProvider>
  );
  const linkElement = screen.getByText(/Modal content/i);
  expect(linkElement).toBeInTheDocument();
});
