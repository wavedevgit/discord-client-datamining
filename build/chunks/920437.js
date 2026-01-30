/** chunk id: 920437, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => q
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(311907),
    o = n(139033),
    c = n(314116),
    u = n(397927),
    d = n(830215),
    h = n(857182),
    p = n(686956),
    g = n(775602),
    f = n(315982),
    m = n(624458),
    b = n(821124),
    A = n(202384),
    y = n(513461),
    O = n(709977),
    _ = n(212455),
    j = n(466244),
    x = n(158476),
    v = n(857071),
    E = n(552227),
    C = n(698405),
    S = n(557722),
    I = n(976860),
    N = n(544028),
    T = n(560010),
    P = n(696451),
    w = n(71393),
    R = n(834942),
    D = n(576705),
    L = n(287809),
    M = n(488926),
    G = n(137577),
    k = n(786051),
    U = n(652215),
    V = n(360469),
    B = n(53516),
    H = n(985018),
    F = n(32385);

function K(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            K(e, t, n[t])
        })
    }
    return e
}

function W(e, t) {
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
class z extends l.PureComponent {
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
            showMemberVerificationModal: r
        } = this.props;
        r || e.shouldShowLurkerModeSuccessPopout || !t || null == n || this.setState({
            shouldShowLurkerModeSuccessPopout: !0
        })
    }
    render() {
        let {
            isFollowable: e,
            isLurking: t,
            notClaimed: n,
            notPhoneVerified: l,
            notEmailVerified: i,
            newMember: s,
            memberDeadline: a,
            newAccount: o,
            accountDeadline: c,
            theme: d,
            children: h,
            canSendMessages: p,
            channelFollowingUsersSeen: g,
            showLurkerModeUpsellPopout: f,
            showMemberVerificationModal: m,
            useReducedMotion: b,
            isStaff: A,
            guildJoinRequest: O,
            showLinkedLobbyApplicationLoadingIndicator: _,
            requiredLinkedLobbyApplication: j
        } = this.props, {
            shouldShowLurkerModeUpsellPopout: x,
            shouldShowLurkerModeSuccessPopout: v
        } = this.state, E = {
            theme: d,
            useReducedMotion: b
        };
        if (e && !p) {
            if (E.message = H.intl.string(H.t.Hl0Mqh), null != g && g >= 1e3) {
                let e = 1e3 * Math.floor(g / 1e3);
                E.subtitle = H.intl.formatToPlainString(H.t.C5bgrC, {
                    count: e.toLocaleString()
                })
            }
            E.buttonText = H.intl.string(H.t["3aOv+h"]), E.onButtonClick = this.handleFollowAnnouncement, t && (E.onSecondaryButtonClick = this.handleJoinServer, E.secondaryButtonText = H.intl.string(H.t.RLch70))
        } else if (n) E.message = H.intl.string(H.t["Eg3/c9"]), E.buttonText = H.intl.string(H.t.fiNVin), E.onButtonClick = m ? this.handleShowMemberVerification : this.handleClaimAccount;
        else if (m) switch (null == O ? void 0 : O.applicationStatus) {
                case y.B5.SUBMITTED:
                    E.message = H.intl.string(H.t["5iLvSx"]), E.subtitle = H.intl.string(H.t.FdsK4h), E.buttonText = H.intl.string(H.t.mqtdmQ), E.onButtonClick = this.handleCancelApplication;
                    break;
                case y.B5.REJECTED:
                    E.message = H.intl.string(H.t.lk30cY), E.buttonText = H.intl.string(H.t["8RrsHr"]), E.onButtonClick = this.handleViewApplicationRejection;
                    break;
                default:
                    E.message = H.intl.string(H.t.rEBKvg), E.buttonText = H.intl.string(H.t["r8/DT+"]), E.buttonVariant = "primary", E.onButtonClick = this.handleShowMemberVerification
            } else if (_ || null == j) l && !A ? (E.message = H.intl.string(H.t["2dThMM"]), E.buttonText = H.intl.string(H.t["50gfOv"]), E.onButtonClick = this.handleVerifyPhone) : i ? (E.message = H.intl.string(H.t.FkGPS5), E.buttonText = H.intl.string(H.t.lm1UKt), E.onButtonClick = this.handleResendVerification) : s ? (E.message = H.intl.formatToPlainString(H.t.IH7RMF, {
                min: U.$8o.MEMBER_AGE
            }), E.countdown = a) : o && (E.message = H.intl.formatToPlainString(H.t["2JA2GH"], {
                min: U.$8o.ACCOUNT_AGE
            }), E.countdown = c);
            else {
                var C;
                E.imageSrc = null != (C = j.getIconURL(V.iu.SMALL)) ? C : void 0, E.message = H.intl.format(H.t.EvDn1D, {
                    name: j.name
                }), null != j.connectionEntrypointUrl && (E.buttonText = H.intl.string(H.t.S0W8Z5), E.onButtonClick = () => {
                    window.open(j.connectionEntrypointUrl, "_blank")
                })
            } return (0, r.jsx)(u.YNO, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: v,
            onRequestClose: () => this.setState({
                shouldShowLurkerModeSuccessPopout: !1
            }),
            renderPopout: this.renderSuccessPopout,
            children: e => (0, r.jsx)(k.A, W(Y({}, E), {
                children: (0, r.jsxs)("div", {
                    ref: this.textAreaContainerRef,
                    children: [this.renderMemberVerificationSuccessModal(), f ? (0, r.jsx)(u.YNO, {
                        targetElementRef: this.upsellTargetRef,
                        renderPopout: this.renderLurkerModeUpsellPopout,
                        shouldShow: x,
                        position: "top",
                        children: e => (0, r.jsx)(u.DUT, W(Y({
                            innerRef: this.upsellTargetRef
                        }, e), {
                            className: F._,
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
        }), K(this, "textAreaContainerRef", l.createRef()), K(this, "upsellTargetRef", l.createRef()), K(this, "renderSuccessPopout", e => {
            let {
                closePopout: t
            } = e, {
                guild: n
            } = this.props;
            return s()(null != n, "This guildID cannot be null"), (0, r.jsx)(E.A, {
                onClose: t,
                guild: n
            })
        }), K(this, "handleCancelApplication", () => {
            let {
                guild: e
            } = this.props;
            null != e && (0, c.A)({
                title: H.intl.string(H.t.aIz1oV),
                subtitle: H.intl.string(H.t["13tjTU"]),
                variant: "primary",
                confirmText: H.intl.string(H.t["cY+Oob"]),
                onConfirm: () => m.A.removeGuildJoinRequest(e.id)
            })
        }), K(this, "handleViewApplicationRejection", () => {
            let {
                guild: e
            } = this.props;
            null != e && (0, u.mMO)(async () => {
                let {
                    default: t
                } = await n.e("37548").then(n.bind(n, 856103));
                return n => (0, r.jsx)(t, Y({
                    guildId: e.id
                }, n))
            })
        }), K(this, "handleShowMemberVerification", () => {
            let {
                guild: e
            } = this.props;
            null != e && (0, A.Ze)(e.id)
        }), K(this, "handleClaimAccount", () => {
            f.R()
        }), K(this, "handleVerifyPhone", () => {
            (0, u.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("84704"), n.e("45668")]).then(n.bind(n, 615715));
                return t => (0, r.jsx)(e, Y({
                    reason: S.d.GUILD_PHONE_REQUIRED
                }, t))
            }, {
                modalKey: B.V
            })
        }), K(this, "handleResendVerification", () => {
            var e;
            d.A.verifyResend();
            let t = null == (e = L.default.getCurrentUser()) ? void 0 : e.email;
            null != t && (0, o.A)({
                title: H.intl.string(H.t.LykQYk),
                subtitle: H.intl.format(H.t.azKEPy, {
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
                    source: U.Q4z.CHAT_INPUT_BLOCKER
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
                return n => (0, r.jsx)(t, Y({
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
            return s()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, r.jsx)(C.A, {
                type: C.w.CHAT,
                guild: e,
                closePopout: this.closeLurkerModeUpsellPopout
            })
        }), K(this, "renderMemberVerificationSuccessModal", () => {
            let {
                guild: e,
                guildJoinRequest: t
            } = this.props, n = (null == t ? void 0 : t.applicationStatus) === y.B5.APPROVED;
            if (null == e || null == t || !n || (0, b.NK)(t)) return null;
            let l = () => {
                m.A.ackUserGuildJoinRequest(e.id, t.joinRequestId)
            };
            return (0, r.jsx)(u.aFV, {
                renderModal: t => (0, r.jsx)(j.A, W(Y({}, t), {
                    onAccept: l,
                    guildName: e.name
                })),
                onCloseRequest: l
            })
        })
    }
}

function q(e) {
    var t, n;
    let {
        channel: l,
        children: i
    } = e, s = l.getGuildId(), o = (0, a.bG)([w.A], () => w.A.getGuild(s)), c = (0, a.bG)([R.A], () => R.A.getCheck(s)), u = l.type === U.rbe.GUILD_ANNOUNCEMENT && null != o && o.features.has(U.GuildFeatures.NEWS), d = (0, a.bG)([T.A], () => u ? T.A.getFollowerStatsForChannel(l.id) : null), h = (0, a.bG)([v.A], () => v.A.isLurking(s)), p = (0, a.bG)([L.default], () => L.default.getCurrentUser()), f = null != (t = null == p ? void 0 : p.isStaff()) && t, m = (0, a.bG)([P.Ay], () => {
        var e, t;
        return null != p && null != (e = null == (t = P.Ay.getMember(s, p.id)) ? void 0 : t.isPending) && e
    }), b = !!(0, O.Qd)(o), A = (0, a.bG)([x.A], () => x.A.shouldShowPopout(s)), j = (0, a.bG)([D.A], () => D.A.can(U.xBc.SEND_MESSAGES, l)), E = (0, a.bG)([_.A], () => _.A.getRequest(s)), {
        showLinkedLobbyApplicationLoadingIndicator: C,
        requiredLinkedLobbyApplication: S
    } = (0, G.A)(l.linkedLobby), I = W(Y({}, c), {
        guild: o,
        isLurking: h,
        isFollowable: u,
        shouldShowLurkerModeSuccessPopout: A,
        showLurkerModeUpsellPopout: h && null != o && M.MJ(U.xBc.SEND_MESSAGES, l),
        theme: N.A.theme,
        canSendMessages: j,
        channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
        hasVerificationGate: b,
        showMemberVerificationModal: m && b,
        guildJoinRequestStatus: null != (n = null == E ? void 0 : E.applicationStatus) ? n : y.B5.STARTED,
        guildJoinRequest: E,
        showLinkedLobbyApplicationLoadingIndicator: C,
        requiredLinkedLobbyApplication: S,
        useReducedMotion: g.A.useReducedMotion,
        isStaff: f
    });
    return (0, r.jsx)(z, W(Y({}, I), {
        channel: l,
        children: i
    }))
}