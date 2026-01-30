/** chunk id: 279234, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    P: () => f,
    x: () => p
});
var r = n(118356),
    i = n(31436);
let a = null,
    o = new r.Vy("libdiscore");

function s(e) {
    o.error(e)
}

function l(e) {
    o.warn(e)
}

function c(e) {
    o.info(e)
}

function u(e) {
    o.verbose(e)
}

function d(e) {
    o.trace(e)
}

function f() {
    return null == a && (a = (async () => {
        await i.Bf();
        let e = i.vZ();
        e.installLogCallback(s, l, c, u, d), await e.initLibdiscore(), window._libdiscoreInitialized = !0
    })()), a
}

function p() {
    return !0 === window._libdiscoreInitialized
}