/** chunk id: 337322, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => l
}), a(321073);
var s = a(64700),
    r = a(403362),
    n = a(473145),
    o = a(568065),
    c = a(333354),
    i = a(985018);

function l(e) {
    let {
        includeEmojis: t,
        includeStickers: a,
        includeSoundboards: l
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        includeEmojis: !0,
        includeStickers: !0,
        includeSoundboards: !0
    };
    return s.useMemo(() => {
        let s = [],
            d = (0, o.w$)();
        return t && s.push({
            perkIcon: n.TP.EMOJI,
            description: i.intl.formatToPlainString(c.default["NXvV0+"], {
                totalEmojis: e.features.total_emoji_slots,
                additionalEmojis: e.features.additional_emoji_slots
            })
        }), a && s.push({
            perkIcon: n.TP.STICKER,
            description: i.intl.formatToPlainString(c.default.ZEvvPz, {
                totalStickers: e.features.total_sticker_slots,
                additionalStickers: e.features.additional_sticker_slots
            })
        }), l && s.push({
            perkIcon: n.TP.SOUNDBOARD,
            description: i.intl.formatToPlainString(c.default["s9u/E7"], {
                totalSoundboards: e.features.total_sound_slots,
                additionalSoundboards: e.features.additional_sound_slots
            })
        }), s.concat(e.features.features.map(e => d[e]).filter(r.Vq))
    }, [e, t, a, l])
}