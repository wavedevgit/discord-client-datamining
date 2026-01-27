/** Chunk was on web.js **/
/** chunk id: 357669, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    b: () => l
});
var r = n(954571),
    i = n(840251),
    a = n(688151),
    o = n(652215);
let s = new i.E([], a.$G.PAYMENT_FLOW_STARTED, {
    location: "payment flow started"
});

function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.default.track(o.HAw.PAYMENT_FLOW_STARTED, e, t), s.trigger()
}