export default function Home() {
  let name = 'cho';
  let link = 'http://google.com'
  return (
    <div>
      <h4 style={{ color:'silver', textAlign:'center',marginTop:'150px'}}>애플후레시</h4>
      <p className="title-sub">by dev {name}</p>
      <a href={link}>link</a>
    </div>
  );
}
 