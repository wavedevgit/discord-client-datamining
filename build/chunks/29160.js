/** chunk id: 29160, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => d
});
var n = i(627968),
    l = i(64700),
    r = i(503698),
    s = i.n(r),
    a = i(132172);
class o extends l.PureComponent {
    static defaultProps = {
        tag: "div",
        forceHover: !1
    };
    render() {
        let {
            tag: t,
            children: e,
            hoverText: i,
            className: l,
            forceHover: r,
            ...o
        } = this.props;
        return (0, n.jsxs)("div", {
            ...o,
            className: s()(l, a.oM, {
                [a.r9]: null == i,
                [a.EE]: r
            }),
            children: [(0, n.jsx)(t, {
                className: a.yo,
                children: i
            }), (0, n.jsx)(t, {
                className: a.Ay,
                children: e
            })]
        })
    }
}
let d = o