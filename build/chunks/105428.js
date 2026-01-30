/** chunk id: 105428, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(73153),
    i = n(61925),
    a = n(609415),
    o = n(14594);
let s = {
    maybeOpenBlockUserFeedback(e) {
        let {
            location: t
        } = e;
        (0, a.Bv)(t) && r.h.dispatch({
            type: "BLOCK_USER_SHOW_FEEDBACK"
        })
    },
    maybeOpenAgeVerificationUserFeedback(e) {
        let {
            location: t,
            visibleContent: n
        } = e;
        !(0, i.fj)(t) || null == n || o.K0.includes(n) && r.h.dispatch({
            type: "AGE_VERIFICATION_SHOW_FEEDBACK",
            dismissibleContent: n
        })
    }
}