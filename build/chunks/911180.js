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
    m = n(385612),
    _ = n(652215),
    g = n(985018),
    A = n(149255);

function x(e) {
    let {
        onChange: t,
        onClose: n,
        color: l,
        suggestedColors: x,
        disabled: h,
        label: p,
        colorPickerMiddle: T,
        colorPickerFooter: f,
        showEyeDropper: S
    } = e, E = s.useRef(null), b = (0, c.rdh)(d.A.colors.BACKGROUND_BASE_LOW).hex(), C = d.A.colors.BACKGROUND_MOD_MUTED.css, v = (0, m.sN)(l), N = (0, o.Hl)(l), I = N === b ? C : N, j = v ? d.A.unsafe_rawColors.WHITE.css : d.A.unsafe_rawColors.PRIMARY_530.css, y = (0, u.A)(T), O = (0, u.A)(f), [R, L] = s.useState((0, r.A)());
    return s.useEffect(() => {
        (y !== T || O !== f) && L((0, r.A)())
    }, [f, T, O, y]), (0, i.jsx)(c.YNO, {
        targetElementRef: E,
        positionKey: R,
        renderPopout: e => (0, i.jsx)(c.VNw, {
            ...e,
            value: l,
            onChange: t,
            suggestedColors: x,
            middle: T,
            footer: f,
            showEyeDropper: S
        }),
        onRequestClose: n,
        children: e => {
            let {
                onClick: t,
                ...n
            } = e;
            return (0, i.jsxs)("div", {
                ref: E,
                className: a()(A.oP, {
                    [A.r9]: h
                }),
                children: [(0, i.jsx)(c.DUT, {
                    ...n,
                    tabIndex: h ? -1 : 0,
                    onClick: h ? _.tEg : t,
                    style: {
                        backgroundColor: N,
                        borderColor: I
                    },
                    className: A.nf,
                    "aria-label": g.intl.string(g.t.Qp04hK),
                    focusProps: {
                        ringTarget: E
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