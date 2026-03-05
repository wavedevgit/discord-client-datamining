/** chunk id: 43594 params = (module,exports,require) **/
a.d(t, {
    D: () => s
});
let r = (0, a(250105).Ay)({
    name: "2026-02-boosting-refresh-modals",
    kind: "user",
    defaultConfig: {
        variant: "control"
    },
    variations: {
        0: {
            variant: "control"
        },
        1: {
            variant: "refresh"
        },
        2: {
            variant: "refresh_expressive_cta"
        }
    }
});

function s(e) {
    return r.useConfig({
        location: e
    }).variant
}