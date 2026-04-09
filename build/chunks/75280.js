/** chunk id: 75280 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(687498),
    o = n(397927),
    d = n(475743),
    c = n(652896),
    u = n(256415),
    _ = n(810412),
    h = n(433560),
    m = n(324093),
    p = n(916494),
    g = n(897720),
    f = n(652215),
    A = n(456847);
let x = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    I = a.memo(function(e) {
        let {
            widgetId: t,
            tileWidth: n,
            tileHeight: r,
            layout: I,
            locked: E,
            activeStreams: b,
            streamParticipants: v,
            participantsVersion: C,
            pinned: S,
            padding: y
        } = e, T = v.map(e => ({
            participant: e,
            key: e.user.id,
            width: n,
            height: r,
            locked: E,
            widgetId: t,
            pinned: S
        })), N = (0, d.A)(n), w = (0, d.A)(E), L = I === g.IV.VERTICAL, O = E || w !== E || N !== n, j = a.useMemo(() => {
            let e = 0,
                t = 0;
            return L ? T.map((t, n) => ({
                ...t,
                y: (e += t.height + (n > 0 ? y : 0)) - t.height,
                x: 0
            })) : T.map((e, n) => ({
                ...e,
                x: (t += e.width + (n > 0 ? y : 0)) - e.width,
                y: 0
            }))
        }, [T, y, L]), P = a.useMemo(() => 0 === j.length ? (0, p.uc)(m.Ub) : j.reduce((e, t) => e + t.height, 0) + (L ? y * (j.length - 1) : 0), [j, L, y]), D = a.useMemo(() => 0 === j.length ? m.Ub : j.reduce((e, t) => e + t.width, 0) + (L ? 0 : y * (j.length - 1)), [j, L, y]), R = (0, o.pnh)(j, {
            key: e => e.key,
            from: {
                height: 0,
                opacity: 0
            },
            leave: {
                height: 0,
                opacity: 0
            },
            enter: e => {
                let {
                    x: t,
                    y: n,
                    width: i,
                    height: a
                } = e;
                return {
                    x: t,
                    y: n,
                    width: i,
                    height: a,
                    opacity: 1
                }
            },
            update: e => {
                let {
                    x: t,
                    y: n,
                    width: i,
                    height: a
                } = e;
                return {
                    x: t,
                    y: n,
                    width: i,
                    height: a
                }
            },
            config: x,
            trail: 100 * !O
        }, O ? "animate-never" : "respect-motion-settings"), k = (0, _.Dk)(() => new Set(v.map(e => e.user.id)), [v, C]), M = (0, _.Dk)(() => new Set(v.filter(e => b.has((0, c._z)(e.stream))).map(e => e.user.id)), [v, b, C]);
        return a.useEffect(() => {
            0 !== k.size && (0, _.Y)(f.uss.GO_LIVE, {
                locked: u.default.isInstanceLocked(),
                shownUserIds: Array.from(k),
                liveUserIds: Array.from(M),
                contentInventoryIds: []
            })
        }, [k, M]), (0, i.jsx)("div", {
            className: l()({
                [A.UT]: !0,
                [A.Vd]: L,
                [A.xM]: !L
            }),
            style: L ? {
                height: P
            } : {
                width: D
            },
            children: R((e, t, a, l) => (0, i.jsx)(s.animated.div, {
                className: A.ux,
                style: Object.assign({}, e, {
                    width: n,
                    height: r,
                    zIndex: T.length - l
                }),
                children: (e => {
                    let {
                        participant: t,
                        width: n,
                        locked: a,
                        widgetId: r,
                        pinned: l
                    } = e;
                    return (0, i.jsx)("div", {
                        className: A.iA,
                        children: (0, i.jsx)(h.d, {
                            participant: t,
                            width: n,
                            locked: a,
                            widgetId: r,
                            pinned: l
                        }, t.user.id)
                    })
                })(t)
            }))
        })
    })