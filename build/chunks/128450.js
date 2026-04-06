/** chunk id: 128450 params = (module,exports,require) **/
r.d(t, {
    A: () => _
});
var n = r(627968),
    a = r(64700),
    i = r(503698),
    s = r.n(i),
    l = r(397927),
    d = r(453771),
    o = r(450232),
    c = r(212168),
    u = r(312085);

function m(e) {
    let {
        errors: t
    } = e;
    return (0, n.jsx)(n.Fragment, {
        children: t.map((e, t) => (0, n.jsx)(l.Text, {
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
let _ = a.forwardRef(function(e, t) {
    let {
        title: r,
        titleIcon: a,
        titleId: i,
        description: d,
        children: _,
        className: p,
        errors: f,
        disabled: b = !1,
        hideDivider: h = !1,
        showBorder: g = !1,
        borderType: x,
        hasBackground: C = !1,
        forcedDivider: A = !1,
        showPremiumIcon: R = !1
    } = e;
    return (0, n.jsx)("div", {
        className: s()(u.fz, p, {
            [u.r9]: b,
            [u.Ai]: h,
            [u.Ac]: g,
            [u.Cx]: A
        }),
        ref: t,
        children: (0, n.jsxs)(c.A, {
            className: u.D6,
            backgroundClassName: u.fr,
            isShown: g,
            type: x,
            hasBackground: C,
            children: [(0, n.jsxs)(l.zEo, {
                className: u.DD,
                id: i,
                "data-migration-pending": !0,
                children: [r, R && (0, n.jsx)(o.A, {
                    size: "xs"
                }), a]
            }), null != d ? (0, n.jsx)(l.ayl, {
                type: l.ayl.Types.DESCRIPTION,
                className: u.yV,
                "data-migration-pending": !0,
                children: d
            }) : null, _, null != f && (0, n.jsx)(m, {
                errors: f
            })]
        })
    })
})