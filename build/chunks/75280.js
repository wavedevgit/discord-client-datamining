/** chunk id: 75280 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(294426),
    o = n(397927),
    u = n(475743),
    d = n(652896),
    c = n(256415),
    h = n(810412),
    g = n(433560),
    m = n(324093),
    f = n(916494),
    A = n(897720),
    I = n(652215),
    E = n(456847);
let p = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    _ = l.memo(function(e) {
        let {
            widgetId: t,
            tileWidth: n,
            tileHeight: r,
            layout: _,
            locked: S,
            activeStreams: x,
            streamParticipants: T,
            participantsVersion: N,
            pinned: C,
            padding: v
        } = e, y = T.map(e => ({
            participant: e,
            key: e.user.id,
            width: n,
            height: r,
            locked: S,
            widgetId: t,
            pinned: C
        })), M = (0, u.A)(n), R = (0, u.A)(S), D = _ === A.IV.VERTICAL, b = S || R !== S || M !== n, O = l.useMemo(() => {
            let e = 0,
                t = 0;
            return D ? y.map((t, n) => ({
                ...t,
                y: (e += t.height + (n > 0 ? v : 0)) - t.height,
                x: 0
            })) : y.map((e, n) => ({
                ...e,
                x: (t += e.width + (n > 0 ? v : 0)) - e.width,
                y: 0
            }))
        }, [y, v, D]), w = l.useMemo(() => 0 === O.length ? (0, f.uc)(m.Ub) : O.reduce((e, t) => e + t.height, 0) + (D ? v * (O.length - 1) : 0), [O, D, v]), j = l.useMemo(() => 0 === O.length ? m.Ub : O.reduce((e, t) => e + t.width, 0) + (D ? 0 : v * (O.length - 1)), [O, D, v]), U = (0, o.pnh)(O, {
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
                    height: l
                } = e;
                return {
                    x: t,
                    y: n,
                    width: i,
                    height: l,
                    opacity: 1
                }
            },
            update: e => {
                let {
                    x: t,
                    y: n,
                    width: i,
                    height: l
                } = e;
                return {
                    x: t,
                    y: n,
                    width: i,
                    height: l
                }
            },
            config: p,
            trail: 100 * !b
        }, b ? "animate-never" : "respect-motion-settings"), L = (0, h.Dk)(() => new Set(T.map(e => e.user.id)), [T, N]), k = (0, h.Dk)(() => new Set(T.filter(e => x.has((0, d._z)(e.stream))).map(e => e.user.id)), [T, x, N]);
        return l.useEffect(() => {
            0 !== L.size && (0, h.Y)(I.uss.GO_LIVE, {
                locked: c.default.isInstanceLocked(),
                shownUserIds: Array.from(L),
                liveUserIds: Array.from(k),
                contentInventoryIds: []
            })
        }, [L, k]), (0, i.jsx)("div", {
            className: s()({
                [E.UT]: !0,
                [E.Vd]: D,
                [E.xM]: !D
            }),
            style: D ? {
                height: w
            } : {
                width: j
            },
            children: U((e, t, l, s) => (0, i.jsx)(a.animated.div, {
                className: E.ux,
                style: Object.assign({}, e, {
                    width: n,
                    height: r,
                    zIndex: y.length - s
                }),
                children: (e => {
                    let {
                        participant: t,
                        width: n,
                        locked: l,
                        widgetId: r,
                        pinned: s
                    } = e;
                    return (0, i.jsx)("div", {
                        className: E.iA,
                        children: (0, i.jsx)(g.d, {
                            participant: t,
                            width: n,
                            locked: l,
                            widgetId: r,
                            pinned: s
                        }, t.user.id)
                    })
                })(t)
            }))
        })
    })