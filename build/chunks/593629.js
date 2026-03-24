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
        setPendingAccentColor: m
    } = e, g = t.getAvatarURL(null, 80), _ = (0, a.rdh)(l.A.unsafe_rawColors.PRIMARY_530).hex(), x = (0, r.rh)(g, _, !1), A = (0, s.LX)(x[0]);
    return (0, i.jsx)(d.A, {
        title: c.intl.string(c.t["/X3fkf"]),
        children: (0, i.jsx)(o.A, {
            onChange: e => m(e),
            color: u ?? n ?? A,
            suggestedColors: x,
            showEyeDropper: !0
        })
    })
}