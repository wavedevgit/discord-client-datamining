/** chunk id: 154672, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => c
}), r(747238);
var n = r(110259),
    l = r(933681),
    i = r(73153),
    o = r(499785),
    a = r(652215);
let c = {
    signup: (e, t) => o.A.post({
        url: a.Rsh.HUB_WAITLIST_SIGNUP,
        body: {
            email: e,
            school: t
        },
        trackedActionData: {
            event: n.NetworkActionNames.HUB_WAITLIST_SIGNUP,
            properties: e => {
                var t;
                let r = !1,
                    n = null == e || null == (t = e.body) ? void 0 : t.email_domain;
                return null != n && (r = -1 !== n.split(".").indexOf("edu")), (0, l.e0)({
                    is_edu_email: r
                })
            }
        },
        rejectWithError: !1
    }),
    sendVerificationEmail: async (e, t, r) => (await o.A.post({
        url: a.Rsh.HUB_EMAIL_VERIFY_SEND,
        body: {
            email: e,
            guild_id: r,
            allow_multiple_guilds: t,
            use_verification_code: !0
        },
        trackedActionData: {
            event: n.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
            properties: e => {
                var t;
                let r = null == e || null == (t = e.body) ? void 0 : t.has_matching_guild;
                return (0, l.e0)({
                    has_matching_guild: r
                })
            }
        },
        rejectWithError: !1
    })).body,
    async verify(e) {
        if (null != e) try {
            var t;
            let r = null == (t = (await o.A.post({
                url: a.Rsh.HUB_EMAIL_VERIFY,
                body: {
                    token: e
                },
                trackedActionData: {
                    event: n.NetworkActionNames.HUB_EMAIL_VERIFY
                },
                rejectWithError: !1
            })).body.guild) ? void 0 : t.id;
            i.h.dispatch({
                type: "HUB_VERIFY_EMAIL_SUCCESS",
                guildId: r
            })
        } catch (e) {
            i.h.dispatch({
                type: "HUB_VERIFY_EMAIL_FAILURE",
                errors: e.body
            })
        }
    },
    async verifyCode(e, t, r) {
        if (null != e) try {
            var l;
            let c = await o.A.post({
                    url: a.Rsh.HUB_EMAIL_VERIFY_CODE,
                    body: {
                        code: e,
                        guild_id: t,
                        email: r
                    },
                    trackedActionData: {
                        event: n.NetworkActionNames.HUB_EMAIL_VERIFY
                    },
                    rejectWithError: !1
                }),
                s = null == (l = c.body.guild) ? void 0 : l.id;
            return i.h.dispatch({
                type: "HUB_VERIFY_EMAIL_SUCCESS",
                guildId: s
            }), c.body
        } catch (e) {
            throw i.h.dispatch({
                type: "HUB_VERIFY_EMAIL_FAILURE",
                errors: e.body
            }), e
        }
    }
}