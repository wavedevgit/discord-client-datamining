/** chunk id: 575530 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(528772),
    o = n(944775),
    d = n(927421),
    s = n(734057),
    u = n(309010),
    c = n(427603),
    A = n(302614),
    h = n(980504),
    f = n(923779);
let g = i.memo(function() {
    let [e, t] = (0, l.yK)([a.A], () => [a.A.enabled, a.A.keepOpen]), n = (0, l.bG)([u.A], () => u.A.getVoiceChannelId()), i = (0, l.bG)([s.A], () => s.A.getChannel(n), [n]), g = i?.getGuildId();
    return e && null != i ? (0, r.jsx)(A.A, {
        className: f.k,
        children: (0, r.jsx)(d.A, {
            width: h.ed.width,
            height: h.ed.height,
            guildId: g,
            channel: i,
            keepOpen: t,
            onClose: function() {
                let e = (0, c.A)();
                null != e && (0, o.Lk)(e)
            },
            analyticsSource: "overlay"
        })
    }) : null
})