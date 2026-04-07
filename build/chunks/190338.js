/** chunk id: 190338 params = (module,exports,require) **/
n.d(t, {
    m: () => f
});
var l = n(627968),
    a = n(64700),
    s = n(465532),
    i = n(355622),
    r = n(133343),
    o = n(135621),
    u = n(31717),
    c = n(513480),
    d = n(530912),
    h = n(294454),
    m = n(985018),
    g = n(337508);

function f(e) {
    let {
        message: t,
        canSend: n,
        selectedDestinations: f,
        onSend: x,
        inputValue: C,
        setInputValue: p
    } = e, A = (0, o.A)(), v = (0, c.QK)(f), b = (0, d.VF)(), {
        textValue: w,
        richValue: j
    } = C, [T, k] = a.useState(!1), y = a.useCallback(() => k(!0), []), R = a.useCallback(() => k(!1), []), S = a.useCallback((e, n, l) => {
        p({
            textValue: n,
            richValue: l
        }), null != t && (s.A.saveDraft(t.channel_id, n, u.C.ForwardContextMessage), b(t.channel_id, t.id))
    }, [b, t, p]), M = a.useCallback(() => {
        null != t && (s.A.clearDraft(t.channel_id, u.C.ForwardContextMessage), x(w))
    }, [t, x, w]), N = a.useCallback(() => (!n || w.length > A || M(), Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !0
    })), [M, w, A, n]);
    return (0, l.jsx)(r.Ay, {
        innerClassName: g.OG,
        onChange: S,
        placeholder: m.intl.string(m.t.ZroO3G),
        channel: v,
        textValue: w,
        richValue: j,
        type: i.oU.FORWARD_MESSAGE_INPUT,
        onBlur: R,
        onFocus: y,
        focused: T,
        onSubmit: N,
        parentModalKey: h.aU,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0
    })
}