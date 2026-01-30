/** chunk id: 884877, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    xM: () => c
}), n(114821), n(339614);
var r = n(440703),
    i = n(405269),
    a = n(927813),
    o = n(927578),
    s = n(985018);
let l = e => e.rewardsConfig.rewards.filter(e => e.type === r.l.FRACTIONAL_PREMIUM),
    c = e => {
        let t = l(e).flatMap(e => Array(e.quantity).fill(e.skuId)),
            n = (0, o.iv)(t),
            r = {
                days: s.t.fYmirx,
                hours: s.t["C3RO+g"],
                minutes: s.t.r77oHc
            },
            c = (0, i.Tf)(0, n * a.A.Millis.HOUR);
        return s.intl.formatToPlainString(s.t["4SqnVD"], {
            time: (0, i.uN)(c, r)
        })
    }