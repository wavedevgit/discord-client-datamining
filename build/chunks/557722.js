/** chunk id: 557722 params = (module,exports,require) **/
n.d(e, {
    A: () => h,
    d: () => c
});
var i, l = n(110259),
    r = n(562465),
    s = n(73153),
    a = n(961350),
    o = n(499785),
    u = n(53516),
    d = n(652215),
    c = ((i = {}).USER_ACTION_REQUIRED = "user_action_required", i.USER_SETTINGS_UPDATE = "user_settings_update", i.GUILD_PHONE_REQUIRED = "guild_phone_required", i.MFA_PHONE_UPDATE = "mfa_phone_update", i.CONTACT_SYNC = "contact_sync", i);
let h = {
    setCountryCode(t) {
        s.h.dispatch({
            type: "PHONE_SET_COUNTRY_CODE",
            countryCode: t
        })
    },
    removePhone: (t, e) => r.Bo.del({
        url: d.Rsh.PHONE,
        body: {
            password: t,
            change_phone_reason: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    resendCode(t) {
        let e = {},
            n = a.default.getFingerprint();
        return null != n && "" !== n && (e["X-Fingerprint"] = n), r.Bo.post({
            url: d.Rsh.RESEND_PHONE,
            headers: e,
            body: {
                phone: t
            },
            rejectWithError: !1
        })
    },
    beginAddPhone: (t, e) => r.Bo.post({
        url: d.Rsh.PHONE,
        body: {
            phone: t,
            change_phone_reason: e
        },
        rejectWithError: !1
    }),
    addPhone: (t, e, n) => r.Bo.post({
        url: d.Rsh.PHONE,
        body: {
            phone_token: t,
            password: e,
            change_phone_reason: n
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    addPhoneWithoutPassword: t => r.Bo.post({
        url: d.Rsh.PHONE_VERIFY_NO_PASSWORD,
        body: {
            code: t
        },
        rejectWithError: !1
    }),
    beginReverifyPhone: (t, e) => r.Bo.post({
        url: d.Rsh.PHONE_REVERIFY,
        body: {
            phone: t,
            change_phone_reason: e
        },
        rejectWithError: !1
    }),
    reverifyPhone: (t, e, n) => r.Bo.post({
        url: d.Rsh.PHONE_REVERIFY,
        body: {
            phone_token: t,
            password: e,
            change_phone_reason: n
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    validatePhoneForSupport: t => r.Bo.post({
        url: d.Rsh.VERIFY_PHONE_FOR_TICKET,
        body: {
            token: t
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    async verifyPhone(t, e) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = {},
            c = a.default.getFingerprint();
        null != c && "" !== c && (r["X-Fingerprint"] = c), i && (r.authorization = "");
        let h = await o.A.post({
            url: d.Rsh.VERIFY_PHONE,
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
        return n && s.h.dispatch({
            type: "MODAL_POP",
            key: u.V
        }), h.body
    }
}