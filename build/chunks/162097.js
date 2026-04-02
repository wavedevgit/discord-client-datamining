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
    u = l(303136),
    d = l(975571),
    c = l(318346),
    p = l(652215),
    m = l(985018),
    h = l(870722),
    x = l(684083),
    b = l(268920),
    f = l(633217);
let y = () => (0, a.jsx)("div", {
        className: h.s,
        children: (0, a.jsx)(u.A, {
            src: f.A,
            fallbackImage: b.A,
            className: h.Cb
        })
    }),
    g = e => {
        let {
            ctaText: t,
            ctaOnClick: l,
            analyticsPage: r,
            linkPreText: u = m.intl.string(m.t["5qZv9E"]),
            linkText: b = m.intl.string(m.t.XRdyjz)
        } = e, f = n.useCallback(() => {
            null != r && (0, c.Y)({
                pageType: r,
                sectionType: p.JJy.ORBS_BALANCE_MENU,
                ctaObject: p.ZSU.ORBS_LEARN_MORE_LINK
            })
        }, [r]);
        return (0, a.jsxs)("div", {
            className: i()(h.kL, x.O),
            children: [(0, a.jsx)(y, {}), (0, a.jsx)(o.$nd, {
                text: t,
                variant: "primary",
                size: "sm",
                onClick: l,
                fullWidth: !0
            }), (0, a.jsxs)("div", {
                className: h.kx,
                children: [void 0 !== u && (0, a.jsxs)(s.Text, {
                    variant: "text-xs/normal",
                    className: h.D5,
                    children: [u, "\xa0"]
                }), (0, a.jsx)(s.MzZ, {
                    target: "_blank",
                    rel: "author",
                    href: d.A.getArticleURL(p.MVz.ORBS_FAQ),
                    className: h.CU,
                    onClick: f,
                    children: b
                })]
            })]
        })
    }