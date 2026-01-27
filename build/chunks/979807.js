/** Chunk was on 57287 **/
/** chunk id: 979807, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    c = n(394953),
    o = n(976860),
    a = n(967198),
    s = n(652215),
    u = n(985018);

function d(e) {
    let t = (0, i.bG)([a.A], () => a.A.getGuildId()),
        n = (0, c.lI)();
    return __OVERLAY__ || t !== s.YYv && !n ? null : (0, r.jsx)(l.Drp, {
        id: "go-to-original-guild",
        label: u.intl.string(u.t.WYj55Y),
        action: function() {
            (0, o.uh)(e.guild_id, e.id)
        }
    })
}