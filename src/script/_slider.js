import React from "react";

export const slideData = [
    {
        index: 0,
        headline: 'AI GauGAN',
        sub: 'KI Bildgenerierung',
        desc: 'Python Web-App die GANs zur synthetischen Bildgenerierung nutzt',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/GauGAN.png'
    },
    {
        index: 1,
        headline: 'HoRST 3D',
        sub: 'Raumsuch-Terminal',
        desc: 'PWA programmiert mit ThreeJS',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/horst3dDesktop.png'
    },
    {
        index: 2,
        headline: 'HoRST 3D',
        sub: 'Raumsuch-Terminal',
        desc: 'Progressive Web App - Mobil Demo',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/horst3dMobil.png'
    },
    {
        index: 3,
        headline: 'HoRST 3D',
        sub: 'Raumsuch-Terminal',
        desc: 'Progressive Web App - Tablet Demo',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/horst3dTablet.png'
    },
    {
        index: 4,
        headline: 'VoidMe',
        sub: 'Location Blacklisting',
        desc: 'Android App',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/VoidMe.png'
    },
    {
        index: 5,
        headline: 'VoidMe',
        sub: 'Location Blacklisting',
        desc: 'Android App - Add Location',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/VoidMe_add.jpg'
    },
    {
        index: 6,
        headline: 'VoidMe',
        sub: 'Location Blacklisting',
        desc: 'Android App - Google Map',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/VoidMe_map.jpg'
    },
    {
        index: 7,
        headline: 'getFact',
        sub: 'Fakten-Trainer',
        desc: '(Java, JavaFX, MySQL)',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/getFact.png'
    },
    {
        index: 8,
        headline: 'Tripy',
        sub: 'Collaborative Trip Planner',
        desc: 'Login with verification, password hashing, reset token over SMTP (Java, JavaFX, Firebase)',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/Tripy_login.png'
    },
    {
        index: 9,
        headline: 'Tripy',
        sub: 'Collaborative Trip Planner',
        desc: 'Home Screen, Collaborative trips',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/Tripy_home.png'
    },
    {
        index: 10,
        headline: 'Tripy',
        sub: 'Collaborative Trip Planner',
        desc: 'Trip Details',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/Tripy_trip.png'
    },
    {
        index: 11,
        headline: 'Tripy',
        sub: 'Collaborative Trip Planner',
        desc: 'Trip Members',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/Tripy_trip_members.png'
    },
    {
        index: 12,
        headline: 'Tripy',
        sub: 'Collaborative Trip Planner',
        desc: 'Profile Settings, Invitations',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/Tripy_profile.png'
    },
    {
        index: 13,
        headline: 'MRoast',
        sub: 'Canteen Food Disadviser',
        desc: 'Home Screen, Feed',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/MRoast_home.png'
    },
    {
        index: 14,
        headline: 'MRoast',
        sub: 'Canteen Food Disadviser',
        desc: 'Statisic calculation',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/MRoast_stats.png'
    },
    {
        index: 15,
        headline: 'MRoast',
        sub: 'Canteen Food Disadviser',
        desc: 'Empty Feed',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/MRoast.png'
    },
    {
        index: 16,
        headline: 'MRoast',
        sub: 'Canteen Food Disadviser',
        desc: 'Feed filter',
        src: 'https://apps.benedict.lang-familie.de/media/portfolio/MRoast_filter.png'
    }
]


// =========================
// Slide
// =========================

class Slide extends React.Component {
    constructor(props) {
        super(props)

        this.handleSlideClick = this.handleSlideClick.bind(this)
        this.imageLoaded = this.imageLoaded.bind(this)
        this.slide = React.createRef()
    }


    handleSlideClick() {
        this.props.handleSlideClick(this.props.slide.index)
    }

    imageLoaded(event) {
        event.target.style.opacity = 1
    }

    render() {
        const { src, desc, sub, headline, index } = this.props.slide
        const current = this.props.current
        let classNames = 'slide'

        if (current === index) classNames += ' slide--current'
        else if (current - 1 === index) classNames += ' slide--previous'
        else if (current + 1 === index) classNames += ' slide--next'

        return (
            <li
                ref={this.slide}
                className={classNames}
                onClick={this.handleSlideClick}
            >
                <div className="slide__image-wrapper">
                    <img
                        className="slide__image"
                        alt={headline}
                        src={src}
                        onLoad={this.imageLoaded}
                    />
                </div>

                <article className="slide__content">
                    <h3 className="slide__headline">{headline}</h3>
                    <h6 className="slide__sub">{sub}</h6>
                    <h7 className="slide__desc">{desc}</h7>
                    {/*<button className="slide__action btn">{button}</button>*/}
                </article>
            </li>
        )
    }
}


// =========================
// Slider control
// =========================

const SliderControl = ({ type, title, handleClick }) => {
    return (
        <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
            <svg className="icon" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
        </button>
    )
}


// =========================
// Slider
// =========================

export class Slider extends React.Component {
    constructor(props) {
        super(props)

        this.state = { current: 0 }
        this.handlePreviousClick = this.handlePreviousClick.bind(this)
        this.handleNextClick = this.handleNextClick.bind(this)
        this.handleSlideClick = this.handleSlideClick.bind(this)
    }

    handlePreviousClick() {
        const previous = this.state.current - 1

        this.setState({
            current: (previous < 0)
                ? this.props.slides.length - 1
                : previous
        })
    }

    handleNextClick() {
        const next = this.state.current + 1;

        this.setState({
            current: (next === this.props.slides.length)
                ? 0
                : next
        })
    }

    handleSlideClick(index) {
        if (this.state.current !== index) {
            this.setState({
                current: index
            })
        }
    }

    render() {
        const { current, direction } = this.state
        const { slides, heading } = this.props
        const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`

        return (
            <div className='slider' aria-labelledby={headingId}>
                <ul className="slider__wrapper" style={{width: slides.length * 100 + '%', transform: `translateX(-${current * (100 / slides.length)}%)`}}>
                    <h3 id={headingId} className="visuallyhidden">{heading}</h3>

                    {slides.map(slide => {
                        return (
                            <Slide
                                key={slide.index}
                                slide={slide}
                                current={current}
                                handleSlideClick={this.handleSlideClick}
                            />
                        )
                    })}
                </ul>

                <div className="slider__controls">
                    <SliderControl
                        type="previous"
                        title="Go to previous slide"
                        handleClick={this.handlePreviousClick}
                    />

                    <SliderControl
                        type="next"
                        title="Go to next slide"
                        handleClick={this.handleNextClick}
                    />
                </div>
            </div>
        )
    }
}