/** chunk id: 29160 params = (module,exports,require) **/
i.d(t, {
    A: () => c
});
var n = i(627968),
    a = i(64700),
    l = i(503698),
    s = i.n(l),
    r = i(584045);
class o extends a.PureComponent {
    static defaultProps = {
        tag: "div",
        forceHover: !1
    };
    render() {
        let {
            tag: e,
            children: t,
            hoverText: i,
            className: a,
            forceHover: l,
            ...o
        } = this.props;
        return (0, n.jsxs)("div", {
            ...o,
            className: s()(a, r.oM, {
                [r.r9]: null == i,
                [r.EE]: l
            }),
            children: [(0, n.jsx)(e, {
                className: r.yo,
                children: i
            }), (0, n.jsx)(e, {
                className: r.Ay,
                children: t
            })]
        })
    }
}
let c = o