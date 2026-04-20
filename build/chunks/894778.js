/** chunk id: 894778 params = (module,exports,require) **/
_.d(e, {
    A: () => N
});
var r = _(353640),
    n = _(499867),
    o = _(121894),
    l = _(506774),
    a = _(626584),
    c = _(954571),
    i = _(315290),
    u = _(652215);
let s = "UserFlowAnalyticsStore_current",
    p = "UserFlowAnalyticsStore";

function f(t) {
    if (t === i.do.UNKNOWN) return null;
    let e = l.w.get(`${p}-${t}`);
    if (null == e) return null;
    let {
        version: _,
        ...r
    } = e;
    return 1 !== _ ? null : r
}
new a.A("UserFlowAnalytics");
let d = (0, r.v)()((0, n.eh)((t, e) => ({
    flows: {},
    currentFlow: null,
    activeFlow: () => {
        let t = e().currentFlow ?? l.w.get(s);
        if (null == t) return null;
        let {
            [t]: _
        } = e().flows, r = _ ?? f(t);
        return r?.currentStep != null ? t : null
    }
})));

function w(t, e) {
    let {
        [t]: _, ...r
    } = d.getState().flows, n = _ ?? f(t);
    (n?.currentStep == null || n.currentStep !== e) && (0, o.r)(() => {
        d.setState({
            flows: {
                ...r,
                [t]: {
                    type: t,
                    lastStep: null,
                    lastTimestamp: null,
                    currentStep: e,
                    currentTimestamp: new Date,
                    skipped: !1
                }
            },
            currentFlow: t
        })
    })
}

function m(t, e) {
    let _ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = t;
    t === i.do.ANY && (r = d.getState().activeFlow() ?? i.do.UNKNOWN);
    let {
        [r]: n, ...l
    } = d.getState().flows, a = n ?? f(r);
    null == a || null == a.currentStep || a.currentStep !== e && (0, o.r)(() => {
        d.setState({
            flows: {
                ...l,
                [r]: {
                    ...a,
                    lastStep: a.currentStep,
                    lastTimestamp: a.currentTimestamp,
                    currentStep: e,
                    currentTimestamp: new Date,
                    ended: _
                }
            },
            currentFlow: r
        })
    })
}

function A() {
    return null != d.getState().activeFlow()
}
d.subscribe(t => null != t.currentFlow ? t.flows[t.currentFlow] : void 0, t => {
    if (null != t && (! function(t) {
            if (t.type === i.do.UNKNOWN) return;
            let e = `${p}-${t.type}`;
            t.ended ? (l.w.remove(e), l.w.remove(s)) : (l.w.set(`${p}-${t.type}`, {
                ...t,
                version: 1
            }), l.w.set(s, t.type))
        }(t), c.default.track(u.HAw.NUO_TRANSITION, {
            flow_type: t.type,
            from_step: t.lastStep,
            to_step: t.currentStep,
            seconds_on_from_step: "function" != typeof t.lastTimestamp?.getTime ? 0 : (t.currentTimestamp.getTime() - t.lastTimestamp.getTime()) / 1e3
        }, {
            flush: !0
        }), t.ended)) {
        let e = {
            ...d.getState().flows
        };
        delete e[t.type], (0, o.r)(() => {
            d.setState({
                flows: e,
                currentFlow: null
            })
        })
    }
});
let N = {
    flowStart: w,
    flowStepOrStart: function(t, e) {
        A() ? m(t, e) : w(t, e)
    },
    flowStep: m,
    hasActiveFlow: A
}