/** Chunk was on web.js **/
/** chunk id: 548965, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    ML: () => s,
    iQ: () => f
}), n(228524), n(321073), n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(306173);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let s = [],
    l = Symbol("unknown");
class c {
    getEnabledFeatureName() {
        let e = this.getCachedConfig();
        return void 0 === e || e.treatmentId <= 0 ? null : "".concat(this.id, ":").concat(e.treatmentId)
    }
    getCachedConfig() {
        return this.cachedConfig === l && ((0, a.xd)() ? this.cachedConfig = (0, a.Ih)().getConfig(this.id) : this.cachedConfig = void 0), this.cachedConfig
    }
    setExperiment(e) {
        this.inner = e
    }
    getCurrentConfig() {
        return (i()(null != this.inner, "experiment must be set before calling getCurrentConfig"), "getCurrentConfig" in this.inner) ? this.inner.getCurrentConfig({
            location: "default"
        }) : this.inner.getConfig({
            location: "default"
        })
    }
    constructor(e, t) {
        o(this, "id", void 0), o(this, "inner", void 0), o(this, "cachedConfig", void 0), this.id = e, this.inner = null, this.cachedConfig = l, s.push(this)
    }
}
class u extends c {
    getLabel() {
        return this.label
    }
    getTreatments() {
        return [{
            treatmentId: 0
        }, {
            treatmentId: 1
        }]
    }
    getCachedEnabled() {
        let e = this.getCachedConfig();
        return null != e && 1 === e.treatmentId
    }
    constructor(e, t) {
        super(e), o(this, "label", void 0), this.label = t
    }
}
class d extends c {
    getLabel() {
        return "libdiscore Telemetry"
    }
    getTreatments() {
        return [{
            treatmentId: 0
        }, {
            treatmentId: 1
        }, {
            treatmentId: 2
        }, {
            treatmentId: 3
        }]
    }
    getMetricsSampleRate() {
        let e = this.getCachedConfig();
        switch (null == e ? void 0 : e.treatmentId) {
            case 1:
                return .01;
            case 2:
                return .05;
            case 3:
                return 1;
            default:
                return 0
        }
    }
    didEmit() {
        this.emissionsCount++
    }
    shouldCollectMetrics() {
        let e = this.getMetricsSampleRate();
        return 0 !== e && (1 === e || !(this.emissionsCount >= this.MAX_EMISSIONS_PER_APP_LAUNCH) && Math.random() < e)
    }
    constructor(...e) {
        super(...e), o(this, "MAX_EMISSIONS_PER_APP_LAUNCH", 5), o(this, "emissionsCount", 0)
    }
}
new d("2025-09-libdiscore-telemetry");
let f = new u("2025-11-defer-load-late-lazy-cache", "Allow react to render before lazy cache is loaded")