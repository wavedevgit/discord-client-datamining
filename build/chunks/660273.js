/** chunk id: 660273, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => u
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(857071),
    o = n(152007),
    s = n(867455),
    d = n(985018);

function u(t, e) {
    let n = (0, r.bG)([o.A], () => o.A.hasJoined(t.id));
    return (0, r.bG)([a.A], () => null != t.guild_id && a.A.isLurking(t.guild_id)) ? null : n ? (0, i.jsx)(l.Drp, {
        id: "leave-thread",
        label: t.isForumPost() ? d.intl.string(d.t["2LsZdT"]) : d.intl.string(d.t["fa/84m"]),
        action: () => s.A.leaveThread(t, e)
    }) : (0, i.jsx)(l.Drp, {
        id: "join-thread",
        label: t.isForumPost() ? d.intl.string(d.t.ihLPiO) : d.intl.string(d.t["10kukS"]),
        action: () => s.A.joinThread(t, e)
    })
}