/** chunk id: 951727 params = (module,exports,require) **/
n.d(t, {
    Ay: () => j,
    Ej: () => S,
    Ls: () => y,
    j8: () => N
}), n(801541);
var i = n(889137),
    r = n(966974),
    l = n(775602),
    a = n(508675),
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
    E = n(589590),
    I = n(708676),
    b = n(652215),
    T = n(985018);
let v = {
    channelId: b.dJq,
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
    let r = e.state === b.cmJ.SENT,
        l = r ? n ?? (0, I.J)(i.expiry) : "",
        a = null == l && r,
        {
            selectedAnswerIds: s,
            submitting: m,
            editing: h,
            showResults: p
        } = t ?? (0, A.xt)(e.getChannelId(), e.id) ?? v,
        g = e.reactions,
        x = !0;
    if (!y(e)) {
        let t = _.A.getMessage(e.channel_id, e.id);
        x = !e.isSearchHit && null != t, g = t?.reactions ?? g
    }
    let f = s.size > 0,
        C = g.some(e => !0 === e.me_vote),
        E = !h && C,
        T = E || a || p,
        S = r && x && (!C || h || T),
        N = c.A.getChannel(e.getChannelId())?.getGuildId?.(),
        j = null != N ? u.Ay.getSelfMember(N) : null,
        L = (0, o.TR)(j),
        R = (0, d.Z)(j),
        P = !m && f && !E && r && !L && !R;
    return {
        poll: i,
        canTapAnswers: S,
        canRemoveVote: E && r && !a,
        canShowVoteCounts: T,
        canSubmitVote: P,
        expirationLabel: l,
        hasSelectedAnswer: f,
        hasVoted: E,
        hasVoteRecorded: C,
        isEditingVote: h,
        isExpired: a,
        isInteractive: x,
        isSent: r,
        reactions: g,
        selectedAnswerIds: s,
        submitting: m,
        tapShouldOpenVotersModal: T,
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
    let A = l.A.useReducedMotion,
        I = c.A.getChannel(e.getChannelId())?.getGuildId?.(),
        b = (0, C.T)(_, I),
        v = u.answers,
        y = u.layout_type,
        j = N(e, t, {
            formattedExpirationLabel: d
        });
    if (null == j) return;
    let {
        canTapAnswers: L,
        canRemoveVote: R,
        canShowVoteCounts: P,
        canSubmitVote: M,
        expirationLabel: w = T.intl.string(T.t["e+J3JZ"]),
        hasSelectedAnswer: O,
        hasVoted: D,
        isEditingVote: k,
        isExpired: U,
        isInteractive: G,
        reactions: B,
        selectedAnswerIds: F,
        submitting: H,
        tapShouldOpenVotersModal: V,
        showResults: W
    } = j, q = (0, x.aw)(B), Y = T.intl.formatToPlainString(T.t.XRkuof, {
        count: q
    }), z = Math.max(...v.map(e => {
        let t = S(B, `${e.answer_id}`);
        return t?.count_details?.vote ?? 0
    })), Q = v.map(e => {
        let t, l = `${e.answer_id}`,
            o = S(B, l),
            d = o?.count_details?.vote ?? 0,
            c = 0 === q ? 0 : d / q,
            u = F.has(l),
            _ = d >= z && 0 !== d,
            m = D && (o?.me_vote ?? !1),
            g = (t = {
                didSelfVote: m,
                hasVoted: D,
                isExpired: U,
                isSelected: u,
                isLeader: _,
                showResults: W
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
            answerId: l,
            pollMedia: {
                text: e.poll_media.text,
                emoji: function(e) {
                    let {
                        animateEmoji: t = !1,
                        size: n = 48
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (null == e) return;
                    let i = e.animated;
                    null == i && null != e.id && (i = a.Ay.getCustomEmojiById(e.id)?.animated ?? !1);
                    let r = t && (i ?? !1);
                    return {
                        id: null == e.id ? null : `${e.id}`,
                        name: e.name,
                        displayName: null == e.id ? s.Ay.convertSurrogateToName(e.name) : e.name,
                        src: null == e.id ? p.Ay.getURL(e.name) : h.Ay.getEmojiURL({
                            id: e.id,
                            animated: r,
                            size: n
                        }),
                        animated: r
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
            votes: (0, i.YW)(y).with(r.Z.IMAGE_ONLY_ANSWERS, () => `(${d.toLocaleString()})`).otherwise(() => T.intl.formatToPlainString(T.t.XRkuof, {
                count: d
            }))
        }
    }), K = (0, i.YW)({
        isExpired: U,
        canSubmitVote: M,
        hasVoted: D,
        isEditingVote: k,
        canRemoveVote: R,
        isInteractive: G,
        showResults: W
    }).with({
        isInteractive: !1
    }, () => void 0).with({
        isExpired: !0
    }, () => void 0).with({
        isEditingVote: !0
    }, () => ({
        label: T.intl.string(T.t.JwkNU4),
        presentation: "button",
        enabled: O,
        type: "submit"
    })).with({
        canRemoveVote: !0
    }, () => ({
        label: T.intl.string(T.t.XhQEh8),
        presentation: "secondaryButton",
        enabled: !0,
        type: "remove"
    })).with({
        hasVoted: !1,
        showResults: !0
    }, () => ({
        label: T.intl.string(T.t.gNj6In),
        presentation: "secondaryButton",
        enabled: !0,
        type: "showVotes"
    })).otherwise(() => ({
        label: T.intl.string(T.t.JwkNU4),
        presentation: "button",
        enabled: M,
        type: "submit"
    })), J = (0, g.isIOS)() ? T.intl.string(T.t["PVATM/"]) : T.intl.string(T.t.cHfFql), X = (0, i.YW)({
        isExpired: U,
        isInteractive: G,
        isEditingVote: k
    }).with({
        isInteractive: !1,
        isExpired: !1
    }, () => ({
        label: T.intl.string(T.t.trrip0),
        presentation: "text",
        enabled: !1
    })).with({
        isEditingVote: !0
    }, () => ({
        label: T.intl.string(T.t["ETE/oC"]),
        presentation: "textButton",
        enabled: !0,
        type: "cancel"
    })).otherwise(() => ({
        label: Y,
        secondaryLabel: w,
        accessibilityHint: J,
        presentation: "text",
        enabled: !0,
        type: "showVoterDetails"
    })), Z = !G || U || D || W ? void 0 : {
        label: T.intl.string(T.t["/KHAUF"]),
        presentation: "textButton",
        enabled: !0,
        type: "showVotes"
    }, $ = u.allow_multiselect, ee = (0, i.YW)({
        isInteractive: G,
        isExpired: U,
        canSelectMultipleAnswers: $
    }).with({
        isInteractive: !1
    }, () => void 0).with({
        isExpired: !0
    }, () => void 0).with({
        canSelectMultipleAnswers: !0
    }, () => T.intl.string(T.t.yCXvxa)).otherwise(() => T.intl.string(T.t["9Y2wKO"]));
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
        resources: (0, E.A)({
            theme: o,
            layoutType: y
        }),
        containerStyle: "normal",
        primaryAction: K,
        isInteractive: G,
        canTapAnswers: L,
        canSelectMultipleAnswers: $,
        hasSelectedAnswer: O,
        canShowVoteCounts: P,
        hasVoted: D,
        isExpired: U,
        myAvatarUrl: b,
        secondaryAction: X,
        tertiaryAction: Z
    }
}