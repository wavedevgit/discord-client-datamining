/** chunk id: 756369 params = (module,exports,require) **/
n.d(t, {
    Ay: () => e0,
    OC: () => e1,
    iV: () => e$
}), n(938796);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(448761),
    o = n(665260),
    d = n(311907),
    c = n(803805),
    u = n(52133),
    _ = n(397927),
    m = n(843472),
    h = n(488331),
    p = n(298481),
    g = n(121401),
    A = n(509282),
    x = n(909338),
    f = n(948729),
    C = n(150099),
    I = n(871751),
    E = n(510790),
    v = n(167189),
    b = n(175335),
    T = n(390248),
    y = n(282108),
    S = n(33358),
    N = n(704400),
    j = n(496376),
    L = n(795982),
    R = n(643612),
    P = n(613760),
    w = n(229527),
    D = n(870136),
    M = n(33525),
    k = n(484724),
    O = n(71755),
    U = n(178879),
    B = n(118331),
    G = n(520586),
    F = n(857071),
    H = n(384231),
    V = n(46054),
    q = n(731068),
    W = n(619517),
    Y = n(207133),
    z = n(480191),
    Q = n(269849),
    K = n(704413),
    X = n(695206),
    J = n(892742),
    Z = n(376708),
    $ = n(549527),
    ee = n(899894),
    et = n(581034),
    en = n(50777),
    ei = n(378058),
    er = n(443642),
    ea = n(406704),
    el = n(996522),
    es = n(253932),
    eo = n(383233),
    ed = n(961350),
    ec = n(696451),
    eu = n(834942),
    e_ = n(576705),
    em = n(287809),
    eh = n(644447),
    ep = n(954571),
    eg = n(927813),
    eA = n(659674),
    ex = n(661191),
    ef = n(998218),
    eC = n(988012),
    eI = n(294520),
    eE = n(141468),
    ev = n(863439),
    eb = n(869938),
    eT = n(143413),
    ey = n(707985),
    eS = n(443228),
    eN = n(341645),
    ej = n(986350),
    eL = n(439401),
    eR = n(466802),
    eP = n(990560),
    ew = n(266620),
    eD = n(860227),
    eM = n(564107),
    ek = n(763899),
    eO = n(652176),
    eU = n(382807),
    eB = n(394839),
    eG = n(96782),
    eF = n(573163),
    eH = n(861986),
    eV = n(937266),
    eq = n(343552),
    eW = n(581619),
    eY = n(652215),
    ez = n(985018),
    eQ = n(867525);
let eK = [eY.Auw.GIFV],
    eX = 15 * eg.A.Millis.MINUTE,
    eJ = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    eZ = e => () => {
        let {
            url: t,
            proxyUrl: n,
            width: r,
            height: a,
            flags: l
        } = e, s = (0, o.Lt)(l, q.e5.IS_ANIMATED);
        return null != r && null != a && (W.bp.test(n) || s && (W.P8.test(n) || W.p4.test(n))) ? (0, i.jsx)(eL.A, {
            width: r,
            height: a,
            src: n,
            url: t,
            format: c.TL.IMAGE,
            className: eQ.jj
        }) : null
    };
