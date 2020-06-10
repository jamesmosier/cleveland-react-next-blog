export default function Container({ children, isFallback }) {
  return (
    <div
      className="container mx-auto px-5"
      style={{ backgroundColor: isFallback ? 'red' : 'transparent' }}
    >
      {children}
    </div>
  );
}
