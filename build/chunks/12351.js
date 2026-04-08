/** chunk id: 12351 params = (module,exports,require) **/
n.d(e, {
    A: () => h
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(397927),
    o = n(985018),
    u = n(522946);
let d = {
    BLOCK: u.om,
    INLINE: u.mG
};
class c extends l.PureComponent {
    static Types = d;
    render() {
        let {
            children: t,
            className: e,
            textClassName: n,
            type: l = d.BLOCK,
            style: r
        } = this.props;
        return (0, i.jsxs)("div", {
            className: s()(e, l),
            style: r,
            children: [(0, i.jsxs)(a.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-feedback-positive",
                className: u.AD,
                children: [o.intl.string(o.t["8tvIiN"]), ":"]
            }), (0, i.jsx)(a.Text, {
                className: s()(u.uN, n),
                variant: "text-sm/normal",
                children: t
            })]
        })
    }
}
let h = c