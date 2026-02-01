/** chunk id: 883662, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    o = n(64700),
    a = n(311907),
    i = n(521489),
    l = n(397927),
    c = n(775602),
    s = n(531685),
    u = n(203982),
    _ = n(418829),
    d = n(652215);

function b(e) {
    var t, n;
    let {
        partialRoot: b,
        target: p,
        defaultTarget: f,
        onPanelChange: y,
        sidebarFooter: g,
        emptyState: m,
        searchQuery: O,
        onSearchChange: h
    } = e, j = function(e, t) {
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
    }(e, ["partialRoot", "target", "defaultTarget", "onPanelChange", "sidebarFooter", "emptyState", "searchQuery", "onSearchChange"]), [x, v] = o.useState(!1), [S, C] = o.useState(1.4), P = o.useRef(null), w = (0, a.bG)([c.A], () => c.A.useReducedMotion), k = (0, a.bG)([s.A], () => s.A.isFocused());
    return o.useEffect(() => {
        let e = e => {
            let {
                intensity: t,
                duration: n
            } = e;
            !w && k && (v(!0), C(null != t ? t : 1.4), clearTimeout(P.current), P.current = setTimeout(() => v(!1), null != n ? n : 1e3))
        };
        return u._.subscribe(d.jej.SHAKE_SETTINGS_MODAL, e), () => {
            u._.unsubscribe(d.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(P.current)
        }
    }, [w, k]), (0, r.jsx)(l.bfh, {
        isShaking: x,
        intensity: S,
        children: (0, r.jsx)(i.N, (t = function(e) {
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
        }({}, j), n = n = {
            children: (0, r.jsx)(_.A, {
                onClose: j.onClose,
                partialRoot: b,
                target: p,
                defaultTarget: f,
                onPanelChange: y,
                emptyState: m,
                sidebarFooter: g,
                searchQuery: O,
                onSearchChange: h
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
    })
}