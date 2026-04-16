/** chunk id: 570658 params = (module,exports,require) **/
n.d(t, {
    o: () => o,
    v: () => c
});
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(954571),
    a = n(687599),
    r = n(652215);

function o(e) {
    let {
        channelId: t,
        onConfirm: o,
        onCancel: c
    } = e;
    s.default.track(r.HAw.OPEN_MODAL, {
        type: a.PY,
        channel_id: t
    }), (0, l.mMO)(async () => {
        let {
            default: e
        } = await n.e("61841").then(n.bind(n, 987176));
        return t => (0, i.jsx)(e, {
            onConfirm: o,
            onDismiss: c,
            ...t
        })
    })
}

function c(e) {
    let {
        onConfirm: t,
        onCancel: s
    } = e;
    (0, l.mMO)(async () => {
        let {
            default: e
        } = await n.e("19729").then(n.bind(n, 693864));
        return n => (0, i.jsx)(e, {
            onConfirm: t,
            onDismiss: s,
            ...n
        })
    })
}