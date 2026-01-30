/** chunk id: 556506, original params: e,n,l (module,exports,require) **/
l.d(n, {
    default: () => p
}), l(896048);
var a = l(627968),
    s = l(64700),
    t = l(503698),
    i = l.n(t),
    r = l(862482),
    d = l(935462),
    o = l(571356),
    c = l(397927),
    u = l(235986),
    m = l(985018),
    h = l(933976);
let p = e => {
    let n, l, t, {
            body: p,
            cancelText: _,
            className: x,
            confirmColor: j,
            confirmText: g = m.intl.string(m.t.BddRzS),
            secondaryConfirmText: b,
            onCancel: f,
            onClose: N,
            onConfirm: y,
            onConfirmSecondary: A,
            title: C,
            transitionState: D,
            titleClassName: k
        } = e,
        S = r.$n.Sizes.MEDIUM,
        [z, E] = s.useState(!1);
    return s.useEffect(() => () => {
        z && (null == A || A())
    }, [z, A]), null != _ && "" !== _ && (n = (0, a.jsx)(r.$n, {
        "data-migration-pending": !0,
        type: "button",
        size: S,
        color: r.$n.Colors.PRIMARY,
        onClick: () => {
            null == N || N(), null == f || f()
        },
        className: h.zr,
        children: _
    })), null != g && "" !== g && (l = (0, a.jsx)(r.$n, {
        "data-migration-pending": !0,
        type: "submit",
        color: j,
        size: S,
        className: h.FS,
        autoFocus: !0,
        children: g
    })), null != b && "" !== b && (t = (0, a.jsx)(c.Checkbox, {
        checked: z,
        onChange: e => E(e),
        label: b,
        labelType: "secondary"
    })), (0, a.jsx)(d.EO, {
        "data-migration-pending": !0,
        transitionState: D,
        size: d.rI.DYNAMIC,
        className: i()(x, h.kL),
        "aria-label": C,
        parentComponent: "Alert",
        children: (0, a.jsxs)("form", {
            onSubmit: e => {
                null != e && e.preventDefault(), null == N || N(), null == y || y()
            },
            className: h.Zd,
            children: [(0, a.jsx)(d.rQ, {
                children: null != C ? (0, a.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    className: i()(h.DD, k),
                    children: C
                }) : (0, a.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    className: i()(h.DD, k),
                    children: C
                })
            }), (0, a.jsx)(d.$m, {
                className: h.jE,
                children: (0, a.jsx)(u.A, {
                    direction: u.A.Direction.VERTICAL,
                    justify: u.A.Justify.START,
                    className: h.Qs,
                    children: null != p && (0, a.jsx)(o.E, {
                        variant: "text-md/normal",
                        className: h.rf,
                        color: "text-default",
                        children: p
                    })
                })
            }), (0, a.jsxs)(d.jl, {
                justify: void 0,
                wrap: u.A.Wrap.WRAP,
                className: h.Hx,
                children: [l, n, t]
            })]
        })
    })
}