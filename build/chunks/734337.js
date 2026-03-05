/** chunk id: 734337 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(964404),
    o = n(121046),
    s = n(513963),
    d = n(951829),
    u = n(731854),
    c = n(985018);

function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.x.DEFAULT,
        [n, A, f] = (0, o.A)(e, t),
        E = (0, r.bG)([a.Ay], () => a.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return n ? (0, i.jsx)(l.sLh, {
        id: "self-video-hide",
        label: c.intl.string(c.t.MH8ESU),
        checked: !A,
        action: () => {
            if (E || A) return f(!A);
            (0, l.qfG)(e => (0, i.jsx)(s.A, {
                ...e,
                type: d.f.VIDEO,
                onConfirm: () => f(!A)
            }))
        }
    }) : null
}