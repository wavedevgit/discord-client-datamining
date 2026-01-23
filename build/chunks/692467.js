/** Chunk was on 47841 **/
/** chunk id: 692467, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(627794),
    s = n(690420);

function a(e) {
    let {
        guildId: t,
        triggerType: n
    } = e, a = i.useMemo(() => () => (0, l._I)(t, n), [t, n]), [o] = i.useState(a);
    return (0, r.jsx)(s.A, {
        rule: o
    })
}