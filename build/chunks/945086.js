/** Chunk was on 47841 **/
/** chunk id: 945086, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(421380),
    a = n(397927),
    o = n(793574),
    c = n(688810),
    d = n(721923),
    u = n(985018),
    g = n(283008);
let m = e => {
    let {
        guild: t,
        analyticsLocation: n,
        className: i,
        buttonProps: l = {
            color: s.XD.BRAND_INVERTED,
            text: u.intl.string(u.t.oqweNx)
        },
        useExpressiveButton: a
    } = e, {
        color: o,
        text: c
    } = l, g = t.premiumTier + 1;
    return (0, r.jsx)(d.A, {
        color: o,
        analyticsLocation: n,
        guild: t,
        buttonText: c,
        targetBoostedGuildTier: g,
        className: i,
        useExpressiveButton: a
    })
};

function p(e) {
    let {
        header: t,
        text: i,
        analyticsLocation: s,
        guild: d,
        className: u,
        textColor: p,
        headerColor: f,
        buttonProps: b,
        useExpressiveButton: h
    } = e, {
        analyticsLocations: x
    } = (0, c.Ay)(o.A.GUILD_BOOSTING_UPSELL_BANNER);
    return (0, r.jsx)(c.f5, {
        value: x,
        children: (0, r.jsxs)("div", {
            className: l()(g.vK, u),
            children: [(0, r.jsx)("img", {
                className: g.__invalid_headerGraphic,
                alt: "",
                src: n(549408)
            }), (0, r.jsxs)("div", {
                className: g.Qs,
                children: [(0, r.jsx)(a.Text, {
                    variant: "text-lg/semibold",
                    color: null != f ? f : "always-white",
                    className: g.wx,
                    children: t
                }), (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: null != p ? p : "always-white",
                    children: i
                })]
            }), (0, r.jsx)("div", {
                className: g.OQ,
                children: (0, r.jsx)(m, {
                    guild: d,
                    analyticsLocation: s,
                    className: g.x6,
                    buttonProps: b,
                    useExpressiveButton: h
                })
            })]
        })
    })
}