/** chunk id: 796150 params = (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => E
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    l = n(252452),
    s = n(507553),
    o = n(324593),
    c = n(883662),
    u = n(961350),
    d = n(287809),
    h = n(152056),
    _ = n(780964),
    f = n(162396),
    m = n(960545),
    p = n(841329),
    v = n(12901),
    y = n(921854),
    b = n(985018),
    g = n(879797);
let x = new Set([_.X.PROFILE_PANEL, _.X.SUBSCRIPTIONS_PANEL, _.X.FAMILY_CENTER_PANEL, _.X.POGGERMODE_PANEL]);

function E(e) {
    let {
        target: t,
        ...n
    } = e, a = h.A.useField("query"), b = i.useCallback(() => {
        h.A.setState({
            query: ""
        }), o.A.terminate()
    }, []), [g, E] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == d.default.getCurrentUser() && (E(!0), (0, v.default)())
        };
        return u.default.addChangeListener(e), () => {
            u.default.removeChangeListener(e), m.A.resetState(), s.A.resetState(), l.A.close()
        }
    }, []), g) ? null : (0, r.jsx)(c.A, {
        partialRoot: y.D,
        searchBar: A,
        emptyState: S,
        sidebarFooter: f.A,
        onViewChange: e => {
            x.has(e) || (0, p._)(e)
        },
        target: t,
        defaultTarget: _.X.ACCOUNT_PANEL,
        searchQuery: a,
        clearSearchQuery: b,
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
        h.A.resetState(), o.A.terminate()
    }, []), (0, r.jsx)("div", {
        className: g.P,
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

function S() {
    return (0, r.jsxs)("div", {
        className: g.t,
        children: [(0, r.jsx)(a.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: b.intl.string(b.t.zihbmv)
        }), (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: b.intl.string(b.t.XclvsB)
        })]
    })
}