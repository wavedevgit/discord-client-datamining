/** Chunk was on 86142 **/
/** chunk id: 557722, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h,
    d: () => u
});
var r, i = n(110259),
    s = n(562465),
    l = n(73153),
    a = n(961350),
    o = n(499785),
    c = n(53516),
    d = n(652215),
    u = ((r = {}).USER_ACTION_REQUIRED = "user_action_required", r.USER_SETTINGS_UPDATE = "user_settings_update", r.GUILD_PHONE_REQUIRED = "guild_phone_required", r.MFA_PHONE_UPDATE = "mfa_phone_update", r.CONTACT_SYNC = "contact_sync", r);
let h = {
    setCountryCode(e) {
        l.h.dispatch({
            type: "PHONE_SET_COUNTRY_CODE",
            countryCode: e
        })
    },
    removePhone: (e, t) => s.Bo.del({
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
            n = a.default.getFingerprint();
        return null != n && "" !== n && (t["X-Fingerprint"] = n), s.Bo.post({
            url: d.Rsh.RESEND_PHONE,
            headers: t,
            body: {
                phone: e
            },
            rejectWithError: !1
        })
    },
    beginAddPhone: (e, t) => s.Bo.post({
        url: d.Rsh.PHONE,
        body: {
            phone: e,
            change_phone_reason: t
        },
        rejectWithError: !1
    }),
    addPhone: (e, t, n) => s.Bo.post({
        url: d.Rsh.PHONE,
        body: {
            phone_token: e,
            password: t,
            change_phone_reason: n
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    addPhoneWithoutPassword: e => s.Bo.post({
        url: d.Rsh.PHONE_VERIFY_NO_PASSWORD,
        body: {
            code: e
        },
        rejectWithError: !1
    }),
    beginReverifyPhone: (e, t) => s.Bo.post({
        url: d.Rsh.PHONE_REVERIFY,
        body: {
            phone: e,
            change_phone_reason: t
        },
        rejectWithError: !1
    }),
    reverifyPhone: (e, t, n) => s.Bo.post({
        url: d.Rsh.PHONE_REVERIFY,
        body: {
            phone_token: e,
            password: t,
            change_phone_reason: n
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    validatePhoneForSupport: e => s.Bo.post({
        url: d.Rsh.VERIFY_PHONE_FOR_TICKET,
        body: {
            token: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    async verifyPhone(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = {},
            u = a.default.getFingerprint();
        null != u && "" !== u && (s["X-Fingerprint"] = u), r && (s.authorization = "");
        let h = await o.A.post({
            url: d.Rsh.VERIFY_PHONE,
            headers: s,
            body: {
                phone: e,
                code: t
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.USER_VERIFY_PHONE
            },
            rejectWithError: !1
        });
        return n && l.h.dispatch({
            type: "MODAL_POP",
            key: c.V
        }), h.body
    }
}