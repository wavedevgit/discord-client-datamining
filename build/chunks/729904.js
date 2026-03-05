/** chunk id: 729904, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(667532);
var i = n(311907),
    a = n(73153),
    r = n(463347),
    l = n(824865),
    s = n(334465),
    o = n(545167),
    c = n(652215);
let d = [c.BVt.CHANNEL_THREAD_VIEW(r.pv.guildId(), r.pv.channelId({
        optional: !0
    }), ":threadId", ":messageId?"), c.BVt.CHANNEL(r.pv.guildId(), r.pv.channelId({
        optional: !0
    }), ":messageId?"), c.BVt.VOICE_CHAT_CHANNEL_PARTIAL(r.pv.guildId(), r.pv.channelId({
        optional: !0
    }), ":messageId?"), c.BVt.CHANNELS_GAME_SHOP(r.pv.guildId(), ":pageIndex", ":skuId?", ":slug?"), c.BVt.FRIENDS, c.BVt.ME, c.BVt.MESSAGE_REQUESTS, c.BVt.GUILD_DISCOVERY, c.BVt.APPLICATION_STORE, c.BVt.COLLECTIBLES_SHOP, c.BVt.USERS(":userId"), c.BVt.GUILD_DISCOVERY, c.BVt.GLOBAL_DISCOVERY, c.BVt.QUEST_HOME_DEPRECATED, c.BVt.QUEST_HOME, c.BVt.GLOBAL_DISCOVERY_SERVERS, c.BVt.GLOBAL_DISCOVERY_APPS],
    u = [],
    _ = 0,
    h = !!(null != window && "navigation" in window) && (window.navigation.canGoBack ?? !1),
    C = !!(null != window && "navigation" in window) && (window.navigation.canGoForward ?? !1);

function g() {
    "navigation" in window && (h = window.navigation.canGoBack ?? !1, C = window.navigation.canGoForward ?? !1)
}
class A extends i.Ay.Store {
    static displayName = "BackForwardNavStore";
    initialize() {
        u = [], _ = 0
    }
    get pastPlaces() {
        return u
    }
    get canGoBack() {
        return (0, o.v)({
            location: "canGoBackForward"
        }) ? _ < u.length - 1 : h
    }
    get canGoForward() {
        return (0, o.v)({
            location: "canGoBackForward"
        }) ? _ > 0 : C
    }
    get backDestination() {
        return this.canGoBack ? u[_ + 1] : null
    }
    get forwardDestination() {
        return this.canGoForward ? u[_ - 1] : null
    }
}
let E = new A(a.h, {
    ROUTE_CHANGED: function(e) {
        let {
            location: t,
            action: n
        } = e;
        if (g(), "POP" === n) {
            let e = u.findIndex(e => e.path === t.pathname);
            if (-1 !== e) {
                _ = e;
                return
            }
        }
        if (t.source === l.A.USER_NAVIGATED_BACK) {
            _ < u.length - 1 && _++;
            return
        }
        if (t.source === l.A.USER_NAVIGATED_FORWARD) {
            _ > 0 && _--;
            return
        }
        let {
            pathname: i
        } = t, a = (0, s.B)(i, d);
        if (null != a) {
            if ("REPLACE" === n && u.length > 0) {
                u[_] = {
                    path: i,
                    params: a.params
                };
                return
            }
            if (u.length > 0) {
                if (i === u[_].path) return;
                let e = u.findIndex(e => e.path === i); - 1 !== e && (u.splice(e, 1), _ >= e && (_ -= 1))
            }
            for (_ > 0 && function(e, t) {
                    if (t < 0 || t >= e.length) throw RangeError("index out of bounds");
                    let n = 0,
                        i = t;
                    for (; n < i;)[e[n], e[i]] = [e[i], e[n]], n++, i--
                }(u, _), _ = 0; u.length > 20;) u.pop();
            u.unshift({
                path: i,
                params: a.params
            })
        }
    },
    LOGOUT: function() {
        u = [], _ = 0, g()
    }
})