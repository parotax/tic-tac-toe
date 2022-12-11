import "../styles.css";

const PageWrapper = (props: any) => {
  return (
    <>
      <header>Tic Tac Toe</header>
      <div>{props.children}</div>
    </>
  );
};

export default PageWrapper;
