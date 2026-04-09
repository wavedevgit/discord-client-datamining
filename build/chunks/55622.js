/** chunk id: 55622 params = (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => N
});
var r = n(627968),
    l = n(64700),
    i = n(110259),
    a = n(397927),
    s = n(252452),
    o = n(139286),
    u = n(507553),
    c = n(324593),
    d = n(883662),
    h = n(961350),
    m = n(287809),
    f = n(152056),
    p = n(780964),
    v = n(921854),
    y = n(7564),
    g = n(175665),
    _ = n(178241),
    x = n(779733),
    E = n(985018),
    A = n(167067);
let S = new Set([p.X.PROFILE_PANEL, p.X.SUBSCRIPTIONS_PANEL, p.X.FAMILY_CENTER_PANEL, p.X.POGGERMODE_PANEL]),
    b = new Map([
        [p.X.CONNECTIONS_PANEL, i.ImpressionNames.USER_SETTINGS_CONNECTIONS],
        [p.X.SESSIONS_PANEL, i.ImpressionNames.USER_SETTINGS_SESSIONS]
    ]);

function N(e) {
    let {
        target: t,
        ...n
    } = e, a = f.A.useField("query"), E = l.useCallback(() => {
        f.A.setState({
            query: ""
        }), c.A.terminate()
    }, []), [A, N] = l.useState(!1);
    return (l.useLayoutEffect(() => {
        let e = () => {
            null == m.default.getCurrentUser() && (N(!0), (0, x.default)())
        };
        return h.default.addChangeListener(e), () => {
            h.default.removeChangeListener(e), g.A.resetState(), u.A.resetState(), s.A.close()
        }
    }, []), A) ? null : (0, r.jsx)(d.A, {
        partialRoot: v.D,
        searchBar: j,
        emptyState: C,
        sidebarFooter: y.A,
        onViewChange: e => {
            S.has(e) || (0, _._)(e);
            let t = b.get(e);
            null != t && (0, o.x)({
                type: i.ImpressionTypes.PANE,
                name: t,
                properties: {
                    source: g.A.getField("source")
                }
            }), g.A.setState({
                source: void 0
            })
        },
        target: t,
        defaultTarget: p.X.ACCOUNT_PANEL,
        searchQuery: a,
        clearSearchQuery: E,
        ...n
    })
}

function j() {
    let e = f.A.useField("query"),
        t = l.useCallback(e => {
            f.A.setState({
                query: e
            }), c.A.maybeTrackQueryEntered()
        }, []),
        n = l.useCallback(() => {
            c.A.isSessionActive() || c.A.initialize()
        }, []),
        i = l.useCallback(() => {
            0 === f.A.getField("query").trim().length && c.A.terminate()
        }, []),
        s = l.useCallback(() => {
            f.A.setState({
                query: ""
            }), c.A.terminate()
        }, []);
    return l.useEffect(() => () => {
        f.A.resetState(), c.A.terminate()
    }, []), (0, r.jsx)("div", {
        className: A.P,
        children: (0, r.jsx)(a.IWV, {
            size: "md",
            query: e,
            onFocus: n,
            onBlur: i,
            onChange: t,
            onClear: s
        })
    })
}

function C() {
    return (0, r.jsxs)("div", {
        className: A.t,
        children: [(0, r.jsx)(a.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: E.intl.string(E.t.zihbmv)
        }), (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: E.intl.string(E.t.XclvsB)
        })]
    })
}