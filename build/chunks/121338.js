/** chunk id: 121338 params = (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => p,
    openInteractionModal: () => f
});
var r = n(627968),
    i = n(158954),
    a = n(397927),
    o = n(176634),
    l = n(207963),
    _ = n(750128),
    s = n(969508),
    c = n(520586),
    d = n(818348),
    u = n(985018),
    m = n(272073);

function p(e) {
    let {
        title: t,
        onClose: n,
        transitionState: p
    } = e, {
        components: f,
        applicationIconURL: h,
        applicationName: E,
        submissionState: I,
        error: T,
        validators: g,
        validationErrors: C,
        setValidationErrors: x,
        onSubmit: O
    } = (0, s.uD)(e, n);
    return (0, o.A)({
        onPasteFiles: d.tE,
        onPasteBackgroundText: d.tE
    }), (0, r.jsx)("form", {
        onSubmit: e => {
            e.preventDefault(), O()
        },
        children: (0, r.jsxs)(i.dWK, {
            transitionState: p,
            onClose: n,
            children: [(0, r.jsx)(i.rQ0, {
                leading: (0, r.jsx)(a.euF, {
                    src: h,
                    size: a._3J.SIZE_24,
                    "aria-label": E,
                    className: m.In
                }),
                title: t,
                titleTextVariant: "heading-xl/semibold"
            }), (0, r.jsxs)(i.cwr, {
                children: [null != T && "" !== T ? (0, r.jsx)(a.po8, {
                    messageType: a.YCn.ERROR,
                    className: m.$Q,
                    children: T
                }) : null, (0, r.jsx)(a.po8, {
                    messageType: a.YCn.WARNING,
                    className: m.$Q,
                    children: u.intl.format(u.t["dSTy/w"], {
                        applicationName: E
                    })
                }), (0, r.jsx)("div", {
                    className: m.dK,
                    children: (0, r.jsx)(l.f5, {
                        modal: e,
                        validators: g,
                        validationErrors: C,
                        setValidationErrors: x,
                        children: (0, c.fD)(f)
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
                    loading: I === _.Z.IN_FLIGHT,
                    onClick: O
                }],
                actionsFullWidth: !0
            })]
        })
    })
}

function f(e) {
    (0, a.qfG)(t => (0, r.jsx)(p, {
        ...t,
        ...e
    }), {
        stackNextByDefault: !0
    })
}