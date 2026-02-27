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
    g = s(365491),
    _ = s(938191),
    m = s(758836),
    h = s(652215),
    p = s(985018),
    f = s(785244);
let x = () => {
    let {
        sort: e,
        onSetSort: t,
        hasRelevanceFilters: s
    } = (0, g.v)(), r = (0, u.uM)(), x = (0, _.yB)("CollectiblesSortSelect"), E = s(), C = l.useMemo(() => m.QB.filter(e => e.sortType !== o.$.RELEVANCE || E), [E]), A = l.useCallback(e => {
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
    }, []), b = l.useCallback(e => ({
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
        let s = A(b(e));
        d.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: r?.sessionId,
            page_section: r?.pageSection,
            page_category: r?.pageCategory,
            page_index: r?.pageIndex,
            page_size: r?.pageSize,
            cta_name: `sort by ${s.label.toLowerCase()}`,
            page_type: "catalog"
        }), t(b(e))
    }, [r, A, b, t]), v = A(e);
    return (0, n.jsx)("div", {
        className: a()(f.k, {
            [_.jP]: x
        }),
        children: (0, n.jsx)(c.l6P, {
            label: p.intl.string(p.t.uaX705),
            hideLabel: !0,
            options: C.map(A),
            onSelectionChange: S,
            value: v.value,
            selectionMode: "single",
            fullWidth: !0
        })
    })
}