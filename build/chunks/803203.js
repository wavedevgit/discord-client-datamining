/** Chunk was on web.js **/
/** chunk id: 803203, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(73153),
    o = n(775602),
    l = n(649963),
    c = n(253932),
    u = n(900210),
    d = n(297494),
    f = n(211180),
    p = n(60317),
    _ = n(859751),
    h = n(113520);

function m(e) {
    let {
        channelId: t,
        messageId: n,
        emoji: m,
        useChatFontScaling: g,
        color: E,
        count: y,
        emojiSize: b
    } = e, O = (0, a.bG)([u.A], () => u.A.getEffectForEmojiId(t, n, m)), v = g ? h : _, A = i.useMemo(() => (0, p.eT)(m, E, t, {
        key: O,
        messageId: n
    }), [E, O, m, t, n]), [I, S] = i.useState(!1), T = (0, a.bG)([o.A], () => o.A.useReducedMotion), C = c.Sf.useSetting(), N = i.useCallback(() => {
        s.h.dispatch({
            type: "BURST_REACTION_EFFECT_CLEAR",
            channelId: t,
            messageId: n,
            emoji: m
        })
    }, [m, t, n]);
    return (i.useEffect(() => {
        let e = () => {
            if (I) return;
            let e = (0, d.H4)("".concat(Date.now()).concat(t).concat(n).concat(m.name)) % 10;
            (e += y > 4 ? 4 : y - 1) > 7 && (S(!0), (0, l.on)({
                channelId: t,
                messageId: n,
                emoji: m,
                key: u.W.RANDOM
            }))
        };
        if (I || T && !C || !C) return;
        e();
        let r = setInterval(e, 5e3);
        return () => {
            clearInterval(r)
        }
    }, [C, t, y, m, m.name, I, n, T]), null == O) ? null : (0, r.jsx)(f.A, {
        className: v.effect,
        effect: A,
        onComplete: N,
        emojiSize: b
    })
}
let g = i.memo(m)