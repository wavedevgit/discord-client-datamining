/** chunk id: 212602 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => x
});
var n = s(627968),
    r = s(64700),
    l = s(503698),
    i = s.n(l),
    a = s(401864),
    o = s(124987),
    c = s(397927),
    d = s(954571),
    u = s(440938),
    _ = s(365491),
    g = s(938191),
    m = s(758836),
    h = s(652215),
    p = s(985018),
    f = s(937202);
let x = () => {
    let {
        sort: e,
        onSetSort: t,
        hasRelevanceFilters: s
    } = (0, _.v)(), l = (0, u.uM)(), x = (0, g.yB)("CollectiblesSortSelect"), E = s(), b = r.useMemo(() => m.QB.filter(e => e.sortType !== o.$.RELEVANCE || E), [E]), C = r.useCallback(e => {
        let {
            sortType: t,
            sortDirection: s
        } = e;
        return t === o.$.RECENCY ? {
            label: p.intl.string(p.t["51Bhiz"]),
            value: "recent",
            id: "recent"
        } : t === o.$.PRICE ? s === a.A.ASC ? {
            label: p.intl.string(p.t.m8RVU2),
            value: "price-asc",
            id: "price-asc"
        } : {
            label: p.intl.string(p.t.zBwQJO),
            value: "price-desc",
            id: "price-desc"
        } : t === o.$.RELEVANCE ? {
            label: p.intl.string(p.t["XoeT/z"]),
            value: "relevance",
            id: "relevance"
        } : {
            label: p.intl.string(p.t.Y68e5p),
            value: "popularity",
            id: "popularity"
        }
    }, []), A = r.useCallback(e => ({
        recent: {
            sortType: o.$.RECENCY,
            sortDirection: a.A.DESC
        },
        "price-asc": {
            sortType: o.$.PRICE,
            sortDirection: a.A.ASC
        },
        "price-desc": {
            sortType: o.$.PRICE,
            sortDirection: a.A.DESC
        },
        popularity: {
            sortType: o.$.POPULARITY,
            sortDirection: a.A.DESC
        },
        relevance: {
            sortType: o.$.RELEVANCE,
            sortDirection: a.A.DESC
        }
    })[e], []), S = r.useCallback(e => {
        let s = C(A(e));
        d.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: l?.sessionId,
            page_section: l?.pageSection,
            page_category: l?.pageCategory,
            page_index: l?.pageIndex,
            page_size: l?.pageSize,
            cta_name: `sort by ${s.label.toLowerCase()}`,
            page_type: "catalog"
        }), t(A(e))
    }, [l, C, A, t]), v = C(e);
    return (0, n.jsx)("div", {
        className: i()(f.k, {
            [g.jP]: x
        }),
        children: (0, n.jsx)(c.l6P, {
            label: p.intl.string(p.t.uaX705),
            hideLabel: !0,
            options: b.map(C),
            onSelectionChange: S,
            value: v.value,
            selectionMode: "single",
            fullWidth: !0
        })
    })
}