/** chunk id: 931936 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(627968),
    i = n(158954),
    s = n(554146),
    l = n(932001),
    o = n(630117),
    a = n(613943),
    d = n(71478),
    u = n(182859),
    c = n(636086),
    m = n(180185),
    p = n(629721),
    _ = n(269032),
    f = n(652215),
    g = n(49999),
    x = n(333354),
    A = n(985018),
    v = n(181978);

function h(e) {
    let {
        text: t
    } = e;
    return (0, r.jsx)("div", {
        className: v.ac,
        children: (0, r.jsx)(i.EYj, {
            variant: "text-sm/medium",
            children: t
        })
    })
}

function E(e) {
    let {
        guildId: t,
        showVideoCard: n = !1
    } = e, E = (0, d.A)(t), j = (0, o.A)(t), b = (0, a.A)(t), I = n ? [s.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD] : [], [S, C] = (0, l.kn)(I), w = S === s.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD, N = (0, _.A)(j.shouldShow || b.shouldShow || w);
    return E.shouldShow || j.shouldShow || b.shouldShow || N.shouldShow || w ? (0, r.jsxs)("div", {
        className: v.kL,
        children: [(0, r.jsx)(i.EYj, {
            variant: "eyebrow",
            color: "text-subtle",
            children: A.intl.string(x.default["3FRirU"])
        }), E.shouldShow && (0, r.jsx)(h, {
            text: E.text
        }), j.shouldShow && (0, r.jsx)(p.A, {
            guildId: t,
            powerupNames: j.expiringPowerupNames,
            warnings: j.warnings
        }), b.shouldShow && null != b.notificationConfig && (0, r.jsx)(m.A, {
            notificationConfig: b.notificationConfig,
            markAsDismissed: b.markAsDismissed
        }), N.shouldShow && (0, r.jsx)(c.A, {
            markAsDismissed: N.markAsDismissed
        }), w && (0, r.jsx)(u.A, {
            guildId: t,
            analyticsLocation: {
                page: f.liQ.GUILD_POWERUPS_OVERVIEW,
                section: f.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                object: f.ZSU.CARD
            },
            onDismiss: () => C(g.i.USER_DISMISS)
        })]
    }) : null
}