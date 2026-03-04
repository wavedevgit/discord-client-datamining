/** chunk id: 128450, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => h
});
var r = t(627968),
    i = t(64700),
    a = t(503698),
    l = t.n(a),
    d = t(397927),
    c = t(453771),
    s = t(450232),
    u = t(212168),
    o = t(317448);

function f(e) {
    let {
        errors: n
    } = e;
    return (0, r.jsx)(r.Fragment, {
        children: n.map((e, n) => (0, r.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-critical",
            className: o.gJ,
            children: e.replace(/[0-9.,]+ ?kb/g, e => {
                let n = 1024 * parseInt(e, 10);
                return isNaN(n) ? e : (0, c.Hb)(n)
            })
        }, n))
    })
}
let h = i.forwardRef(function(e, n) {
    let {
        title: t,
        titleIcon: i,
        titleId: a,
        description: c,
        children: h,
        className: m,
        errors: g,
        disabled: p = !1,
        hideDivider: v = !1,
        showBorder: x = !1,
        borderType: _,
        hasBackground: A = !1,
        forcedDivider: b = !1,
        showPremiumIcon: j = !1
    } = e;
    return (0, r.jsx)("div", {
        className: l()(o.fz, m, {
            [o.r9]: p,
            [o.Ai]: v,
            [o.Ac]: x,
            [o.Cx]: b
        }),
        ref: n,
        children: (0, r.jsxs)(u.A, {
            className: o.D6,
            backgroundClassName: o.fr,
            isShown: x,
            type: _,
            hasBackground: A,
            children: [(0, r.jsxs)(d.zEo, {
                className: o.DD,
                id: a,
                "data-migration-pending": !0,
                children: [t, j && (0, r.jsx)(s.A, {
                    size: "xs"
                }), i]
            }), null != c ? (0, r.jsx)(d.ayl, {
                type: d.ayl.Types.DESCRIPTION,
                className: o.yV,
                "data-migration-pending": !0,
                children: c
            }) : null, h, null != g && (0, r.jsx)(f, {
                errors: g
            })]
        })
    })
})