class e$ extends r.Component {
    static defaultProps = {
        renderEmbeds: !0,
        compact: !1
    };
    state = {
        showSuppressModal: !1,
        showRemoveAttachmentModal: !1,
        attachmentToDelete: null
    };
    getAcceptInviteContext = e => {
        let {
            channel: t,
            message: n
        } = this.props;
        return {
            location: e,
            location_guild_id: t.getGuildId(),
            location_channel_id: t.id,
            location_channel_type: t.type,
            location_message_id: n.id
        }
    };
    shouldRenderInvite(e) {
        let {
            channel: t
        } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eJ.has(e))
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let {
            channel: r,
            message: a,
            poll: l
        } = this.props, {
            channel: s,
            message: o,
            poll: d
        } = e;
        return !(0, u.A)(this.state, t) || !(0, u.A)(this.props, e, ["message", "channel"]) || r.type !== s.type || d !== l || o.codedLinks !== a.codedLinks || o.flags !== a.flags || o.giftCodes !== a.giftCodes || o.attachments !== a.attachments || o.embeds !== a.embeds || o.components !== a.components || o.activity !== a.activity || (n = o.reactions) !== (i = a.reactions) && (n.length !== i.length || !!n.some((e, t) => {
            let {
                emoji: n,
                count: r,
                burst_count: a
            } = e, {
                emoji: l,
                count: s,
                burst_count: o
            } = i[t];
            return a !== o || r !== s || n.id !== l.id || n.name !== l.name
        }))
    }
    renderCtaButton() {
        let {
            message: e,
            channel: t,
            ctaButtonType: n
        } = this.props, r = null;
        switch (n) {
            case eC.xC.MARK_AS_FALSE_POSITIVE:
                r = (0, i.jsx)(j.A, {
                    messageId: e.id,
                    channelId: t.id
                });
                break;
            case eC.xC.AGE_VERIFICATION_RETRY:
                r = (0, i.jsx)(p.A, {
                    channelId: t.id
                });
                break;
            default:
                return null
        }
        return (0, i.jsx)("div", {
            className: eQ.od,
            children: r
        })
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
            let {
                type: n,
                code: r,
                url: a
            } = t;
            if (n === v.I.INVITE) return this.shouldRenderInvite(r) ? (0, i.jsx)(eP.A, {
                code: r,
                message: e,
                getAcceptInviteContext: this.getAcceptInviteContext
            }, r) : null;
            if (n === v.I.TEMPLATE) return (0, i.jsx)(O.A, {
                code: r
            }, r);
            if (n === v.I.EVENT) return (0, i.jsx)(k.A, {
                code: r
            }, r);
            if (n === v.I.CHANNEL_LINK) return (0, i.jsx)(eS.A, {
                code: r,
                message: e
            }, r);
            if (n === v.I.APP_DIRECTORY_PROFILE) return (0, i.jsx)(P.A, {
                code: r,
                message: e
            }, r);
            else if (n === v.I.ACTIVITY_BOOKMARK) {
                let {
                    referrerId: t = e.author.id,
                    customId: n,
                    linkId: l
                } = (0, x.N)(a);
                return (0, i.jsx)(h.A, {
                    applicationId: r,
                    message: e,
                    referrerId: t,
                    customId: n,
                    linkId: l
                }, r)
            } else if (n === v.I.GUILD_PRODUCT) return (0, i.jsx)(M.A, {
                code: r
            }, r);
            else if (n === v.I.SERVER_SHOP) return (0, i.jsx)(b.A, {
                guildId: r
            }, r);
            else if (n === v.I.SOCIAL_LAYER_STOREFRONT) {
                let [e, t] = r.split("-"), {
                    channel: n
                } = this.props;
                return (0, i.jsx)(en.A, {
                    guildId: t,
                    skuId: e,
                    channel: n
                }, r)
            } else if (n === v.I.QUESTS_EMBED) return (0, i.jsx)(J.A, {
                questId: r
            }, r);
            else if (n === v.I.APP_DIRECTORY_STOREFRONT) return (0, i.jsx)(A.G, {
                appId: r,
                message: e
            }, r);
            else if (n === v.I.APP_DIRECTORY_STOREFRONT_SKU) {
                let t = (0, g.u)(r);
                return null == t ? null : (0, i.jsx)(A.$, {
                    appId: t.applicationId,
                    skuId: t.skuId,
                    message: e
                }, r)
            } else if (n === v.I.APP_OAUTH2_LINK) return (0, i.jsx)(f.A, {
                applicationId: r,
                message: e
            }, r);
            else if (n === v.I.COLLECTIBLES_SHOP) return null;
            else if (n === v.I.EXPERIMENT) return null;
            else throw Error(`Unknown coded link type: ${n}`)
        })
    }
    renderGiftCodes(e) {
        let {
            giftCodes: t,
            author: n,
            channel_id: r,
            type: a,
            content: l,
            giftInfo: s
        } = e, o = em.default.getCurrentUser();
        return null != o && t.length > 0 ? t.map(e => (0, i.jsx)("div", {
            className: eQ.zv,
            children: (0, i.jsx)(eR.A, {
                code: e,
                author: n,
                channelId: r,
                currentUser: o,
                type: a,
                content: l,
                giftInfo: s
            })
        }, e)) : null
    }
    renderReactions(e) {
        let {
            disableReactionCreates: t,
            disableReactionReads: n,
            disableReactionUpdates: r,
            isLurking: a,
            isPendingMember: l,
            channel: s,
            forceAddReactions: o
        } = this.props;
        return n ? null : (0, i.jsx)(eF.A, {
            message: e,
            channel: s,
            disableReactionCreates: t,
            disableReactionUpdates: r,
            isLurking: a,
            isPendingMember: l,
            forceAddReactions: o,
            useChatFontScaling: !0
        })
    }
    renderAttachments(e) {
        let {
            channel: t,
            gifAutoPlay: n,
            canDeleteAttachments: r,
            inlineAttachmentMedia: a,
            onMediaItemContextMenu: l,
            enabledContentHarmTypeFlags: s,
            shouldHideMediaOptions: d
        } = this.props, {
            attachments: c,
            flags: u
        } = e;
        if (0 === c.length || e.isPoll() || (0, eo._c)(e)) return null;
        let _ = c.filter(e => null == e.flags || !(0, o.Lt)(e.flags, eY.sbO.IS_THUMBNAIL));
        if (0 === _.length) return null;
        let m = _.map(t => ({
                ...(0, q.Rr)(t, e),
                original: t.url,
                srcIsAnimated: (0, o.Lt)(t.flags ?? 0, eY.sbO.IS_ANIMATED)
            })).filter(e => "INVALID" !== e.type),
            {
                srcToOnClickOverride: h,
                srcToHandlePreloadImage: p
            } = (0, Q.o)(m, {
                enabledContentHarmTypeFlags: s,
                shouldHideMediaOptions: d
            }, "Media Mosaic"),
            g = m.length > 1,
            A = (0, o.Lt)(u, eY.pr7.IS_VOICE_MESSAGE);

        function x(e, t) {
            return (0, eI.iW)(e.originalItem, t)
        }
        let f = _.map(i => {
            let s = (0, q.aG)(i),
                o = {
                    message: e,
                    item: (0, eG.rC)(i, a),
                    autoPlayGif: n,
                    canRemoveItem: r && (_.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: x,
                    onContextMenu: null != l ? e => {
                        e.stopPropagation(), e.preventDefault(), l(e, s)
                    } : void 0,
                    renderAudioComponent: A ? ew.SX : ew.Nj,
                    renderImageComponent: ew.Cr,
                    renderVideoComponent: ew.I1,
                    renderPlaintextFilePreview: ew.R6,
                    renderGenericFileComponent: ew.UB,
                    renderMosaicItemFooter: ew.YE,
                    onPlay: (e, n, r) => {
                        ep.default.track(eY.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: i.content_type,
                            flags: i.flags,
                            size: i.size,
                            duration: r
                        })
                    },
                    gifFavoriteButton: eZ(s)
                },
                d = (0, eh.E)({
                    proxyURL: i.proxy_url,
                    url: i.url
                });
            return d in h && g && (o.onClick = h[d], o.handlePreloadImage = p[d]), o
        });
        return (0, i.jsx)(eB.A, {
            items: f
        })
    }
    renderEmbed = (e, t, n, r) => {
        let {
            gifAutoPlay: a,
            inlineEmbedMedia: l,
            canSuppressEmbeds: s,
            hasSpoilerEmbeds: o,
            enabledContentHarmTypeFlags: d,
            shouldAgeVerify: c
        } = this.props, u = (0, eI.sC)(e, r, o, d);
        if (e.type === eY.Auw.GIFT) return null;
        let _ = eK.includes(e.type) ? e.url : e.image?.url ?? e.video?.url;
        return (0, i.jsx)(R.G.Provider, {
            value: (0, eq.b)(_, e.image, e.video, e.thumbnail, e.provider?.name),
            children: (0, i.jsx)(I.Ay, {
                embed: e,
                obscureReason: u ?? void 0,
                autoPlayGif: a,
                hideMedia: !l,
                allowFullScreen: !this.props.disableComponentInteractivity,
                onSuppressEmbed: s ? this.handleEmbedSuppressed : void 0,
                renderTitle: this.renderEmbedTitle,
                renderDescription: this.renderEmbedDescription,
                message: r,
                embedIndex: t,
                shouldAgeVerify: c ?? !1,
                ...n
            })
        }, e.id)
    };
    renderEmbedTitle = (e, t) => e.type !== eY.Auw.RICH ? t : (null != e.url && "" !== e.url ? V.A.parseEmbedTitleWithoutLinks : V.A.parseEmbedTitle)(t, !0, {
        channelId: this.props.channel.id
    });
    renderEmbedDescription = (e, t, n) => e.type === eY.Auw.RICH ? V.A.parse(t, !0, {
        channelId: this.props.channel.id,
        allowLinks: !0,
        allowEmojiLinks: !0,
        allowList: this.props.showListsAndHeaders,
        allowHeading: !n && this.props.showListsAndHeaders,
        previewLinkTarget: this.props.showMaskedLinks
    }) : t;
    handleEmbedSuppressed = e => {
        let {
            channel: t,
            message: n
        } = this.props;
        e.shiftKey ? m.A.suppressEmbeds(t.id, n.id) : this.setState({
            showSuppressModal: !0
        })
    };
    handleRemoveAttachment = e => {
        let t = e.originalItem;
        this.setState({
            showRemoveAttachmentModal: !0,
            attachmentToDelete: t
        })
    };
    renderEmbeds(e) {
        let {
            renderEmbeds: t,
            hasBailedAst: n
        } = this.props;
        return 0 === e.embeds.length || !t || n ? null : e.embeds.map((t, n) => {
            if (eW.z.has(t.type) || (0, eA.p6)(t) || (0, U.f)(t) && !(0, B.d)(e) || (0, eA.V)(t) || (0, eA.G8)(t)) return null;
            let r = {
                renderImageComponent: eO.LL,
                renderVideoComponent: eO.$o,
                renderLinkComponent: eO.bU
            };
            if (t.type === eY.Auw.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
                let a = ef.A.safeParseWithQuery(t.url);
                if (null != a && null != a.pathname) {
                    let l = a.pathname.split("/")[3];
                    if (null != l) return (0, i.jsx)(eV.A, {
                        skuId: l,
                        renderFallback: () => this.renderEmbed(t, n, r, e)
                    }, t.id)
                }
            }
            return this.renderEmbed(t, n, r, e)
        })
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: r,
            disableComponentInteractivity: a,
            onMediaItemContextMenu: l
        } = this.props;
        return (0, i.jsx)(eM.N, {
            gifAutoPlay: t,
            getGifFavButton: eZ,
            getOnMediaItemContextMenu: null == l ? void 0 : e => t => {
                t.stopPropagation(), t.preventDefault(), l?.(t, e)
            },
            shouldHideMediaOptions: r,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(G.Ay, {
                message: e,
                shouldDisableInteractiveComponents: a
            })
        })
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let {
            channel: t
        } = this.props;
        return (0, i.jsx)(ek.A, {
            channel: t,
            message: e,
            hideParty: !1
        })
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eY.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot ? null : (0, i.jsx)(C.A, {
            channelId: e.channel_id,
            messageId: e.id
        })
    }
    renderEphemeralAccessories(e) {
        return (0, eE.ec)(e) ? (0, i.jsx)(ej.A, {
            message: e,
            onDeleteMessage: () => {
                m.A.dismissAutomatedMessage(e)
            }
        }) : null
    }
    renderStickersAccessories(e) {
        let t = (0, ei.o6)(e),
            {
                channel: n,
                isInteracting: r
            } = this.props;
        return 0 === t.length ? null : t.map(e => (0, i.jsx)(er.A, {
            channel: n,
            isInteracting: r,
            renderableSticker: e
        }, e.id))
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eY.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, i.jsx)(el.A, {
            message: e,
            compact: this.props.compact
        })
    }
    renderThreadRoleMentionWarning(e) {
        if (e.hasFlag(eY.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && this.props.isCurrentUser && !(Date.now() - ex.default.extractTimestamp(e.id) >= eX)) return (0, i.jsx)("div", {
            className: eQ.xM,
            children: ez.intl.string(ez.t.ma8Rs0)
        })
    }
    renderSuppressConfirmModal() {
        let {
            channel: e,
            message: t
        } = this.props;
        return (0, i.jsxs)(_.MJ3, {
            dismissable: !0,
            header: ez.intl.string(ez.t.VL1KOk),
            confirmText: ez.intl.string(ez.t.YEHppG),
            cancelText: ez.intl.string(ez.t["ETE/oC"]),
            onCancel: () => this.setState({
                showSuppressModal: !1
            }),
            onConfirm: () => {
                m.A.suppressEmbeds(e.id, t.id), this.setState({
                    showSuppressModal: !1
                })
            },
            children: [(0, i.jsx)(_.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: eQ.IX,
                children: ez.intl.string(ez.t["vXZ+Fo"])
            }), (0, i.jsx)(_.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: ez.intl.string(ez.t["5j2by3"])
            })]
        })
    }
    renderRemoveAttachmentConfirmModal() {
        let {
            channel: e,
            message: t
        } = this.props, {
            attachmentToDelete: n
        } = this.state;
        return null == n ? void this.setState({
            showRemoveAttachmentModal: !1
        }) : (0, i.jsx)(_.MJ3, {
            dismissable: !0,
            header: ez.intl.string(ez.t.CbTIEo),
            confirmText: ez.intl.string(ez.t.kFwAsa),
            cancelText: ez.intl.string(ez.t["ETE/oC"]),
            onCancel: () => this.setState({
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null
            }),
            onConfirm: () => {
                let i = t.attachments.filter(e => e.id !== n.id);
                m.A.patchMessageAttachments(e.id, t.id, i), this.setState({
                    showRemoveAttachmentModal: !1,
                    attachmentToDelete: null
                })
            },
            children: (0, i.jsx)(_.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: eQ.IX,
                children: ez.intl.string(ez.t.faHmO3)
            })
        })
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== s.l.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, i.jsx)(eU.A, {
            applicationId: t,
            guildId: this.props.channel.guild_id
        })
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let {
            application: t,
            activityInstance: n
        } = e;
        return null == t || null == n ? null : (0, i.jsx)(eN.A, {
            application: t,
            channelId: this.props.channel.id,
            guildId: this.props.channel.guild_id,
            message: e
        })
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap(t => t.type !== eY.Auw.POST_PREVIEW || null == t.url ? [] : (0, i.jsx)(z.A, {
            embedUrl: t.url,
            message: e,
            channel: this.props.channel
        }, t.id))
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eY.Auw.SAFETY_POLICY_NOTICE ? (0, i.jsx)(ee.V, {
            message: e
        }) : null
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eY.Auw.SAFETY_SYSTEM_NOTIFICATION ? (0, i.jsx)(et.l, {
            embed: e.embeds[0]
        }) : null
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, y.KM)(e) ? (0, i.jsx)(N.A, {
            message: e
        }) : null
    }
    renderPoll(e, t) {
        if (null != t) return (0, i.jsx)(X.A, {
            message: e,
            poll: t,
            className: eQ.PM
        })
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, i.jsx)(E.f, {
            message: e
        }) : null
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, Z.Mn)(e, this.props.channel)) return (0, i.jsx)($.A, {
            message: e
        })
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, Z.Mn)(e, this.props.channel)) return (0, i.jsx)(L.A, {
            message: e
        })
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(eH.A, {
            message: e,
            compact: t,
            location: eH.O.AFTER_ACCESSORIES
        })
    }
    render() {
        let {
            className: e,
            message: t,
            poll: n,
            compact: r
        } = this.props, {
            showSuppressModal: a,
            showRemoveAttachmentModal: s
        } = this.state, o = this.renderEditedTag(t, r), d = this.renderCodedLinks(t), c = this.renderGiftCodes(t), u = this.renderAttachments(t), _ = this.renderCtaButton(), m = this.renderEmbeds(t), h = this.renderActivityInvite(t), p = this.renderReactions(t), g = this.renderPublishBump(t), A = this.renderEphemeralAccessories(t), x = this.renderStickersAccessories(t), f = this.renderThreadAccessories(t), C = this.renderComponentAccessories(t), I = this.renderThreadRoleMentionWarning(t), E = this.renderEmbeddedApplicationInstanceEmbed(t), v = this.renderInteractionPremiumUpsell(t), b = this.renderMediaPostEmbeds(t), T = this.renderSafetyPolicyNotice(t), y = this.renderSafetySystemNotification(t), S = this.renderMediaObscureNotice(t), N = this.renderPoll(t, n), j = this.renderForwardedMessage(t), L = this.renderReportedMessage(t), R = this.renderShareClientTheme(t);
        return null == d && null == u && null == m && null == h && null == p && null == c && null == g && null == A && null == x && null == f && null == C && null == E && null == I && null == b && null == T && null != v && null == N && null == j && null == L && null == R ? null : (0, i.jsxs)("div", {
            id: (0, eD.XL)(t),
            className: l()(e, eQ.kL),
            children: [L, j, I, N, R, d, c, b, u, _, m, S, h, x, C, E, v, o, p, g, A, a && this.renderSuppressConfirmModal(), s && this.renderRemoveAttachmentConfirmModal(), f, T, y]
        })
    }
}

