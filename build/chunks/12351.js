/** chunk id: 12351, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => h
});
var n = i(627968),
    r = i(64700),
    l = i(503698),
    a = i.n(l),
    s = i(397927),
    o = i(985018),
    c = i(160769);
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
            textClassName: i,
            type: r = d.BLOCK,
            style: l
        } = this.props;
        return (0, n.jsxs)("div", {
            className: a()(t, r),
            style: l,
            children: [(0, n.jsxs)(s.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-feedback-positive",
                className: c.AD,
                children: [o.intl.string(o.t["8tvIiN"]), ":"]
            }), (0, n.jsx)(s.Text, {
                className: a()(c.uN, i),
                variant: "text-sm/normal",
                children: e
            })]
        })
    }
}
let h = u