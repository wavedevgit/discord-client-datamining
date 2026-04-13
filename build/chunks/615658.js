/** chunk id: 615658 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(118019),
    r = n(383501),
    o = n(728458),
    d = n(38050),
    c = n(998740),
    u = n(572808),
    h = n(241080);
let A = () => {
    let e = (0, s.bG)([r.A], () => r.A.getChannelId()),
        t = (0, s.bG)([c.A], () => null != e && c.A.isUserConnected(e)),
        n = (0, d.n)(e => e.genre),
        A = (0, d.n)(e => e.songIndex),
        _ = (0, d.n)(e => e.playRadio),
        m = (0, d.n)(e => e.globalMute),
        p = (0, d.n)(e => e.playNextSong),
        g = (0, d.n)(e => e.volumes),
        f = l.useRef(null),
        E = l.useRef(null),
        x = l.useRef(null),
        I = (0, h.A)(n, A),
        C = (0, s.bG)([c.A], () => c.A.assets);
    return (l.useEffect(() => {
        let e = f.current;
        null != e && I?.src != null && (e.pause(), e.src = I.src, !m && _ && t && e.play()?.catch(e => {
            o.A.captureException(e)
        }))
    }, [I?.src, m, _, t]), l.useEffect(() => {
        let e = E.current,
            n = x.current;
        null != e && (m || !t ? e.pause() : e.play()?.catch(e => {
            o.A.captureException(e)
        })), null != n && (m || !t ? n.pause() : n.play()?.catch(e => {
            o.A.captureException(e)
        }))
    }, [m, t]), t) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.A, {
            ref: f,
            onEnded: p,
            volume: m ? 0 : g.radio,
            children: (0, i.jsx)("source", {
                src: I?.src
            })
        }), (0, i.jsx)(a.A, {
            ref: E,
            volume: m ? 0 : g.environment,
            children: (0, i.jsx)("source", {
                src: C?.sounds?.[u.qi.ENVIRONMENT]
            })
        }), (0, i.jsx)(a.A, {
            ref: x,
            volume: m ? 0 : g.campfire,
            children: (0, i.jsx)("source", {
                src: C?.sounds?.[u.qi.CAMPFIRE]
            })
        })]
    }) : null
}