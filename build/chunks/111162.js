/** Chunk was on web.js **/
/** chunk id: 111162, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    default: () => S
}), n(938796);
var r, i = n(158390),
    a = n(247775),
    o = n(311907),
    s = n(562465),
    l = n(506774),
    c = n(73153),
    u = n(926919),
    d = n(927813),
    f = n(728458),
    p = n(652215);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            _(e, t, n[t])
        })
    }
    return e
}
let m = (() => {
        let e = "".concat(location.protocol, "//").concat(location.host, "/__development/source_maps"),
            t = null,
            n = new i.A(5 * d.A.Millis.SECOND, +d.A.Millis.MINUTE, !0),
            r = () => {
                s.Bo.put({
                    url: e,
                    headers: {
                        Authorization: a.getToken()
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0
                }).then(e => {
                    401 === e.status || 403 === e.status ? (t = null, (0, u.x)({
                        sourceMapsEnabled: !1
                    })) : 200 !== e.status ? t = setTimeout(r, n.fail()) : (n.succeed(), t = setTimeout(r, e.body.sourceMapCookieTTLSeconds * d.A.Millis.SECOND * .75))
                }, () => {
                    t = setTimeout(r, n.fail())
                })
            };
        return {
            set: n => {
                n !== (null != t) && (n ? t = setTimeout(r, 0) : (clearTimeout(t), t = null, s.Bo.del({
                    url: e,
                    headers: {
                        Authorization: a.getToken()
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0
                })))
            }
        }
    })(),
    g = "DeveloperOptionsStore",
    E = {
        trace: !1,
        canary: !1,
        logGatewayEvents: !1,
        logOverlayEvents: !1,
        logAnalyticsEvents: !1,
        sourceMapsEnabled: !1,
        axeEnabled: !1,
        cssDebuggingEnabled: !1,
        layoutDebuggingEnabled: !1,
        bugReporterEnabled: !0,
        idleStatusIndicatorEnabled: !1,
        onlyShowPreviewAppCollections: !1,
        disableAppCollectionsCache: !1,
        isStreamInfoOverlayEnabled: !1,
        preventPopoutClose: !1,
        logKeyboardMismatches: !1,
        alertStartupMetrics: !1,
        personaForceFaeFail: !1,
        personaForceIdVerificationFail: !1,
        personaDisableModularPilotTestTemplate: !1
    },
    y = h({}, E);

function b(e) {
    y = h({}, E, y, e), m.set(y.sourceMapsEnabled), l.w.set(g, y)
}

function O(e) {
    let {
        settings: t
    } = e;
    b(t)
}

function v(e) {
    b(E)
}

function A(e) {
    var t;
    let n = ((null != (t = e.user.flags) ? t : 0) & p.nhx.STAFF) === p.nhx.STAFF,
        r = n || null != e.user.personal_connection_id;
    n && m.set(y.sourceMapsEnabled), f.A.setTags({
        isStaff: r.toString()
    })
}
class I extends(r = o.Ay.Store) {
    initialize() {
        let e = l.w.get(g);
        null != e && (y = h({}, E, e))
    }
    get isTracingRequests() {
        return y.trace
    }
    get isForcedCanary() {
        return y.canary
    }
    get isLoggingGatewayEvents() {
        return y.logGatewayEvents
    }
    get isLoggingOverlayEvents() {
        return y.logOverlayEvents
    }
    get isLoggingAnalyticsEvents() {
        return y.logAnalyticsEvents
    }
    get isAxeEnabled() {
        return y.axeEnabled
    }
    get cssDebuggingEnabled() {
        return y.cssDebuggingEnabled
    }
    get layoutDebuggingEnabled() {
        return y.layoutDebuggingEnabled
    }
    get sourceMapsEnabled() {
        return y.sourceMapsEnabled
    }
    get isBugReporterEnabled() {
        return y.bugReporterEnabled
    }
    get isIdleStatusIndicatorEnabled() {
        return y.idleStatusIndicatorEnabled
    }
    get onlyShowPreviewAppCollections() {
        return y.onlyShowPreviewAppCollections
    }
    get disableAppCollectionsCache() {
        return y.disableAppCollectionsCache
    }
    get isStreamInfoOverlayEnabled() {
        return y.isStreamInfoOverlayEnabled
    }
    get preventPopoutClose() {
        return y.preventPopoutClose
    }
    get logKeyboardMismatches() {
        return y.logKeyboardMismatches
    }
    get alertStartupMetrics() {
        return y.alertStartupMetrics
    }
    get personaForceFaeFail() {
        return y.personaForceFaeFail
    }
    get personaForceIdVerificationFail() {
        return y.personaForceIdVerificationFail
    }
    get personaDisableModularPilotTestTemplate() {
        return y.personaDisableModularPilotTestTemplate
    }
    getDebugOptionsHeaderValue() {
        return Object.keys(y).map(e => y[e]), Object.keys(y).filter(e => y[e]).join(",")
    }
}
_(I, "displayName", "DeveloperOptionsStore");
let S = new I(c.h, {
    LOGOUT: v,
    CONNECTION_OPEN: A,
    DEVELOPER_OPTIONS_UPDATE_SETTINGS: O
})