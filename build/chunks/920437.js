/** chunk id: 920437, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => Y
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(311907),
    o = n(139033),
    c = n(314116),
    u = n(397927),
    d = n(830215),
    h = n(857182),
    p = n(686956),
    f = n(775602),
    m = n(315982),
    g = n(624458),
    A = n(821124),
    b = n(202384),
    _ = n(513461),
    y = n(709977),
    v = n(212455),
    E = n(466244),
    O = n(158476),
    C = n(857071),
    x = n(552227),
    S = n(698405),
    j = n(557722),
    I = n(976860),
    T = n(544028),
    N = n(560010),
    P = n(696451),
    w = n(71393),
    R = n(834942),
    D = n(576705),
    M = n(287809),
    L = n(488926),
    k = n(137577),
    U = n(786051),
    G = n(652215),
    F = n(360469),
    H = n(53516),
    B = n(985018),
    V = n(32385);

function K(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            K(e, t, n[t])
        })
    }
    return e
}

function z(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
class q extends r.PureComponent {
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
            showMemberVerificationModal: l
        } = this.props;
        l || e.shouldShowLurkerModeSuccessPopout || !t || null == n || this.setState({
            shouldShowLurkerModeSuccessPopout: !0
        })
    }
    render() {
        let {
            isFollowable: e,
            isLurking: t,
            notClaimed: n,
            notPhoneVerified: r,
            notEmailVerified: i,
            newMember: a,
            memberDeadline: s,
            newAccount: o,
            accountDeadline: c,
            theme: d,
            children: h,
            canSendMessages: p,
            channelFollowingUsersSeen: f,
            showLurkerModeUpsellPopout: m,
            showMemberVerificationModal: g,
            useReducedMotion: A,
            isStaff: b,
            guildJoinRequest: y,
            showLinkedLobbyApplicationLoadingIndicator: v,
            requiredLinkedLobbyApplication: E
        } = this.props, {
            shouldShowLurkerModeUpsellPopout: O,
            shouldShowLurkerModeSuccessPopout: C
        } = this.state, x = {
            theme: d,
            useReducedMotion: A
        };
        if (e && !p) {
            if (x.message = B.intl.string(B.t.Hl0Mqh), null != f && f >= 1e3) {
                let e = 1e3 * Math.floor(f / 1e3);
                x.subtitle = B.intl.formatToPlainString(B.t.C5bgrC, {
                    count: e.toLocaleString()
                })
            }
            x.buttonText = B.intl.string(B.t["3aOv+h"]), x.onButtonClick = this.handleFollowAnnouncement, t && (x.onSecondaryButtonClick = this.handleJoinServer, x.secondaryButtonText = B.intl.string(B.t.RLch70))
        } else if (n) x.message = B.intl.string(B.t["Eg3/c9"]), x.buttonText = B.intl.string(B.t.fiNVin), x.onButtonClick = g ? this.handleShowMemberVerification : this.handleClaimAccount;
        else if (g) switch (null == y ? void 0 : y.applicationStatus) {
                case _.B5.SUBMITTED:
                    x.message = B.intl.string(B.t["5iLvSx"]), x.subtitle = B.intl.string(B.t.FdsK4h), x.buttonText = B.intl.string(B.t.mqtdmQ), x.onButtonClick = this.handleCancelApplication;
                    break;
                case _.B5.REJECTED:
                    x.message = B.intl.string(B.t.lk30cY), x.buttonText = B.intl.string(B.t["8RrsHr"]), x.onButtonClick = this.handleViewApplicationRejection;
                    break;
                default:
                    x.message = B.intl.string(B.t.rEBKvg), x.buttonText = B.intl.string(B.t["r8/DT+"]), x.buttonVariant = "primary", x.onButtonClick = this.handleShowMemberVerification
            } else if (v || null == E) r && !b ? (x.message = B.intl.string(B.t["2dThMM"]), x.buttonText = B.intl.string(B.t["50gfOv"]), x.onButtonClick = this.handleVerifyPhone) : i ? (x.message = B.intl.string(B.t.FkGPS5), x.buttonText = B.intl.string(B.t.lm1UKt), x.onButtonClick = this.handleResendVerification) : a ? (x.message = B.intl.formatToPlainString(B.t.IH7RMF, {
                min: G.$8o.MEMBER_AGE
            }), x.countdown = s) : o && (x.message = B.intl.formatToPlainString(B.t["2JA2GH"], {
                min: G.$8o.ACCOUNT_AGE
            }), x.countdown = c);
            else {
                var S;
                x.imageSrc = null != (S = E.getIconURL(F.iu.SMALL)) ? S : void 0, x.message = B.intl.format(B.t.EvDn1D, {
                    name: E.name
                }), null != E.connectionEntrypointUrl && (x.buttonText = B.intl.string(B.t.S0W8Z5), x.onButtonClick = () => {
                    window.open(E.connectionEntrypointUrl, "_blank")
                })
            } return (0, l.jsx)(u.YNO, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: C,
            onRequestClose: () => this.setState({
                shouldShowLurkerModeSuccessPopout: !1
            }),
            renderPopout: this.renderSuccessPopout,
            children: e => (0, l.jsx)(U.A, z(W({}, x), {
                children: (0, l.jsxs)("div", {
                    ref: this.textAreaContainerRef,
                    children: [this.renderMemberVerificationSuccessModal(), m ? (0, l.jsx)(u.YNO, {
                        targetElementRef: this.upsellTargetRef,
                        renderPopout: this.renderLurkerModeUpsellPopout,
                        shouldShow: O,
                        position: "top",
                        children: e => (0, l.jsx)(u.DUT, z(W({
                            innerRef: this.upsellTargetRef
                        }, e), {
                            className: V._,
                            onClick: this.handleTextAreaClick,
                            children: h
                        }))
                    }) : h]
                })
            }))
        })
    }
    constructor(...e) {
        super(...e), K(this, "state", {
            submitting: !1,
            shouldShowLurkerModeUpsellPopout: !1,
            shouldShowLurkerModeSuccessPopout: !1
        }), K(this, "textAreaContainerRef", r.createRef()), K(this, "upsellTargetRef", r.createRef()), K(this, "renderSuccessPopout", e => {
            let {
                closePopout: t
            } = e, {
                guild: n
            } = this.props;
            return a()(null != n, "This guildID cannot be null"), (0, l.jsx)(x.A, {
                onClose: t,
                guild: n
            })
        }), K(this, "handleCancelApplication", () => {
            let {
                guild: e
            } = this.props;
            null != e && (0, c.A)({
                title: B.intl.string(B.t.aIz1oV),
                subtitle: B.intl.string(B.t["13tjTU"]),
                variant: "primary",
                confirmText: B.intl.string(B.t["cY+Oob"]),
                onConfirm: () => g.A.removeGuildJoinRequest(e.id)
            })
        }), K(this, "handleViewApplicationRejection", () => {
            let {
                guild: e
            } = this.props;
            null != e && (0, u.mMO)(async () => {
                let {
                    default: t
                } = await n.e("37548").then(n.bind(n, 856103));
                return n => (0, l.jsx)(t, W({
                    guildId: e.id
                }, n))
            })
        }), K(this, "handleShowMemberVerification", () => {
            let {
                guild: e
            } = this.props;
            null != e && (0, b.Ze)(e.id)
        }), K(this, "handleClaimAccount", () => {
            m.R()
        }), K(this, "handleVerifyPhone", () => {
            (0, u.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("84704"), n.e("45668")]).then(n.bind(n, 615715));
                return t => (0, l.jsx)(e, W({
                    reason: j.d.GUILD_PHONE_REQUIRED
                }, t))
            }, {
                modalKey: H.V
            })
        }), K(this, "handleResendVerification", () => {
            var e;
            d.A.verifyResend();
            let t = null == (e = M.default.getCurrentUser()) ? void 0 : e.email;
            null != t && (0, o.A)({
                title: B.intl.string(B.t.LykQYk),
                subtitle: B.intl.format(B.t.azKEPy, {
                    email: t
                })
            })
        }), K(this, "handleTextAreaClick", () => {
            let {
                showLurkerModeUpsellPopout: e
            } = this.props;
            this.setState({
                shouldShowLurkerModeUpsellPopout: e
            })
        }), K(this, "handleJoinServer", async () => {
            this.setState({
                submitting: !0
            });
            let e = this.props.channel.getGuildId();
            try {
                await p.A.joinGuild(e, {
                    source: G.Q4z.CHAT_INPUT_BLOCKER
                })
            } catch (e) {
                this.setState({
                    submitting: !1
                })
            }
        }), K(this, "handleGoBack", () => {
            this.setState({
                submitting: !0
            }), (0, I.JK)().goBack()
        }), K(this, "handleFollowAnnouncement", () => {
            let {
                channel: e
            } = this.props;
            (0, u.mMO)(async () => {
                let {
                    default: t
                } = await n.e("66464").then(n.bind(n, 464035));
                return n => (0, l.jsx)(t, W({
                    channel: e
                }, n))
            })
        }), K(this, "closeLurkerModeUpsellPopout", () => {
            this.setState({
                shouldShowLurkerModeUpsellPopout: !1
            })
        }), K(this, "renderLurkerModeUpsellPopout", () => {
            let {
                guild: e
            } = this.props;
            return a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, l.jsx)(S.A, {
                type: S.w.CHAT,
                guild: e,
                closePopout: this.closeLurkerModeUpsellPopout
            })
        }), K(this, "renderMemberVerificationSuccessModal", () => {
            let {
                guild: e,
                guildJoinRequest: t
            } = this.props, n = (null == t ? void 0 : t.applicationStatus) === _.B5.APPROVED;
            if (null == e || null == t || !n || (0, A.NK)(t)) return null;
            let r = () => {
                g.A.ackUserGuildJoinRequest(e.id, t.joinRequestId)
            };
            return (0, l.jsx)(u.aFV, {
                renderModal: t => (0, l.jsx)(E.A, z(W({}, t), {
                    onAccept: r,
                    guildName: e.name
                })),
                onCloseRequest: r
            })
        })
    }
}

function Y(e) {
    var t, n;
    let {
        channel: r,
        children: i
    } = e, a = r.getGuildId(), o = (0, s.bG)([w.A], () => w.A.getGuild(a)), c = (0, s.bG)([R.A], () => R.A.getCheck(a)), u = r.type === G.rbe.GUILD_ANNOUNCEMENT && null != o && o.features.has(G.GuildFeatures.NEWS), d = (0, s.bG)([N.A], () => u ? N.A.getFollowerStatsForChannel(r.id) : null), h = (0, s.bG)([C.A], () => C.A.isLurking(a)), p = (0, s.bG)([M.default], () => M.default.getCurrentUser()), m = null != (t = null == p ? void 0 : p.isStaff()) && t, g = (0, s.bG)([P.Ay], () => {
        var e, t;
        return null != p && null != (e = null == (t = P.Ay.getMember(a, p.id)) ? void 0 : t.isPending) && e
    }), A = !!(0, y.Qd)(o), b = (0, s.bG)([O.A], () => O.A.shouldShowPopout(a)), E = (0, s.bG)([D.A], () => D.A.can(G.xBc.SEND_MESSAGES, r)), x = (0, s.bG)([v.A], () => v.A.getRequest(a)), {
        showLinkedLobbyApplicationLoadingIndicator: S,
        requiredLinkedLobbyApplication: j
    } = (0, k.A)(r.linkedLobby), I = z(W({}, c), {
        guild: o,
        isLurking: h,
        isFollowable: u,
        shouldShowLurkerModeSuccessPopout: b,
        showLurkerModeUpsellPopout: h && null != o && L.MJ(G.xBc.SEND_MESSAGES, r),
        theme: T.A.theme,
        canSendMessages: E,
        channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
        hasVerificationGate: A,
        showMemberVerificationModal: g && A,
        guildJoinRequestStatus: null != (n = null == x ? void 0 : x.applicationStatus) ? n : _.B5.STARTED,
        guildJoinRequest: x,
        showLinkedLobbyApplicationLoadingIndicator: S,
        requiredLinkedLobbyApplication: j,
        useReducedMotion: f.A.useReducedMotion,
        isStaff: m
    });
    return (0, l.jsx)(q, z(W({}, I), {
        channel: r,
        children: i
    }))
}