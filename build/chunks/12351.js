/** chunk id: 12351 params = (module,exports,require) **/
n.d(e, {
    A: () => g
});
var i = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    l = n(397927),
    o = n(985018),
    c = n(522946);
let d = {
    BLOCK: c.om,
    INLINE: c.mG
};
class _ extends a.PureComponent {
    static Types = d;
    render() {
        let {
            children: t,
            className: e,
            textClassName: n,
            type: a = d.BLOCK,
            style: s
        } = this.props;
        return (0, i.jsxs)("div", {
            className: r()(e, a),
            style: s,
            children: [(0, i.jsxs)(l.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-feedback-positive",
                className: c.AD,
                children: [o.intl.string(o.t["8tvIiN"]), ":"]
            }), (0, i.jsx)(l.Text, {
                className: r()(c.uN, n),
                variant: "text-sm/normal",
                children: t
            })]
        })
    }
}
let g = _