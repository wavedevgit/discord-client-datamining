/** chunk id: 976742, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => S
});
var n = s(627968),
    l = s(64700),
    r = s(172218),
    a = s(417597),
    i = s(397927),
    o = s(287809),
    c = s(440938),
    d = s(511265),
    u = s(206077),
    _ = s(100057),
    g = s(903403),
    m = s(392183),
    h = s(751304),
    p = s(561769),
    f = s(159439),
    x = s(998694),
    E = s(758836),
    C = s(157884);

function b(e) {
    let {
        category: t
    } = e, s = (0, a.bG)([o.default], () => o.default.getCurrentUser()), l = (0, u.X)(t.products), r = (0, d.p)()(l), i = (0, c.uM)();
    return null == s || 0 === r.length ? null : (0, n.jsx)("div", {
        className: C.vY,
        children: r.map((e, t) => (0, n.jsx)(c.R9, {
            newValue: {
                tilePosition: t
            },
            children: (0, n.jsx)(h.A, {
                skuId: e.skuId,
                skipLimitedTimeCheck: !0,
                onClickAnalytics: (0, p.UU)(e, E.G2.CATALOG, i)
            }, e.skuId)
        }, e.skuId))
    })
}

function A(e) {
    let {
        category: t
    } = e, [s, a] = l.useState(!1), i = (0, r.K)(e => {
        a(e)
    }, .15);
    return (0, n.jsxs)("div", {
        className: C.EF,
        ref: i,
        children: [(0, n.jsx)(g.A, {
            category: t
        }), (0, n.jsx)(b, {
            category: t
        })]
    })
}

function S(e) {
    let {
        categories: t,
        setCategoryRef: s,
        currentPage: r,
        handlePageChange: a,
        initialCategoryId: o
    } = e, d = (0, c.uM)(), u = (0, f.U)(), g = d?.sessionId ?? "", {
        noCache: h,
        includeUnpublished: p
    } = (0, x.A)(), b = l.useMemo(() => t.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
        let {
            products: t
        } = e;
        return t.length > 0
    }), [t]), S = l.useRef(void 0);
    l.useEffect(() => {
        if (null == o || 0 === b.length) {
            S.current = void 0;
            return
        }
        if (o === S.current) return;
        let e = b.findIndex(e => e.skuId === o);
        if (-1 === e) return;
        let t = Math.floor(e / E.l5) + 1;
        t !== r && a(t), S.current = o
    }, [o, b, a, r]);
    let v = l.useMemo(() => {
        let e = (r - 1) * E.l5;
        return b.slice(e, e + E.l5)
    }, [b, r]);
    return (l.useEffect(() => {
        (0, _.z)({
            sessionId: g,
            checkpoint: _.t.SHOP_MOUNTED,
            tab: E.G2.CATALOG,
            unpublishedCategoriesShown: p,
            cacheDisabled: h
        })
    }, []), l.useEffect(() => {
        u || 0 === v.length || (0, _.z)({
            sessionId: g,
            checkpoint: _.t.SHOP_RENDERED,
            tab: E.G2.CATALOG,
            unpublishedCategoriesShown: p,
            cacheDisabled: h
        })
    }, [g, p, h, u, v.length]), u) ? (0, n.jsx)(m.A, {}) : (0, n.jsxs)("div", {
        className: C.LZ,
        children: [v.map((e, t) => (0, n.jsx)("div", {
            ref: t => s(e.skuId, t),
            children: (0, n.jsx)(c.R9, {
                newValue: {
                    categoryPosition: t
                },
                children: (0, n.jsx)(A, {
                    category: e
                })
            })
        }, e.skuId)), (0, n.jsx)("div", {
            className: C.Ej,
            children: (0, n.jsx)(i.mgR, {
                currentPage: r,
                totalCount: b.length,
                pageSize: E.l5,
                onPageChange: a,
                disablePaginationGap: !0
            })
        })]
    })
}