/** Chunk was on 15646 **/
/** chunk id: 277978, original params: e,t,r (module,exports,require) **/
r.d(t, {
    CustomThemesShareModalWrapper: () => m
}), r(896048), r(747238), r(812715);
var n = r(627968),
    l = r(64700),
    a = r(353640),
    o = r(478437),
    s = r(311907),
    i = r(141468),
    c = r(963852),
    u = r(544028),
    d = r(95701),
    f = r(954571),
    b = r(467135),
    p = r(739031),
    g = r(457417),
    _ = r(567951),
    y = r(285188),
    h = r(652215);
let m = e => {
    let {
        transitionState: t,
        onClose: r
    } = e, m = (0, l.useRef)((0, g.E3)()).current, {
        selectedDestinations: O,
        messageText: w,
        canSend: j,
        setSend: C,
        updateMessage: v,
        updateChannel: P
    } = (0, a.P)(m), [S, k] = l.useState(!1), {
        colors: E,
        chassisMixAmount: x,
        gradientAngle: A
    } = (0, b.ko)(), M = (0, s.bG)([u.A], () => u.A.theme), D = (0, l.useMemo)(() => ({
        colors: E.map(e => e.replace("#", "")),
        gradient_angle: A,
        base_mix: x,
        base_theme: (0, p.O)(M)
    }), [E, A, x, M]), I = l.useMemo(() => (0, d.createChannelRecord)({
        id: "1",
        type: o.r.DM
    }), []), R = l.useMemo(() => (0, i.rh)(function(e) {
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
        channelId: I.id,
        content: ""
    }))), [I]);
    (0, l.useEffect)(() => {
        v(R), P(I), k(!0)
    }, [R, I, v, P]);
    let T = l.useCallback(async () => {
        if (!j()) return Promise.reject();
        await (0, y.N)(O, D, w), f.default.track(h.HAw.CUSTOM_THEME_SHARED, {
            num_destinations: O.length
        }), await r()
    }, [D, O, w, j, r]);
    return ((0, l.useEffect)(() => {
        C(T)
    }, [T, C]), S) ? (0, n.jsx)(g.KH.Provider, {
        value: m,
        children: (0, n.jsx)(_.y, {
            transitionState: t,
            onClose: r
        })
    }) : null
}