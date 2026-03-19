/** chunk id: 911180 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(835245),
    o = n(317097),
    d = n(827734),
    c = n(397927),
    u = n(919796),
    _ = n(385612),
    m = n(652215),
    g = n(985018),
    A = n(844923);

function x(e) {
    let {
        onChange: t,
        onClose: n,
        color: l,
        suggestedColors: x,
        disabled: h,
        label: p,
        colorPickerMiddle: T,
        colorPickerFooter: E,
        showEyeDropper: S
    } = e, C = s.useRef(null), f = (0, c.rdh)(d.A.colors.BACKGROUND_BASE_LOW).hex(), b = d.A.colors.BACKGROUND_MOD_MUTED.css, N = (0, _.sN)(l), I = (0, o.Hl)(l), v = I === f ? b : I, j = N ? d.A.unsafe_rawColors.WHITE.css : d.A.unsafe_rawColors.PRIMARY_530.css, y = (0, u.A)(T), R = (0, u.A)(E), [O, P] = s.useState((0, r.A)());
    return s.useEffect(() => {
        (y !== T || R !== E) && P((0, r.A)())
    }, [E, T, R, y]), (0, i.jsx)(c.YNO, {
        targetElementRef: C,
        positionKey: O,
        renderPopout: e => (0, i.jsx)(c.VNw, {
            ...e,
            value: l,
            onChange: t,
            suggestedColors: x,
            middle: T,
            footer: E,
            showEyeDropper: S
        }),
        onRequestClose: n,
        children: e => {
            let {
                onClick: t,
                ...n
            } = e;
            return (0, i.jsxs)("div", {
                ref: C,
                className: a()(A.oP, {
                    [A.r9]: h
                }),
                children: [(0, i.jsx)(c.DUT, {
                    ...n,
                    tabIndex: h ? -1 : 0,
                    onClick: h ? m.tEg : t,
                    style: {
                        backgroundColor: I,
                        borderColor: v
                    },
                    className: A.nf,
                    "aria-label": g.intl.string(g.t.Qp04hK),
                    focusProps: {
                        ringTarget: C
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