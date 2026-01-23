/** Chunk was on web.js **/
/** chunk id: 37188, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(688810),
    s = n(702211),
    o = n(915614),
    l = n(385612),
    c = n(339984),
    u = n(996988),
    d = n(985018),
    f = n(560754);

function p(e) {
    let {
        user: t,
        displayProfile: n,
        guildId: p,
        canUsePremiumCustomization: _,
        pendingBanner: h,
        pendingAccentColor: m,
        isTryItOut: g,
        disabledInputs: E,
        onUpsellClick: y
    } = e, {
        newestAnalyticsLocation: b
    } = (0, a.Ay)(), O = _ || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1, v = O ? i.R2l : i.tvc, A = (0, s.b)(O), I = () => {
        if (!O && !A) {
            null == y || y();
            return
        }(0, l.XD)({
            uploadType: c.HL.BANNER,
            analyticsSource: b,
            guildId: p,
            isTryItOut: g
        })
    };
    return (0, r.jsx)(o.A, {
        user: t,
        displayProfile: n,
        guildId: p,
        themeType: u.d.POPOUT,
        pendingBanner: h,
        pendingAccentColor: m,
        canUsePremiumProfileCustomization: _,
        children: !E && (0, r.jsxs)(i.DUT, {
            onClick: I,
            className: f.v,
            children: [(0, r.jsx)(v, {
                size: "xs",
                color: "white"
            }), (0, r.jsx)(i.Heading, {
                variant: "text-sm/medium",
                color: "always-white",
                children: O || A ? d.intl.string(d.t.N0bC3P) : d.intl.string(d.t.O1sT5v)
            })]
        })
    })
}