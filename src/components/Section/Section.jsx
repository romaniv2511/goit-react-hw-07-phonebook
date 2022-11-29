export const Section = ({ title, children }) => (
  <>
    {title && <h2>{title}</h2>}
    {children}
  </>
);
