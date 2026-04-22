/** chunk id: 29160 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(80477);
class o extends l.PureComponent {
    static defaultProps = {
        tag: "div",
        forceHover: !1
    };
    render() {
        let {
            tag: e,
            children: t,
            hoverText: n,
            className: l,
            forceHover: s,
            ...o
        } = this.props;
        return (0, i.jsxs)("div", {
            ...o,
            className: a()(l, r.oM, {
                [r.r9]: null == n,
                [r.EE]: s
            }),
            children: [(0, i.jsx)(e, {
                className: r.yo,
                children: n
            }), (0, i.jsx)(e, {
                className: r.Ay,
                children: t
            })]
        })
    }
}
let c = o