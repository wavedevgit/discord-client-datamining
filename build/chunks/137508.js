/** Chunk was on 83006 **/
/** chunk id: 137508, original params: e,t,r (module,exports,require) **/
r.d(t, {
    t: () => b
}), r(896048);
var n = r(627968),
    a = r(64700),
    l = r(311907),
    o = r(465532),
    s = r(355622),
    i = r(408018),
    c = r(133343),
    u = r(31717),
    d = r(457417),
    f = r(985018),
    p = r(316582);
let b = () => {
    let {
        message: e,
        channel: t,
        updateMessageText: r
    } = (0, d.Vw)(), b = (0, l.bG)([u.A], () => u.A.getDraft(e.channel_id, u.C.ChannelMessage)), [g, h] = a.useState(() => (0, i.ur)(b)), {
        textValue: y,
        richValue: O
    } = g;
    (0, a.useEffect)(() => {
        r(y)
    }, [r, y]);
    let _ = a.useCallback((t, r, n) => {
            h({
                textValue: r,
                richValue: n
            }), o.A.saveDraft(e.channel_id, r, u.C.ChannelMessage)
        }, [e]),
        [m, j] = a.useState(!1),
        w = a.useCallback(() => j(!0), []),
        C = a.useCallback(() => j(!1), []);
    (0, a.useEffect)(() => () => {
        o.A.clearDraft(e.channel_id, u.C.ChannelMessage)
    }, [e]);
    let v = async () => ({
        shouldClear: !0,
        shouldRefocus: !1
    });
    return (0, n.jsx)(c.Ay, {
        innerClassName: p.O,
        onChange: _,
        placeholder: f.intl.string(f.t.ZroO3G),
        channel: t,
        textValue: y,
        richValue: O,
        type: s.oU.SHARE_CUSTOM_CLIENT_THEME_INPUT,
        onBlur: C,
        onFocus: w,
        focused: m,
        onSubmit: v,
        parentModalKey: d.dJ,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0
    })
}