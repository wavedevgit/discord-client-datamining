/** chunk id: 572680 params = (module,exports,require) **/
i.d(t, {
    A: () => A
});
var n = i(627968),
    a = i(64700),
    l = i(106778),
    o = i(294426),
    r = i(615300),
    s = i(397927),
    c = i(565645),
    d = i(21161),
    u = i(750506),
    h = i(147421),
    m = i(486020),
    p = i(690521),
    g = i(851110),
    _ = i(396560);
let f = [];

function A(e) {
    let {
        messageId: t,
        emoji: i,
        startPosition: A,
        targetPosition: T
    } = e, [b, E] = a.useState(0), [x, I] = a.useState(0), [N, j] = a.useState(null), {
        confettiCanvas: R
    } = a.useContext(d.x), v = (0, l.f9)(R, N), C = a.useMemo(() => [{
        src: null == i.id ? p.Ay.getURL(i.name) : m.Ay.getEmojiURL({
            id: i.id,
            animated: !1,
            size: 22
        }),
        colorize: !1
    }], [i.name, i.id]), S = T.x - T.width / 2 * .5, y = T.y - T.height / 2 * .5, O = (0, s.zhh)({
        from: {
            y: A.y
        },
        to: {
            y: y
        },
        config: {
            duration: 450,
            easing: r.A.Easing.in(r.A.Easing.exp)
        },
        onChange: e => {
            let {
                y: t
            } = e;
            I(t)
        }
    }), M = (0, s.zhh)({
        from: {
            x: A.x,
            scale: 1,
            opacity: 1
        },
        to: {
            x: S,
            scale: .5,
            opacity: .4
        },
        config: {
            duration: 450,
            easing: r.A.Easing.in(r.A.Easing.ease)
        },
        onRest: () => {
            (0, h.p)(t, i.name, i.id)
        },
        onChange: e => {
            let {
                x: t
            } = e;
            E(t)
        }
    });
    return a.useEffect(() => {
        b > 0 && x > 0 && v.createConfetti({
            ...g.Mw,
            position: {
                type: "static",
                value: {
                    x: b,
                    y: x
                }
            }
        })
    }, [v, b, x]), (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(l.K_, {
            ref: j,
            sprites: C,
            colors: f,
            spriteWidth: g.wn,
            spriteHeight: g.wn
        }), (0, n.jsx)(u.Ay, {
            children: (0, n.jsx)(o.animated.div, {
                style: {
                    ...O
                },
                className: _.qq,
                children: (0, n.jsx)(o.animated.div, {
                    style: {
                        ...M,
                        opacity: M.opacity
                    },
                    children: (0, n.jsx)(c.A, {
                        className: _.Zg,
                        emojiId: i.id,
                        emojiName: i.name,
                        animated: i.animated,
                        size: "jumbo"
                    })
                })
            })
        })]
    })
}