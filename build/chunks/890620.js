/** Chunk was on web.js **/
/** chunk id: 890620, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    C7: () => u,
    YN: () => l,
    Yb: () => c
});
var r = n(353640),
    i = n(121894),
    a = n(203982),
    o = n(652215);
let s = Object.freeze({
        hasUnsubmittedChanges: !1,
        shouldShowWarning: !1
    }),
    l = (0, r.v)(e => s),
    c = e => {
        (0, i.r)(() => l.setState({
            hasUnsubmittedChanges: e
        }))
    },
    u = e => {
        (0, i.r)(() => l.setState({
            shouldShowWarning: e
        })), e && a._.dispatch(o.jej.EMPHASIZE_NOTICE)
    }