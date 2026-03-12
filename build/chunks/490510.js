/** chunk id: 490510 params = (module,exports,require) **/
n.d(t, {
    A: () => G
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(311907),
    o = n(827734),
    d = n(435371),
    c = n(397927),
    u = n(97260),
    _ = n(117178),
    m = n(512513),
    g = n(915967),
    A = n(775121),
    h = n(734066),
    x = n(880144),
    p = n(168943),
    T = n(680243),
    E = n(843401),
    C = n(430452),
    S = n(532624),
    f = n(975571),
    N = n(723702),
    b = n(350535),
    I = n(958831),
    v = n(790174),
    j = n(652215),
    O = n(650583),
    y = n(985018),
    R = n(171150),
    P = n(522759);

function D(e) {
    let {
        children: t
    } = e;
    return t([g.Q_.MESSAGE, g.Q_.NAVIGATION, g.Q_.DND, g.Q_.CHAT, g.Q_.VOICE_AND_VIDEO, g.Q_.MISCELLANEOUS])
}
class L extends s.PureComponent {
    handleActionChanged = e => {
        u.A.setKeybind({
            ...this.props.keybind,
            action: e
        })
    };
    handleShortcutChange = e => {
        u.A.setKeybind({
            ...this.props.keybind,
            shortcut: e
        })
    };
    handleDeleteKeybind = () => {
        u.A.deleteKeybind(this.props.keybind.id)
    };
    handleEnableDisable = () => {
        let {
            keybind: e
        } = this.props;
        u.A.setKeybind({
            ...this.props.keybind,
            enabled: !e.enabled
        })
    };
    renderMessage() {
        let {
            keybind: e
        } = this.props, t = b.dI(e.shortcut);
        return A.A.hasBind(t) ? (0, i.jsx)(c.po8, {
            messageType: c.YCn.ERROR,
            children: y.intl.string(y.t["7lQlw3"])
        }) : O.Yy.has(t) ? (0, i.jsx)(c.po8, {
            messageType: c.YCn.ERROR,
            children: y.intl.format(y.t.MOIaNd, {
                keyboardNavArticle: f.A.getArticleURL(j.MVz.KEYBOARD_NAVIGATION)
            })
        }) : (0, i.jsx)(c.Text, {
            variant: "text-md/normal",
            className: R.qD,
            children: this.props.keybindDescriptions[e.action]
        })
    }
    render() {
        let {
            managed: e,
            enabled: t
        } = this.props.keybind;
        return (0, i.jsxs)("div", {
            className: R.YI,
            children: [(0, i.jsxs)("div", {
                className: R.PO,
                children: [(0, i.jsx)("div", {
                    className: R.AS,
                    children: (0, i.jsx)(c.l6P, {
                        selectionMode: "single",
                        label: y.intl.string(y.t.UUpAD6),
                        value: this.props.keybind.action,
                        options: this.props.keybindActionTypes,
                        onSelectionChange: this.handleActionChanged,
                        disabled: e
                    })
                }), (0, i.jsx)("div", {
                    className: R.AS,
                    children: (0, i.jsx)(c.D0$, {
                        label: y.intl.string(y.t["1La4tC"]),
                        children: (0, i.jsx)(_.A, {
                            defaultValue: this.props.keybind.shortcut,
                            onChange: this.handleShortcutChange
                        })
                    })
                }), !e && (0, i.jsx)("div", {
                    className: R.d9,
                    children: (0, i.jsx)(c.K0, {
                        variant: "icon-only",
                        onClick: this.handleDeleteKeybind,
                        icon: c.ucK,
                        "aria-label": y.intl.string(y.t.qEHmmB)
                    })
                }), (0, i.jsx)("div", {
                    className: R.ZW,
                    children: (0, i.jsx)(d.m_, {
                        text: y.intl.string(y.t.uCD7qK),
                        children: (0, i.jsx)("div", {
                            children: (0, i.jsx)(c.dOG, {
                                checked: t,
                                onChange: this.handleEnableDisable
                            })
                        })
                    })
                })]
            }), this.renderMessage(), this.renderExtraSettings()]
        })
    }
    renderExtraSettings() {
        let {
            action: e
        } = this.props.keybind;
        return e === j.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, i.jsx)(I.A, {
            keybind: this.props.keybind
        }) : void 0
    }
}
class M extends s.PureComponent {
    get keybindActionTypes() {
        let {
            overlaySupported: e,
            canGoLive: t,
            allowSoundboard: n,
            enableClips: i,
            enableScreenshotKeybind: s
        } = this.props, l = [{
            id: "unassigned",
            value: j.hCu.UNASSIGNED,
            label: y.intl.string(y.t["0Uh579"])
        }, {
            id: "push-to-talk",
            value: j.hCu.PUSH_TO_TALK,
            label: y.intl.string(y.t.Y5lgTP)
        }, {
            id: "push-to-talk-priority",
            value: j.hCu.PUSH_TO_TALK_PRIORITY,
            label: y.intl.string(y.t.DkSwJ2)
        }, {
            id: "push-to-mute",
            value: j.hCu.PUSH_TO_MUTE,
            label: y.intl.string(y.t.hSCRqd)
        }, {
            id: "vad-priority",
            value: j.hCu.VAD_PRIORITY,
            label: y.intl.string(y.t["49d6Nd"])
        }, {
            id: "toggle-mute",
            value: j.hCu.TOGGLE_MUTE,
            label: y.intl.string(y.t.PlkYKD)
        }, {
            id: "toggle-deafen",
            value: j.hCu.TOGGLE_DEAFEN,
            label: y.intl.string(y.t.NvGq1K)
        }, {
            id: "toggle-voice-mode",
            value: j.hCu.TOGGLE_VOICE_MODE,
            label: y.intl.string(y.t.Wa5H9S)
        }, {
            id: "toggle-streamer-mode",
            value: j.hCu.TOGGLE_STREAMER_MODE,
            label: y.intl.string(y.t.BK0Ncc)
        }];
        return (0, p.L)() && l.push({
            id: "toggle-camera",
            value: j.hCu.TOGGLE_CAMERA,
            label: y.intl.string(y.t.hf8JVT)
        }), e && (l.push({
            id: "toggle-overlay-input-lock",
            value: j.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
            label: y.intl.string(y.t.VsAZcC)
        }), l.push({
            id: "activate-overlay-region-text-widget",
            value: j.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
            label: y.intl.string(y.t.hurHWo)
        })), t && ((0, N.isWindows)() || C.Ay.getUseSystemScreensharePicker()) && l.push({
            id: "toggle-go-live-streaming",
            value: j.hCu.TOGGLE_GO_LIVE_STREAMING,
            label: y.intl.string(y.t.ybdjJD)
        }), (0, N.isDesktop)() && (l.push({
            id: "navigate-back",
            value: j.hCu.NAVIGATE_BACK,
            label: y.intl.string(y.t.gRSaOa)
        }, {
            id: "navigate-forward",
            value: j.hCu.NAVIGATE_FORWARD,
            label: y.intl.string(y.t.zOXpjU)
        }, {
            id: "switch-to-voice-channel",
            value: j.hCu.SWITCH_TO_VOICE_CHANNEL,
            label: y.intl.string(y.t.ty7Lxy)
        }, {
            id: "disconnect-from-voice-channel",
            value: j.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
            label: y.intl.string(y.t.CV7mT7)
        }), n && l.push({
            id: "soundboard",
            value: j.hCu.SOUNDBOARD,
            label: y.intl.string(y.t.yPH4xm)
        }, {
            id: "soundboard-hold",
            value: j.hCu.SOUNDBOARD_HOLD,
            label: y.intl.string(y.t["1xFbP/"])
        }), i && (l.push({
            id: "save-clip",
            value: j.hCu.SAVE_CLIP,
            label: y.intl.string(y.t.U4URzP)
        }), s && l.push({
            id: "save-screenshot",
            value: j.hCu.SAVE_SCREENSHOT,
            label: y.intl.string(y.t["+WloFH"])
        }))), l
    }
    get keybindDescriptions() {
        let {
            overlaySupported: e,
            canGoLive: t,
            enableClips: n,
            enableScreenshotKeybind: i
        } = this.props, s = {
            [j.hCu.UNASSIGNED]: y.intl.string(y.t.rvlNLv),
            [j.hCu.PUSH_TO_MUTE]: y.intl.string(y.t.xtESim),
            [j.hCu.PUSH_TO_TALK]: y.intl.string(y.t.wTcBSy),
            [j.hCu.PUSH_TO_TALK_PRIORITY]: y.intl.string(y.t.FhHvWH),
            [j.hCu.TOGGLE_MUTE]: y.intl.string(y.t.X2fbUm),
            [j.hCu.TOGGLE_DEAFEN]: y.intl.string(y.t.MjREZV),
            [j.hCu.TOGGLE_VOICE_MODE]: y.intl.string(y.t.snm5YW),
            [j.hCu.TOGGLE_STREAMER_MODE]: y.intl.string(y.t.YszLLx),
            [j.hCu.VAD_PRIORITY]: y.intl.string(y.t.rSe8IZ)
        };
        return (0, p.L)() && (s[j.hCu.TOGGLE_CAMERA] = y.intl.string(y.t.v1JBtL)), e && (s[j.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = y.intl.string(y.t.IoP5vc)), t && (0, N.isWindows)() && (s[j.hCu.TOGGLE_GO_LIVE_STREAMING] = y.intl.string(y.t.s4C238)), (0, N.isDesktop)() && (s[j.hCu.NAVIGATE_BACK] = y.intl.string(y.t.nKDlEt), s[j.hCu.NAVIGATE_FORWARD] = y.intl.string(y.t.DK0FFk), s[j.hCu.SOUNDBOARD] = (0, N.isWindows)() ? y.intl.string(y.t["5wJefL"]) : y.intl.string(y.t.gzjsSP), s[j.hCu.SOUNDBOARD_HOLD] = (0, N.isWindows)() ? y.intl.string(y.t.RRkZc9) : y.intl.string(y.t.laNlTl), n && (s[j.hCu.SAVE_CLIP] = y.intl.string(y.t.z3Wbam), i && (s[j.hCu.SAVE_SCREENSHOT] = y.intl.string(y.t.m0zd57)))), s
    }
    handleAddKeybind = () => {
        u.A.addKeybind()
    };renderKeybinds(e) {
        return e.map((t, n) => (0, i.jsxs)(s.Fragment, {
            children: [(0, i.jsx)(L, {
                keybind: t,
                keybindDescriptions: this.keybindDescriptions,
                keybindActionTypes: this.keybindActionTypes
            }, t.id), n !== e.length - 1 ? (0, i.jsx)(c.cGx, {}) : null]
        }, t.id))
    }
    renderKeybindWarning() {
        return (0, i.jsxs)("div", {
            className: R.$e,
            children: [(0, i.jsx)(c.mir, {
                size: "xs",
                color: o.A.colors.ICON_SUBTLE
            }), (0, i.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: y.intl.string(y.t.NoKjWP)
            })]
        })
    }
    render() {
        let {
            enableClips: e,
            enableScreenshotKeybind: t
        } = this.props, n = r()(this.props.keybinds).reject(e => e.managed && ![j.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, j.hCu.SAVE_CLIP, j.hCu.SAVE_SCREENSHOT].includes(e.action)).reject(t => !e && (t.action === j.hCu.SAVE_CLIP || t.action === j.hCu.SAVE_SCREENSHOT)).reject(e => !t && e.action === j.hCu.SAVE_SCREENSHOT).reject(e => !this.props.allowSoundboard && (e.action === j.hCu.SOUNDBOARD || e.action === j.hCu.SOUNDBOARD_HOLD)).sortBy(e => e.id).sortBy(e => !0 === e.managed ? -1 : 0).value(), l = r()((0, g.Bx)()).filter(e => e.description !== y.intl.string(y.t.HnNtEI)).groupBy(e => e.group).value();
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(v.A, {
                title: y.intl.string(y.t.T9DA2K),
                className: P.IE,
                children: N.isPlatformEmbedded ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: R.OQ,
                        children: [this.renderKeybindWarning(), (0, i.jsx)("div", {
                            className: R.c9,
                            children: (0, i.jsx)(c.Button, {
                                size: "md",
                                onClick: this.handleAddKeybind,
                                text: y.intl.string(y.t.zk6Xbs),
                                variant: "primary"
                            })
                        })]
                    }), (0, i.jsx)(E.A, {
                        className: R.Qo,
                        sourcePage: "keybinds"
                    }), n.length > 0 && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(c.cGx, {}), this.renderKeybinds(n)]
                    }), (0, i.jsx)(c.cGx, {})]
                }) : (0, i.jsx)(c.po8, {
                    messageType: c.YCn.INFO,
                    className: R.Ly,
                    children: y.intl.format(y.t.mPi3F3, {
                        downloadLink: j.X7G.DOWNLOAD
                    })
                })
            }), (0, i.jsxs)(c.BJc, {
                gap: 48,
                children: [(0, i.jsx)(c.nVY, {
                    label: y.intl.string(y.t.Lz5KHI),
                    children: (0, i.jsx)("div", {
                        className: R.jh,
                        children: (0, i.jsxs)("div", {
                            className: R.yZ,
                            children: [(0, i.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: y.intl.string(y.t.sMWLBj)
                            }), (0, i.jsx)("div", {
                                className: R.DM,
                                children: (0, i.jsx)(c.e7I, {
                                    shortcut: m.z.binds["0"],
                                    className: R.LE
                                })
                            })]
                        })
                    })
                }), (0, i.jsx)(D, {
                    children: e => (0, i.jsx)(i.Fragment, {
                        children: e.map((e, t) => {
                            let n = (0, g.Gm)(e),
                                r = (0, g.zF)(e),
                                a = l[e];
                            return (0, i.jsx)(c.nVY, {
                                label: n,
                                description: r,
                                children: (0, i.jsx)("div", {
                                    className: R.jh,
                                    children: a.map((e, t) => (0, i.jsxs)(s.Fragment, {
                                        children: [0 !== t && (0, i.jsx)(c.cGx, {}), (0, i.jsxs)("div", {
                                            className: R.yZ,
                                            children: [(0, i.jsx)(c.Text, {
                                                variant: "text-md/normal",
                                                children: e.description
                                            }), (0, i.jsx)("div", {
                                                className: R.DM,
                                                children: e.binds.map(e => (0, i.jsx)(c.e7I, {
                                                    shortcut: e,
                                                    className: R.LE
                                                }, e))
                                            })]
                                        })]
                                    }, e.description))
                                })
                            }, t)
                        })
                    })
                })]
            })]
        })
    }
}

function G() {
    s.useEffect(() => (u.A.enableAll(!1), () => {
        u.A.enableAll(!0)
    }), []);
    let e = (0, a.bG)([S.Ay], () => S.Ay.getState()),
        t = (0, a.bG)([C.Ay], () => (0, x.A)(C.Ay)),
        n = (0, a.bG)([T.A], () => T.A.isSupported),
        l = (0, h.sw)(),
        r = (0, h.BW)();
    return (0, i.jsx)(M, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, N.isWindows)(),
        enableClips: l,
        enableScreenshotKeybind: r
    })
}