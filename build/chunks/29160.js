/** chunk id: 29160, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => d
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(842642);
class o extends l.PureComponent {
    static defaultProps = {
        tag: "div",
        forceHover: !1
    };
    render() {
        let {
            tag: t,
            children: e,
            hoverText: n,
            className: l,
            forceHover: r,
            ...o
        } = this.props;
        return (0, i.jsxs)("div", {
            ...o,
            className: a()(l, s.oM, {
                [s.r9]: null == n,
                [s.EE]: r
            }),
            children: [(0, i.jsx)(t, {
                className: s.yo,
                children: n
            }), (0, i.jsx)(t, {
                className: s.Ay,
                children: e
            })]
        })
    }
}
let d = o