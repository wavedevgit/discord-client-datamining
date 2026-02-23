/** chunk id: 338769, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => _,
    Z: () => g
});
var s, l = n(64700),
    r = n(311907),
    a = n(773669),
    i = n(248352),
    o = n(797490),
    c = n(758836),
    d = n(788868),
    u = n(985018),
    g = ((s = {})[s.COUNTDOWN = 0] = "COUNTDOWN", s);

function _(e, t) {
    let n = (0, r.bG)([i.A], () => i.A.getUserDiscount(d.tU)),
        s = (0, r.bG)([a.default], () => a.default.locale),
        g = (0, o.$)(t);
    if (l.useMemo(() => null != n && g && e !== c.G2.ORBS, [n, g, e])) {
        let e = null != n && null != n.expiresAt ? new Date(n.expiresAt).toLocaleDateString(s, {
            day: "numeric",
            month: "numeric"
        }) : void 0;
        return {
            type: 0,
            countdownEndDate: n?.expiresAt,
            message: u.intl.format(u.t.RCo9MF, {
                date: e
            })
        }
    }
}