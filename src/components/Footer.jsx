export default function Footer({ children, className }) {
  return (
    <header className={className}>
      <h2 className='footer-title'>Shopping list</h2>
      {children}
    </header>
  );
}
