/** chunk id: 951727 params = (module,exports,require) **/
n.d(t, {
    Ay: () => j,
    Ej: () => S,
    Ls: () => y,
    j8: () => N
}), n(801541);
var i = n(889137),
    a = n(966974),
    r = n(775602),
    l = n(508675),
    s = n(7584),
    o = n(229527),
    d = n(316031),
    c = n(734057),
    u = n(696451),
    _ = n(320501),
    m = n(287809),
    h = n(486020),
    p = n(690521),
    g = n(723702),
    A = n(862780),
    x = n(969632),
    f = n(438437),
    C = n(842901),
    I = n(589590),
    E = n(708676),
    v = n(652215),
    b = n(985018);
let T = {
    channelId: v.dJq,
    selectedAnswerIds: new Set,
    submitting: !1,
    editing: !1,
    showResults: !1
};

function S(e, t) {
    for (let n of e)
        if (("number" == typeof n.emoji.id ? `${n.emoji.id}` : n.emoji.id) === t) return n
}

function y(e) {
    return null == e.poll || _.A.getMessage(e.channel_id, e.id) === e
}

function N(e, t) {
    let {
        formattedExpirationLabel: n
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
        poll: i
    } = e;
    if (null == i) return;
    let a = e.state === v.cmJ.SENT,
        r = a ? n ?? (0, E.J)(i.expiry) : "",
        l = null == r && a,
        {
            selectedAnswerIds: s,
            submitting: m,
            editing: h,
            showResults: p
        } = t ?? (0, A.xt)(e.getChannelId(), e.id) ?? T,
        g = e.reactions,
        x = !0;
    if (!y(e)) {
        let t = _.A.getMessage(e.channel_id, e.id);
        x = !e.isSearchHit && null != t, g = t?.reactions ?? g
    }
    let f = s.size > 0,
        C = g.some(e => !0 === e.me_vote),
        I = !h && C,
        b = I || l || p,
        S = a && x && (!C || h || b),
        N = c.A.getChannel(e.getChannelId())?.getGuildId?.(),
        j = null != N ? u.Ay.getSelfMember(N) : null,
        L = (0, o.TR)(j),
        R = (0, d.Z)(j),
        P = !m && f && !I && a && !L && !R;
    return {
        poll: i,
        canTapAnswers: S,
        canRemoveVote: I && a && !l,
        canShowVoteCounts: b,
        canSubmitVote: P,
        expirationLabel: r,
        hasSelectedAnswer: f,
        hasVoted: I,
        hasVoteRecorded: C,
        isEditingVote: h,
        isExpired: l,
        isInteractive: x,
        isSent: a,
        reactions: g,
        selectedAnswerIds: s,
        submitting: m,
        tapShouldOpenVotersModal: b,
        showResults: p
    }
}

