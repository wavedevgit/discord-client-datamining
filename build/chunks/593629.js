/** Chunk was on 5606 **/
/** chunk id: 593629, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(317097),
    l = n(827734),
    s = n(397927),
    a = n(654107),
    o = n(911180),
    c = n(128450),
    d = n(985018);

function u(e) {
    var t;
    let {
        user: n,
        savedUserColor: u,
        pendingColor: p,
        setPendingAccentColor: _
    } = e, m = n.getAvatarURL(null, 80), g = (0, s.rdh)(l.A.unsafe_rawColors.PRIMARY_530).hex(), f = (0, a.rh)(m, g, !1), b = (0, i.LX)(f[0]);
    return (0, r.jsx)(c.A, {
        title: d.intl.string(d.t["/X3fkf"]),
        children: (0, r.jsx)(o.A, {
            onChange: e => _(e),
            color: null != (t = null != p ? p : u) ? t : b,
            suggestedColors: f,
            showEyeDropper: !0
        })
    })
}