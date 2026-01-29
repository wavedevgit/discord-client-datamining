/** Chunk was on 2827 **/
/** chunk id: 400553, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968);
n(64700);
var i = n(417597),
    l = n(435371),
    s = n(397927),
    a = n(695515),
    o = n(923531),
    c = n(397808),
    d = n(254847),
    u = n(773349),
    _ = n(994987),
    p = n(842130),
    m = n(985018),
    g = n(721757);
let A = () => {
    let e = (0, i.bG)([a.A], () => a.A.getTopUserActivities()),
        t = (0, i.bG)([a.A], () => a.A.getTopGuildActivities());
    return 0 === e.length && 0 === t.length ? null : (0, r.jsxs)("div", {
        className: g.kL,
        children: [e.length > 0 && (0, r.jsxs)("div", {
            className: g.A2,
            children: [(0, r.jsx)(s.Heading, {
                variant: "text-md/medium",
                className: g.bV,
                children: m.intl.string(p.default.BxbvS7)
            }), (0, r.jsx)("div", {
                className: g.Ce,
                children: 1 === e.length ? (0, r.jsx)(u.A, {
                    userId: e[0].user_id,
                    subText: (0, o.fq)(e[0].dms_sent, e[0].call_count),
                    className: g.q3
                }) : e.map(e => (0, r.jsx)(_.A, {
                    userId: e.user_id,
                    dmsSent: e.dms_sent,
                    callCount: e.call_count
                }, e.user_id))
            })]
        }), t.length > 0 && (0, r.jsxs)("div", {
            className: g.A2,
            children: [(0, r.jsx)(s.Heading, {
                variant: "text-md/medium",
                className: g.bV,
                children: m.intl.string(p.default.Lq9Set)
            }), 1 === t.length ? (0, r.jsx)(d.A, {
                guildId: t[0].guild_id,
                customSubtext: (0, o.fq)(t[0].messages_sent, t[0].call_count),
                className: g._S
            }) : (0, r.jsx)("div", {
                className: g.Ce,
                children: t.map(e => {
                    var t, n;
                    let i = a.A.getGuild(e.guild_id),
                        s = null != (t = null == i ? void 0 : i.name) ? t : "Unknown Server";
                    return (0, r.jsx)(l.un, {
                        title: s,
                        body: null != (n = (0, o.fq)(e.messages_sent, e.call_count)) ? n : null,
                        asContainer: !0,
                        children: (0, r.jsx)(c.A, {
                            guildId: null == e ? void 0 : e.guild_id
                        })
                    }, e.guild_id)
                })
            })]
        })]
    })
}