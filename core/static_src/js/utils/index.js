import { IS_IE11 } from '../config/interface';

export function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        /* eslint-disable */
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();

            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === `${name}=`) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
        /* eslint-enable */
    }

    return cookieValue;
}

export function querySelectArray(selector, el = document) {
    return Array.prototype.slice.call(el.querySelectorAll(selector));
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
export function debounce(func, wait, immediate) {
    let timeout;
    return () => {
        const self = this;
        // eslint-disable-next-line prefer-rest-params
        const args = arguments;
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(self, args);
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(self, args);
    };
}

// Generates a UUID
export function uuid() {
    /* eslint-disable */
    let i;
    let random;
    let uuidGen = '';
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuidGen += '-';
        }

        uuidGen += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
    }

    return uuidGen;
    /* eslint-enable */
}

// Remove CSS outlines in an accessible manner
// Make sure you have an empty style tag that
// lives after your main style sheet
export function tabFocus(selector = '.accessTab') {
    const tabFocusElmt = document.querySelector(selector);
    window.addEventListener('mousedown', () => {
        tabFocusElmt.innerHTML = '';
    });

    window.addEventListener('keydown', (e) => {
        const isTabKey = e.keyCode === 9;
        if (isTabKey) {
            tabFocusElmt.innerHTML = 'a:focus { outline: solid 3px #6cc6ee; }';
        }
    });
}

// Adds the YouTube Player API
export function addYouTubePlayerAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Returns the width of an element.
export function getWidth(elem) {
    return elem.offsetWidth || elem.clientWidth;
}

// Returns the height of an element.
export function getHeight(elem) {
    return elem.offsetHeight || elem.clientHeight;
}

// Returns event target, supporting IE6-8
export function getEventTarget(event) {
    if (event) {
        return event.target || event.srcElement;
    }
    return false;
}

export function initFeatureDetection() {
    const touchClass = 'ontouchstart' in window ? 'touch' : 'no-touch';
    document.documentElement.className = `${document.documentElement.className} ${touchClass}`;

    if (IS_IE11) {
        document.documentElement.className = `${document.documentElement.className} ie11`;
    }
}

export function initFlexboxSupport() {
    const docStyles = document.documentElement.style;
    const hasFlexbox = 'flexWrap' in docStyles || 'WebkitFlexWrap' in docStyles || 'msFlexWrap' in docStyles;
    document.documentElement.className += hasFlexbox ? ' flexbox' : ' no-flexbox';
}
