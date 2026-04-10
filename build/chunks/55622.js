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
    p = n(287809),
    _ = n(152056),
    m = n(780964),
    f = n(921854),
    g = n(7564),
    y = n(175665),
    v = n(178241),
    S = n(779733),
    E = n(985018),
    x = n(167067);
let A = new Set([m.X.PROFILE_PANEL, m.X.SUBSCRIPTIONS_PANEL, m.X.FAMILY_CENTER_PANEL, m.X.POGGERMODE_PANEL]),
    N = new Map([
        [m.X.CONNECTIONS_PANEL, a.ImpressionNames.USER_SETTINGS_CONNECTIONS],
        [m.X.SESSIONS_PANEL, a.ImpressionNames.USER_SETTINGS_SESSIONS]
    ]);

function b(e) {
    let {
        target: t,
        ...n
    } = e, s = _.A.useField("query"), E = i.useCallback(() => {
        _.A.setState({
            query: ""
        }), c.A.terminate()
    }, []), [x, b] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == p.default.getCurrentUser() && (b(!0), (0, S.default)())
        };
        return h.default.addChangeListener(e), () => {
            h.default.removeChangeListener(e), y.A.resetState(), u.A.resetState(), l.A.close()
        }
    }, []), x) ? null : (0, r.jsx)(d.A, {
        partialRoot: f.D,
        searchBar: C,
        emptyState: j,
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
        defaultTarget: m.X.ACCOUNT_PANEL,
        searchQuery: s,
        clearSearchQuery: E,
        ...n
    })
}

function C() {
    let e = _.A.useField("query"),
        t = i.useCallback(e => {
            _.A.setState({
                query: e
            }), c.A.maybeTrackQueryEntered()
        }, []),
        n = i.useCallback(() => {
            c.A.isSessionActive() || c.A.initialize()
        }, []),
        a = i.useCallback(() => {
            0 === _.A.getField("query").trim().length && c.A.terminate()
        }, []),
        l = i.useCallback(() => {
            _.A.setState({
                query: ""
            }), c.A.terminate()
        }, []);
    return i.useEffect(() => () => {
        _.A.resetState(), c.A.terminate()
    }, []), (0, r.jsx)("div", {
        className: x.P,
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

function j() {
    return (0, r.jsxs)("div", {
        className: x.t,
        children: [(0, r.jsx)(s.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: E.intl.string(E.t.zihbmv)
        }), (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: E.intl.string(E.t.XclvsB)
        })]
    })
}