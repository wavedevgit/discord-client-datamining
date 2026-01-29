/** Chunk was on 59024 **/
/** chunk id: 796150, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => x
}), n(896048), n(142703);
var r = n(627968),
    l = n(64700),
    o = n(340287),
    a = n(397927),
    i = n(830215),
    c = n(964486),
    s = n(883662),
    u = n(628965),
    d = n(203982),
    b = n(115063),
    y = n(152056),
    p = n(780964),
    f = n(162396),
    g = n(12901),
    m = n(921854),
    h = n(840065),
    j = n(652215),
    O = n(985018),
    v = n(249316);

function _(e) {
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
        var n, r, l, o = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            return o
        }
        if (o = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    o = Object.getOwnPropertyNames(e);
                for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
    }(e, ["target"]), a = y.A.useField("query"), b = l.useRef(null);
    (0, c.Ay)(() => {
        let e = u.A.getSection();
        null != e && (_({
            destinationPanel: e,
            originPanel: null
        }), b.current = e)
    });
    let O = l.useCallback(e => {
            y.A.setState({
                query: e
            })
        }, []),
        [v, x] = l.useState(!1);
    return (l.useEffect(() => {
        let e = () => {
            (0, o.flushSync)(() => {
                x(!0), (0, g.default)()
            }), setImmediate(() => {
                i.A.logout("settings")
            })
        };
        return d._.subscribe(j.jej.SETTINGS_TRIGGER_LOGOUT, e), () => {
            d._.unsubscribe(j.jej.SETTINGS_TRIGGER_LOGOUT, e)
        }
    }, []), v) ? null : (0, r.jsx)(s.A, function(e) {
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
        sidebarFooter: f.A,
        onPanelChange: e => {
            let t = (0, h.getUserSettingsSectionsByWebUserSettings)().get(e);
            null != t && (_({
                destinationPanel: t,
                originPanel: b.current
            }), b.current = t)
        },
        target: t,
        defaultTarget: p.X.ACCOUNT_PANEL,
        searchQuery: a,
        onSearchChange: O
    }, n))
}

function S() {
    return (0, r.jsxs)("div", {
        className: v.t,
        children: [(0, r.jsx)(a.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: O.intl.string(O.t.zihbmv)
        }), (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: O.intl.string(O.t.XclvsB)
        })]
    })
}