/** chunk id: 744483, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
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
    h = n(652215),
    p = n(985018);

function g(e) {
    let {
        channel: t,
        showCallOrActivityPanel: n
    } = e, g = (0, l.bG)([u.Ay], () => u.Ay.getSection(t.id, null == t ? void 0 : t.isDM())), f = (0, o.Ay)(t.getRecipientId()), m = (0, c.A)(), b = g === h.YvQ.PROFILE && m;
    return (0, r.jsx)(d.In, {
        disabled: !m || n,
        tooltip: !m || n ? p.intl.string(p.t.YneDgF) : b ? p.intl.string(p.t.niD64e) : p.intl.string(p.t["+FAsHq"]),
        icon: i.nRI,
        onClick: () => {
            (0, a.am)({
                displayProfile: f,
                isProfileOpen: !b
            }), s.A.toggleUserProfileSidebarSection()
        },
        selected: b && m && !n
    })
}