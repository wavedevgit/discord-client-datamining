/** chunk id: 33621 params = (module,exports,require) **/
n.d(t, {
    t: () => r
});
var i = n(945810),
    l = n(79545);
let r = (0, i.mj)({
    name: "2025-12-quest-cta-refactor-rollout",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        enabledQuestStates: new Set
    },
    variations: {
        1: {
            enabled: !0,
            enabledQuestStates: new Set([l.UA.UNENROLLED])
        },
        2: {
            enabled: !0,
            enabledQuestStates: new Set([l.UA.UNENROLLED, l.UA.ENROLLED])
        }
    }
})