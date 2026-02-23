/** chunk id: 854896, original params: e,t,n (module,exports,require) **/
n.d(t, {
    CK: () => r,
    VS: () => s,
    xc: () => i
});
var a = n(652215),
    l = n(339984);

function s(e, t) {
    let {
        isGIF: n
    } = t;
    if (e === l.HL.GUILD_BANNER) return n ? a.GuildFeatures.ANIMATED_BANNER : a.GuildFeatures.BANNER
}

function i(e) {
    return e === l.HL.AVATAR || e === l.HL.BANNER
}

function r(e) {
    return e === l.HL.BANNER
}