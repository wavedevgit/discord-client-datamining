/** Chunk was on web.js **/
/** chunk id: 704640, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(827734),
    i = n(788868);
let a = i.Ac.PREMIUM_TENURE_1_MONTH,
    o = {
        [i.Ac.PREMIUM_TENURE_1_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END"
        },
        [i.Ac.PREMIUM_TENURE_3_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END"
        },
        [i.Ac.PREMIUM_TENURE_6_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END"
        },
        [i.Ac.PREMIUM_TENURE_12_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END"
        },
        [i.Ac.PREMIUM_TENURE_24_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END"
        },
        [i.Ac.PREMIUM_TENURE_36_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END"
        },
        [i.Ac.PREMIUM_TENURE_60_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END"
        },
        [i.Ac.PREMIUM_TENURE_72_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END"
        }
    };

function s(e) {
    var t;
    let n = null != (t = o[null != e ? e : a]) ? t : o[a];
    return {
        type: "custom",
        start: r.A.colors[n.start],
        end: r.A.colors[n.end]
    }
}