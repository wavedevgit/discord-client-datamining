/** chunk id: 414736 params = (module,exports,require) **/
n.d(t, {
    U: () => c,
    _: () => d
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(73153),
    a = n(927018),
    r = n(249581),
    o = n(985018);

function d(e) {
    l.h.dispatch({
        type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
        achievementId: e
    })
}

function c(e, t) {
    let n = (0, a.vM)(e);
    null != n && (0, s.showToast)((0, s.createToast)(o.intl.string(o.t.MPpEUA), s.ToastType.CUSTOM, {
        position: s.ToastPosition.BOTTOM,
        component: (0, i.jsx)(r.A, {
            achievement: n,
            unlocked: t
        }),
        duration: 6e3
    }))
}