/** chunk id: 18640, original params: e,t,i (module,exports,require) **/
i.d(t, {
    X: () => A
}), i(65821), i(457529);
var n = i(627968),
    l = i(64700),
    s = i(397927),
    r = i(890138),
    a = i(954571),
    u = i(728458),
    o = i(156186),
    d = i(602450),
    T = i(557571),
    c = i(652215);
let A = () => {
    let {
        connectionStatus: e,
        setConnectionStatus: t,
        connect: i,
        disconnect: A
    } = (0, T.lV)(), S = [d.l7.CONNECTED, d.l7.INITIALIZING].includes(e), _ = (0, l.useCallback)(() => S ? (t(d.l7.DISCONNECTED), (0, r.u)(c.HAw.NITRO_WARP_TOGGLED, {
        is_connecting: !1
    }), A()) : ((0, r.u)(c.HAw.NITRO_WARP_TOGGLED, {
        is_connecting: !0
    }), t(d.l7.INITIALIZING), i().then(e => {
        e || t(d.l7.DISCONNECTED)
    }).catch(e => {
        u.A.captureException(e, {
            tags: {
                source: o.q.PRIVATE_BROWSING_PERK_CONNECT
            }
        }), a.default.track(c.HAw.PREMIUM_FEATURE_ERROR, {
            error_message: e instanceof Error ? e.message : JSON.stringify(e),
            error_source: o.q.PRIVATE_BROWSING_PERK_CONNECT
        }), t(d.l7.DISCONNECTED)
    })), [S, A, i, t]);
    return (0, n.jsx)("div", {
        children: (0, n.jsx)(s.dOG, {
            onChange: _,
            checked: S
        })
    })
}