/** chunk id: 796150 params = (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => v
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(883662),
    l = n(961350),
    o = n(628965),
    c = n(287809),
    u = n(115063),
    d = n(152056),
    m = n(780964),
    f = n(162396),
    g = n(12901),
    h = n(921854),
    p = n(987281),
    y = n(840065),
    _ = n(985018),
    x = n(365782);

function v(e) {
    let {
        target: t,
        ...n
    } = e, a = d.A.useField("query"), _ = i.useRef(null);
    (0, p.V)();
    let x = i.useCallback(e => {
            d.A.setState({
                query: e
            })
        }, []),
        [v, A] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == c.default.getCurrentUser() && (A(!0), (0, g.default)())
        };
        return l.default.addChangeListener(e), () => l.default.removeChangeListener(e)
    }, []), v) ? null : (0, r.jsx)(s.A, {
        partialRoot: h.D,
        emptyState: b,
        sidebarFooter: f.A,
        onPanelChange: e => {
            let t = (0, y.getUserSettingsSectionsByWebUserSettings)().get(e);
            null != t && (! function(e) {
                let {
                    destinationPanel: t,
                    originPanel: n
                } = e;
                (0, u.iY)({
                    destinationPane: t,
                    originPane: n,
                    subsection: o.A.getSubsection(),
                    source: o.A.getAnalyticsLocation(),
                    locationStack: o.A.getAnalyticsLocations()
                })
            }({
                destinationPanel: t,
                originPanel: _.current
            }), _.current = t)
        },
        target: t,
        defaultTarget: m.X.ACCOUNT_PANEL,
        searchQuery: a,
        onSearchChange: x,
        ...n
    })
}

function b() {
    return (0, r.jsxs)("div", {
        className: x.t,
        children: [(0, r.jsx)(a.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: _.intl.string(_.t.zihbmv)
        }), (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: _.intl.string(_.t.XclvsB)
        })]
    })
}