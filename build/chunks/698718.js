/** chunk id: 698718 params = (module,exports,require) **/
n.d(t, {
    A: () => e3
}), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(284009),
    o = n.n(r),
    c = n(607399),
    d = n(478437),
    u = n(665260),
    h = n(311907),
    m = n(397927),
    A = n(465532),
    g = n(843472),
    p = n(414798),
    _ = n(608299),
    f = n(147192),
    E = n(820284),
    C = n(955572),
    x = n(775602),
    S = n(58149),
    I = n(211401),
    T = n(989837),
    v = n(500049),
    N = n(721768),
    y = n(258363),
    b = n(842209),
    j = n(861382),
    R = n(392054),
    M = n(168186),
    L = n(545152),
    O = n(972995),
    D = n(355622),
    P = n(408018),
    U = n(223938),
    k = n(811501),
    w = n(20737),
    G = n(133343),
    F = n(35277),
    H = n(595914),
    B = n(151271),
    V = n(81400),
    W = n(870006),
    K = n(837024),
    z = n(316031),
    Y = n(870136),
    J = n(834651),
    q = n(265869),
    $ = n(129185),
    Z = n(513609),
    X = n(301169),
    Q = n(751258),
    ee = n(451909),
    et = n(475481),
    en = n(195880),
    ei = n(926262),
    el = n(371648),
    ea = n(928830),
    es = n(3137),
    er = n(559908),
    eo = n(329449),
    ec = n(582223),
    ed = n(720480),
    eu = n(118517),
    eh = n(853145),
    em = n(157432),
    eA = n(151282),
    eg = n(654783),
    ep = n(970244),
    e_ = n(631576),
    ef = n(252263),
    eE = n(67259),
    eC = n(351488),
    ex = n(728321),
    eS = n(961350),
    eI = n(761640),
    eT = n(31717),
    ev = n(580745),
    eN = n(696451),
    ey = n(320501),
    eb = n(576705),
    ej = n(994500),
    eR = n(309010),
    eM = n(522602),
    eL = n(287809),
    eO = n(954571),
    eD = n(147036),
    eP = n(234320),
    eU = n(203982),
    ek = n(661191),
    ew = n(460350),
    eG = n(518960),
    eF = n(382287),
    eH = n(137577),
    eB = n(47167),
    eV = n(480870),
    eW = n(390756),
    eK = n(387462),
    ez = n(582968),
    eY = n(667285),
    eJ = n(920437),
    eq = n(652215),
    e$ = n(381941),
    eZ = n(985018),
    eX = n(358943);

function eQ(e) {
    e.preventDefault()
}
let e0 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;

