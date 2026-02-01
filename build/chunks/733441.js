/** chunk id: 733441, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(604681),
    a = n(58149),
    o = n(761640),
    c = n(967198),
    u = n(58736),
    d = n(652215),
    p = n(985018);

function h(e) {
    let {
        channelId: t
    } = e, n = (0, l.bG)([o.Ay], () => o.Ay.getSection(t)), h = (0, l.bG)([c.A], () => c.A.getGuildId()), g = n === d.YvQ.MEMBERS;
    return (0, r.jsx)(u.In, {
        tooltip: g ? p.intl.string(p.t.Axvx8c) : p.intl.string(p.t.gxChDx),
        icon: i.nFg,
        onClick: () => {
            a.Ay.trackWithMetadata(d.HAw.MEMBER_LIST_TOGGLED, {
                channel_id: t,
                guild_id: h,
                member_list_open: !g
            }), s.A.toggleMembersSection()
        },
        selected: g
    })
}