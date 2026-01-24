/** Chunk was on 46875 **/
/** chunk id: 933917, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    D: () => O
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(565645),
    d = n(964486),
    u = n(775602),
    m = n(21161),
    h = n(796774),
    g = n(209932),
    x = n(967198),
    f = n(954571),
    p = n(964901),
    b = n(652215),
    j = n(851110),
    v = n(980504),
    _ = n(641131),
    y = n(985018),
    A = n(529349);

function C(e) {
    let {
        className: t,
        sound: n,
        playSound: i,
        isPlaying: s,
        text: d
    } = e, u = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null, m = y.intl.formatToPlainString(y.t.tuMUJ2, {
        emojiName: null == n ? void 0 : n.emojiName,
        soundName: null == n ? void 0 : n.name
    }), h = r.useCallback(() => {
        f.default.track(b.HAw.MODERATOR_QUEUE_ACTION, {
            guild_id: x.A.getGuildId(),
            action: "airhorn"
        }), null != i && i()
    }, [i]);
    return (0, l.jsxs)(o.DUT, {
        "aria-label": m,
        tag: "span",
        onClick: h,
        className: a()(A.Ls, A.oR, {
            [A.he]: !0 === s
        }, t),
        children: [u && (0, l.jsx)(c.A, {
            emojiId: null == n ? void 0 : n.emojiId,
            emojiName: null == n ? void 0 : n.emojiName,
            className: A.JS
        }), (0, l.jsx)("span", {
            children: " ".concat(d, " ")
        })]
    })
}

function T(e) {
    let {
        containerRef: t,
        text: n
    } = e, i = r.useRef(null), a = (0, s.bG)([g.A], () => {
        var e;
        return null == (e = g.A.getSoundsForGuild(v.mV)) ? void 0 : e.find(e => "airhorn" === e.name)
    }), {
        createMultipleConfettiAt: o
    } = r.useContext(m.x), c = (0, s.bG)([u.A], () => u.A.useReducedMotion), {
        isPlaying: x,
        playSound: f
    } = (0, p.E)(a);
    (0, d.Ay)(() => {
        (0, h.E7)()
    });
    let b = r.useCallback(async () => {
        if (await f()) {
            var e;
            if (null == (e = i.current) || e.addAnimation(), !c && (null == t ? void 0 : t.current) != null) {
                let e = t.current.getBoundingClientRect(),
                    n = {
                        x: e.left + e.width / 2,
                        y: e.top + e.height / 3
                    },
                    l = j.uI[Math.floor(Math.random() * j.uI.length)];
                o(n.x, n.y, {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: -500,
                            y: -500
                        },
                        maxValue: {
                            x: 500,
                            y: -100
                        }
                    }
                }, 40, {
                    sprite: l
                })
            }
        }
    }, [f, o, c, t]);
    return void 0 === a ? null : (0, l.jsx)(C, {
        sound: a,
        playSound: b,
        isPlaying: x,
        text: n
    })
}

function O() {
    let e = r.useRef(null);
    return (0, l.jsxs)(o.BJc, {
        className: A.kL,
        direction: "vertical",
        align: "center",
        justify: "center",
        padding: {
            top: 24,
            bottom: 24
        },
        ref: e,
        children: [(0, l.jsx)(o._vT, {
            size: "custom",
            width: 48,
            height: 48
        }), (0, l.jsxs)(o.BJc, {
            direction: "vertical",
            align: "center",
            justify: "center",
            children: [(0, l.jsx)(o.Heading, {
                className: A.wx,
                variant: "heading-md/medium",
                children: y.intl.string(_.default.h6QNky)
            }), (0, l.jsx)(o.Text, {
                className: A.Qq,
                variant: "text-md/medium",
                color: "text-subtle",
                children: y.intl.format(_.default["8N4c58"], {
                    airhornHook: t => (0, l.jsx)(T, {
                        containerRef: e,
                        text: t
                    })
                })
            })]
        })]
    })
}