/** chunk id: 12351, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(397927),
    o = n(985018),
    c = n(228763);
let d = {
    BLOCK: c.om,
    INLINE: c.mG
};
class u extends r.PureComponent {
    static Types = d;
    render() {
        let {
            children: e,
            className: t,
            textClassName: n,
            type: r = d.BLOCK,
            style: l
        } = this.props;
        return (0, i.jsxs)("div", {
            className: a()(t, r),
            style: l,
            children: [(0, i.jsxs)(s.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-feedback-positive",
                className: c.AD,
                children: [o.intl.string(o.t["8tvIiN"]), ":"]
            }), (0, i.jsx)(s.Text, {
                className: a()(c.uN, n),
                variant: "text-sm/normal",
                children: e
            })]
        })
    }
}
let h = u