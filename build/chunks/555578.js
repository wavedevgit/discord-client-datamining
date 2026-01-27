/** Chunk was on web.js **/
/** chunk id: 555578, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    G: () => a
});
var r = n(530702),
    i = n(64700);

function a(e, t, n) {
    let a = (0, i.useMemo)(() => new(0, r.G), []),
        {
            children: o,
            items: s,
            collection: l
        } = e;
    return (0, i.useMemo)(() => l || t(a.build({
        children: o,
        items: s
    }, n)), [a, o, s, l, n, t])
}