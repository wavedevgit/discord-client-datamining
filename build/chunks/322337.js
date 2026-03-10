/** chunk id: 322337 params = (module,exports,require) **/
n.d(t, {
    A: () => A,
    p: () => E
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(442433),
    o = n(543594),
    c = n(587895),
    d = n(67480),
    u = n(371794),
    _ = n(985018);
let E = {
    DropdownSizes: o.A.DropdownSizes,
    Sizes: o.A.Sizes,
    Colors: o.A.Colors,
    Looks: o.A.Looks
};
class T extends l.PureComponent {
    renderContextMenu = () => {
        let {
            skus: e,
            onSKUSelect: t,
            onMenuSelect: n
        } = this.props;
        return (0, i.jsx)(s.W1t, {
            "data-menu-migrated": !0,
            onSelect: n,
            navId: "test-skus",
            "aria-label": _.intl.string(_.t.ogxXGq),
            onClose: a.Z_,
            children: e.map(e => (0, i.jsx)(s.Drp, {
                id: `${e.id}`,
                label: e.name,
                action: () => {
                    t?.(e)
                }
            }, `${e.id}`))
        })
    };
    handleContextMenu = e => {
        e.stopPropagation(), a.jA(e, this.renderContextMenu)
    };
    handleClick = () => {
        let {
            onSKUSelect: e,
            primarySKU: t
        } = this.props;
        null != t && e?.(t)
    };
    render() {
        let {
            skus: e,
            children: t,
            applicationId: n,
            primarySKU: l,
            onSKUSelect: r,
            ...s
        } = this.props;
        return (0, i.jsx)(o.A, {
            onClick: this.handleClick,
            onDropdownClick: e.length > 0 ? this.handleContextMenu : null,
            onContextMenu: e.length > 0 ? this.handleContextMenu : void 0,
            ...s,
            children: t
        })
    }
}
let A = r.Ay.connectStores([d.A, c.A], e => {
    let {
        applicationId: t
    } = e, n = (0, u.VH)(t, c.A, d.A);
    return {
        skus: (d.A.getForApplication(t) ?? []).sort((e, t) => null != n && e.id === n.id ? -1 : null != n && t.id === n.id ? 1 : e.name >= t.name ? -1 : 1),
        primarySKU: n
    }
})(T)