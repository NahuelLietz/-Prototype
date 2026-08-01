const iconStyle = { width: '20px', height: '20px', padding: '2px' }

function IconLink({ href, icon, label, external = true }) {
  const externalProps = external ? { target: '_blank', rel: 'noreferrer' } : {}

  return (
    <p>
      <a href={href} {...externalProps}>
        <img src={icon} alt={label} style={iconStyle} />
      </a>
    </p>
  )
}

export default IconLink
