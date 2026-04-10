/** chunk id: 511968 params = (module,exports,require) **/
n.d(t, {
    A: () => A
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
    m = n(580630),
    g = n(240248),
    _ = n(237218),
    x = n(689296),
    h = n(615751);

function A(e) {
    let {
        cta: t,
        storeListing: n,
        className: l
    } = e, {
        applicationId: A,
        benefits: p,
        description: T
    } = n, f = s.useMemo(() => null == n.thumbnail ? null : (0, _.t)(A, n.thumbnail, 256), [A, n.thumbnail]), {
        data: S
    } = (0, c.j)(n.skuId), E = s.useMemo(() => {
        if (null == S || 0 === S.length) return null;
        let e = S[0];
        return (0, m._J)(e)
    }, [S]);
    return null == E ? null : (0, i.jsxs)(a.q, {
        className: r()(h.iE, l),
        header: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: h.qd,
                children: [null != f && (0, i.jsx)(d._V3, {
                    src: f.href,
                    imageClassName: h.rW,
                    width: 48,
                    height: 48
                }), (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(d.Heading, {
                        variant: "heading-md/bold",
                        children: n.summary
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: E
                    })]
                })]
            }), t]
        }),
        children: [!(0, g.uJ)(T) && (0, i.jsx)("div", {
            className: h.h_,
            children: (0, i.jsx)(x.A, {
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
                    icon: (0, u.N)(A, l),
                    description: s
                }, t)
            })
        })]
    })
}