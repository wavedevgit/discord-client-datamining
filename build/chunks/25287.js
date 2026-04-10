/** chunk id: 25287 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    l = n(64700),
    a = n(485845),
    r = n(311907),
    s = n(397927),
    o = n(803306),
    d = n(966327),
    c = n(688810),
    u = n(597929),
    g = n(263063),
    A = n(657331),
    p = n(260509),
    m = n(427157),
    f = n(734057),
    h = n(71393),
    y = n(287809),
    E = n(985018);

function S(e) {
    let {
        analyticsLocations: t
    } = (0, c.Ay)(), n = e.interactionMetadata?.authorizing_integration_owners[a.b.USER_INSTALL], S = e.interactionMetadata?.authorizing_integration_owners[a.b.GUILD_INSTALL], _ = e.interactionMetadata?.user.id, T = (0, r.bG)([y.default], () => y.default.getUser(n)), I = (0, r.bG)([h.A], () => h.A.getGuild(S)), v = f.A.getChannel(e.channel_id), b = v?.getGuildId(), D = (0, r.bG)([y.default], () => y.default.getUser(_));
    if (l.useEffect(() => {
            null == T && null != n && (0, o.wz)(n)
        }, [T, n]), !(0, u._)(e)) return null;
    null == D && (D = new m.A(e.interactionMetadata?.user));
    let x = null;
    if (null != I) {
        let t = (0, p.Iv)(I, 18, !0);
        x = (0, i.jsx)(s.Drp, {
            disabled: !0,
            iconLeft: () => (0, i.jsx)(g.Ay, {
                guild: I,
                size: g.Ay.Sizes.MINI
            }),
            leadingAccessory: null != t ? {
                type: "image",
                src: t
            } : void 0,
            id: "integration-owner",
            label: I.name,
            subtext: E.intl.formatToPlainString(E.t.ShLXXB, {
                application: e.author.username
            })
        })
    } else null != T && (x = (0, i.jsx)(s.Drp, {
        action: () => (0, A.openUserProfileModal)({
            userId: T.id,
            guildId: b,
            channelId: e.channel_id,
            sourceAnalyticsLocations: t
        }),
        leadingAccessory: {
            type: "avatar",
            src: T.getAvatarURL(b, 18)
        },
        id: "integration-owner",
        label: T.username,
        iconLeft: () => (0, i.jsx)(d.A, {
            user: T,
            size: s._3J.SIZE_20
        }),
        subtext: E.intl.formatToPlainString(E.t.ShLXXB, {
            application: e.author.username
        })
    }));
    return (0, i.jsxs)(s.Drp, {
        id: "view-interaction-info",
        label: E.intl.string(E.t.Rjezbz),
        leadingAccessory: {
            type: "icon",
            icon: s.mir
        },
        children: [x, null != D ? (0, i.jsx)(s.Drp, {
            action: () => (0, A.openUserProfileModal)({
                userId: D.id,
                guildId: b,
                channelId: e.channel_id,
                sourceAnalyticsLocations: t
            }),
            leadingAccessory: {
                type: "avatar",
                src: D.getAvatarURL(b, 18)
            },
            iconLeft: () => (0, i.jsx)(d.A, {
                user: D,
                size: s._3J.SIZE_20
            }),
            id: "interaction-user",
            label: D.username,
            subtext: E.intl.string(E.t["04gxNg"])
        }) : null]
    })
}