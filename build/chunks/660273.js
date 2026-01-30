/** chunk id: 660273, original params: t,n,i (module,exports,require) **/
i.d(n, {
    A: () => u
});
var e = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(857071),
    d = i(152007),
    o = i(867455),
    s = i(985018);

function u(t, n) {
    let i = (0, r.bG)([d.A], () => d.A.hasJoined(t.id));
    return (0, r.bG)([a.A], () => null != t.guild_id && a.A.isLurking(t.guild_id)) ? null : i ? (0, e.jsx)(l.Drp, {
        id: "leave-thread",
        label: t.isForumPost() ? s.intl.string(s.t["2LsZdT"]) : s.intl.string(s.t["fa/84m"]),
        action: () => o.A.leaveThread(t, n)
    }) : (0, e.jsx)(l.Drp, {
        id: "join-thread",
        label: t.isForumPost() ? s.intl.string(s.t.ihLPiO) : s.intl.string(s.t["10kukS"]),
        action: () => o.A.joinThread(t, n)
    })
}