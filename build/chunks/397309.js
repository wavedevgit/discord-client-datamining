/** chunk id: 397309 params = (module,exports,require) **/
s.d(t, {
    A: () => d
});
var r = s(627968),
    l = s(64700),
    n = s(503698),
    a = s.n(n),
    o = s(397927),
    i = s(938191),
    c = s(758836),
    u = s(985018);

function d(e) {
    let {
        handleTransition: t,
        onClose: s
    } = e, n = (0, i.yB)("CollectiblesIndexPageContextMenu"), d = l.useMemo(() => [{
        label: u.intl.string(u.t.dRZYNE),
        value: c.G2.AVATAR_DECORATIONS
    }, {
        label: u.intl.string(u.t["1cNjtx"]),
        value: c.G2.PROFILE_EFFECTS
    }, {
        label: u.intl.string(u.t.V68Fqz),
        value: c.G2.NAMEPLATES
    }, {
        label: u.intl.string(u.t.FYFpps),
        value: c.G2.BUNDLES
    }, {
        label: u.intl.string(u.t.xFcotU),
        value: c.G2.CATALOG
    }], []);
    return (0, r.jsx)("div", {
        className: a()({
            [i.jP]: n
        }),
        children: (0, r.jsx)(o.W1t, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: a()({
                [i.jP]: n
            }),
            onClose: s,
            "aria-label": u.intl.string(u.t.xFcotU),
            onSelect: () => {},
            children: d.map(e => (0, r.jsx)(o.Drp, {
                id: e.value,
                label: e.label,
                action: () => {
                    t(e.value)
                }
            }, e.value))
        })
    })
}