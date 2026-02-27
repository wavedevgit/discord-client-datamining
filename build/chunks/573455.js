/** chunk id: 573455, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => m
});
var n = s(627968);
s(64700);
var l = s(503698),
    r = s.n(l),
    a = s(424918),
    i = s(440938),
    o = s(993408),
    c = s(196231),
    d = s(985018),
    u = s(201073);
let g = e => {
        let {
            handleTransition: t,
            featuredBlockRecord: s
        } = e;
        return (0, n.jsx)("div", {
            className: r()(u.n9, u.YB),
            children: s?.subblocks.map((e, s) => e.type === a.u.CATEGORY ? (0, n.jsx)(i.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: e.name,
                    pageSection: "featured_block",
                    tilePosition: s
                },
                children: (0, n.jsx)(c.S, {
                    subblock: e,
                    badgeText: (0, o.HF)(e.unpublishedAt) ? d.intl.string(d.t["h/uBCR"]) : void 0,
                    handleTransition: t
                }, e.categoryStoreListingId)
            }, e.categoryStoreListingId) : null)
        })
    },
    _ = e => {
        let {
            handleTransition: t,
            categories: s
        } = e;
        if (null == s || s.length < 2) return null;
        let [l, a] = s;
        return (0, n.jsx)("div", {
            className: r()(u.n9, u.YB),
            children: (0, n.jsxs)(i.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != l ? l.name : a?.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == l)
                },
                children: [null != l && (0, n.jsx)(c.S, {
                    category: l,
                    badgeText: (0, o.HF)(l.unpublishedAt) ? d.intl.string(d.t["h/uBCR"]) : void 0,
                    handleTransition: t
                }), null != a && (0, n.jsx)(c.S, {
                    category: a,
                    badgeText: (0, o.HF)(a.unpublishedAt) ? d.intl.string(d.t["h/uBCR"]) : void 0,
                    handleTransition: t
                })]
            })
        })
    },
    m = e => {
        let {
            isLoading: t,
            handleTransition: s,
            categories: l,
            featuredBlockRecord: a
        } = e;
        return t ? (0, n.jsxs)("div", {
            className: r()(u.n9, u.YB),
            children: [(0, n.jsx)("div", {
                className: r()(u.Jn, u.oT),
                children: (0, n.jsx)("div", {
                    className: u.uy
                })
            }), (0, n.jsx)("div", {
                className: r()(u.Jn, u.oT),
                children: (0, n.jsx)("div", {
                    className: u.uy
                })
            })]
        }) : null != a ? (0, n.jsx)(g, {
            featuredBlockRecord: a,
            handleTransition: s,
            isLoading: !1
        }) : (0, n.jsx)(_, {
            categories: l,
            handleTransition: s,
            isLoading: !1
        })
    }