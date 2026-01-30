/** chunk id: 612391, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m,
    g: () => g
});
var r, i, l, a, s = n(627968),
    o = n(64700),
    c = n(311907),
    u = n(73153),
    d = n(830382),
    p = n(79387),
    h = n(985018),
    g = ((r = {}).SHORT = "SHORT", r.LONG = "LONG", r);
class f extends(a = o.PureComponent) {
    getText(e, t) {
        if (429 === e.status) switch (t) {
            case "SHORT":
                return h.intl.string(h.t.T15lqn);
            case "LONG":
                return h.intl.string(h.t.XFShdK)
        }
        switch (t) {
            case "SHORT":
                return h.intl.string(h.t["+XstB0"]);
            case "LONG":
                return h.intl.string(h.t.epyCuh)
        }
    }
    componentWillUnmount() {
        null != this.props.purchaseError && u.h.wait(() => d.T3())
    }
    render() {
        let {
            className: e,
            purchaseError: t,
            messageStyle: n
        } = this.props;
        return null == t ? null : (0, s.jsx)("div", {
            className: e,
            children: this.getText(t, n)
        })
    }
}
l = {
    messageStyle: "LONG"
}, (i = "defaultProps") in f ? Object.defineProperty(f, i, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : f[i] = l;
let m = c.Ay.connectStores([p.A], () => ({
    purchaseError: p.A.error
}))(f)