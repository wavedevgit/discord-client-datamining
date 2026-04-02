/** chunk id: 48736 params = (module,exports,require) **/
o.r(t), o.d(t, {
    default: () => C
});
var s = o(627968),
    l = o(64700),
    r = o(503698),
    n = o.n(r),
    a = o(317097),
    i = o(990078),
    d = o(397927),
    u = o(652215),
    c = o(985018),
    h = o(136708),
    p = o(466340);
let b = e => {
        let {
            position: t,
            color: o,
            disabled: l,
            ...r
        } = e, i = (0, a.OK)(o ?? u.TGz) > .1;
        return (0, s.jsx)("div", {
            ...r,
            className: n()("left" === t ? p.Zv : p.Un, i ? p.xA : p.fQ, {
                [p.r9]: l
            }),
            children: (0, s.jsx)("div", {
                className: p.Ol,
                style: {
                    background: (0, a.Hl)(o)
                },
                children: (0, s.jsx)(d.dDg, {
                    size: "custom",
                    colorClass: i ? p.wW : p.yD,
                    width: 14,
                    height: 14
                })
            })
        })
    },
    x = e => {
        let {
            isStart: t,
            buttonRef: o,
            color: l,
            showPopout: r,
            position: n,
            onRequestClose: a,
            onShowPopout: u,
            onColorChange: x,
            disabled: C
        } = e;
        return (0, s.jsx)(d.vN3, {
            children: (0, s.jsx)(d.YNO, {
                targetElementRef: o,
                renderPopout: () => (0, s.jsx)(d.VNw, {
                    onChange: e => x(e, t),
                    value: l
                }),
                position: n,
                shouldShow: r,
                onRequestClose: a,
                children: e => (0, s.jsx)("div", {
                    ref: o,
                    children: (0, s.jsx)(d.DUT, {
                        ...e,
                        className: p.tj,
                        onClick: u,
                        "data-position": t ? "left" : "right",
                        "aria-label": c.intl.string(t ? h.default.apbXbH : h.default.JaVq1b),
                        children: (0, s.jsx)(i.m, {
                            text: c.intl.string(t ? h.default.apbXbH : h.default.JaVq1b),
                            position: "bottom",
                            children: (0, s.jsx)(b, {
                                position: t ? "left" : "right",
                                color: l ?? 0,
                                disabled: C
                            })
                        })
                    })
                })
            })
        })
    };

function C(e) {
    let {
        defaultColor: t,
        colors: o,
        value: r,
        onChange: h,
        disabled: C = !1,
        customPickerPosition: g = "bottom",
        secondaryValue: j,
        onChangeGradientColors: f,
        isGradient: m = !1,
        gradientButtonClassName: k,
        allowBlackCustomColor: _ = !1
    } = e, w = l.useCallback(e => (0 !== e || _) && e !== t && !o.some(t => t === e) && (_ || 0 !== e), [o, t, _]), R = l.useRef(null), v = l.useRef(null), S = l.useRef(null), [P, N] = l.useState(() => w(r) ? r : null), [D, E] = l.useState({
        start: r,
        end: j ?? u.TGz
    }), [G, z] = l.useState({
        showStart: !1,
        showEnd: !1
    });
    l.useEffect(() => {
        N(w(r) ? r : null), E({
            start: r,
            end: j ?? u.TGz
        })
    }, [r, w, j]);
    let H = l.useCallback(e => {
            h?.(e), N(null)
        }, [h, N]),
        T = l.useCallback(e => {
            h?.(e), N(e)
        }, [h, N]),
        B = l.useCallback((e, t) => {
            E({
                start: e,
                end: t
            }), f?.([e, t])
        }, [f]),
        y = l.useCallback((e, t) => {
            z(o => ({
                ...o,
                [e]: t
            }))
        }, []),
        q = l.useCallback(() => {
            let e = {
                    background: `linear-gradient(90deg, ${(0,a.Hl)(D.start??u.TGz)} 0%, ${(0,a.Hl)(D.end)} 100%)`
                },
                t = (0, s.jsxs)("div", {
                    className: p.em,
                    children: [(0, s.jsx)("div", {
                        className: p.Ri,
                        style: e
                    }), (0, s.jsx)(b, {
                        position: "left",
                        color: D.start ?? u.TGz,
                        disabled: C
                    }), (0, s.jsx)(b, {
                        position: "right",
                        color: D.end ?? 0,
                        disabled: C
                    })]
                });
            return C ? t : (0, s.jsxs)("div", {
                className: n()(p.em, k),
                children: [(0, s.jsx)("div", {
                    className: p.Ri,
                    style: e
                }), (0, s.jsx)(x, {
                    isStart: !0,
                    buttonRef: v,
                    color: D.start ?? u.TGz,
                    showPopout: G.showStart,
                    position: g,
                    onRequestClose: () => y("showStart", !1),
                    onShowPopout: () => y("showStart", !0),
                    onColorChange: e => B(e, D.end),
                    disabled: C
                }), (0, s.jsx)(x, {
                    isStart: !1,
                    buttonRef: S,
                    color: D.end ?? 0,
                    showPopout: G.showEnd,
                    position: g,
                    onRequestClose: () => y("showEnd", !1),
                    onShowPopout: () => y("showEnd", !0),
                    onColorChange: e => B(D.start ?? u.TGz, e),
                    disabled: C
                })]
            })
        }, [g, C, D, G, B, y, k]),
        O = l.useCallback(() => (0, s.jsx)(d.VNw, {
            onChange: T,
            value: r
        }), [T, r]),
        V = l.useCallback(e => {
            let o = r !== t && (0 !== r || _),
                l = (0, s.jsx)(d.nJu, {
                    ...e,
                    customColor: e.customColor ?? (o ? r : null),
                    "aria-label": c.intl.string(c.t["FHBa/1"])
                });
            return C ? l : (0, s.jsx)(d.YNO, {
                targetElementRef: R,
                renderPopout: O,
                position: g,
                children: e => (0, s.jsx)(i.m, {
                    targetElementRef: R,
                    text: c.intl.string(c.t["FHBa/1"]),
                    position: "bottom",
                    children: (0, s.jsx)("div", {
                        ...e,
                        ref: R,
                        children: l
                    })
                })
            })
        }, [g, C, O, r, t, _]),
        A = l.useCallback(e => {
            let t = (0, s.jsx)(d.fyo, {
                ...e
            });
            return C ? t : (0, s.jsx)(i.m, {
                text: c.intl.string(c.t.bBvAEH),
                position: "bottom",
                children: (0, s.jsx)("div", {
                    children: t
                })
            })
        }, [C]);
    return (0, s.jsx)(d.skP, {
        ...e,
        renderDefaultButton: A,
        renderCustomButton: V,
        renderGradientCustomButton: q,
        isGradient: m,
        customColor: P,
        onChange: m ? B : H
    })
}