/** chunk id: 616961, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    y: () => a
}), n(321073);
var r = n(361670),
    i = n(464114);
let a = (e, t, n) => {
    if ("" === e) return null;
    let a = [],
        o = [];
    return (0, i.G2)(e).forEach(e => {
        let i = (0, r.W$)(e, t, n);
        i === r.Ux.SENDABLE ? a.push(e) : i === r.Ux.SENDABLE_WITH_PREMIUM && o.push(e)
    }), {
        sendable: a,
        sendableWithPremium: o
    }
}