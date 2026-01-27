/** Chunk was on web.js **/
/** chunk id: 261020, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    C: () => o,
    n: () => s
});
var r = n(210528),
    i = n(723702),
    a = n(272984);

function o(e) {
    let t = null;
    (0, i.isDesktop)() || (t = window.open("", "_blank")), null != t ? t.location.href = e : window.open(e)
}

function s(e, t) {
    o(r.A.isProtocolRegistered() ? a.RQ.PLAYER_OPEN(e, t) : a.RQ.WEB_OPEN(e, t))
}