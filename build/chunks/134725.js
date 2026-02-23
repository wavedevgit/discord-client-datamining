/** chunk id: 134725, original params: n,e,t (module,exports,require) **/
t.d(e, {
    A: () => o
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(914430),
    s = t(924985),
    d = t(734057),
    c = t(652215),
    A = t(985018);

function o(n) {
    return (0, r.bG)([s.A, d.A], () => {
        let e = Object.values(d.A.getMutableBasicGuildChannelsForGuild(n.guild_id)).filter(n => n.type === c.rbe.GUILD_CATEGORY);
        return 0 === e.length || e.every(n => s.A.isCollapsed(n.id))
    }) ? null : (0, i.jsx)(l.Drp, {
        id: "collapse-all-categories",
        label: A.intl.string(A.t["9dqzUr"]),
        action: () => (0, a.rZ)(n.guild_id)
    })
}