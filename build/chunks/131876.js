/** chunk id: 131876, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(73153),
    a = n(272355);
let s = "CONNECTIONS_GRID_MODAL_KEY";
class o extends a.A {
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
            includedPlatformTypes: a,
            integrations: o,
            onCompleteApplication: d
        } = e;
        (0, r.kBI)(s) || (0, r.mMO)(async () => {
            let {
                default: e
            } = await n.e("72817").then(n.bind(n, 58829));
            return n => (0, i.jsx)(e, {
                onComplete: t,
                excludedPlatformTypes: l,
                includedPlatformTypes: a,
                integrations: o,
                onCompleteApplication: d,
                ...n
            })
        })
    }
    handleHide() {
        (0, r.OoC)(s)
    }
}
let d = new o