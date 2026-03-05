/** chunk id: 162097, original params: e,t,l (module,exports,require) **/
l.d(t, {
    b: () => y
});
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(732955),
    o = l(397927),
    u = l(303136),
    c = l(975571),
    d = l(318346),
    p = l(652215),
    m = l(985018),
    h = l(931503),
    x = l(264676),
    b = l(268920),
    g = l(633217);
let f = () => (0, a.jsx)("div", {
        className: h.s,
        children: (0, a.jsx)(u.A, {
            src: g.A,
            fallbackImage: b.A,
            className: h.Cb
        })
    }),
    y = e => {
        let {
            ctaText: t,
            ctaOnClick: l,
            analyticsPage: r,
            linkPreText: u = m.intl.string(m.t["5qZv9E"]),
            linkText: b = m.intl.string(m.t.XRdyjz)
        } = e, g = n.useCallback(() => {
            null != r && (0, d.Y)({
                pageType: r,
                sectionType: p.JJy.ORBS_BALANCE_MENU,
                ctaObject: p.ZSU.ORBS_LEARN_MORE_LINK
            })
        }, [r]);
        return (0, a.jsxs)("div", {
            className: i()(h.kL, x.O),
            children: [(0, a.jsx)(f, {}), (0, a.jsx)(s.$nd, {
                text: t,
                variant: "primary",
                size: "sm",
                onClick: l,
                fullWidth: !0
            }), (0, a.jsxs)("div", {
                className: h.kx,
                children: [void 0 !== u && (0, a.jsxs)(o.Text, {
                    variant: "text-xs/normal",
                    className: h.D5,
                    children: [u, "\xa0"]
                }), (0, a.jsx)(o.MzZ, {
                    target: "_blank",
                    rel: "author",
                    href: c.A.getArticleURL(p.MVz.ORBS_FAQ),
                    className: h.CU,
                    onClick: g,
                    children: b
                })]
            })]
        })
    }