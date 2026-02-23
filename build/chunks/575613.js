/** chunk id: 575613, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h,
    J: () => u
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(442433),
    o = n(543594),
    d = n(328968),
    c = n(985018);
let u = {
    DropdownSizes: o.A.DropdownSizes,
    Sizes: o.A.Sizes,
    Colors: o.A.Colors,
    Looks: o.A.Looks
};
class A extends r.PureComponent {
    renderContextMenu = () => {
        let {
            storeListings: e,
            onStoreListingSelect: t,
            currentStoreListingId: n,
            onMenuSelect: r
        } = this.props, l = e.map(e => e.id !== n ? (0, i.jsx)(a.Drp, {
            id: `${e.id}`,
            label: e.id,
            action: () => {
                s.Z_(), t?.(e)
            }
        }) : null);
        return (0, i.jsx)(a.W1t, {
            "data-menu-migrated": !0,
            onSelect: r,
            navId: "test-store-listing",
            "aria-label": c.intl.string(c.t.ogxXGq),
            onClose: s.Z_,
            children: l
        })
    };
    handleContextMenu = e => {
        e.stopPropagation(), s.jA(e, this.renderContextMenu)
    };
    render() {
        let {
            storeListings: e,
            primaryStoreListing: t,
            skuId: n,
            onStoreListingSelect: r,
            currentStoreListingId: l,
            ...a
        } = this.props, s = +(null != t);
        return (s += e.length) < 2 ? null : (0, i.jsx)(o.A, {
            onClick: this.handleContextMenu,
            onDropdownClick: this.handleContextMenu,
            onContextMenu: this.handleContextMenu,
            ...a,
            children: c.intl.string(c.t.hElye1)
        })
    }
}
let h = l.Ay.connectStores([d.A], e => {
    let {
        skuId: t
    } = e;
    return {
        storeListings: d.A.getUnpublishedForSKU(t),
        primaryStoreListing: d.A.getForSKU(t)
    }
})(A)