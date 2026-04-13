/** chunk id: 803203 params = (module,exports,require) **/
i.d(t, {
    A: () => f
});
var n = i(627968),
    a = i(64700),
    l = i(311907),
    o = i(73153),
    r = i(775602),
    s = i(649963),
    c = i(253932),
    d = i(900210),
    u = i(297494),
    h = i(211180),
    m = i(60317),
    p = i(236870),
    g = i(829216);
let f = a.memo(function(e) {
    let {
        channelId: t,
        messageId: i,
        emoji: f,
        useChatFontScaling: _,
        color: A,
        count: T,
        emojiSize: b
    } = e, E = (0, l.bG)([d.A], () => d.A.getEffectForEmojiId(t, i, f)), x = a.useMemo(() => (0, m.eT)(f, A, t, {
        key: E,
        messageId: i
    }), [A, E, f, t, i]), [I, N] = a.useState(!1), j = (0, l.bG)([r.A], () => r.A.useReducedMotion), R = c.Sf.useSetting(), v = a.useCallback(() => {
        o.h.dispatch({
            type: "BURST_REACTION_EFFECT_CLEAR",
            channelId: t,
            messageId: i,
            emoji: f
        })
    }, [f, t, i]);
    return (a.useEffect(() => {
        let e = () => {
            if (I) return;
            let e = (0, u.H4)(`${Date.now()}${t}${i}${f.name}`) % 10;
            (e += T > 4 ? 4 : T - 1) > 7 && (N(!0), (0, s.on)({
                channelId: t,
                messageId: i,
                emoji: f,
                key: d.W.RANDOM
            }))
        };
        if (I || j && !R || !R) return;
        e();
        let n = setInterval(e, 5e3);
        return () => {
            clearInterval(n)
        }
    }, [R, t, T, f, f.name, I, i, j]), null == E) ? null : (0, n.jsx)(h.A, {
        className: (_ ? g : p).effect,
        effect: x,
        onComplete: v,
        emojiSize: b
    })
})