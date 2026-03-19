/** chunk id: 265367 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(73153),
    a = n(272355),
    r = n(793322),
    o = n(174768),
    c = n(814340);
let d = "QUICK_SWITCHER_MODAL_KEY";
class u extends a.A {
    _initialize() {
        l.h.subscribe("QUICKSWITCHER_SHOW", this.handleShow), l.h.subscribe("QUICKSWITCHER_HIDE", this.handleHide)
    }
    _terminate() {
        l.h.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow), l.h.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide)
    }
    handleShow() {
        o.A.isOpen() && !(0, s.kBI)(d) && (0, s.qfG)(e => (0, i.jsx)(c.A, {
            ...e
        }), {
            modalKey: d,
            instant: !0,
            onCloseCallback: r.jD
        })
    }
    handleHide() {
        (0, s.OoC)(d)
    }
}
let h = new u