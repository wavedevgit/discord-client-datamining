/** chunk id: 618167 params = (module,exports,require) **/
l.d(e, {
    A: () => p
});
var n = l(627968),
    i = l(64700),
    s = l(503698),
    r = l.n(s),
    a = l(311907),
    o = l(263063),
    d = l(496885),
    c = l(313375),
    u = l(61780),
    x = l(473145),
    m = l(942975),
    g = l(645619),
    h = l(434564),
    C = l(180318);
class j extends i.PureComponent {
    render() {
        let {
            tier: t
        } = this.props;
        return (0, n.jsxs)("div", {
            className: C._v,
            children: [(0, n.jsx)(d.A, {
                className: C.U2,
                children: (0, n.jsx)(c.A, {
                    tier: t,
                    color: "currentColor",
                    className: C.Zw
                })
            }), (0, x.gb)(t)]
        })
    }
}
let v = t => {
    let {
        subscriptionChange: e,
        guild: l
    } = t, i = (0, h.A)(l.id);
    if (0 === e) return null;
    let s = (0, x.P7)(l.id),
        r = (0, x.kN)(i + e),
        a = r - s;
    return 0 === a ? null : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u.A, {
            className: a > 0 ? C.$P : C.q0
        }), (0, n.jsx)(j, {
            tier: r
        })]
    })
};

function p(t) {
    let {
        guild: e,
        className: l,
        subscriptionChange: s
    } = t, d = (0, a.bG)([g.A], () => null != g.A.getStateForGuild(e.id));
    return i.useEffect(() => {
        d || (0, m.Xd)(e.id)
    }, [d, e.id]), (0, n.jsxs)("div", {
        className: r()(C.gP, l),
        children: [(0, n.jsx)(o.Ay, {
            guild: e,
            size: o.Ay.Sizes.LARGE
        }), (0, n.jsxs)("div", {
            className: C.EF,
            children: [(0, n.jsx)("div", {
                className: C.J5,
                children: e.name
            }), (0, n.jsxs)("div", {
                className: C.jp,
                children: [(0, n.jsx)(j, {
                    tier: e.premiumTier
                }), (0, n.jsx)(v, {
                    guild: e,
                    subscriptionChange: null != s ? s : 0
                })]
            })]
        })]
    })
}