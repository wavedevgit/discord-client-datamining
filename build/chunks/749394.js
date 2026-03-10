/** chunk id: 749394 params = (module,exports,require) **/
t.d(l, {
    A: () => a
});
var r = t(440745),
    n = t.n(r),
    o = t(317097),
    i = t(315069);
class a extends i.A {
    backgroundColors;
    buttonColors;
    confettiColors;
    constructor(e) {
        super(), this.backgroundColors = e.backgroundColors, this.buttonColors = e.buttonColors, this.confettiColors = e.confettiColors
    }
    static fromServer(e) {
        let {
            background_colors: l,
            button_colors: t,
            confetti_colors: r
        } = e;
        return new a({
            backgroundColors: l.map(e => n()((0, o.Hl)(e))),
            buttonColors: t.map(e => n()((0, o.Hl)(e))),
            confettiColors: r.map(e => n()((0, o.Hl)(e)))
        })
    }
}