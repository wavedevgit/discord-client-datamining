/** chunk id: 921517, original params: e,t,_ (module,exports,require) **/
_.d(t, {
    RL: () => r,
    sH: () => i
});
var n = _(933681),
    a = _(945810),
    o = _(654487);
let c = (0, a.mj)({
    name: "2026-01-quest-bar-unfurl",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        variant: null
    },
    variations: {
        1: {
            enabled: !0,
            variant: 0
        },
        2: {
            enabled: !0,
            variant: 1
        }
    }
});

function r(e) {
    return e.features.includes(o.Li.QUEST_BAR_UNFURL)
}

function i() {
    let {
        enabled: e,
        variant: t
    } = c.useConfig({
        location: o.rE.QUESTS_BAR
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
                    (0, n.dr)(e)
            }
        }(t)
    }
}