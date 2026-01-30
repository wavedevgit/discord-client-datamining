/** chunk id: 429433, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    C: () => o
});
var r = n(627968);
n(64700);
var i = n(937773),
    a = n(307731);

function o(e) {
    let {
        channel: t,
        closePopout: n,
        analyticsOverride: o,
        onSelectEmoji: s,
        messageId: l
    } = e;
    return (0, r.jsx)(i.A, {
        closePopout: n,
        channel: t,
        onSelectEmoji: s,
        pickerIntention: a.b_.REACTION,
        analyticsOverride: o,
        messageId: l
    })
}