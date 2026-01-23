/** Chunk was on 31748 **/
/** chunk id: 351073, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    l = n(64700),
    i = n(284009),
    a = n.n(i),
    o = n(417597),
    s = n(447404),
    c = n(287809),
    u = n(502633),
    d = n(909417),
    f = n(427160),
    p = n(304713);

function g(e) {
    let {
        focused: t,
        channelId: n,
        streamerId: i,
        stream: u
    } = e, g = l.useRef(null), m = (0, o.bG)([c.default], () => c.default.getCurrentUser());
    a()(null != m, "user cannot be null"), (0, f.A)(g, m, i, n);
    let {
        handleClick: _,
        handleMouseDown: h,
        handleMouseEnter: y,
        handleMouseMove: A,
        handleMouseUp: b
    } = (0, d.A)({
        user: m,
        channelId: n,
        streamerId: i,
        stream: u,
        focused: t,
        canvas: g.current
    });
    return (0, r.jsx)(s.A, {
        children: (0, r.jsx)("canvas", {
            ref: g,
            onClick: _,
            onMouseDown: h,
            onMouseEnter: y,
            onMouseMove: A,
            onMouseUp: b,
            className: p.s
        })
    })
}

function m(e) {
    let {
        isSharedCanvasEnabled: t
    } = u.A.useExperiment({
        guildId: e.guildId,
        location: "d0de1c_1"
    }, {
        autoTrackExposure: !0
    });
    return !t || e.hasScreenMessage ? null : (0, r.jsx)(g, function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r
            })
        }
        return e
    }({}, e))
}