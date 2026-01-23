/** Chunk was on 97492 **/
/** chunk id: 265367, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(73153),
    s = n(272355),
    a = n(793322),
    o = n(174768),
    c = n(814340);
let u = "QUICK_SWITCHER_MODAL_KEY";
class d extends s.A {
    _initialize() {
        i.h.subscribe("QUICKSWITCHER_SHOW", this.handleShow), i.h.subscribe("QUICKSWITCHER_HIDE", this.handleHide)
    }
    _terminate() {
        i.h.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow), i.h.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide)
    }
    handleShow() {
        o.A.isOpen() && !(0, l.kBI)(u) && (0, l.qfG)(e => (0, r.jsx)(c.A, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({}, e)), {
            modalKey: u,
            instant: !0,
            onCloseCallback: a.jD
        })
    }
    handleHide() {
        (0, l.OoC)(u)
    }
}
let p = new d