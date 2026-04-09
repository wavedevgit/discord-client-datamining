/** chunk id: 383430 params = (module,exports,require) **/
i.d(t, {
    A: () => u
});
var n = i(627968),
    s = i(64700),
    l = i(397927),
    a = i(429913),
    r = i(486020),
    o = i(403362),
    d = i(985018),
    c = i(508246);

function u(e) {
    let {
        title: t,
        variant: i = "secondary",
        handleOpenCollectiblesShop: u,
        handleOpenGameShop: g,
        handleAddNitroToWishlist: m,
        socialLayerStorefrontApplicationIds: h
    } = e, x = s.useRef(null), [p, A] = s.useState(!1), f = function(e) {
        let {
            applications: t,
            handleOpenGameShop: i
        } = e;
        return s.useMemo(() => t.filter(o.Vq).map(e => {
            let t = r.Ay.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                size: 20
            });
            return {
                id: `browse-social-layer-storefront-${e.id}`,
                label: d.intl.formatToPlainString(d.t["HDT/rg"], {
                    applicationName: e.name
                }),
                iconLeft: null != t ? () => (0, n.jsx)("img", {
                    className: c.I,
                    src: t,
                    alt: ""
                }) : l.U1X,
                leadingAccessory: null != t ? {
                    type: "image",
                    src: t
                } : {
                    type: "icon",
                    icon: l.U1X
                },
                action: () => i?.(e.id)
            }
        }), [t, i])
    }({
        applications: (0, a.A)(h),
        handleOpenGameShop: g
    }), I = s.useMemo(() => (0, n.jsxs)(l.rXV, {
        children: [null != u && (0, n.jsx)(l.Drp, {
            id: "browse-collectibles-shop",
            label: d.intl.string(d.t["5upuqx"]),
            iconLeft: l.U1X,
            leadingAccessory: {
                type: "icon",
                icon: l.U1X
            },
            action: u
        }), null != m && (0, n.jsx)(l.Drp, {
            id: "add-nitro-to-wishlist",
            label: d.intl.string(d.t.lG6a5x),
            iconLeft: l.tvc,
            leadingAccessory: {
                type: "icon",
                icon: l.tvc
            },
            action: m
        }), null != g && f.map(e => {
            let {
                id: t,
                label: i,
                iconLeft: s,
                leadingAccessory: a,
                action: r
            } = e;
            return (0, n.jsx)(l.Drp, {
                id: t,
                label: i,
                iconLeft: s,
                leadingAccessory: a,
                action: r
            }, t)
        })]
    }), [u, g, m, f]);
    return (0, n.jsx)(l.YNO, {
        targetElementRef: x,
        position: "bottom",
        onRequestOpen: () => A(!0),
        onRequestClose: () => A(!1),
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, n.jsx)(l.W1t, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": d.intl.string(d.t.GdNkvG),
                children: I
            })
        },
        children: e => (0, n.jsx)(l.Button, {
            buttonRef: x,
            variant: i,
            size: "sm",
            icon: p ? l.PGe : l.abt,
            iconPosition: "end",
            text: t,
            ...e
        })
    })
}