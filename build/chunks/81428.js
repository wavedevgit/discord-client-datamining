/** chunk id: 81428, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r, i = n(311907),
    a = n(73153),
    o = n(653741);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let l = null;

function c(e) {
    l = null != e.regionalFeatureConfig ? o.wN.fromConnectionOpen(e.regionalFeatureConfig) : null
}
class u extends(r = i.Ay.Store) {
    getRegionalFeatureConfig() {
        return l
    }
    isFeatureAgeGated(e) {
        var t;
        return null != (t = null == l ? void 0 : l.isFeatureAgeGated(e)) && t
    }
    isSettingTeenByDefault(e) {
        var t;
        return null != (t = null == l ? void 0 : l.isFeatureTeenByDefault(e)) && t
    }
    hasAgeGatedFeatures() {
        var e;
        return null != (e = null == l ? void 0 : l.hasAgeGatedFeatures()) && e
    }
    hasTeenDefaults() {
        var e;
        return null != (e = null == l ? void 0 : l.hasTeenDefaults()) && e
    }
}
s(u, "displayName", "RegionalFeatureConfigStore");
let d = new u(a.h, {
    CONNECTION_OPEN: c
})