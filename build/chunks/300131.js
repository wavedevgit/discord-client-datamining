/** chunk id: 300131 params = (module,exports,require) **/
i.d(t, {
    A: () => m
});
var n = i(627968),
    l = i(64700),
    s = i(397927),
    a = i(793574),
    r = i(688810),
    d = i(975571),
    o = i(993401),
    c = i(652215),
    u = i(985018);
let g = d.A.getArticleURL(c.MVz.CUSTOM_PROFILES_WISHLIST);

function m(e) {
    let {
        isOwner: t,
        isWishlistPublic: i,
        onToggleVisibility: d
    } = e, c = l.useRef(null), {
        analyticsLocations: m
    } = (0, r.Ay)(a.A.USER_PROFILE_WISHLIST), h = l.useMemo(() => t ? (0, n.jsxs)(s.rXV, {
        children: [(0, n.jsx)(s.fPC, {
            id: "wishlist-privacy-setting",
            label: u.intl.string(u.t.b2nFyA),
            subtext: u.intl.string(u.t.dw58pE),
            checked: i,
            action: d
        }), (0, n.jsx)(s.bXX, {}), (0, n.jsx)(s.Drp, {
            id: "wishlist-privacy-setting2",
            label: u.intl.string(u.t.hvVgAZ),
            icon: s.I9m,
            trailingIndicator: {
                type: "icon",
                icon: s.I9m
            },
            action: () => window.open(g)
        })]
    }) : null, [t, i, d]);
    return null == h ? null : (0, n.jsx)(r.f5, {
        value: m,
        children: (0, n.jsx)(s.YNO, {
            targetElementRef: c,
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, n.jsx)(s.W1t, {
                    "data-menu-migrated": !0,
                    navId: "wishlist-overflow-menu",
                    onSelect: void 0,
                    onClose: t,
                    "aria-label": u.intl.string(u.t.GdNkvG),
                    children: h
                })
            },
            children: e => (0, n.jsx)(o.q3, {
                buttonRef: c,
                icon: s.jNK,
                tooltipText: u.intl.string(u.t["UKOtz+"]),
                action: "PRESS_OPTIONS",
                ...e
            })
        })
    })
}