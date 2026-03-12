/** chunk id: 911180 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(835245),
    o = n(317097),
    d = n(827734),
    c = n(397927),
    u = n(919796),
    _ = n(385612),
    m = n(652215),
    g = n(985018),
    A = n(844923);

function h(e) {
    let {
        onChange: t,
        onClose: n,
        color: l,
        suggestedColors: h,
        disabled: x,
        label: p,
        colorPickerMiddle: T,
        colorPickerFooter: E,
        showEyeDropper: C
    } = e, S = s.useRef(null), f = (0, c.rdh)(d.A.colors.BACKGROUND_BASE_LOW).hex(), N = d.A.colors.BACKGROUND_MOD_MUTED.css, b = (0, _.sN)(l), I = (0, o.Hl)(l), v = I === f ? N : I, j = b ? d.A.unsafe_rawColors.WHITE.css : d.A.unsafe_rawColors.PRIMARY_530.css, O = (0, u.A)(T), y = (0, u.A)(E), [R, P] = s.useState((0, a.A)());
    return s.useEffect(() => {
        (O !== T || y !== E) && P((0, a.A)())
    }, [E, T, y, O]), (0, i.jsx)(c.YNO, {
        targetElementRef: S,
        positionKey: R,
        renderPopout: e => (0, i.jsx)(c.VNw, {
            ...e,
            value: l,
            onChange: t,
            suggestedColors: h,
            middle: T,
            footer: E,
            showEyeDropper: C
        }),
        onRequestClose: n,
        children: e => {
            let {
                onClick: t,
                ...n
            } = e;
            return (0, i.jsxs)("div", {
                ref: S,
                className: r()(A.oP, {
                    [A.r9]: x
                }),
                children: [(0, i.jsx)(c.DUT, {
                    ...n,
                    tabIndex: x ? -1 : 0,
                    onClick: x ? m.tEg : t,
                    style: {
                        backgroundColor: I,
                        borderColor: v
                    },
                    className: A.nf,
                    "aria-label": g.intl.string(g.t.Qp04hK),
                    focusProps: {
                        ringTarget: S
                    },
                    children: (0, i.jsx)(c.R2l, {
                        size: "custom",
                        className: A.BW,
                        width: 14,
                        height: 14,
                        color: j
                    })
                }), p]
            })
        }
    })
}