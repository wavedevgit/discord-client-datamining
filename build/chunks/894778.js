/** chunk id: 894778 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(353640),
    l = n(499867),
    r = n(121894),
    s = n(506774),
    a = n(626584),
    o = n(954571),
    c = n(315290),
    _ = n(652215);
let u = "UserFlowAnalyticsStore_current",
    d = "UserFlowAnalyticsStore";

function I(e) {
    if (e === c.do.UNKNOWN) return null;
    let t = s.w.get(`${d}-${e}`);
    if (null == t) return null;
    let {
        version: n,
        ...i
    } = t;
    return 1 !== n ? null : i
}
new a.A("UserFlowAnalytics");
let p = (0, i.v)()((0, l.eh)((e, t) => ({
    flows: {},
    currentFlow: null,
    activeFlow: () => {
        let e = t().currentFlow ?? s.w.get(u);
        if (null == e) return null;
        let {
            [e]: n
        } = t().flows, i = n ?? I(e);
        return i?.currentStep != null ? e : null
    }
})));

function N(e, t) {
    let {
        [e]: n, ...i
    } = p.getState().flows, l = n ?? I(e);
    (l?.currentStep == null || l.currentStep !== t) && (0, r.r)(() => {
        p.setState({
            flows: {
                ...i,
                [e]: {
                    type: e,
                    lastStep: null,
                    lastTimestamp: null,
                    currentStep: t,
                    currentTimestamp: new Date,
                    skipped: !1
                }
            },
            currentFlow: e
        })
    })
}

function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e;
    e === c.do.ANY && (i = p.getState().activeFlow() ?? c.do.UNKNOWN);
    let {
        [i]: l, ...s
    } = p.getState().flows, a = l ?? I(i);
    null == a || null == a.currentStep || a.currentStep !== t && (0, r.r)(() => {
        p.setState({
            flows: {
                ...s,
                [i]: {
                    ...a,
                    lastStep: a.currentStep,
                    lastTimestamp: a.currentTimestamp,
                    currentStep: t,
                    currentTimestamp: new Date,
                    ended: n
                }
            },
            currentFlow: i
        })
    })
}

function m() {
    return null != p.getState().activeFlow()
}
p.subscribe(e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0, e => {
    if (null != e && (! function(e) {
            if (e.type === c.do.UNKNOWN) return;
            let t = `${d}-${e.type}`;
            e.ended ? (s.w.remove(t), s.w.remove(u)) : (s.w.set(`${d}-${e.type}`, {
                ...e,
                version: 1
            }), s.w.set(u, e.type))
        }(e), o.default.track(_.HAw.NUO_TRANSITION, {
            flow_type: e.type,
            from_step: e.lastStep,
            to_step: e.currentStep,
            seconds_on_from_step: "function" != typeof e.lastTimestamp?.getTime ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
        }, {
            flush: !0
        }), e.ended)) {
        let t = {
            ...p.getState().flows
        };
        delete t[e.type], (0, r.r)(() => {
            p.setState({
                flows: t,
                currentFlow: null
            })
        })
    }
});
let A = {
    flowStart: N,
    flowStepOrStart: function(e, t) {
        m() ? S(e, t) : N(e, t)
    },
    flowStep: S,
    hasActiveFlow: m
}