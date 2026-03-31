/** chunk id: 12351 params = (module,exports,require) **/
i.d(t, {
    A: () => m
});
var n = i(627968),
    a = i(64700),
    l = i(503698),
    s = i.n(l),
    r = i(397927),
    o = i(985018),
    c = i(232561);
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
            textClassName: i,
            type: a = d.BLOCK,
            style: l
        } = this.props;
        return (0, n.jsxs)("div", {
            className: s()(t, a),
            style: l,
            children: [(0, n.jsxs)(r.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-feedback-positive",
                className: c.AD,
                children: [o.intl.string(o.t["8tvIiN"]), ":"]
            }), (0, n.jsx)(r.Text, {
                className: s()(c.uN, i),
                variant: "text-sm/normal",
                children: e
            })]
        })
    }
}
let m = u