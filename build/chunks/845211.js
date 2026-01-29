/** Chunk was on 1113 **/
/** chunk id: 845211, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
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
    h = n(985018);

function p() {
    (0, i.bG)([o.A], () => o.A.getPrivateChannelsVersion());
    let e = o.A.getMutablePrivateChannels(),
        t = (0, i.yK)([c.A], () => c.A.getUnreadPrivateChannelIds()),
        {
            selectedVoiceGuildId: n,
            selectedVoiceChannelId: p
        } = (0, i.cf)([u.A], () => ({
            selectedVoiceGuildId: u.A.getGuildId(),
            selectedVoiceChannelId: u.A.getChannelId()
        })),
        g = t.map(t => {
            let n = e[t];
            return null == n || n.id === p ? null : (0, r.jsx)(d.A, {
                channel: n
            }, n.id)
        }),
        f = null == n && null != p ? e[p] : null;
    return null != f && g.unshift((0, r.jsx)(d.A, {
        channel: f
    }, f.id)), (0, r.jsx)(a.BJc, {
        id: "guild-list-unread-dms",
        role: "group",
        "aria-label": h.intl.string(h.t.YUU0RF),
        gap: "xs",
        hidden: g.length < 1,
        children: (0, r.jsx)(s.F, {
            component: l.Fragment,
            children: g
        })
    })
}