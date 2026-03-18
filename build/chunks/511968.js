/** chunk id: 511968 params = (module,exports,require) **/
n.d(t, {
    A: () => h
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
    m = n(240248),
    g = n(237218),
    A = n(689296),
    x = n(542858);

function h(e) {
    let {
        cta: t,
        storeListing: n,
        className: l
    } = e, {
        applicationId: h,
        benefits: p,
        description: T
    } = n, E = s.useMemo(() => null == n.thumbnail ? null : (0, g.t)(h, n.thumbnail, 256), [h, n.thumbnail]), {
        data: S
    } = (0, c.j)(n.skuId), C = s.useMemo(() => {
        if (null == S || 0 === S.length) return null;
        let e = S[0];
        return (0, _._J)(e)
    }, [S]);
    return null == C ? null : (0, i.jsxs)(r.q, {
        className: a()(x.iE, l),
        header: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: x.qd,
                children: [null != E && (0, i.jsx)(d._V3, {
                    src: E.href,
                    imageClassName: x.rW,
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
        children: [!(0, m.uJ)(T) && (0, i.jsx)("div", {
            className: x.h_,
            children: (0, i.jsx)(A.A, {
                variant: "text-sm/medium",
                children: T
            })
        }), null != p && p.length > 0 && (0, i.jsx)("div", {
            className: x.PX,
            children: p.map(e => {
                let {
                    id: t,
                    name: n,
                    description: s,
                    icon: l
                } = e;
                return (0, i.jsx)(o.FY, {
                    header: n,
                    icon: (0, u.N)(h, l),
                    description: s
                }, t)
            })
        })]
    })
}