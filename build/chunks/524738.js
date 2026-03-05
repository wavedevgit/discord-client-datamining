/** chunk id: 524738 params = (module,exports,require) **/
n.d(t, {
    A: () => _,
    _: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
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
        } = e, _ = o ?? t[0], [g, m] = s.useState(_ ?? t[0]);
        s.useEffect(() => {
            m(_)
        }, [_]);
        let A = s.useMemo(() => {
            let e = g.component;
            return (0, i.jsx)(e, {})
        }, [g]);
        return (0, i.jsxs)("div", {
            className: a()(c.P5, {
                [c.Vd]: "vertical" === u
            }),
            children: [(0, i.jsx)(r.VQ0, {
                className: a()(c.$H, {
                    [c.Vd]: "vertical" === u
                }, l),
                selectedItem: g.setting,
                onItemSelect: e => {
                    m(t.find(t => t.setting === e) ?? t[0]), d?.(e)
                },
                orientation: u,
                type: "vertical" === u ? "side" : "top",
                look: "brand",
                children: t.map(e => (0, i.jsx)(r.VQ0.Item, {
                    className: a()(c.Mf, {
                        [c.Vd]: "vertical" === u,
                        [c.wH]: e.setting === g.setting
                    }),
                    id: e.setting,
                    "aria-label": e.title,
                    children: e.title
                }, e.setting))
            }), (0, i.jsx)(r.VQ0.Panel, {
                id: g.setting,
                "aria-labelledby": g.title,
                className: a()(c.NM, n, {
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
            defaultTabIndex: a,
            onTabChange: r,
            orientation: c = "horizontal"
        } = e, {
            viewableTabs: _,
            filteredTab: g
        } = (0, d.A)(t, s), m = (null != a ? t[a] : null) ?? g ?? _[0];
        return (0, i.jsx)(u, {
            tabs: _,
            orientation: c,
            defaultTab: m,
            onTabChange: e => {
                o.A.setSection(n, e), r?.(e)
            },
            panelClassName: l
        })
    }