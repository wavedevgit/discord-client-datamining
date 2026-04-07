/** chunk id: 355205 params = (module,exports,require) **/
n.d(t, {
    A: () => eL
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(172218),
    c = n(311907),
    u = n(554146),
    h = n(116833),
    A = n(342494),
    _ = n(397927),
    m = n(73153),
    p = n(298990),
    g = n(367513),
    f = n(951001),
    x = n(492684),
    E = n(707606),
    I = n(475743),
    C = n(775602),
    N = n(646865),
    T = n(795816),
    S = n(933958),
    b = n(47563),
    v = n(576437),
    y = n(688810),
    j = n(362490),
    R = n(429913),
    O = n(568598),
    L = n(384059),
    M = n(47167),
    D = n(402216),
    U = n(603047),
    G = n(404374),
    P = n(379848),
    k = n(625180),
    w = n(91242),
    B = n(596458),
    V = n(638934),
    H = n(15285),
    F = n(769015),
    W = n(334074),
    K = n(279250),
    Y = n(880144),
    z = n(277680),
    q = n(118277),
    X = n(905552),
    $ = n(95035),
    Q = n(87001),
    J = n(249972),
    Z = n(277009),
    ee = n(201805),
    et = n(95701),
    en = n(616356),
    ei = n(961350),
    el = n(734057),
    es = n(184989),
    ea = n(71393),
    er = n(430452),
    eo = n(576705),
    ed = n(290863),
    ec = n(994500),
    eu = n(309010),
    eh = n(287809),
    eA = n(157257),
    e_ = n(954571),
    em = n(975571),
    ep = n(723702),
    eg = n(498057),
    ef = n(994314),
    ex = n(485599),
    eE = n(204722),
    eI = n(535111),
    eC = n(652215),
    eN = n(5867),
    eT = n(49999),
    eS = n(165610),
    eb = n(9626),
    ev = n(985018),
    ey = n(852216);

function ej(e) {
    let {
        application: t,
        activity: n,
        embeddedActivity: l,
        runningGame: s,
        hasAlreadyLinked: a,
        didStartAuthorization: r,
        canStartAuthorization: d,
        startAuthorization: c,
        accountLinkUpsellTargetRef: _,
        inviteButtonRef: m,
        accountLinkButtonRef: g,
        gameCommunityGuildId: f,
        parentAnalyticsLocation: x,
        analyticsLocations: E,
        analyticsContext: I
    } = e, {
        isQuestBarEmpty: C,
        hasLoadedQuestBar: N
    } = (0, ee.c9)(), T = eg.A.useConfig({
        location: "ActivityPanelGameCard"
    }), S = !N || !C, b = (0, eE.W)(t, n, l), v = [], y = !1;
    S || (a && r ? b && null == l ? v.push(u.M.ACCOUNT_LINK_INVITE_FRIENDS) : v.push(u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER) : !a && d && null != t && (y = !0), null != f && s?.id != null && s?.name != null && v.push(u.M.JOIN_GAME_COMMUNITY_RTC_CTA));
    let {
        shouldShow: j,
        markAsDismissed: R
    } = (0, W.A)({
        application: t,
        disabled: !y,
        dismissibleContent: u.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
        dismissibleContentGroupName: eT.m.ACCOUNT_NAME_ZONE,
        bypassAutoDismiss: !0
    });
    return S ? null : (0, i.jsx)(P.Ay, {
        contentTypes: v,
        groupName: eT.m.ACCOUNT_NAME_ZONE,
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: l,
                markAsDismissed: a
            } = e;
            return l === u.M.ACCOUNT_LINK_INVITE_FRIENDS ? (0, i.jsx)(A.AM, {
                title: ev.intl.string(ev.t["0l2pEt"]),
                body: ev.intl.string(ev.t["DSZUK/"]),
                targetElementRef: m,
                align: "right",
                shouldShow: !0,
                onRequestClose: () => a(eT.i.USER_DISMISS),
                caretConfig: {
                    align: "end"
                },
                actions: [{
                    text: ev.intl.string(ev.t.YdkBCH),
                    onClick: () => {
                        a(eT.i.TAKE_ACTION), o()(null != n, "Received null activity"), e_.default.track(eC.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                            action_type: "invite_to_game",
                            game_id: s?.id ?? null,
                            application_id: n.application_id
                        }), (0, L.X)(x, L.O.INVITE), e_.default.track(eC.HAw.OPEN_MODAL, {
                            type: "Send Join Invite",
                            application_id: n.application_id,
                            location: I.location
                        }), (0, p.qf)(n, !1)
                    }
                }]
            }) : l === u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER ? (0, i.jsx)(A.AM, {
                title: ev.intl.string(ev.t.MxAlrB),
                body: ev.intl.string(ev.t["/UTTEg"]),
                targetElementRef: _,
                position: "top",
                align: "left",
                caretConfig: {
                    align: "start"
                },
                actions: [{
                    text: ev.intl.string(ev.t.aRIFWD),
                    onClick: () => {
                        a(eT.i.TAKE_ACTION), window.open(em.A.getArticleURL(eC.MVz.IN_GAME_FEATURES), "_blank")
                    }
                }],
                shouldShow: !0,
                onRequestClose: () => a(eT.i.USER_DISMISS)
            }) : j ? (0, i.jsx)(A.AM, {
                graphic: {
                    type: "dynamic",
                    component: h.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                    props: {
                        application: t
                    }
                },
                title: ev.intl.formatToPlainString(T.altTitle ? ev.t.hUbQT2 : ev.t["lo6H6+"], {
                    gameName: t.name
                }),
                body: ev.intl.string(T.altBody ? ev.t["JKqu+4"] : ev.t.qYAzOp),
                targetElementRef: g,
                align: "right",
                shouldShow: !0,
                gradientColor: "purple",
                onRequestClose: () => R(eT.i.USER_DISMISS),
                caretConfig: {
                    align: "end"
                },
                actions: [{
                    text: ev.intl.string(T.altCta ? ev.t.jynBQ5 : ev.t.lw71Nf),
                    onClick: () => {
                        R(eT.i.TAKE_ACTION), c({
                            analyticsLocations: E
                        })
                    }
                }]
            }) : l === u.M.JOIN_GAME_COMMUNITY_RTC_CTA && null != f && s?.id != null && s?.name != null ? (0, i.jsx)(B.A, {
                targetElementRef: _,
                gameId: s.id,
                gameName: s.name,
                gameCommunityGuildId: f,
                markAsDismissed: a
            }) : void 0
        }
    })
}
let eR = (0, x.A)(function(e) {
    let {
        message: t
    } = e;
    return (0, i.jsx)(ef.A, {
        children: t
    })
});
class eO extends l.PureComponent {
    activityPopoutTargetRef = l.createRef();
    accountLinkUpsellTargetRef = l.createRef();
    inviteButtonRef = l.createRef();
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
        return (0, i.jsx)("div", {
            className: ey.YX,
            children: (0, i.jsx)(_.akl, {
                importData: t,
                shouldAnimate: !e,
                className: ey._7
            })
        })
    }
    renderActions() {
        return (0, i.jsx)(eE.f, {
            ...this.props,
            inviteButtonRef: this.inviteButtonRef
        })
    }
    renderDismissiblePopovers() {
        let {
            application: e,
            activity: t,
            embeddedActivity: n,
            runningGame: l,
            hasAlreadyLinked: s,
            didStartAuthorization: a,
            canStartAuthorization: r,
            startAuthorization: o,
            accountLinkButtonRef: d,
            parentAnalyticsLocation: c,
            analyticsLocations: u,
            gameCommunityGuildId: h,
            analyticsContext: A
        } = this.props;
        return (0, i.jsx)(ej, {
            application: e,
            activity: t,
            embeddedActivity: n,
            runningGame: l,
            hasAlreadyLinked: s,
            didStartAuthorization: a,
            canStartAuthorization: r,
            startAuthorization: o,
            accountLinkUpsellTargetRef: this.accountLinkUpsellTargetRef,
            inviteButtonRef: this.inviteButtonRef,
            accountLinkButtonRef: d,
            gameCommunityGuildId: h,
            activityPopoutTargetRef: this.activityPopoutTargetRef,
            parentAnalyticsLocation: c,
            analyticsLocations: u,
            analyticsContext: A
        })
    }
    renderGame() {
        let {
            isStreaming: e,
            application: t,
            runningGame: n,
            isForceShowSharingPopout: l,
            setIsForceShowSharingPopout: s
        } = this.props;
        return (0, i.jsx)(eI.O, {
            isStreaming: e,
            application: t,
            game: n,
            onClickNotSharing: () => s(!0),
            isForceShowSharingPopout: l,
            setIsForceShowSharingPopout: s,
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
            sanitizedTitle: s
        } = (0, z.A)(t);
        return (0, i.jsxs)("div", {
            className: ey.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [e ? (0, i.jsx)(q.A, {
                title: s,
                icon: t?.sourceIcon
            }) : (0, i.jsx)(D.Ay, {
                look: D.Ay.Looks.GRAY,
                size: D.Ay.Sizes.SMALL,
                className: ey.Ok
            }), (0, i.jsxs)("div", {
                className: ey.pq,
                children: [(0, i.jsx)(ex.A, {
                    children: l
                }), null != n && (0, i.jsxs)("div", {
                    className: ey.qi,
                    children: [(0, i.jsx)(_.tvc, {
                        size: "xxs",
                        color: G.k0.PREMIUM_TIER_2
                    }), (0, i.jsx)(Z.A, {
                        className: ey.s,
                        variant: "text-xxs/semibold",
                        children: n
                    })]
                })]
            })]
        })
    }
    handleApplicationLinkClick = () => {
        let {
            isActivityPopoutOpen: e
        } = this.props;
        this.handleChannelLinkClick(), e && m.h.dispatch({
            type: "ACTIVITY_POPOUT_WINDOW_OPEN"
        })
    };
    handleChannelLinkClick = () => {
        let {
            channel: e,
            embeddedActivity: t,
            isActivityPopoutOpen: n
        } = this.props;
        o()(null != t, "Activity cannot be null during navigation click"), o()(null != e, "Channel cannot be null during navigation click"), f.A.channelListScrollTo(e.guild_id ?? eC.ME, e.id), !n && ((0, et.gV)(e.type) && g.A.selectParticipant(e.id, (0, O.Qt)({
            applicationId: t.applicationId,
            instanceId: t.compositeInstanceId
        })), (0, et.pQ)(e.type) && (0, T.gk)(eN.Gd.PANEL))
    };
    handleFrameLinkClick = () => {
        let {
            frame: e,
            isActivityPopoutOpen: t
        } = this.props;
        (o()(null != e, "Frame cannot be null during navigation click"), t) ? m.h.dispatch({
            type: "ACTIVITY_POPOUT_WINDOW_OPEN"
        }): k.A.updateFrameLayoutMode({
            applicationId: e.applicationId,
            layoutMode: eS.y.FOCUSED
        })
    };
    renderEmbeddedActivity() {
        let e, {
            application: t,
            embeddedActivity: n,
            channel: l,
            channelName: s,
            guildForConnectedChannel: a,
            isForceShowSharingPopout: r,
            setIsForceShowSharingPopout: o
        } = this.props;
        if (null == n || null == t) return null;
        let d = {
                start: n.connectedSince
            },
            c = s;
        null != a && null != l ? (e = eC.BVt.CHANNEL(a.id, l.id), c = `${c} / ${a.name}`) : null != l && (e = eC.BVt.CHANNEL(eC.ME, l.id));
        let u = (0, i.jsx)($.A, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, i.jsx)(ef.A, {
                    className: ey.Ix,
                    children: c
                })
            }),
            h = (0, i.jsx)($.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, i.jsx)(ex.A, {
                    className: ey._W,
                    children: t.name
                })
            }),
            A = (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(F.A, {
                    className: ey.Gt,
                    game: t,
                    size: F.M.SMALL,
                    ref: this.accountLinkUpsellTargetRef
                }), (0, i.jsx)(v.M, {
                    popoutTargetRef: this.activityPopoutTargetRef,
                    isForceShowSharingPopout: r,
                    setIsForceShowSharingPopout: o,
                    children: (0, i.jsxs)("div", {
                        className: ey.pq,
                        children: [h, null != l && (0, et.pQ)(l.type) ? u : (0, i.jsx)(eR, {
                            timestamps: d
                        })]
                    })
                })]
            });
        return (0, i.jsx)("div", {
            className: ey.cm,
            children: A
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
            l = (0, i.jsx)(_.DUT, {
                onClick: this.handleFrameLinkClick,
                onMouseDown: e => {
                    e.stopPropagation()
                },
                className: ey.rB,
                children: (0, i.jsx)(ex.A, {
                    className: ey._W,
                    children: e.name
                })
            }),
            s = (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(F.A, {
                    className: ey.Gt,
                    game: e,
                    size: F.M.SMALL,
                    ref: this.accountLinkUpsellTargetRef
                }), (0, i.jsxs)("div", {
                    className: ey.pq,
                    children: [l, (0, i.jsx)(eR, {
                        timestamps: n
                    })]
                })]
            });
        return (0, i.jsx)("div", {
            className: ey.cm,
            children: s
        })
    }
    render() {
        let {
            canGoLive: e,
            embeddedActivity: t,
            frame: n,
            runningGame: l,
            isStreaming: s,
            streamMetadata: r,
            application: o,
            activity: d,
            className: c
        } = this.props;
        if (!s && (!(0, eE.W)(o, d, t) && ! function(e) {
                let {
                    application: t,
                    frame: n
                } = e;
                return null != t && null != n && n.applicationId === t.id
            }({
                application: o,
                frame: n
            }) && !e || null == l && null == t && null == n)) return null;
        let u = () => null == l || s && r?.pid == null ? null != t ? this.renderEmbeddedActivity() : null != n ? this.renderFrame() : this.renderScreenshare() : this.renderGame();
        return (0, i.jsx)("div", {
            className: a()(ey.nd, c),
            ref: this.activityPopoutTargetRef,
            children: (0, i.jsxs)("div", {
                className: ey.rf,
                children: [u(), this.renderActions(), this.renderDismissiblePopovers()]
            })
        })
    }
}
let eL = (0, E.A)(function(e) {
    let {
        guildId: t,
        ...n
    } = e, s = (0, c.bG)([ei.default], () => ei.default.getId()), a = (0, c.bG)([H.Ay, eA.A], () => (0, X.A)(H.Ay, eA.A)), r = (0, c.bG)([eu.A, el.A], () => el.A.getChannel(eu.A.getVoiceChannelId())), o = (0, c.bG)([S.Ay], () => S.Ay.getConnectedActivityChannelId()), u = (0, c.bG)([el.A], () => el.A.getChannel(o)), h = (0, c.bG)([ea.A], () => ea.A.getGuild(u?.guild_id)), [A, _] = (0, c.yK)([en.A], () => [en.A.getCurrentUserActiveStream(), en.A.getStreamerActiveStreamMetadata()]), m = (0, c.bG)([C.A], () => C.A.useReducedMotion), p = (0, c.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()), g = (0, c.bG)([w.A], () => w.A.getConnectedFrame()), f = (0, c.bG)([ea.A, eo.A], () => null == r || K.vz(r, ea.A, eo.A, !1)), [x] = (0, R.A)([(null != _ && null != _.id ? _.id : null != a && null != a.id ? a.id : null != p ? p.applicationId : null != g ? g.applicationId : void 0) ?? ""]), E = (0, c.bG)([U.A], () => U.A.getFakeGameData()), T = (0, c.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()), v = (0, b.u)() && null != T && (0, N.f)(), O = (0, c.bG)([er.Ay], () => (0, Y.A)(er.Ay) && (0, ep.isWindows)()), L = (0, c.bG)([ed.A], () => null != s ? ed.A.findActivity(s, e => e.type === eC.$pd.PLAYING) : null), D = null != A && A.ownerId === s && A.state !== eC.XYD.ENDED, G = (0, c.bG)([eh.default, ec.A], () => null != u ? (0, M.m1)(u, eh.default, ec.A) : void 0), P = (0, J.A)(), [k, B] = l.useState(!1), F = (0, c.bG)([Q.A], () => Q.A.getWindowOpen(eC.MLl.ACTIVITY_POPOUT)), {
        parentAnalyticsLocation: W,
        analyticsLocations: z
    } = (0, y.Ay)(), {
        hasAlreadyLinked: q,
        canStartAuthorization: $,
        connectionApp: Z,
        startAuthorization: ee
    } = (0, j.RD)(x, {
        allowedFlows: [j._M.RPC, j._M.WEB]
    }), [et, em] = l.useState(!1), eg = (0, I.A)(x?.id);
    l.useEffect(() => {
        eg !== x?.id && em(!1)
    }, [x, eg, em]);
    let ef = (0, d.K)(e => {
            e && null != Z && e_.default.track(eC.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                game_id: a?.id ?? null,
                application_id: Z.id
            })
        }),
        {
            enabled: ex
        } = V.A.useConfig({
            location: "ActivityPanelGameCard"
        }),
        eE = l.useMemo(() => a?.id != null ? eb.g[a.id] : void 0, [a?.id]),
        eI = (0, c.bG)([es.A], () => null != eE && es.A.isMember(eE), [eE]),
        eN = ex && null != eE && !eI ? eE : void 0;
    return (0, i.jsx)(eO, {
        ...n,
        guildId: t,
        canGoLive: O || v || void 0 !== E,
        activity: L,
        embeddedActivity: p,
        frame: g,
        userId: s,
        runningGame: E ?? a,
        application: x,
        useReducedMotion: m,
        isStreaming: D,
        channel: u,
        canStream: f,
        stream: A,
        streamMetadata: _,
        channelName: G,
        guildForConnectedChannel: h,
        streamQualityIndicator: P,
        isForceShowSharingPopout: k,
        setIsForceShowSharingPopout: B,
        isActivityPopoutOpen: F,
        hasAlreadyLinked: q,
        parentAnalyticsLocation: W,
        analyticsLocations: z,
        canStartAuthorization: $,
        accountLinkButtonRef: ef,
        startAuthorization: function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return em(!0), ee(...t)
        },
        didStartAuthorization: et,
        connectionApp: Z,
        gameCommunityGuildId: eN
    })
})