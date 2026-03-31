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
    g = n(652215),
    _ = n(985018),
    A = n(119416);

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
        showEyeDropper: E
    } = e, S = s.useRef(null), b = (0, c.rdh)(d.A.colors.BACKGROUND_BASE_LOW).hex(), C = d.A.colors.BACKGROUND_MOD_MUTED.css, N = (0, m.sN)(l), v = (0, o.Hl)(l), I = v === b ? C : v, j = N ? d.A.unsafe_rawColors.WHITE.css : d.A.unsafe_rawColors.PRIMARY_530.css, y = (0, u.A)(T), O = (0, u.A)(f), [R, P] = s.useState((0, r.A)());
    return s.useEffect(() => {
        (y !== T || O !== f) && P((0, r.A)())
    }, [f, T, O, y]), (0, i.jsx)(c.YNO, {
        targetElementRef: S,
        positionKey: R,
        renderPopout: e => (0, i.jsx)(c.VNw, {
            ...e,
            value: l,
            onChange: t,
            suggestedColors: x,
            middle: T,
            footer: f,
            showEyeDropper: E
        }),
        onRequestClose: n,
        children: e => {
            let {
                onClick: t,
                ...n
            } = e;
            return (0, i.jsxs)("div", {
                ref: S,
                className: a()(A.oP, {
                    [A.r9]: h
                }),
                children: [(0, i.jsx)(c.DUT, {
                    ...n,
                    tabIndex: h ? -1 : 0,
                    onClick: h ? g.tEg : t,
                    style: {
                        backgroundColor: v,
                        borderColor: I
                    },
                    className: A.nf,
                    "aria-label": _.intl.string(_.t.Qp04hK),
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