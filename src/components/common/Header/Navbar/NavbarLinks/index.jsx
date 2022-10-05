import React, { Fragment, useContext } from "react"
// import { State } from "state"
import { Link, Location } from "@reach/router"
import { NavLink } from "./styles"
import { home, dashboard } from "./links"
import { connect } from "react-redux"

function NavbarLinks(props) {
  // const { state } = useContext(State)

  return (
    <Location>
      {({ location }) => {
        if (props.login.success) {
          return (
            <Fragment>
              {dashboard.map(({ to, ariaLabel, title }, index) => (
                <NavLink
                  key={index}
                  as={Link}
                  to={to}
                  aria-label={ariaLabel}
                  pathname={location.pathname}
                >
                  {title}
                </NavLink>
              ))}
            </Fragment>
          )
        }

        return (
          <Fragment>
            {home.map(({ to, ariaLabel, title }, index) => (
              <NavLink
                key={index}
                as={Link}
                to={to}
                aria-label={ariaLabel}
                pathname={location.pathname}
              >
                {title}
              </NavLink>
            ))}
          </Fragment>
        )
      }}
    </Location>
  )
}

const mapStateToProps = ({ login }) => ({
  login,
});

export { NavbarLinks };
export default connect(mapStateToProps)(NavbarLinks);
