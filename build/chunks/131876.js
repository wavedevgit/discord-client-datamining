/** chunk id: 131876 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(73153),
    r = n(272355);
let s = "CONNECTIONS_GRID_MODAL_KEY";
class o extends r.A {
    _initialize() {
        l.h.subscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), l.h.subscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
    }
    _terminate() {
        l.h.unsubscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), l.h.unsubscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
    }
    handleShow(e) {
        let {
            onComplete: t,
            excludedPlatformTypes: l,
            includedPlatformTypes: r,
            integrations: o,
            onCompleteApplication: d
        } = e;
        (0, a.kBI)(s) || (0, a.mMO)(async () => {
            let {
                default: e
            } = await n.e("95198").then(n.bind(n, 58829));
            return n => (0, i.jsx)(e, {
                onComplete: t,
                excludedPlatformTypes: l,
                includedPlatformTypes: r,
                integrations: o,
                onCompleteApplication: d,
                ...n
            })
        })
    }
    handleHide() {
        (0, a.OoC)(s)
    }
}
let d = new o