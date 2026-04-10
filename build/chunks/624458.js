/** chunk id: 624458 params = (module,exports,require) **/
n.d(e, {
    A: () => T
});
var i = n(562465),
    l = n(73153),
    r = n(157559),
    s = n(956793),
    a = n(95701),
    o = n(51271),
    c = n(844944),
    d = n(513461),
    u = n(212455),
    E = n(652215),
    _ = n(985018);
let T = {
    fetchGuildJoinRequest: async t => {
        let e = await i.Bo.get({
                url: E.Rsh.GUILD_JOIN_REQUEST_BY_ID(t),
                rejectWithError: !1
            }),
            n = (0, u.j)(e.body);
        return l.h.dispatch({
            type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS",
            joinRequest: n
        }), e
    },
    fetchGuildJoinRequests: async t => {
        let {
            guildId: e,
            status: n = d.B5.SUBMITTED,
            before: r,
            after: s,
            limit: a = 25,
            force: o = !1
        } = t, _ = o || !c.A.hasFetched(e);
        if (!c.A.isFetching() && _) {
            l.h.dispatch({
                type: "GUILD_JOIN_REQUESTS_FETCH_START"
            });
            try {
                let t = await i.Bo.get({
                        url: E.Rsh.GUILD_JOIN_REQUESTS(e),
                        query: {
                            status: n,
                            limit: a,
                            before: r,
                            after: s
                        },
                        rejectWithError: !1
                    }),
                    o = t.body.total,
                    c = (t.body.guild_join_requests ?? []).map(u.j);
                return l.h.dispatch({
                    type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
                    status: n,
                    requests: c,
                    total: o,
                    limit: a,
                    guildId: e
                }), t
            } catch (t) {
                throw l.h.dispatch({
                    type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE"
                }), t
            }
        }
    },
    ackUserGuildJoinRequest: async (t, e) => {
        try {
            return await i.Bo.post({
                url: E.Rsh.GUILD_JOIN_REQUEST_ACK(t, e),
                rejectWithError: !1
            })
        } catch (t) {} finally {
            l.h.dispatch({
                type: "ACK_APPROVED_GUILD_JOIN_REQUEST",
                id: e,
                guildId: t
            })
        }
    },
    removeGuildJoinRequest: async t => {
        try {
            let e = await i.Bo.del({
                url: E.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(t),
                rejectWithError: !1
            });
            return l.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                guildId: t,
                request: null
            }), e
        } catch (t) {
            throw t
        }
    },
    updateGuildJoinRequest: async function(t, e, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.B5.APPROVED,
            a = arguments.length > 4 ? arguments[4] : void 0;
        (0, o.iN)({
            guildId: t,
            actionType: s,
            applicationUserId: e
        });
        let c = await i.Bo.patch({
            url: E.Rsh.GUILD_JOIN_REQUEST_ID(t, n),
            body: {
                action: s,
                rejection_reason: a
            },
            rejectWithError: !1
        }).catch(t => (t && t.body && t.body.code === E.t02.REQUEST_TO_JOIN_USER_INELIGIBLE && r.A.show({
            title: _.intl.string(_.t.DxJj4e),
            body: _.intl.string(_.t.rSAOk9)
        }), Promise.reject(t)));
        l.h.dispatch({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            guildId: t,
            status: c.body.application_status,
            request: c.body
        })
    },
    actionAllPendingJoinRequests: async (t, e) => {
        let n = await i.Bo.patch({
            url: E.Rsh.GUILD_JOIN_REQUESTS(t),
            body: {
                action: e
            },
            rejectWithError: !1
        });
        return l.h.dispatch({
            type: "GUILD_JOIN_REQUESTS_BULK_ACTION",
            guildId: t,
            action: e
        }), n.body
    },
    resetGuildJoinRequest: async t => {
        try {
            let {
                body: e
            } = await i.Bo.post({
                url: E.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(t),
                rejectWithError: !1
            });
            return l.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                guildId: t,
                request: e
            }), e
        } catch (t) {
            throw t
        }
    },
    fetchRequestToJoinGuilds: async () => {
        let t = await i.Bo.get({
            url: E.Rsh.USER_JOIN_REQUEST_GUILDS,
            rejectWithError: !1
        });
        l.h.dispatch({
            type: "USER_JOIN_REQUEST_GUILDS_FETCH",
            guilds: t.body
        })
    },
    setSelectedApplicationTab: (t, e) => {
        l.h.dispatch({
            type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB",
            guildId: t,
            applicationTab: e
        })
    },
    setSelectedSortOrder: (t, e) => {
        l.h.dispatch({
            type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER",
            guildId: t,
            sortOrder: e
        })
    },
    setSelectedGuildJoinRequest: (t, e) => {
        null != e && (0, o.gH)({
            guildId: t,
            applicationStatus: e.applicationStatus,
            applicationUserId: e.userId
        }), l.h.dispatch({
            type: "GUILD_JOIN_REQUESTS_SET_SELECTED",
            guildId: t,
            request: e
        })
    },
    createOrEnterJoinRequestInterview: async function(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = await i.Bo.post({
                url: E.Rsh.GUILD_JOIN_REQUEST_INTERVIEW(t),
                rejectWithError: !1
            }),
            r = (0, a.UE)(n.body);
        return l.h.dispatch({
            type: "CHANNEL_CREATE",
            channel: r
        }), e && s.default.selectPrivateChannel(r.id), r.id
    },
    fetchJoinRequestCooldown: async t => {
        try {
            let e = await i.Bo.get({
                url: E.Rsh.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(t),
                rejectWithError: !1
            });
            return l.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
                guildId: t,
                cooldown: e.body.cooldown
            }), e
        } catch (e) {
            throw l.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
                guildId: t,
                cooldown: null
            }), e
        }
    }
}