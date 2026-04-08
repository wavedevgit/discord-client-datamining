/** chunk id: 178442 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(397927),
    c = n(793574),
    d = n(384059),
    u = n(917592),
    h = n(241847),
    m = n(167155),
    A = n(652215),
    p = n(490178);
let g = {
        [A.vkP.CONNECTED]: p.nf,
        [A.vkP.CONNECTING]: p._6,
        [A.vkP.ERROR]: p.Il
    },
    f = {
        [A.bFR.FINE]: p.LP,
        [A.bFR.AVERAGE]: p.mq,
        [A.bFR.BAD]: p.yA,
        [A.bFR.UNKNOWN]: null
    },
    _ = {
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
    } = e, s = _[t];
    return (0, i.jsx)(s, {
        className: a()(p.hU, {
            [p.kV]: n
        }),
        ...l
    })
}

function x(e) {
    let {
        quality: t,
        lastPing: n,
        state: s,
        className: _,
        children: x,
        channelId: C,
        childrenAsSubtitle: S,
        connectionStatusTextVariant: T,
        hasVideo: N
    } = e, I = l.useRef(null), v = s === A.S7L.RTC_CONNECTED, y = l.useCallback(e => (0, i.jsx)(h.A, {
        ...e,
        channelId: C
    }), [C]), {
        connectionStatus: b,
        connectionStatusText: j
    } = u.A.getStatus(s, N);
    return (0, i.jsxs)("div", {
        className: p.pe,
        children: [(0, i.jsx)("div", {
            className: a()(p.yH, f[t], _),
            ref: I,
            children: (0, i.jsx)(o.YNO, {
                targetElementRef: I,
                renderPopout: y,
                position: "top",
                children: e => {
                    let {
                        onClick: l
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [v && (0, i.jsx)(r.m, {
                            text: t !== A.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                            children: (0, i.jsx)(o.DUT, {
                                className: p.xr,
                                onClick: e => {
                                    (0, d.X)(c.A.RTC_PANEL, d.O.CONNECTION_STATUS), l(e)
                                },
                                children: (0, i.jsx)(E, {
                                    quality: t,
                                    largePing: S
                                })
                            })
                        }), (0, i.jsxs)("div", {
                            className: p.ei,
                            children: [(0, i.jsx)(o.DUT, {
                                onClick: e => {
                                    (0, d.X)(c.A.RTC_PANEL, d.O.CONNECTION_STATUS), l(e)
                                },
                                children: (0, i.jsx)(m.A, {
                                    text: j,
                                    textVariant: T,
                                    hasVideo: N,
                                    className: g[b],
                                    hasConnectedChannel: null != C
                                })
                            }), S ? x : null]
                        })]
                    })
                }
            })
        }), S ? null : x]
    })
}