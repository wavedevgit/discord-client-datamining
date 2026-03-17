/** chunk id: 131876 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var a = n(397927),
    r = n(73153),
    l = n(272355);
let s = "CONNECTIONS_GRID_MODAL_KEY";
class o extends l.A {
    _initialize() {
        r.h.subscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), r.h.subscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
    }
    _terminate() {
        r.h.unsubscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), r.h.unsubscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
    }
    handleShow(e) {
        let {
            onComplete: t,
            excludedPlatformTypes: r,
            includedPlatformTypes: l,
            integrations: o,
            onCompleteApplication: d
        } = e;
        (0, a.kBI)(s) || (0, a.mMO)(async () => {
            let {
                default: e
            } = await n.e("95198").then(n.bind(n, 58829));
            return n => (0, i.jsx)(e, {
                onComplete: t,
                excludedPlatformTypes: r,
                includedPlatformTypes: l,
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