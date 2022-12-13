const Fecha = () => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let semanaDias = ["Mier", "Jue", "Vie", "Sab", "Dom", "Lun", "Mart"];
  let hoy = semanaDias[day];

  return <h4 className="fecha">Hoy, {hoy}  {day}th,  {year}/{month}</h4>
};

export default Fecha;
