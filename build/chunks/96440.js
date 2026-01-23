/** Chunk was on web.js **/
/** chunk id: 96440, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    W: () => v
}), n(321073), n(228524);
var r = n(627968),
    i = n(311907),
    a = n(793574),
    s = n(688810),
    o = n(522305),
    l = n(735991),
    c = n(361926),
    u = n(485724),
    d = n(572211),
    f = n(354287),
    p = n(574660),
    _ = n(734057),
    h = n(309010),
    m = n(486020),
    g = n(795816),
    E = n(933958),
    y = n(574152),
    b = n(782091),
    O = n(985018);

function v(e) {
    var t, n, v;
    let {
        application: A,
        customId: I,
        customLink: S,
        referrerId: T,
        message: C
    } = e, N = null == A || null == (t = A.bot) ? void 0 : t.id, w = (0, c.Vr)({
        context: {
            type: "contextless"
        },
        applicationId: A.id,
        botUserId: null == A || null == (n = A.bot) ? void 0 : n.id
    }), R = null != A && (0, l.Ag)(A), P = null != N && R && w, {
        analyticsLocations: D
    } = (0, s.Ay)(a.A.ACTIVITY_CUSTOM_LINK), x = (0, i.bG)([h.A], () => h.A.getChannelId()), L = (0, b.et)(x), j = (0, i.bG)([E.Ay], () => {
        if (null == x) return;
        let e = E.Ay.getEmbeddedActivitiesForChannel(x).filter(e => e.applicationId === A.id);
        return e.length > 0 ? e[0].compositeInstanceId : void 0
    }), M = (0, i.bG)([E.Ay], () => E.Ay.getCurrentEmbeddedActivity()), k = (0, y.A)(), U = L === b.xy.CAN_LAUNCH, G = null != j && (null == M ? void 0 : M.compositeInstanceId) === j, V = null != I ? I : S.customId, F = [];
    U && F.push({
        label: null == j ? O.intl.string(O.t.RscU7I) : G ? O.intl.string(O.t.DPfdsq) : O.intl.string(O.t.sqe0hj),
        trackingArea: f.kY.PLAY,
        onClick() {
            (0, g.su)({
                channelId: null != x ? x : void 0,
                applicationId: A.id,
                isStart: null == j,
                embeddedActivitiesManager: k,
                customId: V,
                referrerId: T,
                analyticsLocations: D
            })
        },
        disabled: G
    }), P && !U && F.push({
        label: O.intl.string(O.t.JeK1Wg),
        trackingArea: f.kY.PLAY,
        onClick() {
            (0, o.Q)({
                appId: A.id,
                botId: N,
                analyticsLocations: D,
                customId: V,
                referrerId: T
            })
        }
    });
    let B = (0, p.F)(A);
    return (0, r.jsx)(d.h, {
        actions: F,
        onClickContent: B,
        header: A.name,
        iconSrc: m.Ay.getApplicationIconURL({
            id: A.id,
            icon: A.icon,
            bot: A.bot
        }),
        info: (0, r.jsx)("div", {
            children: S.description
        }),
        staticBannerSrc: S.getAssetURL(),
        title: S.title,
        trackingConfig: {
            id: A.id,
            linkType: u.J.CUSTOM_ACTIVITY_LINK,
            referrerId: T,
            activityCustomId: V,
            guildId: null == (v = _.A.getChannel(C.channel_id)) ? void 0 : v.guild_id,
            channelId: C.channel_id,
            messageId: C.id
        }
    })
}