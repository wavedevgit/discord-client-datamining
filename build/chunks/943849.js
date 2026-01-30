/** chunk id: 943849, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    L: () => l
});
var r = n(626584),
    i = n(600975),
    a = n(818348);
let o = (0, i.C)({
        id: "2024-04_quests_logging",
        kind: "user",
        label: "Quests Logging",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 0,
            label: "Control",
            config: {
                enabled: !1
            }
        }, {
            id: 1,
            label: "Quest logging enabled",
            config: {
                enabled: !0
            }
        }]
    }),
    s = () => o.getCurrentConfig({
        location: "quests_logging"
    }, {
        autoTrackExposure: !1
    }).enabled;

function l() {
    let {
        quest: e,
        location: t
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = s(), i = null == e ? void 0 : e.config.messages.questName, o = null != t ? "-".concat(t) : "", l = null != i ? "-".concat(i, ")") : "", c = "QuestLogger".concat(o).concat(l), u = new r.A(c);
    return {
        log: n ? u.log : a.tE,
        warn: n ? u.warn : a.tE,
        error: n ? u.error : a.tE,
        info: n ? u.info : a.tE,
        verbose: n ? u.verbose : a.tE,
        trace: n ? u.trace : a.tE
    }
}