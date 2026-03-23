/** chunk id: 734337 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    a = n(964404),
    s = n(121046),
    o = n(513963),
    d = n(951829),
    c = n(731854),
    u = n(985018);

function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.x.DEFAULT,
        [n, h, A] = (0, s.A)(e, t),
        _ = (0, l.bG)([a.Ay], () => a.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return n ? (0, i.jsx)(r.sLh, {
        id: "self-video-hide",
        label: u.intl.string(u.t.MH8ESU),
        checked: !h,
        action: () => {
            if (_ || h) return A(!h);
            (0, r.qfG)(e => (0, i.jsx)(o.A, {
                ...e,
                type: d.f.VIDEO,
                onConfirm: () => A(!h)
            }))
        }
    }) : null
}