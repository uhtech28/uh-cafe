const MENU_LINKS = ['Espresso', 'Latte', 'Cold Brew', 'Cappuccino', 'Specialty Drinks', 'Desserts']
const ABOUT_LINKS = ['Our Story', 'The Team', 'Sustainability', 'Press', 'Careers']
const VISIT_LINKS = ['Hazratganj, Lucknow', 'Gomti Nagar, Lucknow', 'Franchise Info', 'Reserve a Table']
const SOCIALS = [
  { icon: '📸', label: 'Instagram' },
  { icon: '👍', label: 'Facebook' },
  { icon: '𝕏', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">UH <em>Café</em></div>
            <p className="footer-tagline">
              Crafted coffee for moments that matter. Every cup, a ritual.
            </p>
            <div className="footer-socials">
              {SOCIALS.map(s => (
                <a key={s.label} href="#" className="social-btn" title={s.label}>{s.icon}</a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h5>Menu</h5>
            <ul>{MENU_LINKS.map(l => <li key={l}>{l}</li>)}</ul>
          </div>
          <div className="footer-col">
            <h5>About</h5>
            <ul>{ABOUT_LINKS.map(l => <li key={l}>{l}</li>)}</ul>
          </div>
          <div className="footer-col">
            <h5>Locations</h5>
            <ul>{VISIT_LINKS.map(l => <li key={l}>{l}</li>)}</ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 UH CAFÉ Pvt. Ltd. All rights reserved.</span>
          <span className="footer-copy">Crafted with ☕ in Lucknow, India</span>
        </div>
      </div>
    </footer>
  )
}
