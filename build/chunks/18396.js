/** chunk id: 18396, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => p
});
var l = s(627968),
    a = s(64700),
    n = s(508425),
    i = s(158954),
    r = s(397927),
    o = s(48736),
    d = s(954571),
    c = s(750656),
    u = s(652215),
    m = s(927961),
    _ = s(985018),
    x = s(512134),
    h = s(880203);

function p(e) {
    let {
        selectedColors: t,
        setSelectedColors: s,
        defaultColor: p,
        selectedEffectId: g,
        className: f
    } = e, N = g === n.z.GRADIENT, C = (0, a.useCallback)(e => {
        s([e]), d.default.track(u.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
            default: e === p,
            colors: [e]
        })
    }, [s, p]), A = (0, a.useCallback)(e => {
        s(e), d.default.track(u.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
            default: !1,
            colors: e
        })
    }, [s]);
    return (0, l.jsxs)("div", {
        className: f,
        children: [(0, l.jsxs)(i.DZT, {
            variant: "heading-md/semibold",
            className: h.s,
            children: [_.intl.string(m.default.JOpi7z), (0, l.jsx)(r.tvc, {
                size: "xs",
                color: r.LU0.colors.TEXT_DEFAULT
            })]
        }), (0, l.jsx)(o.default, {
            className: x.Ei,
            colorContainerClassName: x.rx,
            defaultColor: p,
            colors: N ? c.Wf : c.Jl,
            value: t[0],
            secondaryValue: t[1] ?? void 0,
            onChange: C,
            onChangeGradientColors: A,
            isGradient: N,
            gradientButtonClassName: x.xr,
            gradientDegrees: 90,
            allowBlackCustomColor: !0,
            customPickerPosition: "top"
        })]
    })
}