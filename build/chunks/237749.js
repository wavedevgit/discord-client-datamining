/** Chunk was on 55296 **/
/** chunk id: 237749, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(734057),
    o = n(71393),
    s = n(576705),
    u = n(287809),
    d = n(849736),
    c = n(312006),
    A = n(652215),
    g = n(985018);

function b(e, t, n) {
    var b;
    let f = a.A.getChannel(n),
        m = (0, i.bG)([o.A], () => o.A.getGuild(t), [t]),
        p = (0, i.bG)([c.Ay], () => c.Ay.getPermissionsForUser(e.id, n), [n, e.id]),
        v = (null == (b = u.default.getCurrentUser()) ? void 0 : b.id) === e.id,
        y = (0, i.bG)([s.A], () => null != n && s.A.canWithPartialContext(A.xBc.MUTE_MEMBERS, {
            channelId: n
        }), [n]);
    return null != f && null != m && (y || v) && p.speaker ? (0, l.jsx)(r.Drp, {
        id: "audience",
        label: v ? g.intl.string(g.t["6C6PJx"]) : g.intl.string(g.t.VK3vQy),
        action: () => {
            v ? (0, d.Tf)(f) : (0, d.gt)(e, f)
        }
    }) : null
}