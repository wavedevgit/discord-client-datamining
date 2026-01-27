/** Chunk was on 92917 **/
/** chunk id: 150099, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(857182),
    o = n(572957),
    c = n(419056),
    u = n(985018),
    d = n(420779);
let p = e => {
    let {
        channelId: t,
        messageId: n
    } = e, p = (0, l.bG)([o.A], () => o.A.shouldShowBump(n), [n]), m = i.useCallback(() => {
        s.A.dismissPublishBump(n), (0, c.A)(t, n)
    }, [t, n]), f = i.useCallback(() => {
        s.A.dismissPublishBump(n)
    }, [n]), g = i.useCallback(() => {
        s.A.permanentlyHidePublishBump(t)
    }, [t]);
    return p ? (0, r.jsxs)("div", {
        className: d.kL,
        children: [(0, r.jsxs)("div", {
            className: d.mp,
            children: [(0, r.jsx)(a.koX, {
                size: "xs",
                color: "currentColor",
                className: d.Kk
            }), (0, r.jsx)(a.Heading, {
                variant: "heading-sm/normal",
                className: d.dS,
                children: u.intl.string(u.t.hasZoU)
            }), (0, r.jsx)(a.Text, {
                color: "text-brand",
                className: d.mk,
                variant: "text-sm/normal",
                children: (0, r.jsx)(a.DUT, {
                    onClick: m,
                    children: u.intl.string(u.t.MFGE51)
                })
            }), (0, r.jsx)(a.DUT, {
                onClick: f,
                children: (0, r.jsx)(a.aXh, {
                    size: "xs",
                    color: "currentColor",
                    className: d.ut
                })
            })]
        }), (0, r.jsx)(a.Text, {
            color: "text-muted",
            className: d.qx,
            variant: "text-sm/normal",
            children: (0, r.jsx)(a.DUT, {
                onClick: g,
                children: u.intl.string(u.t.efSkDm)
            })
        })]
    }) : null
}