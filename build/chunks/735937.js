/** chunk id: 735937, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => r
});
var n = l(627968);
l(64700);
var i = l(585510),
    s = l(903093),
    a = l(976715);

function r(e) {
    let {
        guild: t
    } = e, {
        shouldShowIncidentActions: l,
        incidentData: r,
        isUnderLockdown: C
    } = (0, i.Li)(t.id), o = !1;
    return (null != r && (o = (0, s.k$)(r) && l), o || C) ? (0, n.jsx)(a.A, {
        guild: t,
        incidentData: r,
        isUnderLockdown: C,
        isRaidDetected: o
    }) : null
}