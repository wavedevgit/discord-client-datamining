/** chunk id: 979807 params = (module,exports,require) **/
t.d(e, {
    A: () => A
});
var i = t(627968);
t(64700);
var l = t(311907),
    r = t(397927),
    a = t(394953),
    d = t(976860),
    u = t(967198),
    c = t(652215),
    s = t(665606),
    o = t(985018);

function A(n) {
    let e = (0, l.bG)([u.A], () => u.A.getGuildId()),
        t = (0, a.lI)();
    return __OVERLAY__ || e !== c.YYv && !t ? null : (0, i.jsx)(r.Drp, {
        id: "go-to-original-guild",
        label: o.intl.string(s.default["3KruG3"]),
        action: function() {
            (0, d.uh)(n.guild_id, n.id)
        }
    })
}