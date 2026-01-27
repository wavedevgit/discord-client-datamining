/** Chunk was on 82220 **/
/** chunk id: 128450, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => h
}), t(747238), t(812715), t(228524);
var r = t(627968),
    i = t(64700),
    l = t(503698),
    a = t.n(l),
    d = t(397927),
    c = t(453771),
    u = t(450232),
    o = t(212168),
    s = t(317448);

function f(e) {
    let {
        errors: n
    } = e;
    return (0, r.jsx)(r.Fragment, {
        children: n.map((e, n) => (0, r.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-critical",
            className: s.gJ,
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
        titleId: l,
        description: c,
        children: h,
        className: v,
        errors: m,
        disabled: g = !1,
        hideDivider: p = !1,
        showBorder: x = !1,
        borderType: A,
        hasBackground: _ = !1,
        forcedDivider: b = !1,
        showPremiumIcon: j = !1
    } = e;
    return (0, r.jsx)("div", {
        className: a()(s.fz, v, {
            [s.r9]: g,
            [s.Ai]: p,
            [s.Ac]: x,
            [s.Cx]: b
        }),
        ref: n,
        children: (0, r.jsxs)(o.A, {
            className: s.D6,
            backgroundClassName: s.fr,
            isShown: x,
            type: A,
            hasBackground: _,
            children: [(0, r.jsxs)(d.zEo, {
                className: s.DD,
                id: l,
                "data-migration-pending": !0,
                children: [t, j && (0, r.jsx)(u.A, {}), i]
            }), null != c ? (0, r.jsx)(d.ayl, {
                type: d.ayl.Types.DESCRIPTION,
                className: s.yV,
                "data-migration-pending": !0,
                children: c
            }) : null, h, null != m && (0, r.jsx)(f, {
                errors: m
            })]
        })
    })
})