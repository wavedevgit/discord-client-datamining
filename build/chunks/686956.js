/** Chunk was on web.js **/
/** chunk id: 686956, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => B,
    k: () => F
}), n(65821), n(142703), n(733351);
var r = n(110259),
    i = n(136722),
    a = n(562465),
    o = n(73153),
    s = n(178253),
    l = n(612200),
    c = n(323073),
    u = n(568185),
    d = n(22007),
    f = n(854492),
    p = n(700241),
    _ = n(658128),
    h = n(976860),
    m = n(961350),
    g = n(383394),
    E = n(808728),
    y = n(71393),
    b = n(309010),
    O = n(967198),
    v = n(287809),
    A = n(954571),
    I = n(488926),
    S = n(927578),
    T = n(499785),
    C = n(157559),
    N = n(652215),
    w = n(204925),
    R = n(985018);

function P(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            P(e, t, n[t])
        })
    }
    return e
}

function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function x(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function M(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = j(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function j(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let k = e => {
        C.A.show({
            title: R.intl.string(R.t.cTaRxF),
            body: R.intl.formatToPlainString(R.t["VSd+Aj"], {
                quantity: e
            })
        })
    },
    U = e => {
        o.h.dispatch({
            type: "GUILD_DELETE",
            guild: {
                id: e
            }
        })
    },
    G = () => {
        C.A.show({
            title: R.intl.string(R.t.ZZlox4),
            body: R.intl.string(R.t.ZUEGFn)
        })
    };

function F(e) {
    return new Promise(t => y.A.addConditionalChangeListener(() => {
        let n = y.A.getGuild(e);
        return null == n || (t(n), !1)
    }))
}

function V(e, t) {
    return null != t ? t : (0, _.W)(e)
}
let B = {
    joinGuild: async function(e) {
        var t, r, i, s, c, u;
        let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                source: f,
                loadId: _,
                lurkLocation: g
            } = d,
            E = null != (t = d.lurker) && t,
            A = v.default.getCurrentUser();
        if (null != (r = null == A ? void 0 : A.hasFlag(N.nhx.QUARANTINED)) && r) return (0, p.default)(), new Promise((e, t) => t(Error()));
        o.h.wait(() => o.h.dispatch({
            type: "GUILD_JOIN",
            guildId: e,
            lurker: E,
            source: f,
            loadId: _
        }));
        try {
            let t = O.A.getGuildId(),
                r = e === t && null != y.A.getGuild(e) ? b.A.getChannelId(e) : null,
                i = await a.Bo.put({
                    url: N.Rsh.GUILD_JOIN(e),
                    query: {
                        lurker: E,
                        session_id: E ? m.default.getSessionId() : null,
                        recommendation_load_id: _,
                        location: E && null != g ? g : null
                    },
                    context: {
                        source: f
                    },
                    oldFormErrors: !0,
                    body: {},
                    rejectWithError: !1
                });
            if (null != i.body.join_request && o.h.dispatch({
                    type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                    guildId: e,
                    request: i.body.join_request
                }), null == y.A.getGuild(e) && i.body.show_verification_form) return (0, h.pX)(N.BVt.GUILD_MEMBER_VERIFICATION(e)), i;
            if (null != i.body.welcome_screen && o.h.dispatch({
                    type: "WELCOME_SCREEN_UPDATE",
                    guildId: i.body.id,
                    welcomeScreen: i.body.welcome_screen
                }), null != i.body.approximate_presence_count && o.h.dispatch({
                    type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE",
                    guildId: i.body.id,
                    count: i.body.approximate_presence_count
                }), !E) {
                let {
                    default: t
                } = await Promise.resolve().then(n.bind(n, 967305));
                await t({
                    guildId: e,
                    returnChannelId: r
                })
            }
            return i
        } catch (t) {
            if ((null == (i = t.body) ? void 0 : i.code) === N.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED && (0, l.yO)(w.w_.JOIN_LARGE_GUILD_UNDERAGE), (null == (s = t.body) ? void 0 : s.code) === N.t02.TOO_MANY_USER_GUILDS) {
                let e = v.default.getCurrentUser();
                S.Ay.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff()) ? k(N.cZu) : k(N.qlD)
            }
            throw (null == (c = t.body) ? void 0 : c.code) === N.t02.GUILD_AT_CAPACITY && G(), E && (null == (u = t.body) ? void 0 : u.code) === N.t02.UNKNOWN_GUILD && U(e), t
        }
    },
    waitForGuild: F,
    async transitionToGuildSync(e, t, n, r) {
        let i = V((await F(e)).id, n),
            a = t;
        (null == t ? void 0 : t.hasOwnProperty("welcomeModalChannelId")) && null == t.welcomeModalChannelId && (a = x(D({}, t), {
            welcomeModalChannelId: null != i ? i : void 0
        })), (0, d.A)(N.BVt.CHANNEL(e, i, r), a), await new Promise(setImmediate)
    },
    deleteGuild: U,
    selectGuild(e) {
        (0, f.j)(e)
    },
    createGuild(e) {
        o.h.dispatch({
            type: "GUILD_CREATE",
            guild: e
        })
    },
    setServerMute: (e, t, n) => a.Bo.patch({
        url: N.Rsh.GUILD_MEMBER(e, t),
        body: {
            mute: n
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    setServerDeaf: (e, t, n) => a.Bo.patch({
        url: N.Rsh.GUILD_MEMBER(e, t),
        body: {
            deaf: n
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    setChannel(e, t, n) {
        a.Bo.patch({
            url: N.Rsh.GUILD_MEMBER(e, t),
            body: {
                channel_id: n
            },
            oldFormErrors: !0,
            rejectWithError: !0
        })
    },
    setMemberFlags(e, t, n) {
        a.Bo.patch({
            url: N.Rsh.GUILD_MEMBER(e, t),
            body: {
                flags: n
            },
            oldFormErrors: !0,
            rejectWithError: !0
        })
    },
    kickUser: (e, t, n, r) => a.Bo.del({
        url: N.Rsh.GUILD_MEMBER(e, t),
        query: {
            reason: n,
            moderator_report_id: r
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        o.h.dispatch({
            type: "GUILD_MEMBER_REMOVE_LOCAL",
            guildId: e,
            userId: t
        })
    }),
    setCommunicationDisabledUntil(e) {
        let {
            guildId: t,
            userId: n,
            communicationDisabledUntilTimestamp: i,
            duration: a,
            reason: o,
            location: s,
            moderatorReportId: l
        } = e;
        return T.A.patch({
            url: N.Rsh.GUILD_MEMBER(t, n),
            reason: o,
            body: {
                communication_disabled_until: i,
                moderator_report_id: l
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                properties: {
                    guild_id: t,
                    target_user_id: n,
                    duration: null != a ? a : null,
                    reason: null != o ? o : null,
                    communication_disabled_until: i,
                    location: null != s ? s : null
                }
            },
            rejectWithError: !1
        })
    },
    banUser: (e, t, n, r, i) => a.Bo.put({
        url: N.Rsh.GUILD_BAN(e, t),
        reason: r,
        body: {
            delete_message_seconds: n,
            moderator_report_id: i
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    unbanUser: (e, t) => a.Bo.del({
        url: N.Rsh.GUILD_BAN(e, t),
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    banMultipleUsers: (e, t, n, r) => a.Bo.post({
        url: N.Rsh.BULK_GUILD_BAN(e),
        body: {
            user_ids: t,
            delete_message_seconds: n
        },
        reason: r,
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    async createRole(e, t, n, r) {
        let l = {
            name: null != t && "" !== t ? t : R.intl.string(R.t.QBMHvB),
            color: null != n ? n : 0,
            colors: null != r ? r : {
                primary_color: null != n ? n : 0,
                secondary_color: null,
                tertiary_color: null
            },
            permissions: I.x3
        };
        try {
            let t = await a.Bo.post({
                    url: N.Rsh.GUILD_ROLES(e),
                    oldFormErrors: !0,
                    body: l,
                    rejectWithError: !1
                }),
                n = t.body;
            return n.permissions = i.iu(n.permissions), o.h.dispatch({
                type: "GUILD_SETTINGS_ROLE_SELECT",
                roleId: t.body.id,
                role: n
            }), u.A.checkGuildTemplateDirty(e), n
        } catch (e) {
            throw new s.A(e)
        }
    },
    async updateRole(e, t, n) {
        let {
            icon: r,
            unicodeEmoji: i
        } = n, o = M(n, ["icon", "unicodeEmoji"]), s = null === r || (null == r ? void 0 : r.startsWith("data:")) ? r : void 0, l = await a.Bo.patch({
            url: N.Rsh.GUILD_ROLE(e, t),
            body: x(D({}, o), {
                icon: s,
                unicode_emoji: i
            }),
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return u.A.checkGuildTemplateDirty(e), l
    },
    updateRolePermissions: (e, t, n) => a.Bo.patch({
        url: N.Rsh.GUILD_ROLE(e, t),
        body: {
            permissions: n
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }),
    deleteRole(e, t) {
        a.Bo.del({
            url: N.Rsh.GUILD_ROLE(e, t),
            oldFormErrors: !0,
            rejectWithError: !0
        }).then(() => {
            u.A.checkGuildTemplateDirty(e)
        })
    },
    async batchChannelUpdate(e, t) {
        let n = await a.Bo.patch({
            url: N.Rsh.GUILD_CHANNELS(e),
            body: t,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return u.A.checkGuildTemplateDirty(e), n
    },
    async batchRoleUpdate(e, t) {
        let n = await a.Bo.patch({
            url: N.Rsh.GUILD_ROLES(e),
            body: t,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return u.A.checkGuildTemplateDirty(e), n
    },
    requestMembers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return o.h.dispatch({
            type: "GUILD_MEMBERS_REQUEST",
            guildIds: Array.isArray(e) ? e : [e],
            query: t,
            limit: n,
            presences: r
        })
    },
    searchRecentMembers(e, t) {
        let {
            query: n,
            continuationToken: r
        } = null != t ? t : {};
        return o.h.dispatch({
            type: "GUILD_SEARCH_RECENT_MEMBERS",
            guildId: e,
            query: n,
            continuationToken: r
        })
    },
    requestMembersById(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return o.h.dispatch({
            type: "GUILD_MEMBERS_REQUEST",
            guildIds: Array.isArray(e) ? e : [e],
            userIds: Array.isArray(t) ? t : [t],
            presences: n
        })
    },
    move(e, t, n, r) {
        o.h.dispatch({
            type: "GUILD_MOVE",
            fromIndex: e,
            toIndex: t,
            fromFolderIndex: n,
            toFolderIndex: r
        })
    },
    moveById(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (e === t) throw Error("GuildActionCreators.moveById: `sourceId` and `targetId` cannot be the same value: ".concat(e));
        o.h.dispatch({
            type: "GUILD_MOVE_BY_ID",
            sourceId: e,
            targetId: t,
            moveToBelow: n,
            combine: r
        })
    },
    createGuildFolderLocal(e, t) {
        A.default.track(N.HAw.GUILD_FOLDER_CREATED), o.h.dispatch({
            type: "GUILD_FOLDER_CREATE_LOCAL",
            sourceIds: e,
            name: t
        })
    },
    editGuildFolderLocal(e, t, n) {
        o.h.dispatch({
            type: "GUILD_FOLDER_EDIT_LOCAL",
            targetId: e,
            sourceIds: t,
            name: n
        })
    },
    deleteGuildFolderLocal(e) {
        o.h.dispatch({
            type: "GUILD_FOLDER_DELETE_LOCAL",
            targetId: e
        })
    },
    toggleGuildFolderExpand(e) {
        let t = g.A.isFolderExpanded(e);
        A.default.track(N.HAw.GUILD_FOLDER_CLICKED, {
            source: "sidebar",
            action: t ? "collapsed" : "expanded"
        }), o.h.dispatch({
            type: "TOGGLE_GUILD_FOLDER_EXPAND",
            folderId: e
        })
    },
    setGuildFolderExpanded(e, t) {
        o.h.dispatch({
            type: "SET_GUILD_FOLDER_EXPANDED",
            folderId: e,
            expanded: t
        })
    },
    collapseAllFolders() {
        o.h.dispatch({
            type: "GUILD_FOLDER_COLLAPSE"
        })
    },
    nsfwAgree(e) {
        o.h.dispatch({
            type: "GUILD_NSFW_AGREE",
            guildId: e
        })
    },
    nsfwReturnToSafety(e) {
        if (null == e) return void(0, h.pX)(N.BVt.FRIENDS, {
            navigationReplace: !1,
            openChannel: !0
        });
        let t = E.Ay.getDefaultChannel(e);
        null == t || (0, c.qR)(t) ? (0, h.pX)(N.BVt.FRIENDS, {
            navigationReplace: !1,
            openChannel: !0
        }) : (0, h.pX)(N.BVt.CHANNEL(e, t.id))
    },
    escapeToDefaultChannel(e) {
        let t = E.Ay.getDefaultChannel(e);
        null != t ? (0, h.pX)(N.BVt.CHANNEL(e, t.id)) : (0, h.pX)(N.BVt.FRIENDS)
    },
    async fetchApplications(e, t) {
        let n = {
            url: N.Rsh.GUILD_APPLICATIONS(e),
            oldFormErrors: !0,
            rejectWithError: !1
        };
        null != t && (n.query = {
            channel_id: t
        });
        let r = (await a.Bo.get(n)).body;
        o.h.dispatch({
            type: "GUILD_APPLICATIONS_FETCH_SUCCESS",
            guildId: e,
            applications: r
        })
    },
    async fetchGuildBansBatch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = {
                limit: t
            };
        null != n && (r.after = n), await a.Bo.get({
            url: N.Rsh.GUILD_BANS(e),
            oldFormErrors: !0,
            query: r,
            rejectWithError: !1
        }).then(t => {
            o.h.dispatch({
                type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
                bans: t.body,
                guildId: e
            })
        })
    },
    async searchGuildBans(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
            i = {
                limit: r
            };
        null != n && n.length > 0 && (i.user_ids = n), null != t && t.trim().length > 0 && (i.query = t), await a.Bo.get({
            url: N.Rsh.GUILD_BANS_SEARCH(e),
            oldFormErrors: !0,
            query: i,
            rejectWithError: !1
        }).then(t => {
            o.h.dispatch({
                type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
                bans: t.body,
                userIds: n,
                guildId: e
            })
        })
    },
    async fetchGuildBans(e) {
        await a.Bo.get({
            url: N.Rsh.GUILD_BANS(e),
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(e => {
            o.h.dispatch({
                type: "GUILD_SETTINGS_LOADED_BANS",
                bans: e.body
            })
        })
    },
    fetchGuildRoleConnectionsEligibility: (e, t) => a.Bo.get({
        url: N.Rsh.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => {
        let {
            body: n
        } = e;
        return o.h.dispatch({
            type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS",
            roleId: t,
            roleConnectionEligibility: n
        }), n
    }),
    async assignGuildRoleConnection(e, t) {
        await a.Bo.post({
            url: N.Rsh.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        })
    },
    async unassignGuildRoleConnection(e, t) {
        await a.Bo.post({
            url: N.Rsh.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        })
    },
    getGuildRoleConnectionsConfigurations: async e => (await a.Bo.get({
        url: N.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
        oldFormErrors: !0,
        rejectWithError: !1
    })).body
}