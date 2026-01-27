/** Chunk was on 52199 **/
/** chunk id: 261718, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => l
});
let n = (0, r(600975).C)({
    kind: "user",
    id: "2024-12_participants_panel",
    label: "Participants Panel",
    defaultConfig: {
        hasParticipantsPanel: !1
    },
    treatments: [{
        id: 1,
        label: "Participants panel in VC and GDM",
        config: {
            hasParticipantsPanel: !0
        }
    }]
});

function l(e) {
    return n.useExperiment(e)
}