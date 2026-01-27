/** Chunk was on web.js **/
/** chunk id: 874864, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $_: () => y,
    DU: () => v,
    Lp: () => A,
    Pf: () => O,
    QR: () => b,
    q5: () => I
});
var r = n(827734),
    i = n(397927);
n(358431);
var a = n(776627),
    o = n(652215);
n(788868);
var s = n(985018);
let l = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.sYc,
        description: s.intl.string(s.t.iGuEFe)
    }),
    c = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
        return {
            color: e,
            icon: i.Osp,
            description: s.intl.string(s.t["94l3Ul"])
        }
    },
    u = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.sYc,
        description: s.intl.string(s.t["n/HqCh"])
    }),
    d = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.Osp,
        description: s.intl.string(s.t.AU0zcQ)
    }),
    f = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: i.iTF,
        description: s.intl.string(s.t.zZe94m)
    }),
    p = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
        return {
            color: e,
            icon: i.tEP,
            description: s.intl.string(s.t.ZwOSdn)
        }
    },
    _ = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            n = 0,
            a = 0;
        switch (e) {
            case o.TVA.TIER_1:
                n = 15, a = 100;
                break;
            case o.TVA.TIER_2:
                n = 30, a = 150;
                break;
            case o.TVA.TIER_3:
                n = 60, a = 250
        }
        return {
            color: t,
            icon: i.tEP,
            description: s.intl.formatToPlainString(s.t["12vFYK"], {
                numStickers: n,
                numEmojis: a
            })
        }
    },
    h = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: i.Gg5,
        description: s.intl.string(s.t["ThRK/u"])
    }),
    m = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.intl.string(s.t.SQV8g6);
        return {
            color: r.A.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
            icon: i.nm2,
            description: e
        }
    },
    g = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
        icon: a.A,
        description: s.intl.string(s.t.Tm40TZ)
    }),
    E = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
        return {
            color: e,
            icon: i.Fzq,
            description: s.intl.string(s.t.oIKhwT)
        }
    };

function y() {
    return [f(), u(), p(), m()]
}

function b() {
    return [f(), _(o.TVA.TIER_2), E(), m()]
}

function O() {
    return [_(o.TVA.TIER_3, r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css), g(), h(), m()]
}

function v() {
    return [h(), d(), _(o.TVA.TIER_3), m()]
}

function A() {
    return [l(), p(), c(), m()]
}

function I() {
    return [p(), m()]
}