/** Chunk was on 1113 **/
/** chunk id: 156652, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f,
    x: () => p
});
var r, l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    c = n(235986),
    u = n(919706),
    d = n(985010);

function h(e) {
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
}
var p = ((r = {})[r.TOP = 0] = "TOP", r[r.BOTTOM = 1] = "BOTTOM", r);

function g(e) {
    let {
        disableGradients: t = !1,
        renderHeader: n,
        renderBottomLeft: r,
        renderBottomCenter: s,
        renderBottomRight: a,
        renderCenter: u
    } = e, h = i.useRef(null);
    return (0, l.jsx)(o.xpW, {
        containerRef: h,
        children: (0, l.jsxs)("div", {
            className: d._v,
            ref: h,
            children: [0 !== t && !0 !== t && (0, l.jsx)("div", {
                className: d.aw
            }), 1 !== t && !0 !== t && (0, l.jsx)("div", {
                className: d.YA
            }), (0, l.jsx)("div", {
                className: d.K1,
                children: null == n ? void 0 : n()
            }), null == u ? void 0 : u(), (0, l.jsxs)("div", {
                className: d.q6,
                children: [(0, l.jsx)(c.A, {
                    grow: 1,
                    align: c.A.Align.CENTER,
                    className: d.i$,
                    children: null == r ? void 0 : r()
                }), (0, l.jsx)(c.A, {
                    grow: 1,
                    justify: c.A.Justify.CENTER,
                    align: c.A.Align.CENTER,
                    children: null == s ? void 0 : s()
                }), (0, l.jsx)(c.A, {
                    grow: 1,
                    justify: c.A.Justify.END,
                    align: c.A.Align.CENTER,
                    className: d.i$,
                    children: null == a ? void 0 : a()
                })]
            })]
        })
    })
}

function f(e) {
    let {
        screenMessage: t,
        onDoubleClick: n,
        onActive: r,
        onForceIdle: i,
        idle: s,
        children: o,
        renderChatToasts: c,
        renderVoiceChannelEffects: p,
        style: f
    } = e, m = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["screenMessage", "onDoubleClick", "onActive", "onForceIdle", "idle", "children", "renderChatToasts", "renderVoiceChannelEffects", "style"]);
    return (0, l.jsxs)("div", {
        className: a()(d.zr, {
            [d.N7]: s
        }),
        style: f,
        onMouseMove: r,
        onMouseDown: r,
        onMouseLeave: i,
        onDoubleClick: n,
        children: [o, null != t ? (0, l.jsx)(u.A, h({
            size: "large"
        }, t)) : null, (0, l.jsx)(g, h({}, m)), null == c ? void 0 : c(), null == p ? void 0 : p()]
    })
}