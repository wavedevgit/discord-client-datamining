/** chunk id: 134725, original params: n,t,e (module,exports,require) **/
e.d(t, {
    A: () => o
});
var i = e(627968);
e(64700);
var r = e(311907),
    l = e(397927),
    a = e(914430),
    s = e(924985),
    d = e(734057),
    c = e(652215),
    A = e(985018);

function o(n) {
    return (0, r.bG)([s.A, d.A], () => {
        let t = Object.values(d.A.getMutableBasicGuildChannelsForGuild(n.guild_id)).filter(n => n.type === c.rbe.GUILD_CATEGORY);
        return 0 === t.length || t.every(n => s.A.isCollapsed(n.id))
    }) ? null : (0, i.jsx)(l.Drp, {
        id: "collapse-all-categories",
        label: A.intl.string(A.t["9dqzUr"]),
        action: () => (0, a.rZ)(n.guild_id)
    })
}