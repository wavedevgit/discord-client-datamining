/** chunk id: 180662 params = (module,exports,require) **/
n.d(t, {
    A: () => F,
    e: () => M
});
var i = n(284009),
    a = n.n(i),
    l = n(735438),
    s = n.n(l),
    r = n(966974),
    o = n(311907),
    d = n(582754),
    c = n(73153),
    u = n(157559),
    _ = n(686956),
    m = n(843472),
    h = n(198982),
    p = n(58149),
    g = n(857071),
    A = n(301169),
    x = n(505527),
    f = n(9842),
    C = n(961350),
    E = n(734057),
    I = n(31717),
    v = n(834942),
    b = n(320501),
    T = n(522602),
    y = n(491037),
    S = n(335759),
    N = n(862780),
    j = n(951727),
    L = n(652215),
    R = n(985018);

function P(e, t) {
    let n = [...t],
        i = 0,
        a = 0;
    for (let t of n) {
        let n = e?.find(e => e.answer_id === parseInt(t))?.poll_media;
        n?.text != null && (i += 1), n?.emoji != null && (a += 1)
    }
    return {
        analyticsSelectedAnswerIds: n,
        selectedTextAnswersCount: i,
        selectedEmojiAnswersCount: a
    }
}

function w(e) {
    let {
        guildId: t,
        title: n,
        body: i
    } = e;
    u.A.show({
        title: n,
        body: i,
        confirmText: R.intl.string(R.t["9VLmlZ"]),
        cancelText: R.intl.string(R.t["2m+Sqk"]),
        onConfirm: () => {
            _.A.joinGuild(t, {
                source: L.Q4z.POLL_ALERT
            })
        }
    })
}

function M(e) {
    let {
        channelId: t,
        messageId: n,
        answerId: i
    } = e, a = E.A.getChannel(t);
    if (null == a) return;
    if (g.A.isLurking(a.guild_id)) return void w({
        guildId: a.guild_id,
        title: R.intl.string(R.t["7LpysO"]),
        body: R.intl.string(R.t["5sHHoy"])
    });
    let l = b.A.getMessage(t, n);
    if (null == l || null == l.poll || 0 === l.poll.answers.length) return;
    let s = i ?? String(l.poll.answers[0].answer_id);
    y.W({
        message: l,
        initialAnswerId: s
    })
}

function D(e) {
    let {
        channelId: t,
        messageId: n,
        isEditing: i
    } = e;
    (0, N.A2)(t, n, e => ({
        channelId: t,
        selectedAnswerIds: new Set,
        submitting: !1,
        editing: i,
        showResults: e?.showResults ?? !1
    }))
}

