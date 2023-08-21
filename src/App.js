import './App.css';


import Header from'./components/Header';
import IntroductionCard from './components/IntroductionCard';
import Footer from './components/Footer';

function App() {
  const logoName = "Cica Squad"

  const name = "Katica";
  const school = "Codecool";
  const age = "32";
  const hobbyList = ["hobby1", "hobby2"];
  const kiscica = ["kiscica", "nagycica", "cicaharcsa"];
 
  const name2 = "Harcsa Macska";
  const school2 = "Codecool";
  const age2 = "13";
  const hobbyList2 = ["cica", "macska"];
  const kiscica2 = ["Katica"]

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const date =  new Date()
  const dayName = weekday[date.getDay()]
  const month = date.getMonth()+1
  const year = date.getFullYear()+"-"+month+"-"+date.getDate()+", "+dayName;

  const harcsamacska = "akarmibarmi";

  const disappear = (e) => {
    console.log(e);
    e.target.classList.add("footer__hidden");
    setTimeout(() => {
      e.target.classList.remove("footer__hidden")
    }, 2000);
  };
   
  return (
    <div className="App">
      <Header logo={logoName}/>
      <IntroductionCard name={name} school={school} age={age} hobbyList={hobbyList} kiscica={kiscica} harcsamacska={harcsamacska}></IntroductionCard>
      <IntroductionCard name={name2} school={school2} age={age2} hobbyList={hobbyList2} kiscica={kiscica2}></IntroductionCard>
      <Footer cicaharcsa={year} onCica={disappear}></Footer>
    </div>
  );
}

export default App;
