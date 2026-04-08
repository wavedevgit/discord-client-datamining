/** chunk id: 284738 params = (module,exports,require) **/
n.d(t, {
    R: () => o,
    Y: () => s
});
var r = n(311907),
    a = n(71393),
    l = n(652215);

function s(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A];
    return !!t.getGuild(e)?.features.has(l.GuildFeatures.COMMUNITY)
}

function o(e) {
    return (0, r.bG)([a.A], () => s(e, [a.A]), [e])
}