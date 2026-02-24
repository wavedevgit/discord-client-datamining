/** chunk id: 796150, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => C
});
var a = n(627968),
    r = n(64700),
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
    p = n(12901),
    b = n(921854),
    f = n(840065),
    h = n(985018),
    x = n(365782);

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
    } = e, i = _.A.useField("query"), d = r.useRef(null);
    (0, s.Ay)(() => {
        let e = c.A.getSection();
        null != e && (y({
            destinationPanel: e,
            originPanel: null
        }), d.current = e)
    });
    let h = r.useCallback(e => {
            _.A.setState({
                query: e
            })
        }, []),
        [x, C] = r.useState(!1);
    return (r.useLayoutEffect(() => {
        let e = () => {
            null == u.default.getCurrentUser() && (C(!0), (0, p.default)())
        };
        return o.default.addChangeListener(e), () => o.default.removeChangeListener(e)
    }, []), x) ? null : (0, a.jsx)(l.A, {
        partialRoot: b.D,
        emptyState: A,
        sidebarFooter: g.A,
        onPanelChange: e => {
            let t = (0, f.getUserSettingsSectionsByWebUserSettings)().get(e);
            null != t && (y({
                destinationPanel: t,
                originPanel: d.current
            }), d.current = t)
        },
        target: t,
        defaultTarget: m.X.ACCOUNT_PANEL,
        searchQuery: i,
        onSearchChange: h,
        ...n
    })
}

function A() {
    return (0, a.jsxs)("div", {
        className: x.t,
        children: [(0, a.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: h.intl.string(h.t.zihbmv)
        }), (0, a.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: h.intl.string(h.t.XclvsB)
        })]
    })
}