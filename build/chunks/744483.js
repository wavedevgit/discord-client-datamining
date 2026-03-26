/** chunk id: 744483 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(604681),
    a = n(672385),
    o = n(950191),
    c = n(168015),
    d = n(761640),
    u = n(58736),
    h = n(652215),
    A = n(985018);

function m(e) {
    let {
        channel: t,
        showCallOrActivityPanel: n
    } = e, m = (0, s.bG)([d.Ay], () => d.Ay.getSection(t.id, t?.isDM())), p = (0, o.Ay)(t.getRecipientId()), _ = (0, c.A)(), g = m === h.YvQ.PROFILE && _;
    return (0, i.jsx)(u.In, {
        disabled: !_ || n,
        tooltip: !_ || n ? A.intl.string(A.t.YneDgF) : g ? A.intl.string(A.t.niD64e) : A.intl.string(A.t["+FAsHq"]),
        icon: l.nRI,
        onClick: () => {
            (0, a.am)({
                displayProfile: p,
                isProfileOpen: !g
            }), r.A.toggleUserProfileSidebarSection()
        },
        selected: g && !n
    })
}