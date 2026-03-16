/** chunk id: 128450 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(453771),
    d = n(450232),
    c = n(212168),
    u = n(317448);

function _(e) {
    let {
        errors: t
    } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) => (0, i.jsx)(r.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-critical",
            className: u.gJ,
            children: e.replace(/[0-9.,]+ ?kb/g, e => {
                let t = 1024 * parseInt(e, 10);
                return isNaN(t) ? e : (0, o.Hb)(t)
            })
        }, t))
    })
}
let m = s.forwardRef(function(e, t) {
    let {
        title: n,
        titleIcon: s,
        titleId: l,
        description: o,
        children: m,
        className: g,
        errors: A,
        disabled: h = !1,
        hideDivider: x = !1,
        showBorder: p = !1,
        borderType: T,
        hasBackground: E = !1,
        forcedDivider: S = !1,
        showPremiumIcon: C = !1
    } = e;
    return (0, i.jsx)("div", {
        className: a()(u.fz, g, {
            [u.r9]: h,
            [u.Ai]: x,
            [u.Ac]: p,
            [u.Cx]: S
        }),
        ref: t,
        children: (0, i.jsxs)(c.A, {
            className: u.D6,
            backgroundClassName: u.fr,
            isShown: p,
            type: T,
            hasBackground: E,
            children: [(0, i.jsxs)(r.zEo, {
                className: u.DD,
                id: l,
                "data-migration-pending": !0,
                children: [n, C && (0, i.jsx)(d.A, {
                    size: "xs"
                }), s]
            }), null != o ? (0, i.jsx)(r.ayl, {
                type: r.ayl.Types.DESCRIPTION,
                className: u.yV,
                "data-migration-pending": !0,
                children: o
            }) : null, m, null != A && (0, i.jsx)(_, {
                errors: A
            })]
        })
    })
})