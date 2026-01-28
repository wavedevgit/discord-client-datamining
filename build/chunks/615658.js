/** Chunk was on 78528 **/
/** chunk id: 615658, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(118019),
    a = n(383501),
    o = n(728458),
    c = n(38050),
    u = n(998740),
    d = n(572808),
    p = n(241080);
let h = () => {
    var e, t;
    let n = (0, i.bG)([a.A], () => a.A.getChannelId()),
        h = (0, i.bG)([u.A], () => null != n && u.A.isUserConnected(n)),
        f = (0, c.n)(e => e.genre),
        g = (0, c.n)(e => e.songIndex),
        m = (0, c.n)(e => e.playRadio),
        b = (0, c.n)(e => e.globalMute),
        A = (0, c.n)(e => e.playNextSong),
        y = (0, c.n)(e => e.volumes),
        _ = l.useRef(null),
        O = l.useRef(null),
        j = l.useRef(null),
        v = (0, p.A)(f, g),
        x = (0, i.bG)([u.A], () => u.A.assets);
    return (l.useEffect(() => {
        let e = _.current;
        if (null != e && (null == v ? void 0 : v.src) != null && (e.pause(), e.src = v.src, !b && m && h)) {
            var t;
            null == (t = e.play()) || t.catch(e => {
                o.A.captureException(e)
            })
        }
    }, [null == v ? void 0 : v.src, b, m, h]), l.useEffect(() => {
        var e, t;
        let n = O.current,
            r = j.current;
        null != n && (b || !h ? n.pause() : null == (e = n.play()) || e.catch(e => {
            o.A.captureException(e)
        })), null != r && (b || !h ? r.pause() : null == (t = r.play()) || t.catch(e => {
            o.A.captureException(e)
        }))
    }, [b, h]), h) ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.A, {
            ref: _,
            onEnded: A,
            volume: b ? 0 : y.radio,
            children: (0, r.jsx)("source", {
                src: null == v ? void 0 : v.src
            })
        }), (0, r.jsx)(s.A, {
            ref: O,
            volume: b ? 0 : y.environment,
            children: (0, r.jsx)("source", {
                src: null == x || null == (e = x.sounds) ? void 0 : e[d.qi.ENVIRONMENT]
            })
        }), (0, r.jsx)(s.A, {
            ref: j,
            volume: b ? 0 : y.campfire,
            children: (0, r.jsx)("source", {
                src: null == x || null == (t = x.sounds) ? void 0 : t[d.qi.CAMPFIRE]
            })
        })]
    }) : null
}