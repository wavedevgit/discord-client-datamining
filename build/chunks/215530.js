/** Chunk was on web.js **/
/** chunk id: 215530, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
}), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(253932),
    o = n(994500);

function s(e) {
    let t = a.j0.useSetting(),
        {
            isBlocked: n,
            isIgnored: s
        } = (0, i.cf)([o.A], () => ({
            isBlocked: o.A.isBlocked(e),
            isIgnored: o.A.isIgnored(e)
        })),
        [l, c] = (0, r.useState)(n || s);
    return (0, r.useEffect)(() => c(n || s), [n, s]), [l && !(s && t), (0, r.useCallback)(() => {
        c(!1)
    }, [])]
}