/** chunk id: 796150 params = (module,exports,require) **/
"use strict";
r.d(t, {
    default: () => S
});
var n = r(627968),
    a = r(64700),
    i = r(397927),
    l = r(252452),
    s = r(507553),
    o = r(324593),
    c = r(883662),
    u = r(961350),
    d = r(287809),
    h = r(152056),
    f = r(780964),
    _ = r(162396),
    m = r(960545),
    p = r(841329),
    g = r(12901),
    b = r(921854),
    y = r(987281),
    v = r(985018),
    x = r(249316);
let E = new Set([f.X.PROFILE_PANEL, f.X.SUBSCRIPTIONS_PANEL, f.X.FAMILY_CENTER_PANEL, f.X.POGGERMODE_PANEL]);

function S(e) {
    let {
        target: t,
        ...r
    } = e, i = h.A.useField("query");
    (0, y.V)();
    let v = a.useCallback(() => {
            h.A.setState({
                query: ""
            }), o.A.terminate()
        }, []),
        [x, S] = a.useState(!1);
    return (a.useLayoutEffect(() => {
        let e = () => {
            null == d.default.getCurrentUser() && (S(!0), (0, g.default)())
        };
        return u.default.addChangeListener(e), () => {
            u.default.removeChangeListener(e), m.A.resetState(), s.A.resetState(), l.A.close()
        }
    }, []), x) ? null : (0, n.jsx)(c.A, {
        partialRoot: b.D,
        searchBar: A,
        emptyState: N,
        sidebarFooter: _.A,
        onViewChange: e => {
            E.has(e) || (0, p._)(e)
        },
        target: t,
        defaultTarget: f.X.ACCOUNT_PANEL,
        searchQuery: i,
        clearSearchQuery: v,
        ...r
    })
}

function A() {
    let e = h.A.useField("query"),
        t = a.useCallback(e => {
            h.A.setState({
                query: e
            }), o.A.maybeTrackQueryEntered()
        }, []),
        r = a.useCallback(() => {
            o.A.isSessionActive() || o.A.initialize()
        }, []),
        l = a.useCallback(() => {
            0 === h.A.getField("query").trim().length && o.A.terminate()
        }, []),
        s = a.useCallback(() => {
            h.A.setState({
                query: ""
            }), o.A.terminate()
        }, []);
    return a.useEffect(() => () => {
        o.A.terminate()
    }, []), (0, n.jsx)("div", {
        className: x.P,
        children: (0, n.jsx)(i.IWV, {
            size: "md",
            query: e,
            onFocus: r,
            onBlur: l,
            onChange: t,
            onClear: s
        })
    })
}

function N() {
    return (0, n.jsxs)("div", {
        className: x.t,
        children: [(0, n.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: v.intl.string(v.t.zihbmv)
        }), (0, n.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: v.intl.string(v.t.XclvsB)
        })]
    })
}