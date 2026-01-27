/** Chunk was on web.js **/
/** chunk id: 143770, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
}), n(896048), n(228524);
var r = n(64700),
    i = n(664895),
    a = n(961350),
    o = n(102609),
    s = n(49463),
    l = n(843186),
    c = n(688151);

function u(e, t) {
    return "guild" === e ? (0, o.Ut)(t) : (0, o.wh)(t)
}

function d(e, t, n) {
    return "guild" === e ? s.A.getGuildExperimentDescriptor(t, n.guildId) : s.A.getUserExperimentDescriptor(t)
}

function f(e, t, n, r) {
    var i, a;
    return (null == r ? void 0 : r.aaMode) ? e.defaultConfig : null != (i = null == (a = n.get(t)) ? void 0 : a.config) ? i : e.defaultConfig
}

function p(e) {
    (0, l.O)(e.id, e.label, e.commonTriggerPoint);
    let t = new Map;
    t.set(c.RE.NOT_ELIGIBLE, {
        description: "Not Eligible",
        config: e.defaultConfig
    }), t.set(c.RE.CONTROL, {
        description: "Control Bucket",
        config: e.defaultConfig
    }), e.treatments.forEach(e => {
        t.set(e.id, {
            description: "Treatment ".concat(e.id, ": ").concat(e.label),
            config: e.config
        })
    });
    let n = u(e.kind, {
        id: e.id,
        title: e.label,
        commonTriggerPoint: e.commonTriggerPoint,
        description: [...t.values()].map(e => e.description),
        buckets: [...t.keys()]
    });

    function p(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        (t.exposureType = n ? c.vf.AUTO_FALLBACK : c.vf.AUTO, t.excluded = !1, null == r) ? _(e, t): h(e, t, r)
    }

    function _(t) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                excluded: !1,
                exposureType: c.vf.MANUAL
            },
            i = d(e.kind, n.id, t);
        null != i && h(t, r, i)
    }

    function h(e, t, r) {
        if (null != r) {
            var i, s, l, u, d;
            let f = c.vf.MANUAL,
                p = !1;
            (0, o.LQ)(n.id, r, {
                location: null != (i = null == e ? void 0 : e.location) ? i : "unknown",
                analyticsLocations: null != (s = null == t ? void 0 : t.analyticsLocations) ? s : [],
                fingerprint: null != (l = null != (u = null == t ? void 0 : t.fingerprint) ? u : a.default.getFingerprint()) ? l : void 0,
                excluded: (null == t ? void 0 : t.excluded) || p,
                exposureType: null != (d = null == t ? void 0 : t.exposureType) ? d : f
            })
        }
    }

    function m(n, r) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = null != i.disable && i.disable,
            o = d(e.kind, e.id, n),
            l = null == o || a ? c.RE.NOT_ELIGIBLE : o.bucket,
            u = null == o ? -1 : o.revision;

        function p() {
            let i = d(e.kind, e.id, n),
                o = null == i || a ? c.RE.NOT_ELIGIBLE : i.bucket,
                s = null == i ? -1 : i.revision;
            (o !== l || u !== s) && (r(f(e, o, t, i), o, s), l = o, u = s)
        }
        return r(f(e, l, t, o), l, u), s.A.addReactChangeListener(p), () => {
            s.A.removeReactChangeListener(p)
        }
    }

    function g(t) {
        let n = d(e.kind, e.id, t);
        return !!(null == n ? void 0 : n.aaMode)
    }
    return {
        useExperiment: function(n) {
            var a, o, s;
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    autoTrackExposure: !0
                },
                u = null != (a = l.disable) && a,
                _ = !1 !== l.autoTrackExposure,
                h = d(e.kind, e.id, n),
                g = null == l.trackExposureOptions ? void 0 : (0, i.A)(null != (o = l.trackExposureOptions) ? o : {}),
                E = null != (s = null == h ? void 0 : h.triggerDebuggingEnabled) && s,
                [
                    [y, b, O], v
                ] = (0, r.useState)(() => {
                    let n = null == h || u ? c.RE.NOT_ELIGIBLE : h.bucket;
                    return [f(e, n, t, h), n, null == h ? -1 : h.revision]
                }),
                A = (0, i.A)(n);
            return (0, r.useEffect)(() => {
                !u && (_ || E) && null == e.commonTriggerPoint && p(A, g, !1 === _)
            }, [u, _, A, g, b, O, E]), (0, r.useEffect)(() => m(A, (e, t, n) => {
                v(r => r[0] === e && r[1] === t && r[2] === n ? r : [e, t, n])
            }, {
                disable: u
            }), [u, A]), y
        },
        subscribe: m,
        trackExposure: _,
        getCurrentConfig: function(n) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    autoTrackExposure: !0
                },
                i = d(e.kind, e.id, n);
            if (null == i || r.disable) return f(e, c.RE.NOT_ELIGIBLE, t, i);
            if ((!1 !== r.autoTrackExposure || i.triggerDebuggingEnabled) && null == e.commonTriggerPoint) {
                let e = !1 === r.autoTrackExposure;
                p(n, r.trackExposureOptions, e, i)
            }
            return f(e, i.bucket, t, i)
        },
        definition: e,
        isAAMode: g
    }
}