/** chunk id: 378702, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(843472),
    a = n(684013),
    o = n(334738),
    s = n(964486),
    u = n(480870),
    c = n(355622),
    d = n(408018),
    h = n(133343),
    p = n(451909),
    f = n(135621),
    g = n(395011),
    m = n(652215),
    A = n(381941),
    y = n(433788);

function O(e) {
    let {
        id: t,
        replyToMessageId: n,
        channel: O,
        onSend: v
    } = e, b = (0, f.A)(), {
        placeholder: E,
        accessibilityLabel: _
    } = (0, u.A)({
        channel: O
    }), [S, x] = r.useState(() => (0, d.N3)()), {
        textValue: I,
        richValue: j
    } = S, [C, T] = r.useState(!1), w = r.useCallback(() => T(!0), []), N = r.useCallback(() => T(!1), []);
    (0, s.Ay)(() => {
        (0, o.ack)(O.id, {
            section: m.JJy.OVERLAY,
            object: m.ZSU.ACK_INLINE_REPLY,
            objectType: m.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
        }, !0, !0, n)
    });
    let P = r.useCallback((e, t, n) => {
            x({
                textValue: t,
                richValue: n
            })
        }, []),
        D = r.useCallback(e => {
            "Escape" === e.key && a.A.updateNotificationStatus(t, m.yFH.ACTIVE)
        }, [t]),
        R = r.useCallback(() => (I.length > b || (l.A.sendMessage(O.id, p.Ay.parse(O, I), !1, {
            location: A.Hx.OVERLAY
        }), a.A.setInputLocked(!0, g.A.getTargetPID()), a.A.updateNotificationStatus(t, m.yFH.DISMISSED), null == v || v(I)), Promise.resolve({
            shouldClear: !1,
            shouldRefocus: !0
        })), [I, b, O, t, v]);
    return (0, i.jsx)("div", {
        className: y.k,
        children: (0, i.jsx)(h.Ay, {
            innerClassName: y.T,
            onChange: P,
            placeholder: E,
            accessibilityLabel: _,
            channel: O,
            textValue: I,
            richValue: j,
            type: c.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: N,
            onFocus: w,
            focused: C,
            onSubmit: R,
            onKeyDown: D,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0
        })
    })
}