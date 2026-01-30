/** chunk id: 902811, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
}), n(667532);
var r = n(627968),
    i = n(64700),
    a = n(582754),
    o = n(397927),
    s = n(552122),
    l = n(676279),
    c = n(607470),
    u = n(652215),
    d = n(40180),
    f = n(770359),
    p = n(763827),
    _ = n(609069),
    h = n(460860),
    m = n(734607),
    g = n(724875),
    E = n(540085);

function y(e) {
    let {
        movDark: t = d,
        movLight: n = h,
        mp4Dark: i = f,
        mp4Light: a = m,
        pngDark: o = p,
        pngLight: s = g,
        webmDark: c = _,
        webmLight: y = E
    } = e, b = (0, l.Z5)(), O = [(0, r.jsx)("source", {
        src: i,
        type: "video/mp4"
    }, "mp4"), (0, r.jsx)("img", {
        alt: "",
        src: o
    }, "png")], v = [(0, r.jsx)("source", {
        src: a,
        type: "video/mp4"
    }, "mp4"), (0, r.jsx)("img", {
        alt: "",
        src: s
    }, "png")];
    return (b > 52 || -1 === b) && (O.unshift((0, r.jsx)("source", {
        src: c,
        type: "video/webm"
    }, "webm")), v.unshift((0, r.jsx)("source", {
        src: y,
        type: "video/webm"
    }, "webm"))), (0, l.TM)() && (O.unshift((0, r.jsx)("source", {
        src: t,
        type: "video/mp4"
    }, "hevc")), v.unshift((0, r.jsx)("source", {
        src: n,
        type: "video/mp4"
    }, "hevc"))), {
        [u.NJ8.DARK]: O,
        [u.NJ8.LIGHT]: v
    }
}
let b = s.A.getAppSpinnerSources(),
    O = null != b ? y(b) : null,
    v = y({}),
    A = e => {
        var t;
        let {
            loop: n = !0,
            autoPlay: s = !0,
            setRef: l,
            className: d,
            onReady: f
        } = e, {
            theme: p
        } = (0, o.wRf)(), {
            reducedMotion: _
        } = i.useContext(o.CZY), h = v;
        null != O && (h = O);
        let m = null != (t = h[(0, a.Mw)(p) ? u.NJ8.DARK : u.NJ8.LIGHT]) ? t : h[u.NJ8.DARK];
        return (0, r.jsx)(c.A, {
            ref: l,
            onLoadedData: f,
            className: d,
            loop: !_.enabled && n,
            autoPlay: !_.enabled && s,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: m
        }, p)
    }