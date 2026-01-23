/** Chunk was on 59275 **/
/** chunk id: 338769, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => g,
    Z: () => d
});
var r, l = n(64700),
    s = n(311907),
    a = n(248352),
    i = n(797490),
    o = n(758836),
    c = n(788868),
    u = n(985018),
    d = ((r = {})[r.COUNTDOWN = 0] = "COUNTDOWN", r);

function g(e, t) {
    let n = (0, s.bG)([a.A], () => a.A.getUserDiscount(c.tU)),
        r = (0, i.$)(t);
    if (l.useMemo(() => null != n && r && e !== o.G2.ORBS, [n, r, e])) return {
        type: 0,
        countdownEndDate: null == n ? void 0 : n.expiresAt,
        message: u.intl.format(u.t.WfqvDS, {})
    }
}