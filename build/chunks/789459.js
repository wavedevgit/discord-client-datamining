/** Chunk was on web.js **/
/** chunk id: 789459, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => k
}), n(896048), n(446912);
var r, i = n(181370),
    a = n.n(i),
    o = n(311907),
    s = n(118356),
    l = n(506774),
    c = n(445397),
    u = n(818348);

function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            d(e, t, n[t])
        })
    }
    return e
}

function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function _(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function h(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = m(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function m(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}

function g(e, t) {
    if ("object" !== y(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" !== y(r)) return r;
        throw TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
}

function E(e) {
    var t = g(e, "string");
    return "symbol" === y(t) ? t : String(t)
}

function y(e) {
    return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let b = new s.Vy("ApexExperimentStore");
(null == window.TextEncoder || null == window.TextDecoder) && n(283346);
let O = [c.ni.User, c.ni.Installation],
    v = {
        user: {},
        guild: {},
        installation: {}
    },
    A = {},
    I = {},
    S = {},
    T = {},
    C = {},
    N = new Set,
    w = new Set,
    R = "apexTrackedExposures",
    P = 2,
    D = 6048e5,
    L = {},
    x = 3,
    M = {};

function j(e) {
    let t = M[e];
    return null == t && (t = a().v3(e), M[e] = t), t
}
class k extends(r = o.Ay.PersistedStore) {
    loadStoredState(e, t) {
        for (let n in null != e && e.version === x ? (I = e.clientOverrides, v = e.evaluatedExperiments) : null != e && 2 === e.version && (I = e.clientOverrides, v = _(f({}, e.evaluatedExperiments), {
                installation: {}
            })), T = {}, t) {
            let e = j(n),
                r = t[n];
            T[n] = {
                hashedName: e,
                variantId: r,
                isOverride: !0,
                exposureTrackingEnabled: !1
            }
        }
        L = this.loadTrackedExposures()
    }
    getState() {
        return {
            version: x,
            evaluatedExperiments: v,
            clientOverrides: I
        }
    }
    setExperimentAssignments(e) {
        if (null == e) return !1;
        for (let t of (this.clearSessionOverrides(), O)) {
            let n = c.ag[t],
                r = e.assignments[t];
            if (null == r || null == n) continue;
            let i = v[n];
            for (let e in r) {
                w.add(e);
                let {
                    evaluation_id: t,
                    assignments: n
                } = r[e], a = {
                    evaluationId: null != t ? t : void 0,
                    assignments: {}
                };
                for (let [t, r, o, s, l] of(i[e] = a, n)) null != o || (o = 0), a.assignments[t] = {
                    hashedName: t,
                    variantId: r,
                    trackedVariantId: l,
                    isOverride: (o & c.fd.IsOverride) != 0,
                    revision: s,
                    exposureTrackingEnabled: (o & c.fd.ExposureTrackingEnabled) != 0
                }
            }
        }
        return !0
    }
    createOverride(e, t) {
        I = _(f({}, I), {
            [e]: {
                hashedName: j(e),
                variantId: t,
                isOverride: !0,
                exposureTrackingEnabled: !1
            }
        }), this.trackExposureSuppression(e, "client_override")
    }
    deleteOverride(e) {
        let {
            [e]: t
        } = I;
        I = h(I, [E(e)])
    }
    createSessionOverride(e, t) {
        S = _(f({}, S), {
            [e]: {
                hashedName: j(e),
                variantId: t,
                isOverride: !0,
                exposureTrackingEnabled: !1
            }
        })
    }
    deleteSessionOverride(e) {
        let {
            [e]: t
        } = S;
        S = h(S, [E(e)])
    }
    setExperimentsMetadata(e) {
        C = f({}, C, Object.fromEntries(e.map(e => [e.name, e])))
    }
    getExperimentsMetadata() {
        return C
    }
    getClientOverrides() {
        return I
    }
    getSessionOverrides() {
        return S
    }
    getExperimentClientOverride(e) {
        return I[e]
    }
    getExperimentSessionOverride(e) {
        return S[e]
    }
    handleLogout(e) {
        e || (this.clearUserServerAssignments(), this.clearSessionOverrides()), l.w.remove(R), this.clearAllTrackedExposures()
    }
    registerExperiment(e) {
        A[e.name] = e, null != T[e.name] && this.trackExposureSuppression(e.name, "cookie_override")
    }
    getRegisteredExperiments() {
        return A
    }
    getAssignment(e, t, n) {
        let r = this.getOverride(n);
        return null != r ? r : this.getServerAssignment(e, t, n)
    }
    getServerAssignment(e, t, n) {
        let r = j(n),
            i = v[e][t];
        if (null != i) return i.assignments[r]
    }
    getEvaluation(e, t) {
        var n;
        return null == (n = v[e][t]) ? void 0 : n.evaluationId
    }
    getEvaluationAndAssignment(e, t, n) {
        let r = this.getOverride(n);
        if (null != r) return [void 0, r];
        let i = v[e][t];
        return null == i ? [void 0, void 0] : [i.evaluationId, i.assignments[j(n)]]
    }
    trackExperimentExposure(e, t, n, r, i, a, o) {
        let s = j("".concat(t, "|").concat(i, "|").concat(a, "|").concat(n));
        this.shouldTrackExposure(s) && ("user" === r ? this.track(u.sE.EXPERIMENT_USER_EVALUATION_EXPOSED, {
            evaluation_id: e,
            experiment: t,
            exposure_location: n,
            unit_type: r,
            tracked_variation_id: a
        }, {
            flush: !0
        }) : "installation" === r && this.track(u.sE.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, {
            evaluation_id: e,
            installation_id: o,
            experiment: t,
            exposure_location: n,
            unit_type: r,
            tracked_variation_id: a
        }, {
            flush: !0
        }), L[s] = Date.now(), this.saveTrackedExposures(L))
    }
    trackCommonTriggerPointExposures(e) {
        for (let t of ["user", "installation"])
            for (let {
                    evaluationId: n,
                    unitId: r
                }
                of this.evaluationsWithUnitIds(t)) {
                let i = j("".concat(n, "|").concat(e));
                this.shouldTrackExposure(i) && ("user" === t ? this.track(u.sE.EXPERIMENT_USER_EVALUATION_EXPOSED, {
                    evaluation_id: n,
                    exposure_location: e,
                    unit_type: t
                }, {
                    flush: !0
                }) : this.track(u.sE.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, {
                    evaluation_id: n,
                    exposure_location: e,
                    unit_type: t,
                    installation_id: r
                }, {
                    flush: !0
                }), L[i] = Date.now(), this.saveTrackedExposures(L))
            }
    }
    trackExposureSuppression(e, t) {
        let n = A[e];
        if (null != n) {
            if ("user" === n.kind) this.track(u.sE.EXPERIMENT_USER_EXPOSURE_SUPPRESSED, {
                experiment: e,
                unit_type: n.kind,
                suppression_source: t
            }, {
                flush: !0
            });
            else if ("installation" === n.kind) {
                let r = Object.keys(v.installation)[0];
                null != r && this.track(u.sE.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED, {
                    experiment: e,
                    unit_type: n.kind,
                    suppression_source: t,
                    installation_id: r
                }, {
                    flush: !0
                })
            }
        }
    }
    evaluationIds(e) {
        return Object.values(v[e]).map(e => e.evaluationId).filter(e => null != e)
    }
    evaluationsWithUnitIds(e) {
        return Object.entries(v[e]).filter(e => {
            let [t, n] = e;
            return null != n.evaluationId
        }).map(e => {
            let [t, n] = e;
            return {
                evaluationId: n.evaluationId,
                unitId: t
            }
        })
    }
    shouldTrackExposure(e) {
        let t = L[e];
        return null == t || Date.now() - t > D
    }
    loadTrackedExposures() {
        let e = l.w.get(R);
        if (null == e || e.version !== P) return {};
        let t = e.exposures,
            n = Date.now(),
            r = !1;
        for (let e in t) n - t[e] > D && (delete t[e], r = !0);
        return r && this.saveTrackedExposures(t), t
    }
    saveTrackedExposures(e) {
        try {
            l.w.set(R, {
                version: P,
                exposures: e
            })
        } catch (e) {
            b.error("Error saving tracked exposures", e), this.track(u.sE.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: this.surface,
                call: "ApexExperimentStore.saveTrackedExposures"
            }, {
                flush: !0
            })
        }
    }
    clearForTests() {
        this.clearAllServerAssignments(), this.clearAllOverrides(), this.clearAllTrackedExposures(), N.clear(), w.clear()
    }
    clearAllServerAssignments() {
        v = {
            user: {},
            guild: {},
            installation: {}
        }
    }
    clearUserServerAssignments() {
        v = {
            user: {},
            guild: {},
            installation: v.installation
        }
    }
    clearAllOverrides() {
        I = {}, S = {}, T = {}
    }
    clearSessionOverrides() {
        S = {}
    }
    clearAllTrackedExposures() {
        L = {}
    }
    getHash(e) {
        return j(e)
    }
    handleFetchStart(e) {
        N.add(e)
    }
    handleFetchSuccess(e, t) {
        N.delete(e), w.add(e), this.setExperimentAssignments(t)
    }
    handleFetchFailure(e) {
        N.delete(e), w.add(e)
    }
    isFetching(e) {
        return N.has(e)
    }
    hasLoaded(e) {
        return w.has(e)
    }
    getOverride(e) {
        var t, n;
        return null != (t = null != (n = S[e]) ? n : I[e]) ? t : T[e]
    }
    constructor(...e) {
        super(...e), d(this, "track", () => Promise.resolve()), d(this, "surface", "unset")
    }
}
d(k, "displayName", "ApexExperimentStore"), d(k, "persistKey", "ApexExperimentStore")