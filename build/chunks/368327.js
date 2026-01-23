/** Chunk was on web.js **/
/** chunk id: 368327, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(299619),
    l = n(311907),
    c = n(775602),
    u = n(771273),
    d = n(182417),
    f = n(958315);

function p(e) {
    let {
        className: t,
        slide: n,
        videoEntrySrc: a,
        videoLoopSrc: p
    } = e, _ = i.useRef(null), h = i.useRef(null), m = (0, l.bG)([c.A], () => c.A.useReducedMotion), [g, E] = i.useState(m), y = i.useContext(u.GD), b = i.useContext(d.Aq), O = i.useCallback(() => {
        var e, t;
        E(!0), m || null == (t = h.current) || t.play(), null == (e = _.current) || e.pause()
    }, [m]), v = i.useCallback(e => {
        let t = (g ? h : _).current,
            r = e.detail.canvas,
            i = e.detail.context;
        if (null == t || t.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
        let a = t.getBoundingClientRect(),
            s = r.getBoundingClientRect(),
            o = r.width / s.width,
            l = r.height / s.height,
            c = (a.left - s.left) * o,
            u = (a.top - s.top) * l,
            d = a.width,
            f = a.height,
            p = 0;
        null == b || b((e, t) => (t === n && (p = Math.max(e.opacity.get(), 0)), null)), i.save(), i.globalCompositeOperation = "screen", i.globalAlpha = p, i.drawImage(t, c, u, d, f), i.restore()
    }, [g, n, b]);
    return i.useEffect(() => (y.addEventListener("frameEnd", v), () => y.removeEventListener("frameEnd", v)), [y, v]), (0, r.jsxs)("div", {
        className: s()(f.iE, t),
        children: [(0, r.jsx)(o.A, {
            ref: _,
            className: f.yt,
            style: {
                opacity: 0
            },
            autoPlay: !m,
            muted: !0,
            playsInline: !0,
            onEnded: O,
            children: (0, r.jsx)("source", {
                src: a,
                type: "video/webm"
            })
        }), (0, r.jsx)(o.A, {
            ref: h,
            className: f.YV,
            style: {
                opacity: 0
            },
            muted: !0,
            playsInline: !0,
            loop: !0,
            children: (0, r.jsx)("source", {
                src: p,
                type: "video/webm"
            })
        })]
    })
}