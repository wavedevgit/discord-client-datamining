/** chunk id: 128450 params = (module,exports,require) **/
a.d(t, {
    A: () => m
});
var s = a(627968),
    r = a(64700),
    n = a(503698),
    i = a.n(n),
    l = a(397927),
    o = a(453771),
    d = a(450232),
    c = a(212168),
    u = a(850949);

function p(e) {
    let {
        errors: t
    } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.map((e, t) => (0, s.jsx)(l.Text, {
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
let m = r.forwardRef(function(e, t) {
    let {
        title: a,
        titleIcon: r,
        titleId: n,
        description: o,
        children: m,
        className: b,
        errors: f,
        disabled: g = !1,
        hideDivider: h = !1,
        showBorder: A = !1,
        borderType: x,
        hasBackground: R = !1,
        forcedDivider: v = !1,
        showPremiumIcon: y = !1
    } = e;
    return (0, s.jsx)("div", {
        className: i()(u.fz, b, {
            [u.r9]: g,
            [u.Ai]: h,
            [u.Ac]: A,
            [u.Cx]: v
        }),
        ref: t,
        children: (0, s.jsxs)(c.A, {
            className: u.D6,
            backgroundClassName: u.fr,
            isShown: A,
            type: x,
            hasBackground: R,
            children: [(0, s.jsxs)(l.zEo, {
                className: u.DD,
                id: n,
                "data-migration-pending": !0,
                children: [a, y && (0, s.jsx)(d.A, {
                    size: "xs"
                }), r]
            }), null != o ? (0, s.jsx)(l.ayl, {
                type: l.ayl.Types.DESCRIPTION,
                className: u.yV,
                "data-migration-pending": !0,
                children: o
            }) : null, m, null != f && (0, s.jsx)(p, {
                errors: f
            })]
        })
    })
})