/** chunk id: 412461, original params: e,t,n (module,exports,require) **/
n.d(t, {
    DB: () => p,
    TR: () => u,
    dG: () => m,
    jL: () => h
}), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956), n(747238);
var r = n(323125),
    l = n(311907),
    i = n(976860),
    a = n(961350),
    s = n(287809),
    o = n(954571),
    c = n(310419),
    d = n(652215);

function u(e, t) {
    var n, r, l;
    let i = c.h.getField("sessionId"),
        a = c.h.getField("guildId"),
        d = null == (n = c.h.getField("entrypoint")) ? void 0 : n.name,
        u = s.default.getCurrentUser(),
        p = (r = function(e) {
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
        }({}, t), l = l = {
            guild_id: a,
            directory_session_id: i,
            source: d,
            user_id: null == u ? void 0 : u.id
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(l)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r);
    return o.default.track(e, p)
}

function p() {
    return (0, l.bG)([a.default], () => a.default.isAuthenticated())
}

function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let n in e) {
        let r = e[n];
        t.searchParams.set(n, r)
    }
    let n = t.pathname + t.search,
        l = (0, r.T2)(n, !1);
    (0, i.pX)(l)
}

function m() {
    let e = new URL(location.href),
        t = "?redirect_to=".concat(encodeURIComponent(e.pathname + e.search));
    (0, i.pX)(d.BVt.REGISTER + t)
}