/** chunk id: 709055, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(723702),
    i = n(837921),
    a = n(87001);

function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = a.A.getWindow(e);
    null == n || n.closed || (r.isPlatformEmbedded ? i.Ay.focus(e, t) : n.focus())
}