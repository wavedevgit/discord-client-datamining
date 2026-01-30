/** chunk id: 552618, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    J: () => c,
    c: () => l
});
var r = n(95701),
    i = n(734057),
    a = n(576705),
    o = n(652215);
let s = o.hVb.VIEW_CHANNEL | o.hVb.READ_MESSAGE_HISTORY;

function l(e) {
    return null != e && (e.type === o.rbe.DM || e.type === o.rbe.GROUP_DM || (0, r.pQ)(e.type) && a.A.canBasicChannel(s, e))
}

function c(e) {
    return null != e && l(i.A.getBasicChannel(e))
}