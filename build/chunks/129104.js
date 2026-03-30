/** chunk id: 129104 params = (module,exports,require) **/
"use strict";
n.d(t, {
    R: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(565645),
    o = n(375499),
    c = n(937773),
    d = n(961350),
    u = n(734057),
    h = n(309010),
    A = n(559405),
    m = n(652215),
    _ = n(307731),
    g = n(435579);

function p(e) {
    let {
        customStatusEmoji: t,
        setCustomStatusEmoji: n,
        selectedDefaultStatus: p,
        setIsEmojiPickerOpen: f,
        defaultStatusVariant: x
    } = e, E = s.useRef(null), C = (0, l.bG)([h.A, u.A], () => u.A.getChannel(h.A.getVoiceChannelId())), I = s.useCallback(() => null != t ? (0, i.jsx)(r.A, {
        emojiId: t.id,
        emojiName: t.name,
        animated: !!t.animated
    }) : null != p ? (0, i.jsx)(A.A, {
        className: g.Kk,
        userId: d.default.getId(),
        size: 20,
        hangStatusActivity: {
            type: m.$pd.HANG_STATUS,
            state: p
        },
        fallbackVariant: x
    }) : null, [t, x, p]);
    return (0, i.jsx)(a.YNO, {
        targetElementRef: E,
        onRequestOpen: () => f(!0),
        onRequestClose: () => f(!1),
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(c.A, {
                channel: C,
                guildId: C?.guild_id ?? void 0,
                closePopout: t,
                onSelectEmoji: e => {
                    let {
                        emoji: i,
                        willClose: s
                    } = e;
                    null == i ? n(null) : n(null != i.id ? {
                        id: i.id,
                        name: i.name,
                        animated: i.animated
                    } : {
                        id: null,
                        name: i.optionallyDiverseSequence ?? "",
                        animated: !1
                    }), s && t()
                },
                pickerIntention: _.b_.STATUS
            })
        },
        position: "left",
        animation: a.YNO.Animation.NONE,
        align: "top",
        children: (e, n) => {
            let {
                isShown: s
            } = n;
            return (0, i.jsx)(o.A, {
                ...e,
                ref: E,
                active: s,
                tabIndex: 0,
                renderButtonContents: null == t && null == p ? null : I
            })
        }
    })
}