/** Chunk was on 95501 **/
/** chunk id: 367516, original params: t,n,a (module,exports,require) **/
a.d(n, {
    default: () => g
}), a(896048);
var e = a(627968),
    i = a(64700),
    l = a(158954),
    s = a(397927),
    o = a(843472),
    c = a(855057),
    r = a(309010),
    d = a(954571),
    u = a(652215),
    C = a(381941),
    _ = a(985018),
    h = a(787790);

function g(t) {
    let {
        transitionState: n,
        onClose: a,
        onGIFSelected: g,
        hideFavorites: j = !1,
        modalTitle: p = _.intl.string(_.t["0VinIJ"]),
        defaultText: E = _.intl.string(_.t.OrwKgi),
        giftIntentType: m,
        analyticsLocationHistory: N
    } = t, [S, k] = i.useState(null), [I, T] = i.useState(""), f = i.useCallback(t => {
        k(t), null == g || g(t)
    }, [g]), v = i.useCallback(async () => {
        if (null != S) {
            let t = r.A.getChannelId();
            null != t && ("" !== I && await o.A.sendMessage(t, {
                content: I,
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: []
            }, !0, {
                location: C.Hx.GIFTING
            }), await o.A.sendMessage(t, {
                content: S.url,
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: []
            }, !0, {
                location: C.Hx.GIFTING
            }), null != m && d.default.track(u.HAw.GIFT_INTENT_MESSAGE_SENT, {
                gift_intent_type: m,
                location_stack: N
            }), await a())
        }
    }, [S, I, a, m, N]);
    return (0, e.jsx)(l.Modal, {
        transitionState: n,
        onClose: a,
        title: p,
        input: (0, e.jsx)(s.fs1, {
            value: I,
            onChange: t => T(t),
            placeholder: E
        }),
        actions: [{
            variant: "secondary",
            text: _.intl.string(_.t["ETE/oC"]),
            onClick: a
        }, {
            variant: "primary",
            text: _.intl.string(_.t.TXNS7S),
            onClick: v,
            loading: !1,
            disabled: null == S
        }],
        children: (0, e.jsx)(c.A, {
            hideFavorites: j,
            onSelectGIF: f,
            selectedGIF: S,
            initialQuery: _.intl.string(_.t.jrtJi4),
            className: h.jT,
            headerClassName: h.Hc,
            contentClassName: h.jE
        })
    })
}