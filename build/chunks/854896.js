/** chunk id: 854896 params = (module,exports,require) **/
a.d(t, {
    CK: () => i,
    VS: () => r,
    xc: () => l
});
var n = a(652215),
    s = a(339984);

function r(e, t) {
    let {
        isGIF: a
    } = t;
    if (e === s.HL.GUILD_BANNER) return a ? n.GuildFeatures.ANIMATED_BANNER : n.GuildFeatures.BANNER
}

function l(e) {
    return e === s.HL.AVATAR || e === s.HL.BANNER
}

function i(e) {
    return e === s.HL.BANNER
}