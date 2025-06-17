import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  it('renders the HAI logo', () => {
    render(<Header />)
    const logo = screen.getByAltText('HAI Inc.')
    expect(logo).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)
    
    // Check main navigation items
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Capabilities')).toBeInTheDocument()
    expect(screen.getByText('Quality')).toBeInTheDocument()
    expect(screen.getByText('Career')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has correct link destinations', () => {
    render(<Header />)
    
    const aboutLink = screen.getByText('About').closest('a')
    expect(aboutLink).toHaveAttribute('href', '/about')
    
    const productsLink = screen.getByText('Products').closest('a')
    expect(productsLink).toHaveAttribute('href', '/products')
  })
})