/** chunk id: 509536, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    K: () => h
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(793574),
    o = n(688810),
    s = n(361158),
    l = n(375965),
    c = n(71393),
    u = n(287809),
    d = n(405680),
    f = n(426760);
let p = "BoostedGuildPerksModalConnected",
    _ = e => {
        let {
            guildId: t,
            close: n,
            location: s,
            scrollToPowerupCards: p
        } = e, _ = (0, i.bG)([u.default], () => u.default.getCurrentUser()), h = (0, i.bG)([c.A], () => c.A.getGuild(t), [t]), {
            analyticsLocations: m
        } = (0, o.Ay)(a.A.BOOSTED_GUILD_PERKS_MODAL), g = (0, l.j)("BoostedGuildPerksModal");
        if (null == _ || null == h) return null;
        let E = g ? f.A : d.A;
        return (0, r.jsx)(o.f5, {
            value: m,
            children: (0, r.jsx)(E, {
                analyticsLocation: s,
                onClose: n,
                guild: h,
                scrollToPowerupCards: p
            })
        })
    };

function h(e) {
    let {
        guildId: t,
        location: n,
        scrollToPowerupCards: i
    } = e;
    (0, s.B8)(e => {
        let {
            closeLayer: a
        } = e;
        return (0, r.jsx)(_, {
            close: a,
            guildId: t,
            location: n,
            scrollToPowerupCards: i
        })
    }, {
        layerKey: p
    })
}