/** Chunk was on 1113 **/
/** chunk id: 615658, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
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
    h = n(241080);
let p = () => {
    var e, t;
    let n = (0, i.bG)([a.A], () => a.A.getChannelId()),
        p = (0, i.bG)([u.A], () => null != n && u.A.isUserConnected(n)),
        g = (0, c.n)(e => e.genre),
        f = (0, c.n)(e => e.songIndex),
        m = (0, c.n)(e => e.playRadio),
        b = (0, c.n)(e => e.globalMute),
        A = (0, c.n)(e => e.playNextSong),
        y = (0, c.n)(e => e.volumes),
        O = l.useRef(null),
        _ = l.useRef(null),
        x = l.useRef(null),
        j = (0, h.A)(g, f),
        v = (0, i.bG)([u.A], () => u.A.assets);
    return (l.useEffect(() => {
        let e = O.current;
        if (null != e && (null == j ? void 0 : j.src) != null && (e.pause(), e.src = j.src, !b && m && p)) {
            var t;
            null == (t = e.play()) || t.catch(e => {
                o.A.captureException(e)
            })
        }
    }, [null == j ? void 0 : j.src, b, m, p]), l.useEffect(() => {
        var e, t;
        let n = _.current,
            r = x.current;
        null != n && (b || !p ? n.pause() : null == (e = n.play()) || e.catch(e => {
            o.A.captureException(e)
        })), null != r && (b || !p ? r.pause() : null == (t = r.play()) || t.catch(e => {
            o.A.captureException(e)
        }))
    }, [b, p]), p) ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.A, {
            ref: O,
            onEnded: A,
            volume: b ? 0 : y.radio,
            children: (0, r.jsx)("source", {
                src: null == j ? void 0 : j.src
            })
        }), (0, r.jsx)(s.A, {
            ref: _,
            volume: b ? 0 : y.environment,
            children: (0, r.jsx)("source", {
                src: null == v || null == (e = v.sounds) ? void 0 : e[d.qi.ENVIRONMENT]
            })
        }), (0, r.jsx)(s.A, {
            ref: x,
            volume: b ? 0 : y.campfire,
            children: (0, r.jsx)("source", {
                src: null == v || null == (t = v.sounds) ? void 0 : t[d.qi.CAMPFIRE]
            })
        })]
    }) : null
}