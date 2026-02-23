/** chunk id: 911180, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(835245),
    o = n(317097),
    c = n(827734),
    d = n(397927),
    u = n(919796),
    _ = n(385612),
    m = n(652215),
    A = n(985018),
    g = n(567458);

function h(e) {
    let {
        onChange: t,
        onClose: n,
        color: a,
        suggestedColors: h,
        disabled: x,
        label: p,
        colorPickerMiddle: E,
        colorPickerFooter: C,
        showEyeDropper: T
    } = e, S = s.useRef(null), I = (0, d.rdh)(c.A.colors.BACKGROUND_BASE_LOW).hex(), f = c.A.colors.BACKGROUND_MOD_MUTED.css, N = (0, _.sN)(a), b = (0, o.Hl)(a), j = b === I ? f : b, v = N ? c.A.unsafe_rawColors.WHITE.css : c.A.unsafe_rawColors.PRIMARY_530.css, O = (0, u.A)(E), R = (0, u.A)(C), [y, P] = s.useState((0, l.A)());
    return s.useEffect(() => {
        (O !== E || R !== C) && P((0, l.A)())
    }, [C, E, R, O]), (0, i.jsx)(d.YNO, {
        targetElementRef: S,
        positionKey: y,
        renderPopout: e => (0, i.jsx)(d.VNw, {
            ...e,
            value: a,
            onChange: t,
            suggestedColors: h,
            middle: E,
            footer: C,
            showEyeDropper: T
        }),
        onRequestClose: n,
        children: e => {
            let {
                onClick: t,
                ...n
            } = e;
            return (0, i.jsxs)("div", {
                ref: S,
                className: r()(g.oP, {
                    [g.r9]: x
                }),
                children: [(0, i.jsx)(d.DUT, {
                    ...n,
                    tabIndex: x ? -1 : 0,
                    onClick: x ? m.tEg : t,
                    style: {
                        backgroundColor: b,
                        borderColor: j
                    },
                    className: g.nf,
                    "aria-label": A.intl.string(A.t.Qp04hK),
                    focusProps: {
                        ringTarget: S
                    },
                    children: (0, i.jsx)(d.R2l, {
                        size: "custom",
                        className: g.BW,
                        width: 14,
                        height: 14,
                        color: v
                    })
                }), p]
            })
        }
    })
}