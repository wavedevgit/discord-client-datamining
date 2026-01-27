/** Chunk was on 92917 **/
/** chunk id: 96440, original params: e,t,n (module,exports,require) **/
n.d(t, {
    W: () => x
}), n(321073), n(228524);
var r = n(627968),
    i = n(311907),
    l = n(793574),
    a = n(688810),
    s = n(522305),
    o = n(735991),
    c = n(361926),
    u = n(485724),
    d = n(572211),
    p = n(354287),
    m = n(574660),
    f = n(734057),
    g = n(309010),
    h = n(486020),
    _ = n(795816),
    b = n(933958),
    A = n(574152),
    y = n(782091),
    v = n(985018);

function x(e) {
    var t, n, x;
    let {
        application: O,
        customId: E,
        customLink: j,
        referrerId: C,
        message: I
    } = e, S = null == O || null == (t = O.bot) ? void 0 : t.id, T = (0, c.Vr)({
        context: {
            type: "contextless"
        },
        applicationId: O.id,
        botUserId: null == O || null == (n = O.bot) ? void 0 : n.id
    }), N = null != O && (0, o.Ag)(O), P = null != S && N && T, {
        analyticsLocations: w
    } = (0, a.Ay)(l.A.ACTIVITY_CUSTOM_LINK), R = (0, i.bG)([g.A], () => g.A.getChannelId()), D = (0, y.et)(R), L = (0, i.bG)([b.Ay], () => {
        if (null == R) return;
        let e = b.Ay.getEmbeddedActivitiesForChannel(R).filter(e => e.applicationId === O.id);
        return e.length > 0 ? e[0].compositeInstanceId : void 0
    }), M = (0, i.bG)([b.Ay], () => b.Ay.getCurrentEmbeddedActivity()), k = (0, A.A)(), U = D === y.xy.CAN_LAUNCH, G = null != L && (null == M ? void 0 : M.compositeInstanceId) === L, B = null != E ? E : j.customId, F = [];
    U && F.push({
        label: null == L ? v.intl.string(v.t.RscU7I) : G ? v.intl.string(v.t.DPfdsq) : v.intl.string(v.t.sqe0hj),
        trackingArea: p.kY.PLAY,
        onClick() {
            (0, _.su)({
                channelId: null != R ? R : void 0,
                applicationId: O.id,
                isStart: null == L,
                embeddedActivitiesManager: k,
                customId: B,
                referrerId: C,
                analyticsLocations: w
            })
        },
        disabled: G
    }), P && !U && F.push({
        label: v.intl.string(v.t.JeK1Wg),
        trackingArea: p.kY.PLAY,
        onClick() {
            (0, s.Q)({
                appId: O.id,
                botId: S,
                analyticsLocations: w,
                customId: B,
                referrerId: C
            })
        }
    });
    let H = (0, m.F)(O);
    return (0, r.jsx)(d.h, {
        actions: F,
        onClickContent: H,
        header: O.name,
        iconSrc: h.Ay.getApplicationIconURL({
            id: O.id,
            icon: O.icon,
            bot: O.bot
        }),
        info: (0, r.jsx)("div", {
            children: j.description
        }),
        staticBannerSrc: j.getAssetURL(),
        title: j.title,
        trackingConfig: {
            id: O.id,
            linkType: u.J.CUSTOM_ACTIVITY_LINK,
            referrerId: C,
            activityCustomId: B,
            guildId: null == (x = f.A.getChannel(I.channel_id)) ? void 0 : x.guild_id,
            channelId: I.channel_id,
            messageId: I.id
        }
    })
}