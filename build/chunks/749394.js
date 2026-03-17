/** chunk id: 749394 params = (module,exports,require) **/
l.d(t, {
    A: () => a
});
var r = l(440745),
    n = l.n(r),
    i = l(317097),
    o = l(315069);
class a extends o.A {
    backgroundColors;
    buttonColors;
    confettiColors;
    constructor(e) {
        super(), this.backgroundColors = e.backgroundColors, this.buttonColors = e.buttonColors, this.confettiColors = e.confettiColors
    }
    static fromServer(e) {
        let {
            background_colors: t,
            button_colors: l,
            confetti_colors: r
        } = e;
        return new a({
            backgroundColors: t.map(e => n()((0, i.Hl)(e))),
            buttonColors: l.map(e => n()((0, i.Hl)(e))),
            confettiColors: r.map(e => n()((0, i.Hl)(e)))
        })
    }
}