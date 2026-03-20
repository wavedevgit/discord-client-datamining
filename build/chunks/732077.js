/** chunk id: 732077 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    c = n(734057),
    d = n(607567),
    u = n(403362),
    h = n(108197),
    A = n(985018),
    m = n(184179);
let _ = s.memo(function(e) {
    let {
        channel: t,
        selectedChannel: n,
        selectedVoiceChannelId: s,
        sortedThreadIds: l,
        withGuildIcon: _
    } = e, {
        density: p
    } = (0, o.wRf)(), g = (0, r.yK)([c.A], () => l.map(e => c.A.getChannel(e)).filter(u.Vq), [l]), f = (0, r.bG)([d.Ay], () => {
        let e = g[g.length - 1];
        if (null == e) return 0;
        let t = d.Ay.getVoiceStates(e.guild_id)[e.id];
        return null == t || 0 === t.length ? 0 : s !== e.id ? 40 : 32 * t.length + 8
    });
    return (0, i.jsx)("li", {
        className: m.kL,
        children: (0, i.jsxs)("ul", {
            role: "group",
            "aria-label": A.intl.formatToPlainString(A.t.EiyIi6, {
                channelName: t.name
            }),
            children: [(0, i.jsx)("div", {
                className: a()(m.eh, {
                    [m.ET]: _
                }),
                style: {
                    bottom: ("cozy" === p ? 28 : 24) + f
                }
            }), g.map((e, t) => (0, i.jsx)(h.A, {
                thread: e,
                isSelectedChannel: n?.id === e.id,
                isSelectedVoice: s === e.id,
                isLast: t === g.length - 1,
                withGuildIcon: _
            }, e.id))]
        })
    })
})