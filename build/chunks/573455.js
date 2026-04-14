/** chunk id: 573455 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => p
});
var n = s(627968);
s(64700);
var r = s(503698),
    l = s.n(r),
    a = s(424918),
    i = s(793574),
    o = s(688810),
    c = s(440938),
    d = s(993408),
    u = s(196231),
    _ = s(985018),
    g = s(297046);
let m = e => {
        let {
            handleTransition: t,
            featuredBlockRecord: s
        } = e;
        return (0, n.jsx)("div", {
            className: l()(g.n9, g.YB),
            children: s?.subblocks.map((e, s) => e.type === a.u.CATEGORY ? (0, n.jsx)(c.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: e.name,
                    pageSection: "featured_block",
                    tilePosition: s
                },
                children: (0, n.jsx)(u.S, {
                    subblock: e,
                    enablePreview: 0 === s,
                    badgeText: (0, d.HF)(e.unpublishedAt) ? _.intl.string(_.t["h/uBCR"]) : void 0,
                    handleTransition: t
                }, e.categoryStoreListingId)
            }, e.categoryStoreListingId) : null)
        })
    },
    h = e => {
        let {
            handleTransition: t,
            categories: s
        } = e;
        if (null == s || s.length < 2) return null;
        let [r, a] = s;
        return (0, n.jsx)("div", {
            className: l()(g.n9, g.YB),
            children: (0, n.jsxs)(c.R9, {
                newValue: {
                    categoryPosition: 1,
                    pageCategory: null != r ? r.name : a?.name,
                    pageSection: "featured_block",
                    tilePosition: +(null == r)
                },
                children: [null != r && (0, n.jsx)(u.S, {
                    category: r,
                    enablePreview: !0,
                    badgeText: (0, d.HF)(r.unpublishedAt) ? _.intl.string(_.t["h/uBCR"]) : void 0,
                    handleTransition: t
                }), null != a && (0, n.jsx)(u.S, {
                    category: a,
                    badgeText: (0, d.HF)(a.unpublishedAt) ? _.intl.string(_.t["h/uBCR"]) : void 0,
                    handleTransition: t
                })]
            })
        })
    },
    p = e => {
        let {
            isLoading: t,
            handleTransition: s,
            categories: r,
            featuredBlockRecord: a
        } = e, {
            analyticsLocations: c
        } = (0, o.Ay)(i.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
        return t ? (0, n.jsxs)("div", {
            className: l()(g.n9, g.YB),
            children: [(0, n.jsx)("div", {
                className: l()(g.Jn, g.oT),
                children: (0, n.jsx)("div", {
                    className: g.uy
                })
            }), (0, n.jsx)("div", {
                className: l()(g.Jn, g.oT),
                children: (0, n.jsx)("div", {
                    className: g.uy
                })
            })]
        }) : null != a ? (0, n.jsx)(o.f5, {
            value: c,
            children: (0, n.jsx)(m, {
                featuredBlockRecord: a,
                handleTransition: s,
                isLoading: !1
            })
        }) : (0, n.jsx)(o.f5, {
            value: c,
            children: (0, n.jsx)(h, {
                categories: r,
                handleTransition: s,
                isLoading: !1
            })
        })
    }