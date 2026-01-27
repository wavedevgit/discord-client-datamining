/** Chunk was on 39048 **/
/** chunk id: 268075, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    k: () => g
});
var r = n(627968),
    i = n(64700),
    l = n(835245),
    s = n(311907),
    a = n(508675),
    o = n(624793),
    c = n(767143),
    d = n(498642),
    u = n(818348);

function g(e) {
    let {
        guild: t,
        discoverableGuild: n
    } = e, g = null == t ? void 0 : t.id, {
        memberCount: m,
        onlineCount: p
    } = (0, s.cf)([d.A], () => {
        var e, t;
        return {
            memberCount: null != (e = d.A.getMemberCount(g)) ? e : 1234,
            onlineCount: null != (t = d.A.getOnlineCount(g)) ? t : 1234
        }
    }, [g]), f = i.useRef((0, l.A)()), h = i.useMemo(() => {
        var e, r;
        if (null != n) return o.GO.createFromDiscoverableGuild(n);
        if (null == t) return null;
        let i = a.Ay.getGuildEmoji(t.id);
        return o.GO.createFromDiscoverableGuild((e = function(e) {
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
        }({}, t), r = r = {
            premiumSubscriptionCount: null == t ? void 0 : t.premiumSubscriberCount,
            emojis: i,
            emojiCount: i.length,
            presenceCount: p,
            memberCount: m
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }), e))
    }, [n, t, m, p]), b = i.useMemo(() => {
        var e;
        let t = null == h || null == (e = h.emojis) ? void 0 : e[0];
        return null != t ? {
            name: t.require_colons ? ":".concat(t.name, ":") : t.name,
            emojiId: t.id,
            animated: t.animated,
            jumboable: !0
        } : {}
    }, [null == h ? void 0 : h.emojis]);
    return null != h && h.isDiscoverable() ? (0, r.jsx)(c.sX, {
        sourceType: o.rV.GUILD,
        expressionSourceApplication: null,
        expressionSourceGuild: h,
        node: b,
        closePopout: u.tE,
        nonce: f.current,
        demoMode: !0
    }) : null
}