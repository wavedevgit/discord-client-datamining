/** chunk id: 920437 params = (module,exports,require) **/
n.d(t, {
    A: () => z
});
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(311907),
    o = n(139033),
    c = n(314116),
    d = n(397927),
    u = n(830215),
    h = n(857182),
    m = n(686956),
    A = n(775602),
    g = n(315982),
    _ = n(563729),
    p = n(624458),
    f = n(821124),
    E = n(202384),
    C = n(513461),
    x = n(709977),
    S = n(212455),
    I = n(466244),
    T = n(158476),
    N = n(857071),
    v = n(552227),
    y = n(698405),
    b = n(557722),
    j = n(976860),
    R = n(544028),
    M = n(560010),
    L = n(696451),
    D = n(71393),
    O = n(834942),
    P = n(576705),
    w = n(287809),
    U = n(488926),
    k = n(137577),
    G = n(786051),
    F = n(652215),
    H = n(360469),
    B = n(53516),
    V = n(985018),
    W = n(968884);
class K extends l.PureComponent {
    state = {
        submitting: !1,
        shouldShowLurkerModeUpsellPopout: !1,
        shouldShowLurkerModeSuccessPopout: !1
    };
    textAreaContainerRef = l.createRef();
    upsellTargetRef = l.createRef();
    componentDidMount() {
        let {
            isFollowable: e,
            channelFollowingUsersSeen: t,
            channel: n
        } = this.props;
        e && null == t && h.A.fetchChannelFollowerStats(n.id)
    }
    componentDidUpdate(e) {
        let {
            shouldShowLurkerModeSuccessPopout: t,
            guild: n,
            showMemberVerificationModal: i
        } = this.props;
        i || e.shouldShowLurkerModeSuccessPopout || !t || null == n || this.setState({
            shouldShowLurkerModeSuccessPopout: !0
        })
    }
    renderSuccessPopout = e => {
        let {
            closePopout: t
        } = e, {
            guild: n
        } = this.props;
        return a()(null != n, "This guildID cannot be null"), (0, i.jsx)(v.A, {
            onClose: t,
            guild: n
        })
    };
    handleCancelApplication = () => {
        let {
            guild: e
        } = this.props;
        null != e && (0, c.A)({
            title: V.intl.string(V.t.aIz1oV),
            subtitle: V.intl.string(V.t["13tjTU"]),
            variant: "primary",
            confirmText: V.intl.string(V.t["cY+Oob"]),
            onConfirm: () => p.A.removeGuildJoinRequest(e.id)
        })
    };
    handleViewApplicationRejection = () => {
        let {
            guild: e
        } = this.props;
        null != e && (0, d.mMO)(async () => {
            let {
                default: t
            } = await n.e("37548").then(n.bind(n, 856103));
            return n => (0, i.jsx)(t, {
                guildId: e.id,
                ...n
            })
        })
    };
    handleShowMemberVerification = () => {
        let {
            guild: e
        } = this.props;
        null != e && (0, E.Ze)(e.id)
    };
    handleClaimAccount = () => {
        g.R()
    };
    handleVerifyPhone = () => {
        (0, d.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("84704"), n.e("16398")]).then(n.bind(n, 615715));
            return t => (0, i.jsx)(e, {
                reason: b.d.GUILD_PHONE_REQUIRED,
                ...t
            })
        }, {
            modalKey: B.V
        })
    };
    handleResendVerification = () => {
        u.A.verifyResend();
        let e = w.default.getCurrentUser()?.email;
        null != e && (0, o.A)({
            title: V.intl.string(V.t.LykQYk),
            subtitle: V.intl.format(V.t.azKEPy, {
                email: e
            })
        })
    };
    handleTextAreaClick = () => {
        let {
            showLurkerModeUpsellPopout: e
        } = this.props;
        this.setState({
            shouldShowLurkerModeUpsellPopout: e
        })
    };
    handleJoinServer = async () => {
        this.setState({
            submitting: !0
        });
        let e = this.props.channel.getGuildId();
        try {
            await m.A.joinGuild(e, {
                source: F.Q4z.CHAT_INPUT_BLOCKER
            })
        } catch {
            this.setState({
                submitting: !1
            })
        }
    };
    handleGoBack = () => {
        this.setState({
            submitting: !0
        }), (0, j.JK)().goBack()
    };
    handleFollowAnnouncement = () => {
        let {
            channel: e
        } = this.props;
        (0, d.mMO)(async () => {
            let {
                default: t
            } = await n.e("66464").then(n.bind(n, 464035));
            return n => (0, i.jsx)(t, {
                channel: e,
                ...n
            })
        })
    };
    closeLurkerModeUpsellPopout = () => {
        this.setState({
            shouldShowLurkerModeUpsellPopout: !1
        })
    };
    renderLurkerModeUpsellPopout = () => {
        let {
            guild: e
        } = this.props;
        return a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, i.jsx)(y.A, {
            type: y.w.CHAT,
            guild: e,
            closePopout: this.closeLurkerModeUpsellPopout
        })
    };
    renderMemberVerificationSuccessModal = () => {
        let {
            guild: e,
            guildJoinRequest: t
        } = this.props, n = t?.applicationStatus === C.B5.APPROVED;
        if (null == e || null == t || !n || (0, f.NK)(t)) return null;
        let l = () => {
            p.A.ackUserGuildJoinRequest(e.id, t.joinRequestId)
        };
        return (0, i.jsx)(d.aFV, {
            renderModal: t => (0, i.jsx)(I.A, {
                ...t,
                onAccept: l,
                guildName: e.name
            }),
            onCloseRequest: l
        })
    };
    render() {
        let {
            isFollowable: e,
            isLurking: t,
            notClaimed: n,
            notPhoneVerified: l,
            notEmailVerified: s,
            newMember: a,
            memberDeadline: r,
            newAccount: o,
            accountDeadline: c,
            theme: u,
            children: h,
            canSendMessages: m,
            channelFollowingUsersSeen: A,
            showLurkerModeUpsellPopout: g,
            showMemberVerificationModal: _,
            useReducedMotion: p,
            isStaff: f,
            guildJoinRequest: E,
            showLinkedLobbyApplicationLoadingIndicator: x,
            requiredLinkedLobbyApplication: S,
            pendingGameProfileReturn: I
        } = this.props, {
            shouldShowLurkerModeUpsellPopout: T,
            shouldShowLurkerModeSuccessPopout: N
        } = this.state, v = {
            theme: u,
            useReducedMotion: p
        };
        if (e && !m && null != I) null != I.gameIconUrl && (v.imageSrc = I.gameIconUrl), v.message = V.intl.format(V.t["qxH/YE"], {
            gameName: I.gameName
        }), v.buttonText = V.intl.string(V.t.DjifDP), v.buttonIcon = d.rJJ, v.buttonVariant = "primary", v.onButtonClick = I.onReturnToGameProfile;
        else if (e && !m) {
            if (v.message = V.intl.string(V.t.Hl0Mqh), null != A && A >= 1e3) {
                let e = 1e3 * Math.floor(A / 1e3);
                v.subtitle = V.intl.formatToPlainString(V.t.C5bgrC, {
                    count: e.toLocaleString()
                })
            }
            v.buttonText = V.intl.string(V.t["3aOv+h"]), v.onButtonClick = this.handleFollowAnnouncement, t && (v.onSecondaryButtonClick = this.handleJoinServer, v.secondaryButtonText = V.intl.string(V.t.RLch70))
        } else if (n) v.message = V.intl.string(V.t["Eg3/c9"]), v.buttonText = V.intl.string(V.t.fiNVin), v.onButtonClick = _ ? this.handleShowMemberVerification : this.handleClaimAccount;
        else if (_) switch (E?.applicationStatus) {
            case C.B5.SUBMITTED:
                v.message = V.intl.string(V.t["5iLvSx"]), v.subtitle = V.intl.string(V.t.FdsK4h), v.buttonText = V.intl.string(V.t.mqtdmQ), v.onButtonClick = this.handleCancelApplication;
                break;
            case C.B5.REJECTED:
                v.message = V.intl.string(V.t.lk30cY), v.buttonText = V.intl.string(V.t["8RrsHr"]), v.onButtonClick = this.handleViewApplicationRejection;
                break;
            default:
                v.message = V.intl.string(V.t.rEBKvg), v.buttonText = V.intl.string(V.t["r8/DT+"]), v.buttonVariant = "primary", v.onButtonClick = this.handleShowMemberVerification
        } else x || null == S ? l && !f ? (v.message = V.intl.string(V.t["2dThMM"]), v.buttonText = V.intl.string(V.t["50gfOv"]), v.onButtonClick = this.handleVerifyPhone) : s ? (v.message = V.intl.string(V.t.FkGPS5), v.buttonText = V.intl.string(V.t.lm1UKt), v.onButtonClick = this.handleResendVerification) : a ? (v.message = V.intl.formatToPlainString(V.t.IH7RMF, {
            min: F.$8o.MEMBER_AGE
        }), v.countdown = r) : o && (v.message = V.intl.formatToPlainString(V.t["2JA2GH"], {
            min: F.$8o.ACCOUNT_AGE
        }), v.countdown = c) : (v.imageSrc = S.getIconURL(H.iu.SMALL) ?? void 0, v.message = V.intl.format(V.t.EvDn1D, {
            name: S.name
        }), null != S.connectionEntrypointUrl && (v.buttonText = V.intl.string(V.t.S0W8Z5), v.onButtonClick = () => {
            window.open(S.connectionEntrypointUrl, "_blank")
        }));
        return (0, i.jsx)(d.YNO, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: N,
            onRequestClose: () => this.setState({
                shouldShowLurkerModeSuccessPopout: !1
            }),
            renderPopout: this.renderSuccessPopout,
            children: e => (0, i.jsx)(G.A, {
                ...v,
                children: (0, i.jsxs)("div", {
                    ref: this.textAreaContainerRef,
                    children: [this.renderMemberVerificationSuccessModal(), g ? (0, i.jsx)(d.YNO, {
                        targetElementRef: this.upsellTargetRef,
                        renderPopout: this.renderLurkerModeUpsellPopout,
                        shouldShow: T,
                        position: "top",
                        children: e => (0, i.jsx)(d.DUT, {
                            innerRef: this.upsellTargetRef,
                            ...e,
                            className: W._,
                            onClick: this.handleTextAreaClick,
                            children: h
                        })
                    }) : h]
                })
            })
        })
    }
}

