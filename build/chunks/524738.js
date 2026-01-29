/** Chunk was on 32502 **/
/** chunk id: 524738, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h,
    _: () => u
}), n(896048);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(397927),
    o = n(252452),
    c = n(55029),
    d = n(847568);
let u = e => {
        let {
            tabs: t,
            panelClassName: n,
            tabsClassName: s,
            defaultTab: o,
            onTabChange: c,
            orientation: u = "horizontal"
        } = e, h = null != o ? o : t[0], [g, x] = l.useState(null != h ? h : t[0]);
        l.useEffect(() => {
            x(h)
        }, [h]);
        let p = l.useMemo(() => {
            let e = g.component;
            return (0, i.jsx)(e, {})
        }, [g]);
        return (0, i.jsxs)("div", {
            className: r()(d.P5, {
                [d.Vd]: "vertical" === u
            }),
            children: [(0, i.jsx)(a.VQ0, {
                className: r()(d.$H, {
                    [d.Vd]: "vertical" === u
                }, s),
                selectedItem: g.setting,
                onItemSelect: e => {
                    var n;
                    x(null != (n = t.find(t => t.setting === e)) ? n : t[0]), null == c || c(e)
                },
                orientation: u,
                type: "vertical" === u ? "side" : "top",
                look: "brand",
                children: t.map(e => (0, i.jsx)(a.VQ0.Item, {
                    className: r()(d.Mf, {
                        [d.Vd]: "vertical" === u,
                        [d.wH]: e.setting === g.setting
                    }),
                    id: e.setting,
                    "aria-label": e.title,
                    children: e.title
                }, e.setting))
            }), (0, i.jsx)(a.VQ0.Panel, {
                id: g.setting,
                "aria-labelledby": g.title,
                className: r()(d.NM, n, {
                    [d.Vd]: "vertical" === u
                }),
                children: p
            })]
        })
    },
    h = e => {
        var t;
        let {
            tabs: n,
            settingsSection: l,
            parentSetting: s,
            panelClassName: r,
            defaultTabIndex: a,
            onTabChange: d,
            orientation: h = "horizontal"
        } = e, {
            viewableTabs: g,
            filteredTab: x
        } = (0, c.A)(n, s), p = null != a ? n[a] : null, m = null != (t = null != p ? p : x) ? t : g[0];
        return (0, i.jsx)(u, {
            tabs: g,
            orientation: h,
            defaultTab: m,
            onTabChange: e => {
                o.A.setSection(l, e), null == d || d(e)
            },
            panelClassName: r
        })
    }