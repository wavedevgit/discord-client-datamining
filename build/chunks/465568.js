/** Chunk was on web.js **/
/** chunk id: 465568, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    D: () => c
});
var r = n(652896),
    i = n(709710),
    a = n(601900),
    o = n(652215);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            s(e, t, n[t])
        })
    }
    return e
}
let c = {
    getActiveErrors: e => {
        let {
            activeStreams: t
        } = e;
        return t.filter(e => e.state === o.XYD.FAILED && null == e.errorCode).map(e => l({
            type: i.iy.STREAM_FAILED_TO_START
        }, (0, a.id)((0, r._z)(e))))
    },
    makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
}