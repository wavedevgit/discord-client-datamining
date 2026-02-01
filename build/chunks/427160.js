/** chunk id: 427160, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(321073);
var l = n(64700),
    r = n(451988),
    i = n(827734),
    a = n(397927),
    s = n(654107),
    o = n(977997),
    c = n(318937),
    u = n(533117),
    d = n(134753),
    h = n(666717),
    p = n(921652),
    f = n(139831);
n(824217);
let m = 1e3 / 60;

function g(e, t, n, g) {
    let A = (0, a.rdh)(i.A.unsafe_rawColors.BRAND_500).hex(),
        b = (0, a.rdh)(i.A.unsafe_rawColors.BLACK).hex(),
        _ = (0, a.rdh)(i.A.unsafe_rawColors.WHITE).hex(),
        y = l.useRef({}),
        v = l.useRef(new r.IX),
        E = l.useCallback(t => {
            let n = u.A.getDrawables(t);
            (0, h.iV)(e),
            function(e) {
                let {
                    canvasRef: t,
                    drawables: n,
                    fallbackColor: l,
                    linesDrawnAt: r,
                    streamerId: i,
                    channelId: a,
                    outlineColorDark: s,
                    outlineColorLight: u
                } = e;
                if (0 === n.length) return;
                let h = t.current;
                if (null == h) return;
                let m = h.getContext("2d");
                if (null == m) return;
                let {
                    width: g,
                    height: A
                } = h.getBoundingClientRect(), b = [];
                n.forEach(e => {
                    null == o.A.getVoiceStateForChannel(a, e.userId) ? b.push(e) : function(e) {
                        let {
                            drawable: t,
                            context: n,
                            canvasWidth: l,
                            canvasHeight: r,
                            fallbackColor: i,
                            outlineColorDark: a,
                            outlineColorLight: s,
                            linesDrawnAt: o,
                            streamerId: c,
                            deadDrawables: u
                        } = e;
                        switch (t.type) {
                            case d.Z.LINE:
                                return (0, f.A)({
                                    line: t,
                                    context: n,
                                    canvasWidth: l,
                                    canvasHeight: r,
                                    fallbackColor: i,
                                    outlineColorDark: a,
                                    outlineColorLight: s,
                                    linesDrawnAt: o,
                                    deadDrawables: u
                                });
                            case d.Z.EMOJI_HOSE:
                                return (0, p.A)({
                                    emojiHose: t,
                                    context: n,
                                    canvasWidth: l,
                                    canvasHeight: r,
                                    fallbackColor: i,
                                    outlineColorDark: a,
                                    outlineColorLight: s,
                                    streamerId: c,
                                    deadDrawables: u
                                })
                        }
                    }({
                        drawable: e,
                        context: m,
                        canvasWidth: g,
                        canvasHeight: A,
                        fallbackColor: l,
                        outlineColorDark: s,
                        outlineColorLight: u,
                        linesDrawnAt: r,
                        deadDrawables: b,
                        streamerId: i
                    })
                }), b.length > 0 && (0, c.Nm)(b, i)
            }({
                canvasRef: e,
                drawables: n,
                fallbackColor: A,
                linesDrawnAt: y,
                streamerId: t,
                outlineColorDark: b,
                outlineColorLight: _,
                channelId: g
            })
        }, [e, g, A, b, _]);
    l.useEffect(() => {
        let t = new ResizeObserver(() => {
            let t = e.current;
            if (null == t) return;
            let {
                width: l,
                height: r
            } = t.getBoundingClientRect();
            t.width = l * window.devicePixelRatio, t.height = r * window.devicePixelRatio, E(n)
        });
        return null != e.current && t.observe(e.current), () => t.disconnect()
    }, [e, E, n]);
    let O = l.useCallback(() => {
        let t = u.A.getDrawables(n),
            l = p.m.getState().particles,
            r = t.length > 0 || Object.keys(l).length > 0;
        r && null == v.current._ref && (null == v.current._ref ? (E(n), v.current.start(m, () => E(n))) : r || null == v.current._ref || (v.current.stop(), (0, h.iV)(e)))
    }, [e, E, n]);
    l.useEffect(() => {
        let e = v.current;
        return u.A.addChangeListener(O), O(), (0, s.l0)(t.getAvatarURL(null, 80)), () => {
            u.A.removeChangeListener(O), e.stop()
        }
    })
}