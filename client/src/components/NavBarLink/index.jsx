export default function NavBarLink({link, estiloLink, estiloBarra}) {
  return (
    <>
        <a href={link.url} className={estiloLink}>{link.nome}</a>
        <div className={estiloBarra}></div>
    </>
  );
}
