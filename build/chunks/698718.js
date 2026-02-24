/** chunk id: 698718, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => e1
}), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
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
    f = n(608299),
    _ = n(147192),
    E = n(820284),
    x = n(955572),
    C = n(775602),
    S = n(58149),
    I = n(211401),
    T = n(989837),
    N = n(500049),
    y = n(721768),
    v = n(258363),
    b = n(842209),
    j = n(861382),
    R = n(392054),
    M = n(168186),
    D = n(545152),
    O = n(972995),
    L = n(355622),
    P = n(408018),
    w = n(223938),
    k = n(811501),
    U = n(20737),
    G = n(133343),
    F = n(35277),
    H = n(595914),
    B = n(151271),
    V = n(81400),
    K = n(870006),
    W = n(316031),
    z = n(870136),
    Y = n(834651),
    q = n(265869),
    J = n(129185),
    $ = n(513609),
    Z = n(301169),
    X = n(751258),
    Q = n(451909),
    ee = n(195880),
    et = n(926262),
    en = n(371648),
    ei = n(928830),
    el = n(3137),
    es = n(559908),
    ea = n(329449),
    er = n(582223),
    eo = n(720480),
    ec = n(118517),
    ed = n(853145),
    eu = n(157432),
    eh = n(151282),
    em = n(654783),
    eA = n(970244),
    eg = n(631576),
    ep = n(252263),
    ef = n(67259),
    e_ = n(351488),
    eE = n(728321),
    ex = n(961350),
    eC = n(761640),
    eS = n(31717),
    eI = n(580745),
    eT = n(696451),
    eN = n(320501),
    ey = n(576705),
    ev = n(309010),
    eb = n(522602),
    ej = n(287809),
    eR = n(954571),
    eM = n(147036),
    eD = n(234320),
    eO = n(203982),
    eL = n(661191),
    eP = n(460350),
    ew = n(518960),
    ek = n(382287),
    eU = n(137577),
    eG = n(480870),
    eF = n(390756),
    eH = n(387462),
    eB = n(582968),
    eV = n(667285),
    eK = n(920437),
    eW = n(652215),
    ez = n(381941),
    eY = n(985018),
    eq = n(638990);

function eJ(e) {
    e.preventDefault()
}
let e$ = /^\+(?!\w+):?(?!:)(\w+)?:?$/;

function eZ(e) {
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
let eX = l.forwardRef((e, t) => (0, i.jsx)(eQ, {
    ...e,
    ref: t
}));
eX.displayName = "ChannelTextAreaForm";
class eQ extends l.PureComponent {
    focusEditor() {
        this.editorRef?.focus()
    }
    isFirstChange = !0;
    editorRef = null;
    state = {
        ...(0, P.ur)(eS.A.getDraft(this.props.channel.id, eS.C.ChannelMessage)),
        contentWarningProps: null
    };
    componentDidMount() {
        eS.A.addChangeListener(this.draftDidChange)
    }
    componentWillUnmount() {
        eS.A.removeChangeListener(this.draftDidChange)
    }
    componentDidUpdate(e, t) {
        let {
            channel: n
        } = this.props, {
            textValue: i
        } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eS.A.getDraft(n.id, eS.C.ChannelMessage);
            e !== i && this.setState((0, P.ur)(e))
        }
        t.textValue.length < eW.uvi && i.length >= eW.uvi && eR.default.track(eW.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {})
    }
    draftDidChange = (() => {
        var e = this;
        return function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                {
                    textValue: n
                } = e.state,
                i = eS.A.getDraft(t.channel.id, eS.C.ChannelMessage);
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
        } = this.props, l = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey, s = 0 !== this.state.textValue.length;
        switch (e.which) {
            case eW.Ks6.DELETE:
            case eW.Ks6.BACKSPACE:
                return void this.handleIncrementCombo("", 1);
            case eW.Ks6.ARROW_UP:
                if (l || s) return;
                if (e.preventDefault(), t) eb.A.getUploadCount(i.id, eS.C.ChannelMessage) > 0 ? eO._.dispatchToLastSubscribed(eW.jej.FOCUS_ATTACHMENT_AREA) : eO._.dispatchToLastSubscribed(eW.jej.FOCUS_MESSAGES, {
                    atEnd: !0
                });
                else {
                    let {
                        channel: e
                    } = this.props, t = eN.A.getLastChatCommandMessage(e.id), n = eN.A.getLastEditableMessage(e.id);
                    null != t && null != n ? eL.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n)
                }
                return;
            case eW.Ks6.ESCAPE:
                if (l || e.target !== e.currentTarget) return;
                if (e.preventDefault(), t) return void(0, x.Bm)();
                if (eb.A.getUploadCount(i.id, eS.C.ChannelMessage) > 0) return void f.A.clearAll(i.id, eS.C.ChannelMessage)
        }
        n?.(e, s)
    };
    handleEditLastMessage(e) {
        let {
            channel: t
        } = this.props;
        g.A.startEditMessageRecord(t.id, e), S.Ay.trackWithMetadata(eW.HAw.MESSAGE_EDIT_UP_ARROW)
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
            application: s
        } = b.EW({
            channel: t,
            type: "channel"
        }, n);
        if (null != l) {
            let e = null != s ? {
                type: R.Hf.APPLICATION,
                id: s.id,
                icon: s.icon,
                name: s?.bot?.username ?? s.name,
                application: s
            } : null;
            y.Gf({
                channelId: t.id,
                command: l,
                section: e,
                location: R.Oh.RECALL,
                initialValues: (0, v.getInitialValuesFromInteractionOptions)(l, i ?? []),
                commandOrigin: R.iw.CHAT
            })
        }
    }
    handleIncrementCombo = (e, t) => {
        if (!this.props.poggermodeEnabled) return;
        let n = this.props.channel.id,
            i = ex.default.getId(),
            l = es.Ay.getUserCombo(i, n),
            s = (l?.value ?? 0) + 1;
        (0, ei.oG)({
            channelId: n,
            userId: i,
            value: null != e ? e.length : s,
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
        A.A.changeDraft(l, t, eS.C.ChannelMessage);
        let s = "" !== t && n !== this.state.richValue,
            a = s && !e$.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
        this.isFirstChange = !1, a && this.state.textValue.length < t.length && this.handleIncrementCombo(), a ? p.A.startTyping(l) : "" === t && p.A.stopTyping(l), s && i && (0, x.Bm)(), this.setState({
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
            commandOptionValues: s,
            isGif: a,
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
            threadsAlsoSendToChannel: _
        } = this.props, E = !1;
        if (null != l) {
            if (l.inputType === R.y$.BUILT_IN_INTEGRATION) return eO._.dispatch(eW.jej.SHAKE_APP, {
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
                } = (0, eF.bV)(l) ?? {}, i = e === R.iw.APPLICATION_LAUNCHER ? T.A.lastShownEntrypoint() : N.s4.TEXT, {
                    isAuthorized: s
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
                if (!s) return Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                });
                (0, eF.My)(l)
            }
            let n = await (0, D.A)({
                command: l,
                optionValues: s ?? {},
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
        return (0, eP.i)({
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
                valid: s,
                failureReason: x
            } = e;
            if (!s)
                if (x === eW.X8x.SLOWMODE_COOLDOWN) return eO._.dispatch(eW.jej.SHAKE_APP, {
                    duration: 200,
                    intensity: 2
                }), eO._.dispatch(eW.jej.EMPHASIZE_SLOWMODE_COOLDOWN), {
                    shouldClear: !1,
                    shouldRefocus: !0
                };
                else return {
                    shouldClear: !1,
                    shouldRefocus: !1
                };
            let C = (0, X.S)(t, {
                channel: h,
                isEdit: !1
            });
            null != C && (null != C.content && (t = C.content), null != C.tts && (E = C.tts));
            let S = Q.Ay.parse(h, t);
            S.tts = S.tts || E, null != o && (S.content = "", S.components = o);
            let I = {
                ...g.A.getSendMessageOptions({
                    content: t,
                    channelId: h.id,
                    uploads: n,
                    stickers: i,
                    command: l,
                    isGif: a,
                    pendingReply: m,
                    alsoForwardToChannelId: _ ? h.parent_id ?? void 0 : void 0,
                    scheduledTimestamp: this.props.pendingScheduledMessage?.scheduledTimestamp
                }),
                location: ez.Hx.CHAT_INPUT
            };
            if (null != c && (I.announcementSendOptions = c), null != r && (I.gifMetadata = r), null != o && (I.flags = (0, u.UI)(I.flags ?? 0, eW.pr7.IS_COMPONENTS_V2)), a) return g.A.sendMessage(h.id, S, void 0, I).then(() => {
                _ && e_._(h.parent_id ?? void 0)
            }), (0, ec.Jx)(h.id), ep.B({
                channelId: h.id,
                enabled: !1
            }), {
                shouldClear: !1,
                shouldRefocus: !0
            };
            if (null != n && n.length > 0) {
                let e = (0, ek.LJ)(n);
                if ((0, ek.fJ)(e, d?.id)) return (0, ew.V)(h, e), {
                    shouldClear: !1,
                    shouldRefocus: !1
                };
                I.eagerDispatch = !1, I.attachmentsToUpload = n, I.onAttachmentUploadError = (e, i, l) => {
                    (0, Z.k)({
                        file: e,
                        guildId: h.getGuildId(),
                        analyticsLocations: [],
                        code: i,
                        reason: l
                    }) && ("" !== t && "" === eS.A.getDraft(h.id, eS.C.ChannelMessage) && A.A.saveDraft(h.id, t, eS.C.ChannelMessage), 0 === eb.A.getUploadCount(h.id, eS.C.ChannelMessage) && f.A.setUploads({
                        channelId: h.id,
                        uploads: n,
                        draftType: eS.C.ChannelMessage
                    }))
                }, f.A.clearAll(h.id, eS.C.ChannelMessage)
            }
            if (null != I.scheduledTimestamp) try {
                await (0, eh.pr)({
                    channelId: h.id,
                    scheduledTimestamp: I.scheduledTimestamp,
                    messageSendData: {
                        channelId: h.id,
                        content: t,
                        nonce: (0, ee.m)(),
                        tts: E,
                        message_reference: I.messageReference,
                        allowed_mentions: I.allowedMentions,
                        flags: I.flags
                    },
                    attachmentsToUpload: n
                }), (0, eA.c_)(I.scheduledTimestamp)
            } catch (e) {
                return (0, eA.kM)(e.message), {
                    shouldClear: !1,
                    shouldRefocus: !1
                }
            } else g.A.sendMessage(h.id, S, void 0, I).then(() => {
                _ && e_._(h.parent_id ?? void 0)
            });
            return this.setState((0, P.N3)()), (0, ec.Jx)(h.id), (0, eg.x5)(h.id, p.drafts.type), ep.B({
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
    renderAttachButton = (e, t) => (0, i.jsx)(U.A, {
        className: t,
        channel: this.props.channel,
        draftType: eS.C.ChannelMessage,
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
            onResize: s,
            highlighted: a,
            pendingReply: r,
            chatInputType: c,
            placeholder: d,
            accessibilityLabel: u,
            shakeIntensity: h,
            poggermodeEnabled: A,
            pendingScheduledMessage: g,
            announcementComposerEnabled: p
        } = this.props, {
            contentWarningProps: f
        } = this.state, _ = e.type === eW.rbe.GUILD_ANNOUNCEMENT && p ? (0, i.jsx)(w.A, {
            ref: this.props.refInstance,
            textValue: this.state.textValue,
            richValue: this.state.richValue,
            focused: t,
            className: eq.gM,
            channel: e,
            placeholder: d,
            accessibilityLabel: u,
            pendingReply: r,
            type: L.oU.CREATE_ANNOUNCEMENT_POST,
            onChange: this.handleTextareaChange,
            onSubmit: this.handleSendMessage,
            onResize: s,
            onFocus: l,
            onBlur: n,
            onKeyDown: this.handleKeyDown,
            renderAttachButton: this.renderAttachButton,
            renderApplicationCommandIcon: this.renderApplicationCommandIcon,
            promptToUpload: ew.R,
            highlighted: a,
            setEditorRef: e => this.editorRef = e
        }) : (0, i.jsx)(G.Ay, {
            ref: this.props.refInstance,
            textValue: this.state.textValue,
            richValue: this.state.richValue,
            focused: t,
            className: eq.gM,
            channel: e,
            placeholder: d,
            accessibilityLabel: u,
            pendingReply: r,
            type: c,
            onChange: this.handleTextareaChange,
            onSubmit: this.handleSendMessage,
            onResize: s,
            onFocus: l,
            onBlur: n,
            onKeyDown: this.handleKeyDown,
            renderAttachButton: this.renderAttachButton,
            renderApplicationCommandIcon: this.renderApplicationCommandIcon,
            promptToUpload: ew.R,
            highlighted: a,
            setEditorRef: e => this.editorRef = e,
            pendingScheduledMessage: g
        });
        return (0, i.jsx)(m.YNO, {
            targetElementRef: this.props.refInstance,
            position: "top",
            onRequestClose: () => {
                f?.onCancel?.(), this.setState({
                    contentWarningProps: null
                })
            },
            shouldShow: null != f,
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return o()(null != f, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"), (0, i.jsx)(et.A, {
                    onClose: t,
                    ...f
                })
            },
            children: () => A ? (0, i.jsx)(m.bfh, {
                isShaking: h > 0,
                intensity: h,
                className: eq.Xn,
                children: _
            }) : _
        })
    }
}
class e0 extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let {
            channel: n
        } = e, {
            currentChannelId: i
        } = t;
        return n.id !== i ? {
            textAreaFocused: null != n && n.type !== eW.rbe.GUILD_ANNOUNCEMENT && !c.Fr && ey.A.can(eW.xBc.SEND_MESSAGES, n),
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
        eO._.subscribe(eW.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus())
    }
    componentWillUnmount() {
        eO._.unsubscribe(eW.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
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
            case eW.Ks6.ARROW_LEFT:
                n === L.oU.SIDEBAR && eO._.dispatch(eW.jej.FOCUS_CHANNEL_TEXT_AREA, {
                    channelId: ev.A.getChannelId()
                });
                return;
            case eW.Ks6.ARROW_RIGHT:
                n === L.oU.NORMAL && eO._.dispatch(eW.jej.FOCUS_CHANNEL_TEXT_AREA, {
                    channelId: eC.Ay.getCurrentSidebarChannelId(i.id)
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
        return I.R(N.s4.TEXT, this.props.chatInputType, {
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
            communicationDisabledUntil: s,
            showAutomodUserProfileChatBlocker: a
        } = e;
        return t.type === eW.rbe.DM && n ? (0, i.jsx)(eo.A, {}) : t.isModeratorReportChannel() && t.isArchivedThread() ? (0, i.jsx)(eu.A, {
            channelId: t.id
        }) : null != s && (0, W.n)(s) && null != l && !ey.A.can(eW.xBc.ADMINISTRATOR, l) ? (0, i.jsx)(Y.j, {
            guild: l,
            disabledUntil: s
        }) : a ? (0, i.jsx)(K.u, {
            guild: l
        }) : null
    };
    render() {
        let e, {
                channel: t,
                guild: n,
                keyboardModeEnabled: l,
                hasModalOpen: s,
                pendingReply: r,
                threadsAlsoSendToChannel: o,
                chatInputType: c,
                placeholder: u,
                accessibilityLabel: h,
                showQuarantinedUserBanner: A,
                filterAfterTimestamp: g,
                communicationDisabledUntil: p,
                shakeIntensity: f,
                poggermodeEnabled: x,
                isSelectedResourceChannel: C,
                showAutomodUserProfileChatBlocker: S,
                pendingScheduledMessage: I,
                messagesTypingGradient: T,
                showLinkedLobbyApplicationLoadingIndicator: N,
                announcementComposerEnabled: y
            } = this.props,
            {
                textAreaFocused: v,
                textAreaHighlighted: b
            } = this.state,
            j = c === L.oU.SIDEBAR;
        e = j && t.type === eW.rbe.GUILD_VOICE ? eY.t.pnnyFZ : j && t.type === eW.rbe.GUILD_STAGE_VOICE ? eY.t.YInSkq : d.k.THREADS.has(t.type) ? eY.t["OkzL+Q"] : eY.t.UbNmGc;
        let R = (0, i.jsx)("div", {
                className: eq.li,
                children: (0, i.jsx)(eB.A, {})
            }),
            M = (0, i.jsx)("div", {
                className: eq.li,
                children: (0, i.jsx)(eE.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, i.jsx)(eX, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: v,
                        highlighted: b,
                        channel: t,
                        guild: n,
                        keyboardModeEnabled: l,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: s,
                        pendingReply: r,
                        threadsAlsoSendToChannel: o,
                        chatInputType: c,
                        placeholder: u,
                        accessibilityLabel: h,
                        shakeIntensity: f,
                        poggermodeEnabled: x,
                        pendingScheduledMessage: I,
                        announcementComposerEnabled: y
                    })
                })
            }),
            D = N ? R : M;
        return (0, i.jsx)(E.A, {
            page: (0, eM.DJ)(this.props.channel),
            children: (0, i.jsx)($.di, {
                children: (0, i.jsx)(J.Xq, {
                    children: (0, i.jsxs)(eD.Ah, {
                        ref: this.dispatchGroupRef,
                        children: [(0, i.jsx)(eD.EG, {
                            event: eW.jej.TEXTAREA_FOCUS,
                            handler: this.handleInputFocus
                        }), (0, i.jsx)(eD.EG, {
                            event: eW.jej.TEXTAREA_BLUR,
                            handler: this.handleInputBlur
                        }), (0, i.jsx)(eD.EG, {
                            event: eW.jej.OPEN_EXPRESSION_PICKER,
                            handler: this.handleOpenExpressionPicker
                        }), (0, i.jsx)(eD.EG, {
                            event: eW.jej.OPEN_APP_LAUNCHER,
                            handler: this.handleOpenAppLauncher
                        }), (0, i.jsxs)(eZ, {
                            isSidebar: j,
                            className: eq.q2,
                            "aria-label": eY.intl.formatToPlainString(e, {
                                channelName: t.name
                            }),
                            onMouseDown: this.handleChatInteract,
                            onKeyDown: this.handleKeyDown,
                            onFocus: this.handleChatInteract,
                            children: [(0, i.jsx)(eH.A, {
                                channel: t,
                                guild: n,
                                narrow: j
                            }), (0, i.jsxs)(m.Fmo, {
                                component: (0, i.jsx)(m.AC4, {
                                    children: (0, i.jsx)(m.H, {
                                        children: eY.intl.format(eY.t.eTzKkx, {
                                            channelName: t.name
                                        })
                                    })
                                }),
                                children: [(0, i.jsx)(en.A, {
                                    channel: t,
                                    forceCozy: C,
                                    filterAfterTimestamp: g,
                                    showingQuarantineBanner: A,
                                    typingGradient: T,
                                    hideSummaries: c === L.oU.OVERLAY
                                }), C ? null : this.renderMessageBanner({
                                    channel: t,
                                    showQuarantinedUserBanner: A,
                                    guild: n,
                                    communicationDisabledUntil: p,
                                    showAutomodUserProfileChatBlocker: S
                                }) ?? (0, i.jsxs)("form", {
                                    ref: this.inputFormRef,
                                    onSubmit: eJ,
                                    className: a()(eq.Zd, {
                                        [eq.Mf]: !N
                                    }),
                                    children: [x && (0, i.jsx)(ea.A, {
                                        channelId: t.id
                                    }), t.isPrivate() ? (0, i.jsx)(eV.A, {
                                        channel: t,
                                        children: D
                                    }) : (0, i.jsx)(eK.A, {
                                        channel: t,
                                        children: D
                                    }), (0, i.jsx)(_.Ay, {
                                        channel: t,
                                        isInTextChannel: !0
                                    })]
                                }), (0, i.jsx)($.lr, {})]
                            })]
                        })]
                    })
                })
            })
        }, `messages-${t.id}`)
    }
}
let e1 = l.memo(function(e) {
    let {
        channel: t,
        guild: n,
        chatInputType: l,
        filterAfterTimestamp: s
    } = e, {
        placeholder: a,
        accessibilityLabel: r
    } = (0, eG.A)({
        channel: t
    }), o = (0, eo.L)(ej.default.getCurrentUser(), t), [c] = (0, z.c)(n?.id), d = (0, V.uZ)(n?.id), u = (0, h.bG)([ej.default], () => ej.default.getCurrentUser()), A = (0, h.bG)([eT.Ay], () => null != u && (eT.Ay.getMember(n?.id ?? eW.dJq, u?.id)?.isPending ?? !1)), g = (0, h.bG)([el.A], () => el.A.isEnabled()), p = (0, er.A)(t.id), f = (0, q.A)(t.id), E = (0, em.D)(t.id), x = (0, h.bG)([ef.A], () => ef.A.getAlsoSendToChannel(t.id)), S = (0, h.bG)([es.Ay, ex.default], () => es.Ay.getUserCombo(ex.default.getId(), t.id)), I = (0, _.rj)(t), T = (0, _.aW)(t), N = I.length > 0 || t.rateLimitPerUser > 0 || null != S || null != T, {
        showLinkedLobbyApplicationLoadingIndicator: y
    } = (0, eU.A)(t.linkedLobby), v = (0, H.A)("ChannelChat");
    return (0, i.jsx)(e0, {
        channel: t,
        isEditing: null != (0, h.bG)([eI.A], () => eI.A.getEditingMessageId(t.id)),
        hasModalOpen: (0, m.red)(m.DXt),
        guild: n,
        keyboardModeEnabled: (0, h.bG)([C.A], () => C.A.keyboardModeEnabled),
        pendingReply: (0, h.bG)([ed.A], () => ed.A.getPendingReply(t.id)),
        threadsAlsoSendToChannel: x,
        chatInputType: l,
        placeholder: a,
        accessibilityLabel: r,
        filterAfterTimestamp: s,
        showQuarantinedUserBanner: o,
        communicationDisabledUntil: c,
        shakeIntensity: p,
        poggermodeEnabled: g,
        isSelectedResourceChannel: f,
        showAutomodUserProfileChatBlocker: d && !A,
        pendingScheduledMessage: E,
        messagesTypingGradient: N,
        showLinkedLobbyApplicationLoadingIndicator: y,
        announcementComposerEnabled: v
    })
})