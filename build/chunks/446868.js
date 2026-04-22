/** chunk id: 446868 params = (module,exports,require) **/
n.d(t, {
    A: () => R
});
var s = n(735438),
    a = n.n(s),
    l = n(652215),
    i = n(985018);
let {
    CAPTCHA: o,
    EMAIL: r,
    PHONE: E,
    REVERIFY_EMAIL: d,
    REVERIFY_PHONE: u
} = l.Fz7, c = {
    [l.a3B.REQUIRE_VERIFIED_EMAIL]: [r],
    [l.a3B.REQUIRE_VERIFIED_PHONE]: [E],
    [l.a3B.REQUIRE_REVERIFIED_EMAIL]: [d],
    [l.a3B.REQUIRE_REVERIFIED_PHONE]: [u],
    [l.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [r, E],
    [l.a3B.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [E, d],
    [l.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [r, u],
    [l.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [d, u],
    [l.a3B.REQUIRE_CAPTCHA]: [o],
    [l.a3B.AGREEMENTS]: [],
    [l.a3B.REQUIRE_SAFETY_FLOWS]: []
}, R = {
    isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === l.a3B.REQUIRE_REVERIFIED_PHONE || t === l.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === l.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
    isEmailReverification: e => e === l.a3B.REQUIRE_REVERIFIED_EMAIL || e === l.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === l.a3B.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
    isFullScreenVerification(e) {
        return e === l.a3B.REQUIRE_CAPTCHA || e === l.a3B.REQUIRE_VERIFIED_EMAIL || e === l.a3B.REQUIRE_VERIFIED_PHONE || e === l.a3B.REQUIRE_REVERIFIED_PHONE || e === l.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === l.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || this.isEmailReverification(e)
    },
    getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : c[e],
    getButtonTitle(e) {
        switch (e) {
            case l.Fz7.EMAIL:
                return i.intl.string(i.t["1MPz27"]);
            case l.Fz7.PHONE:
                return i.intl.string(i.t.mjJeco);
            case l.Fz7.REVERIFY_EMAIL:
                return i.intl.string(i.t.nmdPFX);
            case l.Fz7.REVERIFY_PHONE:
                return i.intl.string(i.t.of2125);
            default:
                return i.intl.string(i.t["oF6+Ww"])
        }
    },
    areVerificationTypesEqual: (e, t) => a().isEqual(e, t)
}