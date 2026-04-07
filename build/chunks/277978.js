/** chunk id: 277978 params = (module,exports,require) **/
a.d(t, {
    CustomThemesShareModalWrapper: () => m
});
var n = a(627968),
    r = a(64700),
    l = a(353640),
    s = a(478437),
    o = a(311907),
    i = a(141468),
    c = a(963852),
    u = a(544028),
    d = a(95701),
    _ = a(954571),
    h = a(467135),
    p = a(739031),
    f = a(457417),
    g = a(567951),
    C = a(285188),
    b = a(652215);
let m = e => {
    let {
        transitionState: t,
        onClose: a
    } = e, m = (0, r.useRef)((0, f.E3)()).current, {
        selectedDestinations: x,
        messageText: M,
        canSend: k,
        setSend: w,
        updateMessage: S,
        updateChannel: y
    } = (0, l.P)(m), [E, A] = r.useState(!1), {
        colors: j,
        chassisMixAmount: v,
        gradientAngle: D
    } = (0, h.ko)(), I = (0, o.bG)([u.A], () => u.A.theme), O = (0, r.useMemo)(() => ({
        colors: j.map(e => e.replace("#", "")),
        gradient_angle: D,
        base_mix: v,
        base_theme: (0, p.O)(I)
    }), [j, D, v, I]), R = r.useMemo(() => (0, d.createChannelRecord)({
        id: "1",
        type: s.r.DM
    }), []), T = r.useMemo(() => (0, i.rh)({
        ...(0, c.Ay)({
            channelId: R.id,
            content: ""
        })
    }), [R]);
    (0, r.useEffect)(() => {
        S(T), y(R), A(!0)
    }, [T, R, S, y]);
    let H = r.useCallback(async () => {
        if (!k()) return Promise.reject();
        await (0, C.N)(x, O, M), _.default.track(b.HAw.CUSTOM_THEME_SHARED, {
            num_destinations: x.length
        }), await a()
    }, [O, x, M, k, a]);
    return ((0, r.useEffect)(() => {
        w(H)
    }, [H, w]), E) ? (0, n.jsx)(f.KH.Provider, {
        value: m,
        children: (0, n.jsx)(g.y, {
            transitionState: t,
            onClose: a
        })
    }) : null
}