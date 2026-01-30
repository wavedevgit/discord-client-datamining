/** chunk id: 307414, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => m
});
var n = r(627968),
    a = r(64700),
    i = r(735438),
    l = r.n(i),
    s = r(397927),
    o = r(828904),
    d = r(974175),
    c = r(985018);
class u extends a.PureComponent {
    render() {
        let {
            screenshare: e
        } = this.props;
        if (null == e) return (0, n.jsx)(s.y$y, {
            type: s.y$y.Type.SPINNING_CIRCLE
        });
        let t = l().map(e, (e, t) => {
            if (!(d.R[t] || void 0 === e)) return (0, n.jsx)(d.q7, {
                label: t,
                value: e
            }, t)
        });
        return (0, n.jsxs)(s.BJc, {
            children: [(0, n.jsx)(s.Heading, {
                variant: "heading-md/medium",
                children: c.intl.string(c.t["gWbr/U"])
            }), (0, o.C6)(t)]
        })
    }
}
let m = u