function e1(e) {
    let {
        isSidebar: t,
        ...n
    } = e;
    return t ? (0, i.jsx)("section", {
        ...n,
        role: "complementary"
    }) : (0, i.jsx)("main", {
        ...n
    })
}
let e2 = l.forwardRef((e, t) => (0, i.jsx)(e9, {
    ...e,
    ref: t
}));
e2.displayName = "ChannelTextAreaForm";
class e9 extends l.PureComponent {
    focusEditor() {
        this.editorRef?.focus()
    }
    isFirstChange = !0;
    editorRef = null;
    state = {
        ...(0, P.ur)(eT.A.getDraft(this.props.channel.id, eT.C.ChannelMessage)),
        contentWarningProps: null
    };
    componentDidMount() {
        eT.A.addChangeListener(this.draftDidChange)
    }
    componentWillUnmount() {
        eT.A.removeChangeListener(this.draftDidChange)
    }
    componentDidUpdate(e, t) {
        let {
            channel: n
        } = this.props, {
            textValue: i
        } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eT.A.getDraft(n.id, eT.C.ChannelMessage);
            e !== i && this.setState((0, P.ur)(e))
        }
        t.textValue.length < eq.uvi && i.length >= eq.uvi && eO.default.track(eq.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {})
    }
    draftDidChange = (() => {
        var e = this;
        return function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                {
                    textValue: n
                } = e.state,
                i = eT.A.getDraft(t.channel.id, eT.C.ChannelMessage);
            n !== i && ("" === i || "" === n) && e.setState((0, P.ur)(i), () => {
                if (n !== i) {
                    let {
                        onFocus: t
                    } = e.props;
                    t?.()
                }
            })
        }
    })();
    handleKeyDown = e => {
        let {
            keyboardModeEnabled: t,
            onKeyDown: n,
            channel: i
        } = this.props, l = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey, a = 0 !== this.state.textValue.length;
        switch (e.which) {
            case eq.Ks6.DELETE:
            case eq.Ks6.BACKSPACE:
                return void this.handleIncrementCombo("", 1);
            case eq.Ks6.ARROW_UP:
                if (l || a) return;
                if (e.preventDefault(), t) eM.A.getUploadCount(i.id, eT.C.ChannelMessage) > 0 ? eU._.dispatchToLastSubscribed(eq.jej.FOCUS_ATTACHMENT_AREA) : eU._.dispatchToLastSubscribed(eq.jej.FOCUS_MESSAGES, {
                    atEnd: !0
                });
                else {
                    let {
                        channel: e
                    } = this.props, t = ey.A.getLastChatCommandMessage(e.id), n = ey.A.getLastEditableMessage(e.id);
                    null != t && null != n ? ek.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n)
                }
                return;
            case eq.Ks6.ESCAPE:
                if (l || e.target !== e.currentTarget) return;
                if (e.preventDefault(), t) return void(0, C.Bm)();
                if (eM.A.getUploadCount(i.id, eT.C.ChannelMessage) > 0) return void _.A.clearAll(i.id, eT.C.ChannelMessage)
        }
        n?.(e, a)
    };
    handleEditLastMessage(e) {
        let {
            channel: t
        } = this.props;
        g.A.startEditMessageRecord(t.id, e), S.Ay.trackWithMetadata(eq.HAw.MESSAGE_EDIT_UP_ARROW)
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let {
            channel: t
        } = this.props, {
            commandKey: n,
            interactionOptions: i
        } = (0, M.Ez)(e.interactionData), {
            command: l,
            application: a
        } = b.EW({
            channel: t,
            type: "channel"
        }, n);
        if (null != l) {
            let e = null != a ? {
                type: R.Hf.APPLICATION,
                id: a.id,
                icon: a.icon,
                name: a?.bot?.username ?? a.name,
                application: a
            } : null;
            N.Gf({
                channelId: t.id,
                command: l,
                section: e,
                location: R.Oh.RECALL,
                initialValues: (0, y.getInitialValuesFromInteractionOptions)(l, i ?? []),
                commandOrigin: R.iw.CHAT
            })
        }
    }
    handleIncrementCombo = (e, t) => {
        if (!this.props.poggermodeEnabled) return;
        let n = this.props.channel.id,
            i = eS.default.getId(),
            l = er.Ay.getUserCombo(i, n),
            a = (l?.value ?? 0) + 1;
        (0, ea.oG)({
            channelId: n,
            userId: i,
            value: null != e ? e.length : a,
            multiplier: t
        })
    };
    handleTextareaChange = (e, t, n) => {
        let {
            keyboardModeEnabled: i,
            channel: {
                id: l
            }
        } = this.props;
        A.A.changeDraft(l, t, eT.C.ChannelMessage);
        let a = "" !== t && n !== this.state.richValue,
            s = a && !e0.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
        this.isFirstChange = !1, s && this.state.textValue.length < t.length && this.handleIncrementCombo(), s ? p.A.startTyping(l) : "" === t && p.A.stopTyping(l), a && i && (0, C.Bm)(), this.setState({
            textValue: t,
            richValue: n
        })
    };
    handleSendMessage = async e => {
        let {
            value: t,
            uploads: n,
            stickers: i,
            command: l,
            commandOptionValues: a,
            isGif: s,
            gifMetadata: r,
            components: o,
            announcementSendOptions: c
        } = e;
        if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length)) return Promise.resolve({
            shouldClear: !1,
            shouldRefocus: !0
        });
        let {
            guild: d,
            channel: h,
            pendingReply: m,
            chatInputType: p,
            threadsAlsoSendToChannel: f
        } = this.props, E = !1;
        if (null != l) {
            if (l.inputType === R.y$.BUILT_IN_INTEGRATION) return eU._.dispatch(eq.jej.SHAKE_APP, {
                duration: 200,
                intensity: 2
            }), Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0
            });
            let e = j.A.getCommandOrigin(h.id);
            if (null == e || e === R.iw.CHAT) {
                let {
                    isAuthorized: e
                } = await (0, O.q)({
                    applicationId: l.applicationId,
                    channel: h,
                    commandIntegrationTypes: l.integration_types
                });
                if (!e) return Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            } else if (e === R.iw.APPLICATION_LAUNCHER || e === R.iw.IMAGE_RECS_MENU || e === R.iw.IMAGE_RECS_SUBMENU) {
                let {
                    location: t,
                    sectionName: n
                } = (0, eW.bV)(l) ?? {}, i = e === R.iw.APPLICATION_LAUNCHER ? T.A.lastShownEntrypoint() : v.s4.TEXT, {
                    isAuthorized: a
                } = await (0, O.q)({
                    applicationId: l.applicationId,
                    channel: h,
                    commandIntegrationTypes: l.integration_types,
                    appLauncherContext: {
                        location: t,
                        sectionName: n,
                        entrypoint: i
                    }
                });
                if (!a) return Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                });
                (0, eW.My)(l)
            }
            let n = await (0, L.A)({
                command: l,
                optionValues: a ?? {},
                context: {
                    guild: d,
                    channel: h
                }
            });
            if (l.inputType !== R.y$.BUILT_IN_TEXT) return Promise.resolve({
                shouldClear: !0,
                shouldRefocus: !0
            });
            null != n && (t = null != n.content && "" !== n.content ? n.content : t, E = !0 === n.tts)
        }
        return (0, ew.i)({
            openWarningPopout: e => this.setState({
                contentWarningProps: e
            }),
            type: this.props.chatInputType,
            content: t,
            stickers: i,
            uploads: n,
            channel: h
        }).then(async e => {
            let {
                valid: a,
                failureReason: C
            } = e;
            if (!a)
                if (C === eq.X8x.SLOWMODE_COOLDOWN) return eU._.dispatch(eq.jej.SHAKE_APP, {
                    duration: 200,
                    intensity: 2
                }), eU._.dispatch(eq.jej.EMPHASIZE_SLOWMODE_COOLDOWN), {
                    shouldClear: !1,
                    shouldRefocus: !0
                };
                else return {
                    shouldClear: !1,
                    shouldRefocus: !1
                };
            let x = (0, Q.S)(t, {
                channel: h,
                isEdit: !1
            });
            null != x && (null != x.content && (t = x.content), null != x.tts && (E = x.tts));
            let S = ee.Ay.parse(h, t);
            S.tts = S.tts || E, null != o && (S.content = "", S.components = o);
            let I = {
                ...g.A.getSendMessageOptions({
                    content: t,
                    channelId: h.id,
                    uploads: n,
                    stickers: i,
                    command: l,
                    isGif: s,
                    pendingReply: m,
                    alsoForwardToChannelId: f ? h.parent_id ?? void 0 : void 0,
                    scheduledTimestamp: this.props.pendingScheduledMessage?.scheduledTimestamp
                }),
                location: e$.Hx.CHAT_INPUT
            };
            if (null != c && (I.announcementSendOptions = c), null != r && (I.gifMetadata = r), null != o && (I.flags = (0, u.UI)(I.flags ?? 0, eq.pr7.IS_COMPONENTS_V2)), s) return g.A.sendMessage(h.id, S, void 0, I).then(() => {
                f && eC._(h.parent_id ?? void 0)
            }), (0, eu.Jx)(h.id), ef.B({
                channelId: h.id,
                enabled: !1
            }), {
                shouldClear: !1,
                shouldRefocus: !0
            };
            if (null != n && n.length > 0) {
                let e = (0, eF.LJ)(n);
                if ((0, eF.fJ)(e, d?.id)) return (0, eG.V)(h, e), {
                    shouldClear: !1,
                    shouldRefocus: !1
                };
                I.eagerDispatch = !1, I.attachmentsToUpload = n, I.onAttachmentUploadError = (e, i, l) => {
                    (0, X.k)({
                        file: e,
                        guildId: h.getGuildId(),
                        analyticsLocations: [],
                        code: i,
                        reason: l
                    }) && ("" !== t && "" === eT.A.getDraft(h.id, eT.C.ChannelMessage) && A.A.saveDraft(h.id, t, eT.C.ChannelMessage), 0 === eM.A.getUploadCount(h.id, eT.C.ChannelMessage) && _.A.setUploads({
                        channelId: h.id,
                        uploads: n,
                        draftType: eT.C.ChannelMessage
                    }))
                }, _.A.clearAll(h.id, eT.C.ChannelMessage)
            }
            if (null != I.scheduledTimestamp) try {
                await (0, eA.pr)({
                    channelId: h.id,
                    scheduledTimestamp: I.scheduledTimestamp,
                    messageSendData: {
                        channelId: h.id,
                        content: t,
                        nonce: (0, en.m)(),
                        tts: E,
                        message_reference: I.messageReference,
                        allowed_mentions: I.allowedMentions,
                        flags: I.flags
                    },
                    attachmentsToUpload: n
                }), (0, ep.c_)(I.scheduledTimestamp)
            } catch (e) {
                return (0, ep.kM)(e.message), {
                    shouldClear: !1,
                    shouldRefocus: !1
                }
            } else g.A.sendMessage(h.id, S, void 0, I).then(() => {
                f && eC._(h.parent_id ?? void 0)
            });
            return this.setState((0, P.N3)()), (0, eu.Jx)(h.id), (0, e_.x5)(h.id, p.drafts.type), ef.B({
                channelId: h.id,
                enabled: !1
            }), {
                shouldClear: !0,
                shouldRefocus: !0
            }
        })
    };
    handleSetValue = e => {
        let t = this.editorRef?.getSlateEditor();
        null != t && (F.b.select(t, []), t.insertText(e), this.editorRef?.focus())
    };
    renderAttachButton = (e, t) => (0, i.jsx)(w.A, {
        className: t,
        channel: this.props.channel,
        draftType: eT.C.ChannelMessage,
        editorTextContent: this.state.textValue,
        setValue: this.handleSetValue,
        canOnlyUseTextCommands: e
    });
    renderApplicationCommandIcon = (e, t, n) => (0, i.jsx)(k.A, {
        className: n,
        command: e,
        section: t,
        channel: this.props.channel
    });
    render() {
        let {
            channel: e,
            focused: t,
            onBlur: n,
            onFocus: l,
            onResize: a,
            highlighted: s,
            pendingReply: r,
            chatInputType: c,
            placeholder: d,
            accessibilityLabel: u,
            shakeIntensity: h,
            poggermodeEnabled: A,
            pendingScheduledMessage: g,
            announcementComposerEnabled: p
        } = this.props, {
            contentWarningProps: _
        } = this.state, f = e.type === eq.rbe.GUILD_ANNOUNCEMENT && p ? (0, i.jsx)(U.A, {
            ref: this.props.refInstance,
            textValue: this.state.textValue,
            richValue: this.state.richValue,
            focused: t,
            className: eX.gM,
            channel: e,
            placeholder: d,
            accessibilityLabel: u,
            pendingReply: r,
            type: D.oU.CREATE_ANNOUNCEMENT_POST,
            onChange: this.handleTextareaChange,
            onSubmit: this.handleSendMessage,
            onResize: a,
            onFocus: l,
            onBlur: n,
            onKeyDown: this.handleKeyDown,
            renderAttachButton: this.renderAttachButton,
            renderApplicationCommandIcon: this.renderApplicationCommandIcon,
            promptToUpload: eG.R,
            highlighted: s,
            setEditorRef: e => this.editorRef = e
        }) : (0, i.jsx)(G.Ay, {
            ref: this.props.refInstance,
            textValue: this.state.textValue,
            richValue: this.state.richValue,
            focused: t,
            className: eX.gM,
            channel: e,
            placeholder: d,
            accessibilityLabel: u,
            pendingReply: r,
            type: c,
            onChange: this.handleTextareaChange,
            onSubmit: this.handleSendMessage,
            onResize: a,
            onFocus: l,
            onBlur: n,
            onKeyDown: this.handleKeyDown,
            renderAttachButton: this.renderAttachButton,
            renderApplicationCommandIcon: this.renderApplicationCommandIcon,
            promptToUpload: eG.R,
            highlighted: s,
            setEditorRef: e => this.editorRef = e,
            pendingScheduledMessage: g
        });
        return (0, i.jsx)(m.YNO, {
            targetElementRef: this.props.refInstance,
            position: "top",
            onRequestClose: () => {
                _?.onCancel?.(), this.setState({
                    contentWarningProps: null
                })
            },
            shouldShow: null != _,
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return o()(null != _, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"), (0, i.jsx)(ei.A, {
                    onClose: t,
                    ..._
                })
            },
            children: () => A ? (0, i.jsx)(m.bfh, {
                isShaking: h > 0,
                intensity: h,
                className: eX.Xn,
                children: f
            }) : f
        })
    }
}
class e7 extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let {
            channel: n
        } = e, {
            currentChannelId: i
        } = t;
        return n.id !== i ? {
            textAreaFocused: null != n && !c.Fr && eb.A.can(eq.xBc.SEND_MESSAGES, n),
            currentChannelId: n.id
        } : null
    }
    containerDomRef = l.createRef();
    refToChannelTextAreaFormComponent = l.createRef();
    inputFormRef = l.createRef();
    state = {
        textAreaFocused: !1,
        textAreaHighlighted: !1,
        currentChannelId: this.props.channel.id
    };
    dispatchGroupRef = l.createRef();
    componentDidMount() {
        eU._.subscribe(eq.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus())
    }
    componentWillUnmount() {
        eU._.unsubscribe(eq.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
    }
    handleRequestFocus = e => {
        e.channelId === this.props.channel.id && (this.state.textAreaFocused ? this.refToChannelTextAreaFormComponent.current?.focusEditor() : this.setState({
            textAreaFocused: !0
        }))
    };
    handleInputFocus = e => {
        this.dispatchGroupRef.current?.bumpDispatchPriority(), e?.highlight != null ? this.setState({
            textAreaFocused: !0,
            textAreaHighlighted: e?.highlight
        }) : this.setState({
            textAreaFocused: !0
        })
    };
    handleInputBlur = () => {
        (document.hasFocus() || this.props.hasModalOpen) && this.setState({
            textAreaFocused: !1,
            textAreaHighlighted: !1
        })
    };
    handleInputKeyDown = (e, t) => {
        this.state.textAreaHighlighted && this.setState({
            textAreaHighlighted: !1
        }), t || this._handleMoveToPane(e)
    };
    handleKeyDown = e => {
        this.inputFormRef.current?.contains(e.target) || this._handleMoveToPane(e)
    };
    _handleMoveToPane = e => {
        let {
            keyboardModeEnabled: t,
            chatInputType: n,
            channel: i
        } = this.props;
        if (t) switch (e.which) {
            case eq.Ks6.ARROW_LEFT:
                n === D.oU.SIDEBAR && eU._.dispatch(eq.jej.FOCUS_CHANNEL_TEXT_AREA, {
                    channelId: eR.A.getChannelId()
                });
                return;
            case eq.Ks6.ARROW_RIGHT:
                n === D.oU.NORMAL && eU._.dispatch(eq.jej.FOCUS_CHANNEL_TEXT_AREA, {
                    channelId: eI.Ay.getCurrentSidebarChannelId(i.id)
                })
        }
    };
    handleOpenExpressionPicker = e => {
        let {
            activeView: t
        } = e;
        (0, B.bf)(t, this.props.chatInputType, this.props.channel.id)
    };
    handleOpenAppLauncher = e => {
        let {
            applicationId: t
        } = e;
        return I.R(v.s4.TEXT, this.props.chatInputType, {
            applicationId: t
        }, this.props.channel.id)
    };
    handleChatInteract = () => {
        this.dispatchGroupRef.current?.bumpDispatchPriority()
    };
    renderMessageBanner = e => {
        let {
            channel: t,
            showQuarantinedUserBanner: n,
            guild: l,
            communicationDisabledUntil: a,
            showAutomodUserProfileChatBlocker: s
        } = e;
        return t.type === eq.rbe.DM && n ? (0, i.jsx)(ed.A, {}) : t.isModeratorReportChannel() && t.isArchivedThread() ? (0, i.jsx)(em.A, {
            channelId: t.id
        }) : null != a && (0, z.n)(a) && null != l && !eb.A.can(eq.xBc.ADMINISTRATOR, l) ? (0, i.jsx)(J.j, {
            guild: l,
            disabledUntil: a
        }) : s ? (0, i.jsx)(W.u, {
            guild: l
        }) : null
    };
    render() {
        let e, t, {
                channel: n,
                guild: l,
                keyboardModeEnabled: a,
                hasModalOpen: r,
                pendingReply: o,
                threadsAlsoSendToChannel: c,
                chatInputType: u,
                placeholder: h,
                accessibilityLabel: A,
                showQuarantinedUserBanner: g,
                filterAfterTimestamp: p,
                communicationDisabledUntil: _,
                shakeIntensity: C,
                poggermodeEnabled: x,
                isSelectedResourceChannel: S,
                showAutomodUserProfileChatBlocker: I,
                pendingScheduledMessage: T,
                messagesTypingGradient: v,
                showLinkedLobbyApplicationLoadingIndicator: N,
                announcementComposerEnabled: y
            } = this.props,
            {
                textAreaFocused: b,
                textAreaHighlighted: j
            } = this.state,
            R = u === D.oU.SIDEBAR;
        e = R && n.type === eq.rbe.GUILD_VOICE ? eZ.t.pnnyFZ : R && n.type === eq.rbe.GUILD_STAGE_VOICE ? eZ.t.YInSkq : d.k.THREADS.has(n.type) ? eZ.t["OkzL+Q"] : eZ.t.UbNmGc;
        let M = (0, i.jsx)("div", {
                className: eX.li,
                children: (0, i.jsx)(ez.A, {})
            }),
            L = (0, i.jsx)("div", {
                className: eX.li,
                children: (0, i.jsx)(ex.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, i.jsx)(e2, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: b,
                        highlighted: j,
                        channel: n,
                        guild: l,
                        keyboardModeEnabled: a,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: r,
                        pendingReply: o,
                        threadsAlsoSendToChannel: c,
                        chatInputType: u,
                        placeholder: h,
                        accessibilityLabel: A,
                        shakeIntensity: C,
                        poggermodeEnabled: x,
                        pendingScheduledMessage: T,
                        announcementComposerEnabled: y
                    })
                })
            }),
            O = N ? M : L,
            P = (0, eB.m1)(n, eL.default, ej.A);
        if (null != l && (0, et.GP)(l, "ChannelChat")) {
            let e = l.officialMessageColor ?? e$.aj;
            t = (0, e$.L)(e)
        }
        return (0, i.jsx)(E.A, {
            page: (0, eD.DJ)(this.props.channel),
            children: (0, i.jsx)(Z.di, {
                children: (0, i.jsx)($.Xq, {
                    children: (0, i.jsxs)(eP.Ah, {
                        ref: this.dispatchGroupRef,
                        children: [(0, i.jsx)(eP.EG, {
                            event: eq.jej.TEXTAREA_FOCUS,
                            handler: this.handleInputFocus
                        }), (0, i.jsx)(eP.EG, {
                            event: eq.jej.TEXTAREA_BLUR,
                            handler: this.handleInputBlur
                        }), (0, i.jsx)(eP.EG, {
                            event: eq.jej.OPEN_EXPRESSION_PICKER,
                            handler: this.handleOpenExpressionPicker
                        }), (0, i.jsx)(eP.EG, {
                            event: eq.jej.OPEN_APP_LAUNCHER,
                            handler: this.handleOpenAppLauncher
                        }), (0, i.jsxs)(e1, {
                            isSidebar: R,
                            className: eX.q2,
                            "aria-label": eZ.intl.formatToPlainString(e, {
                                channelName: P
                            }),
                            onMouseDown: this.handleChatInteract,
                            onKeyDown: this.handleKeyDown,
                            onFocus: this.handleChatInteract,
                            style: t,
                            children: [(0, i.jsx)(eK.A, {
                                channel: n,
                                guild: l,
                                narrow: R
                            }), (0, i.jsxs)(m.Fmo, {
                                component: (0, i.jsx)(m.AC4, {
                                    children: (0, i.jsx)(m.H, {
                                        children: eZ.intl.format(eZ.t.eTzKkx, {
                                            channelName: P
                                        })
                                    })
                                }),
                                children: [(0, i.jsx)(el.A, {
                                    channel: n,
                                    forceCozy: S,
                                    filterAfterTimestamp: p,
                                    showingQuarantineBanner: g,
                                    typingGradient: v,
                                    hideSummaries: u === D.oU.OVERLAY
                                }), S ? null : this.renderMessageBanner({
                                    channel: n,
                                    showQuarantinedUserBanner: g,
                                    guild: l,
                                    communicationDisabledUntil: _,
                                    showAutomodUserProfileChatBlocker: I
                                }) ?? (0, i.jsxs)("form", {
                                    ref: this.inputFormRef,
                                    onSubmit: eQ,
                                    className: s()(eX.Zd, {
                                        [eX.Mf]: !N
                                    }),
                                    children: [x && (0, i.jsx)(eo.A, {
                                        channelId: n.id
                                    }), n.isPrivate() ? (0, i.jsx)(eY.A, {
                                        channel: n,
                                        children: O
                                    }) : (0, i.jsx)(eJ.A, {
                                        channel: n,
                                        children: O
                                    }), (0, i.jsx)(f.Ay, {
                                        channel: n,
                                        isInTextChannel: !0
                                    })]
                                }), (0, i.jsx)(Z.lr, {})]
                            })]
                        })]
                    })
                })
            })
        }, `messages-${n.id}`)
    }
}
let e3 = l.memo(function(e) {
    let {
        channel: t,
        guild: n,
        chatInputType: l,
        filterAfterTimestamp: a
    } = e, {
        placeholder: s,
        accessibilityLabel: r
    } = (0, eV.A)({
        channel: t
    }), o = (0, ed.L)(eL.default.getCurrentUser(), t), [c] = (0, Y.c)(n?.id), d = (0, V.uZ)(n?.id), u = (0, h.bG)([eL.default], () => eL.default.getCurrentUser()), A = (0, h.bG)([eN.Ay], () => null != u && (eN.Ay.getMember(n?.id ?? eq.dJq, u?.id)?.isPending ?? !1)), g = (0, h.bG)([es.A], () => es.A.isEnabled()), p = (0, ec.A)(t.id), _ = (0, q.A)(t.id), E = (0, eg.D)(t.id), C = (0, h.bG)([eE.A], () => eE.A.getAlsoSendToChannel(t.id)), S = (0, h.bG)([er.Ay, eS.default], () => er.Ay.getUserCombo(eS.default.getId(), t.id)), I = (0, f.rj)(t), T = (0, f.aW)(t), v = I.length > 0 || t.rateLimitPerUser > 0 || null != S || null != T, {
        showLinkedLobbyApplicationLoadingIndicator: N
    } = (0, eH.A)(t.linkedLobby), y = (0, H.A)("ChannelChat");
    return (0, K.A)(t), (0, i.jsx)(e7, {
        channel: t,
        isEditing: null != (0, h.bG)([ev.A], () => ev.A.getEditingMessageId(t.id)),
        hasModalOpen: (0, m.red)(m.DXt),
        guild: n,
        keyboardModeEnabled: (0, h.bG)([x.A], () => x.A.keyboardModeEnabled),
        pendingReply: (0, h.bG)([eh.A], () => eh.A.getPendingReply(t.id)),
        threadsAlsoSendToChannel: C,
        chatInputType: l,
        placeholder: s,
        accessibilityLabel: r,
        filterAfterTimestamp: a,
        showQuarantinedUserBanner: o,
        communicationDisabledUntil: c,
        shakeIntensity: p,
        poggermodeEnabled: g,
        isSelectedResourceChannel: _,
        showAutomodUserProfileChatBlocker: d && !A,
        pendingScheduledMessage: E,
        messagesTypingGradient: v,
        showLinkedLobbyApplicationLoadingIndicator: N,
        announcementComposerEnabled: y
    })
})