/** chunk id: 570658, original params: e,t,n (module,exports,require) **/
n.d(t, {
    o: () => c,
    v: () => u
});
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(954571),
    a = n(687599),
    s = n(652215);

function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function c(e) {
    let {
        channelId: t,
        onConfirm: c,
        onCancel: u
    } = e;
    i.default.track(s.HAw.OPEN_MODAL, {
        type: a.PY,
        channel_id: t
    }), (0, r.mMO)(async () => {
        let {
            default: e
        } = await n.e("61841").then(n.bind(n, 987176));
        return t => (0, l.jsx)(e, o({
            onConfirm: c,
            onDismiss: u
        }, t))
    })
}

function u(e) {
    let {
        onConfirm: t,
        onCancel: i
    } = e;
    (0, r.mMO)(async () => {
        let {
            default: e
        } = await n.e("19729").then(n.bind(n, 693864));
        return n => (0, l.jsx)(e, o({
            onConfirm: t,
            onDismiss: i
        }, n))
    })
}