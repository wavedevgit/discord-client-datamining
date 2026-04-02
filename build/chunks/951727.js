/** chunk id: 951727 params = (module,exports,require) **/
n.d(t, {
    Ay: () => j,
    Ej: () => N,
    Ls: () => S,
    j8: () => y
}), n(801541);
var i = n(889137),
    l = n(966974),
    s = n(775602),
    r = n(508675),
    a = n(7584),
    o = n(229527),
    d = n(316031),
    c = n(734057),
    u = n(696451),
    m = n(320501),
    _ = n(287809),
    h = n(486020),
    p = n(690521),
    g = n(723702),
    A = n(862780),
    x = n(969632),
    f = n(438437),
    C = n(842901),
    E = n(589590),
    I = n(708676),
    v = n(652215),
    b = n(985018);
let T = {
    channelId: v.dJq,
    selectedAnswerIds: new Set,
    submitting: !1,
    editing: !1,
    showResults: !1
};

function N(e, t) {
    for (let n of e)
        if (("number" == typeof n.emoji.id ? `${n.emoji.id}` : n.emoji.id) === t) return n
}

function S(e) {
    return null == e.poll || m.A.getMessage(e.channel_id, e.id) === e
}

function y(e, t) {
    let {
        formattedExpirationLabel: n
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
        poll: i
    } = e;
    if (null == i) return;
    let l = e.state === v.cmJ.SENT,
        s = l ? n ?? (0, I.J)(i.expiry) : "",
        r = null == s && l,
        {
            selectedAnswerIds: a,
            submitting: _,
            editing: h,
            showResults: p
        } = t ?? (0, A.xt)(e.getChannelId(), e.id) ?? T,
        g = e.reactions,
        x = !0;
    if (!S(e)) {
        let t = m.A.getMessage(e.channel_id, e.id);
        x = !e.isSearchHit && null != t, g = t?.reactions ?? g
    }
    let f = a.size > 0,
        C = g.some(e => !0 === e.me_vote),
        E = !h && C,
        b = E || r || p,
        N = l && x && (!C || h || b),
        y = c.A.getChannel(e.getChannelId())?.getGuildId?.(),
        j = null != y ? u.Ay.getSelfMember(y) : null,
        L = (0, o.TR)(j),
        R = (0, d.Z)(j),
        P = !_ && f && !E && l && !L && !R;
    return {
        poll: i,
        canTapAnswers: N,
        canRemoveVote: E && l && !r,
        canShowVoteCounts: b,
        canSubmitVote: P,
        expirationLabel: s,
        hasSelectedAnswer: f,
        hasVoted: E,
        hasVoteRecorded: C,
        isEditingVote: h,
        isExpired: r,
        isInteractive: x,
        isSent: l,
        reactions: g,
        selectedAnswerIds: a,
        submitting: _,
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
    let m = _.default.getCurrentUser();
    if (null == m) return;
    let A = s.A.useReducedMotion,
        I = c.A.getChannel(e.getChannelId())?.getGuildId?.(),
        v = (0, C.T)(m, I),
        T = u.answers,
        S = u.layout_type,
        j = y(e, t, {
            formattedExpirationLabel: d
        });
    if (null == j) return;
    let {
        canTapAnswers: L,
        canRemoveVote: R,
        canShowVoteCounts: P,
        canSubmitVote: D,
        expirationLabel: M = b.intl.string(b.t["e+J3JZ"]),
        hasSelectedAnswer: w,
        hasVoted: O,
        isEditingVote: k,
        isExpired: U,
        isInteractive: B,
        reactions: G,
        selectedAnswerIds: F,
        submitting: H,
        tapShouldOpenVotersModal: V,
        showResults: q
    } = j, W = (0, x.aw)(G), Y = b.intl.formatToPlainString(b.t.XRkuof, {
        count: W
    }), z = Math.max(...T.map(e => {
        let t = N(G, `${e.answer_id}`);
        return t?.count_details?.vote ?? 0
    })), Q = T.map(e => {
        let t, s = `${e.answer_id}`,
            o = N(G, s),
            d = o?.count_details?.vote ?? 0,
            c = 0 === W ? 0 : d / W,
            u = F.has(s),
            m = d >= z && 0 !== d,
            _ = O && (o?.me_vote ?? !1),
            g = (t = {
                didSelfVote: _,
                hasVoted: O,
                isExpired: U,
                isSelected: u,
                isLeader: m,
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
            answerId: s,
            pollMedia: {
                text: e.poll_media.text,
                emoji: function(e) {
                    let {
                        animateEmoji: t = !1,
                        size: n = 48
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (null == e) return;
                    let i = e.animated;
                    null == i && null != e.id && (i = r.Ay.getCustomEmojiById(e.id)?.animated ?? !1);
                    let l = t && (i ?? !1);
                    return {
                        id: null == e.id ? null : `${e.id}`,
                        name: e.name,
                        displayName: null == e.id ? a.Ay.convertSurrogateToName(e.name) : e.name,
                        src: null == e.id ? p.Ay.getURL(e.name) : h.Ay.getEmojiURL({
                            id: e.id,
                            animated: l,
                            size: n
                        }),
                        animated: l
                    }
                }(e.poll_media.emoji, {
                    animateEmoji: n
                }),
                stickerId: e.poll_media.sticker_id,
                attachmentIds: e.poll_media.attachment_ids
            },
            isSelected: u,
            isVictor: U && m,
            didSelfVote: _,
            style: g,
            shouldAnimateTransition: H && !A,
            votesPercentage: Math.round(100 * c),
            votes: (0, i.YW)(S).with(l.Z.IMAGE_ONLY_ANSWERS, () => `(${d.toLocaleString()})`).otherwise(() => b.intl.formatToPlainString(b.t.XRkuof, {
                count: d
            }))
        }
    }), K = (0, i.YW)({
        isExpired: U,
        canSubmitVote: D,
        hasVoted: O,
        isEditingVote: k,
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
        enabled: w,
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
        enabled: D,
        type: "submit"
    })), J = (0, g.isIOS)() ? b.intl.string(b.t["PVATM/"]) : b.intl.string(b.t.cHfFql), X = (0, i.YW)({
        isExpired: U,
        isInteractive: B,
        isEditingVote: k
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
        label: Y,
        secondaryLabel: M,
        accessibilityHint: J,
        presentation: "text",
        enabled: !0,
        type: "showVoterDetails"
    })), Z = !B || U || O || q ? void 0 : {
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
        layoutType: S,
        resources: (0, E.A)({
            theme: o,
            layoutType: S
        }),
        containerStyle: "normal",
        primaryAction: K,
        isInteractive: B,
        canTapAnswers: L,
        canSelectMultipleAnswers: $,
        hasSelectedAnswer: w,
        canShowVoteCounts: P,
        hasVoted: O,
        isExpired: U,
        myAvatarUrl: v,
        secondaryAction: X,
        tertiaryAction: Z
    }
}