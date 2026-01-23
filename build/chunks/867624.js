/** Chunk was on 97492 **/
/** chunk id: 867624, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(863922),
    a = n(513272),
    o = n(954571),
    c = n(58736),
    u = n(652215),
    d = n(521732),
    p = n(985018);

function h(e) {
    let {
        channel: t
    } = e, n = (0, l.bG)([a.A], () => a.A.shouldShowTopicsBar());
    return (0, r.jsx)(c.Ay.Icon, {
        icon: i.Kck,
        onClick: () => {
            o.default.track(u.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !n,
                source: d.er.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type
            }), (0, s.Oz)()
        },
        tooltip: n ? p.intl.string(p.t.nGs3kO) : p.intl.string(p.t.bIm2sF),
        selected: n,
        "aria-expanded": n
    })
}