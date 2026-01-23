/** Chunk was on web.js **/
/** chunk id: 589590, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(735438),
    i = n(842901);

function a(e) {
    let {
        theme: t,
        layoutType: n
    } = e;
    return (0, i.E)(t, n)
}
let s = (0, r.memoize)(a, e => {
    let {
        theme: t,
        layoutType: n
    } = e;
    return "".concat(t, ":").concat(n)
})