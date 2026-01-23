/** Chunk was on web.js **/
/** chunk id: 650724, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    D: () => v
});
var r = n(64700),
    i = n(417597),
    a = n(717125),
    s = n(376943),
    o = n(961350),
    l = n(734057),
    c = n(696451),
    u = n(71393),
    d = n(967198),
    f = n(287809),
    p = n(36491),
    _ = n(219444),
    h = n(752755),
    m = n(461715),
    g = n(652215);

function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            E(e, t, n[t])
        })
    }
    return e
}

function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function O(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function v(e, t) {
    let n = (0, _.$k)(),
        E = (0, m.CI)(e),
        b = (0, i.bG)([c.Ay, o.default], () => {
            let e = o.default.getId();
            return c.Ay.isMember(null == E ? void 0 : E.guildId, e)
        }, [E]),
        v = (0, i.bG)([a.A], () => null != E && (null == E ? void 0 : E.channelId) != null && a.A.isChannelGated(E.guildId, E.channelId), [E]),
        A = t.hasFlag(g.pr7.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: I,
            guild: S,
            parentChannel: T,
            user: C,
            selectedGuildId: N,
            canAccess: w
        } = (0, i.cf)([h.A, u.A, l.A, f.default, d.A], () => {
            var e;
            let t = null == (e = h.A.getMediaPostEmbed(null == E ? void 0 : E.threadId)) ? void 0 : e.media,
                n = u.A.getGuild(null == E ? void 0 : E.guildId),
                r = l.A.getChannel(null == E ? void 0 : E.channelId),
                i = f.default.getUser(null == t ? void 0 : t.author_id),
                a = d.A.getGuildId(),
                o = null != r && (0, s.nc)(r);
            return {
                rawMediaPostEmbedData: t,
                guild: n,
                parentChannel: r,
                user: i,
                selectedGuildId: a,
                canAccess: o
            }
        }, [E]),
        R = r.useMemo(() => {
            let e = (0, m.tU)({
                mediaPostEmbedData: I,
                guild: S,
                parentChannel: T,
                user: C,
                selectedGuildId: N,
                canAccess: w
            });
            return null == e ? null : O(y({}, e), {
                user: C
            })
        }, [I, S, T, C, N, w]);
    return r.useEffect(() => {
        if ((null == E ? void 0 : E.threadId) != null) {
            let e = h.A.getEmbedFetchState(E.threadId);
            !0 !== n || e !== h.e.NOT_FETCHED || b && !1 === v || !b && A || (0, p.O0)(null == E ? void 0 : E.threadId)
        }
    }, [E, n, b, v, A]), R
}