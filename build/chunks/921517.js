/** chunk id: 921517, original params: e,t,a (module,exports,require) **/
a.d(t, {
    RL: () => _,
    sH: () => c
});
var n = a(933681),
    r = a(945810),
    i = a(654487);
let o = (0, r.mj)({
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

function _(e) {
    return !0
}

function c() {
    let {
        enabled: e,
        variant: t
    } = o.useConfig({
        location: i.rE.QUESTS_BAR
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