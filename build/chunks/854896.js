/** chunk id: 854896 params = (module,exports,require) **/
n.d(t, {
    CK: () => r,
    VS: () => i,
    xc: () => s
});
var a = n(652215),
    l = n(339984);

function i(e, t) {
    let {
        isGIF: n
    } = t;
    if (e === l.HL.GUILD_BANNER) return n ? a.GuildFeatures.ANIMATED_BANNER : a.GuildFeatures.BANNER
}

function s(e) {
    return e === l.HL.AVATAR || e === l.HL.BANNER
}

function r(e) {
    return e === l.HL.BANNER
}