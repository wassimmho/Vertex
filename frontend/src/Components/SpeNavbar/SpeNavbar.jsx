import "./SpeNavbar.css"

function SpeNavbar() {
    const specialities = ["computer-science", "Biologie"]
  return (
    <nav className="spe-navbar">
      <ul id="specialities-list">
        {specialities.map(
            (speciality) => (
              <li key={speciality}>{speciality}</li>
            )
        )
        }
      </ul>
    </nav>
  );
}

export default SpeNavbar;