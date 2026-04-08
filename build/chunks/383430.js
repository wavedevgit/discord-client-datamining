/** chunk id: 383430 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    s = n(429913),
    r = n(486020),
    o = n(403362),
    d = n(985018),
    c = n(508246);

function u(e) {
    let {
        title: t,
        variant: n = "secondary",
        handleOpenCollectiblesShop: u,
        handleOpenGameShop: g,
        handleAddNitroToWishlist: m,
        socialLayerStorefrontApplicationIds: x
    } = e, f = a.useRef(null), [p, h] = a.useState(!1), _ = function(e) {
        let {
            applications: t,
            handleOpenGameShop: n
        } = e;
        return a.useMemo(() => t.filter(o.Vq).map(e => {
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
                iconLeft: null != t ? () => (0, i.jsx)("img", {
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
                action: () => n?.(e.id)
            }
        }), [t, n])
    }({
        applications: (0, s.A)(x),
        handleOpenGameShop: g
    }), A = a.useMemo(() => (0, i.jsxs)(l.rXV, {
        children: [null != u && (0, i.jsx)(l.Drp, {
            id: "browse-collectibles-shop",
            label: d.intl.string(d.t["5upuqx"]),
            iconLeft: l.U1X,
            leadingAccessory: {
                type: "icon",
                icon: l.U1X
            },
            action: u
        }), null != m && (0, i.jsx)(l.Drp, {
            id: "add-nitro-to-wishlist",
            label: d.intl.string(d.t.lG6a5x),
            iconLeft: l.tvc,
            leadingAccessory: {
                type: "icon",
                icon: l.tvc
            },
            action: m
        }), null != g && _.map(e => {
            let {
                id: t,
                label: n,
                iconLeft: a,
                leadingAccessory: s,
                action: r
            } = e;
            return (0, i.jsx)(l.Drp, {
                id: t,
                label: n,
                iconLeft: a,
                leadingAccessory: s,
                action: r
            }, t)
        })]
    }), [u, g, m, _]);
    return (0, i.jsx)(l.YNO, {
        targetElementRef: f,
        position: "bottom",
        onRequestOpen: () => h(!0),
        onRequestClose: () => h(!1),
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(l.W1t, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": d.intl.string(d.t.GdNkvG),
                children: A
            })
        },
        children: e => (0, i.jsx)(l.Button, {
            buttonRef: f,
            variant: n,
            size: "sm",
            icon: p ? l.PGe : l.abt,
            iconPosition: "end",
            text: t,
            ...e
        })
    })
}