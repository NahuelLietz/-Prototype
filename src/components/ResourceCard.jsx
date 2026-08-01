import SpriteIcon from './SpriteIcon.jsx'

function LinkIcon({ icon }) {
  if (icon.type === 'image') {
    return <img className={icon.className} src={icon.src} alt="" />
  }
  return <SpriteIcon id={icon.id} className={icon.className} />
}

function ResourceCard({ id, iconId, title, description, links }) {
  return (
    <div id={id}>
      <SpriteIcon className="icon" id={iconId} />
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank">
              <LinkIcon icon={link.icon} />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResourceCard
