/** Chunk was on 77870 **/
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
    p = n(116833),
    h = n(342494),
    f = n(397927),
    g = n(73153),
    m = n(298990),
    b = n(367513),
    A = n(951001),
    y = n(492684),
    _ = n(707606),
    O = n(475743),
    j = n(775602),
    v = n(646865),
    x = n(795816),
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
    M = n(603047),
    L = n(404374),
    k = n(379848),
    G = n(625180),
    U = n(91242),
    B = n(15285),
    V = n(769015),
    F = n(279250),
    H = n(880144),
    K = n(277680),
    W = n(118277),
    z = n(905552),
    Y = n(95035),
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
    ep = n(723702),
    eh = n(498057),
    ef = n(994314),
    eg = n(485599),
    em = n(204722),
    eb = n(535111),
    eA = n(652215),
    ey = n(5867),
    e_ = n(49999),
    eO = n(165610),
    ej = n(654487),
    ev = n(985018),
    ex = n(176869);

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
    return (0, r.jsx)(ef.A, {
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
            className: ex.YX,
            children: (0, r.jsx)(f.akl, {
                importData: t,
                shouldAnimate: !e,
                className: ex._7
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
            analyticsLocations: f,
            canStartAuthorization: g,
            accountLinkButtonRef: b,
            startAuthorization: A,
            didStartAuthorization: y
        } = this.props, _ = (0, em.W)(l, i, s), O = [];
        return n ? null : (e && y ? _ && null == s ? O.push(d.M.ACCOUNT_LINK_INVITE_FRIENDS) : O.push(d.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER) : g && null != l && O.push(d.M.ACCOUNT_LINK_PROMPT), (0, r.jsx)(k.Ay, {
            contentTypes: O,
            groupName: e_.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
            children: e => {
                let {
                    visibleContent: n,
                    markAsDismissed: s
                } = e;
                return n === d.M.ACCOUNT_LINK_INVITE_FRIENDS ? (0, r.jsx)(h.AM, {
                    title: ev.intl.string(ev.t["0l2pEt"]),
                    body: ev.intl.string(ev.t["DSZUK/"]),
                    targetElementRef: this.inviteButtonRef,
                    align: "right",
                    shouldShow: !0,
                    onRequestClose: () => s(e_.i.USER_DISMISS),
                    caretConfig: {
                        align: "end"
                    },
                    actions: [{
                        text: ev.intl.string(ev.t.YdkBCH),
                        onClick: () => {
                            var e;
                            s(e_.i.TAKE_ACTION), o()(null != i, "Received null activity"), eu.default.track(eA.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
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
                }) : n === d.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER ? (0, r.jsx)(h.AM, {
                    title: ev.intl.string(ev.t.MxAlrB),
                    body: ev.intl.string(ev.t["/UTTEg"]),
                    targetElementRef: this.accountLinkUpsellTargetRef,
                    position: "top",
                    align: "left",
                    caretConfig: {
                        align: "start"
                    },
                    actions: [{
                        text: ev.intl.string(ev.t.aRIFWD),
                        onClick: () => {
                            s(e_.i.TAKE_ACTION), window.open(ed.A.getArticleURL(eA.MVz.IN_GAME_FEATURES), "_blank")
                        }
                    }],
                    shouldShow: !0,
                    onRequestClose: () => s(e_.i.USER_DISMISS)
                }) : n === d.M.ACCOUNT_LINK_PROMPT ? (0, r.jsx)(h.AM, {
                    graphic: {
                        type: "dynamic",
                        component: p.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                        props: {
                            application: l
                        }
                    },
                    title: ev.intl.formatToPlainString(t.altTitle ? ev.t.hUbQT2 : ev.t["lo6H6+"], {
                        gameName: l.name
                    }),
                    body: ev.intl.string(t.altBody ? ev.t["JKqu+4"] : ev.t.qYAzOp),
                    targetElementRef: b,
                    align: "right",
                    shouldShow: !0,
                    gradientColor: "purple",
                    onRequestClose: () => s(e_.i.USER_DISMISS),
                    caretConfig: {
                        align: "end"
                    },
                    actions: [{
                        text: ev.intl.string(t.altCta ? ev.t.jynBQ5 : ev.t.lw71Nf),
                        onClick: () => {
                            s(e_.i.TAKE_ACTION), A({
                                analyticsLocations: f
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
            className: ex.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [e ? (0, r.jsx)(W.A, {
                title: i,
                icon: null == t ? void 0 : t.sourceIcon
            }) : (0, r.jsx)(D.Ay, {
                look: D.Ay.Looks.GRAY,
                size: D.Ay.Sizes.SMALL,
                className: ex.Ok
            }), (0, r.jsxs)("div", {
                className: ex.pq,
                children: [(0, r.jsx)(eg.A, {
                    children: l
                }), null != n && (0, r.jsxs)("div", {
                    className: ex.qi,
                    children: [(0, r.jsx)(f.tvc, {
                        size: "xxs",
                        color: L.k0.PREMIUM_TIER_2
                    }), (0, r.jsx)(J.A, {
                        className: ex.s,
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
        let d = (0, r.jsx)(Y.A, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, r.jsx)(ef.A, {
                    className: ex.Ix,
                    children: u
                })
            }),
            p = (0, r.jsx)(Y.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, r.jsx)(eg.A, {
                    className: ex._W,
                    children: t.name
                })
            }),
            h = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(V.A, {
                    className: ex.Gt,
                    game: t,
                    size: V.M.SMALL,
                    ref: this.accountLinkUpsellTargetRef
                }), (0, r.jsx)(S.M, {
                    popoutTargetRef: this.activityPopoutTargetRef,
                    isForceShowSharingPopout: a,
                    setIsForceShowSharingPopout: o,
                    children: (0, r.jsxs)("div", {
                        className: ex.pq,
                        children: [p, null != l && (0, Z.pQ)(l.type) ? d : (0, r.jsx)(eI, {
                            timestamps: c
                        })]
                    })
                })]
            });
        return (0, r.jsx)("div", {
            className: ex.cm,
            children: h
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
            l = (0, r.jsx)(f.DUT, {
                onClick: this.handleFrameLinkClick,
                onMouseDown: e => {
                    e.stopPropagation()
                },
                className: ex.rB,
                children: (0, r.jsx)(eg.A, {
                    className: ex._W,
                    children: e.name
                })
            }),
            i = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(V.A, {
                    className: ex.Gt,
                    game: e,
                    size: V.M.SMALL,
                    ref: this.accountLinkUpsellTargetRef
                }), (0, r.jsxs)("div", {
                    className: ex.pq,
                    children: [l, (0, r.jsx)(eI, {
                        timestamps: n
                    })]
                })]
            });
        return (0, r.jsx)("div", {
            className: ex.cm,
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
            className: s()(ex.nd, u),
            ref: this.activityPopoutTargetRef,
            children: (0, r.jsxs)("div", {
                className: ex.rf,
                children: [d(), this.renderActions(), this.renderAccountLinkPopover()]
            })
        })
    }
    constructor(...e) {
        super(...e), eE(this, "activityPopoutTargetRef", l.createRef()), eE(this, "accountLinkUpsellTargetRef", l.createRef()), eE(this, "inviteButtonRef", l.createRef()), eE(this, "handleApplicationLinkClick", () => {
            let {
                isActivityPopoutOpen: e
            } = this.props;
            this.handleChannelLinkClick(), e && g.h.dispatch({
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
            })), (0, Z.pQ)(t.type) && (0, x.gk)(ey.Gd.PANEL))
        }), eE(this, "handleFrameLinkClick", () => {
            let {
                frame: e,
                isActivityPopoutOpen: t
            } = this.props;
            (o()(null != e, "Frame cannot be null during navigation click"), t) ? g.h.dispatch({
                type: "ACTIVITY_POPOUT_WINDOW_OPEN"
            }): G.A.updateFrameLayoutMode({
                applicationId: e.applicationId,
                layoutMode: eO.y.FOCUSED
            })
        })
    }
}
let eT = (0, _.A)(function(e) {
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
    }(e, ["guildId"]), s = (0, u.bG)([ee.default], () => ee.default.getId()), a = (0, u.bG)([B.Ay, ec.A], () => (0, z.A)(B.Ay, ec.A)), o = (0, u.bG)([ea.A, et.A], () => et.A.getChannel(ea.A.getVoiceChannelId())), d = (0, u.bG)([E.Ay], () => E.Ay.getConnectedActivityChannelId()), p = (0, u.bG)([et.A], () => et.A.getChannel(d)), h = (0, u.bG)([en.A], () => en.A.getGuild(null == p ? void 0 : p.guild_id)), [f, g] = (0, u.yK)([$.A], () => [$.A.getCurrentUserActiveStream(), $.A.getStreamerActiveStreamMetadata()]), m = (0, u.bG)([j.A], () => j.A.useReducedMotion), b = (0, u.bG)([E.Ay], () => E.Ay.getCurrentEmbeddedActivity()), A = (0, u.bG)([U.A], () => U.A.getConnectedFrame()), y = (0, u.bG)([en.A, el.A], () => null == o || F.vz(o, en.A, el.A, !1)), [_] = (0, T.A)([null != (t = null != g && null != g.id ? g.id : null != a && null != a.id ? a.id : null != b ? b.applicationId : null != A ? A.applicationId : void 0) ? t : ""]), x = (0, u.bG)([M.A], () => M.A.getFakeGameData()), S = (0, u.bG)([E.Ay], () => E.Ay.getCurrentEmbeddedActivity()), P = (0, C.u)() && null != S && (0, v.f)(), w = (0, u.bG)([er.A], () => (0, H.A)(er.A) && (0, ep.isWindows)()), D = (0, u.bG)([ei.A], () => null != s ? ei.A.findActivity(s, e => e.type === eA.$pd.PLAYING) : null), L = null != f && f.ownerId === s && f.state !== eA.XYD.ENDED, k = (0, u.bG)([eo.default, es.A], () => null != p ? (0, R.m1)(p, eo.default, es.A) : void 0), G = (0, X.A)(), [V, K] = l.useState(!1), W = (0, u.bG)([q.A], () => q.A.getWindowOpen(eA.MLl.ACTIVITY_POPOUT)), {
        hasAlreadyLinked: Y,
        canStartAuthorization: J,
        connectionApp: Z,
        startAuthorization: ed
    } = (0, N.RD)(_, {
        allowedFlows: [N._M.RPC, N._M.WEB]
    }), [ef, eg] = l.useState(!1), em = (0, O.A)(null == _ ? void 0 : _.id);
    l.useEffect(() => {
        em !== (null == _ ? void 0 : _.id) && eg(!1)
    }, [_, em]);
    let {
        isQuestBarEmpty: eb,
        hasLoadedQuestBar: ey
    } = (0, Q.c9)({
        location: ej.rE.CONFLICT_CHECKS
    }), {
        parentAnalyticsLocation: e_,
        analyticsLocations: eO
    } = (0, I.Ay)(), ev = eh.A.useConfig({
        location: "ActivityPanelGameCard"
    }), ex = (0, c.K)(e => {
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
        canGoLive: w || P || void 0 !== x,
        activity: D,
        embeddedActivity: b,
        frame: A,
        userId: s,
        runningGame: null != x ? x : a,
        application: _,
        useReducedMotion: m,
        isStreaming: L,
        channel: p,
        canStream: y,
        stream: f,
        streamMetadata: g,
        channelName: k,
        guildForConnectedChannel: h,
        streamQualityIndicator: G,
        isForceShowSharingPopout: V,
        setIsForceShowSharingPopout: K,
        isActivityPopoutOpen: W,
        hasAlreadyLinked: Y,
        blockAccountLinkDismissibleContent: !ey || !eb,
        accountLinkCopyConfig: ev,
        parentAnalyticsLocation: e_,
        analyticsLocations: eO,
        canStartAuthorization: J,
        accountLinkButtonRef: ex,
        startAuthorization: function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return eg(!0), ed(...t)
        },
        didStartAuthorization: ef,
        connectionApp: Z
    }))
})