function k(e) {
    let {
        channelId: t,
        messageId: n
    } = e, i = b.A.getMessage(t, n);
    return null == i ? [] : i.reactions.flatMap(e => !0 === e.me_vote ? e.emoji.name : [])
}
async function O(e) {
    let {
        channelId: t,
        messageId: n,
        answerIds: i
    } = e, a = k({
        channelId: t,
        messageId: n
    }), l = s().difference(a, i), r = s().difference(i, a), d = C.default.getId(), u = [...l.map(e => ({
        type: "MESSAGE_REACTION_REMOVE",
        id: e
    })), ...r.map(e => ({
        type: "MESSAGE_REACTION_ADD",
        id: e
    }))], _ = o.Ay.Emitter.batched(() => {
        let e;
        for (let {
                id: i,
                type: a
            }
            of u) e = c.h.dispatch({
            type: a,
            channelId: t,
            messageId: n,
            emoji: {
                id: i,
                name: i
            },
            userId: d,
            optimistic: !0,
            reactionType: x.v.VOTE
        });
        return e
    });
    null != _ && await _
}
async function U(e) {
    let {
        channelId: t,
        messageId: n
    } = e, i = E.A.getChannel(t);
    if (null == i) return;
    if (g.A.isLurking(i.guild_id)) return void w({
        guildId: i.guild_id,
        title: R.intl.string(R.t.Qic1FD),
        body: R.intl.string(R.t["5sHHoy"])
    });
    if (!v.A.canChatInGuild(i.guild_id)) return void u.A.show({
        title: R.intl.string(R.t.p245wu),
        body: R.intl.string(R.t["U/uodt"])
    });
    let l = (0, N.xt)(t, n);
    a()(null != l, "Must not be able to vote without existing state!");
    let s = k({
        channelId: t,
        messageId: n
    });
    try {
        let e = [...l.selectedAnswerIds.values()];
        (0, N.A2)(t, n, e => (a()(null != e, "Must not be able to vote without existing state!"), {
            ...e,
            submitting: !0,
            editing: !1
        })), await O({
            channelId: t,
            messageId: n,
            answerIds: e
        }), await S.Q({
            channelId: t,
            messageId: n,
            answerIds: e
        }), (0, N.A2)(t, n, () => void 0), d.OR.announce(0 === e.length ? R.intl.string(R.t["xcvy+3"]) : R.intl.string(R.t.o20GSo))
    } catch (e) {
        u.A.show({
            title: R.intl.string(R.t.iufib1),
            body: e.getAnyErrorMessage?.() ?? e.message ?? R.intl.string(R.t.eAn6z2)
        }), await O({
            channelId: t,
            messageId: n,
            answerIds: s
        }), (0, N.A2)(t, n, e => {
            if (null != e) return {
                ...e,
                submitting: !1,
                editing: !1
            }
        })
    }
}
async function B(e) {
    let {
        channelId: t,
        messageId: n
    } = e, i = E.A.getChannel(t);
    if (null != i) return g.A.isLurking(i.guild_id) ? void w({
        guildId: i.guild_id,
        title: R.intl.string(R.t.B9QnBp),
        body: R.intl.string(R.t.BVZCTn)
    }) : ((0, N.A2)(t, n, e => ({
        channelId: t,
        selectedAnswerIds: new Set,
        submitting: !1,
        editing: !1,
        showResults: e?.showResults ?? !1
    })), await U({
        channelId: t,
        messageId: n
    }))
}
async function G(e) {
    let {
        channelId: t,
        messageId: n,
        type: i
    } = e;
    switch (i) {
        case "submit":
            await U({
                channelId: t,
                messageId: n
            });
            break;
        case "remove":
            await B({
                channelId: t,
                messageId: n
            });
            break;
        case "cancel":
            D({
                channelId: t,
                messageId: n,
                isEditing: !1
            });
            break;
        case "showVotes":
            ! function(e) {
                let {
                    channelId: t,
                    messageId: n
                } = e;
                (0, N.A2)(t, n, e => {
                    let i = null == e || !e.showResults,
                        a = b.A.getMessage(t, n),
                        l = null != a ? a.reactions.reduce((e, t) => e + (t.count_details?.vote ?? 0), 0) : 0;
                    return p.Ay.trackWithMetadata(L.HAw.POLL_SHOW_RESULTS_CLICKED, {
                        channel_id: t,
                        message_id: n,
                        show_results: i,
                        votes_count: l
                    }), {
                        channelId: t,
                        selectedAnswerIds: new Set,
                        submitting: e?.submitting ?? !1,
                        editing: e?.submitting ?? !1,
                        showResults: i
                    }
                })
            }({
                channelId: t,
                messageId: n
            });
            break;
        case "showVoterDetails":
            M({
                channelId: t,
                messageId: n
            });
            break;
        default:
            a()(!1, `Unknown poll action type: ${i}`)
    }
}
let F = {
    handlePollAnswerTapped: function(e) {
        let {
            answerId: t,
            ...n
        } = e, {
            channelId: i,
            messageId: l,
            message: s
        } = function(e) {
            let {
                channelId: t,
                messageId: n
            } = e, i = b.A.getMessage(t, n);
            if (null != i) return {
                message: i,
                channelId: t,
                messageId: n
            };
            let l = f.A.getMessage(t, n);
            if (null != l.message) return {
                channelId: t,
                messageId: n,
                message: l.message
            };
            throw a()(null != i, "Tapped on a non-existent poll message"), Error()
        }(n), {
            tapShouldOpenVotersModal: r
        } = (0, j.j8)(s) ?? {};
        if (!0 === r) return void M({
            channelId: i,
            messageId: l,
            answerId: t
        });
        let o = s.poll?.allow_multiselect;
        (0, N.A2)(i, l, e => {
            if (null == e) {
                let e = new Set([t]),
                    {
                        analyticsSelectedAnswerIds: n,
                        selectedTextAnswersCount: a,
                        selectedEmojiAnswersCount: r
                    } = P(s.poll?.answers, e);
                return p.Ay.trackWithMetadata(L.HAw.POLL_VOTE_SELECTED, {
                    channel_id: i,
                    message_id: l,
                    selected_answer_ids: n,
                    selected_text_answers_count: a,
                    selected_emoji_answers_count: r
                }), {
                    channelId: i,
                    selectedAnswerIds: e,
                    submitting: !1,
                    editing: !1,
                    showResults: !1
                }
            }
            let n = {
                    ...e
                },
                a = new Set(n.selectedAnswerIds);
            if (n.selectedAnswerIds = a, a.has(t)) a.delete(t);
            else {
                if (!o)
                    for (let e of a) a.delete(e);
                a.add(t)
            }
            let {
                analyticsSelectedAnswerIds: r,
                selectedTextAnswersCount: d,
                selectedEmojiAnswersCount: c
            } = P(s.poll?.answers, a);
            return p.Ay.trackWithMetadata(L.HAw.POLL_VOTE_SELECTED, {
                channel_id: i,
                message_id: l,
                selected_answer_ids: r,
                selected_text_answers_count: d,
                selected_emoji_answers_count: c
            }), n
        })
    },
    handlePollSubmitVote: U,
    handleUpdateVoteEditingState: D,
    handlePollActionTapped: G,
    createPoll: async function(e) {
        let {
            channel: t,
            question: n,
            answers: i,
            allowMultiSelect: a,
            duration: l,
            layout: s,
            onClose: o
        } = e, d = T.A.getUploads(t.id, I.C.Poll), c = i.map(e => {
            let t = d?.findIndex(t => t.id === e.localCreationAnswerId),
                n = {
                    attachment_ids: -1 !== t ? [`${t}`] : void 0
                };
            s === r.Z.DEFAULT && (n.text = e.text?.trim());
            let i = e.image?.emoji;
            return null != i && (null != i.id ? n.emoji = {
                id: i.id,
                name: ""
            } : null != i.optionallyDiverseSequence && (n.emoji = {
                name: i.optionallyDiverseSequence
            })), {
                poll_media: n
            }
        }), u = {
            question: {
                text: n.trim()
            },
            answers: c,
            allow_multiselect: a,
            duration: l,
            layout_type: s
        };
        try {
            await m.A.sendPollMessage(t.id, u, {
                attachmentsToUpload: d,
                onAttachmentUploadError: (e, n, i) => {
                    (0, A.k)({
                        file: e,
                        guildId: t.getGuildId(),
                        analyticsLocations: [],
                        code: n,
                        reason: i
                    })
                }
            }), o?.()
        } catch (e) {
            if ("poll" === (e instanceof h.LG ? e : new h.LG(e)).getAnyErrorMessage() && null != e.text) throw {
                ...e,
                body: JSON.parse(e.text)
            };
            throw e
        }
    },
    endPollEarly: async function(e) {
        let {
            channelId: t,
            messageId: n
        } = e;
        await u.A.confirm({
            title: R.intl.string(R.t["+rfkTK"]),
            body: R.intl.string(R.t.H2I1gL)
        }) && await S.w({
            channelId: t,
            messageId: n
        })
    }
}