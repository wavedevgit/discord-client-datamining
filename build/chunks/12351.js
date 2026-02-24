/** chunk id: 12351, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => g
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(397927),
    o = n(985018),
    c = n(228763);
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
            style: r
        } = this.props;
        return (0, i.jsxs)("div", {
            className: s()(e, a),
            style: r,
            children: [(0, i.jsxs)(l.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-feedback-positive",
                className: c.AD,
                children: [o.intl.string(o.t["8tvIiN"]), ":"]
            }), (0, i.jsx)(l.Text, {
                className: s()(c.uN, n),
                variant: "text-sm/normal",
                children: t
            })]
        })
    }
}
let g = _