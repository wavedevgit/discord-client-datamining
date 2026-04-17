/** chunk id: 894778 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var i = n(353640),
    s = n(499867),
    r = n(121894),
    l = n(506774),
    a = n(626584),
    o = n(954571),
    c = n(315290),
    d = n(652215);
let u = "UserFlowAnalyticsStore_current",
    _ = "UserFlowAnalyticsStore";

function h(e) {
    if (e === c.do.UNKNOWN) return null;
    let t = l.w.get(`${_}-${e}`);
    if (null == t) return null;
    let {
        version: n,
        ...i
    } = t;
    return 1 !== n ? null : i
}
new a.A("UserFlowAnalytics");
let g = (0, i.v)()((0, s.eh)((e, t) => ({
    flows: {},
    currentFlow: null,
    activeFlow: () => {
        let e = t().currentFlow ?? l.w.get(u);
        if (null == e) return null;
        let {
            [e]: n
        } = t().flows, i = n ?? h(e);
        return i?.currentStep != null ? e : null
    }
})));

function p(e, t) {
    let {
        [e]: n, ...i
    } = g.getState().flows, s = n ?? h(e);
    (s?.currentStep == null || s.currentStep !== t) && (0, r.r)(() => {
        g.setState({
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

function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e;
    e === c.do.ANY && (i = g.getState().activeFlow() ?? c.do.UNKNOWN);
    let {
        [i]: s, ...l
    } = g.getState().flows, a = s ?? h(i);
    null == a || null == a.currentStep || a.currentStep !== t && (0, r.r)(() => {
        g.setState({
            flows: {
                ...l,
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

function A() {
    return null != g.getState().activeFlow()
}
g.subscribe(e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0, e => {
    if (null != e && (! function(e) {
            if (e.type === c.do.UNKNOWN) return;
            let t = `${_}-${e.type}`;
            e.ended ? (l.w.remove(t), l.w.remove(u)) : (l.w.set(`${_}-${e.type}`, {
                ...e,
                version: 1
            }), l.w.set(u, e.type))
        }(e), o.default.track(d.HAw.NUO_TRANSITION, {
            flow_type: e.type,
            from_step: e.lastStep,
            to_step: e.currentStep,
            seconds_on_from_step: "function" != typeof e.lastTimestamp?.getTime ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
        }, {
            flush: !0
        }), e.ended)) {
        let t = {
            ...g.getState().flows
        };
        delete t[e.type], (0, r.r)(() => {
            g.setState({
                flows: t,
                currentFlow: null
            })
        })
    }
});
let f = {
    flowStart: p,
    flowStepOrStart: function(e, t) {
        A() ? m(e, t) : p(e, t)
    },
    flowStep: m,
    hasActiveFlow: A
}