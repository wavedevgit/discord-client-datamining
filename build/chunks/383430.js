/** chunk id: 383430 params = (module,exports,require) **/
i.d(t, {
    A: () => u
});
var n = i(627968),
    l = i(64700),
    s = i(397927),
    a = i(429913),
    r = i(486020),
    d = i(403362),
    o = i(985018),
    c = i(688369);

function u(e) {
    let {
        title: t,
        variant: i = "secondary",
        handleOpenCollectiblesShop: u,
        handleOpenGameShop: g,
        handleAddNitroToWishlist: m,
        socialLayerStorefrontApplicationIds: h
    } = e, x = l.useRef(null), [A, p] = l.useState(!1), f = function(e) {
        let {
            applications: t,
            handleOpenGameShop: i
        } = e;
        return l.useMemo(() => t.filter(d.Vq).map(e => {
            let t = r.Ay.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                size: 20
            });
            return {
                id: `browse-social-layer-storefront-${e.id}`,
                label: o.intl.formatToPlainString(o.t["HDT/rg"], {
                    applicationName: e.name
                }),
                iconLeft: null != t ? () => (0, n.jsx)("img", {
                    className: c.I,
                    src: t,
                    alt: ""
                }) : s.U1X,
                leadingAccessory: null != t ? {
                    type: "image",
                    src: t
                } : {
                    type: "icon",
                    icon: s.U1X
                },
                action: () => i?.(e.id)
            }
        }), [t, i])
    }({
        applications: (0, a.A)(h),
        handleOpenGameShop: g
    }), I = l.useMemo(() => (0, n.jsxs)(s.rXV, {
        children: [null != u && (0, n.jsx)(s.Drp, {
            id: "browse-collectibles-shop",
            label: o.intl.string(o.t["5upuqx"]),
            iconLeft: s.U1X,
            leadingAccessory: {
                type: "icon",
                icon: s.U1X
            },
            action: u
        }), null != m && (0, n.jsx)(s.Drp, {
            id: "add-nitro-to-wishlist",
            label: o.intl.string(o.t.lG6a5x),
            iconLeft: s.tvc,
            leadingAccessory: {
                type: "icon",
                icon: s.tvc
            },
            action: m
        }), null != g && f.map(e => {
            let {
                id: t,
                label: i,
                iconLeft: l,
                leadingAccessory: a,
                action: r
            } = e;
            return (0, n.jsx)(s.Drp, {
                id: t,
                label: i,
                iconLeft: l,
                leadingAccessory: a,
                action: r
            }, t)
        })]
    }), [u, g, m, f]);
    return (0, n.jsx)(s.YNO, {
        targetElementRef: x,
        position: "bottom",
        onRequestOpen: () => p(!0),
        onRequestClose: () => p(!1),
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, n.jsx)(s.W1t, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": o.intl.string(o.t.GdNkvG),
                children: I
            })
        },
        children: e => (0, n.jsx)(s.Button, {
            buttonRef: x,
            variant: i,
            size: "sm",
            icon: A ? s.PGe : s.abt,
            iconPosition: "end",
            text: t,
            ...e
        })
    })
}