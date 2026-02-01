/** chunk id: 517092, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => D
}), n(896048), n(938796);
var l, r = n(665260),
    i = n(311907),
    a = n(73153),
    s = n(961350),
    o = n(734057),
    c = n(71393),
    u = n(309010),
    d = n(543465),
    h = n(927813),
    p = n(661191),
    f = n(887560),
    m = n(652215),
    g = n(790782),
    A = n(355097);

function b(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let _ = [{
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
    y = 5 * _[_.length - 1].viewTime,
    v = h.A.Millis.WEEK,
    E = {
        channels: {}
    },
    O = new Set,
    C = null,
    x = 0,
    S = 0;

function j() {
    if (null == C || !N(C)) return !1;
    let e = T(C);
    if (e.lastActionTime > Date.now() - h.A.Millis.DAY && e.viewDuration > y) return !1;
    let t = Date.now();
    e.lastActionTime = t, e.viewDuration += t - x, x = t
}

function I() {
    return 0 !== S && (clearInterval(S), S = 0), d.Ay.useNewNotifications && (S = setInterval(() => {
        j() && R.emitChange()
    }, 15 * h.A.Millis.SECOND)), !1
}

function T(e) {
    return e in E.channels || (E.channels[e] = {
        lastActionTime: 0,
        viewDuration: 0,
        numSends: 0
    }), E.channels[e]
}

function N(e) {
    if (!d.Ay.useNewNotifications || O.has(e)) return !1;
    let t = o.A.getBasicChannel(e);
    if (null == t || null == t.guild_id || d.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) || P(t.guild_id, t.id) || P(t.guild_id, t.parent_id)) return !1;
    let n = d.Ay.resolveUnreadSetting(t);
    return d.Ay.getChannelUnreadSetting(t.guild_id, t.id) === g.e.UNSET && n !== g.e.ALL_MESSAGES
}

function P(e, t) {
    if (null == t) return !1;
    let n = d.Ay.getChannelOverrides(e)[t];
    return null != n && !!(null != n.message_notifications && n.message_notifications !== m.orn.NULL || null != n.flags && (0, r.br)(n.flags, A.vv.UNREADS_ALL_MESSAGES | A.vv.UNREADS_ONLY_MENTIONS))
}
class w extends(l = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && (E.channels = e.channels), this.syncWith([d.Ay], I), this.waitFor(s.default, o.A, c.A, u.A, d.Ay)
    }
    getState() {
        return E
    }
    getLastActionTime(e) {
        var t, n;
        return null != (t = null == (n = E.channels[e]) ? void 0 : n.lastActionTime) ? t : 0
    }
    maybeAutoUpgradeChannel(e) {
        if (!N(e)) return !1;
        let t = o.A.getBasicChannel(e);
        return null != t && null != t.guild_id && !! function(e) {
            var t;
            let n = c.A.getGuild(e.guild_id),
                l = null != (t = null == n ? void 0 : n.joinedAt) ? t : new Date,
                r = Math.min(p.default.age(e.id), Date.now() - l.getTime()),
                i = E.channels[e.id];
            if (null == i || i.lastActionTime < Date.now() - v) return !1;
            for (let e of _)
                if (r < e.timeSinceJoin && (i.numSends >= e.sends || i.viewDuration >= e.viewTime)) return !0;
            return !1
        }(t) && (delete E.channels[e], O.add(e), (0, f.mA)(t.guild_id, t.id, g.e.ALL_MESSAGES), !0)
    }
}
b(w, "displayName", "UnreadSettingNoticeStore2"), b(w, "persistKey", "UnreadSettingNoticeStore2");
let R = new w(a.h, {
        CHANNEL_SELECT: function() {
            let e = j();
            return C = u.A.getChannelId(), x = Date.now(), e
        },
        CONNECTION_OPEN: function() {
            C = u.A.getChannelId(), x = Date.now(), I();
            let e = Date.now() - v;
            p.default.forEach(E.channels, (t, n) => {
                let {
                    lastActionTime: l
                } = t;
                l < e && delete E.channels[n]
            })
        },
        MESSAGE_CREATE: function(e) {
            var t;
            if (e.optimistic || e.isPushNotification || (null == (t = e.message.author) ? void 0 : t.id) !== s.default.getId() || !N(e.channelId)) return !1;
            let n = T(e.channelId);
            n.lastActionTime = Date.now(), n.numSends++
        }
    }),
    D = R