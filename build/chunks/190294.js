/** chunk id: 190294 params = (module,exports,require) **/
s.d(t, {
    A: () => b
});
var r = s(627968),
    l = s(64700),
    n = s(641150),
    a = s(397927),
    o = s(365491),
    i = s(758836),
    c = s(985018);
let u = [{
        tab: i.G2.AVATAR_DECORATIONS,
        labelKey: c.t.dRZYNE
    }, {
        tab: i.G2.PROFILE_EFFECTS,
        labelKey: c.t["1cNjtx"]
    }, {
        tab: i.G2.NAMEPLATES,
        labelKey: c.t.V68Fqz
    }, {
        tab: i.G2.BUNDLES,
        labelKey: c.t.FYFpps
    }, {
        tab: i.G2.CATALOG,
        labelKey: c.t.xFcotU
    }],
    d = {
        [n.q.ALL]: i.G2.CATALOG,
        [n.q.AVATAR_DECORATION]: i.G2.AVATAR_DECORATIONS,
        [n.q.PROFILE_EFFECT]: i.G2.PROFILE_EFFECTS,
        [n.q.NAMEPLATE]: i.G2.NAMEPLATES,
        [n.q.BUNDLE]: i.G2.BUNDLES
    };

function b(e) {
    let {
        tabs: t,
        selectedTab: s,
        onTabSelect: n,
        onClose: b,
        showOrbRentalNewBadge: p
    } = e, {
        itemTypeFilters: S
    } = (0, o.v)(), E = l.useMemo(() => {
        if (s === i.G2.CATALOG && S.size > 0) {
            let e = d[Array.from(S)[0]];
            if (null != e) return e
        }
        return s
    }, [s, S]);
    return (0, r.jsx)(a.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": c.intl.string(c.t["UKOtz+"]),
        hideScroller: !0,
        onClose: b,
        onSelect: b,
        children: (0, r.jsx)(a.rXV, {
            children: t.map(e => {
                let {
                    tab: t,
                    label: l,
                    hasSubmenu: o
                } = e;
                if (o && t === i.G2.CATALOG) {
                    let e = t === s;
                    return (0, r.jsx)(a.Drp, {
                        id: t,
                        label: l,
                        icon: e ? a.yr3 : void 0,
                        leadingAccessory: e ? {
                            type: "icon",
                            icon: a.yr3
                        } : void 0,
                        hasSubmenu: !0,
                        children: u.map(e => {
                            let {
                                tab: t,
                                labelKey: s
                            } = e, l = t === E;
                            return (0, r.jsx)(a.Drp, {
                                id: t,
                                label: c.intl.string(s),
                                icon: l ? a.yr3 : void 0,
                                leadingAccessory: l ? {
                                    type: "icon",
                                    icon: a.yr3
                                } : void 0,
                                action: () => {
                                    n(t), b()
                                }
                            }, t)
                        })
                    }, t)
                }
                let d = t === i.G2.ORBS && p;
                return (0, r.jsx)(a.Drp, {
                    id: t,
                    label: l,
                    icon: t === s ? a.yr3 : void 0,
                    leadingAccessory: t === s ? {
                        type: "icon",
                        icon: a.yr3
                    } : void 0,
                    badge: d ? "new" : void 0,
                    action: () => n(t)
                }, t)
            })
        }, "overflow-tabs")
    })
}