require('@testing-library/jest-dom')
const { screen, getByText } = require('@testing-library/dom')
const { moduleProject3 } = require('./frontend/index')

jest.useFakeTimers()

beforeEach(() => {
  document.querySelector('body').innerHTML = `
<header>
  <h1>Sprint 5 Module 3 Project</h1>
  <h2>Components</h2>
  <p class="info">Click on a Learner to see more info...</p>
</header>
<section>
</section>
`
  moduleProject3()
})

describe('Sprint 5 Module 3', () => {
  describe('buildNav component', () => {
    let data = [
      { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
      { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
      { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
      { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
      { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
    ]
    test('The nav contains the correct number of anchor tags', () => {
      expect(document.querySelectorAll('nav a')).toHaveLength(data.length)
    })
    test('The anchor tags contain the correct visible text', () => {
      data.forEach(link => {
        expect(screen.getByText(link.textContent))
      })
    })
    test('The anchor tags contain the correct href attribute', () => {
      data.forEach(link => {
        expect(document.querySelector(`[href="${link.href}"]`)).toBeInTheDocument()
      })
    })
  })
  describe('buildLearnerCard component', () => {
    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    test('The section contains the correct number of div.learner-card', () => {
      expect(document.querySelectorAll('.learner-card')).toHaveLength(5)
    })
    test('The div.learner-card` elements contain the correct visible text', () => {
      learners.forEach((l, idx) => {
        getByText(document.querySelectorAll('.learner-card')[idx], l.fullName)
        getByText(document.querySelectorAll('.learner-card')[idx], `Learner ID: ${l.id}`)
        getByText(document.querySelectorAll('.learner-card')[idx], `Date of Birth: ${l.dateOfBirth}`)
        getByText(document.querySelectorAll('.learner-card')[idx], `Favorite Language: ${languages.find(lang => lang.id === l.favLanguage).name}`)
      })
    })
  })
  describe('buildFooter component', () => {
    let data = {
      companyName: 'Bloom Institute of Technology',
      address: '123 Main Street, City, Country',
      contactEmail: 'info@example.com',
      socialMedia: {
        twitter: 'https://twitter.com/example',
        facebook: 'https://www.facebook.com/example',
        instagram: 'https://www.instagram.com/example',
      },
    }
    test('footer contains the correct company data', () => {
      screen.getByText(data.companyName)
      screen.getByText(data.address)
      screen.getByText(data.contactEmail)
    })
    test('footer contains the correct social media links', () => {
      screen.getByText(/twitter/i)
      screen.getByText(/facebook/i)
      screen.getByText(/instagram/i)
    })
    test('footer contains the correct copyright text', () => {
      screen.getByText(`© ${data.companyName.toUpperCase()} ${new Date().getFullYear()}`)
    })
  })
})
