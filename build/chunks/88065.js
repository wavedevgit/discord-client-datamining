/** chunk id: 88065 params = (module,exports,require) **/
n.d(t, {
    A: () => D
}), n(938796);
var i = n(735438),
    l = n.n(i),
    a = n(179771),
    r = n(136722),
    s = n(52133),
    o = n(323073),
    d = n(587895),
    c = n(15285),
    u = n(260509),
    A = n(616356),
    h = n(734057),
    _ = n(696451),
    m = n(71393),
    g = n(430452),
    p = n(383501),
    E = n(287809),
    I = n(977997),
    f = n(636401),
    C = n(90924),
    T = n(592653),
    N = n(629471),
    S = n(511776),
    x = n(901898),
    b = n(639621),
    v = n(613057),
    y = n(652215);
let O = e => (0, N.A)(e).required().keys({
    channel_id: e.string().required()
});

function L(e) {
    let {
        args: {
            channel_id: t
        },
        socket: n
    } = e, i = h.A.getChannel(t);
    if (null == i || !(0, C.B_)(i, n.application.id, n.authorization.scopes)) throw new f.A({
        errorCode: y.Lw6.INVALID_CHANNEL
    }, `Invalid channel id: ${t}`);
    if ((0, o.$v)(i)) throw new f.A({
        errorCode: y.Lw6.INVALID_CHANNEL
    }, `Invalid nsfw channel id: ${i.id}`)
}
let R = e => (0, N.A)(e).keys({
    channel_id: e.string().allow(null)
});

