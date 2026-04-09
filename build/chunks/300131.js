/** chunk id: 300131 params = (module,exports,require) **/
i.d(t, {
    A: () => m
});
var n = i(627968),
    s = i(64700),
    l = i(397927),
    a = i(793574),
    r = i(688810),
    o = i(975571),
    d = i(993401),
    c = i(652215),
    u = i(985018);
let g = o.A.getArticleURL(c.MVz.CUSTOM_PROFILES_WISHLIST);

function m(e) {
    let {
        isOwner: t,
        isWishlistPublic: i,
        onToggleVisibility: o
    } = e, c = s.useRef(null), {
        analyticsLocations: m
    } = (0, r.Ay)(a.A.USER_PROFILE_WISHLIST), h = s.useMemo(() => t ? (0, n.jsxs)(l.rXV, {
        children: [(0, n.jsx)(l.fPC, {
            id: "wishlist-privacy-setting",
            label: u.intl.string(u.t.b2nFyA),
            subtext: u.intl.string(u.t.dw58pE),
            checked: i,
            action: o
        }), (0, n.jsx)(l.bXX, {}), (0, n.jsx)(l.Drp, {
            id: "wishlist-privacy-setting2",
            label: u.intl.string(u.t.hvVgAZ),
            icon: l.I9m,
            trailingIndicator: {
                type: "icon",
                icon: l.I9m
            },
            action: () => window.open(g)
        })]
    }) : null, [t, i, o]);
    return null == h ? null : (0, n.jsx)(r.f5, {
        value: m,
        children: (0, n.jsx)(l.YNO, {
            targetElementRef: c,
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, n.jsx)(l.W1t, {
                    "data-menu-migrated": !0,
                    navId: "wishlist-overflow-menu",
                    onSelect: void 0,
                    onClose: t,
                    "aria-label": u.intl.string(u.t.GdNkvG),
                    children: h
                })
            },
            children: e => (0, n.jsx)(d.q3, {
                buttonRef: c,
                icon: l.jNK,
                tooltipText: u.intl.string(u.t["UKOtz+"]),
                action: "PRESS_OPTIONS",
                ...e
            })
        })
    })
}