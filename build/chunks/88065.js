/** chunk id: 88065 params = (module,exports,require) **/
n.d(t, {
    A: () => D
}), n(938796);
var i = n(735438),
    a = n.n(i),
    r = n(179771),
    l = n(136722),
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
    y = n(613057),
    b = n(652215);
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
        errorCode: b.Lw6.INVALID_CHANNEL
    }, `Invalid channel id: ${t}`);
    if ((0, o.$v)(i)) throw new f.A({
        errorCode: b.Lw6.INVALID_CHANNEL
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
        errorCode: b.Lw6.INVALID_CHANNEL
    }, `Invalid channel id: ${t}`)
}
let D = {
    [b.ZE4.GUILD_STATUS]: {
        scope: r.F.RPC,
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
                errorCode: b.Lw6.INVALID_GUILD
            }, `Invalid guild id: ${t}`);
            return e => {
                let {
                    prevState: n,
                    dispatch: i
                } = e, r = m.A.getGuild(t);
                if (null == r) return;
                let l = {
                    guild: {
                        id: r.id,
                        name: r.name,
                        icon_url: (0, u.Iv)(r, 128) ?? null
                    },
                    online: 0
                };
                return a().isEqual(n, l) || i(l), l
            }
        }
    },
    [b.ZE4.VOICE_STATE_CREATE]: {
        scope: {
            [y.sm.ANY]: [r.F.RPC, r.F.RPC_VOICE_READ]
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
                errorCode: b.Lw6.INVALID_CHANNEL
            }, `Invalid channel id: ${t}`);
            return e => {
                let {
                    prevState: n,
                    dispatch: i
                } = e, r = h.A.getChannel(t);
                if (null == r) return;
                let l = r.getGuildId(),
                    s = Object.values(I.A.getVoiceStatesForChannel(r.id));
                return n && a().differenceBy(s, n, e => {
                    let {
                        userId: t
                    } = e;
                    return t
                }).forEach(e => i((0, C.qG)(l, r.id, e))), s
            }
        }
    },
    [b.ZE4.VOICE_STATE_DELETE]: {
        scope: {
            [y.sm.ANY]: [r.F.RPC, r.F.RPC_VOICE_READ]
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
                errorCode: b.Lw6.INVALID_CHANNEL
            }, `Invalid channel id: ${t}`);
            return e => {
                let {
                    prevState: n,
                    dispatch: i
                } = e, r = h.A.getChannel(t);
                if (null == r) return;
                let l = r.getGuildId(),
                    s = Object.values(I.A.getVoiceStatesForChannel(r.id));
                return a().differenceBy(n, s, e => {
                    let {
                        userId: t
                    } = e;
                    return t
                }).forEach(e => i((0, C.qG)(l, r.id, e))), s
            }
        }
    },
    [b.ZE4.VOICE_STATE_UPDATE]: {
        scope: {
            [y.sm.ANY]: [r.F.RPC, r.F.RPC_VOICE_READ]
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
                errorCode: b.Lw6.INVALID_CHANNEL
            }, `Invalid channel id: ${t}`);
            return e => {
                let {
                    prevState: n,
                    dispatch: i
                } = e, r = h.A.getChannel(t);
                if (null == r) return;
                let l = r.getGuildId(),
                    s = Object.values(I.A.getVoiceStatesForChannel(r.id)).map(e => (0, C.qG)(l, r.id, e));
                return a().differenceWith(s, n, a().isEqual).forEach(e => i(e)), s
            }
        }
    },
    [b.ZE4.VOICE_CONNECTION_STATUS]: {
        scope: {
            [y.sm.ANY]: [r.F.RPC, r.F.RPC_VOICE_READ]
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
            return a().isEqual(i, t) || n(i), i
        }
    },
    [b.ZE4.MESSAGE_CREATE]: {
        scope: r.F.RPC,
        validation: O,
        handler: L
    },
    [b.ZE4.MESSAGE_UPDATE]: {
        scope: r.F.RPC,
        validation: O,
        handler: L
    },
    [b.ZE4.MESSAGE_DELETE]: {
        scope: r.F.RPC,
        validation: O,
        handler: L
    },
    [b.ZE4.SPEAKING_START]: {
        scope: {
            [y.sm.ANY]: [r.F.RPC, r.F.RPC_VOICE_READ, y.hj]
        },
        validation: R,
        handler: P
    },
    [b.ZE4.SPEAKING_STOP]: {
        scope: {
            [y.sm.ANY]: [r.F.RPC, r.F.RPC_VOICE_READ, y.hj]
        },
        validation: R,
        handler: P
    },
    [b.ZE4.GUILD_CREATE]: {
        scope: r.F.RPC,
        handler() {}
    },
    [b.ZE4.CHANNEL_CREATE]: {
        scope: r.F.RPC,
        handler() {}
    },
    [b.ZE4.GAME_JOIN]: {
        scope: {
            [y.sm.ANY]: [r.F.RPC, y.hj]
        },
        handler() {}
    },
    [b.ZE4.GAME_SPECTATE]: {
        scope: {
            [y.sm.ANY]: [r.F.RPC, y.hj]
        },
        handler() {}
    },
    [b.ZE4.ACTIVITY_JOIN]: {
        scope: {
            [y.sm.ANY]: [r.F.RPC, y.VH, y.hj]
        },
        handler() {}
    },
    [b.ZE4.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [y.sm.ANY]: [r.F.RPC, y.hj]
        },
        handler() {}
    },
    [b.ZE4.ACTIVITY_SPECTATE]: {
        scope: {
            [y.sm.ANY]: [r.F.RPC, y.VH, y.hj]
        },
        handler() {}
    },
    [b.ZE4.ACTIVITY_INVITE]: {
        scope: {
            [y.sm.ANY]: [r.F.RPC, y.hj]
        },
        handler() {}
    },
    [b.ZE4.ACTIVITY_PIP_MODE_UPDATE]: {
        scope: void 0,
        handler() {}
    },
    [b.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        scope: void 0,
        handler() {}
    },
    [b.ZE4.FRAME_LAYOUT_MODE_UPDATE]: {
        scope: void 0,
        handler() {}
    },
    [b.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: T.t$,
    [b.ZE4.THERMAL_STATE_UPDATE]: {
        scope: {
            [y.sm.ANY]: [y.VH]
        },
        handler() {}
    },
    [b.ZE4.ORIENTATION_UPDATE]: {
        scope: {
            [y.sm.ANY]: [y.VH]
        },
        handler() {}
    },
    [b.ZE4.VOICE_CHANNEL_SELECT]: {
        scope: r.F.RPC,
        handler() {}
    },
    [b.ZE4.NOTIFICATION_CREATE]: {
        scope: {
            [y.sm.ALL]: [r.F.RPC, r.F.RPC_NOTIFICATIONS_READ]
        },
        handler() {}
    },
    [b.ZE4.RELATIONSHIP_UPDATE]: {
        scope: r.F.RELATIONSHIPS_READ,
        handler(e) {
            let {
                socket: t
            } = e;
            if (l.zy(l.iu(t.application.flags ?? 0), l.iu(b.gfo.DISABLE_RELATIONSHIPS_ACCESS))) throw new f.A({
                errorCode: b.Lw6.INVALID_PERMISSIONS
            }, "Missing Permissions")
        }
    },
    [b.ZE4.CURRENT_USER_UPDATE]: {
        scope: {
            [y.sm.ANY]: [y.hj, r.F.IDENTIFY]
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
    [b.ZE4.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: {
            [y.sm.ALL]: [r.F.IDENTIFY, r.F.GUILDS_MEMBERS_READ]
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
                } = e, a = {
                    currentGuildMember: _.Ay.getSelfMember(t)
                };
                return null == a.currentGuildMember || null != n && (0, s.A)(a, n) || i((0, x.A)(a.currentGuildMember)), a
            }
        }
    },
    [b.ZE4.ENTITLEMENT_CREATE]: {
        scope: {
            [y.sm.ANY]: [y.hj, y.VH]
        },
        handler() {}
    },
    [b.ZE4.ENTITLEMENT_DELETE]: {
        scope: {
            [y.sm.ANY]: [y.hj, y.VH]
        },
        handler() {}
    },
    [b.ZE4.SCREENSHARE_STATE_UPDATE]: {
        scope: {
            [y.sm.ALL]: [y.hj, r.F.RPC_SCREENSHARE_READ]
        },
        handler: () => e => {
            let {
                prevState: t,
                dispatch: n
            } = e, i = A.A.getStreamerActiveStreamMetadata(), r = i?.pid != null ? c.Ay.getGameForPID(i.pid) : null, l = r?.id != null ? d.A.getApplication(r.id) : null, s = null != l ? (0, S.A)(l) : null, o = i?.sourceName, u = {
                active: null != i,
                pid: i?.pid ?? null,
                application: (null != s) ?? null != o ? {
                    name: o
                } : null
            };
            return a().isEqual(u, t) || n(u), u
        }
    },
    [b.ZE4.VIDEO_STATE_UPDATE]: {
        scope: {
            [y.sm.ALL]: [y.hj, r.F.RPC_VIDEO_READ]
        },
        handler: () => e => {
            let {
                prevState: t,
                dispatch: n
            } = e, i = {
                active: g.Ay.isVideoEnabled()
            };
            return a().isEqual(i, t) || n(i), i
        }
    },
    [b.ZE4.AUTHORIZE_REQUEST]: {
        scope: void 0,
        handler() {}
    }
}