let guardian_headlines = document.getElementsByClassName('u-faux-block-link__overlay js-headline-text')

let links = []

for (let i = 0; i < guardian_headlines.length; i++) {
    links.push(guardian_headlines[i].href);
}