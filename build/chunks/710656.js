/** Chunk was on 41917 **/
/** chunk id: 710656, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(627968);
n(64700);
var o = n(333748),
    s = n(59198),
    i = n(652215),
    a = n(544105);

function l(e) {
    let {
        authToken: t,
        onContinue: n,
        onError: l,
        onClose: c
    } = e;
    return (0, r.jsx)(s.W, {
        platformType: i.fg2.XBOX,
        clientId: o.i.XBOX_APPLICATION_ID,
        scopes: a.sS,
        authToken: t,
        onContinue: n,
        onError: l,
        onClose: c
    })
}