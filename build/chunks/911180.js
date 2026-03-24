/** chunk id: 911180 params = (module,exports,require) **/
n.d(t, {
    A: () => A
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
    x = n(567458);

function A(e) {
    let {
        onChange: t,
        onClose: n,
        color: l,
        suggestedColors: A,
        disabled: h,
        label: p,
        colorPickerMiddle: f,
        colorPickerFooter: T,
        showEyeDropper: E
    } = e, S = s.useRef(null), b = (0, c.rdh)(d.A.colors.BACKGROUND_BASE_LOW).hex(), C = d.A.colors.BACKGROUND_MOD_MUTED.css, N = (0, m.sN)(l), v = (0, o.Hl)(l), I = v === b ? C : v, j = N ? d.A.unsafe_rawColors.WHITE.css : d.A.unsafe_rawColors.PRIMARY_530.css, y = (0, u.A)(f), O = (0, u.A)(T), [R, L] = s.useState((0, r.A)());
    return s.useEffect(() => {
        (y !== f || O !== T) && L((0, r.A)())
    }, [T, f, O, y]), (0, i.jsx)(c.YNO, {
        targetElementRef: S,
        positionKey: R,
        renderPopout: e => (0, i.jsx)(c.VNw, {
            ...e,
            value: l,
            onChange: t,
            suggestedColors: A,
            middle: f,
            footer: T,
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
                className: a()(x.oP, {
                    [x.r9]: h
                }),
                children: [(0, i.jsx)(c.DUT, {
                    ...n,
                    tabIndex: h ? -1 : 0,
                    onClick: h ? g.tEg : t,
                    style: {
                        backgroundColor: v,
                        borderColor: I
                    },
                    className: x.nf,
                    "aria-label": _.intl.string(_.t.Qp04hK),
                    focusProps: {
                        ringTarget: S
                    },
                    children: (0, i.jsx)(c.R2l, {
                        size: "custom",
                        className: x.BW,
                        width: 14,
                        height: 14,
                        color: j
                    })
                }), p]
            })
        }
    })
}