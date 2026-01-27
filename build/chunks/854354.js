/** Chunk was on web.js **/
/** chunk id: 854354, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    l: () => a
}), n(896048), n(321073);
var r = n(927578),
    i = n(985018);
let a = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            addTaxLineItem: !0
        },
        {
            manualLineItems: n,
            addTaxLineItem: a
        } = t,
        o = [];
    return o = null != n ? [...n] : e.invoiceItems.map(e => ({
        id: e.id,
        label: (0, r.Mn)(e.subscriptionPlanId),
        amount: e.amount * e.quantity
    })), !1 !== a && o.push({
        id: "tax",
        label: i.intl.string(i.t.jiRvC7),
        amount: e.tax
    }), o
}