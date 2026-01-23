/** Chunk was on 15682 **/
/** chunk id: 18396, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => _
});
var n = l(627968),
    r = l(64700),
    s = l(508425),
    a = l(158954),
    o = l(397927),
    i = l(48736),
    c = l(954571),
    d = l(750656),
    u = l(652215),
    m = l(927961),
    p = l(985018),
    f = l(512134),
    g = l(880203);

function _(e) {
    var t;
    let {
        selectedColors: l,
        setSelectedColors: _,
        defaultColor: x,
        selectedEffectId: b,
        className: h
    } = e, j = b === s.z.GRADIENT, v = (0, r.useCallback)(e => {
        _([e]), c.default.track(u.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
            default: e === x,
            colors: [e]
        })
    }, [_, x]), N = (0, r.useCallback)(e => {
        _(e), c.default.track(u.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
            default: !1,
            colors: e
        })
    }, [_]);
    return (0, n.jsxs)("div", {
        className: h,
        children: [(0, n.jsxs)(a.DZT, {
            variant: "heading-md/semibold",
            className: g.s,
            children: [p.intl.string(m.default.JOpi7z), (0, n.jsx)(o.tvc, {
                size: "xs",
                color: o.LU0.colors.TEXT_DEFAULT
            })]
        }), (0, n.jsx)(i.default, {
            className: f.Ei,
            colorContainerClassName: f.rx,
            defaultColor: x,
            colors: j ? d.Wf : d.Jl,
            value: l[0],
            secondaryValue: null != (t = l[1]) ? t : void 0,
            onChange: v,
            onChangeGradientColors: N,
            isGradient: j,
            gradientButtonClassName: f.xr,
            gradientDegrees: 90,
            allowBlackCustomColor: !0,
            customPickerPosition: "top"
        })]
    })
}