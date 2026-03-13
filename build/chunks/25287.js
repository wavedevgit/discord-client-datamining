/** chunk id: 25287 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    l = n(64700),
    r = n(485845),
    a = n(311907),
    s = n(397927),
    o = n(803306),
    d = n(966327),
    c = n(688810),
    u = n(597929),
    g = n(263063),
    A = n(657331),
    m = n(260509),
    f = n(427157),
    p = n(734057),
    h = n(71393),
    y = n(287809),
    E = n(985018);

function S(e) {
    let {
        analyticsLocations: t
    } = (0, c.Ay)(), n = e.interactionMetadata?.authorizing_integration_owners[r.b.USER_INSTALL], S = e.interactionMetadata?.authorizing_integration_owners[r.b.GUILD_INSTALL], _ = e.interactionMetadata?.user.id, b = (0, a.bG)([y.default], () => y.default.getUser(n)), T = (0, a.bG)([h.A], () => h.A.getGuild(S)), v = p.A.getChannel(e.channel_id), I = v?.getGuildId(), x = (0, a.bG)([y.default], () => y.default.getUser(_));
    if (l.useEffect(() => {
            null == b && null != n && (0, o.wz)(n)
        }, [b, n]), !(0, u._)(e)) return null;
    null == x && (x = new f.A(e.interactionMetadata?.user));
    let C = null;
    if (null != T) {
        let t = (0, m.Iv)(T, 18, !0);
        C = (0, i.jsx)(s.Drp, {
            disabled: !0,
            iconLeft: () => (0, i.jsx)(g.Ay, {
                guild: T,
                size: g.Ay.Sizes.MINI
            }),
            leadingAccessory: null != t ? {
                type: "image",
                src: t
            } : void 0,
            id: "integration-owner",
            label: T.name,
            subtext: E.intl.formatToPlainString(E.t.ShLXXB, {
                application: e.author.username
            })
        })
    } else null != b && (C = (0, i.jsx)(s.Drp, {
        action: () => (0, A.openUserProfileModal)({
            userId: b.id,
            guildId: I,
            channelId: e.channel_id,
            sourceAnalyticsLocations: t
        }),
        leadingAccessory: {
            type: "avatar",
            src: b.getAvatarURL(I, 18)
        },
        id: "integration-owner",
        label: b.username,
        iconLeft: () => (0, i.jsx)(d.A, {
            user: b,
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
        children: [C, null != x ? (0, i.jsx)(s.Drp, {
            action: () => (0, A.openUserProfileModal)({
                userId: x.id,
                guildId: I,
                channelId: e.channel_id,
                sourceAnalyticsLocations: t
            }),
            leadingAccessory: {
                type: "avatar",
                src: x.getAvatarURL(I, 18)
            },
            iconLeft: () => (0, i.jsx)(d.A, {
                user: x,
                size: s._3J.SIZE_20
            }),
            id: "interaction-user",
            label: x.username,
            subtext: E.intl.string(E.t["04gxNg"])
        }) : null]
    })
}