import React from 'react'  //rfc
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.theme_mode} bg-${props.theme_mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.about}</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.theme_mode ==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.theme_mode ==='light'?'dark':'light'} theme</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// default props set for the default values.. if no values are not passed
Navbar.defaultProps = { title: "set title here", about: "set about here" }

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string }


