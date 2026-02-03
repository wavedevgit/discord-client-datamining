/** chunk id: 38198, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
}), n(591487), n(727858), n(747238);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(554146),
    s = n(397927),
    o = n(308368),
    c = n(688810),
    u = n(826673),
    d = n(970244),
    h = n(867455),
    p = n(780057),
    f = n(747926),
    m = n(954571),
    g = n(203982),
    A = n(453771),
    b = n(518960),
    _ = n(408018),
    y = n(447155),
    v = n(652215),
    E = n(49999),
    O = n(412136),
    C = n(985018),
    S = n(545156);
let x = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");

function j(e) {
    let {
        channel: t,
        options: j,
        onFileUpload: I,
        onClose: T,
        onSelect: N,
        draftType: P,
        editorTextContent: w,
        setValue: R,
        openClips: D
    } = e, {
        analyticsLocations: M
    } = (0, c.Ay)(), L = (0, d.s)({
        channel: t
    }), k = (0, i.bG)([p.A], () => p.A.isInProgress());

    function U() {
        (0, f.Tv)(t, void 0, "Plus Button")
    }

    function G() {
        m.default.track(v.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), R("/", (0, _.x7)("/"))
    }

    function F() {
        D()
    }

    function H() {
        (0, u.Dr)(a.M.POLLS_CHAT_INPUT_COACHMARK, {
            dismissAction: E.i.TAKE_ACTION
        }), (0, s.mMO)(async () => {
            let {
                default: e
            } = await n.e("52786").then(n.bind(n, 489449));
            return n => {
                var r, i;
                return (0, l.jsx)(e, (r = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), l.forEach(function(t) {
                            var l;
                            l = n[t], t in e ? Object.defineProperty(e, t, {
                                value: l,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = l
                        })
                    }
                    return e
                }({}, n), i = i = {
                    channel: t
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, l)
                    }
                    return n
                })(Object(i)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
                }), r))
            }
        }, {
            modalKey: O.sm
        })
    }

    function B() {
        let e = w,
            n = "txt",
            l = "",
            r = w.match(x);
        null != r && (l = r[1], n = r[2], e = r[3], l += r[4]), (0, b.R)([(0, A.VE)(new Blob([e], {
            type: "text/plain"
        }), "message.".concat(n), "text/plain")], t, P), g._.dispatchToLastSubscribed(v.jej.CLEAR_TEXT), "" !== l && g._.dispatchToLastSubscribed(v.jej.INSERT_TEXT, {
            plainText: l
        })
    }
    return r.useEffect(() => {
        m.default.track(v.HAw.OPEN_POPOUT, {
            type: "Send Attachment",
            channel_id: t.id,
            guild_id: t.guild_id
        })
    }, [t.guild_id, t.id]), (0, l.jsx)(s.W1t, {
        "data-menu-needs-migration": !0,
        onSelect: N,
        navId: "channel-attach",
        onClose: T,
        "aria-label": C.intl.string(C.t.Xm41aV),
        className: S.MK,
        children: j.map(function(e) {
            switch (e.type) {
                case y.v.UPLOAD_A_FILE:
                    return (0, l.jsx)(s.Drp, {
                        id: "upload-file",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: I
                    }, "upload-file");
                case y.v.UPLOAD_TEXT_AS_FILE:
                    if ("" === w) return null;
                    return (0, l.jsx)(s.Drp, {
                        id: "upload-text-as-file",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: B
                    }, "upload-text-as-file");
                case y.v.CLIPS:
                    return (0, l.jsx)(s.Drp, {
                        id: "clips",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        badge: null != e.badgeVal && e.badgeVal > 0 ? {
                            text: e.badgeVal.toString()
                        } : void 0,
                        action: F
                    }, "clips");
                case y.v.POLL:
                    return (0, l.jsx)(s.Drp, {
                        id: "poll",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: H
                    }, "poll");
                case y.v.INVITE_TO_PLAY_GAME:
                    return (0, l.jsx)(s.Drp, {
                        id: "play",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: () => {
                            var n;
                            return n = e.activity, void o.A.sendActivityInvite({
                                channelId: t.id,
                                type: v.xL.JOIN,
                                activity: n,
                                location: M[M.length - 1]
                            })
                        }
                    }, "play");
                case y.v.INVITE_TO_LISTEN:
                    return (0, l.jsx)(s.Drp, {
                        id: "listen",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: () => {
                            var n;
                            return n = e.activity, void o.A.sendActivityInvite({
                                channelId: t.id,
                                type: v.xL.LISTEN,
                                activity: n,
                                location: M[M.length - 1]
                            })
                        }
                    }, "listen");
                case y.v.INVITE_TO_WATCH:
                    return (0, l.jsx)(s.Drp, {
                        id: "watch",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: () => {
                            var n;
                            return n = e.activity, void o.A.sendActivityInvite({
                                channelId: t.id,
                                type: v.xL.WATCH,
                                activity: n,
                                location: M[M.length - 1]
                            })
                        }
                    }, "watch");
                case y.v.CREATE_THREAD:
                    return (0, l.jsx)(s.Drp, {
                        id: "THREAD",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: U
                    }, "THREAD");
                case y.v.SLASH_COMMAND:
                    return (0, l.jsx)(s.Drp, {
                        id: "SLASH_COMMAND",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: G
                    }, "SLASH_COMMAND");
                case y.v.SCHEDULED_MESSAGE:
                    return (0, l.jsx)(s.Drp, {
                        id: "scheduled_message",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: () => (0, d.e0)({
                            channel: t
                        }),
                        children: L
                    }, "scheduled_message");
                case y.v.SUMMARIZE_THREAD:
                    return (0, l.jsx)(s.Drp, {
                        id: "summarize_thread",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: () => h.A.summarizeThread(t),
                        loading: k,
                        disabled: k,
                        children: k ? null : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(s.Drp, {
                                id: "summarize_thread_for_everyone",
                                label: C.intl.string(C.t.eCzSdd),
                                iconLeft: s.nFg,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: s.nFg
                                },
                                action: () => h.A.summarizeThread(t, !1)
                            }, "summarize_thread_for_everyone"), (0, l.jsx)(s.Drp, {
                                id: "summarize_thread_for_me",
                                label: C.intl.string(C.t["HOe+Hq"]),
                                iconLeft: s.nys,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: s.nys
                                },
                                action: () => h.A.summarizeThread(t)
                            }, "summarize_thread_for_me")]
                        })
                    }, "summarize_thread");
                default:
                    return null
            }
        })
    })
}