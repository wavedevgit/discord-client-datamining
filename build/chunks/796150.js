/** Chunk was on 51901 **/
/** chunk id: 796150, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => x
}), n(896048), n(142703);
var r = n(627968),
    o = n(64700),
    a = n(340287),
    l = n(397927),
    i = n(830215),
    c = n(964486),
    s = n(883662),
    u = n(628965),
    d = n(203982),
    b = n(115063),
    f = n(152056),
    p = n(780964),
    _ = n(162396),
    y = n(12901),
    m = n(921854),
    g = n(840065),
    h = n(652215),
    O = n(985018),
    j = n(249316);

function v(e) {
    let {
        destinationPanel: t,
        originPanel: n
    } = e;
    (0, b.iY)({
        destinationPane: t,
        originPane: n,
        subsection: u.A.getSubsection(),
        source: u.A.getAnalyticsLocation(),
        locationStack: u.A.getAnalyticsLocations()
    })
}

function x(e) {
    let {
        target: t
    } = e, n = function(e, t) {
        if (null == e) return {};
        var n, r, o, a = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, n = Reflect.ownKeys(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            return a
        }
        if (a = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.getOwnPropertyNames(e);
                for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                return o
            }(e, t), Object.getOwnPropertySymbols)
            for (o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }(e, ["target"]), l = f.A.useField("query"), b = o.useRef(null);
    (0, c.Ay)(() => {
        let e = u.A.getSection();
        null != e && (v({
            destinationPanel: e,
            originPanel: null
        }), b.current = e)
    });
    let O = o.useCallback(e => {
            f.A.setState({
                query: e
            })
        }, []),
        [j, x] = o.useState(!1);
    return (o.useEffect(() => {
        let e = () => {
            (0, a.flushSync)(() => {
                x(!0), (0, y.default)()
            }), setImmediate(() => {
                i.A.logout("settings")
            })
        };
        return d._.subscribe(h.jej.SETTINGS_TRIGGER_LOGOUT, e), () => {
            d._.unsubscribe(h.jej.SETTINGS_TRIGGER_LOGOUT, e)
        }
    }, []), j) ? null : (0, r.jsx)(s.A, function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r
            })
        }
        return e
    }({
        partialRoot: m.D,
        emptyState: S,
        sidebarFooter: _.A,
        onPanelChange: e => {
            let t = (0, g.getUserSettingsSectionsByWebUserSettings)().get(e);
            null != t && (v({
                destinationPanel: t,
                originPanel: b.current
            }), b.current = t)
        },
        target: t,
        defaultTarget: p.X.ACCOUNT_PANEL,
        searchQuery: l,
        onSearchChange: O
    }, n))
}

function S() {
    return (0, r.jsxs)("div", {
        className: j.t,
        children: [(0, r.jsx)(l.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: O.intl.string(O.t.zihbmv)
        }), (0, r.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: O.intl.string(O.t.XclvsB)
        })]
    })
}