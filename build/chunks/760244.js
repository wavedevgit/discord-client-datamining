/** chunk id: 760244, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => c
}), s(896048), s(747238);
var a = s(627968),
    o = s(64700),
    _ = s(492462),
    r = s(960488),
    n = s(716965),
    i = s(321987),
    p = s(595244),
    l = s(985018);

function c() {
    let e, t = (0, r.zy)(),
        [s, c] = o.useState(!1),
        [u, d] = o.useState(!1);
    return o.useEffect(() => {
        !async function() {
            let e = (0, _.parse)(t.search);
            try {
                var s;
                await (0, n.Kf)(null != (s = e.token) ? s : ""), c(!0)
            } catch (e) {
                d(!0)
            }
        }()
    }, [t.search]), e = s ? (0, a.jsx)(p.jX, {
        message: l.intl.string(l.t.Tqu3OQ),
        showsCloseWindowText: !0
    }) : u ? (0, a.jsx)(p.gz, {
        message: l.intl.string(l.t.J8LsCs),
        showsCloseWindowText: !0
    }) : (0, a.jsx)(p.Ay, {
        message: l.intl.string(l.t.BAcf6a),
        spinner: !0
    }), (0, a.jsx)(i.$, {
        children: e
    })
}