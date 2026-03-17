/** chunk id: 124589 params = (module,exports,require) **/
a.d(t, {
    A: () => s
});
var n = a(627968);
a(64700);
var i = a(397927),
    l = a(985018);

function s(e) {
    let {
        tabs: t,
        selectedTab: a,
        onTabSelect: s,
        onClose: r
    } = e;
    return (0, n.jsx)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "global-discovery-tabs-overflow-menu",
        "aria-label": l.intl.string(l.t.riPnr0),
        hideScroller: !0,
        onClose: r,
        onSelect: r,
        children: (0, n.jsx)(i.rXV, {
            children: t.map(e => {
                let {
                    id: t,
                    label: l
                } = e;
                return (0, n.jsx)(i.Drp, {
                    id: t,
                    label: l,
                    icon: t === a ? i.yr3 : void 0,
                    leadingAccessory: t === a ? {
                        type: "icon",
                        icon: i.yr3
                    } : void 0,
                    action: () => s(t)
                }, t)
            })
        }, "overflow-tabs")
    })
}