/** chunk id: 78213 params = (module,exports,require) **/
i.d(t, {
    A: () => x
});
var l = i(627968),
    n = i(64700),
    a = i(311907),
    s = i(397927),
    r = i(565645),
    o = i(414079),
    u = i(713517),
    d = i(375499),
    m = i(937773),
    c = i(808728),
    g = i(730906),
    f = i(307731),
    p = i(985018),
    j = i(146283);

function x(e) {
    let {
        className: t,
        guildId: i,
        error: x,
        emojiId: h,
        emojiName: A,
        isRequiredField: E = !0,
        shouldUpdateBothEmojiFields: b = !1,
        setEmojiId: y,
        setEmojiName: S
    } = e, N = (0, g.A)({
        emojiId: h,
        emojiName: A
    }), v = (0, a.bG)([c.Ay], () => null != i ? c.Ay.getDefaultChannel(i) : null), C = n.useRef(null), {
        isHoveringOrFocusing: k
    } = (0, u.A)(C), I = () => {
        S(void 0), y(void 0)
    }, T = e => {
        e.stopPropagation(), I()
    }, _ = n.useMemo(() => {
        let e = null != h && "" !== h,
            t = null != A && "" !== A,
            i = null != N && "" !== N,
            l = t && !Number.isNaN(parseInt(A)) && !i && !e;
        return {
            hasEmojiId: e,
            hasEmojiName: t,
            hasEmojiDisplayName: i,
            isDeletedCustomEmoji: l
        }
    }, [h, A, N]), w = !_.isDeletedCustomEmoji && _.hasEmojiDisplayName;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(s.D0$, {
            required: E,
            label: p.intl.string(p.t["3BQmiC"]),
            errorMessage: x ?? void 0,
            children: (0, l.jsx)(s.YNO, {
                targetElementRef: C,
                animation: s.YNO.Animation.NONE,
                position: "top",
                renderPopout: e => {
                    let {
                        closePopout: t
                    } = e;
                    return (0, l.jsx)(m.A, {
                        closePopout: t,
                        pickerIntention: f.b_.SOUNDBOARD,
                        onNavigateAway: t,
                        onSelectEmoji: e => {
                            let {
                                emoji: i,
                                willClose: l
                            } = e, n = i?.id == null;
                            I(), n ? S(i?.optionallyDiverseSequence) : (b && S(i?.name), y(i?.id)), l && t()
                        },
                        guildId: i,
                        channel: v
                    })
                },
                children: (e, t) => {
                    let {
                        isShown: i
                    } = t;
                    return (0, l.jsxs)(s.FON, {
                        ...e,
                        className: j.LM,
                        ref: C,
                        children: [(0, l.jsx)(d.A, {
                            active: i,
                            tabIndex: 0,
                            renderButtonContents: !_.isDeletedCustomEmoji && (_.hasEmojiId || _.hasEmojiName) ? () => (0, l.jsx)(r.A, {
                                emojiName: A,
                                emojiId: h
                            }) : null
                        }), (0, l.jsx)(s.Text, {
                            variant: "text-md/normal",
                            lineClamp: 1,
                            color: w ? "text-default" : "text-muted",
                            children: w ? `:${N}:` : p.intl.string(p.t.QTK0TJ)
                        }), w && k && (0, l.jsx)(o.A, {
                            ...e,
                            onClick: T
                        })]
                    })
                }
            })
        })
    })
}