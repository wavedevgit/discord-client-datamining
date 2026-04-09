/** chunk id: 12351 params = (module,exports,require) **/
n.d(e, {
    A: () => u
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(397927),
    o = n(985018),
    c = n(522946);
let _ = {
    BLOCK: c.om,
    INLINE: c.mG
};
class d extends r.PureComponent {
    static Types = _;
    render() {
        let {
            children: t,
            className: e,
            textClassName: n,
            type: r = _.BLOCK,
            style: a
        } = this.props;
        return (0, i.jsxs)("div", {
            className: l()(e, r),
            style: a,
            children: [(0, i.jsxs)(s.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-feedback-positive",
                className: c.AD,
                children: [o.intl.string(o.t["8tvIiN"]), ":"]
            }), (0, i.jsx)(s.Text, {
                className: l()(c.uN, n),
                variant: "text-sm/normal",
                children: t
            })]
        })
    }
}
let u = d