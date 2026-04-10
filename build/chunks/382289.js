/** chunk id: 382289 params = (module,exports,require) **/
n(321073);
var i = n(735438),
    l = n.n(i),
    r = n(311907),
    a = n(73153),
    s = n(734057),
    o = n(967198),
    d = n(661191),
    c = n(746080);
let u = {},
    A = {},
    h = {},
    _ = {};

function m(e) {
    let t = A[e];
    if (null == t) return;
    let n = d.default.fromTimestamp(Date.now() - 9e5),
        i = l().findIndex(t, e => d.default.compare(e.id, n) > 0);
    if (-1 === i) A[e] = [];
    else {
        let n = Math.max(i, t.length - 26);
        A[e] = l().slice(t, n)
    }
    h[e] = Date.now()
}

function g(e, t, n, i) {
    u[e].add(t);
    let l = h[t];
    (null == l || l + 3e5 > Date.now()) && m(t), null == A[t] && (A[t] = []), A[t].push({
        id: n,
        userId: i
    })
}

function p(e) {
    let {
        channel: t
    } = e;
    delete A[t.id], delete h[t.id]
}
class E extends r.Ay.Store {
    initialize() {
        this.waitFor(s.A, o.A)
    }
    static displayName = "ActiveChannelsStore";
    getActiveChannelsFetchStatus(e) {
        return _[e]
    }
    getActiveChannelIds(e) {
        return u[e]
    }
    getChannelMessageData(e) {
        return A[e]
    }
    shouldFetch(e) {
        return null == u[e] && !_[e]?.loading
    }
}
new E(a.h, {
    CHANNEL_SELECT: function(e) {
        let {
            channelId: t,
            guildId: n
        } = e;
        if (!(0, c.mP)(t) || null == n) return !1;
        let i = u[n];
        if (null == i) return !1;
        i.forEach(e => {
            m(e), A[e]?.length === 0 && delete A[e]
        });
        let r = l().chain(Array.from(i)).filter(e => e in A).sortBy(e => -(A[e]?.length ?? 0)).value();
        u[n] = new Set(r)
    },
    MESSAGE_CREATE: function(e) {
        let {
            channelId: t,
            message: n,
            optimistic: i,
            isPushNotification: l
        } = e;
        if (i || l) return !1;
        let r = s.A.getChannel(t);
        if (null == r) return !1;
        let a = r.guild_id;
        if (null == a || null == u[a]) return !1;
        g(a, t, n.id, n.author?.id)
    },
    GUILD_DELETE: function(e) {
        let {
            guild: t
        } = e;
        delete u[t.id]
    },
    CHANNEL_DELETE: p,
    THREAD_DELETE: p,
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
        }, u[t] = new Set, n.forEach(e => {
            let {
                channel_id: n,
                messages: i
            } = e;
            i.forEach(e => {
                g(t, n, e.message_id, e.user_id)
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