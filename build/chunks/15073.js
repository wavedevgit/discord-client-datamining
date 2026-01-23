/** Chunk was on 92853 **/
/** chunk id: 15073, original params: e,t,i (module,exports,require) **/
i.d(t, {
    TZ: () => d,
    zi: () => o
});
var s = i(311907),
    l = i(600975),
    n = i(576705),
    a = i(652215);
let r = (0, l.C)({
    kind: "guild",
    id: "2022-11_default_disable_mass_mention",
    label: "Disable mass mentions for communities by default",
    defaultConfig: {
        enabled: !1
    },
    treatments: [{
        id: 1,
        label: "Enabled",
        config: {
            enabled: !0
        }
    }]
});

function o(e) {
    return r.useExperiment({
        guildId: e,
        location: "dd4beb_1"
    }, {
        autoTrackExposure: !0
    })
}

function d(e) {
    var t;
    let i = (0, s.bG)([n.A], () => n.A.can(a.xBc.MANAGE_GUILD, e)),
        {
            enabled: l
        } = r.useExperiment({
            guildId: null != (t = null == e ? void 0 : e.id) ? t : a.dJq,
            location: "dd4beb_3"
        }, {
            autoTrackExposure: !0
        });
    if (null == e) return !1;
    let o = e.features.has(a.GuildFeatures.COMMUNITY);
    return i && o && l
}