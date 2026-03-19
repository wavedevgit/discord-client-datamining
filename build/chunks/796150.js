/** chunk id: 796150 params = (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => j
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
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
    v = n(985018),
    b = n(365782);
let A = new Set([f.X.PROFILE_PANEL, f.X.SUBSCRIPTIONS_PANEL, f.X.FAMILY_CENTER_PANEL, f.X.POGGERMODE_PANEL]);

function j(e) {
    let {
        target: t,
        ...n
    } = e, a = m.A.useField("query");
    (0, y.V)();
    let v = i.useCallback(() => {
            m.A.setState({
                query: ""
            }), o.A.terminate()
        }, []),
        [b, j] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == d.default.getCurrentUser() && (j(!0), (0, x.default)())
        };
        return u.default.addChangeListener(e), () => {
            u.default.removeChangeListener(e), p.A.resetState(), l.default.resetState(), s.A.close()
        }
    }, []), b) ? null : (0, r.jsx)(c.A, {
        partialRoot: _.D,
        searchBar: N,
        emptyState: S,
        sidebarFooter: h.A,
        onViewChange: e => {
            A.has(e) || (0, g._)(e)
        },
        target: t,
        defaultTarget: f.X.ACCOUNT_PANEL,
        searchQuery: a,
        clearSearchQuery: v,
        ...n
    })
}

function N() {
    let e = m.A.useField("query"),
        t = i.useCallback(e => {
            m.A.setState({
                query: e
            }), o.A.maybeTrackQueryEntered()
        }, []),
        n = i.useCallback(() => {
            o.A.isSessionActive() || o.A.initialize()
        }, []),
        s = i.useCallback(() => {
            0 === m.A.getField("query").trim().length && o.A.terminate()
        }, []),
        l = i.useCallback(() => {
            m.A.setState({
                query: ""
            }), o.A.terminate()
        }, []);
    return i.useEffect(() => () => {
        o.A.terminate()
    }, []), (0, r.jsx)("div", {
        className: b.P,
        children: (0, r.jsx)(a.IWV, {
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
        className: b.t,
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