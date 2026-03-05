/** chunk id: 284738 params = (module,exports,require) **/
n.d(t, {
    R: () => i,
    Y: () => s
});
var a = n(311907),
    l = n(71393),
    r = n(652215);

function s(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.A];
    return !!t.getGuild(e)?.features.has(r.GuildFeatures.COMMUNITY)
}

function i(e) {
    return (0, a.bG)([l.A], () => s(e, [l.A]), [e])
}