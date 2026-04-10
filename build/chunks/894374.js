/** chunk id: 894374 params = (module,exports,require) **/
n.d(e, {
    A: () => l
});
let i = (0, n(945810).mj)({
    name: "2026-02-referral-reminder-dc",
    kind: "user",
    defaultConfig: {
        enabled: !1
    },
    variations: {
        1: {
            enabled: !0
        }
    }
});

function l(t) {
    let {
        location: e
    } = t;
    return i.useConfig({
        location: e
    }).enabled
}