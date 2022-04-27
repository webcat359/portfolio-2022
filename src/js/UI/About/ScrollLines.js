import Experience from '../../Experience'
import {gsap} from 'gsap'

export default class AboutScrollLines {

    downLines = document.querySelectorAll('.about-down-animation-line')
    upLines = document.querySelectorAll('.about-up-animation-line')

    constructor() {
        this.experience = new Experience()
        this.scroll = this.experience.ui.scroll

        this.scroll.on('scroll-down', () => this.showLines(this.downLines))
        this.scroll.on('scroll-up', () => this.showLines(this.upLines))
    }

    showLines(lines) {
        lines.forEach(line => {
            gsap.to(line, {opacity: .8, duration: .3, onComplete: () => {
                gsap.to(line, {opacity: 0, duration: .5})
            }})
        })
    }
}