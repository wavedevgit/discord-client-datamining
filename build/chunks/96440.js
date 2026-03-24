/** chunk id: 96440 params = (module,exports,require) **/
n.d(t, {
    W: () => b
}), n(321073);
var i = n(627968),
    a = n(311907),
    r = n(793574),
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
    I = n(574152),
    E = n(782091),
    v = n(985018);

function b(e) {
    let {
        application: t,
        customId: n,
        customLink: b,
        referrerId: T,
        message: y
    } = e, S = t?.bot?.id, N = (0, d.Vr)({
        context: {
            type: "contextless"
        },
        applicationId: t.id,
        botUserId: t?.bot?.id
    }), j = null != t && (0, o.Ag)(t), L = null != S && j && N, {
        analyticsLocations: R
    } = (0, l.Ay)(r.A.ACTIVITY_CUSTOM_LINK), P = (0, a.bG)([A.A], () => A.A.getChannelId()), w = (0, E.et)(P), M = (0, a.bG)([C.Ay], () => {
        if (null == P) return;
        let e = C.Ay.getEmbeddedActivitiesForChannel(P).filter(e => e.applicationId === t.id);
        return e.length > 0 ? e[0].compositeInstanceId : void 0
    }), D = (0, a.bG)([C.Ay], () => C.Ay.getCurrentEmbeddedActivity()), k = (0, I.A)(), O = w === E.xy.CAN_LAUNCH, U = null != M && D?.compositeInstanceId === M, B = null != n ? n : b.customId, G = (0, p.e)(t), F = [];
    G ? F.push({
        label: v.intl.string(v.t.RscU7I),
        trackingArea: _.kY.PLAY,
        onClick() {
            h.A.launchFrame({
                applicationId: t.id
            })
        }
    }) : (O && F.push({
        label: null == M ? v.intl.string(v.t.RscU7I) : U ? v.intl.string(v.t.DPfdsq) : v.intl.string(v.t.sqe0hj),
        trackingArea: _.kY.PLAY,
        onClick() {
            (0, f.su)({
                channelId: P ?? void 0,
                applicationId: t.id,
                isStart: null == M,
                embeddedActivitiesManager: k,
                customId: B,
                referrerId: T,
                analyticsLocations: R
            })
        },
        disabled: U
    }), L && !O && F.push({
        label: v.intl.string(v.t.JeK1Wg),
        trackingArea: _.kY.PLAY,
        onClick() {
            (0, s.Q)({
                appId: t.id,
                botId: S,
                analyticsLocations: R,
                customId: B,
                referrerId: T
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
            children: b.description
        }),
        staticBannerSrc: b.getAssetURL(),
        title: b.title,
        trackingConfig: {
            id: t.id,
            linkType: c.J.CUSTOM_ACTIVITY_LINK,
            referrerId: T,
            activityCustomId: B,
            guildId: g.A.getChannel(y.channel_id)?.guild_id,
            channelId: y.channel_id,
            messageId: y.id
        }
    })
}