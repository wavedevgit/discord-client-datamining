/** chunk id: 12351, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i, l, s = n(627968),
    r = n(64700),
    a = n(503698),
    o = n.n(a),
    c = n(397927),
    d = n(985018),
    u = n(228763);
let h = {
    BLOCK: u.om,
    INLINE: u.mG
};
class g extends(l = r.PureComponent) {
    render() {
        let {
            children: e,
            className: t,
            textClassName: n,
            type: i = h.BLOCK,
            style: l
        } = this.props;
        return (0, s.jsxs)("div", {
            className: o()(t, i),
            style: l,
            children: [(0, s.jsxs)(c.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-feedback-positive",
                className: u.AD,
                children: [d.intl.string(d.t["8tvIiN"]), ":"]
            }), (0, s.jsx)(c.Text, {
                className: o()(u.uN, n),
                variant: "text-sm/normal",
                children: e
            })]
        })
    }
}(i = "Types") in g ? Object.defineProperty(g, i, {
    value: h,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : g[i] = h;
let x = g