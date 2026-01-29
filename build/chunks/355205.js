/** Chunk was on 1113 **/
/** chunk id: 355205, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => eT
}), n(321073), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    c = n(172218),
    u = n(311907),
    d = n(554146),
    h = n(116833),
    p = n(342494),
    g = n(397927),
    f = n(73153),
    m = n(298990),
    b = n(367513),
    A = n(951001),
    y = n(492684),
    O = n(707606),
    _ = n(475743),
    x = n(775602),
    j = n(646865),
    v = n(795816),
    E = n(933958),
    C = n(47563),
    S = n(576437),
    I = n(688810),
    N = n(362490),
    T = n(429913),
    P = n(568598),
    w = n(384059),
    R = n(47167),
    D = n(402216),
    L = n(603047),
    M = n(404374),
    k = n(379848),
    G = n(625180),
    U = n(91242),
    V = n(15285),
    B = n(769015),
    H = n(279250),
    F = n(880144),
    K = n(277680),
    Y = n(118277),
    W = n(905552),
    z = n(95035),
    q = n(87001),
    X = n(249972),
    J = n(277009),
    Q = n(201805),
    Z = n(95701),
    $ = n(616356),
    ee = n(961350),
    et = n(734057),
    en = n(71393),
    er = n(430452),
    el = n(576705),
    ei = n(290863),
    es = n(994500),
    ea = n(309010),
    eo = n(287809),
    ec = n(157257),
    eu = n(954571),
    ed = n(975571),
    eh = n(723702),
    ep = n(498057),
    eg = n(994314),
    ef = n(485599),
    em = n(204722),
    eb = n(535111),
    eA = n(652215),
    ey = n(5867),
    eO = n(49999),
    e_ = n(165610),
    ex = n(654487),
    ej = n(985018),
    ev = n(176869);

function eE(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function eC(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            eE(e, t, n[t])
        })
    }
    return e
}

function eS(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let eI = (0, y.A)(function(e) {
    let {
        message: t
    } = e;
    return (0, r.jsx)(eg.A, {
        children: t
    })
});
class eN extends l.PureComponent {
    renderSparkles() {
        let {
            useReducedMotion: e
        } = this.props;
        async function t() {
            let {
                default: e
            } = await n.e("3408").then(n.t.bind(n, 707827, 19));
            return e
        }
        return (0, r.jsx)("div", {
            className: ev.YX,
            children: (0, r.jsx)(g.akl, {
                importData: t,
                shouldAnimate: !e,
                className: ev._7
            })
        })
    }
    renderActions() {
        return (0, r.jsx)(em.f, eS(eC({}, this.props), {
            inviteButtonRef: this.inviteButtonRef
        }))
    }
    renderAccountLinkPopover() {
        let {
            hasAlreadyLinked: e,
            accountLinkCopyConfig: t,
            blockAccountLinkDismissibleContent: n,
            application: l,
            activity: i,
            embeddedActivity: s,
            analyticsContext: a,
            runningGame: c,
            parentAnalyticsLocation: u,
            analyticsLocations: g,
            canStartAuthorization: f,
            accountLinkButtonRef: b,
            startAuthorization: A,
            didStartAuthorization: y
        } = this.props, O = (0, em.W)(l, i, s), _ = [];
        return n ? null : (e && y ? O && null == s ? _.push(d.M.ACCOUNT_LINK_INVITE_FRIENDS) : _.push(d.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER) : f && null != l && _.push(d.M.ACCOUNT_LINK_PROMPT), (0, r.jsx)(k.Ay, {
            contentTypes: _,
            groupName: eO.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
            children: e => {
                let {
                    visibleContent: n,
                    markAsDismissed: s
                } = e;
                return n === d.M.ACCOUNT_LINK_INVITE_FRIENDS ? (0, r.jsx)(p.AM, {
                    title: ej.intl.string(ej.t["0l2pEt"]),
                    body: ej.intl.string(ej.t["DSZUK/"]),
                    targetElementRef: this.inviteButtonRef,
                    align: "right",
                    shouldShow: !0,
                    onRequestClose: () => s(eO.i.USER_DISMISS),
                    caretConfig: {
                        align: "end"
                    },
                    actions: [{
                        text: ej.intl.string(ej.t.YdkBCH),
                        onClick: () => {
                            var e;
                            s(eO.i.TAKE_ACTION), o()(null != i, "Received null activity"), eu.default.track(eA.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                action_type: "invite_to_game",
                                game_id: null != (e = null == c ? void 0 : c.id) ? e : null,
                                application_id: i.application_id
                            }), (0, w.X)(u, w.O.INVITE), eu.default.track(eA.HAw.OPEN_MODAL, {
                                type: "Send Join Invite",
                                application_id: i.application_id,
                                location: a.location
                            }), (0, m.qf)(i, !1)
                        }
                    }]
                }) : n === d.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER ? (0, r.jsx)(p.AM, {
                    title: ej.intl.string(ej.t.MxAlrB),
                    body: ej.intl.string(ej.t["/UTTEg"]),
                    targetElementRef: this.accountLinkUpsellTargetRef,
                    position: "top",
                    align: "left",
                    caretConfig: {
                        align: "start"
                    },
                    actions: [{
                        text: ej.intl.string(ej.t.aRIFWD),
                        onClick: () => {
                            s(eO.i.TAKE_ACTION), window.open(ed.A.getArticleURL(eA.MVz.IN_GAME_FEATURES), "_blank")
                        }
                    }],
                    shouldShow: !0,
                    onRequestClose: () => s(eO.i.USER_DISMISS)
                }) : n === d.M.ACCOUNT_LINK_PROMPT ? (0, r.jsx)(p.AM, {
                    graphic: {
                        type: "dynamic",
                        component: h.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                        props: {
                            application: l
                        }
                    },
                    title: ej.intl.formatToPlainString(t.altTitle ? ej.t.hUbQT2 : ej.t["lo6H6+"], {
                        gameName: l.name
                    }),
                    body: ej.intl.string(t.altBody ? ej.t["JKqu+4"] : ej.t.qYAzOp),
                    targetElementRef: b,
                    align: "right",
                    shouldShow: !0,
                    gradientColor: "purple",
                    onRequestClose: () => s(eO.i.USER_DISMISS),
                    caretConfig: {
                        align: "end"
                    },
                    actions: [{
                        text: ej.intl.string(t.altCta ? ej.t.jynBQ5 : ej.t.lw71Nf),
                        onClick: () => {
                            s(eO.i.TAKE_ACTION), A({
                                analyticsLocations: g
                            })
                        }
                    }]
                }) : void 0
            }
        }))
    }
    renderGame() {
        let {
            isStreaming: e,
            application: t,
            runningGame: n,
            isForceShowSharingPopout: l,
            setIsForceShowSharingPopout: i
        } = this.props;
        return (0, r.jsx)(eb.O, {
            isStreaming: e,
            application: t,
            game: n,
            onClickNotSharing: () => i(!0),
            isForceShowSharingPopout: l,
            setIsForceShowSharingPopout: i,
            ref: this.accountLinkUpsellTargetRef,
            popoutTargetRef: this.activityPopoutTargetRef
        })
    }
    renderScreenshare() {
        let {
            isStreaming: e,
            streamMetadata: t,
            streamQualityIndicator: n
        } = this.props, {
            title: l,
            sanitizedTitle: i
        } = (0, K.A)(t);
        return (0, r.jsxs)("div", {
            className: ev.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [e ? (0, r.jsx)(Y.A, {
                title: i,
                icon: null == t ? void 0 : t.sourceIcon
            }) : (0, r.jsx)(D.Ay, {
                look: D.Ay.Looks.GRAY,
                size: D.Ay.Sizes.SMALL,
                className: ev.Ok
            }), (0, r.jsxs)("div", {
                className: ev.pq,
                children: [(0, r.jsx)(ef.A, {
                    children: l
                }), null != n && (0, r.jsxs)("div", {
                    className: ev.qi,
                    children: [(0, r.jsx)(g.tvc, {
                        size: "xxs",
                        color: M.k0.PREMIUM_TIER_2
                    }), (0, r.jsx)(J.A, {
                        className: ev.s,
                        variant: "text-xxs/semibold",
                        children: n
                    })]
                })]
            })]
        })
    }
    renderEmbeddedActivity() {
        let e, {
            application: t,
            embeddedActivity: n,
            channel: l,
            channelName: i,
            guildForConnectedChannel: s,
            isForceShowSharingPopout: a,
            setIsForceShowSharingPopout: o
        } = this.props;
        if (null == n || null == t) return null;
        let c = {
                start: n.connectedSince
            },
            u = i;
        null != s && null != l ? (e = eA.BVt.CHANNEL(s.id, l.id), u = "".concat(u, " / ").concat(s.name)) : null != l && (e = eA.BVt.CHANNEL(eA.ME, l.id));
        let d = (0, r.jsx)(z.A, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, r.jsx)(eg.A, {
                    className: ev.Ix,
                    children: u
                })
            }),
            h = (0, r.jsx)(z.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, r.jsx)(ef.A, {
                    className: ev._W,
                    children: t.name
                })
            }),
            p = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(B.A, {
                    className: ev.Gt,
                    game: t,
                    size: B.M.SMALL,
                    ref: this.accountLinkUpsellTargetRef
                }), (0, r.jsx)(S.M, {
                    popoutTargetRef: this.activityPopoutTargetRef,
                    isForceShowSharingPopout: a,
                    setIsForceShowSharingPopout: o,
                    children: (0, r.jsxs)("div", {
                        className: ev.pq,
                        children: [h, null != l && (0, Z.pQ)(l.type) ? d : (0, r.jsx)(eI, {
                            timestamps: c
                        })]
                    })
                })]
            });
        return (0, r.jsx)("div", {
            className: ev.cm,
            children: p
        })
    }
    renderFrame() {
        let {
            application: e,
            frame: t
        } = this.props;
        if (null == t || null == e) return null;
        let n = {
                start: t.connectedSince
            },
            l = (0, r.jsx)(g.DUT, {
                onClick: this.handleFrameLinkClick,
                onMouseDown: e => {
                    e.stopPropagation()
                },
                className: ev.rB,
                children: (0, r.jsx)(ef.A, {
                    className: ev._W,
                    children: e.name
                })
            }),
            i = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(B.A, {
                    className: ev.Gt,
                    game: e,
                    size: B.M.SMALL,
                    ref: this.accountLinkUpsellTargetRef
                }), (0, r.jsxs)("div", {
                    className: ev.pq,
                    children: [l, (0, r.jsx)(eI, {
                        timestamps: n
                    })]
                })]
            });
        return (0, r.jsx)("div", {
            className: ev.cm,
            children: i
        })
    }
    render() {
        let {
            canGoLive: e,
            embeddedActivity: t,
            frame: n,
            runningGame: l,
            isStreaming: i,
            streamMetadata: a,
            application: o,
            activity: c,
            className: u
        } = this.props;
        if (!i && (!(0, em.W)(o, c, t) && ! function(e) {
                let {
                    application: t,
                    frame: n
                } = e;
                return null != t && null != n && n.applicationId === t.id
            }({
                application: o,
                frame: n
            }) && !e || null == l && null == t && null == n)) return null;
        let d = () => null == l || i && (null == a ? void 0 : a.pid) == null ? null != t ? this.renderEmbeddedActivity() : null != n ? this.renderFrame() : this.renderScreenshare() : this.renderGame();
        return (0, r.jsx)("div", {
            className: s()(ev.nd, u),
            ref: this.activityPopoutTargetRef,
            children: (0, r.jsxs)("div", {
                className: ev.rf,
                children: [d(), this.renderActions(), this.renderAccountLinkPopover()]
            })
        })
    }
    constructor(...e) {
        super(...e), eE(this, "activityPopoutTargetRef", l.createRef()), eE(this, "accountLinkUpsellTargetRef", l.createRef()), eE(this, "inviteButtonRef", l.createRef()), eE(this, "handleApplicationLinkClick", () => {
            let {
                isActivityPopoutOpen: e
            } = this.props;
            this.handleChannelLinkClick(), e && f.h.dispatch({
                type: "ACTIVITY_POPOUT_WINDOW_OPEN"
            })
        }), eE(this, "handleChannelLinkClick", () => {
            var e;
            let {
                channel: t,
                embeddedActivity: n,
                isActivityPopoutOpen: r
            } = this.props;
            o()(null != n, "Activity cannot be null during navigation click"), o()(null != t, "Channel cannot be null during navigation click"), A.A.channelListScrollTo(null != (e = t.guild_id) ? e : eA.ME, t.id), !r && ((0, Z.gV)(t.type) && b.A.selectParticipant(t.id, (0, P.Qt)({
                applicationId: n.applicationId,
                instanceId: n.compositeInstanceId
            })), (0, Z.pQ)(t.type) && (0, v.gk)(ey.Gd.PANEL))
        }), eE(this, "handleFrameLinkClick", () => {
            let {
                frame: e,
                isActivityPopoutOpen: t
            } = this.props;
            (o()(null != e, "Frame cannot be null during navigation click"), t) ? f.h.dispatch({
                type: "ACTIVITY_POPOUT_WINDOW_OPEN"
            }): G.A.updateFrameLayoutMode({
                applicationId: e.applicationId,
                layoutMode: e_.y.FOCUSED
            })
        })
    }
}
let eT = (0, O.A)(function(e) {
    var t;
    let {
        guildId: n
    } = e, i = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["guildId"]), s = (0, u.bG)([ee.default], () => ee.default.getId()), a = (0, u.bG)([V.Ay, ec.A], () => (0, W.A)(V.Ay, ec.A)), o = (0, u.bG)([ea.A, et.A], () => et.A.getChannel(ea.A.getVoiceChannelId())), d = (0, u.bG)([E.Ay], () => E.Ay.getConnectedActivityChannelId()), h = (0, u.bG)([et.A], () => et.A.getChannel(d)), p = (0, u.bG)([en.A], () => en.A.getGuild(null == h ? void 0 : h.guild_id)), [g, f] = (0, u.yK)([$.A], () => [$.A.getCurrentUserActiveStream(), $.A.getStreamerActiveStreamMetadata()]), m = (0, u.bG)([x.A], () => x.A.useReducedMotion), b = (0, u.bG)([E.Ay], () => E.Ay.getCurrentEmbeddedActivity()), A = (0, u.bG)([U.A], () => U.A.getConnectedFrame()), y = (0, u.bG)([en.A, el.A], () => null == o || H.vz(o, en.A, el.A, !1)), [O] = (0, T.A)([null != (t = null != f && null != f.id ? f.id : null != a && null != a.id ? a.id : null != b ? b.applicationId : null != A ? A.applicationId : void 0) ? t : ""]), v = (0, u.bG)([L.A], () => L.A.getFakeGameData()), S = (0, u.bG)([E.Ay], () => E.Ay.getCurrentEmbeddedActivity()), P = (0, C.u)() && null != S && (0, j.f)(), w = (0, u.bG)([er.A], () => (0, F.A)(er.A) && (0, eh.isWindows)()), D = (0, u.bG)([ei.A], () => null != s ? ei.A.findActivity(s, e => e.type === eA.$pd.PLAYING) : null), M = null != g && g.ownerId === s && g.state !== eA.XYD.ENDED, k = (0, u.bG)([eo.default, es.A], () => null != h ? (0, R.m1)(h, eo.default, es.A) : void 0), G = (0, X.A)(), [B, K] = l.useState(!1), Y = (0, u.bG)([q.A], () => q.A.getWindowOpen(eA.MLl.ACTIVITY_POPOUT)), {
        hasAlreadyLinked: z,
        canStartAuthorization: J,
        connectionApp: Z,
        startAuthorization: ed
    } = (0, N.RD)(O, {
        allowedFlows: [N._M.RPC, N._M.WEB]
    }), [eg, ef] = l.useState(!1), em = (0, _.A)(null == O ? void 0 : O.id);
    l.useEffect(() => {
        em !== (null == O ? void 0 : O.id) && ef(!1)
    }, [O, em]);
    let {
        isQuestBarEmpty: eb,
        hasLoadedQuestBar: ey
    } = (0, Q.c9)({
        location: ex.rE.CONFLICT_CHECKS
    }), {
        parentAnalyticsLocation: eO,
        analyticsLocations: e_
    } = (0, I.Ay)(), ej = ep.A.useConfig({
        location: "ActivityPanelGameCard"
    }), ev = (0, c.K)(e => {
        if (e && null != Z) {
            var t;
            eu.default.track(eA.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                game_id: null != (t = null == a ? void 0 : a.id) ? t : null,
                application_id: Z.id
            })
        }
    });
    return (0, r.jsx)(eN, eS(eC({}, i), {
        guildId: n,
        canGoLive: w || P || void 0 !== v,
        activity: D,
        embeddedActivity: b,
        frame: A,
        userId: s,
        runningGame: null != v ? v : a,
        application: O,
        useReducedMotion: m,
        isStreaming: M,
        channel: h,
        canStream: y,
        stream: g,
        streamMetadata: f,
        channelName: k,
        guildForConnectedChannel: p,
        streamQualityIndicator: G,
        isForceShowSharingPopout: B,
        setIsForceShowSharingPopout: K,
        isActivityPopoutOpen: Y,
        hasAlreadyLinked: z,
        blockAccountLinkDismissibleContent: !ey || !eb,
        accountLinkCopyConfig: ej,
        parentAnalyticsLocation: eO,
        analyticsLocations: e_,
        canStartAuthorization: J,
        accountLinkButtonRef: ev,
        startAuthorization: function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return ef(!0), ed(...t)
        },
        didStartAuthorization: eg,
        connectionApp: Z
    }))
})