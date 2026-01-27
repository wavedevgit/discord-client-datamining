/** Chunk was on 77870 **/
/** chunk id: 387462, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    l = n(64700),
    i = n(675171),
    s = n(750580),
    a = n(436136),
    o = n(228098),
    c = n(157259),
    u = n(706847),
    d = n(626360);
let p = l.memo(function(e) {
    let {
        channel: t,
        narrow: n
    } = e, l = (0, o.A)(t), p = (0, i.A)(), {
        showUnreadsNotice: h,
        clearUnreadsNotice: f
    } = (0, s.A)(t);
    return t.isArchivedLockedThread() ? (0, r.jsx)(u.p, {
        channel: t,
        narrow: n
    }) : t.isLockedThread() ? (0, r.jsx)(u.z, {
        channel: t,
        narrow: n
    }) : h ? (0, r.jsx)(a.A, {
        channel: t,
        clearUnreadsNotice: f
    }) : l && p.includes(d.i.OPT_IN_CHANNEL) ? (0, r.jsx)(c.A, {
        channel: t,
        narrow: n
    }) : null
})