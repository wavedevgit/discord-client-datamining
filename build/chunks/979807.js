/** chunk id: 979807 params = (module,exports,require) **/
i.d(e, {
    A: () => A
});
var t = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    a = i(394953),
    d = i(976860),
    u = i(967198),
    c = i(652215),
    o = i(335993),
    s = i(985018);

function A(n) {
    let e = (0, l.bG)([u.A], () => u.A.getGuildId()),
        i = (0, a.lI)();
    return __OVERLAY__ || e !== c.YYv && !i ? null : (0, t.jsx)(r.Drp, {
        id: "go-to-original-guild",
        label: s.intl.string(o.default["3KruG3"]),
        action: function() {
            (0, d.uh)(n.guild_id, n.id)
        }
    })
}