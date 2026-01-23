/** Chunk was on 31748 **/
/** chunk id: 178442, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(990078),
    s = n(397927),
    c = n(793574),
    u = n(384059),
    d = n(917592),
    f = n(241847),
    p = n(167155),
    g = n(652215),
    m = n(56668);

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}
let h = {
        [g.vkP.CONNECTED]: m.nf,
        [g.vkP.CONNECTING]: m._6,
        [g.vkP.ERROR]: m.Il
    },
    y = {
        [g.bFR.FINE]: m.LP,
        [g.bFR.AVERAGE]: m.mq,
        [g.bFR.BAD]: m.yA,
        [g.bFR.UNKNOWN]: null
    },
    A = {
        [g.bFR.FINE]: s.QtE,
        [g.bFR.AVERAGE]: s.jHk,
        [g.bFR.BAD]: s.RIK,
        [g.bFR.UNKNOWN]: s.esW
    };

function b(e) {
    let {
        quality: t,
        largePing: n
    } = e, l = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["quality", "largePing"]), i = A[t];
    return (0, r.jsx)(i, _({
        className: a()(m.hU, {
            [m.kV]: n
        })
    }, l))
}

function E(e) {
    let {
        quality: t,
        lastPing: n,
        state: i,
        className: A,
        children: E,
        channelId: v,
        childrenAsSubtitle: O,
        connectionStatusTextVariant: x,
        hasVideo: S
    } = e, C = l.useRef(null), N = i === g.S7L.RTC_CONNECTED, I = l.useCallback(e => {
        var t, n;
        return (0, r.jsx)(f.A, (t = _({}, e), n = n = {
            channelId: v
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
    }, [v]), {
        connectionStatus: j,
        connectionStatusText: T
    } = d.A.getStatus(i, S);
    return (0, r.jsxs)("div", {
        className: m.pe,
        children: [(0, r.jsx)("div", {
            className: a()(m.yH, y[t], A),
            ref: C,
            children: (0, r.jsx)(s.YNO, {
                targetElementRef: C,
                renderPopout: I,
                position: "top",
                children: e => {
                    let {
                        onClick: l
                    } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [N && (0, r.jsx)(o.m, {
                            text: t !== g.bFR.UNKNOWN && null != n ? "".concat(n.toFixed(0), " ms") : null,
                            children: (0, r.jsx)(s.DUT, {
                                className: m.xr,
                                onClick: e => {
                                    (0, u.X)(c.A.RTC_PANEL, u.O.CONNECTION_STATUS), l(e)
                                },
                                children: (0, r.jsx)(b, {
                                    quality: t,
                                    largePing: O
                                })
                            })
                        }), (0, r.jsxs)("div", {
                            className: m.ei,
                            children: [(0, r.jsx)(s.DUT, {
                                onClick: e => {
                                    (0, u.X)(c.A.RTC_PANEL, u.O.CONNECTION_STATUS), l(e)
                                },
                                children: (0, r.jsx)(p.A, {
                                    text: T,
                                    textVariant: x,
                                    hasVideo: S,
                                    className: h[j],
                                    hasConnectedChannel: null != v
                                })
                            }), O ? E : null]
                        })]
                    })
                }
            })
        }), O ? null : E]
    })
}