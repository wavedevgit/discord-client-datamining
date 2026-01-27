/** Chunk was on web.js **/
/** chunk id: 30084, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    D: () => d
});
var r = n(627968),
    i = n(397927),
    a = n(954571),
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

function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function u(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let d = e => {
    let {
        analyticsLocations: t,
        displayProfile: s,
        location: c
    } = e;
    null == c && (c = t[t.length - 1]), a.default.track(o.HAw.OPEN_MODAL, {
        type: "Tiered Tenure Badge Details",
        location_stack: t,
        location: c,
        source: c
    }), (0, i.mMO)(async () => {
        let {
            default: e
        } = await n.e("77641").then(n.bind(n, 384048));
        return t => (0, r.jsx)(e, u(l({}, t), {
            displayProfile: s
        }))
    })
}