/** chunk id: 284738 params = (module,exports,require) **/
e.d(i, {
    R: () => l,
    Y: () => s
});
var n = e(311907),
    r = e(71393),
    E = e(652215);

function s(t) {
    let [i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A];
    return !!i.getGuild(t)?.features.has(E.GuildFeatures.COMMUNITY)
}

function l(t) {
    return (0, n.bG)([r.A], () => s(t, [r.A]), [t])
}