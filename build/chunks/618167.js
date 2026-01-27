/** Chunk was on 34749 **/
/** chunk id: 618167, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => f
});
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    a = l(311907),
    o = l(263063),
    u = l(496885),
    c = l(313375),
    d = l(61780),
    m = l(473145),
    x = l(942975),
    g = l(645619),
    h = l(434564),
    j = l(92707);
class p extends r.PureComponent {
    render() {
        let {
            tier: e
        } = this.props;
        return (0, n.jsxs)("div", {
            className: j._v,
            children: [(0, n.jsx)(u.A, {
                className: j.U2,
                children: (0, n.jsx)(c.A, {
                    tier: e,
                    color: "currentColor",
                    className: j.Zw
                })
            }), (0, m.gb)(e)]
        })
    }
}
let C = e => {
    let {
        subscriptionChange: t,
        guild: l
    } = e, r = (0, h.A)(l.id);
    if (0 === t) return null;
    let i = (0, m.P7)(l.id),
        s = (0, m.kN)(r + t),
        a = s - i;
    return 0 === a ? null : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d.A, {
            className: a > 0 ? j.$P : j.q0
        }), (0, n.jsx)(p, {
            tier: s
        })]
    })
};

function f(e) {
    let {
        guild: t,
        className: l,
        subscriptionChange: i
    } = e, u = (0, a.bG)([g.A], () => null != g.A.getStateForGuild(t.id));
    return r.useEffect(() => {
        u || (0, x.Xd)(t.id)
    }, [u, t.id]), (0, n.jsxs)("div", {
        className: s()(j.gP, l),
        children: [(0, n.jsx)(o.A, {
            guild: t,
            size: o.A.Sizes.LARGE
        }), (0, n.jsxs)("div", {
            className: j.EF,
            children: [(0, n.jsx)("div", {
                className: j.J5,
                children: t.name
            }), (0, n.jsxs)("div", {
                className: j.jp,
                children: [(0, n.jsx)(p, {
                    tier: t.premiumTier
                }), (0, n.jsx)(C, {
                    guild: t,
                    subscriptionChange: null != i ? i : 0
                })]
            })]
        })]
    })
}