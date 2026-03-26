/** chunk id: 704761 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(793943),
    a = n(287809),
    o = n(927578),
    c = n(350972),
    d = n(677056),
    u = n(526162),
    h = n(635917);

function A() {
    let [e, t] = (0, s.yK)([a.default, u.A], () => [u.A.getCurrentDesktopIcon(), o.Ay.isPremium(a.default.getCurrentUser())]), n = (0, r.fy)().activePanel === r.HP.APP_ICON, A = (0, h.gG)(e), m = A.id !== c.LW.DEFAULT && (t || n), _ = (0, i.jsx)(l.pVd, {
        size: "custom",
        color: "currentColor",
        width: 24,
        height: 24
    });
    return null != A && m ? (0, i.jsx)(d.A, {
        id: A.id,
        size: h.N8.SIZE_48
    }) : _
}