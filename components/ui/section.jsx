const Section = ({ children, title }) => {
  return (
    <section className="pb-16">
      {title && <h2 className="mb-10 text-2xl md:text-3xl font-semibold">{title}</h2>}
      <div>{children}</div>
    </section>
  );
};

export default Section;
