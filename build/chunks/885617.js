/** chunk id: 885617, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
});
var l, r, i = n(635377),
    a = n.n(i),
    s = n(311907),
    u = n(73153),
    o = n(950762),
    c = n(967198),
    d = n(927813);
let m = {},
    h = {},
    g = 0,
    b = new(a())({
        max: 5,
        maxAge: d.A.Millis.HOUR
    });
class f extends(r = s.Ay.Store) {
    initialize() {
        this.waitFor(c.A)
    }
    isUploadingEmoji() {
        return g > 0
    }
    getEmojiRevision(e) {
        var t;
        return null != (t = m[e]) ? t : 0
    }
    getEmojis(e) {
        return h[e]
    }
    getEmojiRawAsset(e) {
        return b.get(e)
    }
}(l = "displayName") in f ? Object.defineProperty(f, l, {
    value: "GuildSettingsEmojiStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : f[l] = "GuildSettingsEmojiStore";
let j = new f(u.h, {
    EMOJI_DELETE: function(e) {
        let {
            guildId: t,
            emojiId: n
        } = e;
        h[t] = h[t].filter(e => e.id !== n)
    },
    EMOJI_FETCH_SUCCESS: function(e) {
        let {
            guildId: t,
            emojis: n
        } = e;
        h[t] = n.map(e => new o.A(e))
    },
    EMOJI_FETCH_FAILURE: function(e) {
        let {
            guildId: t
        } = e;
        h[t] = []
    },
    EMOJI_UPLOAD_START: function() {
        g++
    },
    EMOJI_UPLOAD_STOP: function() {
        g--
    },
    EMOJI_CACHE_RAW_EMOJI_ASSET: function(e) {
        let {
            emojiId: t,
            userImage: n
        } = e;
        b.set(t, n)
    },
    GUILD_EMOJIS_UPDATE: function(e) {
        var t;
        let {
            guildId: n
        } = e;
        m[n] = (null != (t = m[n]) ? t : 0) + 1
    }
})