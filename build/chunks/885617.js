/** chunk id: 885617 params = (module,exports,require) **/
l.d(t, {
    A: () => x
});
var n = l(635377),
    i = l.n(n),
    r = l(311907),
    a = l(73153),
    s = l(950762),
    u = l(967198),
    o = l(927813);
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
            emojiId: l
        } = e;
        d[t] = d[t].filter(e => e.id !== l)
    },
    EMOJI_FETCH_SUCCESS: function(e) {
        let {
            guildId: t,
            emojis: l
        } = e;
        d[t] = l.map(e => new s.A(e))
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
            userImage: l
        } = e;
        h.set(t, l)
    },
    GUILD_EMOJIS_UPDATE: function(e) {
        let {
            guildId: t
        } = e;
        c[t] = (c[t] ?? 0) + 1
    }
})