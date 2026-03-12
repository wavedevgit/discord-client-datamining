/** chunk id: 511968 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(273166),
    o = n(885996),
    d = n(397927),
    c = n(963342),
    u = n(3432),
    _ = n(580630),
    m = n(240248),
    g = n(237218),
    A = n(689296),
    h = n(194180);

function x(e) {
    let {
        cta: t,
        storeListing: n,
        className: l
    } = e, {
        applicationId: x,
        benefits: p,
        description: T
    } = n, E = s.useMemo(() => null == n.thumbnail ? null : (0, g.t)(x, n.thumbnail, 256), [x, n.thumbnail]), {
        data: C
    } = (0, c.j)(n.skuId), S = s.useMemo(() => {
        if (null == C || 0 === C.length) return null;
        let e = C[0];
        return (0, _._J)(e)
    }, [C]);
    return null == S ? null : (0, i.jsxs)(a.q, {
        className: r()(h.iE, l),
        header: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: h.qd,
                children: [null != E && (0, i.jsx)(d._V3, {
                    src: E.href,
                    imageClassName: h.rW,
                    width: 48,
                    height: 48
                }), (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(d.Heading, {
                        variant: "heading-md/bold",
                        children: n.summary
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: S
                    })]
                })]
            }), t]
        }),
        children: [!(0, m.uJ)(T) && (0, i.jsx)("div", {
            className: h.h_,
            children: (0, i.jsx)(A.A, {
                variant: "text-sm/medium",
                children: T
            })
        }), null != p && p.length > 0 && (0, i.jsx)("div", {
            className: h.PX,
            children: p.map(e => {
                let {
                    id: t,
                    name: n,
                    description: s,
                    icon: l
                } = e;
                return (0, i.jsx)(o.FY, {
                    header: n,
                    icon: (0, u.N)(x, l),
                    description: s
                }, t)
            })
        })]
    })
}