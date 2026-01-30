/** chunk id: 257367, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
}), n(896048);
var r = n(64700),
    i = n(172218),
    a = n(311907),
    o = n(517164);

function s(e) {
    let {
        userId: t,
        onAction: n
    } = e, [s, l] = (0, r.useState)(!1), c = (0, a.bG)([o.A], () => o.A.isFetchingUserOutbox(t)), u = (0, r.useCallback)(e => {
        e && (n({
            action: "VIEW_ACTIVITY_CARD"
        }), l(!0))
    }, [n]);
    return (0, i.K)(u, void 0, !c && !s)
}