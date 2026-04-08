/** chunk id: 449585 params = (module,exports,require) **/
n.d(t, {
    Bx: () => o,
    is: () => c,
    rI: () => u,
    w2: () => d
});
var i = n(627968);
n(64700);
var l = n(314116),
    s = n(397927),
    a = n(411335),
    r = n(985018);

function o(e) {
    return {
        [a.AH.BLOCK_MESSAGE]: (e, t) => new Promise(e => {
            (0, s.mMO)(async () => {
                let {
                    default: l
                } = await n.e("35023").then(n.bind(n, 148210));
                return n => (0, i.jsx)(l, {
                    initialCustomMessage: t.metadata.customMessage ?? "",
                    onSubmit: i => {
                        t.metadata.customMessage = i, e(t), n.onClose()
                    },
                    ...n,
                    onClose: () => (e(null), n.onClose())
                })
            })
        }),
        [a.AH.FLAG_TO_CHANNEL]: (t, l) => new Promise(r => {
            (0, s.mMO)(async () => {
                let {
                    default: s
                } = await n.e("65341").then(n.bind(n, 158956)), o = t.actions.find(e => e.type === a.AH.FLAG_TO_CHANNEL);
                return n => (0, i.jsx)(s, {
                    action: l,
                    isEdit: null != o,
                    triggerType: t.triggerType,
                    guildId: e,
                    onEditChannel: e => {
                        l.metadata.channelId = e, t.exemptChannels.add(e), r(l), n.onClose()
                    },
                    ...n,
                    onClose: () => (r(null), n.onClose())
                })
            })
        }),
        [a.AH.USER_COMMUNICATION_DISABLED]: (e, t) => new Promise(l => {
            (0, s.mMO)(async () => {
                let {
                    default: s
                } = await n.e("21932").then(n.bind(n, 16039)), r = e.actions.find(e => e.type === a.AH.USER_COMMUNICATION_DISABLED);
                return n => (0, i.jsx)(s, {
                    action: t,
                    isEdit: null != r,
                    triggerType: e.triggerType,
                    onUpdateDuration: e => {
                        null != e && (t.metadata.durationSeconds = e), l(t), n.onClose()
                    },
                    ...n,
                    onClose: () => (l(null), n.onClose())
                })
            })
        })
    }
}

function d(e, t, l, a) {
    (0, s.mMO)(async () => {
        let {
            default: s
        } = await n.e("15112").then(n.bind(n, 794267));
        return n => (0, i.jsx)(s, {
            ...n,
            automodDecision: {
                messageId: e,
                messageContent: t,
                decisionId: l,
                channel: a
            }
        })
    })
}

function c(e, t) {
    (0, s.mMO)(async () => {
        let {
            default: l
        } = await n.e("7133").then(n.bind(n, 580812));
        return n => (0, i.jsx)(l, {
            ...n,
            messageId: e,
            guildId: t
        })
    })
}

function u(e) {
    (0, l.A)({
        title: r.intl.string(r.t.wLGrjB),
        subtitle: r.intl.string(r.t.arYQ2X),
        confirmText: r.intl.string(r.t["cY+Oob"]),
        onConfirm: e
    })
}