/** chunk id: 796150 params = (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => b
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(883662),
    l = n(961350),
    o = n(628965),
    u = n(287809),
    c = n(115063),
    d = n(152056),
    f = n(780964),
    m = n(162396),
    g = n(12901),
    h = n(921854),
    y = n(987281),
    p = n(840065),
    v = n(985018),
    x = n(249316);

function b(e) {
    let {
        target: t,
        ...n
    } = e, a = d.A.useField("query"), v = i.useRef(null);
    (0, y.V)();
    let x = i.useCallback(e => {
            d.A.setState({
                query: e
            })
        }, []),
        [b, _] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == u.default.getCurrentUser() && (_(!0), (0, g.default)())
        };
        return l.default.addChangeListener(e), () => l.default.removeChangeListener(e)
    }, []), b) ? null : (0, r.jsx)(s.A, {
        partialRoot: h.D,
        emptyState: A,
        sidebarFooter: m.A,
        onPanelChange: e => {
            let t = (0, p.getUserSettingsSectionsByWebUserSettings)().get(e);
            null != t && (! function(e) {
                let {
                    destinationPanel: t,
                    originPanel: n
                } = e;
                (0, c.iY)({
                    destinationPane: t,
                    originPane: n,
                    subsection: o.A.getSubsection(),
                    source: o.A.getAnalyticsLocation(),
                    locationStack: o.A.getAnalyticsLocations()
                })
            }({
                destinationPanel: t,
                originPanel: v.current
            }), v.current = t)
        },
        target: t,
        defaultTarget: f.X.ACCOUNT_PANEL,
        searchQuery: a,
        onSearchChange: x,
        ...n
    })
}

function A() {
    return (0, r.jsxs)("div", {
        className: x.t,
        children: [(0, r.jsx)(a.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: v.intl.string(v.t.zihbmv)
        }), (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: v.intl.string(v.t.XclvsB)
        })]
    })
}