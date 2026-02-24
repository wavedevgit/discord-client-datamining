/** chunk id: 984083, original params: t,e,r (module,exports,require) **/
"use strict";
r.d(e, {
    Z: () => o
});
var s = r(630449),
    n = r(272469),
    i = r(83220);

function o(t, e) {
    let r = (0, s.KU)(),
        o = (0, s.rm)();
    if (!r) return;
    let {
        beforeBreadcrumb: a = null,
        maxBreadcrumbs: c = 100
    } = r.getOptions();
    if (c <= 0) return;
    let u = {
            timestamp: (0, i.lu)(),
            ...t
        },
        h = a ? (0, n.pq)(() => a(u, e)) : u;
    null !== h && (r.emit && r.emit("beforeAddBreadcrumb", h, e), o.addBreadcrumb(h, c))
}