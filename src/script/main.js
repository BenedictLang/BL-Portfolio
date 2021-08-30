/*General*/
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
//Scrollbar listener
const options = {
    damping: 0.7,
    thumbMinSize: 30,
    plugins: {
        overscroll: true
    }
};/*
class DisableScrollPlugin extends ScrollbarPlugin {
    static pluginName = 'disableScroll';

    static defaultOptions = {
        direction: null,
    };

    transformDelta(delta, _evt) {
        if (this.options.direction) {
            delta[this.options.direction] = 0;
        }

        return { ...delta };
    }
}

Scrollbar.use(DisableScrollPlugin);
class SomeComponent extends Component {
    render() {
        return (
            <Scrollbar plugins={{
                disableScroll: { direction: 'x' }
            }}>
                ...
            </Scrollbar>
        );
    }
}*/
Scrollbar.init(document.querySelector('#scrollable'), options);

//sets current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear().toString();