/** chunk id: 714977 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => S
});
var n = i(627968),
    s = i(64700),
    a = i(311907),
    l = i(397927),
    r = i(684013),
    o = i(235986),
    d = i(499820),
    c = i(540999),
    u = i(532624),
    h = i(256415),
    _ = i(837921),
    p = i(350535),
    f = i(93465),
    m = i(592598),
    g = i(672396),
    A = i(652215),
    x = i(985018),
    v = i(720847),
    y = i(153335);

function E() {
    let e = h.default.getNotificationPositionMode(),
        t = e !== A.G6Q.DISABLED,
        i = u.Ay.getOverlayKeybind(),
        n = u.Ay.getOverlayChatKeybind();
    r.A.track(A.HAw.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: m.A.isNotificationDisabled(g.KS.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: h.default.getTextWidgetOpacity(),
        hotkey: null != i ? (0, p.dI)(i.shortcut) : null,
        text_activation_hotkey: null != n ? (0, p.dI)(n.shortcut) : null
    })
}
class I extends s.PureComponent {
    state = {
        selectedSection: "GENERAL"
    };
    componentDidMount() {
        r.A.track(A.HAw.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null
        })
    }
    handleSelectSection = e => {
        this.setState({
            selectedSection: e
        })
    };
    handleToggleTextChatNotifications = () => {
        r.A.setNotificationDisabledSetting(f.M.TEXT_CHAT, !this.props.textChatDisabled), E()
    };
    handleToggleInviteNotification = () => {
        let e = this.props.shouldShowInviteNotification;
        r.A.setNotificationDisabledSetting(f.M.GAME_ACTIVITY, !e)
    };
    handleChangeNotificationPositionMode(e, t) {
        r.A.setNotificationPositionMode(t), E()
    }
    handleChangeAvatarSizeMode(e) {
        let {
            value: t
        } = e;
        r.A.setAvatarSizeMode(t)
    }
    handleChangeDisplayNameMode(e) {
        let {
            value: t
        } = e;
        r.A.setDisplayNameMode(t)
    }
    handleChangeDisplayUserMode(e) {
        let {
            value: t
        } = e;
        r.A.setDisplayUserMode(t)
    }
    renderHeader() {
        return (0, n.jsxs)(o.A, {
            direction: o.A.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: v.wx,
            children: [(0, n.jsxs)(o.A, {
                children: [(0, n.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    className: v.qd,
                    children: x.intl.string(x.t["35G2Mq"])
                }), (0, n.jsx)("div", {
                    className: v.Q7,
                    children: (0, n.jsx)(l.K0, {
                        variant: "icon-only",
                        size: "md",
                        icon: l.PGe,
                        onClick: this.props.onClose,
                        "aria-label": x.intl.string(x.t.cpT0Cq)
                    })
                })]
            }), this.renderTabBar()]
        })
    }
    renderTabBar() {
        let {
            selectedSection: e
        } = this.state, t = c.A.isDeveloper ? (0, n.jsx)(l.VQ0.Item, {
            id: "DEVELOPER",
            className: v.YU,
            children: "Developer"
        }) : null;
        return (0, n.jsxs)(l.VQ0, {
            selectedItem: e,
            type: "top",
            className: v.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [(0, n.jsx)(l.VQ0.Item, {
                id: "GENERAL",
                className: v.YU,
                children: x.intl.string(x.t["0FYxxw"])
            }), (0, n.jsx)(l.VQ0.Item, {
                id: "VOICE",
                className: v.YU,
                children: x.intl.string(x.t["3WeSiE"])
            }), t]
        })
    }
    renderBody() {
        let e, {
            selectedSection: t
        } = this.state;
        switch (t) {
            case "DEVELOPER":
                e = this.renderDeveloperSettings();
                break;
            case "VOICE":
                e = this.renderVoiceSettings();
                break;
            default:
                e = this.renderGeneralSettings()
        }
        return (0, n.jsx)(l.ChK, {
            className: v.Qs,
            children: e
        }, t)
    }
    renderGeneralSettings() {
        let {
            notificationPositionMode: e,
            shouldShowInviteNotification: t
        } = this.props, i = !m.A.isNotificationDisabled(g.KS.TextChat), s = e !== A.G6Q.DISABLED;
        return (0, n.jsxs)(l.nVY, {
            children: [(0, n.jsx)(l.D0$, {
                label: x.intl.string(x.t.IQv8Eo),
                children: (0, n.jsx)(d.A, {
                    position: e,
                    onChange: this.handleChangeNotificationPositionMode
                })
            }), (0, n.jsx)(l.dOG, {
                label: x.intl.string(x.t.Fy5kPp),
                checked: i && s,
                onChange: this.handleToggleTextChatNotifications,
                disabled: !s
            }), (0, n.jsx)(l.dOG, {
                label: x.intl.string(x.t["f+c48/"]),
                description: x.intl.string(x.t.W9DVVf),
                checked: t,
                onChange: this.handleToggleInviteNotification
            })]
        })
    }
    renderVoiceSettings() {
        let {
            avatarSizeMode: e,
            displayNameMode: t,
            displayUserMode: i
        } = this.props;
        return (0, n.jsxs)(l.BJc, {
            gap: 20,
            children: [(0, n.jsx)(l.z6M, {
                label: x.intl.string(x.t.dnvZSg),
                onChange: e => this.handleChangeAvatarSizeMode({
                    value: e
                }),
                options: [{
                    value: A.OSZ.LARGE,
                    name: x.intl.string(x.t.YcOxtr)
                }, {
                    value: A.OSZ.SMALL,
                    name: x.intl.string(x.t.BKIKqx)
                }],
                value: e
            }), (0, n.jsx)(l.z6M, {
                label: x.intl.string(x.t.J0dpcB),
                onChange: e => this.handleChangeDisplayNameMode({
                    value: e
                }),
                options: [{
                    value: A.pwA.ALWAYS,
                    name: x.intl.string(x.t.nBmDrT)
                }, {
                    value: A.pwA.ONLY_WHILE_SPEAKING,
                    name: x.intl.string(x.t["2OvIZY"])
                }, {
                    value: A.pwA.NEVER,
                    name: x.intl.string(x.t.ekjlPL)
                }],
                value: t
            }), (0, n.jsx)(l.z6M, {
                label: x.intl.string(x.t.swsWWC),
                onChange: e => this.handleChangeDisplayUserMode({
                    value: e
                }),
                options: [{
                    value: A.f5z.ALWAYS,
                    name: x.intl.string(x.t.nBmDrT)
                }, {
                    value: A.f5z.ONLY_WHILE_SPEAKING,
                    name: x.intl.string(x.t["2OvIZY"])
                }],
                value: i
            })]
        })
    }
    renderDeveloperSettings() {
        return (0, n.jsx)("div", {
            className: y.SX,
            children: (0, n.jsx)(l.l6P, {
                label: "Crashes",
                value: void 0,
                options: [{
                    id: "native-crash",
                    value: void 0,
                    label: "Native crash"
                }, {
                    id: "abort",
                    value: 0,
                    label: "Abort()"
                }, {
                    id: "sigsegv",
                    value: 1,
                    label: "SIGSEGV()"
                }, {
                    id: "exception-access-violation",
                    value: 2,
                    label: "EXCEPTION_ACCESS_VIOLATION"
                }, {
                    id: "raise-fail-fast-exception",
                    value: 3,
                    label: "RaiseFailFastException"
                }, {
                    id: "out-of-memory",
                    value: 4,
                    label: "Out of Memory"
                }],
                onSelectionChange: e => null != e && _.Ay.crash(e),
                selectionMode: "single",
                fullWidth: !0
            })
        })
    }
    render() {
        return (0, n.jsxs)(l.lGe, {
            "aria-label": x.intl.string(x.t["35G2Mq"]),
            className: v.kL,
            children: [this.renderHeader(), this.renderBody()]
        })
    }
}

function S(e) {
    let {
        onClose: t
    } = e, {
        avatarSizeMode: i,
        displayNameMode: s,
        displayUserMode: l,
        notificationPositionMode: r,
        textChatDisabled: o,
        shouldShowInviteNotification: d
    } = (0, a.cf)([h.default, m.A], () => ({
        avatarSizeMode: h.default.getAvatarSizeMode(),
        displayNameMode: h.default.getDisplayNameMode(),
        displayUserMode: h.default.getDisplayUserMode(),
        notificationPositionMode: h.default.getNotificationPositionMode(),
        textChatDisabled: m.A.isNotificationDisabled(g.KS.TextChat),
        shouldShowInviteNotification: !m.A.isNotificationDisabled(g.KS.ActivityInvite)
    }));
    return (0, n.jsx)(I, {
        onClose: t,
        avatarSizeMode: i,
        displayNameMode: s,
        displayUserMode: l,
        notificationPositionMode: r,
        textChatDisabled: o,
        shouldShowInviteNotification: d
    })
}