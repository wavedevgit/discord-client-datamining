/** chunk id: 927421, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(896048), n(638769), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(110259),
    a = n(311907),
    s = n(793574),
    o = n(688810),
    c = n(139286),
    u = n(594061),
    d = n(383501),
    h = n(661191),
    p = n(796774),
    f = n(209932),
    m = n(536432),
    g = n(933204),
    A = n(805143),
    b = n(375366),
    _ = n(69217),
    y = n(980504),
    v = n(342129);

function E(e) {
    let {
        guildId: t,
        channel: n,
        width: E,
        height: O,
        keepOpen: C,
        interactive: x = !0,
        analyticsSource: S,
        onClose: j
    } = e, I = function(e) {
        let [t, n] = (0, a.yK)([f.A], () => [f.A.getSounds(), f.A.getFavorites()]);
        return r.useMemo(() => {
            let l = [],
                r = [...e, y.mV],
                i = (e, r) => {
                    var i, a;
                    for (let s of null != (i = null == (a = t.get(e)) ? void 0 : a.sort((e, t) => h.default.compare(e.soundId, t.soundId))) ? i : []) {
                        let e = n.has(s.soundId);
                        (e && r || !e && !r) && s.available && l.push(s)
                    }
                };
            return r.forEach(e => i(e, !0)), r.forEach(e => i(e, !1)), l
        }, [t, n, e])
    }((0, A.Y)(n, !0)), T = (0, g.T)(), N = r.useRef(null), [P, w] = r.useState(void 0), R = (0, a.bG)([d.A], () => d.A.getMediaSessionId()), {
        analyticsLocations: D
    } = (0, o.Ay)(s.A.SOUNDBOARD_WHEEL), M = r.useCallback(e => {
        (0, m.Ak)(e, n.id, D), j()
    }, [D, n.id, j]);
    r.useEffect(() => {
        p.E7(), u.bW.loadIfNecessary()
    }, []), r.useEffect(() => {
        0 === I.length && 0 === T.length && j()
    }, [I.length, T, j]), r.useEffect(() => () => {
        let e = N.current;
        C || null == e || M(e)
    }, [C, M]), (0, c.A)({
        type: i.ImpressionTypes.POPOUT,
        name: i.ImpressionNames.SOUNDBOARD_POPOUT,
        properties: {
            source: S,
            guild_id: t,
            media_session_id: R
        }
    }, {
        disableTrack: !x
    });
    let L = r.useCallback(e => {
            N.current = e, w(null == e ? void 0 : e.soundId)
        }, []),
        k = r.useCallback(e => {
            if (null == e) return void L(null);
            let t = I[e];
            null != t && L(t)
        }, [L, I]),
        U = r.useCallback(e => {
            if (null == e) return;
            let t = I[e];
            null != t && M(t)
        }, [I, M]),
        G = r.useMemo(() => I.map(e => (0, l.jsx)(_.Ay, {
            interactive: x,
            className: v.a,
            sound: e,
            focused: P === e.soundId,
            channel: n
        }, e.soundId)), [P, n, x, I]);
    return 0 === I.length ? null : (0, l.jsx)(o.f5, {
        value: D,
        children: (0, l.jsx)(b.A, {
            wheelWidth: E,
            wheelHeight: O,
            itemWidth: 96,
            itemHeight: 52,
            showDeadZoneIndicator: !C,
            activeItem: P,
            onItemSelect: k,
            onItemAction: U,
            onClose: j,
            interactive: x,
            children: G
        })
    })
}