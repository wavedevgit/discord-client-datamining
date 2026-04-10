/** chunk id: 88065 params = (module,exports,require) **/
n.d(t, {
    A: () => D
}), n(938796);
var i = n(735438),
    r = n.n(i),
    l = n(179771),
    a = n(136722),
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
    v = n(639621),
    b = n(613057),
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
        scope: l.F.RPC,
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
                } = e, l = m.A.getGuild(t);
                if (null == l) return;
                let a = {
                    guild: {
                        id: l.id,
                        name: l.name,
                        icon_url: (0, u.Iv)(l, 128) ?? null
                    },
                    online: 0
                };
                return r().isEqual(n, a) || i(a), a
            }
        }
    },
    [y.ZE4.VOICE_STATE_CREATE]: {
        scope: {
            [b.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ]
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
                } = e, l = h.A.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    s = Object.values(I.A.getVoiceStatesForChannel(l.id));
                return n && r().differenceBy(s, n, e => {
                    let {
                        userId: t
                    } = e;
                    return t
                }).forEach(e => i((0, C.qG)(a, l.id, e))), s
            }
        }
    },
    [y.ZE4.VOICE_STATE_DELETE]: {
        scope: {
            [b.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ]
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
                } = e, l = h.A.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    s = Object.values(I.A.getVoiceStatesForChannel(l.id));
                return r().differenceBy(n, s, e => {
                    let {
                        userId: t
                    } = e;
                    return t
                }).forEach(e => i((0, C.qG)(a, l.id, e))), s
            }
        }
    },
    [y.ZE4.VOICE_STATE_UPDATE]: {
        scope: {
            [b.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ]
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
                } = e, l = h.A.getChannel(t);
                if (null == l) return;
                let a = l.getGuildId(),
                    s = Object.values(I.A.getVoiceStatesForChannel(l.id)).map(e => (0, C.qG)(a, l.id, e));
                return r().differenceWith(s, n, r().isEqual).forEach(e => i(e)), s
            }
        }
    },
    [y.ZE4.VOICE_CONNECTION_STATUS]: {
        scope: {
            [b.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ]
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
            return r().isEqual(i, t) || n(i), i
        }
    },
    [y.ZE4.MESSAGE_CREATE]: {
        scope: l.F.RPC,
        validation: O,
        handler: L
    },
    [y.ZE4.MESSAGE_UPDATE]: {
        scope: l.F.RPC,
        validation: O,
        handler: L
    },
    [y.ZE4.MESSAGE_DELETE]: {
        scope: l.F.RPC,
        validation: O,
        handler: L
    },
    [y.ZE4.SPEAKING_START]: {
        scope: {
            [b.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ, b.hj]
        },
        validation: R,
        handler: P
    },
    [y.ZE4.SPEAKING_STOP]: {
        scope: {
            [b.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ, b.hj]
        },
        validation: R,
        handler: P
    },
    [y.ZE4.GUILD_CREATE]: {
        scope: l.F.RPC,
        handler() {}
    },
    [y.ZE4.CHANNEL_CREATE]: {
        scope: l.F.RPC,
        handler() {}
    },
    [y.ZE4.GAME_JOIN]: {
        scope: {
            [b.sm.ANY]: [l.F.RPC, b.hj]
        },
        handler() {}
    },
    [y.ZE4.GAME_SPECTATE]: {
        scope: {
            [b.sm.ANY]: [l.F.RPC, b.hj]
        },
        handler() {}
    },
    [y.ZE4.ACTIVITY_JOIN]: {
        scope: {
            [b.sm.ANY]: [l.F.RPC, b.VH, b.hj]
        },
        handler() {}
    },
    [y.ZE4.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [b.sm.ANY]: [l.F.RPC, b.hj]
        },
        handler() {}
    },
    [y.ZE4.ACTIVITY_SPECTATE]: {
        scope: {
            [b.sm.ANY]: [l.F.RPC, b.VH, b.hj]
        },
        handler() {}
    },
    [y.ZE4.ACTIVITY_INVITE]: {
        scope: {
            [b.sm.ANY]: [l.F.RPC, b.hj]
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
            [b.sm.ANY]: [b.VH]
        },
        handler() {}
    },
    [y.ZE4.ORIENTATION_UPDATE]: {
        scope: {
            [b.sm.ANY]: [b.VH]
        },
        handler() {}
    },
    [y.ZE4.VOICE_CHANNEL_SELECT]: {
        scope: l.F.RPC,
        handler() {}
    },
    [y.ZE4.NOTIFICATION_CREATE]: {
        scope: {
            [b.sm.ALL]: [l.F.RPC, l.F.RPC_NOTIFICATIONS_READ]
        },
        handler() {}
    },
    [y.ZE4.RELATIONSHIP_UPDATE]: {
        scope: l.F.RELATIONSHIPS_READ,
        handler(e) {
            let {
                socket: t
            } = e;
            if (a.zy(a.iu(t.application.flags ?? 0), a.iu(y.gfo.DISABLE_RELATIONSHIPS_ACCESS))) throw new f.A({
                errorCode: y.Lw6.INVALID_PERMISSIONS
            }, "Missing Permissions")
        }
    },
    [y.ZE4.CURRENT_USER_UPDATE]: {
        scope: {
            [b.sm.ANY]: [b.hj, l.F.IDENTIFY]
        },
        handler: () => e => {
            let {
                prevState: t,
                dispatch: n
            } = e, i = {
                currentUser: E.default.getCurrentUser()
            };
            return null == i.currentUser || null != t && (0, s.A)(i, t) || n((0, v.A)(i.currentUser)), i
        }
    },
    [y.ZE4.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: {
            [b.sm.ALL]: [l.F.IDENTIFY, l.F.GUILDS_MEMBERS_READ]
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
                } = e, r = {
                    currentGuildMember: _.Ay.getSelfMember(t)
                };
                return null == r.currentGuildMember || null != n && (0, s.A)(r, n) || i((0, x.A)(r.currentGuildMember)), r
            }
        }
    },
    [y.ZE4.ENTITLEMENT_CREATE]: {
        scope: {
            [b.sm.ANY]: [b.hj, b.VH]
        },
        handler() {}
    },
    [y.ZE4.ENTITLEMENT_DELETE]: {
        scope: {
            [b.sm.ANY]: [b.hj, b.VH]
        },
        handler() {}
    },
    [y.ZE4.SCREENSHARE_STATE_UPDATE]: {
        scope: {
            [b.sm.ALL]: [b.hj, l.F.RPC_SCREENSHARE_READ]
        },
        handler: () => e => {
            let {
                prevState: t,
                dispatch: n
            } = e, i = A.A.getStreamerActiveStreamMetadata(), l = i?.pid != null ? c.Ay.getGameForPID(i.pid) : null, a = l?.id != null ? d.A.getApplication(l.id) : null, s = null != a ? (0, S.A)(a) : null, o = i?.sourceName, u = {
                active: null != i,
                pid: i?.pid ?? null,
                application: (null != s) ?? null != o ? {
                    name: o
                } : null
            };
            return r().isEqual(u, t) || n(u), u
        }
    },
    [y.ZE4.VIDEO_STATE_UPDATE]: {
        scope: {
            [b.sm.ALL]: [b.hj, l.F.RPC_VIDEO_READ]
        },
        handler: () => e => {
            let {
                prevState: t,
                dispatch: n
            } = e, i = {
                active: g.Ay.isVideoEnabled()
            };
            return r().isEqual(i, t) || n(i), i
        }
    },
    [y.ZE4.AUTHORIZE_REQUEST]: {
        scope: void 0,
        handler() {}
    }
}