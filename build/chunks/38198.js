/** Chunk was on 1113 **/
/** chunk id: 38198, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
}), n(591487), n(727858), n(747238);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(554146),
    a = n(397927),
    o = n(308368),
    c = n(795816),
    u = n(688810),
    d = n(975412),
    h = n(826673),
    p = n(970244),
    g = n(867455),
    f = n(780057),
    m = n(747926),
    b = n(954571),
    A = n(203982),
    y = n(453771),
    O = n(518960),
    _ = n(408018),
    x = n(447155),
    j = n(652215),
    v = n(49999),
    E = n(412136),
    C = n(985018),
    S = n(545156);
let I = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");

function N(e) {
    let {
        channel: t,
        options: N,
        onFileUpload: T,
        onClose: P,
        onSelect: w,
        draftType: R,
        editorTextContent: D,
        setValue: L,
        openClips: M
    } = e, {
        analyticsLocations: k,
        newestAnalyticsLocation: G
    } = (0, u.Ay)(), U = (0, p.s)({
        channel: t
    }), V = (0, i.bG)([f.A], () => f.A.isInProgress());

    function B() {
        (0, m.Tv)(t, void 0, "Plus Button")
    }

    function H() {
        b.default.track(j.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), L("/", (0, _.x7)("/"))
    }

    function F() {
        M()
    }

    function K() {
        (0, h.Dr)(s.M.POLLS_CHAT_INPUT_COACHMARK, {
            dismissAction: v.i.TAKE_ACTION
        }), (0, a.mMO)(async () => {
            let {
                default: e
            } = await n.e("52786").then(n.bind(n, 489449));
            return n => {
                var l, i;
                return (0, r.jsx)(e, (l = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({}, n), i = i = {
                    channel: t
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(i)).forEach(function(e) {
                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
                }), l))
            }
        }, {
            modalKey: E.sm
        })
    }

    function Y() {
        b.default.track(j.HAw.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
            channel_type: t.type,
            channel_id: t.id,
            guild_id: t.guild_id
        }), (0, d.A)({
            context: null != t ? {
                type: "channel",
                channel: t
            } : {
                type: "contextless"
            },
            openInPopout: !1,
            analyticsLocation: G
        }), (0, c.LV)({
            guildId: t.guild_id
        })
    }

    function W() {
        let e = D,
            n = "txt",
            r = "",
            l = D.match(I);
        null != l && (r = l[1], n = l[2], e = l[3], r += l[4]), (0, O.R)([(0, y.VE)(new Blob([e], {
            type: "text/plain"
        }), "message.".concat(n), "text/plain")], t, R), A._.dispatchToLastSubscribed(j.jej.CLEAR_TEXT), "" !== r && A._.dispatchToLastSubscribed(j.jej.INSERT_TEXT, {
            plainText: r
        })
    }
    return l.useEffect(() => {
        b.default.track(j.HAw.OPEN_POPOUT, {
            type: "Send Attachment",
            channel_id: t.id,
            guild_id: t.guild_id
        })
    }, [t.guild_id, t.id]), (0, r.jsx)(a.W1t, {
        "data-menu-needs-migration": !0,
        onSelect: w,
        navId: "channel-attach",
        onClose: P,
        "aria-label": C.intl.string(C.t.Xm41aV),
        className: S.MK,
        children: N.map(function(e) {
            switch (e.type) {
                case x.v.UPLOAD_A_FILE:
                    return (0, r.jsx)(a.Drp, {
                        id: "upload-file",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: T
                    }, "upload-file");
                case x.v.UPLOAD_TEXT_AS_FILE:
                    if ("" === D) return null;
                    return (0, r.jsx)(a.Drp, {
                        id: "upload-text-as-file",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: W
                    }, "upload-text-as-file");
                case x.v.CLIPS:
                    return (0, r.jsx)(a.Drp, {
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
                case x.v.POLL:
                    return (0, r.jsx)(a.Drp, {
                        id: "poll",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: K
                    }, "poll");
                case x.v.INVITE_TO_PLAY_GAME:
                    return (0, r.jsx)(a.Drp, {
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
                                type: j.xL.JOIN,
                                activity: n,
                                location: k[k.length - 1]
                            })
                        }
                    }, "play");
                case x.v.INVITE_TO_LISTEN:
                    return (0, r.jsx)(a.Drp, {
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
                                type: j.xL.LISTEN,
                                activity: n,
                                location: k[k.length - 1]
                            })
                        }
                    }, "listen");
                case x.v.INVITE_TO_WATCH:
                    return (0, r.jsx)(a.Drp, {
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
                                type: j.xL.WATCH,
                                activity: n,
                                location: k[k.length - 1]
                            })
                        }
                    }, "watch");
                case x.v.CREATE_THREAD:
                    return (0, r.jsx)(a.Drp, {
                        id: "THREAD",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: B
                    }, "THREAD");
                case x.v.SLASH_COMMAND:
                    return (0, r.jsx)(a.Drp, {
                        id: "SLASH_COMMAND",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: H
                    }, "SLASH_COMMAND");
                case x.v.ACTIVITY:
                    return (0, r.jsx)(a.Drp, {
                        id: "activity",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: Y
                    }, "activity");
                case x.v.SCHEDULED_MESSAGE:
                    return (0, r.jsx)(a.Drp, {
                        id: "scheduled_message",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: () => (0, p.e0)({
                            channel: t
                        }),
                        children: U
                    }, "scheduled_message");
                case x.v.SUMMARIZE_THREAD:
                    return (0, r.jsx)(a.Drp, {
                        id: "summarize_thread",
                        label: e.display,
                        iconLeft: e.icon,
                        leadingAccessory: {
                            type: "icon",
                            icon: e.icon
                        },
                        action: () => g.A.summarizeThread(t),
                        loading: V,
                        disabled: V,
                        children: V ? null : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(a.Drp, {
                                id: "summarize_thread_for_everyone",
                                label: C.intl.string(C.t.eCzSdd),
                                iconLeft: a.nFg,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: a.nFg
                                },
                                action: () => g.A.summarizeThread(t, !1)
                            }, "summarize_thread_for_everyone"), (0, r.jsx)(a.Drp, {
                                id: "summarize_thread_for_me",
                                label: C.intl.string(C.t["HOe+Hq"]),
                                iconLeft: a.nys,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: a.nys
                                },
                                action: () => g.A.summarizeThread(t)
                            }, "summarize_thread_for_me")]
                        })
                    }, "summarize_thread");
                default:
                    return null
            }
        })
    })
}