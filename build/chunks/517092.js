/** chunk id: 517092, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => D
}), n(896048), n(938796);
var r, l = n(665260),
    i = n(311907),
    s = n(73153),
    a = n(961350),
    o = n(734057),
    c = n(71393),
    u = n(309010),
    d = n(543465),
    h = n(927813),
    p = n(661191),
    g = n(887560),
    f = n(652215),
    m = n(790782),
    b = n(355097);

function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let y = [{
        timeSinceJoin: +h.A.Millis.HOUR,
        sends: 1,
        viewTime: +h.A.Millis.MINUTE
    }, {
        timeSinceJoin: +h.A.Millis.DAY,
        sends: 2,
        viewTime: 2 * h.A.Millis.MINUTE
    }, {
        timeSinceJoin: +h.A.Millis.WEEK,
        sends: 5,
        viewTime: 5 * h.A.Millis.MINUTE
    }, {
        timeSinceJoin: +h.A.Millis.DAYS_30,
        sends: 10,
        viewTime: 30 * h.A.Millis.MINUTE
    }],
    O = 5 * y[y.length - 1].viewTime,
    _ = h.A.Millis.WEEK,
    j = {
        channels: {}
    },
    x = new Set,
    v = null,
    E = 0,
    C = 0;

function S() {
    if (null == v || !T(v)) return !1;
    let e = N(v);
    if (e.lastActionTime > Date.now() - h.A.Millis.DAY && e.viewDuration > O) return !1;
    let t = Date.now();
    e.lastActionTime = t, e.viewDuration += t - E, E = t
}

function I() {
    return 0 !== C && (clearInterval(C), C = 0), d.Ay.useNewNotifications && (C = setInterval(() => {
        S() && R.emitChange()
    }, 15 * h.A.Millis.SECOND)), !1
}

function N(e) {
    return e in j.channels || (j.channels[e] = {
        lastActionTime: 0,
        viewDuration: 0,
        numSends: 0
    }), j.channels[e]
}

function T(e) {
    if (!d.Ay.useNewNotifications || x.has(e)) return !1;
    let t = o.A.getBasicChannel(e);
    if (null == t || null == t.guild_id || d.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) || P(t.guild_id, t.id) || P(t.guild_id, t.parent_id)) return !1;
    let n = d.Ay.resolveUnreadSetting(t);
    return d.Ay.getChannelUnreadSetting(t.guild_id, t.id) === m.e.UNSET && n !== m.e.ALL_MESSAGES
}

function P(e, t) {
    if (null == t) return !1;
    let n = d.Ay.getChannelOverrides(e)[t];
    return null != n && !!(null != n.message_notifications && n.message_notifications !== f.orn.NULL || null != n.flags && (0, l.br)(n.flags, b.vv.UNREADS_ALL_MESSAGES | b.vv.UNREADS_ONLY_MENTIONS))
}
class w extends(r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && (j.channels = e.channels), this.syncWith([d.Ay], I), this.waitFor(a.default, o.A, c.A, u.A, d.Ay)
    }
    getState() {
        return j
    }
    getLastActionTime(e) {
        var t, n;
        return null != (t = null == (n = j.channels[e]) ? void 0 : n.lastActionTime) ? t : 0
    }
    maybeAutoUpgradeChannel(e) {
        if (!T(e)) return !1;
        let t = o.A.getBasicChannel(e);
        return null != t && null != t.guild_id && !! function(e) {
            var t;
            let n = c.A.getGuild(e.guild_id),
                r = null != (t = null == n ? void 0 : n.joinedAt) ? t : new Date,
                l = Math.min(p.default.age(e.id), Date.now() - r.getTime()),
                i = j.channels[e.id];
            if (null == i || i.lastActionTime < Date.now() - _) return !1;
            for (let e of y)
                if (l < e.timeSinceJoin && (i.numSends >= e.sends || i.viewDuration >= e.viewTime)) return !0;
            return !1
        }(t) && (delete j.channels[e], x.add(e), (0, g.mA)(t.guild_id, t.id, m.e.ALL_MESSAGES), !0)
    }
}
A(w, "displayName", "UnreadSettingNoticeStore2"), A(w, "persistKey", "UnreadSettingNoticeStore2");
let R = new w(s.h, {
        CHANNEL_SELECT: function() {
            let e = S();
            return v = u.A.getChannelId(), E = Date.now(), e
        },
        CONNECTION_OPEN: function() {
            v = u.A.getChannelId(), E = Date.now(), I();
            let e = Date.now() - _;
            p.default.forEach(j.channels, (t, n) => {
                let {
                    lastActionTime: r
                } = t;
                r < e && delete j.channels[n]
            })
        },
        MESSAGE_CREATE: function(e) {
            var t;
            if (e.optimistic || e.isPushNotification || (null == (t = e.message.author) ? void 0 : t.id) !== a.default.getId() || !T(e.channelId)) return !1;
            let n = N(e.channelId);
            n.lastActionTime = Date.now(), n.numSends++
        }
    }),
    D = R