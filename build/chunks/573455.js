/** chunk id: 573455, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(424918),
    i = n(440938),
    o = n(993408),
    c = n(196231),
    u = n(985018),
    d = n(201073);
let g = e => {
        let {
            handleTransition: t,
            featuredBlockRecord: n
        } = e;
        return (0, r.jsx)("div", {
            className: s()(d.n9, d.YB),
            children: null == n ? void 0 : n.subblocks.map((e, n) => e.type === a.u.CATEGORY ? (0, r.jsx)(i.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: e.name,
                    pageSection: "featured_block",
                    tilePosition: n
                },
                children: (0, r.jsx)(c.S, {
                    subblock: e,
                    badgeText: (0, o.HF)(e.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : void 0,
                    handleTransition: t
                }, e.categoryStoreListingId)
            }, e.categoryStoreListingId) : null)
        })
    },
    f = e => {
        let {
            handleTransition: t,
            categories: n
        } = e;
        if (null == n || n.length < 2) return null;
        let [l, a] = n;
        return (0, r.jsx)("div", {
            className: s()(d.n9, d.YB),
            children: (0, r.jsxs)(i.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != l ? l.name : null == a ? void 0 : a.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == l)
                },
                children: [null != l && (0, r.jsx)(c.S, {
                    category: l,
                    badgeText: (0, o.HF)(l.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : void 0,
                    handleTransition: t
                }), null != a && (0, r.jsx)(c.S, {
                    category: a,
                    badgeText: (0, o.HF)(a.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : void 0,
                    handleTransition: t
                })]
            })
        })
    },
    m = e => {
        let {
            isLoading: t,
            handleTransition: n,
            categories: l,
            featuredBlockRecord: a
        } = e;
        return t ? (0, r.jsxs)("div", {
            className: s()(d.n9, d.YB),
            children: [(0, r.jsx)("div", {
                className: s()(d.Jn, d.oT),
                children: (0, r.jsx)("div", {
                    className: d.uy
                })
            }), (0, r.jsx)("div", {
                className: s()(d.Jn, d.oT),
                children: (0, r.jsx)("div", {
                    className: d.uy
                })
            })]
        }) : null != a ? (0, r.jsx)(g, {
            featuredBlockRecord: a,
            handleTransition: n,
            isLoading: !1
        }) : (0, r.jsx)(f, {
            categories: l,
            handleTransition: n,
            isLoading: !1
        })
    }