/** Chunk was on web.js **/
/** chunk id: 447031, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(587895),
    i = n(734057),
    a = n(309010),
    s = n(287809),
    o = n(811024),
    l = n(646865),
    c = n(795816),
    u = n(933958),
    d = n(945634),
    f = n(383497),
    p = n(969151),
    _ = n(817636),
    h = n(574152),
    m = n(108959),
    g = n(90804),
    E = n(748975),
    y = n(360469);

function b(e) {
    return (0, l.w)((0, l.f)(), () => O(e))
}
async function O(e) {
    let t, {
            applicationId: n,
            activityChannelId: l,
            locationObject: b,
            analyticsLocations: O,
            componentId: v,
            sectionName: A,
            source: I,
            inviterUserId: S,
            customId: T,
            referrerId: C
        } = e,
        N = (0, h.A)(),
        w = i.A.getChannel(l),
        R = null == w ? void 0 : w.getGuildId(),
        P = null == R || "" === R,
        D = s.default.getCurrentUser();
    if (null == D) return !1;
    if (null == w || P && !w.isPrivate() || null == l) return Promise.resolve(!1);
    let x = u.Ay.getCurrentEmbeddedActivity();
    if ((null == x ? void 0 : x.applicationId) != null && (t = r.A.getApplication(null == x ? void 0 : x.applicationId)), a.A.getVoiceChannelId() === l && null != x && x.applicationId === n && (0, p.H)(x.location) === a.A.getVoiceChannelId()) return (0, E.A)(R, x.location), Promise.resolve(!0);
    let L = await (0, _.A)(n, l);
    if (!await (0, f.O)({
            applicationId: n,
            application: L,
            channel: w,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: N,
            user: D
        })) return !1;
    if (null != w) {
        let e = (0, m.A)(w.id),
            n = y.lk.includes(w.type);
        if (e) {
            if (!await (0, g.A)({
                    channelId: w.id,
                    bypassChangeModal: null != t
                })) return !1
        } else if (!(0, o.pE)(w) || !n) return !1
    } else if (null == w) return !1;
    return null != l && (0, d.A)(l), null != x && (0, c.rW)(x.location), await (0, c.su)({
        channelId: l,
        applicationId: n,
        isStart: !1,
        embeddedActivitiesManager: N,
        analyticsLocations: O,
        locationObject: b,
        componentId: v,
        sectionName: A,
        source: I,
        inviterUserId: S,
        customId: T,
        referrerId: C
    })
}