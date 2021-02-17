import "./NavigatorCard.css";

export default function NavigatorCard({link, image}) {
  return(
      <nav>
        <ul>
          <li><a href="#" className="navigator__link">{link}</a></li>
        </ul>
      </nav>
  )
}