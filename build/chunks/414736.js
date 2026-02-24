/** chunk id: 414736, original params: e,t,n (module,exports,require) **/
n.d(t, {
    U: () => d,
    _: () => c
});
var i = n(627968);
n(64700);
var s = n(397927),
    a = n(73153),
    l = n(927018),
    r = n(249581),
    o = n(985018);

function c(e) {
    a.h.dispatch({
        type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
        achievementId: e
    })
}

function d(e, t) {
    let n = (0, l.vM)(e);
    null != n && (0, s.showToast)((0, s.createToast)(o.intl.string(o.t.MPpEUA), s.ToastType.CUSTOM, {
        position: s.ToastPosition.BOTTOM,
        component: (0, i.jsx)(r.A, {
            achievement: n,
            unlocked: t
        }),
        duration: 6e3
    }))
}