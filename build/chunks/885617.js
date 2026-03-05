/** chunk id: 885617 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var l = n(635377),
    i = n.n(l),
    r = n(311907),
    a = n(73153),
    s = n(950762),
    u = n(967198),
    o = n(927813);
let c = {},
    d = {},
    m = 0,
    h = new(i())({
        max: 5,
        maxAge: o.A.Millis.HOUR
    });
class g extends r.Ay.Store {
    static displayName = "GuildSettingsEmojiStore";
    initialize() {
        this.waitFor(u.A)
    }
    isUploadingEmoji() {
        return m > 0
    }
    getEmojiRevision(e) {
        return c[e] ?? 0
    }
    getEmojis(e) {
        return d[e]
    }
    getEmojiRawAsset(e) {
        return h.get(e)
    }
}
let x = new g(a.h, {
    EMOJI_DELETE: function(e) {
        let {
            guildId: t,
            emojiId: n
        } = e;
        d[t] = d[t].filter(e => e.id !== n)
    },
    EMOJI_FETCH_SUCCESS: function(e) {
        let {
            guildId: t,
            emojis: n
        } = e;
        d[t] = n.map(e => new s.A(e))
    },
    EMOJI_FETCH_FAILURE: function(e) {
        let {
            guildId: t
        } = e;
        d[t] = []
    },
    EMOJI_UPLOAD_START: function() {
        m++
    },
    EMOJI_UPLOAD_STOP: function() {
        m--
    },
    EMOJI_CACHE_RAW_EMOJI_ASSET: function(e) {
        let {
            emojiId: t,
            userImage: n
        } = e;
        h.set(t, n)
    },
    GUILD_EMOJIS_UPDATE: function(e) {
        let {
            guildId: t
        } = e;
        c[t] = (c[t] ?? 0) + 1
    }
})