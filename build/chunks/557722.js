/** chunk id: 557722 params = (module,exports,require) **/
i.d(e, {
    A: () => m,
    d: () => c
});
var n, l = i(110259),
    r = i(562465),
    s = i(73153),
    a = i(961350),
    o = i(499785),
    d = i(53516),
    u = i(652215),
    c = ((n = {}).USER_ACTION_REQUIRED = "user_action_required", n.USER_SETTINGS_UPDATE = "user_settings_update", n.GUILD_PHONE_REQUIRED = "guild_phone_required", n.MFA_PHONE_UPDATE = "mfa_phone_update", n.CONTACT_SYNC = "contact_sync", n);
let m = {
    setCountryCode(t) {
        s.h.dispatch({
            type: "PHONE_SET_COUNTRY_CODE",
            countryCode: t
        })
    },
    removePhone: (t, e) => r.Bo.del({
        url: u.Rsh.PHONE,
        body: {
            password: t,
            change_phone_reason: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    resendCode(t) {
        let e = {},
            i = a.default.getFingerprint();
        return null != i && "" !== i && (e["X-Fingerprint"] = i), r.Bo.post({
            url: u.Rsh.RESEND_PHONE,
            headers: e,
            body: {
                phone: t
            },
            rejectWithError: !1
        })
    },
    beginAddPhone: (t, e) => r.Bo.post({
        url: u.Rsh.PHONE,
        body: {
            phone: t,
            change_phone_reason: e
        },
        rejectWithError: !1
    }),
    addPhone: (t, e, i) => r.Bo.post({
        url: u.Rsh.PHONE,
        body: {
            phone_token: t,
            password: e,
            change_phone_reason: i
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    addPhoneWithoutPassword: t => r.Bo.post({
        url: u.Rsh.PHONE_VERIFY_NO_PASSWORD,
        body: {
            code: t
        },
        rejectWithError: !1
    }),
    beginReverifyPhone: (t, e) => r.Bo.post({
        url: u.Rsh.PHONE_REVERIFY,
        body: {
            phone: t,
            change_phone_reason: e
        },
        rejectWithError: !1
    }),
    reverifyPhone: (t, e, i) => r.Bo.post({
        url: u.Rsh.PHONE_REVERIFY,
        body: {
            phone_token: t,
            password: e,
            change_phone_reason: i
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    validatePhoneForSupport: t => r.Bo.post({
        url: u.Rsh.VERIFY_PHONE_FOR_TICKET,
        body: {
            token: t
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    async verifyPhone(t, e) {
        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = {},
            c = a.default.getFingerprint();
        null != c && "" !== c && (r["X-Fingerprint"] = c), n && (r.authorization = "");
        let m = await o.A.post({
            url: u.Rsh.VERIFY_PHONE,
            headers: r,
            body: {
                phone: t,
                code: e
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: l.NetworkActionNames.USER_VERIFY_PHONE
            },
            rejectWithError: !1
        });
        return i && s.h.dispatch({
            type: "MODAL_POP",
            key: d.V
        }), m.body
    }
}