function z(e) {
    let {
        channel: t,
        children: n
    } = e, l = t.getGuildId(), s = (0, r.bG)([D.A], () => D.A.getGuild(l)), a = (0, r.bG)([O.A], () => O.A.getCheck(l)), o = t.type === F.rbe.GUILD_ANNOUNCEMENT && null != s && s.features.has(F.GuildFeatures.NEWS), c = (0, r.bG)([M.A], () => o ? M.A.getFollowerStatsForChannel(t.id) : null), d = (0, r.bG)([N.A], () => N.A.isLurking(l)), u = (0, r.bG)([w.default], () => w.default.getCurrentUser()), h = u?.isStaff() ?? !1, m = (0, r.bG)([L.Ay], () => null != u && (L.Ay.getMember(l, u.id)?.isPending ?? !1)), g = !!(0, x.Qd)(s), p = (0, r.bG)([T.A], () => T.A.shouldShowPopout(l)), f = (0, r.bG)([P.A], () => P.A.can(F.xBc.SEND_MESSAGES, t)), E = (0, r.bG)([S.A], () => S.A.getRequest(l)), {
        showLinkedLobbyApplicationLoadingIndicator: I,
        requiredLinkedLobbyApplication: v
    } = (0, k.A)(t.linkedLobby), y = (0, _.A)({
        channelId: t.id
    }), b = {
        ...a,
        guild: s,
        isLurking: d,
        isFollowable: o,
        shouldShowLurkerModeSuccessPopout: p,
        showLurkerModeUpsellPopout: d && null != s && U.MJ(F.xBc.SEND_MESSAGES, t),
        theme: R.A.theme,
        canSendMessages: f,
        channelFollowingUsersSeen: null != c ? c.usersSeenEver : null,
        hasVerificationGate: g,
        showMemberVerificationModal: m && g,
        guildJoinRequestStatus: E?.applicationStatus ?? C.B5.STARTED,
        guildJoinRequest: E,
        showLinkedLobbyApplicationLoadingIndicator: I,
        requiredLinkedLobbyApplication: v,
        useReducedMotion: A.A.useReducedMotion,
        isStaff: h,
        pendingGameProfileReturn: y
    };
    return (0, i.jsx)(K, {
        ...b,
        channel: t,
        children: n
    })
}