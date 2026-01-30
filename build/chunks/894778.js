/** chunk id: 894778, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => w
});
var n = r(353640),
    o = r(499867),
    l = r(121894),
    c = r(506774),
    u = r(626584),
    i = r(954571),
    a = r(315290),
    p = r(652215);

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        })
    }
    return e
}

function s(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
        }
        return r
    })(Object(t)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e
}

function O(e, t) {
    if (null == e) return {};
    var r, n, o, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
    }
    if (l = function(e, t) {
            if (null == e) return {};
            var r, n, o = {},
                l = Object.getOwnPropertyNames(e);
            for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            return o
        }(e, t), Object.getOwnPropertySymbols)
        for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l
}

function b(e) {
    var t = function(e, t) {
        if ("object" !== y(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== y(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }(e, "string");
    return "symbol" === y(t) ? t : String(t)
}

function y(e) {
    return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let E = "UserFlowAnalyticsStore_current",
    _ = "UserFlowAnalyticsStore";

function g(e) {
    if (e === a.do.UNKNOWN) return null;
    let t = c.w.get("".concat(_, "-").concat(e));
    if (null == t) return null;
    let {
        version: r
    } = t, n = O(t, ["version"]);
    return 1 !== r ? null : n
}
new u.A("UserFlowAnalytics");
let d = (0, n.v)()((0, o.eh)((e, t) => ({
    flows: {},
    currentFlow: null,
    activeFlow: () => {
        var e;
        let r = null != (e = t().currentFlow) ? e : c.w.get(E);
        if (null == r) return null;
        let {
            [r]: n
        } = t().flows, o = null != n ? n : g(r);
        return (null == o ? void 0 : o.currentStep) != null ? r : null
    }
})));

function A(e, t) {
    let r = d.getState().flows,
        {
            [e]: n
        } = r,
        o = O(r, [b(e)]),
        c = null != n ? n : g(e);
    ((null == c ? void 0 : c.currentStep) == null || c.currentStep !== t) && (0, l.r)(() => {
        d.setState({
            flows: s(f({}, o), {
                [e]: {
                    type: e,
                    lastStep: null,
                    lastTimestamp: null,
                    currentStep: t,
                    currentTimestamp: new Date,
                    skipped: !1
                }
            }),
            currentFlow: e
        })
    })
}

function m(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = e;
    if (e === a.do.ANY) {
        var o;
        n = null != (o = d.getState().activeFlow()) ? o : a.do.UNKNOWN
    }
    let c = d.getState().flows,
        {
            [n]: u
        } = c,
        i = O(c, [b(n)]),
        p = null != u ? u : g(n);
    null == p || null == p.currentStep || p.currentStep !== t && (0, l.r)(() => {
        d.setState({
            flows: s(f({}, i), {
                [n]: s(f({}, p), {
                    lastStep: p.currentStep,
                    lastTimestamp: p.currentTimestamp,
                    currentStep: t,
                    currentTimestamp: new Date,
                    ended: r
                })
            }),
            currentFlow: n
        })
    })
}

function N() {
    return null != d.getState().activeFlow()
}
d.subscribe(e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0, e => {
    var t;
    if (null != e && (! function(e) {
            if (e.type === a.do.UNKNOWN) return;
            let t = "".concat(_, "-").concat(e.type);
            e.ended ? (c.w.remove(t), c.w.remove(E)) : (c.w.set("".concat(_, "-").concat(e.type), s(f({}, e), {
                version: 1
            })), c.w.set(E, e.type))
        }(e), i.default.track(p.HAw.NUO_TRANSITION, {
            flow_type: e.type,
            from_step: e.lastStep,
            to_step: e.currentStep,
            seconds_on_from_step: "function" != typeof(null == (t = e.lastTimestamp) ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
        }, {
            flush: !0
        }), e.ended)) {
        let t = f({}, d.getState().flows);
        delete t[e.type], (0, l.r)(() => {
            d.setState({
                flows: t,
                currentFlow: null
            })
        })
    }
});
let w = {
    flowStart: A,
    flowStepOrStart: function(e, t) {
        N() ? m(e, t) : A(e, t)
    },
    flowStep: m,
    hasActiveFlow: N
}