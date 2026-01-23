/** Chunk was on 47841 **/
/** chunk id: 694878, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(793574),
    a = n(525104),
    o = n(828162),
    c = n(997509),
    d = n(610042),
    u = n(583970),
    g = n(985018);

function m(e) {
    let {
        className: t,
        guildId: n,
        selectedBadge: m
    } = e, p = i.useCallback(e => {
        c.A.updateGuildProfile(n, {
            badge: e
        })
    }, [n]), f = i.useCallback(() => {
        (0, o.A)(n, s.A.GUILD_POWERUPS_GUILD_SETTINGS_TAGS, "guildTagsBadgePacks"), c.A.close()
    }, [n]), b = (0, a.A)(), h = i.useId();
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(l.D0$, {
            label: g.intl.string(u.default.pb7lpK),
            id: h,
            children: (0, r.jsx)(d.y, {
                badgeCollection: b,
                handleBoostUpsellClick: f,
                onBadgeClicked: p,
                selectedBadge: m,
                headingId: h
            })
        })
    })
}