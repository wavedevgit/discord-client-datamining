/** chunk id: 269576 params = (module,exports,require) **/
"use strict";
n.d(t, {
    b: () => l
});
var i = n(562465),
    s = n(652215);
let l = async (e, t) => (await i.Bo.get({
    url: s.Rsh.PAYMENT_PAYOUT_GROUPS(e),
    query: t,
    rejectWithError: !1
})).body