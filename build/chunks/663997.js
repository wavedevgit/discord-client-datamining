/** Chunk was on 41727 **/
/** chunk id: 663997, original params: e,t,n (module,exports,require) **/
n.d(t, {
    K: () => d,
    L: () => u
}), n(896048);
var r = n(64700),
    l = n(989349),
    i = n.n(l),
    s = n(198982),
    a = n(661191),
    o = n(624458),
    c = n(513461);
let u = 100;

function d(e) {
    let {
        guildId: t,
        guildJoinRequests: n
    } = e, l = r.useRef(!1), [d, p] = r.useState(null), h = r.useRef(null), f = r.useRef(!1);
    return {
        fetchNextPage: r.useCallback(async (e, r) => {
            if (l.current) return;
            let g = "".concat(e, "-").concat(r),
                m = !1;
            if (g !== h.current && (h.current = g, f.current = !1, m = !0), f.current) return;
            null != d && p(null);
            let b = function(e, t, n, r) {
                let l = n === c.B5.SUBMITTED;
                if (t === c._e.TIMESTAMP_DESC)
                    if (r) return {
                        before: a.default.fromTimestamp(new Date().getTime())
                    };
                    else {
                        let t = e[e.length - 1];
                        return {
                            before: l ? t.joinRequestId : t.actionedAt
                        }
                    } if (r) return {
                    after: a.default.fromTimestamp(i()().subtract(180, "days").valueOf())
                };
                {
                    let t = e[e.length - 1];
                    return {
                        after: l ? t.joinRequestId : t.actionedAt
                    }
                }
            }(n, e, r, m);
            try {
                l.current = !0;
                let e = await o.A.fetchGuildJoinRequests(function(e) {
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
                    guildId: t,
                    status: r,
                    limit: u,
                    force: !0
                }, b));
                if (null != e) {
                    let {
                        guild_join_requests: t
                    } = e.body;
                    t.length < u && (f.current = !0)
                }
            } catch (e) {
                p(new s.LG(e).getAnyErrorMessage())
            } finally {
                l.current = !1
            }
        }, [d, t, n]),
        error: d
    }
}