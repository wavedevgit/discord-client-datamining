/** Chunk was on 77870 **/
/** chunk id: 744483, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(604681),
    a = n(672385),
    o = n(950191),
    c = n(168015),
    u = n(761640),
    d = n(58736),
    p = n(652215),
    h = n(985018);

function f(e) {
    let {
        channel: t,
        showCallOrActivityPanel: n
    } = e, f = (0, l.bG)([u.Ay], () => u.Ay.getSection(t.id, null == t ? void 0 : t.isDM())), g = (0, o.Ay)(t.getRecipientId()), m = (0, c.A)(), b = f === p.YvQ.PROFILE && m;
    return (0, r.jsx)(d.In, {
        disabled: !m || n,
        tooltip: !m || n ? h.intl.string(h.t.YneDgF) : b ? h.intl.string(h.t.niD64e) : h.intl.string(h.t["+FAsHq"]),
        icon: i.nRI,
        onClick: () => {
            (0, a.am)({
                displayProfile: g,
                isProfileOpen: !b
            }), s.A.toggleUserProfileSidebarSection()
        },
        selected: b && m && !n
    })
}