/** chunk id: 500094 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(600975),
    r = n(688151);
let l = (0, i.C)({
    kind: "guild",
    id: "2025-04_report_to_mod",
    label: "Report to moderator",
    commonTriggerPoint: r.$G.CONNECTION_OPEN,
    defaultConfig: {
        enabled: !1
    },
    treatments: [{
        id: 1,
        label: "report to moderator triggering",
        config: {
            enabled: !0
        }
    }]
})