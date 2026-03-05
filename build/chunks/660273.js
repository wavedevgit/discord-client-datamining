/** chunk id: 660273, original params: i,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var s = n(627968);
n(64700);
var r = n(311907),
    a = n(397927),
    e = n(857071),
    l = n(152007),
    d = n(867455),
    u = n(985018);

function o(i, t) {
    let n = (0, r.bG)([l.A], () => l.A.hasJoined(i.id));
    return (0, r.bG)([e.A], () => null != i.guild_id && e.A.isLurking(i.guild_id)) ? null : n ? (0, s.jsx)(a.Drp, {
        id: "leave-thread",
        label: i.isForumPost() ? u.intl.string(u.t["2LsZdT"]) : u.intl.string(u.t["fa/84m"]),
        action: () => d.A.leaveThread(i, t)
    }) : (0, s.jsx)(a.Drp, {
        id: "join-thread",
        label: i.isForumPost() ? u.intl.string(u.t.ihLPiO) : u.intl.string(u.t["10kukS"]),
        action: () => d.A.joinThread(i, t)
    })
}