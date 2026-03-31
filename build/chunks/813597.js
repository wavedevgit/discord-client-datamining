/** chunk id: 813597 params = (module,exports,require) **/
i.d(t, {
    A: () => N
}), i(938796);
var n = i(627968),
    l = i(64700),
    s = i(311907),
    r = i(397927),
    a = i(832712),
    d = i(585510),
    c = i(610136),
    o = i(393432),
    u = i(910323),
    g = i(24873),
    A = i(594061),
    E = i(543465),
    h = i(477427),
    p = i(652215),
    _ = i(790782),
    S = i(355097),
    b = i(985018);

function N(e) {
    var t;
    let N, y;
    return (0, n.jsxs)(r.Drp, {
        id: "notification",
        label: b.intl.string(b.t.HcoRu0),
        action: () => {
            (0, r.mMO)(async () => {
                let {
                    default: t
                } = await Promise.all([i.e("64992"), i.e("97184")]).then(i.bind(i, 401539));
                return i => (0, n.jsx)(t, {
                    ...i,
                    guildId: e
                })
            })
        },
        children: [function(e) {
            let [t, i] = l.useState(!1), [N, y] = l.useState(!1), f = (0, s.bG)([E.Ay], () => E.Ay.getGuildUnreadSetting(e)), G = (0, s.bG)([E.Ay], () => E.Ay.getMessageNotifications(e)), L = N ? g.N9.CUSTOM : (0, g.jU)(f, G), M = t => {
                y(!1);
                let i = {
                    message_notifications: t
                };
                t === p.orn.ALL_MESSAGES && f !== _.e.ALL_MESSAGES && (i.flags = (0, o.md)(E.Ay.getGuildFlags(e), S.n3.UNREADS_ALL_MESSAGES)), a.A.updateGuildNotificationSettings(e, i, h.G_.notifications(t))
            }, v = t => {
                y(!1);
                let i = E.Ay.getGuildFlags(e);
                a.A.updateGuildNotificationSettings(e, {
                    flags: (0, o.md)(i, t === _.e.ALL_MESSAGES ? S.n3.UNREADS_ALL_MESSAGES : S.n3.UNREADS_ONLY_MENTIONS)
                }, h.G_.unreads(t))
            }, x = function(e) {
                let t = (0, d._g)(e),
                    i = (0, s.bG)([c.A], () => c.A.getGuildAlertSettings()[e]);
                if (t && null != i) return (0, n.jsxs)(r.Drp, {
                    id: "activity_alerts",
                    label: b.intl.string(b.t.D9yVAH),
                    children: [(0, n.jsx)(r.sLh, {
                        id: "activity_alerts_in_app",
                        label: b.intl.string(b.t.u6dc5B),
                        checked: !i.disableRaidAlertNag,
                        action: () => (0, A.TG)(e, e => {
                            e.disableRaidAlertNag = !e.disableRaidAlertNag
                        }, S.Sb.INFREQUENT_USER_ACTION)
                    }), (0, n.jsx)(r.sLh, {
                        id: "activity_alerts_push",
                        label: b.intl.string(b.t.P8MG6q),
                        checked: !i.disableRaidAlertPush,
                        action: () => (0, A.TG)(e, e => {
                            e.disableRaidAlertPush = !e.disableRaidAlertPush
                        }, S.Sb.INFREQUENT_USER_ACTION)
                    })]
                })
            }(e);
            return (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)(r.rXV, {
                    children: [(0, n.jsx)(r.iDA, {
                        id: "everything",
                        group: "notification-preset",
                        checked: L === g.N9.ALL_MESSAGES,
                        label: b.intl.string(b.t.hZrr6k),
                        action: () => ((0, u.i)(e, g.N9.ALL_MESSAGES), y(!1))
                    }), (0, n.jsx)(r.iDA, {
                        id: "essentials",
                        group: "notification-preset",
                        checked: L === g.N9.MENTIONS,
                        label: b.intl.string(b.t.y59NJm),
                        action: () => ((0, u.i)(e, g.N9.MENTIONS), y(!1))
                    }), (0, n.jsx)(r.iDA, {
                        id: "nothing",
                        group: "notification-preset",
                        checked: L === g.N9.NOTHING,
                        label: b.intl.string(b.t["pGn/bJ"]),
                        action: () => ((0, u.i)(e, g.N9.NOTHING), y(!1))
                    }), (0, n.jsx)(r.iDA, {
                        id: "custom",
                        group: "notification-preset",
                        checked: L === g.N9.CUSTOM,
                        action: () => (i(!0), y(!0)),
                        label: b.intl.string(b.t["32yow9"])
                    })]
                }), (L === g.N9.CUSTOM || t) && (0, n.jsxs)(r.rXV, {
                    children: [(0, n.jsxs)(r.Drp, {
                        id: "unread_setting",
                        label: "Unread Badges",
                        children: [(0, n.jsx)(r.iDA, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: f === _.e.ALL_MESSAGES,
                            label: b.intl.string(b.t["HVah/3"]),
                            action: () => v(_.e.ALL_MESSAGES)
                        }), (0, n.jsx)(r.iDA, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: f === _.e.ONLY_MENTIONS,
                            label: b.intl.string(b.t["tu+ZWJ"]),
                            action: () => v(_.e.ONLY_MENTIONS),
                            disabled: f !== _.e.ONLY_MENTIONS && G === p.orn.ALL_MESSAGES,
                            subtext: f !== _.e.ONLY_MENTIONS && G === p.orn.ALL_MESSAGES ? b.intl.string(b.t.eP8yWU) : void 0
                        })]
                    }, "unread_setting"), (0, n.jsxs)(r.Drp, {
                        id: "push_settings",
                        label: b.intl.string(b.t.HcoRu0),
                        children: [(0, n.jsx)(r.iDA, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: b.intl.string(b.t["HVah/3"]),
                            checked: G === p.orn.ALL_MESSAGES,
                            action: () => M(p.orn.ALL_MESSAGES),
                            subtext: f !== _.e.ALL_MESSAGES && G !== p.orn.ALL_MESSAGES ? b.intl.string(b.t.idXSbI) : void 0
                        }), (0, n.jsx)(r.iDA, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: G === p.orn.ONLY_MENTIONS,
                            label: b.intl.string(b.t["tu+ZWJ"]),
                            action: () => M(p.orn.ONLY_MENTIONS)
                        }), (0, n.jsx)(r.iDA, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: b.intl.string(b.t.X4wWUi),
                            checked: G === p.orn.NO_MESSAGES,
                            action: () => M(p.orn.NO_MESSAGES)
                        })]
                    }, "push_settings"), x]
                })]
            })
        }(e), (t = e, N = (0, s.cf)([E.Ay], () => ({
            highligths: E.Ay.getNotifyHighlights(t),
            mobilePush: E.Ay.isMobilePushEnabled(t),
            suppressRoles: E.Ay.isSuppressRolesEnabled(t),
            suppressEveryone: E.Ay.isSuppressEveryoneEnabled(t),
            muteScheduledEvents: E.Ay.isMuteScheduledEventsEnabled(t)
        })), y = a.A.updateGuildNotificationSettings, (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)(r.rXV, {
                children: [(0, n.jsx)(r.sLh, {
                    id: "mention",
                    checked: N.suppressEveryone,
                    label: b.intl.format(b.t.OWiWAp, {}),
                    action: () => y(t, {
                        suppress_everyone: !N.suppressEveryone
                    }, h.G_.suppressEveryone(!N.suppressEveryone))
                }), (0, n.jsx)(r.sLh, {
                    id: "roles",
                    checked: N.suppressRoles,
                    label: b.intl.string(b.t["O/QdoD"]),
                    action: () => y(t, {
                        suppress_roles: !N.suppressRoles
                    }, h.G_.suppressRoles(!N.suppressRoles))
                }), (0, n.jsx)(r.sLh, {
                    id: "hightlight",
                    label: b.intl.string(b.t.gPuteJ),
                    checked: N.highligths === p.guM.ENABLED,
                    action: () => y(t, {
                        notify_highlights: N.highligths === p.guM.ENABLED ? p.guM.DISABLED : p.guM.ENABLED
                    }, h.G_.highlights(N.highligths !== p.guM.ENABLED))
                })]
            }), (0, n.jsxs)(r.rXV, {
                children: [(0, n.jsx)(r.sLh, {
                    id: "event",
                    checked: N.muteScheduledEvents,
                    label: b.intl.string(b.t.ONG3Yz),
                    action: () => y(t, {
                        mute_scheduled_events: !N.muteScheduledEvents
                    }, h.G_.mutedEvents(!N.muteScheduledEvents))
                }), (0, n.jsx)(r.sLh, {
                    id: "mobile_push",
                    checked: N.mobilePush,
                    label: b.intl.string(b.t.h1DL66),
                    action: () => y(t, {
                        mobile_push: !N.mobilePush
                    }, h.G_.mobilePush(!N.mobilePush))
                })]
            })]
        }))]
    })
}