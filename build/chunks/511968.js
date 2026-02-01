/** chunk id: 511968, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(273166),
    o = n(885996),
    c = n(397927),
    d = n(963342),
    u = n(3432),
    _ = n(580630),
    p = n(240248),
    m = n(237218),
    g = n(689296),
    A = n(542858);

function f(e) {
    let {
        cta: t,
        storeListing: n,
        className: l
    } = e, {
        applicationId: f,
        benefits: b,
        description: h
    } = n, E = i.useMemo(() => null == n.thumbnail ? null : (0, m.t)(f, n.thumbnail, 256), [f, n.thumbnail]), {
        data: O
    } = (0, d.j)(n.skuId), x = i.useMemo(() => {
        if (null == O || 0 === O.length) return null;
        let e = O[0];
        return (0, _._J)(e)
    }, [O]);
    return null == x ? null : (0, r.jsxs)(a.q, {
        className: s()(A.iE, l),
        header: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
                className: A.qd,
                children: [null != E && (0, r.jsx)(c._V3, {
                    src: E.href,
                    imageClassName: A.rW,
                    width: 48,
                    height: 48
                }), (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(c.Heading, {
                        variant: "heading-md/bold",
                        children: n.summary
                    }), (0, r.jsx)(c.Text, {
                        variant: "text-md/medium",
                        children: x
                    })]
                })]
            }), t]
        }),
        children: [!(0, p.uJ)(h) && (0, r.jsx)("div", {
            className: A.h_,
            children: (0, r.jsx)(g.A, {
                variant: "text-sm/medium",
                children: h
            })
        }), null != b && b.length > 0 && (0, r.jsx)("div", {
            className: A.PX,
            children: b.map(e => {
                let {
                    id: t,
                    name: n,
                    description: i,
                    icon: l
                } = e;
                return (0, r.jsx)(o.FY, {
                    header: n,
                    icon: (0, u.N)(f, l),
                    description: i
                }, t)
            })
        })]
    })
}