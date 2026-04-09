/** chunk id: 18396 params = (module,exports,require) **/
a.d(t, {
    A: () => x
});
var n = a(627968),
    s = a(64700),
    l = a(508425),
    r = a(158954),
    i = a(397927),
    o = a(48736),
    c = a(954571),
    d = a(750656),
    u = a(652215),
    m = a(927961),
    _ = a(985018),
    p = a(533413),
    h = a(399778);

function x(e) {
    let {
        selectedColors: t,
        setSelectedColors: a,
        defaultColor: x,
        selectedEffectId: g,
        className: f
    } = e, C = g === l.z.GRADIENT, v = (0, s.useCallback)(e => {
        a([e]), c.default.track(u.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
            default: e === x,
            colors: [e]
        })
    }, [a, x]), N = (0, s.useCallback)(e => {
        a(e), c.default.track(u.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
            default: !1,
            colors: e
        })
    }, [a]);
    return (0, n.jsxs)("div", {
        className: f,
        children: [(0, n.jsxs)(r.DZT, {
            variant: "heading-md/semibold",
            className: h.s,
            children: [_.intl.string(m.default.JOpi7z), (0, n.jsx)(i.tvc, {
                size: "xs",
                color: i.LU0.colors.TEXT_DEFAULT
            })]
        }), (0, n.jsx)(o.default, {
            className: p.Ei,
            colorContainerClassName: p.rx,
            defaultColor: x,
            colors: C ? d.Wf : d.Jl,
            value: t[0],
            secondaryValue: t[1] ?? void 0,
            onChange: v,
            onChangeGradientColors: N,
            isGradient: C,
            gradientButtonClassName: p.xr,
            gradientDegrees: 90,
            allowBlackCustomColor: !0,
            customPickerPosition: "top"
        })]
    })
}