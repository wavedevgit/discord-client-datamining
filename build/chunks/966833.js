/** chunk id: 966833 params = (module,exports,require) **/
n.d(t, {
    A: () => h,
    e: () => g
}), n(667532);
var i, s = n(735438),
    l = n.n(s),
    r = n(311907),
    a = n(73153),
    o = n(390248),
    c = n(141468),
    d = n(773669),
    u = n(734057),
    E = n(696451),
    A = n(71393),
    p = n(320501),
    m = n(994500),
    f = n(287809),
    g = ((i = {}).LOADING = "LOADING", i.LOADED_HAS_MORE = "LOADED_HAS_MORE", i.LOADED_FINISHED = "LOADING_FINISHED", i.FAILED = "FAILED", i);
let D = {};

function _(e) {
    let {
        channel: t
    } = e;
    delete D[t.id]
}

function I() {
    l().forEach(D, e => {
        e.items.forEach(e => {
            let {
                message: t
            } = e;
            t.set("blocked", m.A.isBlockedForMessage(t)), t.set("ignored", m.A.isIgnoredForMessage(t))
        }), e.items = e.items.slice()
    })
}
class S extends r.Ay.Store {
    static displayName = "ChannelPinsStore";
    initialize() {
        this.waitFor(u.A, E.Ay, A.A, d.default, p.A, m.A, f.default)
    }
    getPins(e) {
        return D[e]
    }
}
let h = new S(a.h, {
    CONNECTION_OPEN: function() {
        D = {}
    },
    LOAD_PINNED_MESSAGES: function(e) {
        let {
            channelId: t,
            reset: n
        } = e;
        if (!n && null != D[t]) {
            D[t].state = "LOADING";
            return
        }
        let i = u.A.getChannel(t)?.getGuildId() ?? void 0;
        D[t] = {
            id: t,
            items: [],
            state: "LOADING",
            guildId: i
        }
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
        let {
            channelId: t,
            pins: n,
            hasMore: i
        } = e, s = D[t];
        if (null == s) return !1;
        let l = n.map(e => {
            let {
                pinned_at: t,
                message: n
            } = e;
            return {
                pinnedAt: new Date(Date.parse(t)),
                message: (0, c.rh)(n)
            }
        });
        s.items = [...s.items, ...l], s.state = i ? "LOADED_HAS_MORE" : "LOADING_FINISHED"
    },
    LOAD_PINNED_MESSAGES_FAILURE: function(e) {
        let {
            channelId: t
        } = e, n = D[t];
        if (null == n) return !1;
        n.state = "FAILED"
    },
    CHANNEL_DELETE: _,
    THREAD_DELETE: _,
    GUILD_DELETE: function(e) {
        let {
            guild: t
        } = e;
        D = l()(D).filter(e => e.guildId !== t.id).keyBy("id").value()
    },
    MESSAGE_DELETE: function(e) {
        let {
            id: t,
            channelId: n
        } = e, i = D[n];
        if (null == i || 0 === l().remove(i.items, e => {
                let {
                    message: n
                } = e;
                return n.id === t
            }).length) return !1;
        i.items = i.items.slice(), D[n] = i
    },
    MESSAGE_DELETE_BULK: function(e) {
        let {
            ids: t,
            channelId: n
        } = e, i = D[n];
        if (null == i) return !1;
        i.items = i.items.filter(e => {
            let {
                message: n
            } = e;
            return !t.includes(n.id)
        })
    },
    MESSAGE_UPDATE: function(e) {
        let t = e.message.id,
            n = e.message.channel_id;
        if (null == n) return !1;
        let i = D[n];
        if (null == i) return !1;
        if (null == e.message.author) {
            let s = l().findIndex(i.items, e => {
                let {
                    message: n
                } = e;
                return n.id === t
            });
            if (-1 === s) return;
            let {
                pinnedAt: r,
                message: a
            } = i.items[s], o = (0, c.IU)(a, e.message);
            if (o !== a) {
                let e = i.items.slice();
                e[s] = {
                    pinnedAt: r,
                    message: o
                }, D[n].items = e
            }
            return
        }
        if (e.message.pinned) {
            i.items = i.items.slice();
            let n = l().findIndex(i.items, e => {
                let {
                    message: n
                } = e;
                return n.id === t
            }); - 1 === n ? i.items.unshift({
                message: (0, c.rh)(e.message),
                pinnedAt: new Date
            }) : i.items[n].message = (0, c.IU)(i.items[n].message, e.message);
            return
        }
        let s = l().findIndex(i.items, e => {
            let {
                message: n
            } = e;
            return n.id === t
        });
        if (-1 === s) return !1;
        i.items = i.items.slice(), i.items.splice(s, 1)
    },
    RELATIONSHIP_ADD: I,
    RELATIONSHIP_REMOVE: I,
    RELATIONSHIP_UPDATE: I,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
        let {
            messageId: t,
            channelId: n
        } = e, i = D[n];
        if (null == i) return !1;
        let s = l().findIndex(i.items, e => {
            let {
                message: n
            } = e;
            return n.id === t
        });
        if (-1 === s) return !1;
        i.items = i.items.slice(), i.items[s].message = (0, o.Td)(i.items[s].message)
    }
})