/** chunk id: 129104 params = (module,exports,require) **/
n.d(t, {
    R: () => g
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(565645),
    o = n(375499),
    d = n(937773),
    c = n(961350),
    u = n(734057),
    h = n(309010),
    A = n(559405),
    _ = n(652215),
    m = n(307731),
    p = n(435579);

function g(e) {
    let {
        customStatusEmoji: t,
        setCustomStatusEmoji: n,
        selectedDefaultStatus: g,
        setIsEmojiPickerOpen: f,
        defaultStatusVariant: x
    } = e, E = l.useRef(null), I = (0, s.bG)([h.A, u.A], () => u.A.getChannel(h.A.getVoiceChannelId())), C = l.useCallback(() => null != t ? (0, i.jsx)(r.A, {
        emojiId: t.id,
        emojiName: t.name,
        animated: !!t.animated
    }) : null != g ? (0, i.jsx)(A.A, {
        className: p.Kk,
        userId: c.default.getId(),
        size: 20,
        hangStatusActivity: {
            type: _.$pd.HANG_STATUS,
            state: g
        },
        fallbackVariant: x
    }) : null, [t, x, g]);
    return (0, i.jsx)(a.YNO, {
        targetElementRef: E,
        onRequestOpen: () => f(!0),
        onRequestClose: () => f(!1),
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(d.A, {
                channel: I,
                guildId: I?.guild_id ?? void 0,
                closePopout: t,
                onSelectEmoji: e => {
                    let {
                        emoji: i,
                        willClose: l
                    } = e;
                    null == i ? n(null) : n(null != i.id ? {
                        id: i.id,
                        name: i.name,
                        animated: i.animated
                    } : {
                        id: null,
                        name: i.optionallyDiverseSequence ?? "",
                        animated: !1
                    }), l && t()
                },
                pickerIntention: m.EmojiIntention.STATUS
            })
        },
        position: "left",
        animation: a.YNO.Animation.NONE,
        align: "top",
        children: (e, n) => {
            let {
                isShown: l
            } = n;
            return (0, i.jsx)(o.A, {
                ...e,
                ref: E,
                active: l,
                tabIndex: 0,
                renderButtonContents: null == t && null == g ? null : C
            })
        }
    })
}