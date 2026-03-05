/** chunk id: 921517 params = (module,exports,require) **/
a.d(t, {
    RL: () => i,
    sH: () => s
});
var r = a(933681),
    n = a(945810),
    _ = a(654487);
let o = (0, n.mj)({
    name: "2026-01-quest-bar-unfurl",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        variant: null
    },
    variations: {
        2: {
            enabled: !0,
            variant: 0
        },
        3: {
            enabled: !0,
            variant: 1
        }
    }
});

function i(e) {
    return !0
}

function s() {
    let {
        enabled: e,
        variant: t
    } = o.useConfig({
        location: _.rE.QUESTS_BAR
    });
    return {
        unfurlEnabled: e,
        unfurlDurationInMilliseconds: function(e) {
            if (null != e) switch (e) {
                case 0:
                    return 5e3;
                case 1:
                    return 1e4;
                default:
                    (0, r.dr)(e)
            }
        }(t)
    }
}