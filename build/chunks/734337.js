/** chunk id: 734337 params = (module,exports,require) **/
n.d(e, {
    A: () => A
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    a = n(964404),
    o = n(121046),
    u = n(513963),
    d = n(951829),
    s = n(731854),
    c = n(985018);

function A(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.x.DEFAULT,
        [n, A, g] = (0, o.A)(t, e),
        h = (0, l.bG)([a.Ay], () => a.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return n ? (0, i.jsx)(r.sLh, {
        id: "self-video-hide",
        label: c.intl.string(c.t.MH8ESU),
        checked: !A,
        action: () => {
            if (h || A) return g(!A);
            (0, r.qfG)(t => (0, i.jsx)(u.A, {
                ...t,
                type: d.f.VIDEO,
                onConfirm: () => g(!A)
            }))
        }
    }) : null
}