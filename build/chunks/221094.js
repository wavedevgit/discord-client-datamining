/** chunk id: 221094 params = (module,exports,require) **/
n.d(t, {
    y: () => s
});
var i = n(64700),
    l = n(600975),
    r = n(652215);
let a = (0, l.C)({
        kind: "guild",
        id: "2021-10_study_group",
        label: "Student hub study group",
        defaultConfig: {
            enableStudyGroup: !1
        },
        treatments: [{
            id: 1,
            label: "Enables study group sidebar",
            config: {
                enableStudyGroup: !0
            }
        }]
    }),
    s = e => (i.useEffect(() => {
        null != e && e.features.has(r.GuildFeatures.HUB) && a.trackExposure({
            guildId: e.id,
            location: "467c32_1"
        })
    }, [e]), a.useExperiment({
        guildId: e?.id ?? r.dJq,
        location: "467c32_2"
    }, {
        autoTrackExposure: !1,
        disable: null == e || !e.features.has(r.GuildFeatures.HUB)
    }))