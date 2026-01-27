/** Chunk was on 41727 **/
/** chunk id: 845211, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(667532);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(73939),
    a = n(397927),
    o = n(734057),
    c = n(131677),
    u = n(383501),
    d = n(50400),
    p = n(985018);

function h() {
    (0, i.bG)([o.A], () => o.A.getPrivateChannelsVersion());
    let e = o.A.getMutablePrivateChannels(),
        t = (0, i.yK)([c.A], () => c.A.getUnreadPrivateChannelIds()),
        {
            selectedVoiceGuildId: n,
            selectedVoiceChannelId: h
        } = (0, i.cf)([u.A], () => ({
            selectedVoiceGuildId: u.A.getGuildId(),
            selectedVoiceChannelId: u.A.getChannelId()
        })),
        f = t.map(t => {
            let n = e[t];
            return null == n || n.id === h ? null : (0, r.jsx)(d.A, {
                channel: n
            }, n.id)
        }),
        g = null == n && null != h ? e[h] : null;
    return null != g && f.unshift((0, r.jsx)(d.A, {
        channel: g
    }, g.id)), (0, r.jsx)(a.BJc, {
        id: "guild-list-unread-dms",
        role: "group",
        "aria-label": p.intl.string(p.t.YUU0RF),
        gap: "xs",
        hidden: f.length < 1,
        children: (0, r.jsx)(s.F, {
            component: l.Fragment,
            children: f
        })
    })
}