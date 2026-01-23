/** Chunk was on 83006 **/
/** chunk id: 277978, original params: e,t,r (module,exports,require) **/
r.d(t, {
    CustomThemesShareModalWrapper: () => _
}), r(896048), r(747238), r(812715);
var n = r(627968),
    a = r(64700),
    l = r(353640),
    o = r(478437),
    s = r(311907),
    i = r(141468),
    c = r(963852),
    u = r(544028),
    d = r(95701),
    f = r(954571),
    p = r(467135),
    b = r(739031),
    g = r(457417),
    h = r(567951),
    y = r(285188),
    O = r(652215);
let _ = e => {
    let {
        transitionState: t,
        onClose: r
    } = e, _ = (0, a.useRef)((0, g.E3)()).current, {
        selectedDestinations: m,
        messageText: j,
        canSend: w,
        setSend: C,
        updateMessage: v,
        updateChannel: P
    } = (0, l.P)(_), [S, x] = a.useState(!1), {
        colors: E,
        chassisMixAmount: k,
        gradientAngle: D
    } = (0, p.ko)(), M = (0, s.bG)([u.A], () => u.A.theme), A = (0, a.useMemo)(() => ({
        colors: E.map(e => e.replace("#", "")),
        gradient_angle: D,
        base_mix: k,
        base_theme: (0, b.O)(M)
    }), [E, D, k, M]), R = a.useMemo(() => (0, d.createChannelRecord)({
        id: "1",
        type: o.r.DM
    }), []), I = a.useMemo(() => (0, i.rh)(function(e) {
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
    }({}, (0, c.Ay)({
        channelId: R.id,
        content: ""
    }))), [R]);
    (0, a.useEffect)(() => {
        v(I), P(R), x(!0)
    }, [I, R, v, P]);
    let T = a.useCallback(async () => {
        if (!w()) return Promise.reject();
        await (0, y.N)(m, A, j), f.default.track(O.HAw.CUSTOM_THEME_SHARED, {
            num_destinations: m.length
        }), await r()
    }, [A, m, j, w, r]);
    return ((0, a.useEffect)(() => {
        C(T)
    }, [T, C]), S) ? (0, n.jsx)(g.KH.Provider, {
        value: _,
        children: (0, n.jsx)(h.y, {
            transitionState: t,
            onClose: r
        })
    }) : null
}