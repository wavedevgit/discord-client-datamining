/** chunk id: 734337 params = (module,exports,require) **/
n.d(e, {
    A: () => A
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(964404),
    o = n(121046),
    d = n(513963),
    u = n(951829),
    s = n(731854),
    c = n(985018);

function A(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.x.DEFAULT,
        [n, A, E] = (0, o.A)(t, e),
        f = (0, r.bG)([a.Ay], () => a.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return n ? (0, i.jsx)(l.sLh, {
        id: "self-video-hide",
        label: c.intl.string(c.t.MH8ESU),
        checked: !A,
        action: () => {
            if (f || A) return E(!A);
            (0, l.qfG)(t => (0, i.jsx)(d.A, {
                ...t,
                type: u.f.VIDEO,
                onConfirm: () => E(!A)
            }))
        }
    }) : null
}