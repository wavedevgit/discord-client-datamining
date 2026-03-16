/** chunk id: 137508 params = (module,exports,require) **/
n.d(t, {
    t: () => b
});
var a = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(465532),
    o = n(355622),
    i = n(408018),
    c = n(133343),
    u = n(31717),
    d = n(457417),
    _ = n(985018),
    h = n(316582);
let b = () => {
    let {
        message: e,
        channel: t,
        updateMessageText: n
    } = (0, d.Vw)(), b = (0, r.bG)([u.A], () => u.A.getDraft(e.channel_id, u.C.ChannelMessage)), [p, f] = l.useState(() => (0, i.ur)(b)), {
        textValue: m,
        richValue: g
    } = p;
    (0, l.useEffect)(() => {
        n(m)
    }, [n, m]);
    let C = l.useCallback((t, n, a) => {
            f({
                textValue: n,
                richValue: a
            }), s.A.saveDraft(e.channel_id, n, u.C.ChannelMessage)
        }, [e]),
        [k, A] = l.useState(!1),
        x = l.useCallback(() => A(!0), []),
        w = l.useCallback(() => A(!1), []);
    (0, l.useEffect)(() => () => {
        s.A.clearDraft(e.channel_id, u.C.ChannelMessage)
    }, [e]);
    let E = async () => ({
        shouldClear: !0,
        shouldRefocus: !1
    });
    return (0, a.jsx)(c.Ay, {
        innerClassName: h.O,
        onChange: C,
        placeholder: _.intl.string(_.t.ZroO3G),
        channel: t,
        textValue: m,
        richValue: g,
        type: o.oU.SHARE_CUSTOM_CLIENT_THEME_INPUT,
        onBlur: w,
        onFocus: x,
        focused: k,
        onSubmit: E,
        parentModalKey: d.dJ,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0
    })
}