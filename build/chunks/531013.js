/** Chunk was on web.js **/
/** chunk id: 531013, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    OV: () => O,
    Xo: () => v,
    sZ: () => b
});
var r = n(73153),
    i = n(77729),
    a = n(183636),
    s = n(626584),
    o = n(961350),
    l = n(954571),
    c = n(209489),
    u = n(723702),
    d = n(186840),
    f = n(261811),
    p = n(500496),
    _ = n(469177);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            h(e, t, n[t])
        })
    }
    return e
}

function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function E(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let y = new s.A("ConnectionStore"),
    b = new d.A,
    O = new f.A(b),
    v = new p.A(b);
b.handleIdentify = () => {
    let e = o.default.getToken();
    if (y.verbose("handleIdentify called", {
            hasToken: null != e
        }), null == e) return null;
    let t = a.A.getState(),
        n = o.default.getInstallationForTracking();
    return {
        token: e,
        properties: m(E(m({}, l.default.getSuperProperties()), {
            client_app_state: t,
            is_fast_connect: !1,
            gateway_connect_reasons: _.L7()
        }), null != n ? {
            installation_id: n
        } : {}),
        presence: O.getInitialState()
    }
}, (0, u.isDesktop)() && i.A.remotePowerMonitor.on("resume", () => {
    b.expeditedHeartbeat(5e3, "power monitor resumed")
}), c.A.addOfflineCallback(() => {
    b.networkStateChange(15e3, "network detected offline.", !1)
}), c.A.addOnlineCallback(() => {
    b.networkStateChange(5e3, "network detected online.")
}), b.on("disconnect", e => {
    let {
        code: t,
        reason: n
    } = e;
    r.h.dispatch({
        type: "CONNECTION_CLOSED",
        code: t,
        reason: n
    })
}), b.on("close", e => {
    let {
        code: t,
        reason: n
    } = e;
    r.h.dispatch({
        type: "CONNECTION_INTERRUPTED",
        code: t,
        reason: n
    })
})