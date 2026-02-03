/** chunk id: 178442, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    c = n(793574),
    u = n(384059),
    d = n(917592),
    h = n(241847),
    p = n(167155),
    f = n(652215),
    m = n(56668);

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}
let A = {
        [f.vkP.CONNECTED]: m.nf,
        [f.vkP.CONNECTING]: m._6,
        [f.vkP.ERROR]: m.Il
    },
    b = {
        [f.bFR.FINE]: m.LP,
        [f.bFR.AVERAGE]: m.mq,
        [f.bFR.BAD]: m.yA,
        [f.bFR.UNKNOWN]: null
    },
    _ = {
        [f.bFR.FINE]: o.QtE,
        [f.bFR.AVERAGE]: o.jHk,
        [f.bFR.BAD]: o.RIK,
        [f.bFR.UNKNOWN]: o.esW
    };

function y(e) {
    let {
        quality: t,
        largePing: n
    } = e, r = function(e, t) {
        if (null == e) return {};
        var n, l, r, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, l, r = {},
                    i = Object.getOwnPropertyNames(e);
                for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }(e, t), Object.getOwnPropertySymbols)
            for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
        return i
    }(e, ["quality", "largePing"]), i = _[t];
    return (0, l.jsx)(i, g({
        className: a()(m.hU, {
            [m.kV]: n
        })
    }, r))
}

function v(e) {
    let {
        quality: t,
        lastPing: n,
        state: i,
        className: _,
        children: v,
        channelId: E,
        childrenAsSubtitle: O,
        connectionStatusTextVariant: C,
        hasVideo: S
    } = e, x = r.useRef(null), j = i === f.S7L.RTC_CONNECTED, I = r.useCallback(e => {
        var t, n;
        return (0, l.jsx)(h.A, (t = g({}, e), n = n = {
            channelId: E
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                n.push.apply(n, l)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
    }, [E]), {
        connectionStatus: T,
        connectionStatusText: N
    } = d.A.getStatus(i, S);
    return (0, l.jsxs)("div", {
        className: m.pe,
        children: [(0, l.jsx)("div", {
            className: a()(m.yH, b[t], _),
            ref: x,
            children: (0, l.jsx)(o.YNO, {
                targetElementRef: x,
                renderPopout: I,
                position: "top",
                children: e => {
                    let {
                        onClick: r
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [j && (0, l.jsx)(s.m, {
                            text: t !== f.bFR.UNKNOWN && null != n ? "".concat(n.toFixed(0), " ms") : null,
                            children: (0, l.jsx)(o.DUT, {
                                className: m.xr,
                                onClick: e => {
                                    (0, u.X)(c.A.RTC_PANEL, u.O.CONNECTION_STATUS), r(e)
                                },
                                children: (0, l.jsx)(y, {
                                    quality: t,
                                    largePing: O
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            className: m.ei,
                            children: [(0, l.jsx)(o.DUT, {
                                onClick: e => {
                                    (0, u.X)(c.A.RTC_PANEL, u.O.CONNECTION_STATUS), r(e)
                                },
                                children: (0, l.jsx)(p.A, {
                                    text: N,
                                    textVariant: C,
                                    hasVideo: S,
                                    className: A[T],
                                    hasConnectedChannel: null != E
                                })
                            }), O ? v : null]
                        })]
                    })
                }
            })
        }), O ? null : v]
    })
}