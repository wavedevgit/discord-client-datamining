/** chunk id: 378702, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(843472),
    a = n(684013),
    s = n(334738),
    o = n(964486),
    u = n(480870),
    c = n(355622),
    d = n(408018),
    h = n(133343),
    p = n(451909),
    f = n(135621),
    g = n(395011),
    m = n(652215),
    y = n(381941),
    A = n(433788);

function v(e) {
    let {
        id: t,
        replyToMessageId: n,
        channel: v,
        onSend: b
    } = e, E = (0, f.A)(), {
        placeholder: O,
        accessibilityLabel: x
    } = (0, u.A)({
        channel: v
    }), [_, S] = r.useState(() => (0, d.N3)()), {
        textValue: I,
        richValue: j
    } = _, [T, C] = r.useState(!1), N = r.useCallback(() => C(!0), []), w = r.useCallback(() => C(!1), []);
    (0, o.Ay)(() => {
        (0, s.ack)(v.id, {
            section: m.JJy.OVERLAY,
            object: m.ZSU.ACK_INLINE_REPLY,
            objectType: m.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
        }, !0, !0, n)
    });
    let P = r.useCallback((e, t, n) => {
            S({
                textValue: t,
                richValue: n
            })
        }, []),
        D = r.useCallback(e => {
            "Escape" === e.key && a.A.updateNotificationStatus(t, m.yFH.ACTIVE)
        }, [t]),
        R = r.useCallback(() => (I.length > E || (l.A.sendMessage(v.id, p.Ay.parse(v, I), !1, {
            location: y.Hx.OVERLAY
        }), a.A.setInputLocked(!0, g.A.getTargetPID()), a.A.updateNotificationStatus(t, m.yFH.DISMISSED), null == b || b(I)), Promise.resolve({
            shouldClear: !1,
            shouldRefocus: !0
        })), [I, E, v, t, b]);
    return (0, i.jsx)("div", {
        className: A.k,
        children: (0, i.jsx)(h.Ay, {
            innerClassName: A.T,
            onChange: P,
            placeholder: O,
            accessibilityLabel: x,
            channel: v,
            textValue: I,
            richValue: j,
            type: c.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: w,
            onFocus: N,
            focused: T,
            onSubmit: R,
            onKeyDown: D,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0
        })
    })
}