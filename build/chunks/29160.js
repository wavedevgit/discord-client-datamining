/** chunk id: 29160 params = (module,exports,require) **/
n.d(e, {
    A: () => u
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(817628);
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
            className: s()(l, a.oM, {
                [a.r9]: null == n,
                [a.EE]: r
            }),
            children: [(0, i.jsx)(t, {
                className: a.yo,
                children: n
            }), (0, i.jsx)(t, {
                className: a.Ay,
                children: e
            })]
        })
    }
}
let u = o