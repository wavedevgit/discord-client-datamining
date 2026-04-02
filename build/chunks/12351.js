/** chunk id: 12351 params = (module,exports,require) **/
n.d(e, {
    A: () => g
});
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(397927),
    o = n(985018),
    c = n(522946);
let d = {
    BLOCK: c.om,
    INLINE: c.mG
};
class h extends r.PureComponent {
    static Types = d;
    render() {
        let {
            children: t,
            className: e,
            textClassName: n,
            type: r = d.BLOCK,
            style: s
        } = this.props;
        return (0, i.jsxs)("div", {
            className: l()(e, r),
            style: s,
            children: [(0, i.jsxs)(a.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-feedback-positive",
                className: c.AD,
                children: [o.intl.string(o.t["8tvIiN"]), ":"]
            }), (0, i.jsx)(a.Text, {
                className: l()(c.uN, n),
                variant: "text-sm/normal",
                children: t
            })]
        })
    }
}
let g = h