/** chunk id: 150099 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(857182),
    o = n(572957),
    d = n(419056),
    c = n(985018),
    u = n(493328);
let m = e => {
    let {
        channelId: t,
        messageId: n
    } = e, m = (0, r.bG)([o.A], () => o.A.shouldShowBump(n), [n]), _ = l.useCallback(() => {
        a.A.dismissPublishBump(n), (0, d.A)(t, n)
    }, [t, n]), h = l.useCallback(() => {
        a.A.dismissPublishBump(n)
    }, [n]), p = l.useCallback(() => {
        a.A.permanentlyHidePublishBump(t)
    }, [t]);
    return m ? (0, i.jsxs)("div", {
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
                    onClick: _,
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