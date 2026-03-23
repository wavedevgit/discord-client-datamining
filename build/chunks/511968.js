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
    m = n(580630),
    _ = n(240248),
    g = n(237218),
    A = n(689296),
    x = n(542858);

function p(e) {
    let {
        cta: t,
        storeListing: n,
        className: l
    } = e, {
        applicationId: p,
        benefits: h,
        description: f
    } = n, T = s.useMemo(() => null == n.thumbnail ? null : (0, g.t)(p, n.thumbnail, 256), [p, n.thumbnail]), {
        data: E
    } = (0, c.j)(n.skuId), S = s.useMemo(() => {
        if (null == E || 0 === E.length) return null;
        let e = E[0];
        return (0, m._J)(e)
    }, [E]);
    return null == S ? null : (0, i.jsxs)(r.q, {
        className: a()(x.iE, l),
        header: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: x.qd,
                children: [null != T && (0, i.jsx)(d._V3, {
                    src: T.href,
                    imageClassName: x.rW,
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
        children: [!(0, _.uJ)(f) && (0, i.jsx)("div", {
            className: x.h_,
            children: (0, i.jsx)(A.A, {
                variant: "text-sm/medium",
                children: f
            })
        }), null != h && h.length > 0 && (0, i.jsx)("div", {
            className: x.PX,
            children: h.map(e => {
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