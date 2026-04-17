/** chunk id: 75280 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(825638),
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
    E = n(220959);
let p = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    _ = r.memo(function(e) {
        let {
            widgetId: t,
            tileWidth: n,
            tileHeight: l,
            layout: _,
            locked: S,
            activeStreams: x,
            streamParticipants: T,
            participantsVersion: C,
            pinned: N,
            padding: v
        } = e, y = T.map(e => ({
            participant: e,
            key: e.user.id,
            width: n,
            height: l,
            locked: S,
            widgetId: t,
            pinned: N
        })), M = (0, u.A)(n), b = (0, u.A)(S), R = _ === A.IV.VERTICAL, D = S || b !== S || M !== n, O = r.useMemo(() => {
            let e = 0,
                t = 0;
            return R ? y.map((t, n) => ({
                ...t,
                y: (e += t.height + (n > 0 ? v : 0)) - t.height,
                x: 0
            })) : y.map((e, n) => ({
                ...e,
                x: (t += e.width + (n > 0 ? v : 0)) - e.width,
                y: 0
            }))
        }, [y, v, R]), w = r.useMemo(() => 0 === O.length ? (0, f.uc)(m.Ub) : O.reduce((e, t) => e + t.height, 0) + (R ? v * (O.length - 1) : 0), [O, R, v]), j = r.useMemo(() => 0 === O.length ? m.Ub : O.reduce((e, t) => e + t.width, 0) + (R ? 0 : v * (O.length - 1)), [O, R, v]), k = (0, o.pnh)(O, {
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
                    height: r
                } = e;
                return {
                    x: t,
                    y: n,
                    width: i,
                    height: r,
                    opacity: 1
                }
            },
            update: e => {
                let {
                    x: t,
                    y: n,
                    width: i,
                    height: r
                } = e;
                return {
                    x: t,
                    y: n,
                    width: i,
                    height: r
                }
            },
            config: p,
            trail: 100 * !D
        }, D ? "animate-never" : "respect-motion-settings"), U = (0, h.Dk)(() => new Set(T.map(e => e.user.id)), [T, C]), L = (0, h.Dk)(() => new Set(T.filter(e => x.has((0, d._z)(e.stream))).map(e => e.user.id)), [T, x, C]);
        return r.useEffect(() => {
            0 !== U.size && (0, h.Y)(I.uss.GO_LIVE, {
                locked: c.default.isInstanceLocked(),
                shownUserIds: Array.from(U),
                liveUserIds: Array.from(L),
                contentInventoryIds: []
            })
        }, [U, L]), (0, i.jsx)("div", {
            className: s()({
                [E.UT]: !0,
                [E.Vd]: R,
                [E.xM]: !R
            }),
            style: R ? {
                height: w
            } : {
                width: j
            },
            children: k((e, t, r, s) => (0, i.jsx)(a.animated.div, {
                className: E.ux,
                style: Object.assign({}, e, {
                    width: n,
                    height: l,
                    zIndex: y.length - s
                }),
                children: (e => {
                    let {
                        participant: t,
                        width: n,
                        locked: r,
                        widgetId: l,
                        pinned: s
                    } = e;
                    return (0, i.jsx)("div", {
                        className: E.iA,
                        children: (0, i.jsx)(g.d, {
                            participant: t,
                            width: n,
                            locked: r,
                            widgetId: l,
                            pinned: s
                        }, t.user.id)
                    })
                })(t)
            }))
        })
    })