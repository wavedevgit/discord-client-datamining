/** chunk id: 911180 params = (module,exports,require) **/
n.d(t, {
    A: () => h
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
    g = n(652215),
    A = n(985018),
    m = n(567458);

function h(e) {
    let {
        onChange: t,
        onClose: n,
        color: l,
        suggestedColors: h,
        disabled: p,
        label: x,
        colorPickerMiddle: E,
        colorPickerFooter: T,
        showEyeDropper: S
    } = e, C = s.useRef(null), I = (0, c.rdh)(d.A.colors.BACKGROUND_BASE_LOW).hex(), f = d.A.colors.BACKGROUND_MOD_MUTED.css, N = (0, _.sN)(l), b = (0, o.Hl)(l), v = b === I ? f : b, O = N ? d.A.unsafe_rawColors.WHITE.css : d.A.unsafe_rawColors.PRIMARY_530.css, j = (0, u.A)(E), R = (0, u.A)(T), [y, P] = s.useState((0, r.A)());
    return s.useEffect(() => {
        (j !== E || R !== T) && P((0, r.A)())
    }, [T, E, R, j]), (0, i.jsx)(c.YNO, {
        targetElementRef: C,
        positionKey: y,
        renderPopout: e => (0, i.jsx)(c.VNw, {
            ...e,
            value: l,
            onChange: t,
            suggestedColors: h,
            middle: E,
            footer: T,
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
                className: a()(m.oP, {
                    [m.r9]: p
                }),
                children: [(0, i.jsx)(c.DUT, {
                    ...n,
                    tabIndex: p ? -1 : 0,
                    onClick: p ? g.tEg : t,
                    style: {
                        backgroundColor: b,
                        borderColor: v
                    },
                    className: m.nf,
                    "aria-label": A.intl.string(A.t.Qp04hK),
                    focusProps: {
                        ringTarget: C
                    },
                    children: (0, i.jsx)(c.R2l, {
                        size: "custom",
                        className: m.BW,
                        width: 14,
                        height: 14,
                        color: O
                    })
                }), x]
            })
        }
    })
}