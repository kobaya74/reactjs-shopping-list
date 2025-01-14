export default function Header({ children, className }) {
  return (
    <header className={className}>
      <h1 className='page-title'>Shopping list</h1>
      {children}
    </header>
  );
}
