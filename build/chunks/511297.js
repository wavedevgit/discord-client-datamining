/** Chunk was on 20941 **/
/** chunk id: 511297, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(158954),
    i = n(311907),
    s = n(397927),
    o = n(565645),
    c = n(775602),
    u = n(854987),
    d = n(719718),
    m = n(612082),
    f = n(155286),
    p = n(573138),
    h = n(877272),
    b = n(359588),
    g = n(398225),
    x = n(213533),
    y = n(419244),
    v = n(532294),
    j = n(622865),
    C = n(985018),
    _ = n(308021),
    A = n(964801);

function O(e) {
    let {
        onClick: t,
        emoji: n,
        index: l,
        reducedMotion: a,
        isActive: i
    } = e, s = (0, g.vy)();
    return (0, r.jsx)(g.vw, {
        spring: s,
        children: (0, r.jsxs)(m.A, {
            contentClassName: A.qq,
            onClick: () => t(n),
            active: i,
            children: [(0, r.jsx)(o.A, {
                className: A.Zg,
                emojiId: n.id,
                emojiName: n.name,
                animated: !a && n.animated
            }), (0, r.jsxs)(h.A, {
                variant: "text-lg/bold",
                children: ["#", l + 1]
            })]
        })
    })
}

function E() {
    let e = (0, i.bG)([c.A], () => c.A.useReducedMotion),
        t = l.useContext(u.P),
        n = (0, s.rdh)(t.primaryColor).hex(),
        {
            emojis: {
                numEmojisSent: o,
                emojis: m
            } = {
                numEmojisSent: 0,
                emojis: []
            }
        } = (0, i.bG)([d.A], () => d.A.getCheckpointData()),
        g = 0 === o || 0 === m.length,
        [E, S] = l.useState(g ? {
            name: "\uD83D\uDE22",
            animated: !1
        } : m[0]),
        N = g ? y.o : a.nm2;
    return (0, r.jsx)(p.A, {
        children: (0, r.jsxs)("div", {
            className: A.kL,
            children: [(0, r.jsx)(x.A, {
                emoji: E
            }), (0, r.jsxs)("div", {
                className: A.Qs,
                children: [(0, r.jsxs)("div", {
                    className: _.DD,
                    children: [(0, r.jsx)(N, {
                        size: "refresh_sm",
                        color: n,
                        className: _.gr,
                        colorClass: _.d7
                    }), (0, r.jsx)(h.A, {
                        variant: "eyebrow",
                        className: _.UP,
                        children: g ? C.intl.string(j.default.vnG9Sx) : C.intl.format(j.default.JwFMdL, {
                            numEmojis: o
                        })
                    })]
                }), g ? (0, r.jsx)(h.A, {
                    variant: "heading-xxl/medium",
                    className: A.YI,
                    children: C.intl.string(j.default.BHbwK1)
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(b.A, {
                        end: o
                    }), (0, r.jsx)(h.A, {
                        variant: "heading-xxl/medium",
                        className: A.VA,
                        children: C.intl.string(j.default.ZuvPfg)
                    }), (0, r.jsx)("div", {
                        className: A.gm,
                        children: m.map((t, n) => (0, r.jsx)(O, {
                            onClick: () => S(t),
                            emoji: t,
                            index: n,
                            reducedMotion: e,
                            isActive: t === E
                        }, "emoji-".concat(n)))
                    })]
                }), (0, r.jsx)(f.e, {
                    slide: v.P7.EMOJIS
                })]
            })]
        })
    })
}