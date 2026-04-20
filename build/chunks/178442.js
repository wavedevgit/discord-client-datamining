/** chunk id: 178442 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(990078),
    o = n(397927),
    c = n(793574),
    d = n(384059),
    u = n(917592),
    h = n(241847),
    m = n(167155),
    A = n(652215),
    g = n(648881);
let _ = {
        [A.vkP.CONNECTED]: g.nf,
        [A.vkP.CONNECTING]: g._6,
        [A.vkP.ERROR]: g.Il
    },
    p = {
        [A.bFR.FINE]: g.LP,
        [A.bFR.AVERAGE]: g.mq,
        [A.bFR.BAD]: g.yA,
        [A.bFR.UNKNOWN]: null
    },
    f = {
        [A.bFR.FINE]: o.QtE,
        [A.bFR.AVERAGE]: o.jHk,
        [A.bFR.BAD]: o.RIK,
        [A.bFR.UNKNOWN]: o.esW
    };

function E(e) {
    let {
        quality: t,
        largePing: n,
        ...l
    } = e, a = f[t];
    return (0, i.jsx)(a, {
        className: s()(g.hU, {
            [g.kV]: n
        }),
        ...l
    })
}

function C(e) {
    let {
        quality: t,
        lastPing: n,
        state: a,
        className: f,
        children: C,
        channelId: x,
        childrenAsSubtitle: S,
        connectionStatusTextVariant: I,
        hasVideo: T
    } = e, v = l.useRef(null), N = a === A.S7L.RTC_CONNECTED, y = l.useCallback(e => (0, i.jsx)(h.A, {
        ...e,
        channelId: x
    }), [x]), {
        connectionStatus: b,
        connectionStatusText: j
    } = u.A.getStatus(a, T);
    return (0, i.jsxs)("div", {
        className: g.pe,
        children: [(0, i.jsx)("div", {
            className: s()(g.yH, p[t], f),
            ref: v,
            children: (0, i.jsx)(o.YNO, {
                targetElementRef: v,
                renderPopout: y,
                position: "top",
                children: e => {
                    let {
                        onClick: l
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [N && (0, i.jsx)(r.m, {
                            text: t !== A.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                            children: (0, i.jsx)(o.DUT, {
                                className: g.xr,
                                onClick: e => {
                                    (0, d.X)(c.A.RTC_PANEL, d.O.CONNECTION_STATUS), l(e)
                                },
                                children: (0, i.jsx)(E, {
                                    quality: t,
                                    largePing: S
                                })
                            })
                        }), (0, i.jsxs)("div", {
                            className: g.ei,
                            children: [(0, i.jsx)(o.DUT, {
                                onClick: e => {
                                    (0, d.X)(c.A.RTC_PANEL, d.O.CONNECTION_STATUS), l(e)
                                },
                                children: (0, i.jsx)(m.A, {
                                    text: j,
                                    textVariant: I,
                                    hasVideo: T,
                                    className: _[b],
                                    hasConnectedChannel: null != x
                                })
                            }), S ? C : null]
                        })]
                    })
                }
            })
        }), S ? null : C]
    })
}