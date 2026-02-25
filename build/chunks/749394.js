/** chunk id: 749394, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    A: () => i
});
var r = l(440745),
    a = l.n(r),
    n = l(317097),
    s = l(315069);
class i extends s.A {
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
        return new i({
            backgroundColors: t.map(e => a()((0, n.Hl)(e))),
            buttonColors: l.map(e => a()((0, n.Hl)(e))),
            confettiColors: r.map(e => a()((0, n.Hl)(e)))
        })
    }
}