function e0(e) {
    let {
        channel: t,
        message: n,
        renderSuppressEmbeds: r,
        isMessageSnapshot: a
    } = e, l = (0, d.bG)([ed.default], () => ed.default.getId()), s = es.X6.useSetting(), c = es.hD.useSetting(), u = es.rs.useSetting() && !(0, eT.A)(e.message), _ = es.jW.useSetting() && !1 !== e.renderReactions, m = es.kt.useSetting(), h = (0, d.bG)([eu.A], () => null == t.guild_id || eu.A.canChatInGuild(t.guild_id), [t]), p = (0, d.bG)([F.A], () => null != t.guild_id && F.A.isLurking(t.guild_id), [t]), g = (0, d.bG)([ec.Ay, em.default], () => {
        let e = em.default.getCurrentUser();
        return (null != t.guild_id && null != e ? ec.Ay.getMember(t.guild_id, e.id)?.isPending : null) ?? !1
    }), {
        canAddNewReactions: A,
        canManageMessages: x
    } = (0, d.cf)([e_.A], () => ({
        canAddNewReactions: h && e_.A.can(eY.xBc.ADD_REACTIONS, t),
        canManageMessages: e_.A.can(eY.xBc.MANAGE_MESSAGES, t)
    }), [h, t]), f = (0, w.ix)(t.guild_id), [, C] = (0, D.c)(t.guild_id), I = (0, ea.Id)(t), E = (l === n.author.id || x) && n.author.id !== eY.oIV && !1 !== r && !(0, o.Lt)(n.flags, eY.pr7.EPHEMERAL) && I && (0, eb.A)(n) >= 1, v = l === n.author.id && I && !a, b = n.author.id === l, y = n.isFirstMessageInForumPost(t), N = (0, ey.A)({
        channel: t,
        canChat: h,
        renderReactions: _,
        canAddNewReactions: A,
        isLurking: p,
        communicationDisabled: C,
        isActiveChannelOrUnarchivableThread: I,
        isAutomodQuarantined: f
    }), j = (0, H.S)((n.editedTimestamp ?? n.timestamp).valueOf()), L = (0, Y.A)(t?.id), R = (0, K.A)(n), P = (0, S.P)(n), M = (0, ev.z)(t), k = (0, eC._f)(n.id, n.channel_id), O = (0, T._R)();
    return (0, i.jsx)(e$, {
        canSuppressEmbeds: E,
        canDeleteAttachments: v,
        ...N,
        disableReactionReads: !!y || N.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && M,
        hasBailedAst: e.hasBailedAst,
        isLurking: p && h,
        isPendingMember: g && h,
        isCurrentUser: b,
        inlineAttachmentMedia: s,
        inlineEmbedMedia: c,
        renderEmbeds: u,
        gifAutoPlay: m,
        canRenderReferralEmbed: t.isDM(),
        poll: R,
        showListsAndHeaders: j,
        showMaskedLinks: j,
        shouldHideMediaOptions: L,
        enabledContentHarmTypeFlags: P,
        ctaButtonType: k,
        shouldAgeVerify: O
    })
}
let e1 = e => {
    let {
        message: t,
        channel: n,
        disableReactionReads: r = !1,
        renderThreadAccessory: a = !1,
        disableReactionCreates: l = !0,
        disableReactionUpdates: s = !0,
        disableComponentInteractivity: o = !0,
        ...d
    } = e, c = es.X6.useSetting(), u = es.hD.useSetting(), _ = es.rs.useSetting(), m = es.kt.useSetting(), h = (0, H.S)((t.editedTimestamp ?? t.timestamp).valueOf()), p = (0, Y.A)(n?.id), g = (0, S.P)(t), A = (0, eC._f)(t.id, t.channel_id), x = (0, K.A)(t);
    return (0, i.jsx)(e$, {
        ...d,
        message: t,
        channel: n,
        disableReactionReads: r,
        disableReactionCreates: l,
        disableReactionUpdates: s,
        disableComponentInteractivity: o,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: a,
        inlineAttachmentMedia: c,
        inlineEmbedMedia: u,
        renderEmbeds: _,
        gifAutoPlay: m,
        poll: x,
        showListsAndHeaders: h,
        showMaskedLinks: h,
        shouldHideMediaOptions: p,
        enabledContentHarmTypeFlags: g,
        ctaButtonType: A
    })
}