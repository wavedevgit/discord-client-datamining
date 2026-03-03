/** chunk id: 212602, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => x
});
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(401864),
    o = s(124987),
    c = s(397927),
    d = s(954571),
    u = s(440938),
    _ = s(365491),
    g = s(938191),
    m = s(758836),
    h = s(652215),
    p = s(985018),
    f = s(785244);
let x = () => {
    let {
        sort: e,
        onSetSort: t,
        hasRelevanceFilters: s
    } = (0, _.v)(), r = (0, u.uM)(), x = (0, g.yB)("CollectiblesSortSelect"), E = s(), C = l.useMemo(() => m.QB.filter(e => e.sortType !== o.$.RELEVANCE || E), [E]), b = l.useCallback(e => {
        let {
            sortType: t,
            sortDirection: s
        } = e;
        return t === o.$.RECENCY ? {
            label: p.intl.string(p.t["51Bhiz"]),
            value: "recent",
            id: "recent"
        } : t === o.$.PRICE ? s === i.A.ASC ? {
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
    }, []), A = l.useCallback(e => ({
        recent: {
            sortType: o.$.RECENCY,
            sortDirection: i.A.DESC
        },
        "price-asc": {
            sortType: o.$.PRICE,
            sortDirection: i.A.ASC
        },
        "price-desc": {
            sortType: o.$.PRICE,
            sortDirection: i.A.DESC
        },
        popularity: {
            sortType: o.$.POPULARITY,
            sortDirection: i.A.DESC
        },
        relevance: {
            sortType: o.$.RELEVANCE,
            sortDirection: i.A.DESC
        }
    })[e], []), S = l.useCallback(e => {
        let s = b(A(e));
        d.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: r?.sessionId,
            page_section: r?.pageSection,
            page_category: r?.pageCategory,
            page_index: r?.pageIndex,
            page_size: r?.pageSize,
            cta_name: `sort by ${s.label.toLowerCase()}`,
            page_type: "catalog"
        }), t(A(e))
    }, [r, b, A, t]), v = b(e);
    return (0, n.jsx)("div", {
        className: a()(f.k, {
            [g.jP]: x
        }),
        children: (0, n.jsx)(c.l6P, {
            label: p.intl.string(p.t.uaX705),
            hideLabel: !0,
            options: C.map(b),
            onSelectionChange: S,
            value: v.value,
            selectionMode: "single",
            fullWidth: !0
        })
    })
}