/** chunk id: 510595 params = (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(321073);
var i = n(735438),
    a = n.n(i),
    r = n(311907),
    l = n(803805),
    s = n(506774),
    o = n(661191),
    d = n(761821);
n(355097);
var c = n(652215);
let u = "selectedChannelGuildFrecency";

function A(e) {
    let {
        state: t
    } = r.Ay.PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", [e => null == e ? {
        favorites: [],
        timesFavorited: 0
    } : Array.isArray(e) ? {
        favorites: e,
        timesFavorited: 0
    } : e, e => Array.isArray(e.favorites) ? e : {
        favorites: [],
        timesFavorited: 0
    }]);
    return null == t || 0 === t.favorites.length ? [] : t.favorites.map((n, i) => {
        let a = l.tC.create();
        return a.format = "IMAGE" === n.format ? l.TL.IMAGE : "VIDEO" === n.format ? l.TL.VIDEO : l.TL.NONE, a.src = n.src, a.width = n.width, a.height = n.height, a.order = t.favorites.length - i + e, {
            url: n.url,
            favorite: a
        }
    })
}
let h = [{
    version: 2,
    run(e) {
        let t = A(1);
        if (0 === t.length) return !1;
        for (let {
                url: n,
                favorite: i
            }
            of(null == e.favoriteGifs && (e.favoriteGifs = l.uz.create()), e.favoriteGifs.gifs = {}, t)) e.favoriteGifs.gifs[n] = i;
        return e.favoriteGifs.hideTooltip = t.length > 2, !0
    },
    cleanup() {}
}, {
    version: 3,
    run(e) {
        function t() {
            return {
                usageHistory: {},
                favorites: []
            }
        }
        let {
            state: n
        } = r.Ay.PersistedStore.migrateAndReadStoreState("StickersPersistedStore", [e => null == e || 0 === Object.keys(e).length ? t() : e, e => null == e || 0 === Object.keys(e).length ? t() : (null == e.favorites && (e.favorites = []), e)]);
        if (null == n) return !1;
        let i = !1;
        return n.favorites.length > 0 && (e.favoriteStickers = l.tQ.create(), e.favoriteStickers.stickerIds = a().uniq(n.favorites).slice(0, 250), i = !0), a().size(n.usageHistory) > 0 && (e.stickerFrecency = l.Do.create(), e.stickerFrecency.stickers = (0, d.Mr)(n.usageHistory, 100), i = !0), i
    },
    cleanup() {
        s.w.remove("StickersPersistedStore")
    }
}, {
    version: 4,
    run(e) {
        let {
            state: t
        } = r.Ay.PersistedStore.migrateAndReadStoreState("EmojiStore", [() => ({
            usageHistory: s.w.get("EmojiUsageHistory") || {}
        })]);
        if (null == t) return !1;
        let n = !1;
        return null != t.favorites && t.favorites.length > 0 && (e.favoriteEmojis = l.gW.create(), e.favoriteEmojis.emojis = a().uniq(t.favorites).slice(0, 250), n = !0), a().size(t.usageHistory) > 0 && (e.emojiFrecency = l.Q8.create(), e.emojiFrecency.emojis = (0, d.Mr)(t.usageHistory, 100), n = !0), n
    },
    cleanup() {
        s.w.remove("EmojiStore"), s.w.remove("EmojiUsageHistory"), s.w.remove("EmojiDiversitySurrogate")
    }
}, {
    version: 6,
    run(e) {
        null == e.favoriteGifs && (e.favoriteGifs = l.uz.create()), null == e.favoriteGifs.gifs && (e.favoriteGifs.gifs = {});
        let t = A(1);
        if (0 === t.length) return !1;
        a()(e.favoriteGifs.gifs).values().sortBy("order").forEach((e, n) => e.order = t.length + 1 + n);
        let n = l.uz.toBinary(e.favoriteGifs).length,
            i = 0;
        for (let {
                url: a,
                favorite: r
            }
            of t) {
            if (r.order = t.length - i, i++, a in e.favoriteGifs.gifs) {
                e.favoriteGifs.gifs[a].order = r.order;
                continue
            }
            let s = l.tC.toBinary(r).length + a.length + 7;
            n + s > 762880 || (n += s, e.favoriteGifs.gifs[a] = r)
        }
        for (n = l.uz.toBinary(e.favoriteGifs).length; n > 762880;) {
            let t = 0;
            for (let n in e.favoriteGifs.gifs)
                if (delete e.favoriteGifs.gifs[n], ++t >= 10) break;
            n = l.uz.toBinary(e.favoriteGifs).length
        }
        return !0
    },
    cleanup() {}
}, {
    version: 7,
    run(e) {
        let {
            state: t
        } = r.Ay.PersistedStore.migrateAndReadStoreState("ApplicationCommandFrecency", []);
        if (null == t) return !1;
        let n = !1;
        return a().size(t.usageHistory) > 0 && (e.applicationCommandFrecency = l.Zc.create(), e.applicationCommandFrecency.applicationCommands = (0, d.Mr)(t.usageHistory, 500), n = !0), n
    },
    cleanup() {
        s.w.remove("ApplicationCommandFrecency")
    }
}, {
    version: 8,
    run(e) {
        let {
            state: t
        } = r.Ay.PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []);
        if (null == t) return !1;
        let n = !1;
        return a().size(t.favoriteSounds) > 0 && (e.favoriteSoundboardSounds = l.Qn.create(), o.default.keys(t.favoriteSounds).forEach(n => {
            new Set(t.favoriteSounds[n]).forEach(t => {
                e.favoriteSoundboardSounds?.soundIds.push(t)
            })
        }), n = !0), n
    },
    cleanup() {
        s.w.remove("SoundboardFavoriteStore")
    }
}, {
    version: 9,
    run(e) {
        let t = s.w.get(u);
        if (null == t) return !1;
        for (let e in t) c.Ut1.test(e) || delete t[e];
        return e.guildAndChannelFrecency = l.F1.create(), e.guildAndChannelFrecency.guildAndChannels = (0, d.Mr)(t, 100), !0
    },
    cleanup() {
        s.w.remove(u)
    }
}, {
    version: 10,
    run(e) {
        if (null == e.emojiFrecency) return !1;
        let t = e.emojiFrecency.emojis ?? {},
            n = !1;
        if (a().size(t) > 0) {
            let t = l.Q8.create();
            l.Q8.mergePartial(t, e.emojiFrecency), null != e.emojiReactionFrecency && l.Q8.mergePartial(t, e.emojiReactionFrecency), e.emojiReactionFrecency = t, n = !0
        }
        return n
    },
    cleanup() {}
}]