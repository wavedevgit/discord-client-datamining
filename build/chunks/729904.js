/** chunk id: 729904, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => g
}), i(667532);
var n = i(311907),
    r = i(73153),
    l = i(463347),
    a = i(824865),
    s = i(334465),
    o = i(545167),
    c = i(652215);
let d = [c.BVt.CHANNEL_THREAD_VIEW(l.pv.guildId(), l.pv.channelId({
        optional: !0
    }), ":threadId", ":messageId?"), c.BVt.CHANNEL(l.pv.guildId(), l.pv.channelId({
        optional: !0
    }), ":messageId?"), c.BVt.VOICE_CHAT_CHANNEL_PARTIAL(l.pv.guildId(), l.pv.channelId({
        optional: !0
    }), ":messageId?"), c.BVt.CHANNELS_GAME_SHOP(l.pv.guildId(), ":pageIndex", ":skuId?", ":slug?"), c.BVt.NOTIFICATIONS, c.BVt.FRIENDS, c.BVt.ME, c.BVt.MESSAGE_REQUESTS, c.BVt.GUILD_DISCOVERY, c.BVt.APPLICATION_STORE, c.BVt.COLLECTIBLES_SHOP, c.BVt.USERS(":userId"), c.BVt.GUILD_DISCOVERY, c.BVt.GLOBAL_DISCOVERY, c.BVt.QUEST_HOME, c.BVt.QUEST_HOME_V2, c.BVt.GLOBAL_DISCOVERY_SERVERS, c.BVt.GLOBAL_DISCOVERY_APPS],
    u = [],
    h = 0,
    C = !!(null != window && "navigation" in window) && (window.navigation.canGoBack ?? !1),
    E = !!(null != window && "navigation" in window) && (window.navigation.canGoForward ?? !1);
class A extends n.Ay.Store {
    static displayName = "BackForwardNavStore";
    initialize() {
        u = [], h = 0
    }
    get pastPlaces() {
        return u
    }
    get canGoBack() {
        return (0, o.vY)({
            location: "canGoBackForward"
        }) ? h < u.length - 1 : C
    }
    get canGoForward() {
        return (0, o.vY)({
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
let g = new A(r.h, {
    ROUTE_CHANGED: function(e) {
        let {
            location: t,
            action: i
        } = e;
        if ("navigation" in window && (C = window.navigation.canGoBack ?? !1, E = window.navigation.canGoForward ?? !1), "POP" === i) {
            let e = u.findIndex(e => e.path === t.pathname);
            if (-1 !== e) {
                h = e;
                return
            }
        }
        if (t.source === a.A.USER_NAVIGATED_BACK) {
            h < u.length - 1 && h++;
            return
        }
        if (t.source === a.A.USER_NAVIGATED_FORWARD) {
            h > 0 && h--;
            return
        }
        let {
            pathname: n
        } = t, r = (0, s.B)(n, d);
        if (null != r) {
            if ("REPLACE" === i && u.length > 0) {
                u[h] = {
                    path: n,
                    params: r.params
                };
                return
            }
            if (u.length > 0) {
                if (n === u[h].path) return;
                let e = u.findIndex(e => e.path === n); - 1 !== e && (u.splice(e, 1), h >= e && (h -= 1))
            }
            for (h > 0 && function(e, t) {
                    if (t < 0 || t >= e.length) throw RangeError("index out of bounds");
                    let i = 0,
                        n = t;
                    for (; i < n;)[e[i], e[n]] = [e[n], e[i]], i++, n--
                }(u, h), h = 0; u.length > 20;) u.pop();
            u.unshift({
                path: n,
                params: r.params
            })
        }
    }
})