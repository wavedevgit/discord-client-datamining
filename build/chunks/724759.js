/** chunk id: 724759 params = (module,exports,require) **/
n.d(t, {
    BF: () => r,
    HW: () => a,
    zK: () => s
});
var i, l = n(945810),
    a = ((i = {})[i.NONE = 0] = "NONE", i[i.OPEN_GAME_PROFILE = 1] = "OPEN_GAME_PROFILE", i[i.OPEN_APPLICATION_WIDGET = 2] = "OPEN_APPLICATION_WIDGET", i);
let s = (0, l.mj)({
    name: "2026-04-social-layer-storefront-vc-gifting-panel",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        gameDetailsButtonMode: 0
    },
    variations: {
        0: {
            enabled: !1,
            gameDetailsButtonMode: 0
        },
        1: {
            enabled: !0,
            gameDetailsButtonMode: 1
        },
        2: {
            enabled: !0,
            gameDetailsButtonMode: 2
        }
    }
});

function r(e) {
    let {
        location: t
    } = e;
    return s.useConfig({
        location: t
    }).enabled
}