const Section = ({ children, title }) => {
  return (
    <section className="pb-20">
      {title && <h2 className="mb-10 text-3xl font-semibold">{title}</h2>}
      <div>{children}</div>
    </section>
  );
};

export default Section;
