/** chunk id: 927018 params = (module,exports,require) **/
i.d(e, {
    ag: () => u,
    l0: () => c,
    md: () => o,
    sn: () => a,
    vM: () => d
});
var n, r, l = i(103640),
    s = i(985018),
    a = ((n = {})[n.ENABLE_POGGERMODE = 0] = "ENABLE_POGGERMODE", n[n.DISABLE_POGGERMODE = 1] = "DISABLE_POGGERMODE", n[n.PING_SOMEONE = 2] = "PING_SOMEONE", n[n.PING_ME = 3] = "PING_ME", n[n.COMBO_MULTI_LEVEL_1 = 4] = "COMBO_MULTI_LEVEL_1", n[n.COMBO_MULTI_LEVEL_2 = 5] = "COMBO_MULTI_LEVEL_2", n[n.COMBO_MULTI_LEVEL_3 = 6] = "COMBO_MULTI_LEVEL_3", n[n.COMBO_MULTI_LEVEL_4 = 7] = "COMBO_MULTI_LEVEL_4", n[n.TOTAL_SCORE_LEVEL_1 = 8] = "TOTAL_SCORE_LEVEL_1", n[n.TOTAL_SCORE_LEVEL_2 = 9] = "TOTAL_SCORE_LEVEL_2", n[n.TOTAL_SCORE_LEVEL_3 = 10] = "TOTAL_SCORE_LEVEL_3", n[n.TOTAL_SCORE_LEVEL_4 = 11] = "TOTAL_SCORE_LEVEL_4", n[n.TOTAL_SCORE_LEVEL_5 = 12] = "TOTAL_SCORE_LEVEL_5", n[n.VISITOR_100 = 13] = "VISITOR_100", n[n.CUSTOMIZE_CONFETTI = 14] = "CUSTOMIZE_CONFETTI", n[n.MORE = 15] = "MORE", n[n.COMBO_VALUE_LEVEL_1 = 16] = "COMBO_VALUE_LEVEL_1", n[n.COMBO_VALUE_LEVEL_2 = 17] = "COMBO_VALUE_LEVEL_2", n[n.COMBO_VALUE_LEVEL_3 = 18] = "COMBO_VALUE_LEVEL_3", n[n.COMBO_VALUE_LEVEL_4 = 19] = "COMBO_VALUE_LEVEL_4", n),
    o = ((r = {})[r.COMMON = 0] = "COMMON", r[r.UNCOMMON = 1] = "UNCOMMON", r[r.RARE = 2] = "RARE", r[r.EPIC = 3] = "EPIC", r[r.LEGENDARY = 4] = "LEGENDARY", r);
let c = {
    0: {
        id: 0,
        name: () => s.intl.string(s.t["CRLcO+"]),
        description: () => s.intl.string(s.t["9+4/CD"]),
        rarity: 0,
        hideDescriptionUntilUnlock: !1
    },
    1: {
        id: 1,
        name: () => s.intl.string(s.t.PlhJTk),
        description: () => s.intl.string(s.t["+QxFMr"]),
        rarity: 1,
        hideDescriptionUntilUnlock: !1
    },
    13: {
        id: 13,
        name: () => s.intl.string(s.t["+91bDx"]),
        description: () => s.intl.string(s.t["6Zakdf"]),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        onAction: () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
        }
    },
    14: {
        id: 14,
        name: () => s.intl.string(s.t.OdenKS),
        description: () => s.intl.string(s.t["06/08A"]),
        rarity: 0,
        hideDescriptionUntilUnlock: !1
    },
    15: {
        id: 15,
        name: () => s.intl.string(s.t["C88+vm"]),
        description: () => s.intl.string(s.t.w4SYNC),
        rarity: 1,
        hideDescriptionUntilUnlock: !1
    },
    2: {
        id: 2,
        name: () => s.intl.string(s.t["7q1avI"]),
        description: () => s.intl.string(s.t.XwAgCF),
        rarity: 0,
        hideDescriptionUntilUnlock: !1
    },
    3: {
        id: 3,
        name: () => s.intl.formatToMarkdownString(s.t.NgKcOi, {}),
        description: () => s.intl.string(s.t.jmzQrA),
        rarity: 1,
        hideDescriptionUntilUnlock: !1
    },
    4: {
        id: 4,
        name: () => s.intl.string(s.t.q3ekQx),
        description: () => s.intl.string(s.t.KDk6IG),
        rarity: 0,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: t => t.multiplier >= 2
    },
    5: {
        id: 5,
        name: () => s.intl.string(s.t.k6NlxZ),
        description: () => s.intl.string(s.t.A4Bi5z),
        rarity: 1,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: t => t.multiplier >= 4
    },
    6: {
        id: 6,
        name: () => s.intl.string(s.t.EPQN54),
        description: () => s.intl.string(s.t["NS/QvW"]),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: t => t.multiplier >= 5
    },
    7: {
        id: 7,
        name: () => s.intl.string(s.t["H/xC9h"]),
        description: () => s.intl.string(s.t.NECb4t),
        rarity: 2,
        hideDescriptionUntilUnlock: !1,
        checkUnlock: t => t.multiplier >= 7
    },
    8: {
        id: 8,
        name: () => s.intl.string(s.t["24aD8g"]),
        description: () => s.intl.string(s.t.YtKoSd),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: t => 430 === (0, l.RL)(t)
    },
    9: {
        id: 9,
        name: () => s.intl.string(s.t.vZm483),
        description: () => s.intl.string(s.t.QKxjeQ),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: t => 555 === (0, l.RL)(t)
    },
    10: {
        id: 10,
        name: () => s.intl.string(s.t.SxLn1y),
        description: () => s.intl.string(s.t["7tuql7"]),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: t => 898 === (0, l.RL)(t)
    },
    11: {
        id: 11,
        name: () => s.intl.string(s.t.hK1RPg),
        description: () => s.intl.string(s.t.okzLOT),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: t => 1337 === (0, l.RL)(t)
    },
    12: {
        id: 12,
        name: () => s.intl.string(s.t.Pa8olZ),
        description: () => s.intl.string(s.t.KSzHjj),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: t => 2048 === (0, l.RL)(t)
    },
    16: {
        id: 16,
        name: () => s.intl.string(s.t.lXhhWS),
        description: () => s.intl.string(s.t.OxvobM),
        rarity: 2,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: t => 64 === t.value
    },
    17: {
        id: 17,
        name: () => s.intl.string(s.t.M4ErfE),
        description: () => s.intl.string(s.t["sjzx+z"]),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: t => 88 === t.value
    },
    18: {
        id: 18,
        name: () => s.intl.string(s.t.RawXaF),
        description: () => s.intl.string(s.t.iOsWL1),
        rarity: 3,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: t => 99 === t.value
    },
    19: {
        id: 19,
        name: () => s.intl.string(s.t.irv64I),
        description: () => s.intl.string(s.t.shGZwx),
        rarity: 4,
        hideDescriptionUntilUnlock: !0,
        checkUnlock: t => 113 === t.value
    }
};

function d(t) {
    return c[t]
}
let u = t => {
    switch (t) {
        case 0:
            return {
                color: "#1ABC9C"
            };
        case 1:
            return {
                color: "#3498DB"
            };
        case 2:
            return {
                color: "#9B59B6"
            };
        case 3:
            return {
                color: "#E91E63"
            };
        case 4:
            return {
                color: "#E67E22"
            }
    }
}