/** chunk id: 976742, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
}), n(896048);
var r = n(627968),
    l = n(64700),
    s = n(172218),
    a = n(417597),
    i = n(397927),
    o = n(287809),
    c = n(440938),
    u = n(511265),
    d = n(206077),
    g = n(100057),
    f = n(903403),
    m = n(392183),
    p = n(751304),
    _ = n(561769),
    b = n(159439),
    h = n(998694),
    E = n(940622),
    v = n(758836),
    C = n(157884);

function A(e) {
    let {
        category: t
    } = e, n = (0, a.bG)([o.default], () => o.default.getCurrentUser()), l = (0, d.X)(t.products), s = (0, u.p)()(l), i = (0, E.od)(s), g = (0, c.uM)();
    return null == n || 0 === i.length ? null : (0, r.jsx)("div", {
        className: C.vY,
        children: i.map((e, t) => (0, r.jsx)(c.R9, {
            newValue: {
                tilePosition: t
            },
            children: (0, r.jsx)(p.A, {
                skuId: e.skuId,
                skipLimitedTimeCheck: !0,
                onClickAnalytics: (0, _.UU)(e, v.G2.CATALOG, g)
            }, e.skuId)
        }, e.skuId))
    })
}

function x(e) {
    let {
        category: t
    } = e, [n, a] = l.useState(!1), i = (0, s.K)(e => {
        a(e)
    }, .15);
    return (0, r.jsxs)("div", {
        className: C.EF,
        ref: i,
        children: [(0, r.jsx)(f.A, {
            category: t
        }), (0, r.jsx)(A, {
            category: t
        })]
    })
}

function S(e) {
    var t;
    let {
        sortedCategories: n,
        setCategoryRef: s,
        currentPage: a,
        handlePageChange: o,
        initialCategoryId: u
    } = e, d = (0, c.uM)(), f = (0, b.U)(), p = null != (t = null == d ? void 0 : d.sessionId) ? t : "", {
        noCache: _,
        includeUnpublished: E
    } = (0, h.A)(), A = l.useMemo(() => n.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
        let {
            products: t
        } = e;
        return t.length > 0
    }), [n]), S = l.useRef(void 0);
    l.useEffect(() => {
        if (null == u || 0 === A.length) {
            S.current = void 0;
            return
        }
        if (u === S.current) return;
        let e = A.findIndex(e => e.skuId === u);
        if (-1 === e) return;
        let t = Math.floor(e / v.l5) + 1;
        t !== a && o(t), S.current = u
    }, [u, A, o, a]);
    let O = l.useMemo(() => {
        let e = (a - 1) * v.l5;
        return A.slice(e, e + v.l5)
    }, [A, a]);
    return (l.useEffect(() => {
        (0, g.z)({
            sessionId: p,
            checkpoint: g.t.SHOP_MOUNTED,
            tab: v.G2.CATALOG,
            unpublishedCategoriesShown: E,
            cacheDisabled: _
        })
    }, []), l.useEffect(() => {
        f || 0 === O.length || (0, g.z)({
            sessionId: p,
            checkpoint: g.t.SHOP_RENDERED,
            tab: v.G2.CATALOG,
            unpublishedCategoriesShown: E,
            cacheDisabled: _
        })
    }, [p, E, _, f, O.length]), f) ? (0, r.jsx)(m.A, {}) : (0, r.jsxs)("div", {
        className: C.LZ,
        children: [O.map((e, t) => (0, r.jsx)("div", {
            ref: t => s(e.skuId, t),
            children: (0, r.jsx)(c.R9, {
                newValue: {
                    categoryPosition: t
                },
                children: (0, r.jsx)(x, {
                    category: e
                })
            })
        }, e.skuId)), (0, r.jsx)("div", {
            className: C.Ej,
            children: (0, r.jsx)(i.mgR, {
                currentPage: a,
                totalCount: A.length,
                pageSize: v.l5,
                onPageChange: o,
                disablePaginationGap: !0
            })
        })]
    })
}