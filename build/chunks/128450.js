/** chunk id: 128450 params = (module,exports,require) **/
a.d(t, {
    A: () => m
});
var r = a(627968),
    n = a(64700),
    s = a(503698),
    i = a.n(s),
    l = a(397927),
    d = a(453771),
    o = a(450232),
    c = a(212168),
    u = a(312085);

function _(e) {
    let {
        errors: t
    } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) => (0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-critical",
            className: u.gJ,
            children: e.replace(/[0-9.,]+ ?kb/g, e => {
                let t = 1024 * parseInt(e, 10);
                return isNaN(t) ? e : (0, d.Hb)(t)
            })
        }, t))
    })
}
let m = n.forwardRef(function(e, t) {
    let {
        title: a,
        titleIcon: n,
        titleId: s,
        description: d,
        children: m,
        className: p,
        errors: b,
        disabled: f = !1,
        hideDivider: g = !1,
        showBorder: h = !1,
        borderType: A,
        hasBackground: x = !1,
        forcedDivider: R = !1,
        showPremiumIcon: C = !1
    } = e;
    return (0, r.jsx)("div", {
        className: i()(u.fz, p, {
            [u.r9]: f,
            [u.Ai]: g,
            [u.Ac]: h,
            [u.Cx]: R
        }),
        ref: t,
        children: (0, r.jsxs)(c.A, {
            className: u.D6,
            backgroundClassName: u.fr,
            isShown: h,
            type: A,
            hasBackground: x,
            children: [(0, r.jsxs)(l.zEo, {
                className: u.DD,
                id: s,
                "data-migration-pending": !0,
                children: [a, C && (0, r.jsx)(o.A, {
                    size: "xs"
                }), n]
            }), null != d ? (0, r.jsx)(l.ayl, {
                type: l.ayl.Types.DESCRIPTION,
                className: u.yV,
                "data-migration-pending": !0,
                children: d
            }) : null, m, null != b && (0, r.jsx)(_, {
                errors: b
            })]
        })
    })
})