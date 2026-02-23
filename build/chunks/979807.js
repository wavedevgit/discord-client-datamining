/** chunk id: 979807, original params: n,t,i (module,exports,require) **/
i.d(t, {
    A: () => u
});
var e = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    a = i(394953),
    d = i(976860),
    c = i(967198),
    s = i(652215),
    o = i(985018);

function u(n) {
    let t = (0, l.bG)([c.A], () => c.A.getGuildId()),
        i = (0, a.lI)();
    return __OVERLAY__ || t !== s.YYv && !i ? null : (0, e.jsx)(r.Drp, {
        id: "go-to-original-guild",
        label: o.intl.string(o.t.WYj55Y),
        action: function() {
            (0, d.uh)(n.guild_id, n.id)
        }
    })
}