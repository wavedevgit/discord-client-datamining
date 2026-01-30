/** chunk id: 927421, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(896048), n(638769), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(110259),
    a = n(311907),
    o = n(793574),
    s = n(688810),
    c = n(139286),
    u = n(594061),
    d = n(383501),
    f = n(661191),
    p = n(796774),
    g = n(209932),
    m = n(536432),
    _ = n(933204),
    h = n(805143),
    y = n(375366),
    A = n(69217),
    b = n(980504),
    E = n(342129);

function v(e) {
    let {
        guildId: t,
        channel: n,
        width: v,
        height: O,
        keepOpen: x,
        interactive: S = !0,
        analyticsSource: C,
        onClose: N
    } = e, I = function(e) {
        let [t, n] = (0, a.yK)([g.A], () => [g.A.getSounds(), g.A.getFavorites()]);
        return l.useMemo(() => {
            let r = [],
                l = [...e, b.mV],
                i = (e, l) => {
                    var i, a;
                    for (let o of null != (i = null == (a = t.get(e)) ? void 0 : a.sort((e, t) => f.default.compare(e.soundId, t.soundId))) ? i : []) {
                        let e = n.has(o.soundId);
                        (e && l || !e && !l) && o.available && r.push(o)
                    }
                };
            return l.forEach(e => i(e, !0)), l.forEach(e => i(e, !1)), r
        }, [t, n, e])
    }((0, h.Y)(n, !0)), j = (0, _.T)(), T = l.useRef(null), [w, P] = l.useState(void 0), R = (0, a.bG)([d.A], () => d.A.getMediaSessionId()), {
        analyticsLocations: D
    } = (0, s.Ay)(o.A.SOUNDBOARD_WHEEL), k = l.useCallback(e => {
        (0, m.Ak)(e, n.id, D), N()
    }, [D, n.id, N]);
    l.useEffect(() => {
        p.E7(), u.bW.loadIfNecessary()
    }, []), l.useEffect(() => {
        0 === I.length && 0 === j.length && N()
    }, [I.length, j, N]), l.useEffect(() => () => {
        let e = T.current;
        x || null == e || k(e)
    }, [x, k]), (0, c.A)({
        type: i.ImpressionTypes.POPOUT,
        name: i.ImpressionNames.SOUNDBOARD_POPOUT,
        properties: {
            source: C,
            guild_id: t,
            media_session_id: R
        }
    }, {
        disableTrack: !S
    });
    let L = l.useCallback(e => {
            T.current = e, P(null == e ? void 0 : e.soundId)
        }, []),
        M = l.useCallback(e => {
            if (null == e) return void L(null);
            let t = I[e];
            null != t && L(t)
        }, [L, I]),
        U = l.useCallback(e => {
            if (null == e) return;
            let t = I[e];
            null != t && k(t)
        }, [I, k]),
        V = l.useMemo(() => I.map(e => (0, r.jsx)(A.Ay, {
            interactive: S,
            className: E.a,
            sound: e,
            focused: w === e.soundId,
            channel: n
        }, e.soundId)), [w, n, S, I]);
    return 0 === I.length ? null : (0, r.jsx)(s.f5, {
        value: D,
        children: (0, r.jsx)(y.A, {
            wheelWidth: v,
            wheelHeight: O,
            itemWidth: 96,
            itemHeight: 52,
            showDeadZoneIndicator: !x,
            activeItem: w,
            onItemSelect: M,
            onItemAction: U,
            onClose: N,
            interactive: S,
            children: V
        })
    })
}