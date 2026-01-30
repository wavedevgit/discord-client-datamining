/** chunk id: 552574, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
}), n(896048);
var r = n(311907),
    i = n(251913),
    a = n(825755),
    o = n(153084);

function s() {
    let e = (0, r.bG)([a.A], () => a.A.error),
        [t, n] = (0, r.yK)([o.A], () => [o.A.error, o.A.isAwaitingAuthentication]);
    return {
        paymentError: null != t ? t : e,
        paymentAuthenticationState: n ? i.oc.PENDING : null != t ? i.oc.ERROR : i.oc.NONE
    }
}