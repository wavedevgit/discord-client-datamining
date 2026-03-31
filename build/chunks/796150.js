/** chunk id: 796150 params = (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => N
});
var r = n(627968),
    i = n(64700),
    a = n(110259),
    l = n(397927),
    s = n(252452),
    o = n(139286),
    c = n(507553),
    u = n(324593),
    d = n(883662),
    h = n(961350),
    f = n(287809),
    m = n(152056),
    p = n(780964),
    _ = n(162396),
    v = n(960545),
    y = n(841329),
    g = n(12901),
    x = n(921854),
    E = n(985018),
    A = n(442182);
let S = new Set([p.X.PROFILE_PANEL, p.X.SUBSCRIPTIONS_PANEL, p.X.FAMILY_CENTER_PANEL, p.X.POGGERMODE_PANEL]),
    b = new Map([
        [p.X.CONNECTIONS_PANEL, a.ImpressionNames.USER_SETTINGS_CONNECTIONS],
        [p.X.SESSIONS_PANEL, a.ImpressionNames.USER_SETTINGS_SESSIONS]
    ]);

function N(e) {
    let {
        target: t,
        ...n
    } = e, l = m.A.useField("query"), E = i.useCallback(() => {
        m.A.setState({
            query: ""
        }), u.A.terminate()
    }, []), [A, N] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == f.default.getCurrentUser() && (N(!0), (0, g.default)())
        };
        return h.default.addChangeListener(e), () => {
            h.default.removeChangeListener(e), v.A.resetState(), c.A.resetState(), s.A.close()
        }
    }, []), A) ? null : (0, r.jsx)(d.A, {
        partialRoot: x.D,
        searchBar: j,
        emptyState: C,
        sidebarFooter: _.A,
        onViewChange: e => {
            S.has(e) || (0, y._)(e);
            let t = b.get(e);
            null != t && (0, o.x)({
                type: a.ImpressionTypes.PANE,
                name: t,
                properties: {
                    source: v.A.getField("source")
                }
            }), v.A.setState({
                source: void 0
            })
        },
        target: t,
        defaultTarget: p.X.ACCOUNT_PANEL,
        searchQuery: l,
        clearSearchQuery: E,
        ...n
    })
}

function j() {
    let e = m.A.useField("query"),
        t = i.useCallback(e => {
            m.A.setState({
                query: e
            }), u.A.maybeTrackQueryEntered()
        }, []),
        n = i.useCallback(() => {
            u.A.isSessionActive() || u.A.initialize()
        }, []),
        a = i.useCallback(() => {
            0 === m.A.getField("query").trim().length && u.A.terminate()
        }, []),
        s = i.useCallback(() => {
            m.A.setState({
                query: ""
            }), u.A.terminate()
        }, []);
    return i.useEffect(() => () => {
        m.A.resetState(), u.A.terminate()
    }, []), (0, r.jsx)("div", {
        className: A.P,
        children: (0, r.jsx)(l.IWV, {
            size: "md",
            query: e,
            onFocus: n,
            onBlur: a,
            onChange: t,
            onClear: s
        })
    })
}

function C() {
    return (0, r.jsxs)("div", {
        className: A.t,
        children: [(0, r.jsx)(l.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: E.intl.string(E.t.zihbmv)
        }), (0, r.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: E.intl.string(E.t.XclvsB)
        })]
    })
}