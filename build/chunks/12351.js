/** chunk id: 12351, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(397927),
    o = n(985018),
    c = n(160769);
let _ = {
    BLOCK: c.om,
    INLINE: c.mG
};
class E extends l.PureComponent {
    static Types = _;
    render() {
        let {
            children: e,
            className: t,
            textClassName: n,
            type: l = _.BLOCK,
            style: r
        } = this.props;
        return (0, i.jsxs)("div", {
            className: a()(t, l),
            style: r,
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
let d = E