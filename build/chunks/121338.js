/** Chunk was on 94055 **/
/** chunk id: 121338, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => p,
    openInteractionModal: () => f
});
var r = n(627968),
    i = n(158954),
    a = n(397927),
    s = n(207963),
    l = n(750128),
    o = n(969508),
    c = n(520586),
    d = n(985018),
    u = n(308040);

function p(e) {
    let {
        title: t,
        onClose: n,
        transitionState: p
    } = e, {
        components: f,
        applicationIconURL: m,
        applicationName: b,
        submissionState: x,
        error: h,
        validators: j,
        validationErrors: g,
        setValidationErrors: y,
        onSubmit: v
    } = (0, o.uD)(e, n);
    return (0, r.jsx)("form", {
        onSubmit: e => {
            e.preventDefault(), v()
        },
        children: (0, r.jsxs)(i.dWK, {
            transitionState: p,
            onClose: n,
            children: [(0, r.jsx)(i.rQ0, {
                leading: (0, r.jsx)(a.euF, {
                    src: m,
                    size: a._3J.SIZE_24,
                    "aria-label": b,
                    className: u.In
                }),
                title: t,
                titleTextVariant: "heading-xl/semibold"
            }), (0, r.jsxs)(i.cwr, {
                children: [null != h && "" !== h ? (0, r.jsx)(a.po8, {
                    messageType: a.YCn.ERROR,
                    className: u.$Q,
                    children: h
                }) : null, (0, r.jsx)(a.po8, {
                    messageType: a.YCn.WARNING,
                    className: u.$Q,
                    children: d.intl.format(d.t["dSTy/w"], {
                        applicationName: b
                    })
                }), (0, r.jsx)("div", {
                    className: u.dK,
                    children: (0, r.jsx)(s.f5, {
                        modal: e,
                        validators: j,
                        validationErrors: g,
                        setValidationErrors: y,
                        children: (0, c.fD)(f)
                    })
                })]
            }), (0, r.jsx)(i.H7u, {
                actions: [{
                    variant: "secondary",
                    text: d.intl.string(d.t["ETE/oC"]),
                    onClick: n
                }, {
                    variant: "primary",
                    text: d.intl.string(d.t.geKm7t),
                    loading: x === l.Z.IN_FLIGHT,
                    onClick: v
                }],
                actionsFullWidth: !0
            })]
        })
    })
}

function f(e) {
    (0, a.qfG)(t => (0, r.jsx)(p, function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r
            })
        }
        return e
    }({}, t, e)), {
        stackNextByDefault: !0
    })
}