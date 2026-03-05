/** chunk id: 278087 params = (module,exports,require) **/
a.d(t, {
    default: () => i
});
var r = a(627968);
a(64700);
var s = a(43594),
    n = a(391209),
    o = a(280021);

function i(e) {
    let {
        guildId: t,
        powerup: a,
        ...i
    } = e, l = (0, s.D)("GuildPowerupLevelModalExperimentWrapper");
    return "control" === l ? (0, r.jsx)(n.A, {
        guildId: t,
        powerup: a,
        ...i
    }) : (0, r.jsx)(o.A, {
        guildId: t,
        powerup: a,
        expressiveCta: "refresh_expressive_cta" === l,
        ...i
    })
}