/** chunk id: 875922 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    a = n(64700),
    r = n(397927),
    l = n(308528),
    s = n(58149),
    o = n(231608),
    d = n(954571),
    c = n(652215),
    u = n(985018);

function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
            priorityMembers: n,
            partiedMembers: A
        } = e,
        _ = a.useContext(d.AnalyticsContext),
        h = n.map(e => {
            let {
                user: t
            } = e;
            return t.id
        }),
        m = 1 === A.length && 1 === n.length,
        g = n.length - A.length > 0;
    return (m || t) && !g && 0 !== h.length ? (0, i.jsx)(r.Drp, {
        id: "message",
        action: function() {
            l.A.openPrivateChannel({
                recipientIds: h
            }).then(t => s.Ay.trackWithMetadata(c.HAw.ACTIVITY_FEED_DM_VISITED, {
                source: {
                    ..._.location,
                    object: c.ZSU.LIST_ITEM
                },
                channel_id: t,
                recipient_id: "string" == typeof h ? h : h[0],
                af_recently_played: !1,
                ...(0, o.o)(e)
            }))
        },
        label: u.intl.string(u.t["g33r/P"])
    }) : null
}