function P(e) {
    let {
        args: {
            channel_id: t
        }
    } = e;
    if (null != t && null == h.A.getChannel(t)) throw new f.A({
        errorCode: y.Lw6.INVALID_CHANNEL
    }, `Invalid channel id: ${t}`)
}
let D = {
    [y.ZE4.GUILD_STATUS]: {
        scope: a.F.RPC,
        validation: e => (0, N.A)(e).required().keys({
            guild_id: e.string().required()
        }),
        handler(e) {
            let {
                args: {
                    guild_id: t
                }
            } = e;
            if (null == m.A.getGuild(t)) throw new f.A({
                errorCode: y.Lw6.INVALID_GUILD
            }, `Invalid guild id: ${t}`);
            return e => {
                let {
                    prevState: n,
                    dispatch: i
                } = e, a = m.A.getGuild(t);
                if (null == a) return;
                let r = {
                    guild: {
                        id: a.id,
                        name: a.name,
                        icon_url: (0, u.Iv)(a, 128) ?? null
                    },
                    online: 0
                };
                return l().isEqual(n, r) || i(r), r
            }
        }
    },
    [y.ZE4.VOICE_STATE_CREATE]: {
        scope: {
            [v.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ]
        },
        validation: e => (0, N.A)(e).required().keys({
            channel_id: e.string().required()
        }),
        handler(e) {
            let {
                args: {
                    channel_id: t
                }
            } = e;
            if (null == h.A.getChannel(t)) throw new f.A({
                errorCode: y.Lw6.INVALID_CHANNEL
            }, `Invalid channel id: ${t}`);
            return e => {
                let {
                    prevState: n,
                    dispatch: i
                } = e, a = h.A.getChannel(t);
                if (null == a) return;
                let r = a.getGuildId(),
                    s = Object.values(I.A.getVoiceStatesForChannel(a.id));
                return n && l().differenceBy(s, n, e => {
                    let {
                        userId: t
                    } = e;
                    return t
                }).forEach(e => i((0, C.qG)(r, a.id, e))), s
            }
        }
    },
    [y.ZE4.VOICE_STATE_DELETE]: {
        scope: {
            [v.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ]
        },
        validation: e => (0, N.A)(e).required().keys({
            channel_id: e.string().required()
        }),
        handler(e) {
            let {
                args: {
                    channel_id: t
                }
            } = e;
            if (null == h.A.getChannel(t)) throw new f.A({
                errorCode: y.Lw6.INVALID_CHANNEL
            }, `Invalid channel id: ${t}`);
            return e => {
                let {
                    prevState: n,
                    dispatch: i
                } = e, a = h.A.getChannel(t);
                if (null == a) return;
                let r = a.getGuildId(),
                    s = Object.values(I.A.getVoiceStatesForChannel(a.id));
                return l().differenceBy(n, s, e => {
                    let {
                        userId: t
                    } = e;
                    return t
                }).forEach(e => i((0, C.qG)(r, a.id, e))), s
            }
        }
    },
    [y.ZE4.VOICE_STATE_UPDATE]: {
        scope: {
            [v.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ]
        },
        validation: e => (0, N.A)(e).required().keys({
            channel_id: e.string().required()
        }),
        handler(e) {
            let {
                args: {
                    channel_id: t
                }
            } = e;
            if (null == h.A.getChannel(t)) throw new f.A({
                errorCode: y.Lw6.INVALID_CHANNEL
            }, `Invalid channel id: ${t}`);
            return e => {
                let {
                    prevState: n,
                    dispatch: i
                } = e, a = h.A.getChannel(t);
                if (null == a) return;
                let r = a.getGuildId(),
                    s = Object.values(I.A.getVoiceStatesForChannel(a.id)).map(e => (0, C.qG)(r, a.id, e));
                return l().differenceWith(s, n, l().isEqual).forEach(e => i(e)), s
            }
        }
    },
    [y.ZE4.VOICE_CONNECTION_STATUS]: {
        scope: {
            [v.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ]
        },
        handler: () => e => {
            let {
                prevState: t,
                dispatch: n
            } = e, i = {
                state: (0, C.SK)(p.A.getState()),
                hostname: p.A.getHostname(),
                pings: p.A.getPings(),
                average_ping: p.A.getAveragePing(),
                last_ping: p.A.getLastPing()
            };
            return l().isEqual(i, t) || n(i), i
        }
    },
    [y.ZE4.MESSAGE_CREATE]: {
        scope: a.F.RPC,
        validation: O,
        handler: L
    },
    [y.ZE4.MESSAGE_UPDATE]: {
        scope: a.F.RPC,
        validation: O,
        handler: L
    },
    [y.ZE4.MESSAGE_DELETE]: {
        scope: a.F.RPC,
        validation: O,
        handler: L
    },
    [y.ZE4.SPEAKING_START]: {
        scope: {
            [v.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ, v.hj]
        },
        validation: R,
        handler: P
    },
    [y.ZE4.SPEAKING_STOP]: {
        scope: {
            [v.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ, v.hj]
        },
        validation: R,
        handler: P
    },
    [y.ZE4.GUILD_CREATE]: {
        scope: a.F.RPC,
        handler() {}
    },
    [y.ZE4.CHANNEL_CREATE]: {
        scope: a.F.RPC,
        handler() {}
    },
    [y.ZE4.GAME_JOIN]: {
        scope: {
            [v.sm.ANY]: [a.F.RPC, v.hj]
        },
        handler() {}
    },
    [y.ZE4.GAME_SPECTATE]: {
        scope: {
            [v.sm.ANY]: [a.F.RPC, v.hj]
        },
        handler() {}
    },
    [y.ZE4.ACTIVITY_JOIN]: {
        scope: {
            [v.sm.ANY]: [a.F.RPC, v.VH, v.hj]
        },
        handler() {}
    },
    [y.ZE4.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [v.sm.ANY]: [a.F.RPC, v.hj]
        },
        handler() {}
    },
    [y.ZE4.ACTIVITY_SPECTATE]: {
        scope: {
            [v.sm.ANY]: [a.F.RPC, v.VH, v.hj]
        },
        handler() {}
    },
    [y.ZE4.ACTIVITY_INVITE]: {
        scope: {
            [v.sm.ANY]: [a.F.RPC, v.hj]
        },
        handler() {}
    },
    [y.ZE4.ACTIVITY_PIP_MODE_UPDATE]: {
        scope: void 0,
        handler() {}
    },
    [y.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        scope: void 0,
        handler() {}
    },
    [y.ZE4.FRAME_LAYOUT_MODE_UPDATE]: {
        scope: void 0,
        handler() {}
    },
    [y.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: T.t$,
    [y.ZE4.THERMAL_STATE_UPDATE]: {
        scope: {
            [v.sm.ANY]: [v.VH]
        },
        handler() {}
    },
    [y.ZE4.ORIENTATION_UPDATE]: {
        scope: {
            [v.sm.ANY]: [v.VH]
        },
        handler() {}
    },
    [y.ZE4.VOICE_CHANNEL_SELECT]: {
        scope: a.F.RPC,
        handler() {}
    },
    [y.ZE4.NOTIFICATION_CREATE]: {
        scope: {
            [v.sm.ALL]: [a.F.RPC, a.F.RPC_NOTIFICATIONS_READ]
        },
        handler() {}
    },
    [y.ZE4.RELATIONSHIP_UPDATE]: {
        scope: a.F.RELATIONSHIPS_READ,
        handler(e) {
            let {
                socket: t
            } = e;
            if (r.zy(r.iu(t.application.flags ?? 0), r.iu(y.gfo.DISABLE_RELATIONSHIPS_ACCESS))) throw new f.A({
                errorCode: y.Lw6.INVALID_PERMISSIONS
            }, "Missing Permissions")
        }
    },
    [y.ZE4.CURRENT_USER_UPDATE]: {
        scope: {
            [v.sm.ANY]: [v.hj, a.F.IDENTIFY]
        },
        handler: () => e => {
            let {
                prevState: t,
                dispatch: n
            } = e, i = {
                currentUser: E.default.getCurrentUser()
            };
            return null == i.currentUser || null != t && (0, s.A)(i, t) || n((0, b.A)(i.currentUser)), i
        }
    },
    [y.ZE4.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: {
            [v.sm.ALL]: [a.F.IDENTIFY, a.F.GUILDS_MEMBERS_READ]
        },
        handler(e) {
            let {
                args: {
                    guild_id: t
                }
            } = e;
            return e => {
                let {
                    prevState: n,
                    dispatch: i
                } = e, l = {
                    currentGuildMember: _.Ay.getSelfMember(t)
                };
                return null == l.currentGuildMember || null != n && (0, s.A)(l, n) || i((0, x.A)(l.currentGuildMember)), l
            }
        }
    },
    [y.ZE4.ENTITLEMENT_CREATE]: {
        scope: {
            [v.sm.ANY]: [v.hj, v.VH]
        },
        handler() {}
    },
    [y.ZE4.ENTITLEMENT_DELETE]: {
        scope: {
            [v.sm.ANY]: [v.hj, v.VH]
        },
        handler() {}
    },
    [y.ZE4.SCREENSHARE_STATE_UPDATE]: {
        scope: {
            [v.sm.ALL]: [v.hj, a.F.RPC_SCREENSHARE_READ]
        },
        handler: () => e => {
            let {
                prevState: t,
                dispatch: n
            } = e, i = A.A.getStreamerActiveStreamMetadata(), a = i?.pid != null ? c.Ay.getGameForPID(i.pid) : null, r = a?.id != null ? d.A.getApplication(a.id) : null, s = null != r ? (0, S.A)(r) : null, o = i?.sourceName, u = {
                active: null != i,
                pid: i?.pid ?? null,
                application: (null != s) ?? null != o ? {
                    name: o
                } : null
            };
            return l().isEqual(u, t) || n(u), u
        }
    },
    [y.ZE4.VIDEO_STATE_UPDATE]: {
        scope: {
            [v.sm.ALL]: [v.hj, a.F.RPC_VIDEO_READ]
        },
        handler: () => e => {
            let {
                prevState: t,
                dispatch: n
            } = e, i = {
                active: g.Ay.isVideoEnabled()
            };
            return l().isEqual(i, t) || n(i), i
        }
    },
    [y.ZE4.AUTHORIZE_REQUEST]: {
        scope: void 0,
        handler() {}
    }
}