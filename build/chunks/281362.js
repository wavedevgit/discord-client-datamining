/** chunk id: 281362, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    E: () => E
});
var r = n(157559),
    i = n(627363),
    a = n(192552),
    o = n(611010),
    s = n(734057),
    l = n(71393),
    c = n(576705),
    u = n(287809),
    d = n(977997),
    f = n(933958),
    p = n(447031),
    _ = n(170148),
    h = n(550151),
    m = n(985018);

function g(e) {
    let {
        embeddedActivityJoinability: t,
        handleCanJoin: n
    } = e;
    switch (t) {
        case h.Gy.CAN_JOIN:
            null == n || n();
            break;
        case h.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
            (0, a.i)();
            break;
        case h.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
            r.A.show({
                title: m.intl.string(m.t.PtobXW),
                body: m.intl.string(m.t.UXoQTp),
                hideActionSheet: !1
            });
            break;
        case h.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
            r.A.show({
                title: m.intl.string(m.t.PtobXW),
                body: m.intl.string(m.t.uGDCcw),
                hideActionSheet: !1
            });
            break;
        case h.Gy.ACTIVITY_AGE_GATED:
            r.A.show({
                title: m.intl.string(m.t.PtobXW),
                body: m.intl.string(m.t["4WuFRE"]),
                hideActionSheet: !1
            });
            break;
        case h.Gy.NO_CHANNEL_CONNECT_PERMISSION:
        case h.Gy.CHANNEL_FULL:
        case h.Gy.NO_CHANNEL:
        case h.Gy.NO_USER:
            r.A.show({
                title: m.intl.string(m.t.PtobXW),
                body: m.intl.string(m.t.FUCQco),
                hideActionSheet: !1
            })
    }
}
async function E(e) {
    let {
        channelId: t,
        applicationId: n,
        launchId: r,
        inputApplication: a,
        analyticsLocations: m,
        launchingComponentId: E,
        sectionName: y,
        inviterUserId: b
    } = e, O = f.Ay.getEmbeddedActivitiesForChannel(t).find(e => e.applicationId === n && (null == r || e.launchId === r)), v = a;
    if (null == v) {
        let e = await i.Ay.fetchApplication(n);
        v = o.Ay.createFromServer(e)
    }
    if (null == O || null == v) return;
    let A = u.default.getCurrentUser();
    async function I() {
        null != O && await (0, p.A)({
            applicationId: O.applicationId,
            activityChannelId: t,
            locationObject: {},
            analyticsLocations: m,
            componentId: E,
            sectionName: y,
            inviterUserId: b
        })
    }
    g({
        embeddedActivityJoinability: (0, h.Ay)({
            userId: null == A ? void 0 : A.id,
            application: v,
            channelId: t,
            currentUser: A,
            isActivitiesEnabledForCurrentPlatform: (0, _.A)(),
            ChannelStore: s.A,
            VoiceStateStore: d.A,
            PermissionStore: c.A,
            GuildStore: l.A
        }),
        handleCanJoin: I
    })
}