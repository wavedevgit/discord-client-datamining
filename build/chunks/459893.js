/** Chunk was on 86142 **/
/** chunk id: 459893, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
}), n(896048), n(747238), n(492834);
var r = n(627968),
    i = n(64700),
    s = n(492462),
    l = n(960488),
    a = n(311907),
    o = n(830215),
    c = n(6981),
    u = n(964486),
    d = n(351671),
    h = n(463347),
    p = n(976860),
    g = n(961350),
    f = n(129851),
    _ = n(652215),
    m = n(746080);

function A(e) {
    var t, n;
    let A = i.useCallback(t => {
            var n, r;
            let i; + ((null == (i = (0, l.B6)(t, {
                path: _.BVt.CHANNEL(h.pv.guildId(), h.pv.channelId())
            })) || null == (n = i.params) ? void 0 : n.channelId) !== m.VV.ROLE_SUBSCRIPTIONS) ? (null != (r = e.transitionTo) ? r : p.pX)(t) : p.bG(t)
        }, [e.transitionTo]),
        {
            isAuthenticated: x,
            loginStatus: E
        } = (0, a.cf)([g.default], () => ({
            isAuthenticated: g.default.isAuthenticated(),
            loginStatus: g.default.getLoginStatus()
        })),
        {
            location: v,
            redirectTo: y
        } = e,
        [b, j] = i.useState(x);

    function O(e) {
        let {
            handoffKey: t,
            handoffToken: n,
            handoffSource: r
        } = e;
        (0, c.Qh)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: r
        }), j(!1)
    }
    return ((0, u.Ay)(() => {
        if (null != v) {
            let {
                handoff_key: e,
                handoff_token: t
            } = (0, s.parse)(v.search);
            if (null != e && null != t) {
                let n = null != y ? (0, d.Q)(y) : void 0;
                b ? o.A.logout("handoff", null).finally(() => {
                    O({
                        handoffKey: e,
                        handoffToken: t,
                        handoffSource: n
                    })
                }) : O({
                    handoffKey: e,
                    handoffToken: t,
                    handoffSource: n
                })
            }
        }
    }), b || E === _.aUe.LOGGING_IN) ? (0, r.jsx)(f.Z, {}) : (0, r.jsx)(f.A, (t = function(e) {
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
    }({}, e), n = n = {
        transitionTo: A
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
}