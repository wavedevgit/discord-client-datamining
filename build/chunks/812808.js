/** chunk id: 812808, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    B: () => l,
    G: () => s
});
var r = n(311907),
    i = n(153488),
    a = n(531685);
n(595);
var o = n(652215);

function s() {
    return c((0, r.bG)([a.A], () => a.A.windowSize().width), (0, r.bG)([i.A], () => i.A.hasConsented(o.YAq.PERSONALIZATION)))
}

function l() {
    return c(a.A.windowSize().width, i.A.hasConsented(o.YAq.PERSONALIZATION))
}

function c(e, t) {
    return e > 1200 && t
}