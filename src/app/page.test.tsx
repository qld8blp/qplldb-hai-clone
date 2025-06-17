import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const heading = screen.getByText('Thermal Spray Coatings improve our world')
    expect(heading).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Home />)
    const tagline = screen.getByText('Make it Better, Coat it™')
    expect(tagline).toBeInTheDocument()
  })
})