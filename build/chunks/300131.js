/** chunk id: 300131 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    s = n(793574),
    r = n(688810),
    o = n(975571),
    c = n(993401),
    d = n(652215),
    u = n(985018);
let g = o.A.getArticleURL(d.MVz.CUSTOM_PROFILES_WISHLIST);

function m(e) {
    let {
        isOwner: t,
        isWishlistPublic: n,
        onToggleVisibility: o
    } = e, d = a.useRef(null), {
        analyticsLocations: m
    } = (0, r.Ay)(s.A.USER_PROFILE_WISHLIST), p = a.useMemo(() => t ? (0, i.jsxs)(l.rXV, {
        children: [(0, i.jsx)(l.fPC, {
            id: "wishlist-privacy-setting",
            label: u.intl.string(u.t.b2nFyA),
            subtext: u.intl.string(u.t.dw58pE),
            checked: n,
            action: o
        }), (0, i.jsx)(l.bXX, {}), (0, i.jsx)(l.Drp, {
            id: "wishlist-privacy-setting2",
            label: u.intl.string(u.t.hvVgAZ),
            icon: l.I9m,
            trailingIndicator: {
                type: "icon",
                icon: l.I9m
            },
            action: () => window.open(g)
        })]
    }) : null, [t, n, o]);
    return null == p ? null : (0, i.jsx)(r.f5, {
        value: m,
        children: (0, i.jsx)(l.YNO, {
            targetElementRef: d,
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, i.jsx)(l.W1t, {
                    "data-menu-migrated": !0,
                    navId: "wishlist-overflow-menu",
                    onSelect: void 0,
                    onClose: t,
                    "aria-label": u.intl.string(u.t.GdNkvG),
                    children: p
                })
            },
            children: e => (0, i.jsx)(c.q3, {
                buttonRef: d,
                icon: l.jNK,
                tooltipText: u.intl.string(u.t["UKOtz+"]),
                action: "PRESS_OPTIONS",
                ...e
            })
        })
    })
}