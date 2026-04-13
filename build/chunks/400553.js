/** chunk id: 400553 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(435371),
    r = n(397927),
    a = n(695515),
    o = n(923531),
    d = n(397808),
    c = n(254847),
    u = n(773349),
    m = n(994987),
    g = n(221425),
    _ = n(985018),
    x = n(457562);
let h = () => {
    let e = (0, s.bG)([a.A], () => a.A.getTopUserActivities()),
        t = (0, s.bG)([a.A], () => a.A.getTopGuildActivities());
    return 0 === e.length && 0 === t.length ? null : (0, i.jsxs)("div", {
        className: x.kL,
        children: [e.length > 0 && (0, i.jsxs)("div", {
            className: x.A2,
            children: [(0, i.jsx)(r.Heading, {
                variant: "text-md/medium",
                className: x.bV,
                children: _.intl.string(g.default.BxbvS7)
            }), (0, i.jsx)("div", {
                className: x.Ce,
                children: 1 === e.length ? (0, i.jsx)(u.A, {
                    userId: e[0].user_id,
                    subText: (0, o.fq)(e[0].dms_sent, e[0].call_count),
                    className: x.q3
                }) : e.map(e => (0, i.jsx)(m.A, {
                    userId: e.user_id,
                    dmsSent: e.dms_sent,
                    callCount: e.call_count
                }, e.user_id))
            })]
        }), t.length > 0 && (0, i.jsxs)("div", {
            className: x.A2,
            children: [(0, i.jsx)(r.Heading, {
                variant: "text-md/medium",
                className: x.bV,
                children: _.intl.string(g.default.Lq9Set)
            }), 1 === t.length ? (0, i.jsx)(c.A, {
                guildId: t[0].guild_id,
                customSubtext: (0, o.fq)(t[0].messages_sent, t[0].call_count),
                className: x._S
            }) : (0, i.jsx)("div", {
                className: x.Ce,
                children: t.map(e => {
                    let t = a.A.getGuild(e.guild_id),
                        n = t?.name ?? "Unknown Server";
                    return (0, i.jsx)(l.un, {
                        title: n,
                        body: (0, o.fq)(e.messages_sent, e.call_count) ?? null,
                        asContainer: !0,
                        children: (0, i.jsx)(d.A, {
                            guildId: e?.guild_id
                        })
                    }, e.guild_id)
                })
            })]
        })]
    })
}