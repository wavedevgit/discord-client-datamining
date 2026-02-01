/** chunk id: 387462, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968),
    r = n(64700),
    i = n(675171),
    a = n(750580),
    s = n(436136),
    o = n(228098),
    c = n(157259),
    u = n(706847),
    d = n(626360);
let h = r.memo(function(e) {
    let {
        channel: t,
        narrow: n
    } = e, r = (0, o.A)(t), h = (0, i.A)(), {
        showUnreadsNotice: p,
        clearUnreadsNotice: f
    } = (0, a.A)(t);
    return t.isArchivedLockedThread() ? (0, l.jsx)(u.p, {
        channel: t,
        narrow: n
    }) : t.isLockedThread() ? (0, l.jsx)(u.z, {
        channel: t,
        narrow: n
    }) : p ? (0, l.jsx)(s.A, {
        channel: t,
        clearUnreadsNotice: f
    }) : r && h.includes(d.i.OPT_IN_CHANNEL) ? (0, l.jsx)(c.A, {
        channel: t,
        narrow: n
    }) : null
})