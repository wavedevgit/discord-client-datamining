/** chunk id: 524738, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _,
    _: () => u
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(397927),
    o = n(252452),
    c = n(55029),
    d = n(602090);
let u = e => {
        let {
            tabs: t,
            panelClassName: n,
            tabsClassName: a,
            defaultTab: o,
            onTabChange: c,
            orientation: u = "horizontal"
        } = e, _ = o ?? t[0], [m, A] = s.useState(_ ?? t[0]);
        s.useEffect(() => {
            A(_)
        }, [_]);
        let g = s.useMemo(() => {
            let e = m.component;
            return (0, i.jsx)(e, {})
        }, [m]);
        return (0, i.jsxs)("div", {
            className: l()(d.P5, {
                [d.Vd]: "vertical" === u
            }),
            children: [(0, i.jsx)(r.VQ0, {
                className: l()(d.$H, {
                    [d.Vd]: "vertical" === u
                }, a),
                selectedItem: m.setting,
                onItemSelect: e => {
                    A(t.find(t => t.setting === e) ?? t[0]), c?.(e)
                },
                orientation: u,
                type: "vertical" === u ? "side" : "top",
                look: "brand",
                children: t.map(e => (0, i.jsx)(r.VQ0.Item, {
                    className: l()(d.Mf, {
                        [d.Vd]: "vertical" === u,
                        [d.wH]: e.setting === m.setting
                    }),
                    id: e.setting,
                    "aria-label": e.title,
                    children: e.title
                }, e.setting))
            }), (0, i.jsx)(r.VQ0.Panel, {
                id: m.setting,
                "aria-labelledby": m.title,
                className: l()(d.NM, n, {
                    [d.Vd]: "vertical" === u
                }),
                children: g
            })]
        })
    },
    _ = e => {
        let {
            tabs: t,
            settingsSection: n,
            parentSetting: s,
            panelClassName: a,
            defaultTabIndex: l,
            onTabChange: r,
            orientation: d = "horizontal"
        } = e, {
            viewableTabs: _,
            filteredTab: m
        } = (0, c.A)(t, s), A = (null != l ? t[l] : null) ?? m ?? _[0];
        return (0, i.jsx)(u, {
            tabs: _,
            orientation: d,
            defaultTab: A,
            onTabChange: e => {
                o.A.setSection(n, e), r?.(e)
            },
            panelClassName: a
        })
    }