/** chunk id: 12351 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    i = n(397927),
    o = n(985018),
    c = n(160769);
let d = {
    BLOCK: c.om,
    INLINE: c.mG
};
class u extends s.PureComponent {
    static Types = d;
    render() {
        let {
            children: e,
            className: t,
            textClassName: n,
            type: s = d.BLOCK,
            style: a
        } = this.props;
        return (0, l.jsxs)("div", {
            className: r()(t, s),
            style: a,
            children: [(0, l.jsxs)(i.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-feedback-positive",
                className: c.AD,
                children: [o.intl.string(o.t["8tvIiN"]), ":"]
            }), (0, l.jsx)(i.Text, {
                className: r()(c.uN, n),
                variant: "text-sm/normal",
                children: e
            })]
        })
    }
}
let h = u