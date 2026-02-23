/** chunk id: 212602, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(401864),
    o = n(124987),
    c = n(397927),
    d = n(954571),
    u = n(440938),
    g = n(365491),
    _ = n(938191),
    m = n(758836),
    h = n(652215),
    p = n(985018),
    f = n(785244);
let x = () => {
    let {
        sort: e,
        onSetSort: t,
        hasRelevanceFilters: n
    } = (0, g.v)(), r = (0, u.uM)(), x = (0, _.yB)("CollectiblesSortSelect"), E = n(), C = l.useMemo(() => m.QB.filter(e => e.sortType !== o.$.RELEVANCE || E), [E]), A = l.useCallback(e => {
        let {
            sortType: t,
            sortDirection: n
        } = e;
        return t === o.$.RECENCY ? {
            label: p.intl.string(p.t["51Bhiz"]),
            value: "recent",
            id: "recent"
        } : t === o.$.PRICE ? n === i.A.ASC ? {
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
        let n = A(b(e));
        d.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: r?.sessionId,
            page_section: r?.pageSection,
            page_category: r?.pageCategory,
            page_index: r?.pageIndex,
            page_size: r?.pageSize,
            cta_name: `sort by ${n.label.toLowerCase()}`,
            page_type: "catalog"
        }), t(b(e))
    }, [r, A, b, t]), v = A(e);
    return (0, s.jsx)("div", {
        className: a()(f.k, {
            [_.jP]: x
        }),
        children: (0, s.jsx)(c.l6P, {
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