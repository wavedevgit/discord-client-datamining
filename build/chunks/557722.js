/** chunk id: 557722 params = (module,exports,require) **/
i.d(t, {
    A: () => m,
    d: () => u
});
var n, a = i(110259),
    l = i(562465),
    s = i(73153),
    r = i(961350),
    o = i(499785),
    c = i(53516),
    d = i(652215),
    u = ((n = {}).USER_ACTION_REQUIRED = "user_action_required", n.USER_SETTINGS_UPDATE = "user_settings_update", n.GUILD_PHONE_REQUIRED = "guild_phone_required", n.MFA_PHONE_UPDATE = "mfa_phone_update", n.CONTACT_SYNC = "contact_sync", n);
let m = {
    setCountryCode(e) {
        s.h.dispatch({
            type: "PHONE_SET_COUNTRY_CODE",
            countryCode: e
        })
    },
    removePhone: (e, t) => l.Bo.del({
        url: d.Rsh.PHONE,
        body: {
            password: e,
            change_phone_reason: t
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    resendCode(e) {
        let t = {},
            i = r.default.getFingerprint();
        return null != i && "" !== i && (t["X-Fingerprint"] = i), l.Bo.post({
            url: d.Rsh.RESEND_PHONE,
            headers: t,
            body: {
                phone: e
            },
            rejectWithError: !1
        })
    },
    beginAddPhone: (e, t) => l.Bo.post({
        url: d.Rsh.PHONE,
        body: {
            phone: e,
            change_phone_reason: t
        },
        rejectWithError: !1
    }),
    addPhone: (e, t, i) => l.Bo.post({
        url: d.Rsh.PHONE,
        body: {
            phone_token: e,
            password: t,
            change_phone_reason: i
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    addPhoneWithoutPassword: e => l.Bo.post({
        url: d.Rsh.PHONE_VERIFY_NO_PASSWORD,
        body: {
            code: e
        },
        rejectWithError: !1
    }),
    beginReverifyPhone: (e, t) => l.Bo.post({
        url: d.Rsh.PHONE_REVERIFY,
        body: {
            phone: e,
            change_phone_reason: t
        },
        rejectWithError: !1
    }),
    reverifyPhone: (e, t, i) => l.Bo.post({
        url: d.Rsh.PHONE_REVERIFY,
        body: {
            phone_token: e,
            password: t,
            change_phone_reason: i
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    validatePhoneForSupport: e => l.Bo.post({
        url: d.Rsh.VERIFY_PHONE_FOR_TICKET,
        body: {
            token: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    async verifyPhone(e, t) {
        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            l = {},
            u = r.default.getFingerprint();
        null != u && "" !== u && (l["X-Fingerprint"] = u), n && (l.authorization = "");
        let m = await o.A.post({
            url: d.Rsh.VERIFY_PHONE,
            headers: l,
            body: {
                phone: e,
                code: t
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: a.NetworkActionNames.USER_VERIFY_PHONE
            },
            rejectWithError: !1
        });
        return i && s.h.dispatch({
            type: "MODAL_POP",
            key: c.V
        }), m.body
    }
}