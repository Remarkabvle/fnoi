import React from 'react'
import "./header.scss"
import { HEADER__LIST__ITEM } from '../../static/listData';

function Header() {
    let navListItem = HEADER__LIST__ITEM?.map((value, index) => {
        return (
            <li key={index} className='header__item'>
                <a href="#">{value}</a>
            </li>
        )
    })

    return (
        <header className="header">
            <nav className="header__navbar">
                <div className="container header__container">
                    <div className="header__left">
                        <div className="logo-img">
                            <a href="#">
                                <svg width="76" height="27" viewBox="0 0 76 27" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <path d="M38.912 7.88V19H37.088V11.384L33.696 19H32.432L29.024 11.384V19H27.2V7.88H29.168L33.072 16.6L36.96 7.88H38.912ZM45.1334 19.144C44.3014 19.144 43.5494 18.9573 42.8774 18.584C42.2054 18.2 41.6774 17.6667 41.2934 16.984C40.9094 16.2907 40.7174 15.4907 40.7174 14.584C40.7174 13.688 40.9147 12.8933 41.3094 12.2C41.704 11.5067 42.2427 10.9733 42.9254 10.6C43.608 10.2267 44.3707 10.04 45.2134 10.04C46.056 10.04 46.8187 10.2267 47.5014 10.6C48.184 10.9733 48.7227 11.5067 49.1174 12.2C49.512 12.8933 49.7094 13.688 49.7094 14.584C49.7094 15.48 49.5067 16.2747 49.1014 16.968C48.696 17.6613 48.1414 18.2 47.4374 18.584C46.744 18.9573 45.976 19.144 45.1334 19.144ZM45.1334 17.56C45.6027 17.56 46.04 17.448 46.4454 17.224C46.8614 17 47.1974 16.664 47.4534 16.216C47.7094 15.768 47.8374 15.224 47.8374 14.584C47.8374 13.944 47.7147 13.4053 47.4694 12.968C47.224 12.52 46.8987 12.184 46.4934 11.96C46.088 11.736 45.6507 11.624 45.1814 11.624C44.712 11.624 44.2747 11.736 43.8694 11.96C43.4747 12.184 43.16 12.52 42.9254 12.968C42.6907 13.4053 42.5734 13.944 42.5734 14.584C42.5734 15.5333 42.8134 16.2693 43.2934 16.792C43.784 17.304 44.3974 17.56 45.1334 17.56ZM56.0725 10.04C56.7445 10.04 57.3418 10.184 57.8645 10.472C58.3978 10.76 58.8138 11.1867 59.1125 11.752C59.4218 12.3173 59.5765 13 59.5765 13.8V19H57.7685V14.072C57.7685 13.2827 57.5712 12.68 57.1765 12.264C56.7818 11.8373 56.2432 11.624 55.5605 11.624C54.8778 11.624 54.3338 11.8373 53.9285 12.264C53.5338 12.68 53.3365 13.2827 53.3365 14.072V19H51.5125V7.16H53.3365V11.208C53.6458 10.8347 54.0352 10.5467 54.5045 10.344C54.9845 10.1413 55.5072 10.04 56.0725 10.04ZM62.8311 9.016C62.5005 9.016 62.2231 8.904 61.9991 8.68C61.7751 8.456 61.6631 8.17867 61.6631 7.848C61.6631 7.51733 61.7751 7.24 61.9991 7.016C62.2231 6.792 62.5005 6.68 62.8311 6.68C63.1511 6.68 63.4231 6.792 63.6471 7.016C63.8711 7.24 63.9831 7.51733 63.9831 7.848C63.9831 8.17867 63.8711 8.456 63.6471 8.68C63.4231 8.904 63.1511 9.016 62.8311 9.016ZM63.7271 10.184V19H61.9031V10.184H63.7271ZM65.5139 14.552C65.5139 13.6667 65.6952 12.8827 66.0579 12.2C66.4312 11.5173 66.9325 10.9893 67.5619 10.616C68.2019 10.232 68.9112 10.04 69.6899 10.04C70.2659 10.04 70.8312 10.168 71.3859 10.424C71.9512 10.6693 72.3992 11 72.7299 11.416V7.16H74.5699V19H72.7299V17.672C72.4312 18.0987 72.0152 18.4507 71.4819 18.728C70.9592 19.0053 70.3565 19.144 69.6739 19.144C68.9059 19.144 68.2019 18.952 67.5619 18.568C66.9325 18.1733 66.4312 17.6293 66.0579 16.936C65.6952 16.232 65.5139 15.4373 65.5139 14.552ZM72.7299 14.584C72.7299 13.976 72.6019 13.448 72.3459 13C72.1005 12.552 71.7752 12.2107 71.3699 11.976C70.9645 11.7413 70.5272 11.624 70.0579 11.624C69.5885 11.624 69.1512 11.7413 68.7459 11.976C68.3405 12.2 68.0099 12.536 67.7539 12.984C67.5085 13.4213 67.3859 13.944 67.3859 14.552C67.3859 15.16 67.5085 15.6933 67.7539 16.152C68.0099 16.6107 68.3405 16.9627 68.7459 17.208C69.1619 17.4427 69.5992 17.56 70.0579 17.56C70.5272 17.56 70.9645 17.4427 71.3699 17.208C71.7752 16.9733 72.1005 16.632 72.3459 16.184C72.6019 15.7253 72.7299 15.192 72.7299 14.584Z" fill="white" />
                                    <rect x="-2" width="27" height="27" fill="url(#pattern0_9_34)" />
                                    <defs>
                                        <pattern id="pattern0_9_34" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlink:href="#image0_9_34" transform="scale(0.0111111)" />
                                        </pattern>
                                        <image id="image0_9_34" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAEXElEQVR4nO2dzYtWZRjGf/eMfWIfixaVNTpqi1IXlUZQ0DYixEWLPugP6GuVLRT/gGgRQRC1iRIiMCeXQbswRFrUorSFhvahLQqn8i2ycq4W57w4M77n9I5znvs+Y/cPBl4Ow3Nd5+LhOR/Pee4HkiRJloxFG1iMpC3ANuCO+m8KWA1cC1xf/wYYAL8Bf9S/vwWOAceBz8zsK1/nKwRJGyUdUnd8KmlD9Hn1Ckk3S/q+w5CHnJa0Jvr8eoOkvQVCHvJO9PlBD8ZoSbdSja+rCkn8A6w1s9OF2h+LiUjxmqcpFzJ1208VbH8s+tCjjwJ3FpY5YmabC2u0EtqjJT1E+ZABNkl60EGnkeih43lHrRcctS4ibOiQdBtwgrLj83z+BqbN7JST3gIie/RO/EIGuAJ40VFvASE9WtItwDfANc7SfwIbI3p1VI/ejX/IAFcDLwXo+vdoSXcBXwBXemvXnAPuNrOvPUVde7SkCeAt4kIGuAp4u/bihvfQ8QwQej9bcz/wbLSJzpG0TtKHkuYKvjxaKnOqPK2NzqcTJD0iaTY201ZmJT1cOoeiF0NJjwIzxI7J4/AXsMPMPiolUCxoSdPA58CNpTQ65hequ5GTJRoveTF8jZUTMlReX402sSQkbWkZE89K2iVpWo63WJImas3dkgYt/jZ5eVo2kl5pCfneHvjb2hL2y9H+xkbS4YaT2BXtbYikPQ0eD0V7GxtJPzecxHS0tyGSNjR4/KmEXpG7DknnGX2hXWVm50toLhVJk1QTt4uZM7PJrvVKBa2RYmbhc5Tz8fQZPZXVS+oL5QeSbor20krD2Dey90TS5HMe+7rSyqGjnYGZXdeFVg4d7az+738ZjwzaiQzaiQzaiQzaiQzaiQy6nUFXDWXQ7RSb2uqEy+DJ8KykfV0+gueT4QjypdIKJoN2IoN2IoN2IoN2IoN2IoN2IoN2IoN2IoN2IoN2IoN2IoN2IoN2IoN2IoN2IoN2IoN2olTQc6MO1h9/94IWLyO9L5dSQc82HJ8qpHcprGs4fqaEWKmgjzccf6KQ3qXQ5OWYq4vloOblbwNJW3vgb5uk3xs8rqjlb5tbvpkYqFp6tt5zzJY0qWol1p6WkKWqcEvnlFwLfgDYUar9QsyY2WMlGs5F9xeYBe5ZcYvuzewE8CRViYa+cw54vFTIUPiBpa5/sZ3m270+cAbYbmYfRxtZNpKmJO1X/0r97Jd0e3Q+nSPpueBw5+NZF9W37p2q+hyfEF8p7DDwgJkVedweRRYYdML97Z2ZHaUqMhjFm94hQxaBdSPkfbSZ/UhMr34jqn50Fup2ImyGxcx+AA44Ss5EhQzxU1mvX6ZaFxG+SkrSEaDIq8l5/L+3B6nZ66DxroNGK33o0WuAk+QWTmWpL1DvF5R4Lzrk3qBy2+ydUm6ztxBV83kHOwz5oKT10ec1JHyMXoyqarf3MXor1BtYuBXqr1zYCvU7qs8chluhfunrPEmSpHP+BYgJCK7Bt439AAAAAElFTkSuQmCC" />
                                    </defs>
                                </svg>

                            </a>
                        </div>
                    </div>
                    <ul className="header__list">{navListItem}</ul>
                    <div className="header__right">
                        <div className="header__buttons">
                            <button>User</button>
                            <button>Search</button>
                            <button>Box</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        
    )
}

export default Header
