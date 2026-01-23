/** Chunk was on 47841 **/
/** chunk id: 728713, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => w
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(131346),
    o = n(744818),
    c = n(311907),
    d = n(990078),
    u = n(397927),
    g = n(442433),
    m = n(686956),
    p = n(964486),
    f = n(775602),
    b = n(63104),
    h = n(861197),
    x = n(967144),
    j = n(34457),
    _ = n(576705),
    O = n(792831),
    v = n(396816),
    y = n(359837),
    A = n(533448),
    E = n(316506),
    N = n(927573),
    S = n(652215),
    I = n(985018),
    T = n(971525);
let C = "DRAGGABLE_ROLE";

function P(e) {
    var t, i;
    let l, {
            guild: c,
            role: d,
            highestRole: m,
            selectedItem: p,
            onClick: f,
            currentPosition: h,
            onDragStart: _,
            onDragReset: O,
            onDragComplete: v,
            roleStyle: A
        } = e,
        E = (0, y.c)(c, m, d),
        N = (0, j.Oy)(d),
        I = null == E && !N,
        P = (null == (i = d.tags) ? void 0 : i.guild_connections) !== void 0,
        w = (0, x.X_)(c.id, d, d.colorStrings),
        [, R] = (0, a.i)({
            type: C,
            item: () => (_(d.id), {
                id: d.id,
                position: h
            }),
            canDrag: () => I,
            end: (e, t) => {
                let n = t.getDropResult();
                null == n ? O() : v(n.roleId)
            }
        }),
        [{
            dragSourcePosition: D
        }, G] = (0, o.H)({
            accept: C,
            canDrop: () => I,
            collect: e => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop() ? {
                    dragSourcePosition: t.position
                } : {
                    dragSourcePosition: null
                }
            },
            drop: () => ({
                roleId: d.id
            })
        }),
        L = null != (t = d.colorString) ? t : S.TpD;
    return l = P ? (0, r.jsx)(b.A, {
        size: 12,
        color: d.colorString,
        className: T.Ev
    }) : "dot" === A ? (0, r.jsx)(u.WYI, {
        color: L,
        colors: w,
        background: !1,
        tooltip: !1
    }) : (0, r.jsx)(u.RYH, {
        color: L,
        colors: w
    }), (0, r.jsxs)(u.VQ0.Item, {
        className: s()(T.nM, {
            [T.qo]: null !== D && h < D,
            [T.BP]: null !== D && h > D
        }),
        id: d.id,
        selectedItem: p,
        itemType: "side",
        onClick: f,
        onContextMenu: function(e) {
            (0, g.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.resolve().then(n.bind(n, 665013));
                return t => {
                    var n, i;
                    return (0, r.jsx)(e, (n = function(e) {
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
                    }({}, t), i = i = {
                        role: d,
                        guild: c
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(i)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                    }), n))
                }
            })
        },
        "aria-label": d.name,
        clickableRef: e => {
            var t;
            R(G(null != (t = null == e ? void 0 : e.ref) ? t : null))
        },
        children: [l, null != E ? (0, r.jsx)(y.A, {
            className: T.s2,
            tooltipText: E
        }) : null, (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: N ? "text-strong" : "interactive-text-active",
            lineClamp: 1,
            children: d.name
        })]
    })
}

function w(e) {
    let {
        guild: t,
        currentRoleId: n,
        setCurrentRoleId: l,
        setSelectedSection: a
    } = e, o = (0, c.bG)([v.A], () => v.A.roles), g = (0, c.bG)([_.A], () => _.A.getHighestRole(t)), b = (0, c.bG)([f.A], () => f.A.roleStyle), [x, j] = i.useState(o.length), {
        scrolledToTop: y,
        handleScroll: S
    } = (0, E.u)(), {
        handleDragStart: C,
        handleDragReset: w,
        handleDragComplete: R
    } = (0, A.A)(o), D = i.useRef(null), G = i.useCallback(e => {
        var t, n;
        let r = o.findIndex(t => t.id === e);
        null == (n = D.current) || null == (t = n.getScrollerNode()) || t.scrollTo({
            top: Math.max((r - 2) * 34, 0)
        })
    }, [o]);
    return (0, p.Ay)(() => {
        G(n)
    }), i.useEffect(() => {
        o.length > x && G(n), o.length !== x && j(o.length)
    }, [o.length, x, j, G, n]), (0, r.jsx)(h.Ay.Sidebar, {
        className: T.pz,
        children: (0, r.jsxs)("div", {
            className: T.kL,
            children: [(0, r.jsxs)("div", {
                className: s()(T.gn, {
                    [T.P6]: !y
                }),
                children: [(0, r.jsxs)(u.DUT, {
                    className: T.DD,
                    onClick: () => l(null),
                    children: [(0, r.jsx)(O.A, {
                        direction: O.A.Directions.LEFT
                    }), (0, r.jsx)(u.Text, {
                        className: T.Qw,
                        variant: "text-md/semibold",
                        color: "none",
                        children: I.intl.string(I.t["13/7kX"])
                    })]
                }), (0, r.jsx)(d.m, {
                    position: "top",
                    "aria-label": I.intl.string(I.t.AbxKtv),
                    __unsupportedReactNodeAsText: (0, r.jsx)(u.Text, {
                        className: T.YL,
                        variant: "text-sm/normal",
                        children: I.intl.string(I.t.AbxKtv)
                    }),
                    children: (0, r.jsx)(u.DUT, {
                        className: T.Cm,
                        onClick: () => {
                            m.A.createRole(t.id), a(N.T$.DISPLAY)
                        },
                        children: (0, r.jsx)(u.j96, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20
                        })
                    })
                })]
            }), (0, r.jsx)(u.T7Y, {
                className: T.p_,
                ref: D,
                onScroll: S,
                children: (0, r.jsx)(u.VQ0, {
                    selectedItem: n,
                    onItemSelect: e => l(e),
                    orientation: "vertical",
                    children: o.map((e, i) => (0, r.jsx)(P, {
                        guild: t,
                        role: e,
                        highestRole: g,
                        selectedItem: n,
                        onClick: () => l(e.id),
                        currentPosition: i,
                        onDragStart: C,
                        onDragReset: w,
                        onDragComplete: R,
                        roleStyle: b
                    }, e.id))
                })
            })]
        })
    })
}