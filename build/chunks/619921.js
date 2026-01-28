/** Chunk was on 5606 **/
/** chunk id: 619921, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r, i, l, s, a, o = n(311907),
    c = n(73153),
    d = n(734057),
    u = n(650048),
    p = n(71393),
    _ = n(309010),
    m = n(645959),
    g = n(652215);
let f = (null != (i = null == (s = window) || null == (l = s.location) ? void 0 : l.pathname) ? i : "").startsWith(g.BVt.ACTIVITIES) ? g.BVt.ACTIVITIES : null;

function b(e) {
    let {
        link: t
    } = e;
    if (f === t) return !1;
    f = t
}
class h extends(a = o.Ay.Store) {
    initialize() {
        this.waitFor(u.A, m.A, _.A, p.A, d.A)
    }
    getHomeLink() {
        return null != f ? f : u.A.fallbackRoute
    }
}(r = "displayName") in h ? Object.defineProperty(h, r, {
    value: "AppViewStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : h[r] = "AppViewStore";
let A = new h(c.h, {
    OVERLAY_INITIALIZE: function() {
        let e = m.A.getPrivateChannelIds(),
            t = _.A.getChannelId(g.ME);
        (null != t || null != e[0]) && (f = g.BVt.CHANNEL(g.ME, null != t ? t : e[0]))
    },
    APP_VIEW_SET_HOME_LINK: b,
    APPLICATION_STORE_LOCATION_CHANGE: function(e) {
        let {
            location: t
        } = e;
        b({
            link: t.pathname,
            type: "APP_VIEW_SET_HOME_LINK"
        })
    },
    APPLICATION_STORE_RESET_NAVIGATION: function() {
        if (null == f || !f.startsWith(g.BVt.APPLICATION_STORE)) return !1;
        f = g.BVt.APPLICATION_STORE
    },
    CHANNEL_SELECT: function(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        if (null == t && null != n) {
            let e = g.BVt.CHANNEL(g.ME, n);
            if (e !== f) return f = e, !0
        }
        return !1
    },
    CHANNEL_DELETE: function(e) {
        let {
            channel: t
        } = e;
        null == t.guild_id && null != t.id && null != f && f === g.BVt.CHANNEL(g.ME, t.id) && (f = null)
    }
})