/** Chunk was on 64935 **/
/** chunk id: 798899, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(572211),
    s = n(443795),
    o = n(768349),
    c = n(985018),
    u = n(609653);

function d(e) {
    let {
        application: t,
        message: n,
        header: d,
        onClickContent: p,
        onView: m,
        guildId: f
    } = e, g = i.useMemo(() => (0, r.jsx)(l.Text, {
        variant: "text-xs/medium",
        className: u.h_,
        color: "none",
        lineClamp: 1,
        children: c.intl.string(c.t["84qx9r"])
    }), []);
    return (0, r.jsx)(a.h, {
        header: d,
        title: t.name,
        iconSrc: s.HT.getWhiteIconURL(),
        info: g,
        onClickContent: p,
        trackingConfig: {
            id: t.id,
            linkType: o.J.RICH_PRESENCE_INVITE,
            onView: m,
            referrerId: n.author.id,
            guildId: f,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0
        }
    })
}