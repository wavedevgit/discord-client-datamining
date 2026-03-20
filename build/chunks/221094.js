/** chunk id: 221094 params = (module,exports,require) **/
n.d(t, {
    y: () => s
});
var i = n(64700),
    a = n(600975),
    l = n(652215);
let r = (0, a.C)({
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
        null != e && e.features.has(l.GuildFeatures.HUB) && r.trackExposure({
            guildId: e.id,
            location: "467c32_1"
        })
    }, [e]), r.useExperiment({
        guildId: e?.id ?? l.dJq,
        location: "467c32_2"
    }, {
        autoTrackExposure: !1,
        disable: null == e || !e.features.has(l.GuildFeatures.HUB)
    }))