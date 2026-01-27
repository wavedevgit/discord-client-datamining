/** Chunk was on 52390 **/
/** chunk id: 42473, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(435371),
    s = n(614820),
    u = n(421380),
    c = n(397927),
    d = n(573435),
    p = n(310945);

function m(e) {
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

function f(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function _(e, t) {
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
}
let b = l.forwardRef(function(e, t) {
        let {
            children: n,
            onContextMenu: l,
            onClick: i,
            onMouseDown: o,
            disabled: s,
            icon: c,
            iconForeground: m,
            innerClassName: f,
            className: _,
            redGlow: b,
            onMouseEnter: g,
            onMouseLeave: y,
            "aria-label": x,
            "aria-checked": h,
            role: A,
            plated: v
        } = e, S = "function" == typeof c ? (0, r.jsx)(c, {
            width: 20,
            height: 20,
            size: "custom",
            colorClass: null != m ? m : "",
            color: "currentColor"
        }) : c;
        return (0, r.jsxs)(u.$n, {
            "data-migration-pending": !0,
            "aria-label": x,
            buttonRef: t,
            look: u.$n.Looks.BLANK,
            size: u.$n.Sizes.NONE,
            disabled: s,
            innerClassName: f,
            wrapperClassName: a()(p.x6, _),
            className: a()(p.x6, _, {
                [p.Xr]: b,
                [p.r9]: s,
                [p.Sn]: !s,
                [p.ZQ]: v,
                [p.OH]: b && v
            }),
            onClick: e => {
                null != i && i(e)
            },
            onMouseDown: o,
            onMouseEnter: g,
            onMouseLeave: y,
            onContextMenu: l,
            role: A,
            "aria-checked": h,
            focusProps: {
                offset: {
                    left: -1,
                    top: -1,
                    right: 1,
                    bottom: 1
                }
            },
            children: [null != n ? (0, r.jsx)(d.Ay, {
                width: 20,
                height: 20,
                mask: d.Ay.Masks.PANEL_BUTTON,
                children: S
            }) : S, n]
        })
    }),
    g = l.forwardRef(function(e, t) {
        if (null == e.tooltipType) {
            let {
                tooltipText: n,
                tooltipForceOpen: l,
                tooltipShouldShow: i,
                tooltipPositionKey: a,
                "aria-label": u
            } = e, c = _(e, ["tooltipText", "tooltipForceOpen", "tooltipShouldShow", "tooltipPositionKey", "aria-label"]), d = (0, s.O)(n);
            return (0, r.jsx)(o.m_, {
                text: n,
                forceOpen: l,
                shouldShow: i,
                positionKey: a,
                children: (0, r.jsx)(b, f(m({}, c), {
                    "aria-label": null != u ? u : d,
                    ref: t
                }))
            })
        } {
            let {
                tooltipText: n,
                tooltipForceOpen: l,
                tooltipShouldShow: i,
                tooltipPositionKey: a,
                onClick: o,
                onMouseEnter: s,
                onMouseLeave: u,
                onContextMenu: d,
                onFocus: g,
                onBlur: y,
                "aria-label": x
            } = e, h = _(e, ["tooltipText", "tooltipForceOpen", "tooltipShouldShow", "tooltipPositionKey", "onClick", "onMouseEnter", "onMouseLeave", "onContextMenu", "onFocus", "onBlur", "aria-label"]);
            return (0, r.jsx)(c.STz, {
                "data-migration-pending": !0,
                tooltipClassName: p.RF,
                tooltipContentClassName: p.In,
                "aria-label": x,
                forceOpen: l,
                shouldShow: i,
                color: c.oMw.GREEN,
                positionKeyStemOverride: a,
                text: n,
                children: e => {
                    let {
                        onClick: n,
                        onMouseEnter: l,
                        onMouseLeave: i,
                        onContextMenu: a,
                        onFocus: c,
                        onBlur: p,
                        "aria-label": _
                    } = e;
                    return (0, r.jsx)(b, f(m({
                        onClick: e => {
                            null == n || n(), null == o || o(e)
                        },
                        onMouseEnter: () => {
                            null == l || l(), null == s || s()
                        },
                        onMouseLeave: () => {
                            null == i || i(), null == u || u()
                        },
                        onContextMenu: e => {
                            null == a || a(), null == d || d(e)
                        },
                        onFocus: () => {
                            null == c || c(), null == g || g()
                        },
                        onBlur: () => {
                            null == p || p(), null == y || y()
                        },
                        "aria-label": _
                    }, h), {
                        ref: t
                    }))
                }
            })
        }
    })