/** chunk id: 121338 params = (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => m,
    openInteractionModal: () => f
});
var r = n(627968),
    i = n(158954),
    a = n(397927),
    o = n(176634),
    l = n(207963),
    _ = n(750128),
    c = n(969508),
    d = n(520586),
    s = n(818348),
    u = n(985018),
    p = n(216313);

function m(e) {
    let {
        title: t,
        onClose: n,
        transitionState: m
    } = e, {
        components: f,
        applicationIconURL: b,
        applicationName: I,
        submissionState: C,
        error: h,
        validators: T,
        validationErrors: g,
        setValidationErrors: E,
        onSubmit: v
    } = (0, c.uD)(e, n);
    return (0, o.A)({
        onPasteFiles: s.tE,
        onPasteBackgroundText: s.tE
    }), (0, r.jsx)("form", {
        onSubmit: e => {
            e.preventDefault(), v()
        },
        children: (0, r.jsxs)(i.dWK, {
            transitionState: m,
            onClose: n,
            children: [(0, r.jsx)(i.rQ0, {
                leading: (0, r.jsx)(a.euF, {
                    src: b,
                    size: a._3J.SIZE_24,
                    "aria-label": I,
                    className: p.In
                }),
                title: t,
                titleTextVariant: "heading-xl/semibold"
            }), (0, r.jsxs)(i.cwr, {
                children: [null != h && "" !== h ? (0, r.jsx)(a.po8, {
                    messageType: a.YCn.ERROR,
                    className: p.$Q,
                    children: h
                }) : null, (0, r.jsx)(a.po8, {
                    messageType: a.YCn.WARNING,
                    className: p.$Q,
                    children: u.intl.format(u.t["dSTy/w"], {
                        applicationName: I
                    })
                }), (0, r.jsx)("div", {
                    className: p.dK,
                    children: (0, r.jsx)(l.f5, {
                        modal: e,
                        validators: T,
                        validationErrors: g,
                        setValidationErrors: E,
                        children: (0, d.fD)(f)
                    })
                })]
            }), (0, r.jsx)(i.H7u, {
                actions: [{
                    variant: "secondary",
                    text: u.intl.string(u.t["ETE/oC"]),
                    onClick: n
                }, {
                    variant: "primary",
                    text: u.intl.string(u.t.geKm7t),
                    loading: C === _.Z.IN_FLIGHT,
                    onClick: v
                }],
                actionsFullWidth: !0
            })]
        })
    })
}

function f(e) {
    (0, a.qfG)(t => (0, r.jsx)(m, {
        ...t,
        ...e
    }), {
        stackNextByDefault: !0
    })
}