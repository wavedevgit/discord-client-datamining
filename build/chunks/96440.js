/** chunk id: 96440 params = (module,exports,require) **/
n.d(t, {
    W: () => T
}), n(321073);
var i = n(627968),
    r = n(311907),
    a = n(793574),
    l = n(688810),
    s = n(522305),
    o = n(735991),
    d = n(361926),
    c = n(485724),
    u = n(572211),
    _ = n(354287),
    m = n(574660),
    h = n(625180),
    p = n(207371),
    g = n(734057),
    A = n(309010),
    x = n(486020),
    f = n(795816),
    C = n(933958),
    E = n(574152),
    I = n(782091),
    b = n(985018);

function T(e) {
    let {
        application: t,
        customId: n,
        customLink: T,
        referrerId: v,
        message: S
    } = e, y = t?.bot?.id, N = (0, d.Vr)({
        context: {
            type: "contextless"
        },
        applicationId: t.id,
        botUserId: t?.bot?.id
    }), j = null != t && (0, o.Ag)(t), L = null != y && j && N, {
        analyticsLocations: R
    } = (0, l.Ay)(a.A.ACTIVITY_CUSTOM_LINK), P = (0, r.bG)([A.A], () => A.A.getChannelId()), M = (0, I.et)(P), O = (0, r.bG)([C.Ay], () => {
        if (null == P) return;
        let e = C.Ay.getEmbeddedActivitiesForChannel(P).filter(e => e.applicationId === t.id);
        return e.length > 0 ? e[0].compositeInstanceId : void 0
    }), D = (0, r.bG)([C.Ay], () => C.Ay.getCurrentEmbeddedActivity()), w = (0, E.A)(), k = M === I.xy.CAN_LAUNCH, U = null != O && D?.compositeInstanceId === O, G = null != n ? n : T.customId, B = (0, p.e)(t), F = [];
    B ? F.push({
        label: b.intl.string(b.t.RscU7I),
        trackingArea: _.kY.PLAY,
        onClick() {
            h.A.launchFrame({
                applicationId: t.id
            })
        }
    }) : (k && F.push({
        label: null == O ? b.intl.string(b.t.RscU7I) : U ? b.intl.string(b.t.DPfdsq) : b.intl.string(b.t.sqe0hj),
        trackingArea: _.kY.PLAY,
        onClick() {
            (0, f.su)({
                channelId: P ?? void 0,
                applicationId: t.id,
                isStart: null == O,
                embeddedActivitiesManager: w,
                customId: G,
                referrerId: v,
                analyticsLocations: R
            })
        },
        disabled: U
    }), L && !k && F.push({
        label: b.intl.string(b.t.JeK1Wg),
        trackingArea: _.kY.PLAY,
        onClick() {
            (0, s.Q)({
                appId: t.id,
                botId: y,
                analyticsLocations: R,
                customId: G,
                referrerId: v
            })
        }
    }));
    let H = (0, m.F)(t);
    return (0, i.jsx)(u.h, {
        actions: F,
        onClickContent: H,
        header: t.name,
        iconSrc: x.Ay.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: t.bot
        }),
        info: (0, i.jsx)("div", {
            children: T.description
        }),
        staticBannerSrc: T.getAssetURL(),
        title: T.title,
        trackingConfig: {
            id: t.id,
            linkType: c.J.CUSTOM_ACTIVITY_LINK,
            referrerId: v,
            activityCustomId: G,
            guildId: g.A.getChannel(S.channel_id)?.guild_id,
            channelId: S.channel_id,
            messageId: S.id
        }
    })
}