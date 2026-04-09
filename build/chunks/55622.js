/** chunk id: 55622 params = (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => b
});
var r = n(627968),
    i = n(64700),
    a = n(110259),
    s = n(397927),
    l = n(252452),
    o = n(139286),
    u = n(507553),
    c = n(324593),
    d = n(883662),
    h = n(961350),
    m = n(287809),
    p = n(152056),
    f = n(780964),
    _ = n(921854),
    g = n(7564),
    y = n(175665),
    v = n(178241),
    x = n(779733),
    S = n(985018),
    E = n(167067);
let A = new Set([f.X.PROFILE_PANEL, f.X.SUBSCRIPTIONS_PANEL, f.X.FAMILY_CENTER_PANEL, f.X.POGGERMODE_PANEL]),
    N = new Map([
        [f.X.CONNECTIONS_PANEL, a.ImpressionNames.USER_SETTINGS_CONNECTIONS],
        [f.X.SESSIONS_PANEL, a.ImpressionNames.USER_SETTINGS_SESSIONS]
    ]);

function b(e) {
    let {
        target: t,
        ...n
    } = e, s = p.A.useField("query"), S = i.useCallback(() => {
        p.A.setState({
            query: ""
        }), c.A.terminate()
    }, []), [E, b] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == m.default.getCurrentUser() && (b(!0), (0, x.default)())
        };
        return h.default.addChangeListener(e), () => {
            h.default.removeChangeListener(e), y.A.resetState(), u.A.resetState(), l.A.close()
        }
    }, []), E) ? null : (0, r.jsx)(d.A, {
        partialRoot: _.D,
        searchBar: j,
        emptyState: C,
        sidebarFooter: g.A,
        onViewChange: e => {
            A.has(e) || (0, v._)(e);
            let t = N.get(e);
            null != t && (0, o.x)({
                type: a.ImpressionTypes.PANE,
                name: t,
                properties: {
                    source: y.A.getField("source")
                }
            }), y.A.setState({
                source: void 0
            })
        },
        target: t,
        defaultTarget: f.X.ACCOUNT_PANEL,
        searchQuery: s,
        clearSearchQuery: S,
        ...n
    })
}

function j() {
    let e = p.A.useField("query"),
        t = i.useCallback(e => {
            p.A.setState({
                query: e
            }), c.A.maybeTrackQueryEntered()
        }, []),
        n = i.useCallback(() => {
            c.A.isSessionActive() || c.A.initialize()
        }, []),
        a = i.useCallback(() => {
            0 === p.A.getField("query").trim().length && c.A.terminate()
        }, []),
        l = i.useCallback(() => {
            p.A.setState({
                query: ""
            }), c.A.terminate()
        }, []);
    return i.useEffect(() => () => {
        p.A.resetState(), c.A.terminate()
    }, []), (0, r.jsx)("div", {
        className: E.P,
        children: (0, r.jsx)(s.IWV, {
            size: "md",
            query: e,
            onFocus: n,
            onBlur: a,
            onChange: t,
            onClear: l
        })
    })
}

function C() {
    return (0, r.jsxs)("div", {
        className: E.t,
        children: [(0, r.jsx)(s.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: S.intl.string(S.t.zihbmv)
        }), (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: S.intl.string(S.t.XclvsB)
        })]
    })
}