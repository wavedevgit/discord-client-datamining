/** Chunk was on 48654 **/
/** chunk id: 321565, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => h
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(935462),
    s = n(397927),
    c = n(707685),
    u = n(775121),
    d = n(775602),
    p = n(203982),
    f = n(793367),
    O = n(454290),
    m = n(369254),
    b = n(847816),
    y = n(652215),
    g = n(985018),
    _ = n(285953);

function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || d.A.useReducedMotion ? e.set(t) : e.start(t)
}

function h(e) {
    let {
        onClose: t,
        items: n,
        startingIndex: l,
        enabledContentHarmTypeFlags: h,
        shouldHideMediaOptions: S = !1,
        transitionState: j
    } = e, A = function(e, t) {
        if (null == e) return {};
        var n, r, i, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
        }
        if (l = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    l = Object.getOwnPropertyNames(e);
                for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
    }(e, ["onClose", "items", "startingIndex", "enabledContentHarmTypeFlags", "shouldHideMediaOptions", "transitionState"]), [v, T] = i.useState(null != l ? l : 0), [w, C] = i.useState(!1), [D, P] = (0, s.zhh)(() => ({
        scale: d.A.useReducedMotion ? 1 : .9,
        x: 0,
        y: 0,
        config: {
            friction: 30,
            tension: 300
        }
    })), I = i.useRef(null);
    i.useEffect(() => {
        if (null != t) return p._.subscribe(y.jej.MEDIA_MODAL_CLOSE, t), () => {
            p._.unsubscribe(y.jej.MEDIA_MODAL_CLOSE, t)
        }
    }, [t]), i.useEffect(() => {
        var e, t;
        j === s.ip4.ENTERING && E(D.scale, 1), j === s.ip4.ENTERED && (u.A.disable(), u.A.enableTemp(c.w)), j === s.ip4.HIDDEN && (E(D.scale, .9), u.A.disable(), u.A.enableTemp(c.b)), j === s.ip4.EXITING && E(D.scale, .9);
        let n = () => {
                u.A.disable(), j === s.ip4.ENTERED ? u.A.enableTemp(c.w) : u.A.enableTemp(c.b)
            },
            r = () => {
                u.A.disableTemp()
            },
            i = null == (t = I.current) || null == (e = t.ownerDocument) ? void 0 : e.defaultView;
        return null == i || i.addEventListener("focus", n), null == i || i.addEventListener("blur", r), () => {
            null == i || i.removeEventListener("focus", n), null == i || i.removeEventListener("blur", r), u.A.disableTemp()
        }
    }, [j, D]);
    let R = i.useCallback(e => {
            T(e), (0, f.Yq)(f.NJ.SELECTED_ITEM_CHANGE)
        }, []),
        N = i.useMemo(() => ({
            scale: D.scale,
            x: D.x,
            y: D.y,
            setScale(e, t) {
                E(D.scale, e, null == t ? void 0 : t.immediate)
            },
            setOffset(e, t, n) {
                E(D.x, e, null == n ? void 0 : n.immediate), E(D.y, t, null == n ? void 0 : n.immediate)
            },
            zoomed: w,
            setZoomed(e) {
                C(e), E(D.scale, e ? 2.5 : 1), e || (E(D.x, 0), E(D.y, 0))
            }
        }), [w, D]);
    return (0, r.jsx)(s.NPJ, {
        theme: y.NJ8.MIDNIGHT,
        children: e => {
            var i, l;
            return (0, r.jsx)(s.EOs, (i = function(e) {
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
            }({
                "data-migration-pending": !0,
                hideShadow: !0,
                className: o()(_.O, e),
                transitionState: j
            }, A), l = l = {
                size: s.rIJ.DYNAMIC,
                animation: a.WM.SUBTLE,
                fullscreenOnMobile: !1,
                onClick: t,
                "aria-label": g.intl.string(g.t.AMTX3j),
                parentComponent: "MediaViewerModal",
                children: (0, r.jsxs)(O.f.Provider, {
                    value: N,
                    children: [(0, r.jsx)(b.A, {
                        item: n[v],
                        hideMediaOptions: S,
                        onClose: t
                    }), (0, r.jsx)("div", {
                        style: {
                            display: "none"
                        },
                        ref: I
                    }), (0, r.jsx)(m.Ay, {
                        items: n,
                        startIndex: v,
                        onIndexChange: R,
                        enabledContentHarmTypeFlags: h,
                        shouldHideMediaOptions: S
                    })]
                })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(l)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
            }), i))
        }
    })
}