/** Chunk was on 92917 **/
/** chunk id: 928108, original params: e,t,n (module,exports,require) **/
n.d(t, {
    _: () => l,
    p: () => i
});
var r = n(853066);

function i(e) {
    let {
        enabled: t
    } = r.R.getCurrentConfig({
        guildId: e,
        location: "988d4e_3"
    });
    return t
}

function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        {
            enabled: n
        } = r.R.useExperiment({
            guildId: e,
            location: "988d4e_4"
        }, {
            autoTrackExposure: t
        });
    return n
}