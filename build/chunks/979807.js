/** chunk id: 979807, original params: n,i,t (module,exports,require) **/
t.d(i, {
    A: () => u
});
var e = t(627968);
t(64700);
var l = t(311907),
    r = t(397927),
    a = t(394953),
    d = t(976860),
    c = t(967198),
    s = t(652215),
    o = t(985018);

function u(n) {
    let i = (0, l.bG)([c.A], () => c.A.getGuildId()),
        t = (0, a.lI)();
    return __OVERLAY__ || i !== s.YYv && !t ? null : (0, e.jsx)(r.Drp, {
        id: "go-to-original-guild",
        label: o.intl.string(o.t.WYj55Y),
        action: function() {
            (0, d.uh)(n.guild_id, n.id)
        }
    })
}