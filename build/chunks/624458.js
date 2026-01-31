/** chunk id: 624458, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(562465),
    i = n(73153),
    l = n(157559),
    o = n(956793),
    a = n(95701),
    s = n(51271),
    c = n(844944),
    u = n(513461),
    E = n(212455),
    d = n(652215),
    _ = n(985018);
let A = {
    fetchGuildJoinRequest: async e => {
        let t = await r.Bo.get({
                url: d.Rsh.GUILD_JOIN_REQUEST_BY_ID(e),
                rejectWithError: !1
            }),
            n = (0, E.j)(t.body);
        return i.h.dispatch({
            type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS",
            joinRequest: n
        }), t
    },
    fetchGuildJoinRequests: async e => {
        let {
            guildId: t,
            status: n = u.B5.SUBMITTED,
            before: l,
            after: o,
            limit: a = 25,
            force: s = !1
        } = e, _ = s || !c.A.hasFetched(t);
        if (!c.A.isFetching() && _) {
            i.h.dispatch({
                type: "GUILD_JOIN_REQUESTS_FETCH_START"
            });
            try {
                var A;
                let e = await r.Bo.get({
                        url: d.Rsh.GUILD_JOIN_REQUESTS(t),
                        query: {
                            status: n,
                            limit: a,
                            before: l,
                            after: o
                        },
                        rejectWithError: !1
                    }),
                    s = e.body.total,
                    c = (null != (A = e.body.guild_join_requests) ? A : []).map(E.j);
                return i.h.dispatch({
                    type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
                    status: n,
                    requests: c,
                    total: s,
                    limit: a,
                    guildId: t
                }), e
            } catch (e) {
                throw i.h.dispatch({
                    type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE"
                }), e
            }
        }
    },
    ackUserGuildJoinRequest: async (e, t) => {
        try {
            return await r.Bo.post({
                url: d.Rsh.GUILD_JOIN_REQUEST_ACK(e, t),
                rejectWithError: !1
            })
        } catch (e) {} finally {
            i.h.dispatch({
                type: "ACK_APPROVED_GUILD_JOIN_REQUEST",
                id: t,
                guildId: e
            })
        }
    },
    removeGuildJoinRequest: async e => {
        try {
            let t = await r.Bo.del({
                url: d.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                rejectWithError: !1
            });
            return i.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                guildId: e,
                request: null
            }), t
        } catch (e) {
            throw e
        }
    },
    updateGuildJoinRequest: async function(e, t, n) {
        let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.B5.APPROVED,
            a = arguments.length > 4 ? arguments[4] : void 0;
        (0, s.iN)({
            guildId: e,
            actionType: o,
            applicationUserId: t
        });
        let c = await r.Bo.patch({
            url: d.Rsh.GUILD_JOIN_REQUEST_ID(e, n),
            body: {
                action: o,
                rejection_reason: a
            },
            rejectWithError: !1
        }).catch(e => (e && e.body && e.body.code === d.t02.REQUEST_TO_JOIN_USER_INELIGIBLE && l.A.show({
            title: _.intl.string(_.t.DxJj4e),
            body: _.intl.string(_.t.rSAOk9)
        }), Promise.reject(e)));
        i.h.dispatch({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            guildId: e,
            status: c.body.application_status,
            request: c.body
        })
    },
    actionAllPendingJoinRequests: async (e, t) => {
        let n = await r.Bo.patch({
            url: d.Rsh.GUILD_JOIN_REQUESTS(e),
            body: {
                action: t
            },
            rejectWithError: !1
        });
        return i.h.dispatch({
            type: "GUILD_JOIN_REQUESTS_BULK_ACTION",
            guildId: e,
            action: t
        }), n.body
    },
    resetGuildJoinRequest: async e => {
        try {
            let {
                body: t
            } = await r.Bo.post({
                url: d.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                rejectWithError: !1
            });
            return i.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                guildId: e,
                request: t
            }), t
        } catch (e) {
            throw e
        }
    },
    fetchRequestToJoinGuilds: async () => {
        let e = await r.Bo.get({
            url: d.Rsh.USER_JOIN_REQUEST_GUILDS,
            rejectWithError: !1
        });
        i.h.dispatch({
            type: "USER_JOIN_REQUEST_GUILDS_FETCH",
            guilds: e.body
        })
    },
    setSelectedApplicationTab: (e, t) => {
        i.h.dispatch({
            type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB",
            guildId: e,
            applicationTab: t
        })
    },
    setSelectedSortOrder: (e, t) => {
        i.h.dispatch({
            type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER",
            guildId: e,
            sortOrder: t
        })
    },
    setSelectedGuildJoinRequest: (e, t) => {
        null != t && (0, s.gH)({
            guildId: e,
            applicationStatus: t.applicationStatus,
            applicationUserId: t.userId
        }), i.h.dispatch({
            type: "GUILD_JOIN_REQUESTS_SET_SELECTED",
            guildId: e,
            request: t
        })
    },
    createOrEnterJoinRequestInterview: async function(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = await r.Bo.post({
                url: d.Rsh.GUILD_JOIN_REQUEST_INTERVIEW(e),
                rejectWithError: !1
            }),
            l = (0, a.UE)(n.body);
        return i.h.dispatch({
            type: "CHANNEL_CREATE",
            channel: l
        }), t && o.default.selectPrivateChannel(l.id), l.id
    },
    fetchJoinRequestCooldown: async e => {
        try {
            let t = await r.Bo.get({
                url: d.Rsh.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e),
                rejectWithError: !1
            });
            return i.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
                guildId: e,
                cooldown: t.body.cooldown
            }), t
        } catch (t) {
            throw i.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
                guildId: e,
                cooldown: null
            }), t
        }
    }
}