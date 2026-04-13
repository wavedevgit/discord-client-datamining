/** chunk id: 211180 params = (module,exports,require) **/
i.d(t, {
    A: () => A,
    x: () => f
});
var n, a = i(627968),
    l = i(64700),
    o = i(503698),
    r = i.n(o),
    s = i(883885),
    c = i.n(s),
    d = i(73153),
    u = i(900210),
    h = i(146497),
    m = i(60317),
    p = i(652215),
    g = i(121505),
    f = ((n = {})[n.NORMAL = 20] = "NORMAL", n[n.LARGE = 32] = "LARGE", n);
let _ = async e => {
    let {
        effect: t
    } = e, i = await (0, h.R)(t.channelId, t.messageId ?? p.dJq, t.emoji.name), n = await (0, m.fz)(`${t.channelId}:${t.messageId}:${t.emoji.name}`, t.url, i, t.color);
    return n.assets[0].p = t.url, n
};

function A(e) {
    let {
        className: t,
        effect: i,
        onComplete: n,
        emojiSize: o = 20
    } = e, s = l.useRef(null), h = o * m.YY, p = (h + o) / 2, f = `translateY(${p}px)`;
    return l.useEffect(() => {
        let e;
        if (null != i) return !async function() {
            if (null != s.current) {
                let t = await _({
                    effect: i
                });
                (e = c().loadAnimation({
                    container: s.current,
                    renderer: "svg",
                    loop: !1,
                    autoplay: !0,
                    animationData: t
                })).addEventListener("complete", () => {
                    n?.(), e.destroy()
                }), null != i.channelId && null != i.messageId && null != i.emoji && i.key === u.W.HOVER && d.h.dispatch({
                    type: "BURST_REACTION_ANIMATION_ADD",
                    channelId: i.channelId,
                    messageId: i.messageId,
                    emoji: i.emoji,
                    animation: e
                })
            }
        }(), () => {
            null != e && e.destroy()
        }
    }, [n, i, o]), (0, a.jsx)("div", {
        className: g.Y,
        children: (0, a.jsx)("div", {
            className: r()(g.Q, t),
            style: {
                transform: f,
                height: h,
                width: h
            },
            ref: s
        })
    })
}