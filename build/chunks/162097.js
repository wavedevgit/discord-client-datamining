/** chunk id: 162097 params = (module,exports,require) **/
l.d(t, {
    b: () => g
});
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    o = l(732955),
    s = l(397927),
    c = l(303136),
    u = l(975571),
    d = l(318346),
    p = l(652215),
    m = l(985018),
    h = l(870722),
    b = l(684083),
    x = l(268920),
    y = l(633217);
let f = () => (0, a.jsx)("div", {
        className: h.s,
        children: (0, a.jsx)(c.A, {
            src: y.A,
            fallbackImage: x.A,
            className: h.Cb
        })
    }),
    g = e => {
        let {
            ctaText: t,
            ctaOnClick: l,
            analyticsPage: r,
            linkPreText: c = m.intl.string(m.t["5qZv9E"]),
            linkText: x = m.intl.string(m.t.XRdyjz)
        } = e, y = n.useCallback(() => {
            null != r && (0, d.Y)({
                pageType: r,
                sectionType: p.JJy.ORBS_BALANCE_MENU,
                ctaObject: p.ZSU.ORBS_LEARN_MORE_LINK
            })
        }, [r]);
        return (0, a.jsxs)("div", {
            className: i()(h.kL, b.O),
            children: [(0, a.jsx)(f, {}), (0, a.jsx)(o.$nd, {
                text: t,
                variant: "primary",
                size: "sm",
                onClick: l,
                fullWidth: !0
            }), (0, a.jsxs)("div", {
                className: h.kx,
                children: [void 0 !== c && (0, a.jsxs)(s.Text, {
                    variant: "text-xs/normal",
                    className: h.D5,
                    children: [c, "\xa0"]
                }), (0, a.jsx)(s.MzZ, {
                    target: "_blank",
                    rel: "author",
                    href: u.A.getArticleURL(p.MVz.ORBS_FAQ),
                    className: h.CU,
                    onClick: y,
                    children: x
                })]
            })]
        })
    }