function j(e, t) {
    let {
        animateEmoji: n = !1,
        theme: o = "dark",
        formattedExpirationLabel: d
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
        poll: u
    } = e;
    if (null == u) return;
    let _ = m.default.getCurrentUser();
    if (null == _) return;
    let A = r.A.useReducedMotion,
        E = c.A.getChannel(e.getChannelId())?.getGuildId?.(),
        v = (0, C.T)(_, E),
        T = u.answers,
        y = u.layout_type,
        j = N(e, t, {
            formattedExpirationLabel: d
        });
    if (null == j) return;
    let {
        canTapAnswers: L,
        canRemoveVote: R,
        canShowVoteCounts: P,
        canSubmitVote: w,
        expirationLabel: D = b.intl.string(b.t["e+J3JZ"]),
        hasSelectedAnswer: M,
        hasVoted: k,
        isEditingVote: O,
        isExpired: U,
        isInteractive: B,
        reactions: G,
        selectedAnswerIds: F,
        submitting: H,
        tapShouldOpenVotersModal: V,
        showResults: q
    } = j, W = (0, x.aw)(G), z = b.intl.formatToPlainString(b.t.XRkuof, {
        count: W
    }), Y = Math.max(...T.map(e => {
        let t = S(G, `${e.answer_id}`);
        return t?.count_details?.vote ?? 0
    })), Q = T.map(e => {
        let t, r = `${e.answer_id}`,
            o = S(G, r),
            d = o?.count_details?.vote ?? 0,
            c = 0 === W ? 0 : d / W,
            u = F.has(r),
            _ = d >= Y && 0 !== d,
            m = k && (o?.me_vote ?? !1),
            g = (t = {
                didSelfVote: m,
                hasVoted: k,
                isExpired: U,
                isSelected: u,
                isLeader: _,
                showResults: q
            }, (0, i.YW)(t).with({
                isExpired: !0,
                isLeader: !0,
                didSelfVote: !0
            }, () => "victorSelected").with({
                isExpired: !0,
                isLeader: !0,
                didSelfVote: !1
            }, () => "victorNotSelected").with({
                isExpired: !0,
                didSelfVote: !0
            }, () => "loserSelected").with({
                isExpired: !0
            }, () => "notVoted").with({
                didSelfVote: !0,
                isExpired: !1
            }, () => "voted").with({
                hasVoted: !0,
                isExpired: !1
            }, () => "notVoted").with({
                isSelected: !0
            }, () => "selected").with({
                isExpired: !1,
                showResults: !0
            }, () => "notVoted").otherwise(() => "normalVote"));
        return {
            answerId: r,
            pollMedia: {
                text: e.poll_media.text,
                emoji: function(e) {
                    let {
                        animateEmoji: t = !1,
                        size: n = 48
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (null == e) return;
                    let i = e.animated;
                    null == i && null != e.id && (i = l.Ay.getCustomEmojiById(e.id)?.animated ?? !1);
                    let a = t && (i ?? !1);
                    return {
                        id: null == e.id ? null : `${e.id}`,
                        name: e.name,
                        displayName: null == e.id ? s.Ay.convertSurrogateToName(e.name) : e.name,
                        src: null == e.id ? p.Ay.getURL(e.name) : h.Ay.getEmojiURL({
                            id: e.id,
                            animated: a,
                            size: n
                        }),
                        animated: a
                    }
                }(e.poll_media.emoji, {
                    animateEmoji: n
                }),
                stickerId: e.poll_media.sticker_id,
                attachmentIds: e.poll_media.attachment_ids
            },
            isSelected: u,
            isVictor: U && _,
            didSelfVote: m,
            style: g,
            shouldAnimateTransition: H && !A,
            votesPercentage: Math.round(100 * c),
            votes: (0, i.YW)(y).with(a.Z.IMAGE_ONLY_ANSWERS, () => `(${d.toLocaleString()})`).otherwise(() => b.intl.formatToPlainString(b.t.XRkuof, {
                count: d
            }))
        }
    }), K = (0, i.YW)({
        isExpired: U,
        canSubmitVote: w,
        hasVoted: k,
        isEditingVote: O,
        canRemoveVote: R,
        isInteractive: B,
        showResults: q
    }).with({
        isInteractive: !1
    }, () => void 0).with({
        isExpired: !0
    }, () => void 0).with({
        isEditingVote: !0
    }, () => ({
        label: b.intl.string(b.t.JwkNU4),
        presentation: "button",
        enabled: M,
        type: "submit"
    })).with({
        canRemoveVote: !0
    }, () => ({
        label: b.intl.string(b.t.XhQEh8),
        presentation: "secondaryButton",
        enabled: !0,
        type: "remove"
    })).with({
        hasVoted: !1,
        showResults: !0
    }, () => ({
        label: b.intl.string(b.t.gNj6In),
        presentation: "secondaryButton",
        enabled: !0,
        type: "showVotes"
    })).otherwise(() => ({
        label: b.intl.string(b.t.JwkNU4),
        presentation: "button",
        enabled: w,
        type: "submit"
    })), J = (0, g.isIOS)() ? b.intl.string(b.t["PVATM/"]) : b.intl.string(b.t.cHfFql), X = (0, i.YW)({
        isExpired: U,
        isInteractive: B,
        isEditingVote: O
    }).with({
        isInteractive: !1,
        isExpired: !1
    }, () => ({
        label: b.intl.string(b.t.trrip0),
        presentation: "text",
        enabled: !1
    })).with({
        isEditingVote: !0
    }, () => ({
        label: b.intl.string(b.t["ETE/oC"]),
        presentation: "textButton",
        enabled: !0,
        type: "cancel"
    })).otherwise(() => ({
        label: z,
        secondaryLabel: D,
        accessibilityHint: J,
        presentation: "text",
        enabled: !0,
        type: "showVoterDetails"
    })), Z = !B || U || k || q ? void 0 : {
        label: b.intl.string(b.t["/KHAUF"]),
        presentation: "textButton",
        enabled: !0,
        type: "showVotes"
    }, $ = u.allow_multiselect, ee = (0, i.YW)({
        isInteractive: B,
        isExpired: U,
        canSelectMultipleAnswers: $
    }).with({
        isInteractive: !1
    }, () => void 0).with({
        isExpired: !0
    }, () => void 0).with({
        canSelectMultipleAnswers: !0
    }, () => b.intl.string(b.t.yCXvxa)).otherwise(() => b.intl.string(b.t["9Y2wKO"]));
    return {
        question: u.question,
        promptLabel: ee,
        answers: Q,
        answersInteraction: (0, i.YW)({
            tapShouldOpenVotersModal: V,
            canTapAnswers: L,
            canSelectMultipleAnswers: $
        }).with({
            tapShouldOpenVotersModal: !0
        }, () => f.CQ.LIST).with({
            canTapAnswers: !1
        }, () => f.CQ.LIST).with({
            canSelectMultipleAnswers: !1
        }, () => f.CQ.RADIO_BUTTONS).with({
            canSelectMultipleAnswers: !0
        }, () => f.CQ.CHECKBOXES).exhaustive(),
        answerTapAccessibilityLabel: V ? J : void 0,
        layoutType: y,
        resources: (0, I.A)({
            theme: o,
            layoutType: y
        }),
        containerStyle: "normal",
        primaryAction: K,
        isInteractive: B,
        canTapAnswers: L,
        canSelectMultipleAnswers: $,
        hasSelectedAnswer: M,
        canShowVoteCounts: P,
        hasVoted: k,
        isExpired: U,
        myAvatarUrl: v,
        secondaryAction: X,
        tertiaryAction: Z
    }
}