/** chunk id: 796150 params = (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => E
});
var r = n(627968),
    a = n(64700),
    i = n(397927),
    l = n(252452),
    s = n(507553),
    o = n(324593),
    c = n(883662),
    u = n(961350),
    d = n(287809),
    _ = n(152056),
    h = n(780964),
    f = n(162396),
    p = n(960545),
    m = n(841329),
    b = n(12901),
    g = n(921854),
    y = n(985018),
    v = n(879797);
let x = new Set([h.X.PROFILE_PANEL, h.X.SUBSCRIPTIONS_PANEL, h.X.FAMILY_CENTER_PANEL, h.X.POGGERMODE_PANEL]);

function E(e) {
    let {
        target: t,
        ...n
    } = e, i = _.A.useField("query"), y = a.useCallback(() => {
        _.A.setState({
            query: ""
        }), o.A.terminate()
    }, []), [v, E] = a.useState(!1);
    return (a.useLayoutEffect(() => {
        let e = () => {
            null == d.default.getCurrentUser() && (E(!0), (0, b.default)())
        };
        return u.default.addChangeListener(e), () => {
            u.default.removeChangeListener(e), p.A.resetState(), s.A.resetState(), l.A.close()
        }
    }, []), v) ? null : (0, r.jsx)(c.A, {
        partialRoot: g.D,
        searchBar: S,
        emptyState: A,
        sidebarFooter: f.A,
        onViewChange: e => {
            x.has(e) || (0, m._)(e)
        },
        target: t,
        defaultTarget: h.X.ACCOUNT_PANEL,
        searchQuery: i,
        clearSearchQuery: y,
        ...n
    })
}

function S() {
    let e = _.A.useField("query"),
        t = a.useCallback(e => {
            _.A.setState({
                query: e
            }), o.A.maybeTrackQueryEntered()
        }, []),
        n = a.useCallback(() => {
            o.A.isSessionActive() || o.A.initialize()
        }, []),
        l = a.useCallback(() => {
            0 === _.A.getField("query").trim().length && o.A.terminate()
        }, []),
        s = a.useCallback(() => {
            _.A.setState({
                query: ""
            }), o.A.terminate()
        }, []);
    return a.useEffect(() => () => {
        _.A.resetState(), o.A.terminate()
    }, []), (0, r.jsx)("div", {
        className: v.P,
        children: (0, r.jsx)(i.IWV, {
            size: "md",
            query: e,
            onFocus: n,
            onBlur: l,
            onChange: t,
            onClear: s
        })
    })
}

function A() {
    return (0, r.jsxs)("div", {
        className: v.t,
        children: [(0, r.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: y.intl.string(y.t.zihbmv)
        }), (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: y.intl.string(y.t.XclvsB)
        })]
    })
}