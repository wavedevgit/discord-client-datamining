/** chunk id: 150099 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    a = n(64700),
    l = n(311907),
    s = n(397927),
    r = n(857182),
    o = n(572957),
    d = n(419056),
    c = n(985018),
    u = n(493328);
let _ = e => {
    let {
        channelId: t,
        messageId: n
    } = e, _ = (0, l.bG)([o.A], () => o.A.shouldShowBump(n), [n]), m = a.useCallback(() => {
        r.A.dismissPublishBump(n), (0, d.A)(t, n)
    }, [t, n]), h = a.useCallback(() => {
        r.A.dismissPublishBump(n)
    }, [n]), p = a.useCallback(() => {
        r.A.permanentlyHidePublishBump(t)
    }, [t]);
    return _ ? (0, i.jsxs)("div", {
        className: u.kL,
        children: [(0, i.jsxs)("div", {
            className: u.mp,
            children: [(0, i.jsx)(s.koX, {
                size: "xs",
                color: "currentColor",
                className: u.Kk
            }), (0, i.jsx)(s.Heading, {
                variant: "heading-sm/normal",
                className: u.dS,
                children: c.intl.string(c.t.hasZoU)
            }), (0, i.jsx)(s.Text, {
                color: "text-brand",
                className: u.mk,
                variant: "text-sm/normal",
                children: (0, i.jsx)(s.DUT, {
                    onClick: m,
                    children: c.intl.string(c.t.MFGE51)
                })
            }), (0, i.jsx)(s.DUT, {
                onClick: h,
                children: (0, i.jsx)(s.aXh, {
                    size: "xs",
                    color: "currentColor",
                    className: u.ut
                })
            })]
        }), (0, i.jsx)(s.Text, {
            color: "text-muted",
            className: u.qx,
            variant: "text-sm/normal",
            children: (0, i.jsx)(s.DUT, {
                onClick: p,
                children: c.intl.string(c.t.efSkDm)
            })
        })]
    }) : null
}