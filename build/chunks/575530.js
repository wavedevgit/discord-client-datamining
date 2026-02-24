/** chunk id: 575530, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(528772),
    a = n(944775),
    o = n(927421),
    u = n(734057),
    d = n(309010),
    c = n(427603),
    h = n(302614),
    m = n(980504),
    g = n(32160);
let p = l.memo(function() {
    let [e, t] = (0, r.yK)([s.A], () => [s.A.enabled, s.A.keepOpen]), n = (0, r.bG)([d.A], () => d.A.getVoiceChannelId()), l = (0, r.bG)([u.A], () => u.A.getChannel(n), [n]), p = l?.getGuildId();
    return e && null != l ? (0, i.jsx)(h.A, {
        className: g.k,
        children: (0, i.jsx)(o.A, {
            width: m.ed.width,
            height: m.ed.height,
            guildId: p,
            channel: l,
            keepOpen: t,
            onClose: function() {
                let e = (0, c.A)();
                null != e && (0, a.Lk)(e)
            },
            analyticsSource: "overlay"
        })
    }) : null
})