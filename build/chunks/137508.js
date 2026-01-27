/** Chunk was on 15646 **/
/** chunk id: 137508, original params: e,t,r (module,exports,require) **/
r.d(t, {
    t: () => p
}), r(896048);
var n = r(627968),
    l = r(64700),
    a = r(311907),
    o = r(465532),
    s = r(355622),
    i = r(408018),
    c = r(133343),
    u = r(31717),
    d = r(457417),
    f = r(985018),
    b = r(316582);
let p = () => {
    let {
        message: e,
        channel: t,
        updateMessageText: r
    } = (0, d.Vw)(), p = (0, a.bG)([u.A], () => u.A.getDraft(e.channel_id, u.C.ChannelMessage)), [g, _] = l.useState(() => (0, i.ur)(p)), {
        textValue: y,
        richValue: h
    } = g;
    (0, l.useEffect)(() => {
        r(y)
    }, [r, y]);
    let m = l.useCallback((t, r, n) => {
            _({
                textValue: r,
                richValue: n
            }), o.A.saveDraft(e.channel_id, r, u.C.ChannelMessage)
        }, [e]),
        [O, w] = l.useState(!1),
        j = l.useCallback(() => w(!0), []),
        C = l.useCallback(() => w(!1), []);
    (0, l.useEffect)(() => () => {
        o.A.clearDraft(e.channel_id, u.C.ChannelMessage)
    }, [e]);
    let v = async () => ({
        shouldClear: !0,
        shouldRefocus: !1
    });
    return (0, n.jsx)(c.Ay, {
        innerClassName: b.O,
        onChange: m,
        placeholder: f.intl.string(f.t.ZroO3G),
        channel: t,
        textValue: y,
        richValue: h,
        type: s.oU.SHARE_CUSTOM_CLIENT_THEME_INPUT,
        onBlur: C,
        onFocus: j,
        focused: O,
        onSubmit: v,
        parentModalKey: d.dJ,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0
    })
}