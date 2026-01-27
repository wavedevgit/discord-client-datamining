/** Chunk was on web.js **/
/** chunk id: 263594, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Y: () => s
}), n(938796);
var r = n(665260),
    i = n(696451),
    a = n(669953),
    o = n(340837);

function s(e) {
    return new Promise(t => {
        i.Ay.addConditionalChangeListener(() => {
            var n;
            let s = i.Ay.getSelfMember(e);
            return !(0, r.Lt)(null != (n = null == s ? void 0 : s.flags) ? n : 0, o.D.COMPLETED_ONBOARDING) || (a.A.finishOnboarding(e), t(), !1)
        })
    })
}