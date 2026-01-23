/** Chunk was on web.js **/
/** chunk id: 493740, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    DG: () => U,
    G3: () => I,
    GS: () => h,
    He: () => m,
    II: () => w,
    JK: () => _,
    OW: () => y,
    Pm: () => M,
    Qz: () => k,
    RM: () => Y,
    T7: () => S,
    Uc: () => V,
    WQ: () => D,
    Zc: () => j,
    _V: () => C,
    _w: () => x,
    aE: () => N,
    cS: () => A,
    gQ: () => p,
    ii: () => g,
    lx: () => O,
    nI: () => v,
    nh: () => b,
    sj: () => R,
    u6: () => G,
    x: () => L,
    z0: () => E,
    zL: () => T
}), n(457529);
var r = n(83790),
    i = n(626584),
    a = n(125584),
    s = n(124856),
    o = n(276767),
    l = n(594579),
    c = n(788868);
let u = new i.A("ProductCatalog.tsx");

function d(e, t) {
    if (null == t || null == t.premiumType) return !1;
    try {
        let n = c.u0[t.premiumType];
        if (null == n) return u.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
        let r = F[n];
        if (null == r) return u.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, " and premium type ").concat(t.premiumType)), !1;
        return r.skuFeatures.includes(e)
    } catch (e) {
        var n;
        u.error("Error while retrieving user's feature access: ".concat(null != (n = e.message) ? n : JSON.stringify(e)))
    }
    return !1
}
class f extends s.A {
    constructor(e, t) {
        super(e, e => d(this, e), t)
    }
}
let p = new f(r.w.ANIMATED_EMOJIS),
    _ = new f(r.w.EMOJIS_EVERYWHERE),
    h = new f(r.w.STICKERS_EVERYWHERE),
    m = new f(r.w.SOUNDBOARD_EVERYWHERE),
    g = new f(r.w.CUSTOM_CALL_SOUNDS),
    E = new f(r.w.PREMIUM_VOICE_FILTERS),
    y = new f(r.w.ANIMATED_AVATAR),
    b = new f(r.w.CUSTOM_DISCRIMINATOR),
    O = new f(r.w.PREMIUM_GUILD_MEMBER_PROFILE),
    v = new f("profileBadges"),
    A = new f(r.w.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    I = new f("collectibles"),
    S = new f("appIcons"),
    T = new f(r.w.CLIENT_THEMES),
    C = new f("boostDiscount"),
    N = new f("freeBoosts"),
    w = new f(r.w.STREAM_MID_QUALITY),
    R = new f(r.w.STREAM_HIGH_QUALITY),
    P = new f(r.w.CUSTOM_NOTIFICATION_SOUNDS),
    D = new f("fancyVoiceChannelReactions"),
    x = new f("installPremiumApplications"),
    L = new f("redeemPremiumPerks"),
    j = new f(r.w.VIDEO_FILTER_ASSETS);
new s.A(r.w.INCREASED_FILE_UPLOAD_SIZE, a.f);
let M = new f(r.w.INCREASED_GUILD_LIMIT),
    k = new f(r.w.INCREASED_MESSAGE_LENGTH),
    U = new f("increasedVideoUploadQuality"),
    G = new f("uploadLargeFiles"),
    V = new f("warpPrivateBrowsing"),
    F = Object.freeze({
        [c.pe.TIER_0]: new l.A(c.pe.TIER_0, [p, _, h, v, j, U, G, S]),
        [c.pe.TIER_1]: new l.A(c.pe.TIER_1, [p, _, y, b, v, C, w, D, U, G, S]),
        [c.pe.TIER_2]: new l.A(c.pe.TIER_2, [p, _, h, m, g, y, b, O, v, A, T, C, N, w, R, D, x, L, j, M, k, U, G, S, I, P, E, V])
    }),
    B = [C, N, V],
    H = [V];

function Y(e, t, n) {
    return !((0, o.Z)("canUserUse", t) || null != t && t.isPremiumWithFractionalPremiumOnly() && B.includes(e) || n && H.includes(e)) && e.getFeatureValue(t)
}