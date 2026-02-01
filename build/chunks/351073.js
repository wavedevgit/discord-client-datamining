/** chunk id: 351073, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(417597),
    o = n(447404),
    c = n(287809),
    u = n(502633),
    d = n(909417),
    h = n(427160),
    p = n(304713);

function f(e) {
    let {
        focused: t,
        channelId: n,
        streamerId: i,
        stream: u
    } = e, f = r.useRef(null), m = (0, s.bG)([c.default], () => c.default.getCurrentUser());
    a()(null != m, "user cannot be null"), (0, h.A)(f, m, i, n);
    let {
        handleClick: g,
        handleMouseDown: A,
        handleMouseEnter: b,
        handleMouseMove: _,
        handleMouseUp: y
    } = (0, d.A)({
        user: m,
        channelId: n,
        streamerId: i,
        stream: u,
        focused: t,
        canvas: f.current
    });
    return (0, l.jsx)(o.A, {
        children: (0, l.jsx)("canvas", {
            ref: f,
            onClick: g,
            onMouseDown: A,
            onMouseEnter: b,
            onMouseMove: _,
            onMouseUp: y,
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
    return !t || e.hasScreenMessage ? null : (0, l.jsx)(f, function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
                var l;
                l = n[t], t in e ? Object.defineProperty(e, t, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = l
            })
        }
        return e
    }({}, e))
}