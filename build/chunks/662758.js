/** chunk id: 662758 params = (module,exports,require) **/
n.d(t, {
    default: () => d
});
var s = n(627968),
    a = n(64700),
    l = n(732955),
    i = n(397927),
    o = n(985018),
    r = n(786055);

function E(e) {
    let {
        title: t,
        actionText: n,
        children: E,
        transitionState: d,
        onClose: u,
        handleSubmit: c,
        onError: R,
        skipErrorMsgAbortCode: h,
        onPasswordChange: I,
        variant: p = "primary"
    } = e, [_, f] = a.useState(""), [g, C] = a.useState(null), [A, m] = a.useState(!1), y = a.useCallback(async () => {
        await u()
    }, [u]), F = a.Children.count(E) > 0 ? (0, s.jsx)(i.ZpM, {
        type: i.ZpM.Types.WARNING,
        className: r.Nr,
        children: (0, s.jsx)(i.Text, {
            color: "currentColor",
            variant: "text-md/normal",
            children: E
        })
    }) : null;
    return (0, s.jsx)("form", {
        onSubmit: e => {
            e.preventDefault(), m(!0), c(_).then(e => u(e ?? void 0), e => {
                let t;
                null != e.body && (R?.(e.body), t = e.body, (null == h || t?.code !== h) && (e.body.password ? (C(e.body.password), m(!1)) : e.body.message && (C(e.body.message), m(!1))))
            }).finally(() => m(!1))
        },
        children: (0, s.jsxs)(l.aFV, {
            title: t,
            actions: [{
                text: o.intl.string(o.t["ETE/oC"]),
                onClick: y,
                variant: "secondary"
            }, {
                text: n ?? o.intl.string(o.t["cY+Oob"]),
                type: "submit",
                variant: p,
                disabled: A || 0 === _.length
            }],
            onClose: y,
            transitionState: d,
            children: [F, (0, s.jsxs)("div", {
                className: r.YK,
                children: [(0, s.jsx)(i.ksK, {
                    type: "password",
                    label: o.intl.string(o.t["CIGa+7"]),
                    autoComplete: "current-password",
                    autoFocus: !0,
                    value: _,
                    onChange: e => {
                        I?.(e), f(e)
                    },
                    required: !0
                }), null != g && "" !== g ? (0, s.jsxs)(i.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    className: r.z3,
                    children: [" ", g, " "]
                }) : null]
            })]
        })
    })
}
E.key = () => "password-confirm-modal";
let d = E