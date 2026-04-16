/** chunk id: 704554 params = (module,exports,require) **/
n.d(t, {
    RT: () => d
}), n(323874), n(14289), n(35956);
var i = n(64700),
    r = n(812729),
    l = n.n(r),
    s = n(735438),
    a = n(403362),
    o = n(379078);
let u = new Worker(new URL("/assets/" + n.u("83450"), n.b));

function d(e, t, n, r) {
    let d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        c = i.useRef(null),
        h = i.useRef(null),
        g = i.useRef(n),
        {
            searchStringGenerator: m
        } = r,
        f = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, r] = i.useState(e),
                s = i.useRef(e);
            return i.useEffect(() => {
                s.current = e
            }, [e]), i.useEffect(() => {
                r(e => {
                    let t = s.current;
                    return l()(e, t) ? e : t
                })
            }, t), n
        }(t.map(m), [t, m, ...d]),
        A = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, r] = i.useState(e),
                s = i.useRef(e);
            return i.useEffect(() => {
                s.current = e
            }, [e]), i.useEffect(() => {
                r(e => {
                    let t = s.current;
                    return l()(e, t) ? e : t
                })
            }, t), n
        }(t, [t]);
    i.useEffect(() => {
        g.current = n
    }, [n]);
    let I = i.useMemo(() => {
        let {
            throttleMs: e = 200,
            throttleLeading: t = !0,
            throttleTrailing: n = !0,
            maxSearchResults: i = -1
        } = r;
        return h.current = (0, s.throttle)(async (e, t, n) => {
            if ("" === e.trim()) return void(i > 0 ? g.current(t.slice(0, i)) : g.current(t));
            c.current = (0, s.uniqueId)();
            let l = await
            function(e, t, n, i) {
                let r = i.promiseUuid ?? (0, s.uniqueId)(),
                    {
                        searchType: l = o.n.FUZZY,
                        sortType: d = o.r.NONE,
                        jaroWinklerSearchThreshold: c = .85,
                        maxSearchResults: h = -1
                    } = i;
                return new Promise(i => {
                    let s = t => {
                        let {
                            data: {
                                id: n,
                                foundItemIndexes: l
                            }
                        } = t;
                        r === n && (i(l.map(t => e[t]).filter(a.Vq)), u?.removeEventListener("message", s))
                    };
                    u?.addEventListener("message", s), u?.postMessage({
                        id: r,
                        searchTerm: t,
                        searchStrings: n,
                        searchType: l,
                        sortType: d,
                        jaroWinklerSearchThreshold: c,
                        maxSearchResults: h
                    })
                })
            }(t, e, n, {
                promiseUuid: c.current,
                ...r
            });
            null != c.current && g.current(l)
        }, e, {
            leading: t,
            trailing: n
        }), h.current
    }, [r]);
    return i.useEffect(() => {
        I(e, A, f)
    }, [I, e, A, f, ...d]), i.useEffect(() => () => {
        null != h.current && h.current.cancel(), h.current = null, c.current = null
    }, [f, n, r]), I
}