/** Chunk was on web.js **/
/** chunk id: 416379, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(990078),
    c = n(397927),
    u = n(58149),
    d = n(73392),
    f = n(763754),
    p = n(967144),
    _ = n(118517),
    h = n(976860),
    m = n(406704),
    g = n(747926),
    E = n(320501),
    y = n(927057),
    b = n(652215),
    O = n(985018),
    v = n(785263);
let A = 2,
    I = 10;

function S(e, t) {
    let n = e.id,
        r = t.id;
    return (0, s.bG)([E.A], () => {
        let e = r;
        for (let t = 0; t < I; t++) {
            let r = E.A.getMessage(n, e);
            if ((null == r ? void 0 : r.type) !== b.lAJ.REPLY || null == r.messageReference) return t;
            e = r.messageReference.message_id
        }
        return I
    }, [n, r])
}

function T(e) {
    let {
        channel: t,
        message: n,
        replyChainLength: a
    } = e;

    function o() {
        (0, _.Jx)(t.id), (0, g.Tv)(t, n, "Reply Chain Nudge")
    }
    let s = i.useRef(a);
    return i.useEffect(() => {
        s.current = a
    }), i.useEffect(() => {
        (0, u.zV)(b.HAw.THREAD_NUDGE_SHOWN, {
            type: "Reply Chain (".concat(A + 1, ")"),
            reply_chain_length: s.current + 1,
            channel_id: t.id,
            guild_id: t.guild_id
        })
    }, [t]), (0, r.jsxs)(c.DUT, {
        onClick: o,
        className: v._r,
        focusProps: {
            offset: {
                right: -4,
                left: -4
            }
        },
        children: [(0, r.jsx)(c.Text, {
            color: "text-default",
            className: v.Qq,
            variant: "text-sm/normal",
            children: O.intl.format(O.t.B3V0FM, {
                count: Math.min(I, a + 1)
            })
        }), (0, r.jsx)(c.Text, {
            color: "text-link",
            className: v.NG,
            variant: "text-sm/semibold",
            children: O.intl.string(O.t.rBIGBL)
        })]
    })
}

function C(e) {
    let {
        reply: t,
        chatInputType: n
    } = e, {
        channel: i,
        message: a,
        shouldMention: s,
        showMentionToggle: u
    } = t, {
        guildId: g,
        nick: E,
        colorString: I,
        colorStrings: C,
        colorRoleName: N,
        authorId: w,
        displayNameStyles: R
    } = (0, f.Ay)(a), P = (0, p.gn)(g, w, C), D = (0, d.a)({
        displayNameStyles: R
    }), L = S(i, a), x = (0, m.n)(i, a), M = n.showThreadPromptOnReply && L >= A && x, j = () => (0, h.pX)(b.BVt.CHANNEL(i.getGuildId(), i.id, a.id));

    function k(e) {
        e.stopPropagation(), (0, _.vz)(i.id, !s)
    }

    function U(e) {
        e.stopPropagation(), (0, _.Jx)(i.id)
    }
    return (0, r.jsx)("div", {
        className: v.e1,
        children: (0, r.jsxs)("div", {
            className: v.kL,
            children: [(0, r.jsxs)("div", {
                className: v.eU,
                children: [(0, r.jsx)(c.DUT, {
                    onClick: j,
                    focusProps: {
                        offset: {
                            top: -8,
                            right: -4,
                            bottom: -8,
                            left: -4
                        }
                    },
                    children: (0, r.jsx)(c.Text, {
                        color: "text-default",
                        className: o()(v.Qq, v.Fn),
                        variant: "text-sm/normal",
                        children: O.intl.format(O.t["8E4GxS"], {
                            userHook: (e, t) => (0, r.jsx)(c.gyj, {
                                className: v.UU,
                                name: E,
                                colorString: I,
                                colorStrings: P,
                                roleName: N,
                                displayNameStylesFont: D
                            }, t)
                        })
                    })
                }), (0, r.jsxs)("div", {
                    className: v.o1,
                    children: [u && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(l.m, {
                            asContainer: !0,
                            text: s ? O.intl.string(O.t.DH2o6R) : O.intl.string(O.t.utGGIY),
                            children: (0, r.jsx)(c.DUT, {
                                role: "switch",
                                "aria-checked": s,
                                onClick: k,
                                children: (0, r.jsxs)(c.Text, {
                                    variant: "text-sm/bold",
                                    color: s ? "text-link" : "text-muted",
                                    className: v.Z4,
                                    children: [(0, r.jsx)(c.XxR, {
                                        size: "md",
                                        color: "currentColor",
                                        "aria-label": O.intl.string(O.t.P8tvKG),
                                        className: v.mM
                                    }), s ? O.intl.string(O.t.p9jC2r) : O.intl.string(O.t.U7f3bK)]
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: v.me,
                            "aria-hidden": !0
                        })]
                    }), (0, r.jsx)(y.x, {
                        onClick: U
                    })]
                })]
            }), M && (0, r.jsx)(T, {
                channel: i,
                message: a,
                replyChainLength: L
            })]
        })
    })
}