/** chunk id: 511968 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(273166),
    o = n(885996),
    d = n(397927),
    c = n(963342),
    u = n(3432),
    _ = n(580630),
    g = n(240248),
    m = n(237218),
    A = n(689296),
    h = n(542858);

function p(e) {
    let {
        cta: t,
        storeListing: n,
        className: l
    } = e, {
        applicationId: p,
        benefits: x,
        description: E
    } = n, T = s.useMemo(() => null == n.thumbnail ? null : (0, m.t)(p, n.thumbnail, 256), [p, n.thumbnail]), {
        data: S
    } = (0, c.j)(n.skuId), C = s.useMemo(() => {
        if (null == S || 0 === S.length) return null;
        let e = S[0];
        return (0, _._J)(e)
    }, [S]);
    return null == C ? null : (0, i.jsxs)(r.q, {
        className: a()(h.iE, l),
        header: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: h.qd,
                children: [null != T && (0, i.jsx)(d._V3, {
                    src: T.href,
                    imageClassName: h.rW,
                    width: 48,
                    height: 48
                }), (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(d.Heading, {
                        variant: "heading-md/bold",
                        children: n.summary
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: C
                    })]
                })]
            }), t]
        }),
        children: [!(0, g.uJ)(E) && (0, i.jsx)("div", {
            className: h.h_,
            children: (0, i.jsx)(A.A, {
                variant: "text-sm/medium",
                children: E
            })
        }), null != x && x.length > 0 && (0, i.jsx)("div", {
            className: h.PX,
            children: x.map(e => {
                let {
                    id: t,
                    name: n,
                    description: s,
                    icon: l
                } = e;
                return (0, i.jsx)(o.FY, {
                    header: n,
                    icon: (0, u.N)(p, l),
                    description: s
                }, t)
            })
        })]
    })
}