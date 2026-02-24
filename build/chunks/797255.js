/** chunk id: 797255, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var s = n(397927),
    a = n(854627),
    l = n(778712),
    r = n(985018),
    o = n(789273);

function c(e) {
    let {
        referrer: t,
        enablePremiumBrandRefresh: n
    } = e, {
        avatarSrc: c,
        eventHandlers: d
    } = (0, a.A)({
        userId: t?.id,
        size: n ? l._3.SIZE_24 : l._3.SIZE_32,
        animateOnHover: !0
    });
    return (0, i.jsx)("div", {
        className: o.E2,
        children: (0, i.jsxs)("div", {
            className: o.hA,
            children: [(0, i.jsx)("div", {
                className: o.kR,
                children: (0, i.jsx)(s.euF, {
                    className: o.Kk,
                    src: c,
                    "aria-label": t.username,
                    size: l._3.SIZE_32,
                    ...d
                })
            }), (0, i.jsx)(s.Heading, {
                variant: "heading-sm/normal",
                className: o.Mn,
                color: "text-strong",
                children: r.intl.format(r.t.IqxblS, {
                    username: null != t.globalName ? t.globalName : t.username
                })
            })]
        })
    })
}