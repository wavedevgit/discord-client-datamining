/** chunk id: 729904, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(667532);
var i = n(311907),
    r = n(73153),
    l = n(463347),
    s = n(824865),
    a = n(334465),
    o = n(545167),
    c = n(652215);
let d = [c.BVt.CHANNEL_THREAD_VIEW(l.pv.guildId(), l.pv.channelId({
        optional: !0
    }), ":threadId", ":messageId?"), c.BVt.CHANNEL(l.pv.guildId(), l.pv.channelId({
        optional: !0
    }), ":messageId?"), c.BVt.VOICE_CHAT_CHANNEL_PARTIAL(l.pv.guildId(), l.pv.channelId({
        optional: !0
    }), ":messageId?"), c.BVt.CHANNELS_GAME_SHOP(l.pv.guildId(), ":pageIndex", ":skuId?", ":slug?"), c.BVt.FRIENDS, c.BVt.ME, c.BVt.MESSAGE_REQUESTS, c.BVt.GUILD_DISCOVERY, c.BVt.APPLICATION_STORE, c.BVt.COLLECTIBLES_SHOP, c.BVt.USERS(":userId"), c.BVt.GUILD_DISCOVERY, c.BVt.GLOBAL_DISCOVERY, c.BVt.QUEST_HOME_DEPRECATED, c.BVt.QUEST_HOME, c.BVt.GLOBAL_DISCOVERY_SERVERS, c.BVt.GLOBAL_DISCOVERY_APPS],
    u = [],
    h = 0,
    C = !!(null != window && "navigation" in window) && (window.navigation.canGoBack ?? !1),
    E = !!(null != window && "navigation" in window) && (window.navigation.canGoForward ?? !1);

function A() {
    "navigation" in window && (C = window.navigation.canGoBack ?? !1, E = window.navigation.canGoForward ?? !1)
}
class _ extends i.Ay.Store {
    static displayName = "BackForwardNavStore";
    initialize() {
        u = [], h = 0
    }
    get pastPlaces() {
        return u
    }
    get canGoBack() {
        return (0, o.v)({
            location: "canGoBackForward"
        }) ? h < u.length - 1 : C
    }
    get canGoForward() {
        return (0, o.v)({
            location: "canGoBackForward"
        }) ? h > 0 : E
    }
    get backDestination() {
        return this.canGoBack ? u[h + 1] : null
    }
    get forwardDestination() {
        return this.canGoForward ? u[h - 1] : null
    }
}
let g = new _(r.h, {
    ROUTE_CHANGED: function(e) {
        let {
            location: t,
            action: n
        } = e;
        if (A(), "POP" === n) {
            let e = u.findIndex(e => e.path === t.pathname);
            if (-1 !== e) {
                h = e;
                return
            }
        }
        if (t.source === s.A.USER_NAVIGATED_BACK) {
            h < u.length - 1 && h++;
            return
        }
        if (t.source === s.A.USER_NAVIGATED_FORWARD) {
            h > 0 && h--;
            return
        }
        let {
            pathname: i
        } = t, r = (0, a.B)(i, d);
        if (null != r) {
            if ("REPLACE" === n && u.length > 0) {
                u[h] = {
                    path: i,
                    params: r.params
                };
                return
            }
            if (u.length > 0) {
                if (i === u[h].path) return;
                let e = u.findIndex(e => e.path === i); - 1 !== e && (u.splice(e, 1), h >= e && (h -= 1))
            }
            for (h > 0 && function(e, t) {
                    if (t < 0 || t >= e.length) throw RangeError("index out of bounds");
                    let n = 0,
                        i = t;
                    for (; n < i;)[e[n], e[i]] = [e[i], e[n]], n++, i--
                }(u, h), h = 0; u.length > 20;) u.pop();
            u.unshift({
                path: i,
                params: r.params
            })
        }
    },
    LOGOUT: function() {
        u = [], h = 0, A()
    }
})