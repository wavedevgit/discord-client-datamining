/** chunk id: 212602, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
}), n(638769);
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(401864),
    o = n(124987),
    c = n(397927),
    u = n(954571),
    d = n(440938),
    g = n(365491),
    f = n(938191),
    m = n(758836),
    p = n(652215),
    _ = n(985018),
    b = n(785244),
    h = n(816917);
let E = () => {
    let {
        sort: e,
        onSetSort: t,
        hasRelevanceFilters: n
    } = (0, g.v)(), s = (0, d.uM)(), E = (0, f.y)("CollectiblesSortSelect"), v = n(), C = l.useMemo(() => m.QB.filter(e => e.sortType !== o.$.RELEVANCE || v), [v]), A = l.useCallback(e => {
        let {
            sortType: t,
            sortDirection: n
        } = e;
        return t === o.$.RECENCY ? {
            label: _.intl.string(_.t["51Bhiz"]),
            value: "recent",
            id: "recent"
        } : t === o.$.PRICE ? n === i.A.ASC ? {
            label: _.intl.string(_.t.m8RVU2),
            value: "price-asc",
            id: "price-asc"
        } : {
            label: _.intl.string(_.t.zBwQJO),
            value: "price-desc",
            id: "price-desc"
        } : t === o.$.RELEVANCE ? {
            label: _.intl.string(_.t["XoeT/z"]),
            value: "relevance",
            id: "relevance"
        } : {
            label: _.intl.string(_.t.Y68e5p),
            value: "popularity",
            id: "popularity"
        }
    }, []), S = l.useCallback(e => ({
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
    })[e], []), x = l.useCallback(e => {
        let n = A(S(e));
        u.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == s ? void 0 : s.sessionId,
            page_section: null == s ? void 0 : s.pageSection,
            page_category: null == s ? void 0 : s.pageCategory,
            page_index: null == s ? void 0 : s.pageIndex,
            page_size: null == s ? void 0 : s.pageSize,
            cta_name: "sort by ".concat(n.label.toLowerCase()),
            page_type: "catalog"
        }), t(S(e))
    }, [s, A, S, t]), O = A(e);
    return (0, r.jsx)("div", {
        className: a()(b.k, {
            [h.T3]: E
        }),
        children: (0, r.jsx)(c.l6P, {
            label: _.intl.string(_.t.uaX705),
            hideLabel: !0,
            options: C.map(A),
            onSelectionChange: x,
            value: O.value,
            selectionMode: "single",
            fullWidth: !0
        })
    })
}