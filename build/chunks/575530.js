/** chunk id: 575530, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(528772),
    a = n(944775),
    s = n(927421),
    o = n(734057),
    u = n(309010),
    c = n(427603),
    d = n(302614),
    h = n(980504),
    p = n(32160);

function f() {
    let [e, t] = (0, r.yK)([l.A], () => [l.A.enabled, l.A.keepOpen]), n = (0, r.bG)([u.A], () => u.A.getVoiceChannelId()), f = (0, r.bG)([o.A], () => o.A.getChannel(n), [n]), g = null == f ? void 0 : f.getGuildId();
    return e && null != f ? (0, i.jsx)(d.A, {
        className: p.k,
        children: (0, i.jsx)(s.A, {
            width: h.ed.width,
            height: h.ed.height,
            guildId: g,
            channel: f,
            keepOpen: t,
            onClose: function() {
                let e = (0, c.A)();
                null != e && (0, a.Lk)(e)
            },
            analyticsSource: "overlay"
        })
    }) : null
}