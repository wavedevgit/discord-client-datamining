/** chunk id: 372919 params = (module,exports,require) **/
n.d(t, {
    A: () => V
});
var i = n(627968);
n(64700);
var l = n(179771),
    r = n(420970),
    a = n(397927),
    s = n(308368),
    o = n(298990),
    d = n(544420),
    c = n(334738),
    u = n(181658),
    A = n(646865),
    h = n(795816),
    _ = n(851907),
    m = n(980142),
    g = n(572946),
    p = n(293588),
    E = n(20015),
    I = n(267102),
    f = n(869146),
    C = n(383233),
    T = n(734057),
    N = n(375492),
    S = n(461213),
    x = n(531685),
    v = n(403362),
    b = n(661191),
    y = n(998218),
    O = n(475815),
    L = n(636401),
    R = n(90924),
    P = n(629471),
    D = n(569475),
    j = n(954843),
    M = n(546983),
    w = n(613057),
    U = n(652215),
    G = n(360469);
async function k(e, t, n, i) {
    let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        r = N.A.getApplicationActivity(t);
    if (null == r || null == r.secrets || !(0, R.px)(i, r.party, r.secrets)) throw new L.A({
        errorCode: U.Lw6.NO_ELIGIBLE_ACTIVITY
    }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
    let a = (0, m.A)(r, S.A);
    if (a) {
        let {
            lock: t
        } = (0, M.d5)(e);
        return (0, o.qf)(r, a).then(() => {
            throw t(), new L.A({
                errorCode: U.Lw6.NO_ELIGIBLE_ACTIVITY
            }, "No eligible activity for application. Ensure user does have have privacy enabled.")
        })
    }
    await s.A.sendActivityInviteUser({
        userId: n,
        type: i,
        activity: r,
        content: l,
        location: "In-Game Invite"
    })
}
let V = {
    [U.e$_.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: {
            [w.sm.ANY]: [l.F.RPC, w.hj]
        },
        handler(e) {
            let {
                socket: t,
                args: {
                    user_id: n,
                    pid: i
                }
            } = e, l = t.application.id;
            if (null == l) throw new L.A({
                errorCode: U.Lw6.INVALID_COMMAND
            }, "No application.");
            return k(i, l, n, U.xL.JOIN)
        }
    },
    [U.e$_.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [w.sm.ANY]: [l.F.RPC, w.hj]
        },
        handler(e) {
            let {
                args: {
                    user_id: t
                }
            } = e, n = T.A.getDMFromUserId(t);
            null != n && (0, c.ack)(n, {
                section: U.JJy.CLOSE_ACTIVITY_JOIN_REQUEST_RPC_COMMAND,
                object: U.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                objectType: U.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
            }, !0, !0)
        }
    },
    [U.e$_.ACTIVITY_INVITE_USER]: {
        scope: {
            [w.sm.ANY]: [l.F.RPC, w.hj]
        },
        validation: e => (0, P.A)(e).required().keys({
            user_id: e.string().required(),
            type: e.number().required().valid([U.xL.JOIN]),
            content: e.string().min(0).max(1024),
            pid: e.number().min(0).required()
        }),
        handler(e) {
            let {
                socket: t,
                args: {
                    type: n,
                    user_id: i,
                    content: l,
                    pid: r
                }
            } = e, a = t.application.id;
            if (null == a) throw new L.A({
                errorCode: U.Lw6.INVALID_COMMAND
            }, "No application.");
            return k(r, a, i, n, l)
        }
    },
    [U.e$_.ACCEPT_ACTIVITY_INVITE]: {
        scope: {
            [w.sm.ANY]: [l.F.RPC, w.hj]
        },
        validation: e => (0, P.A)(e).required().keys({
            type: e.number().required().valid([U.xL.JOIN]),
            user_id: e.string().required(),
            session_id: e.string().required(),
            channel_id: e.string().required(),
            message_id: e.string().required(),
            application_id: e.string().optional()
        }),
        handler(e) {
            let {
                socket: t,
                args: {
                    type: n,
                    user_id: i,
                    session_id: l,
                    channel_id: r,
                    message_id: a,
                    application_id: s
                }
            } = e, o = t.transport === w.z4.IPC ? s ?? t.application.id : t.application.id;
            if (null == o) throw new L.A({
                errorCode: U.Lw6.INVALID_COMMAND
            }, "No application.");
            let c = Promise.resolve(!1);
            return n === U.xL.JOIN && (c = d.Ay.join({
                userId: i,
                sessionId: l,
                applicationId: o,
                channelId: r,
                messageId: a
            })), c.then(e => {
                if (!e) throw new L.A({
                    errorCode: U.Lw6.INVALID_INVITE
                }, "Invite is expired or invalid.")
            })
        }
    },
    [U.e$_.OPEN_INVITE_DIALOG]: {
        scope: {
            [w.sm.ANY]: [l.F.RPC, w.hj, w.VH]
        },
        handler(e) {
            let {
                socket: t
            } = e, l = t.application;
            if (null == l.id) throw new L.A({
                errorCode: U.Lw6.INVALID_COMMAND
            }, "No application.");
            let {
                channel: r,
                guild: s,
                frame: d
            } = (0, j.W)(), c = (0, _.Ay)({
                application: t.application,
                channelId: r?.id
            }), u = null != c ? f.A.getWindow(c) : void 0;
            u?.closed && (u = void 0);
            let A = null != u ? U.BRT.POPOUT : U.BRT.APP;
            if ((0, O.sP)({}, u?.document), null != d) {
                if (d.applicationId !== l.id) throw new L.A({
                    errorCode: U.Lw6.INVALID_COMMAND
                }, "Application is not currently mounted.");
                let e = N.A.getApplicationActivity(l.id);
                if (null != e)(0, o.qf)(e, !1, A);
                else throw new L.A({
                    errorCode: U.Lw6.NO_ELIGIBLE_ACTIVITY
                }, "No eligible activity for application. Ensure an activity was set using setActivity.")
            } else(0, a.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("43600"), n.e("12629")]).then(n.bind(n, 234355));
                return t => (0, i.jsx)(e, {
                    ...t,
                    guild: s,
                    channel: r,
                    applicationId: l.id,
                    analyticsLocation: U.ThZ.ACTIVITY_RPC,
                    source: U.PE1.ACTIVITY_INVITE
                })
            }, {
                contextKey: A === U.BRT.POPOUT ? a.KX8 : a.SYi
            })
        }
    },
    [U.e$_.INITIATE_IMAGE_UPLOAD]: (0, r.T)(U.e$_.INITIATE_IMAGE_UPLOAD, {
        scope: {
            [w.sm.ANY]: [l.F.RPC, w.hj, w.VH]
        },
        handler(e) {
            let {
                socket: t
            } = e, n = t.application.id;
            if (null == n) throw new L.A({
                errorCode: U.Lw6.INVALID_COMMAND
            }, "No application.");
            let i = (0, D.A)()?.id;
            return new Promise((e, t) => {
                ! function(e, t) {
                    let n;
                    if ((0, A.f)()) n = f.A.getWindow(U.MLl.ACTIVITY_POPOUT);
                    else {
                        let e = x.A.getLastFocusedWindowId();
                        n = null == e ? null : (0, I.Iy)(e)?.renderWindow
                    }
                    if (null == n) throw new L.A({
                        errorCode: U.Lw6.UNKNOWN_ERROR
                    }, "No valid window found");
                    let i = n.document.createElement("input");
                    i.style.display = "none", i.type = "file", i.accept = "image/jpeg, image/jpg, image/png, image/gif";
                    let l = () => {
                        (null == i.files || 0 === i.files.length) && t(), n.document.body.removeEventListener("focus", l, !0), setTimeout(() => {
                            n.document.body.removeChild(i)
                        }, 1e3)
                    };
                    i.addEventListener("change", () => {
                        (0, v.Vq)(i.files) && e(i.files[0]), l()
                    }), i.addEventListener("cancel", () => {
                        l()
                    }), n.document.body.addEventListener("focus", l, !0), n.document.body.appendChild(i), i.click()
                }(async l => {
                    let r = await (0, h.CS)(n, i, l);
                    (0, v.Vq)(r) && (0, v.Vq)(r.url) && !(r instanceof u.A) ? e({
                        image_url: r.url
                    }): t(r)
                }, () => t(Error("Upload canceled")))
            }).catch(e => {
                throw new L.A({
                    errorCode: U.Lw6.UNKNOWN_ERROR
                }, e?.message ?? "Failed to upload image")
            })
        }
    }),
    [U.e$_.OPEN_SHARE_MOMENT_DIALOG]: (0, r.T)(U.e$_.OPEN_SHARE_MOMENT_DIALOG, {
        scope: {
            [w.sm.ANY]: [w.VH]
        },
        handler(e) {
            let {
                socket: t,
                args: {
                    mediaUrl: n
                }
            } = e;
            (0, R.lG)(t.transport);
            let i = t.application.id;
            if (null == i) throw new L.A({
                errorCode: U.Lw6.INVALID_COMMAND
            }, "No application.");
            if (!(0, E.n)(t.application, U.gfo.EMBEDDED)) throw new L.A({
                errorCode: U.Lw6.INVALID_COMMAND
            }, "This application cannot access this API");
            let l = (0, D.A)();
            if (!y.A.isDiscordCdnUrl(n)) throw new L.A({
                errorCode: U.Lw6.INVALID_PAYLOAD
            }, "mediaUrl must be a Discord CDN url");
            (0, g.g)({
                applicationId: i,
                channelId: l?.id,
                mediaUrl: n
            })
        }
    }),
    [U.e$_.SHARE_INTERACTION]: (0, r.T)(U.e$_.SHARE_INTERACTION, {
        scope: {
            [w.sm.ANY]: [w.VH, w.hj]
        },
        handler(e) {
            let t, {
                    socket: n,
                    args: {
                        command: i,
                        preview_image: l,
                        components: r,
                        require_launch_channel: s,
                        content: o,
                        options: d,
                        pid: c
                    }
                } = e,
                u = n.application.id;
            if (null == u) throw new L.A({
                errorCode: U.Lw6.INVALID_COMMAND
            }, "No application.");
            if (!G.mO.includes(u)) throw new L.A({
                errorCode: U.Lw6.INVALID_COMMAND
            }, "Unsupported application.");
            if (!(0, E.n)(n.application, U.gfo.EMBEDDED)) throw new L.A({
                errorCode: U.Lw6.INVALID_COMMAND
            }, "This application cannot access this API");
            let A = (0, D.A)();
            if (null == A && s) throw new L.A({
                errorCode: U.Lw6.INVALID_COMMAND
            }, "No channel found");
            if (null !== l || null !== r || null !== o) {
                let e = [];
                void 0 !== l && (e = [{
                    id: b.default.cast(b.default.fromTimestamp(Date.now())),
                    size: 0,
                    proxy_url: l.url,
                    filename: "preview",
                    url: l.url,
                    height: l.height,
                    width: l.width
                }]), t = new C.Ay({
                    id: b.default.cast(b.default.fromTimestamp(Date.now())),
                    applicationId: u,
                    content: o,
                    components: r,
                    attachments: e
                })
            }
            return new Promise(e => {
                let n = !1,
                    l = (0, M.d5)(c),
                    r = a.SYi;
                (f.A.getWindowOpen(U.MLl.ACTIVITY_POPOUT) || l.context === U.BRT.POPOUT) && (r = a.KX8), (0, p.m)({
                    applicationId: u,
                    channel: A,
                    command: {
                        name: i,
                        options: d
                    },
                    requireLaunchChannel: !0 === s,
                    onShareResult: t => {
                        n || (n = t), l.lock(), e({
                            success: n
                        })
                    },
                    previewMessage: t,
                    contextKey: r
                })
            })
        }
    })
}