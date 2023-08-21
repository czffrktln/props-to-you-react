function Footer(props) {
  
  // const disappear = (e) => {
  //   console.log(e);
  //   e.target.classList.add("footer__hidden");
  //   setTimeout(() => {
  //     e.target.classList.remove("footer__hidden")
  //   }, 2000);
  // };

  let content = 
    <div className="footer" onClick={props.onCica}>
      <h3>{props.cicaharcsa}</h3>
    </div>;

  return content;
}

export default Footer;