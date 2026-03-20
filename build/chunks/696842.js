/** chunk id: 696842 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(311907),
    r = n(397927),
    o = n(698441),
    c = n(520006),
    d = n(71393),
    u = n(576705),
    h = n(652215),
    A = n(985018);

function m(e) {
    let {
        stream: t,
        applicationId: n,
        channel: s,
        exitFullScreen: m,
        appContext: _,
        analyticsLocation: p,
        className: g,
        size: f = "sm"
    } = e, x = s?.getGuildId(), C = s?.id, E = (0, a.bG)([d.A], () => null != x ? d.A.getGuild(x) : null, [x]), I = (0, a.bG)([o.Ay], () => o.Ay.getActiveEventByChannel(C), [C]);
    if (!(null != E && null != s && u.A.can(h.xBc.CREATE_INSTANT_INVITE, s))) return null;
    let N = A.intl.string(A.t.VINpSK);
    return null != t ? N = A.intl.string(A.t["6VQaqd"]) : null != n && (N = A.intl.string(A.t["OzOM/q"])), (0, i.jsx)("div", {
        className: g,
        children: (0, i.jsx)(r.Button, {
            size: f,
            variant: "secondary",
            text: N,
            onClick: () => {
                l()(null != E, "guild cannot be null"), l()(null != s, "channel cannot be null"), (0, c.X)({
                    guild: E,
                    channel: s,
                    streamUserId: t?.ownerId,
                    applicationId: n,
                    appContext: _,
                    exitFullScreen: m,
                    analyticsLocation: p,
                    guildScheduledEvent: I,
                    source: h.PE1.STAGE_CHANNEL
                })
            }
        })
    })
}