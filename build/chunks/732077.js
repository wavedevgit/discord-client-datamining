/** Chunk was on 78528 **/
/** chunk id: 732077, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(734057),
    u = n(607567),
    d = n(403362),
    p = n(108197),
    h = n(985018),
    f = n(316945);
let g = l.memo(function(e) {
    let {
        channel: t,
        selectedChannel: n,
        selectedVoiceChannelId: l,
        sortedThreadIds: i,
        withGuildIcon: g
    } = e, {
        density: m
    } = (0, o.wRf)(), b = (0, a.yK)([c.A], () => i.map(e => c.A.getChannel(e)).filter(d.Vq), [i]), A = (0, a.bG)([u.Ay], () => {
        let e = b[b.length - 1];
        if (null == e) return 0;
        let t = u.Ay.getVoiceStates(e.guild_id)[e.id];
        return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8
    });
    return (0, r.jsx)("li", {
        className: f.kL,
        children: (0, r.jsxs)("ul", {
            role: "group",
            "aria-label": h.intl.formatToPlainString(h.t.EiyIi6, {
                channelName: t.name
            }),
            children: [(0, r.jsx)("div", {
                className: s()(f.eh, {
                    [f.ET]: g
                }),
                style: {
                    bottom: ("cozy" === m ? 28 : 24) + A
                }
            }), b.map((e, t) => (0, r.jsx)(p.A, {
                thread: e,
                isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
                isSelectedVoice: l === e.id,
                isLast: t === b.length - 1,
                withGuildIcon: g
            }, e.id))]
        })
    })
})