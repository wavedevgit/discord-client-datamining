/** chunk id: 734337 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(964404),
    s = n(121046),
    d = n(513963),
    o = n(951829),
    u = n(731854),
    c = n(985018);

function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.x.DEFAULT,
        [n, h, _] = (0, s.A)(e, t),
        A = (0, i.bG)([a.Ay], () => a.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return n ? (0, l.jsx)(r.sLh, {
        id: "self-video-hide",
        label: c.intl.string(c.t.MH8ESU),
        checked: !h,
        action: () => {
            if (A || h) return _(!h);
            (0, r.qfG)(e => (0, l.jsx)(d.A, {
                ...e,
                type: o.f.VIDEO,
                onConfirm: () => _(!h)
            }))
        }
    }) : null
}