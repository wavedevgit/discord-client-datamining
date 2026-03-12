/** chunk id: 520006 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(311907),
    r = n(397927),
    o = n(298990),
    c = n(688810),
    d = n(384059),
    u = n(267102),
    h = n(71393),
    A = n(375492),
    m = n(576705),
    p = n(709562),
    g = n(652215),
    _ = n(985018);

function f(e) {
    let {
        applicationId: t,
        stream: s,
        channel: f,
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
    } = (0, c.Ay)(), M = f?.getGuildId(), D = (0, a.bG)([h.A], () => null != M ? h.A.getGuild(M) : null, [M]), G = (0, a.bG)([A.A], () => null != t ? A.A.getApplicationActivity(t) : void 0), U = null == t || N ? r.DpX : r.dCJ, P = null != t ? _.intl.string(_.t["OzOM/q"]) : _.intl.string(_.t["6F9ivu"]);
    return null != G && b ? (0, i.jsx)(p.A, {
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
    }) : null != D && null != f && m.A.can(g.xBc.CREATE_INSTANT_INVITE, f) ? (0, i.jsx)(p.A, {
        onClick: () => {
            l()(null != D, "guild cannot be null"), l()(null != f, "channel cannot be null"), null != L && (0, d.X)(L, d.O.INVITE),
                function(e) {
                    let {
                        guild: t,
                        channel: s,
                        streamUserId: l,
                        applicationId: a,
                        appContext: o,
                        exitFullScreen: c,
                        analyticsLocation: d,
                        guildScheduledEvent: u
                    } = e;
                    c?.(), (0, r.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("43600"), n.e("28136"), n.e("97710")]).then(n.bind(n, 234355));
                        return n => (0, i.jsx)(e, {
                            ...n,
                            guild: t,
                            channel: s,
                            streamUserId: l,
                            applicationId: a,
                            analyticsLocation: d,
                            source: s.isGuildStageVoice() ? g.PE1.STAGE_CHANNEL : g.PE1.STREAM_INVITE,
                            guildScheduledEvent: u
                        })
                    }, {
                        modalKey: "stream-invite-modal",
                        contextKey: o === g.BRT.POPOUT ? r.KX8 : r.SYi
                    })
                }({
                    guild: D,
                    channel: f,
                    streamUserId: s?.ownerId,
                    applicationId: t,
                    appContext: C ?? O,
                    exitFullScreen: x,
                    analyticsLocation: E,
                    guildScheduledEvent: I
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