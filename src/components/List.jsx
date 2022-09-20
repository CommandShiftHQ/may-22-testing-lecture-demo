import Card from "./Card";

const List = ({ languages }) => {
  return (
    <section className="container">
      <h2>LIST</h2>
      {languages.map((language, index) => (
        <Card key={index} language={language} />
      ))}
    </section>
  );
};

export default List;
