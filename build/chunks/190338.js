/** chunk id: 190338 params = (module,exports,require) **/
n.d(t, {
    m: () => I
});
var l = n(627968),
    a = n(64700),
    s = n(465532),
    i = n(355622),
    r = n(133343),
    u = n(135621),
    o = n(31717),
    c = n(513480),
    A = n(530912),
    d = n(294454),
    h = n(985018),
    _ = n(745812);

function I(e) {
    let {
        message: t,
        canSend: n,
        selectedDestinations: I,
        onSend: E,
        inputValue: m,
        setInputValue: g
    } = e, C = (0, u.A)(), L = (0, c.QK)(I), f = (0, A.VF)(), {
        textValue: N,
        richValue: x
    } = m, [p, P] = a.useState(!1), T = a.useCallback(() => P(!0), []), b = a.useCallback(() => P(!1), []), S = a.useCallback((e, n, l) => {
        g({
            textValue: n,
            richValue: l
        }), null != t && (s.A.saveDraft(t.channel_id, n, o.C.ForwardContextMessage), f(t.channel_id, t.id))
    }, [f, t, g]), F = a.useCallback(() => {
        null != t && (s.A.clearDraft(t.channel_id, o.C.ForwardContextMessage), E(N))
    }, [t, E, N]), D = a.useCallback(() => (!n || N.length > C || F(), Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !0
    })), [F, N, C, n]);
    return (0, l.jsx)(r.Ay, {
        innerClassName: _.OG,
        onChange: S,
        placeholder: h.intl.string(h.t.ZroO3G),
        channel: L,
        textValue: N,
        richValue: x,
        type: i.oU.FORWARD_MESSAGE_INPUT,
        onBlur: b,
        onFocus: T,
        focused: p,
        onSubmit: D,
        parentModalKey: d.aU,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0
    })
}