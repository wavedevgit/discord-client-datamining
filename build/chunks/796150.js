/** chunk id: 796150 params = (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => j
});
var r = n(627968),
    a = n(64700),
    i = n(397927),
    s = n(252452),
    l = n(955838),
    o = n(324593),
    c = n(883662),
    u = n(961350),
    d = n(287809),
    m = n(152056),
    f = n(780964),
    h = n(162396),
    p = n(960545),
    g = n(841329),
    x = n(12901),
    _ = n(921854),
    y = n(987281),
    b = n(985018),
    v = n(365782);
let A = new Set([f.X.PROFILE_PANEL, f.X.SUBSCRIPTIONS_PANEL, f.X.FAMILY_CENTER_PANEL, f.X.POGGERMODE_PANEL]);

function j(e) {
    let {
        target: t,
        ...n
    } = e, i = m.A.useField("query");
    (0, y.V)();
    let b = a.useCallback(() => {
            m.A.setState({
                query: ""
            }), o.A.terminate()
        }, []),
        [v, j] = a.useState(!1);
    return (a.useLayoutEffect(() => {
        let e = () => {
            null == d.default.getCurrentUser() && (j(!0), (0, x.default)())
        };
        return u.default.addChangeListener(e), () => {
            u.default.removeChangeListener(e), p.A.resetState(), l.default.resetState(), s.A.close()
        }
    }, []), v) ? null : (0, r.jsx)(c.A, {
        partialRoot: _.D,
        searchBar: N,
        emptyState: S,
        sidebarFooter: h.A,
        onViewChange: e => {
            A.has(e) || (0, g._)(e)
        },
        target: t,
        defaultTarget: f.X.ACCOUNT_PANEL,
        searchQuery: i,
        clearSearchQuery: b,
        ...n
    })
}

function N() {
    let e = m.A.useField("query"),
        t = a.useCallback(e => {
            m.A.setState({
                query: e
            }), o.A.maybeTrackQueryEntered()
        }, []),
        n = a.useCallback(() => {
            o.A.isSessionActive() || o.A.initialize()
        }, []),
        s = a.useCallback(() => {
            0 === m.A.getField("query").trim().length && o.A.terminate()
        }, []),
        l = a.useCallback(() => {
            m.A.setState({
                query: ""
            }), o.A.terminate()
        }, []);
    return a.useEffect(() => () => {
        o.A.terminate()
    }, []), (0, r.jsx)("div", {
        className: v.P,
        children: (0, r.jsx)(i.IWV, {
            size: "md",
            query: e,
            onFocus: n,
            onBlur: s,
            onChange: t,
            onClear: l
        })
    })
}

function S() {
    return (0, r.jsxs)("div", {
        className: v.t,
        children: [(0, r.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: b.intl.string(b.t.zihbmv)
        }), (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: b.intl.string(b.t.XclvsB)
        })]
    })
}