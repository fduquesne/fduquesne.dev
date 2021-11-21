const Section = ({ children, title }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <div>{children}</div>
    </section>
  );
};

export default Section;
