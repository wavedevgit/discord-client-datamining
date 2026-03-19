/** chunk id: 796150 params = (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => S
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    l = n(252452),
    s = n(955838),
    o = n(324593),
    c = n(883662),
    u = n(961350),
    d = n(287809),
    h = n(152056),
    _ = n(780964),
    f = n(162396),
    m = n(960545),
    p = n(841329),
    b = n(12901),
    y = n(921854),
    g = n(987281),
    v = n(985018),
    x = n(365782);
let E = new Set([_.X.PROFILE_PANEL, _.X.SUBSCRIPTIONS_PANEL, _.X.FAMILY_CENTER_PANEL, _.X.POGGERMODE_PANEL]);

function S(e) {
    let {
        target: t,
        ...n
    } = e, a = h.A.useField("query");
    (0, g.V)();
    let v = i.useCallback(() => {
            h.A.setState({
                query: ""
            }), o.A.terminate()
        }, []),
        [x, S] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == d.default.getCurrentUser() && (S(!0), (0, b.default)())
        };
        return u.default.addChangeListener(e), () => {
            u.default.removeChangeListener(e), m.A.resetState(), s.default.resetState(), l.A.close()
        }
    }, []), x) ? null : (0, r.jsx)(c.A, {
        partialRoot: y.D,
        searchBar: A,
        emptyState: N,
        sidebarFooter: f.A,
        onViewChange: e => {
            E.has(e) || (0, p._)(e)
        },
        target: t,
        defaultTarget: _.X.ACCOUNT_PANEL,
        searchQuery: a,
        clearSearchQuery: v,
        ...n
    })
}

function A() {
    let e = h.A.useField("query"),
        t = i.useCallback(e => {
            h.A.setState({
                query: e
            }), o.A.maybeTrackQueryEntered()
        }, []),
        n = i.useCallback(() => {
            o.A.isSessionActive() || o.A.initialize()
        }, []),
        l = i.useCallback(() => {
            0 === h.A.getField("query").trim().length && o.A.terminate()
        }, []),
        s = i.useCallback(() => {
            h.A.setState({
                query: ""
            }), o.A.terminate()
        }, []);
    return i.useEffect(() => () => {
        o.A.terminate()
    }, []), (0, r.jsx)("div", {
        className: x.P,
        children: (0, r.jsx)(a.IWV, {
            size: "md",
            query: e,
            onFocus: n,
            onBlur: l,
            onChange: t,
            onClear: s
        })
    })
}

function N() {
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