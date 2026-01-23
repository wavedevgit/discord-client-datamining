/** Chunk was on 47841 **/
/** chunk id: 619842, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(421380),
    l = n(945086),
    s = n(473145),
    a = n(652215),
    o = n(788868),
    c = n(985018),
    d = n(914016);

function u(e) {
    let {
        guild: t,
        numSounds: n,
        isOutOfSlots: u
    } = e, g = t.premiumTier, m = (0, s.ax)(g), p = o.y7[g] - 2;
    if (null == m || g === a.TVA.TIER_3 || n < p) return null;
    let f = u ? {
        color: i.XD.GREEN,
        look: i.pR.FILLED,
        text: c.intl.string(c.t.cYzxGn)
    } : void 0;
    return (0, r.jsx)(l.A, {
        header: c.intl.string(c.t.zT9SxY),
        text: c.intl.formatToPlainString(c.t.OKqEAU, {
            level: m,
            numAdditional: (0, s.Ry)(m)
        }),
        headerColor: "text-strong",
        textColor: "text-default",
        buttonProps: f,
        useExpressiveButton: !0,
        guild: t,
        analyticsLocation: {
            page: a.liQ.GUILD_SETTINGS,
            section: a.JJy.GUILD_SETTINGS_SOUNDBOARD,
            object: a.ZSU.BOOST_UPSELL_BANNER_SLOTS_FULL,
            objectType: (0, s.k1)(m)
        },
        className: d.k
    })
}