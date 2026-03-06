/** chunk id: 12351 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(397927),
    o = n(985018),
    c = n(160769);
let d = {
    BLOCK: c.om,
    INLINE: c.mG
};
class u extends a.PureComponent {
    static Types = d;
    render() {
        let {
            children: e,
            className: t,
            textClassName: n,
            type: a = d.BLOCK,
            style: r
        } = this.props;
        return (0, i.jsxs)("div", {
            className: l()(t, a),
            style: r,
            children: [(0, i.jsxs)(s.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-feedback-positive",
                className: c.AD,
                children: [o.intl.string(o.t["8tvIiN"]), ":"]
            }), (0, i.jsx)(s.Text, {
                className: l()(c.uN, n),
                variant: "text-sm/normal",
                children: e
            })]
        })
    }
}
let _ = u