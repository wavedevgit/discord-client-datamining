/** Chunk was on 41727 **/
/** chunk id: 704761, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(896048);
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(793943),
    a = n(287809),
    o = n(927578),
    c = n(350972),
    u = n(677056),
    d = n(526162),
    p = n(635917);

function h() {
    let [e, t] = (0, l.yK)([a.default, d.A], () => [d.A.getCurrentDesktopIcon(), o.Ay.isPremium(a.default.getCurrentUser())]), n = (0, s.fy)().activePanel === s.HP.APP_ICON, h = (0, p.gG)(e), f = h.id !== c.LW.DEFAULT && (t || n), g = (0, r.jsx)(i.pVd, {
        size: "custom",
        color: "currentColor",
        width: 24,
        height: 24
    });
    return null != h && f ? (0, r.jsx)(u.A, {
        id: h.id,
        width: 48
    }) : g
}