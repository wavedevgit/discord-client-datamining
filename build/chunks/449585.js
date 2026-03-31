/** chunk id: 449585 params = (module,exports,require) **/
n.d(e, {
    Bx: () => o,
    is: () => d,
    rI: () => u,
    w2: () => c
});
var i = n(627968);
n(64700);
var l = n(314116),
    r = n(397927),
    s = n(411335),
    a = n(985018);

function o(t) {
    return {
        [s.AH.BLOCK_MESSAGE]: (t, e) => new Promise(t => {
            (0, r.mMO)(async () => {
                let {
                    default: l
                } = await n.e("35023").then(n.bind(n, 148210));
                return n => (0, i.jsx)(l, {
                    initialCustomMessage: e.metadata.customMessage ?? "",
                    onSubmit: i => {
                        e.metadata.customMessage = i, t(e), n.onClose()
                    },
                    ...n,
                    onClose: () => (t(null), n.onClose())
                })
            })
        }),
        [s.AH.FLAG_TO_CHANNEL]: (e, l) => new Promise(a => {
            (0, r.mMO)(async () => {
                let {
                    default: r
                } = await n.e("65341").then(n.bind(n, 158956)), o = e.actions.find(t => t.type === s.AH.FLAG_TO_CHANNEL);
                return n => (0, i.jsx)(r, {
                    action: l,
                    isEdit: null != o,
                    triggerType: e.triggerType,
                    guildId: t,
                    onEditChannel: t => {
                        l.metadata.channelId = t, e.exemptChannels.add(t), a(l), n.onClose()
                    },
                    ...n,
                    onClose: () => (a(null), n.onClose())
                })
            })
        }),
        [s.AH.USER_COMMUNICATION_DISABLED]: (t, e) => new Promise(l => {
            (0, r.mMO)(async () => {
                let {
                    default: r
                } = await n.e("21932").then(n.bind(n, 16039)), a = t.actions.find(t => t.type === s.AH.USER_COMMUNICATION_DISABLED);
                return n => (0, i.jsx)(r, {
                    action: e,
                    isEdit: null != a,
                    triggerType: t.triggerType,
                    onUpdateDuration: t => {
                        null != t && (e.metadata.durationSeconds = t), l(e), n.onClose()
                    },
                    ...n,
                    onClose: () => (l(null), n.onClose())
                })
            })
        })
    }
}

function c(t, e, l, s) {
    (0, r.mMO)(async () => {
        let {
            default: r
        } = await n.e("15112").then(n.bind(n, 794267));
        return n => (0, i.jsx)(r, {
            ...n,
            automodDecision: {
                messageId: t,
                messageContent: e,
                decisionId: l,
                channel: s
            }
        })
    })
}

function d(t, e) {
    (0, r.mMO)(async () => {
        let {
            default: l
        } = await n.e("7133").then(n.bind(n, 580812));
        return n => (0, i.jsx)(l, {
            ...n,
            messageId: t,
            guildId: e
        })
    })
}

function u(t) {
    (0, l.A)({
        title: a.intl.string(a.t.wLGrjB),
        subtitle: a.intl.string(a.t.arYQ2X),
        confirmText: a.intl.string(a.t["cY+Oob"]),
        onConfirm: t
    })
}