/** chunk id: 624458 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(562465),
    l = n(73153),
    s = n(157559),
    a = n(956793),
    r = n(95701),
    o = n(51271),
    c = n(844944),
    d = n(513461),
    u = n(212455),
    h = n(652215),
    A = n(985018);
let _ = {
    fetchGuildJoinRequest: async e => {
        let t = await i.Bo.get({
                url: h.Rsh.GUILD_JOIN_REQUEST_BY_ID(e),
                rejectWithError: !1
            }),
            n = (0, u.j)(t.body);
        return l.h.dispatch({
            type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS",
            joinRequest: n
        }), t
    },
    fetchGuildJoinRequests: async e => {
        let {
            guildId: t,
            status: n = d.B5.SUBMITTED,
            before: s,
            after: a,
            limit: r = 25,
            force: o = !1
        } = e, A = o || !c.A.hasFetched(t);
        if (!c.A.isFetching() && A) {
            l.h.dispatch({
                type: "GUILD_JOIN_REQUESTS_FETCH_START"
            });
            try {
                let e = await i.Bo.get({
                        url: h.Rsh.GUILD_JOIN_REQUESTS(t),
                        query: {
                            status: n,
                            limit: r,
                            before: s,
                            after: a
                        },
                        rejectWithError: !1
                    }),
                    o = e.body.total,
                    c = (e.body.guild_join_requests ?? []).map(u.j);
                return l.h.dispatch({
                    type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
                    status: n,
                    requests: c,
                    total: o,
                    limit: r,
                    guildId: t
                }), e
            } catch (e) {
                throw l.h.dispatch({
                    type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE"
                }), e
            }
        }
    },
    ackUserGuildJoinRequest: async (e, t) => {
        try {
            return await i.Bo.post({
                url: h.Rsh.GUILD_JOIN_REQUEST_ACK(e, t),
                rejectWithError: !1
            })
        } catch (e) {} finally {
            l.h.dispatch({
                type: "ACK_APPROVED_GUILD_JOIN_REQUEST",
                id: t,
                guildId: e
            })
        }
    },
    removeGuildJoinRequest: async e => {
        try {
            let t = await i.Bo.del({
                url: h.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                rejectWithError: !1
            });
            return l.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                guildId: e,
                request: null
            }), t
        } catch (e) {
            throw e
        }
    },
    updateGuildJoinRequest: async function(e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.B5.APPROVED,
            r = arguments.length > 4 ? arguments[4] : void 0;
        (0, o.iN)({
            guildId: e,
            actionType: a,
            applicationUserId: t
        });
        let c = await i.Bo.patch({
            url: h.Rsh.GUILD_JOIN_REQUEST_ID(e, n),
            body: {
                action: a,
                rejection_reason: r
            },
            rejectWithError: !1
        }).catch(e => (e && e.body && e.body.code === h.t02.REQUEST_TO_JOIN_USER_INELIGIBLE && s.A.show({
            title: A.intl.string(A.t.DxJj4e),
            body: A.intl.string(A.t.rSAOk9)
        }), Promise.reject(e)));
        l.h.dispatch({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            guildId: e,
            status: c.body.application_status,
            request: c.body
        })
    },
    actionAllPendingJoinRequests: async (e, t) => {
        let n = await i.Bo.patch({
            url: h.Rsh.GUILD_JOIN_REQUESTS(e),
            body: {
                action: t
            },
            rejectWithError: !1
        });
        return l.h.dispatch({
            type: "GUILD_JOIN_REQUESTS_BULK_ACTION",
            guildId: e,
            action: t
        }), n.body
    },
    resetGuildJoinRequest: async e => {
        try {
            let {
                body: t
            } = await i.Bo.post({
                url: h.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                rejectWithError: !1
            });
            return l.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                guildId: e,
                request: t
            }), t
        } catch (e) {
            throw e
        }
    },
    fetchRequestToJoinGuilds: async () => {
        let e = await i.Bo.get({
            url: h.Rsh.USER_JOIN_REQUEST_GUILDS,
            rejectWithError: !1
        });
        l.h.dispatch({
            type: "USER_JOIN_REQUEST_GUILDS_FETCH",
            guilds: e.body
        })
    },
    setSelectedApplicationTab: (e, t) => {
        l.h.dispatch({
            type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB",
            guildId: e,
            applicationTab: t
        })
    },
    setSelectedSortOrder: (e, t) => {
        l.h.dispatch({
            type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER",
            guildId: e,
            sortOrder: t
        })
    },
    setSelectedGuildJoinRequest: (e, t) => {
        null != t && (0, o.gH)({
            guildId: e,
            applicationStatus: t.applicationStatus,
            applicationUserId: t.userId
        }), l.h.dispatch({
            type: "GUILD_JOIN_REQUESTS_SET_SELECTED",
            guildId: e,
            request: t
        })
    },
    createOrEnterJoinRequestInterview: async function(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = await i.Bo.post({
                url: h.Rsh.GUILD_JOIN_REQUEST_INTERVIEW(e),
                rejectWithError: !1
            }),
            s = (0, r.UE)(n.body);
        return l.h.dispatch({
            type: "CHANNEL_CREATE",
            channel: s
        }), t && a.default.selectPrivateChannel(s.id), s.id
    },
    fetchJoinRequestCooldown: async e => {
        try {
            let t = await i.Bo.get({
                url: h.Rsh.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e),
                rejectWithError: !1
            });
            return l.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
                guildId: e,
                cooldown: t.body.cooldown
            }), t
        } catch (t) {
            throw l.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
                guildId: e,
                cooldown: null
            }), t
        }
    }
}