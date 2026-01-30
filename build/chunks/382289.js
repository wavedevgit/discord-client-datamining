/** chunk id: 382289, original params: e,t,n (module,exports,require) **/
n(321073), n(896048);
var r, i, l, a, s = n(735438),
    o = n.n(s),
    c = n(311907),
    u = n(73153),
    d = n(734057),
    p = n(967198),
    h = n(661191),
    g = n(746080);
let f = {},
    m = {},
    A = {},
    _ = {};

function b(e) {
    let t = m[e];
    if (null == t) return;
    let n = h.default.fromTimestamp(Date.now() - 9e5),
        r = o().findIndex(t, e => h.default.compare(e.id, n) > 0);
    if (-1 === r) m[e] = [];
    else {
        let n = Math.max(r, t.length - 26);
        m[e] = o().slice(t, n)
    }
    A[e] = Date.now()
}

function E(e, t, n, r) {
    f[e].add(t);
    let i = A[t];
    (null == i || i + 3e5 > Date.now()) && b(t), null == m[t] && (m[t] = []), m[t].push({
        id: n,
        userId: r
    })
}

function O(e) {
    let {
        channel: t
    } = e;
    delete m[t.id], delete A[t.id]
}
class y extends(a = c.Ay.Store) {
    initialize() {
        this.waitFor(d.A, p.A)
    }
    getActiveChannelsFetchStatus(e) {
        return _[e]
    }
    getActiveChannelIds(e) {
        return f[e]
    }
    getChannelMessageData(e) {
        return m[e]
    }
    shouldFetch(e) {
        var t;
        return null == f[e] && !(null == (t = _[e]) ? void 0 : t.loading)
    }
}
l = "ActiveChannelsStore", (i = "displayName") in(r = y) ? Object.defineProperty(r, i, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[i] = l, new y(u.h, {
    CHANNEL_SELECT: function(e) {
        let {
            channelId: t,
            guildId: n
        } = e;
        if (!(0, g.mP)(t) || null == n) return !1;
        let r = f[n];
        if (null == r) return !1;
        r.forEach(e => {
            var t;
            b(e), (null == (t = m[e]) ? void 0 : t.length) === 0 && delete m[e]
        });
        let i = o().chain(Array.from(r)).filter(e => e in m).sortBy(e => {
            var t, n;
            return -(null != (t = null == (n = m[e]) ? void 0 : n.length) ? t : 0)
        }).value();
        f[n] = new Set(i)
    },
    MESSAGE_CREATE: function(e) {
        var t;
        let {
            channelId: n,
            message: r,
            optimistic: i,
            isPushNotification: l
        } = e;
        if (i || l) return !1;
        let a = d.A.getChannel(n);
        if (null == a) return !1;
        let s = a.guild_id;
        if (null == s || null == f[s]) return !1;
        E(s, n, r.id, null == (t = r.author) ? void 0 : t.id)
    },
    GUILD_DELETE: function(e) {
        let {
            guild: t
        } = e;
        delete f[t.id]
    },
    CHANNEL_DELETE: O,
    THREAD_DELETE: O,
    ACTIVE_CHANNELS_FETCH_START: function(e) {
        let {
            guildId: t
        } = e;
        _[t] = {
            loading: !0,
            error: null,
            fetchedAt: Date.now()
        }
    },
    ACTIVE_CHANNELS_FETCH_SUCCESS: function(e) {
        let {
            guildId: t,
            channels: n
        } = e;
        _[t] = {
            loading: !1,
            error: null,
            fetchedAt: Date.now()
        }, f[t] = new Set, n.forEach(e => {
            let {
                channel_id: n,
                messages: r
            } = e;
            r.forEach(e => {
                E(t, n, e.message_id, e.user_id)
            })
        })
    },
    ACTIVE_CHANNELS_FETCH_FAILURE: function(e) {
        let {
            guildId: t,
            error: n
        } = e;
        _[t] = {
            loading: !1,
            error: n,
            fetchedAt: null
        }
    },
    CONNECTION_OPEN: function() {}
})