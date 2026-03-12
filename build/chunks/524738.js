/** chunk id: 524738 params = (module,exports,require) **/
n.d(t, {
    A: () => _,
    _: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(252452),
    d = n(55029),
    c = n(602090);
let u = e => {
        let {
            tabs: t,
            panelClassName: n,
            tabsClassName: l,
            defaultTab: o,
            onTabChange: d,
            orientation: u = "horizontal"
        } = e, _ = o ?? t[0], [m, g] = s.useState(_ ?? t[0]);
        s.useEffect(() => {
            g(_)
        }, [_]);
        let A = s.useMemo(() => {
            let e = m.component;
            return (0, i.jsx)(e, {})
        }, [m]);
        return (0, i.jsxs)("div", {
            className: r()(c.P5, {
                [c.Vd]: "vertical" === u
            }),
            children: [(0, i.jsx)(a.VQ0, {
                className: r()(c.$H, {
                    [c.Vd]: "vertical" === u
                }, l),
                selectedItem: m.setting,
                onItemSelect: e => {
                    g(t.find(t => t.setting === e) ?? t[0]), d?.(e)
                },
                orientation: u,
                type: "vertical" === u ? "side" : "top",
                look: "brand",
                children: t.map(e => (0, i.jsx)(a.VQ0.Item, {
                    className: r()(c.Mf, {
                        [c.Vd]: "vertical" === u,
                        [c.wH]: e.setting === m.setting
                    }),
                    id: e.setting,
                    "aria-label": e.title,
                    children: e.title
                }, e.setting))
            }), (0, i.jsx)(a.VQ0.Panel, {
                id: m.setting,
                "aria-labelledby": m.title,
                className: r()(c.NM, n, {
                    [c.Vd]: "vertical" === u
                }),
                children: A
            })]
        })
    },
    _ = e => {
        let {
            tabs: t,
            settingsSection: n,
            parentSetting: s,
            panelClassName: l,
            defaultTabIndex: r,
            onTabChange: a,
            orientation: c = "horizontal"
        } = e, {
            viewableTabs: _,
            filteredTab: m
        } = (0, d.A)(t, s), g = (null != r ? t[r] : null) ?? m ?? _[0];
        return (0, i.jsx)(u, {
            tabs: _,
            orientation: c,
            defaultTab: g,
            onTabChange: e => {
                o.A.setSection(n, e), a?.(e)
            },
            panelClassName: l
        })
    }