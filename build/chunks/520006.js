/** chunk id: 520006 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x,
    X: () => f
});
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    r = n(311907),
    a = n(397927),
    o = n(298990),
    c = n(688810),
    d = n(384059),
    u = n(267102),
    h = n(71393),
    A = n(375492),
    m = n(576705),
    _ = n(709562),
    p = n(652215),
    g = n(985018);

function f(e) {
    let {
        guild: t,
        channel: s,
        streamUserId: l,
        applicationId: r,
        appContext: o,
        exitFullScreen: c,
        analyticsLocation: d,
        guildScheduledEvent: u,
        source: h
    } = e;
    c?.(), (0, a.mMO)(async () => {
        let {
            default: e
        } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(n.bind(n, 234355));
        return n => (0, i.jsx)(e, {
            ...n,
            guild: t,
            channel: s,
            streamUserId: l,
            applicationId: r,
            analyticsLocation: d,
            source: h,
            guildScheduledEvent: u
        })
    }, {
        modalKey: "stream-invite-modal",
        contextKey: o === p.BRT.POPOUT ? a.KX8 : a.SYi
    })
}

function x(e) {
    let {
        applicationId: t,
        stream: n,
        channel: s,
        exitFullScreen: x,
        appContext: C,
        analyticsLocation: E,
        guildScheduledEvent: I,
        shouldPrioritizeGroupPlusIcon: N = !1,
        isRichPresenceInvite: b = !1,
        iconClassName: S,
        look: T,
        size: v,
        buttonText: y,
        color: j,
        ...R
    } = e, O = (0, u.Us)(), {
        parentAnalyticsLocation: L
    } = (0, c.Ay)(), M = s?.getGuildId(), D = (0, r.bG)([h.A], () => null != M ? h.A.getGuild(M) : null, [M]), G = (0, r.bG)([A.A], () => null != t ? A.A.getApplicationActivity(t) : void 0), U = null == t || N ? a.DpX : a.dCJ, P = g.intl.string(g.t["6F9ivu"]);
    return (null != t && (P = g.intl.string(g.t["OzOM/q"])), null != n && (P = g.intl.string(g.t["6VQaqd"])), null != G && b) ? (0, i.jsx)(_.A, {
        onClick: () => {
            null != L && (0, d.X)(L, d.O.INVITE), o.qf(G, !1, O)
        },
        iconComponent: U,
        label: P,
        iconClassName: S,
        look: T,
        size: v,
        buttonText: y,
        color: j ?? void 0
    }) : null != D && null != s && m.A.can(p.xBc.CREATE_INSTANT_INVITE, s) ? (0, i.jsx)(_.A, {
        onClick: () => {
            l()(null != D, "guild cannot be null"), l()(null != s, "channel cannot be null"), null != L && (0, d.X)(L, d.O.INVITE), f({
                guild: D,
                channel: s,
                streamUserId: n?.ownerId,
                applicationId: t,
                appContext: C ?? O,
                exitFullScreen: x,
                analyticsLocation: E,
                guildScheduledEvent: I,
                source: s.isGuildStageVoice() ? p.PE1.STAGE_CHANNEL : p.PE1.STREAM_INVITE
            })
        },
        iconComponent: U,
        label: P,
        iconClassName: S,
        look: T,
        size: v,
        color: j,
        buttonText: y,
        ...R
    }) : null
}