/** chunk id: 154672 params = (module,exports,require) **/
i.d(e, {
    A: () => o
});
var l = i(110259),
    a = i(933681),
    n = i(73153),
    r = i(499785),
    s = i(652215);
let o = {
    signup: (t, e) => r.A.post({
        url: s.Rsh.HUB_WAITLIST_SIGNUP,
        body: {
            email: t,
            school: e
        },
        trackedActionData: {
            event: l.NetworkActionNames.HUB_WAITLIST_SIGNUP,
            properties: t => {
                let e = !1,
                    i = t?.body?.email_domain;
                return null != i && (e = -1 !== i.split(".").indexOf("edu")), (0, a.e0)({
                    is_edu_email: e
                })
            }
        },
        rejectWithError: !1
    }),
    sendVerificationEmail: async (t, e, i) => (await r.A.post({
        url: s.Rsh.HUB_EMAIL_VERIFY_SEND,
        body: {
            email: t,
            guild_id: i,
            allow_multiple_guilds: e,
            use_verification_code: !0
        },
        trackedActionData: {
            event: l.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
            properties: t => {
                let e = t?.body?.has_matching_guild;
                return (0, a.e0)({
                    has_matching_guild: e
                })
            }
        },
        rejectWithError: !1
    })).body,
    async verify(t) {
        if (null != t) try {
            let e = await r.A.post({
                    url: s.Rsh.HUB_EMAIL_VERIFY,
                    body: {
                        token: t
                    },
                    trackedActionData: {
                        event: l.NetworkActionNames.HUB_EMAIL_VERIFY
                    },
                    rejectWithError: !1
                }),
                i = e.body.guild?.id;
            n.h.dispatch({
                type: "HUB_VERIFY_EMAIL_SUCCESS",
                guildId: i
            })
        } catch (t) {
            n.h.dispatch({
                type: "HUB_VERIFY_EMAIL_FAILURE",
                errors: t.body
            })
        }
    },
    async verifyCode(t, e, i) {
        if (null != t) try {
            let a = await r.A.post({
                    url: s.Rsh.HUB_EMAIL_VERIFY_CODE,
                    body: {
                        code: t,
                        guild_id: e,
                        email: i
                    },
                    trackedActionData: {
                        event: l.NetworkActionNames.HUB_EMAIL_VERIFY
                    },
                    rejectWithError: !1
                }),
                o = a.body.guild?.id;
            return n.h.dispatch({
                type: "HUB_VERIFY_EMAIL_SUCCESS",
                guildId: o
            }), a.body
        } catch (t) {
            throw n.h.dispatch({
                type: "HUB_VERIFY_EMAIL_FAILURE",
                errors: t.body
            }), t
        }
    }
}