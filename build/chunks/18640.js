/** chunk id: 18640, original params: t,e,i (module,exports,require) **/
i.d(e, {
    X: () => S
}), i(65821), i(457529);
var n = i(627968),
    l = i(64700),
    s = i(397927),
    r = i(890138),
    u = i(954571),
    a = i(728458),
    o = i(156186),
    d = i(602450),
    T = i(557571),
    A = i(652215);
let S = () => {
    let {
        connectionStatus: t,
        setConnectionStatus: e,
        connect: i,
        disconnect: S
    } = (0, T.lV)(), c = [d.l7.CONNECTED, d.l7.INITIALIZING].includes(t), E = (0, l.useCallback)(() => c ? (e(d.l7.DISCONNECTED), (0, r.u)(A.HAw.NITRO_WARP_TOGGLED, {
        is_connecting: !1
    }), S()) : ((0, r.u)(A.HAw.NITRO_WARP_TOGGLED, {
        is_connecting: !0
    }), e(d.l7.INITIALIZING), i().then(t => {
        t || e(d.l7.DISCONNECTED)
    }).catch(t => {
        a.A.captureException(t, {
            tags: {
                source: o.q.PRIVATE_BROWSING_PERK_CONNECT
            }
        }), u.default.track(A.HAw.PREMIUM_FEATURE_ERROR, {
            error_message: t instanceof Error ? t.message : JSON.stringify(t),
            error_source: o.q.PRIVATE_BROWSING_PERK_CONNECT
        }), e(d.l7.DISCONNECTED)
    })), [c, S, i, e]);
    return (0, n.jsx)("div", {
        children: (0, n.jsx)(s.dOG, {
            onChange: E,
            checked: c
        })
    })
}