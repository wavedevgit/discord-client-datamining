/** Chunk was on 84704 **/
/** chunk id: 446868, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(735438),
    s = n.n(l),
    a = n(652215),
    i = n(985018);
let {
    CAPTCHA: o,
    EMAIL: r,
    PHONE: u,
    REVERIFY_EMAIL: E,
    REVERIFY_PHONE: c
} = a.Fz7, d = {
    [a.a3B.REQUIRE_VERIFIED_EMAIL]: [r],
    [a.a3B.REQUIRE_VERIFIED_PHONE]: [u],
    [a.a3B.REQUIRE_REVERIFIED_EMAIL]: [E],
    [a.a3B.REQUIRE_REVERIFIED_PHONE]: [c],
    [a.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [r, u],
    [a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [u, E],
    [a.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [r, c],
    [a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [E, c],
    [a.a3B.REQUIRE_CAPTCHA]: [o],
    [a.a3B.AGREEMENTS]: [],
    [a.a3B.REQUIRE_SAFETY_FLOWS]: []
}, h = {
    isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === a.a3B.REQUIRE_REVERIFIED_PHONE || t === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === a.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
    isEmailReverification: e => e === a.a3B.REQUIRE_REVERIFIED_EMAIL || e === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
    isFullScreenVerification(e) {
        return e === a.a3B.REQUIRE_CAPTCHA || e === a.a3B.REQUIRE_VERIFIED_EMAIL || e === a.a3B.REQUIRE_VERIFIED_PHONE || e === a.a3B.REQUIRE_REVERIFIED_PHONE || e === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === a.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || this.isEmailReverification(e)
    },
    getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : d[e],
    getButtonTitle(e) {
        switch (e) {
            case a.Fz7.EMAIL:
                return i.intl.string(i.t["1MPz27"]);
            case a.Fz7.PHONE:
                return i.intl.string(i.t.mjJeco);
            case a.Fz7.REVERIFY_EMAIL:
                return i.intl.string(i.t.nmdPFX);
            case a.Fz7.REVERIFY_PHONE:
                return i.intl.string(i.t.of2125);
            default:
                return i.intl.string(i.t["oF6+Ww"])
        }
    },
    areVerificationTypesEqual: (e, t) => s().isEqual(e, t)
}