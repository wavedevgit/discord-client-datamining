/** chunk id: 734337 params = (module,exports,require) **/
i.d(e, {
    A: () => A
});
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    r = i(964404),
    o = i(121046),
    d = i(513963),
    s = i(951829),
    c = i(731854),
    u = i(985018);

function A(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.x.DEFAULT,
        [i, A, f] = (0, o.A)(t, e),
        b = (0, a.bG)([r.Ay], () => r.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return i ? (0, n.jsx)(l.sLh, {
        id: "self-video-hide",
        label: u.intl.string(u.t.MH8ESU),
        checked: !A,
        action: () => {
            if (b || A) return f(!A);
            (0, l.qfG)(t => (0, n.jsx)(d.A, {
                ...t,
                type: s.f.VIDEO,
                onConfirm: () => f(!A)
            }))
        }
    }) : null
}