// test file
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Accordion from './Accordion';

describe('Accordion', () => {

  const renderAccordion = (props = {}) => {
    return render(
      <Accordion {...props} />  
    );
  };

  it('renders properly with no headers', () => {
  
    renderAccordion({ headers: [] });

    expect(screen.queryByText(/header/i)).not.toBeInTheDocument();

  });

  it('renders properly with headers', () => {

    const headers = ['Header 1', 'Header 2'];
    renderAccordion({ headers });

    expect(screen.getByText('Header 1')).toBeInTheDocument();

  });
  
  it('renders properly with no default content', () => {

    const headers = ['Header 1'];  
    const defaultContent = '';
    
    renderAccordion({ headers, defaultContent });  

    fireEvent.click(screen.getByText('Header 1'));
      
    expect(screen.queryByText('Header 1 - Sample Content')).not.toBeInTheDocument();

  });

  // Rest of tests...
  it('renders properly with multiple headers and default content', () => {
    const headers = ['Header 1', 'Header 2', 'Header 3'];
    const defaultContent = 'Default Content';
    
    renderAccordion({ headers, defaultContent });
  
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  
    fireEvent.click(screen.getByText('Header 1'));
    expect(screen.getByText('Header 1 - Default Content')).toBeInTheDocument();
  });

  it('renders properly with no headers and default content', () => {
    const headers = [];
    const defaultContent = 'Default Content';
    
    renderAccordion({ headers, defaultContent });
  
    expect(screen.queryByText(/header/i)).not.toBeInTheDocument();
    expect(screen.getByText('Default Content')).toBeInTheDocument();
  });


  it('renders properly with empty strings as headers', () => {
    const headers = ['', '', ''];
    const defaultContent = 'Default Content';
    
    renderAccordion({ headers, defaultContent });
  
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  
    fireEvent.click(screen.getByText(''));
    expect(screen.getByText(' - Default Content')).toBeInTheDocument();
  });
  
});