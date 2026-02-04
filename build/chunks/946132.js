/** chunk id: 946132, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var l = n(311907),
    r = n(73153),
    i = n(640631),
    s = n(626584),
    a = n(734057),
    o = n(320501),
    u = n(595766);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let d = -1 / 0,
    h = new s.A("MessagePreviewStore");
class g extends l.Ay.Store {
    initialize() {
        this.waitFor(a.A, o.A)
    }
    isLatest(e, t) {
        var n;
        let l = this.guilds.get(null != e ? e : null);
        return null != (n = null == l ? void 0 : l.isLatest(t, this.generation)) && n
    }
    isLocalFetchNeeded(e) {
        var t, n;
        return null == (t = null == (n = this.guilds.get(e)) ? void 0 : n.localNeeded) || t
    }
    message(e, t) {
        var n, l;
        return null != (n = null == (l = this.guilds.get(e)) ? void 0 : l.messageRecord(t)) ? n : null
    }
    data(e) {
        return this.guilds.has(e) || this.guilds.set(e, new u.x), this.guilds.get(e)
    }
    handleOneGuildCreate(e) {
        var t, n;
        let l = this.data(e.id);
        l.putMany(null != (t = e.lastMessages) ? t : [], this.generation), l.putMany(null != (n = e.threadMessages) ? n : [], this.generation), null != e.lastMessages && (l.localNeeded = !1)
    }
    handleConnectionOpen(e) {
        for (let t of (this.generation += 1, e.guilds)) this.handleOneGuildCreate(t)
    }
    handleGuildCreate(e) {
        this.handleOneGuildCreate(e.guild)
    }
    handleGuildDelete(e) {
        this.guilds.delete(e.guild.id)
    }
    handleMessageCreate(e) {
        var t;
        if (e.optimistic || e.isPushNotification) return !1;
        this.data(null != (t = e.guildId) ? t : null).put(e.message.channel_id, e.message, this.generation)
    }
    handleMessageDelete(e) {
        var t, n;
        let l = null != (t = e.guildId) ? t : null;
        if ((null == (n = this.data(l)) ? void 0 : n.messageId(e.channelId)) === e.id) {
            let t = o.A.getMessages(e.channelId),
                n = t.hasMoreAfter ? null : t.last();
            null != n ? this.data(l).put(e.channelId, n, this.generation) : this.data(l).delete(e.channelId)
        }
    }
    handleMessageUpdate(e) {
        var t;
        let n = null != (t = e.guildId) ? t : null,
            l = e.message.channel_id,
            r = e.message.id;
        if (null == l || null == r) return !1;
        let i = this.data(n);
        if ((null == i ? void 0 : i.messageId(l)) !== r) return !1;
        null == i || i.update(e.message)
    }
    handleThreadListSync(e) {
        var t;
        this.data(e.guildId).putMany(null != (t = e.mostRecentMessages) ? t : [], this.generation)
    }
    handleLoadMessagesSuccess(e) {
        var t, n;
        let l = a.A.getBasicChannel(e.channelId);
        if (null == l) return !1;
        (0, i.D)(e.messages), e.isAfter || e.isBefore || e.hasMoreAfter ? this.data(l.guild_id).putNew(e.channelId, null != (n = e.messages[0]) ? n : null, this.generation) : this.data(l.guild_id).put(e.channelId, null != (t = e.messages[0]) ? t : null, this.generation)
    }
    handleLocalMessagesLoaded(e) {
        let t = a.A.getBasicChannel(e.channelId);
        if (null != t) {
            var n;
            (0, i.D)(e.messages), this.data(t.guild_id).putNew(e.channelId, null != (n = e.messages[0]) ? n : null, d)
        }
    }
    handleMessagePreviewsLoaded(e) {
        h.verbose("adding remote previews (guildId: ".concat(e.guildId, ", messages: ").concat(e.messages.length, ")"));
        let t = this.data(e.guildId);
        for (let n of e.messages) t.isLatest(n.channel_id, this.generation) || t.put(n.channel_id, n, this.generation)
    }
    handleMessagePreviewsLocallyLoaded(e) {
        h.verbose("adding local previews (guildId: ".concat(e.guildId, ", messages: ").concat(e.messages.length, ")"));
        let t = this.data(e.guildId);
        for (let [n, l] of e.messages) t.has(n) || t.put(n, l, d);
        t.localNeeded = !1
    }
    handleLogout(e) {
        this.guilds.clear()
    }
    constructor() {
        super(r.h, {
            CONNECTION_OPEN: e => this.handleConnectionOpen(e),
            GUILD_CREATE: e => this.handleGuildCreate(e),
            GUILD_DELETE: e => this.handleGuildDelete(e),
            LOAD_MESSAGES_SUCCESS: e => this.handleLoadMessagesSuccess(e),
            LOCAL_MESSAGES_LOADED: e => this.handleLocalMessagesLoaded(e),
            LOGOUT: e => this.handleLogout(e),
            MESSAGE_CREATE: e => this.handleMessageCreate(e),
            MESSAGE_DELETE: e => this.handleMessageDelete(e),
            MESSAGE_PREVIEWS_LOADED: e => this.handleMessagePreviewsLoaded(e),
            MESSAGE_PREVIEWS_LOCALLY_LOADED: e => this.handleMessagePreviewsLocallyLoaded(e),
            MESSAGE_UPDATE: e => this.handleMessageUpdate(e),
            THREAD_LIST_SYNC: e => this.handleThreadListSync(e)
        }), c(this, "guilds", new Map), c(this, "generation", 0)
    }
}
let f = new g