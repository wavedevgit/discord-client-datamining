/** chunk id: 75280, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(475539),
    o = n(397927),
    u = n(475743),
    d = n(652896),
    c = n(256415),
    h = n(810412),
    m = n(433560),
    g = n(324093),
    p = n(916494),
    A = n(897720),
    f = n(652215),
    x = n(578950);
let E = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    S = l.memo(function(e) {
        let {
            widgetId: t,
            tileWidth: n,
            tileHeight: r,
            layout: S,
            locked: v,
            activeStreams: C,
            streamParticipants: I,
            participantsVersion: T,
            pinned: _,
            padding: y
        } = e, j = I.map(e => ({
            participant: e,
            key: e.user.id,
            width: n,
            height: r,
            locked: v,
            widgetId: t,
            pinned: _
        })), b = (0, u.A)(n), w = (0, u.A)(v), O = S === A.IV.VERTICAL, N = v || w !== v || b !== n, M = l.useMemo(() => {
            let e = 0,
                t = 0;
            return O ? j.map((t, n) => ({
                ...t,
                y: (e += t.height + (n > 0 ? y : 0)) - t.height,
                x: 0
            })) : j.map((e, n) => ({
                ...e,
                x: (t += e.width + (n > 0 ? y : 0)) - e.width,
                y: 0
            }))
        }, [j, y, O]), R = l.useMemo(() => 0 === M.length ? (0, p.uc)(g.Ub) : M.reduce((e, t) => e + t.height, 0) + (O ? y * (M.length - 1) : 0), [M, O, y]), k = l.useMemo(() => 0 === M.length ? g.Ub : M.reduce((e, t) => e + t.width, 0) + (O ? 0 : y * (M.length - 1)), [M, O, y]), L = (0, o.pnh)(M, {
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
            config: E,
            trail: 100 * !N
        }, N ? "animate-never" : "respect-motion-settings"), D = (0, h.Dk)(() => new Set(I.map(e => e.user.id)), [I, T]), z = (0, h.Dk)(() => new Set(I.filter(e => C.has((0, d._z)(e.stream))).map(e => e.user.id)), [I, C, T]);
        return l.useEffect(() => {
            0 !== D.size && (0, h.Y)(f.uss.GO_LIVE, {
                locked: c.default.isInstanceLocked(),
                shownUserIds: Array.from(D),
                liveUserIds: Array.from(z),
                contentInventoryIds: []
            })
        }, [D, z]), (0, i.jsx)("div", {
            className: s()({
                [x.UT]: !0,
                [x.Vd]: O,
                [x.xM]: !O
            }),
            style: O ? {
                height: R
            } : {
                width: k
            },
            children: L((e, t, l, s) => (0, i.jsx)(a.animated.div, {
                className: x.ux,
                style: Object.assign({}, e, {
                    width: n,
                    height: r,
                    zIndex: j.length - s
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
                        className: x.iA,
                        children: (0, i.jsx)(m.d, {
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