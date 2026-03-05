/** chunk id: 619921 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(311907),
    r = n(73153),
    a = n(734057),
    s = n(650048),
    l = n(71393),
    o = n(309010),
    d = n(645959),
    _ = n(652215);
let c = (window?.location?.pathname ?? "").startsWith(_.BVt.ACTIVITIES) ? _.BVt.ACTIVITIES : null;

function u(e) {
    let {
        link: t
    } = e;
    if (c === t) return !1;
    c = t
}
class A extends i.Ay.Store {
    static displayName = "AppViewStore";
    initialize() {
        this.waitFor(s.A, d.default, o.A, l.A, a.A)
    }
    getHomeLink() {
        return c ?? s.A.fallbackRoute
    }
}
let I = new A(r.h, {
    OVERLAY_INITIALIZE: function() {
        let e = d.default.getPrivateChannelIds(),
            t = o.A.getChannelId(_.ME);
        (null != t || null != e[0]) && (c = _.BVt.CHANNEL(_.ME, t ?? e[0]))
    },
    APP_VIEW_SET_HOME_LINK: u,
    APPLICATION_STORE_LOCATION_CHANGE: function(e) {
        let {
            location: t
        } = e;
        u({
            link: t.pathname,
            type: "APP_VIEW_SET_HOME_LINK"
        })
    },
    APPLICATION_STORE_RESET_NAVIGATION: function() {
        if (null == c || !c.startsWith(_.BVt.APPLICATION_STORE)) return !1;
        c = _.BVt.APPLICATION_STORE
    },
    CHANNEL_SELECT: function(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        if (null == t && null != n) {
            let e = _.BVt.CHANNEL(_.ME, n);
            if (e !== c) return c = e, !0
        }
        return !1
    },
    CHANNEL_DELETE: function(e) {
        let {
            channel: t
        } = e;
        null == t.guild_id && null != t.id && null != c && c === _.BVt.CHANNEL(_.ME, t.id) && (c = null)
    }
})