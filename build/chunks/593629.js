/** chunk id: 593629 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var s = n(317097),
    l = n(827734),
    a = n(397927),
    r = n(654107),
    o = n(911180),
    d = n(128450),
    c = n(985018);

function u(e) {
    let {
        user: t,
        savedUserColor: n,
        pendingColor: u,
        setPendingAccentColor: _
    } = e, g = t.getAvatarURL(null, 80), A = (0, a.rdh)(l.A.unsafe_rawColors.PRIMARY_530).hex(), m = (0, r.rh)(g, A, !1), h = (0, s.LX)(m[0]);
    return (0, i.jsx)(d.A, {
        title: c.intl.string(c.t["/X3fkf"]),
        children: (0, i.jsx)(o.A, {
            onChange: e => _(e),
            color: u ?? n ?? h,
            suggestedColors: m,
            showEyeDropper: !0
        })
    })
}