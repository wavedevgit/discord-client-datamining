/** chunk id: 237749 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(734057),
    d = n(71393),
    s = n(576705),
    o = n(287809),
    u = n(849736),
    c = n(312006),
    A = n(652215),
    g = n(985018);

function E(e, t, n) {
    let E = a.A.getChannel(n),
        h = (0, i.bG)([d.A], () => d.A.getGuild(t), [t]),
        m = (0, i.bG)([c.Ay], () => c.Ay.getPermissionsForUser(e.id, n), [n, e.id]),
        C = o.default.getCurrentUser()?.id === e.id,
        b = (0, i.bG)([s.A], () => null != n && s.A.canWithPartialContext(A.xBc.MUTE_MEMBERS, {
            channelId: n
        }), [n]);
    return null != E && null != h && (b || C) && m.speaker ? (0, l.jsx)(r.Drp, {
        id: "audience",
        label: C ? g.intl.string(g.t["6C6PJx"]) : g.intl.string(g.t.VK3vQy),
        action: () => {
            C ? (0, u.Tf)(E) : (0, u.gt)(e, E)
        }
    }) : null
}