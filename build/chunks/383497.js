/** chunk id: 383497, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    O: () => b
}), n(938796);
var r = n(344351),
    i = n(665260),
    a = n(73153),
    o = n(198982),
    s = n(734057),
    l = n(933958),
    c = n(710839),
    u = n(825591),
    d = n(123281),
    f = n(969151),
    p = n(817636),
    _ = n(574152),
    h = n(652215);
async function m(e) {
    let {
        applicationId: t,
        channelId: n,
        guildId: i
    } = e;
    try {
        return await (0, p.A)(t, n)
    } catch (s) {
        let e = null != i ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        a.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
            nonce: "",
            applicationId: t,
            channelId: null != n ? n : null,
            guildId: null != i ? i : null,
            error: new o.LG(s),
            locationKind: e
        })
    }
}
async function g(e) {
    let {
        currentEmbeddedApplication: t,
        shouldClosePopoutOnLeaveCurrentEmbeddedApplication: n,
        onConfirmActivityLaunchChecksAlertOpen: r
    } = e;
    return (null == t || !!await new Promise(e => {
        let i = l.Ay.getSelfEmbeddedActivities().get(t.id),
            a = (0, f.H)(null == i ? void 0 : i.location),
            o = s.A.getChannel(a);
        null == i || null == o ? e(!0) : (null == r || r(), (0, u.A)(t, o, () => {
            (0, _.A)().leaveActivity({
                location: i.location,
                applicationId: t.id,
                shouldClosePopout: n
            }), e(!0)
        }, () => e(!1)))
    })) && !0
}
async function E(e) {
    let {
        application: t,
        applicationId: n,
        channel: r,
        user: i,
        onConfirmActivityLaunchChecksAlertOpen: a
    } = e;
    if (null == i.nsfwAllowed) {
        var o, s, l;
        let e = null != t ? t : await m({
            applicationId: n,
            channelId: null == r ? void 0 : r.id,
            guildId: null != (o = null == r ? void 0 : r.getGuildId()) ? o : void 0
        });
        if (null == e || null != (s = null == (l = e.embeddedActivityConfig) ? void 0 : l.requires_age_gate) && s && !await new Promise(t => {
                null == a || a(), (0, c.i)({
                    application: e,
                    channelId: null == r ? void 0 : r.id,
                    onAgree: () => t(!0),
                    onDisagree: () => t(!1)
                })
            })) return !1
    }
    return !0
}
async function y(e) {
    var t;
    let {
        application: n,
        applicationId: r,
        channel: a,
        onConfirmActivityLaunchChecksAlertOpen: o
    } = e, s = null != n ? n : await m({
        applicationId: r,
        channelId: null == a ? void 0 : a.id,
        guildId: null != (t = null == a ? void 0 : a.getGuildId()) ? t : void 0
    });
    return null != s && (!!((0, i.Lt)(s.flags, h.gfo.EMBEDDED_RELEASED) || s.isVerified || l.Ay.hasActivityEverBeenLaunched(r)) || new Promise(e => {
        null == o || o(), (0, d.q)({
            application: s,
            onConfirm: () => e(!0),
            onCancel: () => e(!1)
        })
    }))
}
async function b(e) {
    return !!await g({
        currentEmbeddedApplication: e.currentEmbeddedApplication,
        shouldClosePopoutOnLeaveCurrentEmbeddedApplication: e.shouldClosePopoutOnLeaveCurrentEmbeddedApplication,
        onConfirmActivityLaunchChecksAlertOpen: e.onConfirmActivityLaunchChecksAlertOpen
    }) && !!await E(e) && !!await y(e)
}