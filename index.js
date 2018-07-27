class BeMedia extends XTagElement {
    constructor() {
        super();
    }

    'image::template'() {
        return `<img class="${this._class}" src="${this._src}"/>`;
    }

    'video::template'() {
        return `<video class="${this._class}" autoplay> <source src="${this._src}" type="video/mp4"> </video>`;
    }

    set 'class::attr' (value) {
        this._class = value;
    }

    set 'src::attr' (value) {
        this._src = value;
        if (this._src.endsWith('mp4')) {
            this.render('video');
        } else {
            this.render('image');
        }
    }

}

var beMedia = xtag.create('be-media', BeMedia);

export default beMedia;