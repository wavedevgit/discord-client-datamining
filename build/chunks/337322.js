/** Chunk was on 96914 **/
/** chunk id: 337322, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => l
}), r(321073);
var n = r(64700),
    o = r(403362),
    a = r(473145),
    s = r(568065),
    c = r(333354),
    i = r(985018);

function l(e) {
    let {
        includeEmojis: t,
        includeStickers: r,
        includeSoundboards: l
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        includeEmojis: !0,
        includeStickers: !0,
        includeSoundboards: !0
    };
    return n.useMemo(() => {
        let n = [],
            d = (0, s.w$)();
        return t && n.push({
            perkIcon: a.TP.EMOJI,
            description: i.intl.formatToPlainString(c.default["NXvV0+"], {
                totalEmojis: e.features.total_emoji_slots,
                additionalEmojis: e.features.additional_emoji_slots
            })
        }), r && n.push({
            perkIcon: a.TP.STICKER,
            description: i.intl.formatToPlainString(c.default.ZEvvPz, {
                totalStickers: e.features.total_sticker_slots,
                additionalStickers: e.features.additional_sticker_slots
            })
        }), l && n.push({
            perkIcon: a.TP.SOUNDBOARD,
            description: i.intl.formatToPlainString(c.default["s9u/E7"], {
                totalSoundboards: e.features.total_sound_slots,
                additionalSoundboards: e.features.additional_sound_slots
            })
        }), n.concat(e.features.features.map(e => d[e]).filter(o.Vq))
    }, [e, t, r, l])
}