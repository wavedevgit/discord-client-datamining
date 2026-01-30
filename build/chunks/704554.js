/** chunk id: 704554, original params: e,t,r (module,exports,require) **/
r.d(t, {
    RT: () => i
}), r(896048), r(693327), r(554719), r(680155), r(323874), r(14289), r(35956), r(733351);
var n = r(64700),
    u = r(812729),
    c = r.n(u),
    l = r(735438),
    s = r(403362),
    o = r(379078);
let a = new Worker(new URL("/assets/" + r.u("83450"), r.b));

function i(e, t, r, u) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        d = n.useRef(null),
        f = n.useRef(null),
        p = n.useRef(r),
        {
            searchStringGenerator: m
        } = u,
        g = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [r, u] = n.useState(e),
                l = n.useRef(e);
            return n.useEffect(() => {
                l.current = e
            }, [e]), n.useEffect(() => {
                u(e => {
                    let t = l.current;
                    return c()(e, t) ? e : t
                })
            }, t), r
        }(t.map(m), [t, m, ...i]),
        E = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [r, u] = n.useState(e),
                l = n.useRef(e);
            return n.useEffect(() => {
                l.current = e
            }, [e]), n.useEffect(() => {
                u(e => {
                    let t = l.current;
                    return c()(e, t) ? e : t
                })
            }, t), r
        }(t, [t]);
    n.useEffect(() => {
        p.current = r
    }, [r]);
    let h = n.useMemo(() => {
        let {
            throttleMs: e = 200,
            throttleLeading: t = !0,
            throttleTrailing: r = !0,
            maxSearchResults: n = -1
        } = u;
        return f.current = (0, l.throttle)(async (e, t, r) => {
            if ("" === e.trim()) return void(n > 0 ? p.current(t.slice(0, n)) : p.current(t));
            d.current = (0, l.uniqueId)();
            let c = await
            function(e, t, r, n) {
                var u;
                let c = null != (u = n.promiseUuid) ? u : (0, l.uniqueId)(),
                    {
                        searchType: i = o.n.FUZZY,
                        sortType: d = o.r.NONE,
                        jaroWinklerSearchThreshold: f = .85,
                        maxSearchResults: p = -1
                    } = n;
                return new Promise(n => {
                    let u = t => {
                        let {
                            data: {
                                id: r,
                                foundItemIndexes: l
                            }
                        } = t;
                        c === r && (n(l.map(t => e[t]).filter(s.Vq)), null == a || a.removeEventListener("message", u))
                    };
                    null == a || a.addEventListener("message", u), null == a || a.postMessage({
                        id: c,
                        searchTerm: t,
                        searchStrings: r,
                        searchType: i,
                        sortType: d,
                        jaroWinklerSearchThreshold: f,
                        maxSearchResults: p
                    })
                })
            }(t, e, r, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }({
                promiseUuid: d.current
            }, u));
            null != d.current && p.current(c)
        }, e, {
            leading: t,
            trailing: r
        }), f.current
    }, [u]);
    return n.useEffect(() => {
        h(e, E, g)
    }, [h, e, E, g, ...i]), n.useEffect(() => () => {
        null != f.current && f.current.cancel(), f.current = null, d.current = null
    }, [g, r, u]), h
}