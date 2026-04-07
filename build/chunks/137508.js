/** chunk id: 137508 params = (module,exports,require) **/
a.d(t, {
    t: () => p
});
var n = a(627968),
    r = a(64700),
    l = a(311907),
    s = a(465532),
    o = a(355622),
    i = a(408018),
    c = a(133343),
    u = a(31717),
    d = a(457417),
    _ = a(985018),
    h = a(110647);
let p = () => {
    let {
        message: e,
        channel: t,
        updateMessageText: a
    } = (0, d.Vw)(), p = (0, l.bG)([u.A], () => u.A.getDraft(e.channel_id, u.C.ChannelMessage)), [f, g] = r.useState(() => (0, i.ur)(p)), {
        textValue: C,
        richValue: b
    } = f;
    (0, r.useEffect)(() => {
        a(C)
    }, [a, C]);
    let m = r.useCallback((t, a, n) => {
            g({
                textValue: a,
                richValue: n
            }), s.A.saveDraft(e.channel_id, a, u.C.ChannelMessage)
        }, [e]),
        [x, M] = r.useState(!1),
        k = r.useCallback(() => M(!0), []),
        w = r.useCallback(() => M(!1), []);
    (0, r.useEffect)(() => () => {
        s.A.clearDraft(e.channel_id, u.C.ChannelMessage)
    }, [e]);
    let S = async () => ({
        shouldClear: !0,
        shouldRefocus: !1
    });
    return (0, n.jsx)(c.Ay, {
        innerClassName: h.O,
        onChange: m,
        placeholder: _.intl.string(_.t.ZroO3G),
        channel: t,
        textValue: C,
        richValue: b,
        type: o.oU.SHARE_CUSTOM_CLIENT_THEME_INPUT,
        onBlur: w,
        onFocus: k,
        focused: x,
        onSubmit: S,
        parentModalKey: d.dJ,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0
    })
}