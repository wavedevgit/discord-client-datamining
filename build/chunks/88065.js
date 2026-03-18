/** chunk id: 88065 params = (module,exports,require) **/
n.d(t, {
    A: () => D
}), n(938796);
var i = n(735438),
    a = n.n(i),
    l = n(179771),
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
                errorCode: b.Lw6.INVALID_GUILD
            }, `Invalid guild id: ${t}`);
            return e => {
                let {
                    prevState: n,
                    dispatch: i
                } = e, l = m.A.getGuild(t);
                if (null == l) return;
                let r = {
                    guild: {
                        id: l.id,
                        name: l.name,
                        icon_url: (0, u.Iv)(l, 128) ?? null
                    },
                    online: 0
                };
                return a().isEqual(n, r) || i(r), r
            }
        }
    },
    [b.ZE4.VOICE_STATE_CREATE]: {
        scope: {
            [y.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ]
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
                } = e, l = h.A.getChannel(t);
                if (null == l) return;
                let r = l.getGuildId(),
                    s = Object.values(I.A.getVoiceStatesForChannel(l.id));
                return n && a().differenceBy(s, n, e => {
                    let {
                        userId: t
                    } = e;
                    return t
                }).forEach(e => i((0, C.qG)(r, l.id, e))), s
            }
        }
    },
    [b.ZE4.VOICE_STATE_DELETE]: {
        scope: {
            [y.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ]
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
                } = e, l = h.A.getChannel(t);
                if (null == l) return;
                let r = l.getGuildId(),
                    s = Object.values(I.A.getVoiceStatesForChannel(l.id));
                return a().differenceBy(n, s, e => {
                    let {
                        userId: t
                    } = e;
                    return t
                }).forEach(e => i((0, C.qG)(r, l.id, e))), s
            }
        }
    },
    [b.ZE4.VOICE_STATE_UPDATE]: {
        scope: {
            [y.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ]
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
                } = e, l = h.A.getChannel(t);
                if (null == l) return;
                let r = l.getGuildId(),
                    s = Object.values(I.A.getVoiceStatesForChannel(l.id)).map(e => (0, C.qG)(r, l.id, e));
                return a().differenceWith(s, n, a().isEqual).forEach(e => i(e)), s
            }
        }
    },
    [b.ZE4.VOICE_CONNECTION_STATUS]: {
        scope: {
            [y.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ]
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
        scope: l.F.RPC,
        validation: O,
        handler: L
    },
    [b.ZE4.MESSAGE_UPDATE]: {
        scope: l.F.RPC,
        validation: O,
        handler: L
    },
    [b.ZE4.MESSAGE_DELETE]: {
        scope: l.F.RPC,
        validation: O,
        handler: L
    },
    [b.ZE4.SPEAKING_START]: {
        scope: {
            [y.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ, y.hj]
        },
        validation: R,
        handler: P
    },
    [b.ZE4.SPEAKING_STOP]: {
        scope: {
            [y.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ, y.hj]
        },
        validation: R,
        handler: P
    },
    [b.ZE4.GUILD_CREATE]: {
        scope: l.F.RPC,
        handler() {}
    },
    [b.ZE4.CHANNEL_CREATE]: {
        scope: l.F.RPC,
        handler() {}
    },
    [b.ZE4.GAME_JOIN]: {
        scope: {
            [y.sm.ANY]: [l.F.RPC, y.hj]
        },
        handler() {}
    },
    [b.ZE4.GAME_SPECTATE]: {
        scope: {
            [y.sm.ANY]: [l.F.RPC, y.hj]
        },
        handler() {}
    },
    [b.ZE4.ACTIVITY_JOIN]: {
        scope: {
            [y.sm.ANY]: [l.F.RPC, y.VH, y.hj]
        },
        handler() {}
    },
    [b.ZE4.ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [y.sm.ANY]: [l.F.RPC, y.hj]
        },
        handler() {}
    },
    [b.ZE4.ACTIVITY_SPECTATE]: {
        scope: {
            [y.sm.ANY]: [l.F.RPC, y.VH, y.hj]
        },
        handler() {}
    },
    [b.ZE4.ACTIVITY_INVITE]: {
        scope: {
            [y.sm.ANY]: [l.F.RPC, y.hj]
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
        scope: l.F.RPC,
        handler() {}
    },
    [b.ZE4.NOTIFICATION_CREATE]: {
        scope: {
            [y.sm.ALL]: [l.F.RPC, l.F.RPC_NOTIFICATIONS_READ]
        },
        handler() {}
    },
    [b.ZE4.RELATIONSHIP_UPDATE]: {
        scope: l.F.RELATIONSHIPS_READ,
        handler(e) {
            let {
                socket: t
            } = e;
            if (r.zy(r.iu(t.application.flags ?? 0), r.iu(b.gfo.DISABLE_RELATIONSHIPS_ACCESS))) throw new f.A({
                errorCode: b.Lw6.INVALID_PERMISSIONS
            }, "Missing Permissions")
        }
    },
    [b.ZE4.CURRENT_USER_UPDATE]: {
        scope: {
            [y.sm.ANY]: [y.hj, l.F.IDENTIFY]
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
            [y.sm.ALL]: [l.F.IDENTIFY, l.F.GUILDS_MEMBERS_READ]
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
            [y.sm.ALL]: [y.hj, l.F.RPC_SCREENSHARE_READ]
        },
        handler: () => e => {
            let {
                prevState: t,
                dispatch: n
            } = e, i = A.A.getStreamerActiveStreamMetadata(), l = i?.pid != null ? c.Ay.getGameForPID(i.pid) : null, r = l?.id != null ? d.A.getApplication(l.id) : null, s = null != r ? (0, S.A)(r) : null, o = i?.sourceName, u = {
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
            [y.sm.ALL]: [y.hj, l.F.RPC_VIDEO_READ]
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