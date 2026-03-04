/** chunk id: 796150, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => C
});
var r = n(627968),
    a = n(64700),
    i = n(397927),
    s = n(964486),
    l = n(883662),
    o = n(961350),
    c = n(628965),
    u = n(287809),
    d = n(115063),
    _ = n(152056),
    m = n(780964),
    g = n(162396),
    b = n(12901),
    p = n(921854),
    h = n(840065),
    f = n(985018),
    x = n(249316);

function y(e) {
    let {
        destinationPanel: t,
        originPanel: n
    } = e;
    (0, d.iY)({
        destinationPane: t,
        originPane: n,
        subsection: c.A.getSubsection(),
        source: c.A.getAnalyticsLocation(),
        locationStack: c.A.getAnalyticsLocations()
    })
}

function C(e) {
    let {
        target: t,
        ...n
    } = e, i = _.A.useField("query"), d = a.useRef(null);
    (0, s.Ay)(() => {
        let e = c.A.getSection();
        null != e && (y({
            destinationPanel: e,
            originPanel: null
        }), d.current = e)
    });
    let f = a.useCallback(e => {
            _.A.setState({
                query: e
            })
        }, []),
        [x, C] = a.useState(!1);
    return (a.useLayoutEffect(() => {
        let e = () => {
            null == u.default.getCurrentUser() && (C(!0), (0, b.default)())
        };
        return o.default.addChangeListener(e), () => o.default.removeChangeListener(e)
    }, []), x) ? null : (0, r.jsx)(l.A, {
        partialRoot: p.D,
        emptyState: A,
        sidebarFooter: g.A,
        onPanelChange: e => {
            let t = (0, h.getUserSettingsSectionsByWebUserSettings)().get(e);
            null != t && (y({
                destinationPanel: t,
                originPanel: d.current
            }), d.current = t)
        },
        target: t,
        defaultTarget: m.X.ACCOUNT_PANEL,
        searchQuery: i,
        onSearchChange: f,
        ...n
    })
}

function A() {
    return (0, r.jsxs)("div", {
        className: x.t,
        children: [(0, r.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: f.intl.string(f.t.zihbmv)
        }), (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: f.intl.string(f.t.XclvsB)
        })]
    })
}