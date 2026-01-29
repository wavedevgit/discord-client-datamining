/** Chunk was on 59024 **/
/** chunk id: 883662, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(896048);
var r = n(627968),
    l = n(64700),
    o = n(311907),
    a = n(521489),
    i = n(397927),
    c = n(775602),
    s = n(531685),
    u = n(203982),
    d = n(418829),
    b = n(652215);

function y(e) {
    var t, n;
    let {
        partialRoot: y,
        target: p,
        defaultTarget: f,
        onPanelChange: g,
        sidebarFooter: m,
        emptyState: h,
        searchQuery: j,
        onSearchChange: O
    } = e, v = function(e, t) {
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
    }(e, ["partialRoot", "target", "defaultTarget", "onPanelChange", "sidebarFooter", "emptyState", "searchQuery", "onSearchChange"]), [_, x] = l.useState(!1), [S, P] = l.useState(1.4), w = l.useRef(null), C = (0, o.bG)([c.A], () => c.A.useReducedMotion), A = (0, o.bG)([s.A], () => s.A.isFocused());
    return l.useEffect(() => {
        let e = e => {
            let {
                intensity: t,
                duration: n
            } = e;
            !C && A && (x(!0), P(null != t ? t : 1.4), clearTimeout(w.current), w.current = setTimeout(() => x(!1), null != n ? n : 1e3))
        };
        return u._.subscribe(b.jej.SHAKE_SETTINGS_MODAL, e), () => {
            u._.unsubscribe(b.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(w.current)
        }
    }, [C, A]), (0, r.jsx)(i.bfh, {
        isShaking: _,
        intensity: S,
        children: (0, r.jsx)(a.N, (t = function(e) {
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
        }({}, v), n = n = {
            children: (0, r.jsx)(d.A, {
                onClose: v.onClose,
                partialRoot: y,
                target: p,
                defaultTarget: f,
                onPanelChange: g,
                emptyState: h,
                sidebarFooter: m,
                searchQuery: j,
                onSearchChange: O
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