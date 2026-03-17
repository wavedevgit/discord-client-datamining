/** chunk id: 237749 params = (module,exports,require) **/
t.d(n, {
    A: () => E
});
var l = t(627968);
t(64700);
var i = t(311907),
    r = t(397927),
    a = t(734057),
    d = t(71393),
    s = t(576705),
    o = t(287809),
    u = t(849736),
    c = t(312006),
    A = t(652215),
    g = t(985018);

function E(e, n, t) {
    let E = a.A.getChannel(t),
        h = (0, i.bG)([d.A], () => d.A.getGuild(n), [n]),
        m = (0, i.bG)([c.Ay], () => c.Ay.getPermissionsForUser(e.id, t), [t, e.id]),
        C = o.default.getCurrentUser()?.id === e.id,
        b = (0, i.bG)([s.A], () => null != t && s.A.canWithPartialContext(A.xBc.MUTE_MEMBERS, {
            channelId: t
        }), [t]);
    return null != E && null != h && (b || C) && m.speaker ? (0, l.jsx)(r.Drp, {
        id: "audience",
        label: C ? g.intl.string(g.t["6C6PJx"]) : g.intl.string(g.t.VK3vQy),
        action: () => {
            C ? (0, u.Tf)(E) : (0, u.gt)(e, E)
        }
    }) : null
}