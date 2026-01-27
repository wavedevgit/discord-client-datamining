/** Chunk was on web.js **/
/** chunk id: 149757, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    I: () => v,
    N: () => O
});
var r = n(788868),
    i = n(714206),
    a = n(151818),
    o = n(153578),
    s = n(971180),
    l = n(104876),
    c = n(803630),
    u = n(797898),
    d = n(112153),
    f = n(122725),
    p = n(695351),
    _ = n(460901),
    h = n(367056),
    m = n(395663),
    g = n(907990),
    E = n(164331),
    y = n(997734);
let b = {
        [r.Ac.PREMIUM_TENURE_1_MONTH]: {
            standard: i,
            ambient: f.A
        },
        [r.Ac.PREMIUM_TENURE_3_MONTH]: {
            standard: d,
            ambient: p.A
        },
        [r.Ac.PREMIUM_TENURE_6_MONTH]: {
            standard: s,
            ambient: _.A
        },
        [r.Ac.PREMIUM_TENURE_12_MONTH]: {
            standard: c,
            ambient: h.A
        },
        [r.Ac.PREMIUM_TENURE_24_MONTH]: {
            standard: a,
            ambient: m.A
        },
        [r.Ac.PREMIUM_TENURE_36_MONTH]: {
            standard: o,
            ambient: g.A
        },
        [r.Ac.PREMIUM_TENURE_60_MONTH]: {
            standard: u,
            ambient: E.A
        },
        [r.Ac.PREMIUM_TENURE_72_MONTH]: {
            standard: l,
            ambient: y.A
        }
    },
    O = function(e) {
        let {
            ambient: t = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return null != e ? v(e, {
            ambient: t
        }) : null
    };

function v(e) {
    let {
        ambient: t = !1
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = b[e];
    return t ? n.ambient : n.standard
}