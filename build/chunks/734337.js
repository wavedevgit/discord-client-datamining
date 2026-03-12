/** chunk id: 734337 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(964404),
    o = n(121046),
    s = n(513963),
    u = n(951829),
    d = n(731854),
    c = n(985018);

function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.x.DEFAULT,
        [n, A, h] = (0, o.A)(e, t),
        g = (0, i.bG)([a.Ay], () => a.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return n ? (0, l.jsx)(r.sLh, {
        id: "self-video-hide",
        label: c.intl.string(c.t.MH8ESU),
        checked: !A,
        action: () => {
            if (g || A) return h(!A);
            (0, r.qfG)(e => (0, l.jsx)(s.A, {
                ...e,
                type: u.f.VIDEO,
                onConfirm: () => h(!A)
            }))
        }
    }) : null
}