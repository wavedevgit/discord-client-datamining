/** chunk id: 979807 params = (module,exports,require) **/
e.d(t, {
    A: () => A
});
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(394953),
    d = e(976860),
    u = e(967198),
    c = e(652215),
    s = e(665606),
    o = e(985018);

function A(n) {
    let t = (0, l.bG)([u.A], () => u.A.getGuildId()),
        e = (0, a.lI)();
    return __OVERLAY__ || t !== c.YYv && !e ? null : (0, i.jsx)(r.Drp, {
        id: "go-to-original-guild",
        label: o.intl.string(s.default["3KruG3"]),
        action: function() {
            (0, d.uh)(n.guild_id, n.id)
        }
    })
}