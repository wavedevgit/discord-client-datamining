/** chunk id: 48736 params = (module,exports,require) **/
n.r(e), n.d(e, {
    default: () => m
});
var s = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    a = n(317097),
    c = n(990078),
    o = n(397927),
    d = n(652215),
    u = n(985018),
    b = n(967919),
    x = n(327261);
let g = t => {
        let {
            position: e,
            color: n,
            disabled: l,
            ...r
        } = t, c = (0, a.OK)(n ?? d.TGz) > .1;
        return (0, s.jsx)("div", {
            ...r,
            className: i()("left" === e ? x.Zv : x.Un, c ? x.xA : x.fQ, {
                [x.r9]: l
            }),
            children: (0, s.jsx)("div", {
                className: x.Ol,
                style: {
                    background: (0, a.Hl)(n)
                },
                children: (0, s.jsx)(o.dDg, {
                    size: "custom",
                    colorClass: c ? x.wW : x.yD,
                    width: 14,
                    height: 14
                })
            })
        })
    },
    f = t => {
        let {
            isStart: e,
            buttonRef: n,
            color: l,
            showPopout: r,
            position: i,
            onRequestClose: a,
            onShowPopout: d,
            onColorChange: f,
            disabled: m
        } = t;
        return (0, s.jsx)(o.vN3, {
            children: (0, s.jsx)(o.YNO, {
                targetElementRef: n,
                renderPopout: () => (0, s.jsx)(o.VNw, {
                    onChange: t => f(t, e),
                    value: l
                }),
                position: i,
                shouldShow: r,
                onRequestClose: a,
                children: t => (0, s.jsx)("div", {
                    ref: n,
                    children: (0, s.jsx)(o.DUT, {
                        ...t,
                        className: x.tj,
                        onClick: d,
                        "data-position": e ? "left" : "right",
                        "aria-label": u.intl.string(e ? b.default.apbXbH : b.default.JaVq1b),
                        children: (0, s.jsx)(c.m, {
                            text: u.intl.string(e ? b.default.apbXbH : b.default.JaVq1b),
                            position: "bottom",
                            children: (0, s.jsx)(g, {
                                position: e ? "left" : "right",
                                color: l ?? 0,
                                disabled: m
                            })
                        })
                    })
                })
            })
        })
    };

function m(t) {
    let {
        defaultColor: e,
        colors: n,
        value: r,
        onChange: b,
        disabled: m = !1,
        customPickerPosition: h = "bottom",
        secondaryValue: j,
        onChangeGradientColors: p,
        isGradient: S = !1,
        gradientButtonClassName: C,
        allowBlackCustomColor: k = !1
    } = t, N = l.useCallback(t => (0 !== t || k) && t !== e && !n.some(e => e === t) && (k || 0 !== t), [n, e, k]), O = l.useRef(null), A = l.useRef(null), v = l.useRef(null), [E, T] = l.useState(() => N(r) ? r : null), [R, I] = l.useState({
        start: r,
        end: j ?? d.TGz
    }), [D, w] = l.useState({
        showStart: !1,
        showEnd: !1
    });
    l.useEffect(() => {
        T(N(r) ? r : null), I({
            start: r,
            end: j ?? d.TGz
        })
    }, [r, N, j]);
    let G = l.useCallback(t => {
            b?.(t), T(null)
        }, [b, T]),
        P = l.useCallback(t => {
            b?.(t), T(t)
        }, [b, T]),
        _ = l.useCallback((t, e) => {
            I({
                start: t,
                end: e
            }), p?.([t, e])
        }, [p]),
        L = l.useCallback((t, e) => {
            w(n => ({
                ...n,
                [t]: e
            }))
        }, []),
        y = l.useCallback(() => {
            let t = {
                    background: `linear-gradient(90deg, ${(0,a.Hl)(R.start??d.TGz)} 0%, ${(0,a.Hl)(R.end)} 100%)`
                },
                e = (0, s.jsxs)("div", {
                    className: x.em,
                    children: [(0, s.jsx)("div", {
                        className: x.Ri,
                        style: t
                    }), (0, s.jsx)(g, {
                        position: "left",
                        color: R.start ?? d.TGz,
                        disabled: m
                    }), (0, s.jsx)(g, {
                        position: "right",
                        color: R.end ?? 0,
                        disabled: m
                    })]
                });
            return m ? e : (0, s.jsxs)("div", {
                className: i()(x.em, C),
                children: [(0, s.jsx)("div", {
                    className: x.Ri,
                    style: t
                }), (0, s.jsx)(f, {
                    isStart: !0,
                    buttonRef: A,
                    color: R.start ?? d.TGz,
                    showPopout: D.showStart,
                    position: h,
                    onRequestClose: () => L("showStart", !1),
                    onShowPopout: () => L("showStart", !0),
                    onColorChange: t => _(t, R.end),
                    disabled: m
                }), (0, s.jsx)(f, {
                    isStart: !1,
                    buttonRef: v,
                    color: R.end ?? 0,
                    showPopout: D.showEnd,
                    position: h,
                    onRequestClose: () => L("showEnd", !1),
                    onShowPopout: () => L("showEnd", !0),
                    onColorChange: t => _(R.start ?? d.TGz, t),
                    disabled: m
                })]
            })
        }, [h, m, R, D, _, L, C]),
        M = l.useCallback(() => (0, s.jsx)(o.VNw, {
            onChange: P,
            value: r
        }), [P, r]),
        U = l.useCallback(t => {
            let n = r !== e && (0 !== r || k),
                l = (0, s.jsx)(o.nJu, {
                    ...t,
                    customColor: t.customColor ?? (n ? r : null),
                    "aria-label": u.intl.string(u.t["FHBa/1"])
                });
            return m ? l : (0, s.jsx)(o.YNO, {
                targetElementRef: O,
                renderPopout: M,
                position: h,
                children: t => (0, s.jsx)(c.m, {
                    targetElementRef: O,
                    text: u.intl.string(u.t["FHBa/1"]),
                    position: "bottom",
                    children: (0, s.jsx)("div", {
                        ...t,
                        ref: O,
                        children: l
                    })
                })
            })
        }, [h, m, M, r, e, k]),
        B = l.useCallback(t => {
            let e = (0, s.jsx)(o.fyo, {
                ...t
            });
            return m ? e : (0, s.jsx)(c.m, {
                text: u.intl.string(u.t.bBvAEH),
                position: "bottom",
                children: (0, s.jsx)("div", {
                    children: e
                })
            })
        }, [m]);
    return (0, s.jsx)(o.skP, {
        ...t,
        renderDefaultButton: B,
        renderCustomButton: U,
        renderGradientCustomButton: y,
        isGradient: S,
        customColor: E,
        onChange: S ? _ : G
    })
}