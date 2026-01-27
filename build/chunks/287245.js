/** Chunk was on 77870 **/
/** chunk id: 287245, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
}), n(896048), n(733351);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(73153),
    c = n(843472),
    u = n(355622),
    d = n(408018),
    p = n(133343),
    h = n(609425),
    f = n(922301),
    g = n(750112),
    m = n(451909),
    b = n(538355),
    A = n(854627),
    y = n(447404),
    _ = n(320501),
    O = n(203982),
    j = n(427262),
    v = n(652215),
    x = n(985018),
    E = n(65309);
let C = e => {
        let {
            channel: t,
            message: n,
            out: l = !1,
            noAnimate: i = !1
        } = e, o = (0, b.A)(n, {
            hideSimpleEmbedContent: !0,
            formatInline: !1,
            noStyleAndInteraction: !1,
            isInteracting: !1,
            allowDevLinks: !1,
            allowLinks: !1,
            allowGameMentions: !1,
            previewLinkTarget: !1
        }), c = n.author, u = j.Ay.getName(c), d = (0, h.A)({
            userId: c.id,
            guildId: t.guild_id
        }), {
            avatarSrc: p,
            avatarDecorationSrc: m
        } = (0, A.A)({
            userId: c.id,
            guildId: t.guild_id,
            size: 48
        });
        return (0, r.jsxs)("div", {
            className: s()(E.iU, {
                [E.FD]: l,
                [E.Tf]: i
            }),
            children: [(0, r.jsx)("div", {
                children: (0, r.jsx)(a.euF, {
                    src: p,
                    avatarDecoration: m,
                    size: a._3J.SIZE_24,
                    "aria-label": "User Avatar",
                    isTyping: !1
                })
            }), (0, r.jsx)(g.A, {
                userName: u,
                displayNameStyles: d,
                effectDisplayType: f.G.STATIC,
                loop: !0
            }), (0, r.jsxs)("div", {
                className: E.fi,
                children: [(0, r.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: E.Qs,
                    children: o.content
                }), n.attachments.length > 0 && (0, r.jsx)("div", {
                    className: s()(E.nM, E.rQ),
                    children: n.attachments.filter(e => {
                        var t;
                        return !e.spoiler && (null == (t = e.content_type) ? void 0 : t.startsWith("image"))
                    }).map(e => (0, r.jsx)("img", {
                        src: e.url,
                        width: 128,
                        className: E.oh,
                        alt: x.intl.string(x.t.X4IxWL)
                    }, e.id))
                })]
            })]
        })
    },
    S = e => {
        let {
            channel: t,
            idle: n,
            showChat: i
        } = e, h = l.useRef(new Set), [f, g] = l.useState([]), [b, A] = l.useState(0), j = l.useRef(null), x = l.useRef(!1), [S, I] = l.useState(!0), [N, T] = l.useState(""), [P, w] = l.useState((0, d.x7)(N));
        l.useEffect(() => {
            let e = h.current;
            return () => {
                e.size > 0 && [...e].forEach(e => clearTimeout(e))
            }
        }, []), l.useEffect(() => {
            let e = () => I(!0),
                t = () => I(!1);
            return O._.subscribe(v.jej.TEXTAREA_FOCUS, e), O._.subscribe(v.jej.TEXTAREA_BLUR, t), () => {
                O._.unsubscribe(v.jej.TEXTAREA_FOCUS, e), O._.unsubscribe(v.jej.TEXTAREA_BLUR, t)
            }
        }, []), l.useEffect(() => {
            let e = j.current;
            null != e && e.scrollTo({
                top: e.scrollHeight,
                behavior: "smooth"
            })
        }, [j]), l.useEffect(() => {
            let e = Date.now();
            g(_.A.getMessages(t.id)._array.filter(t => t.timestamp.getTime() > e - 12e5).slice(-50))
        }, [t]);
        let R = l.useCallback(e => {
                g(t => {
                    if (!t.some(t => t.id === e.id)) {
                        let n = [...t, e];
                        return n.length > 50 && n.shift(), n
                    }
                    return t
                })
            }, []),
            D = l.useMemo(() => {
                let e = f[f.length - 1];
                if (null == e) return !0;
                if (b + 100 > Date.now()) return !1;
                let t = Date.now() > e.timestamp.getTime() + 5e3;
                if (!t) {
                    let e = setTimeout(() => {
                        A(Date.now()), h.current.delete(e)
                    }, 5500);
                    h.current.add(e)
                }
                return t
            }, [f, b]);
        return l.useEffect(() => {
            let e = e => {
                let {
                    channelId: n,
                    message: r
                } = e, l = _.A.getMessage(r.channel_id, r.id);
                if (n === t.id && (null == l ? void 0 : l.state) === "SENT") {
                    R(l);
                    let e = setTimeout(() => {
                        h.current.delete(e);
                        let t = j.current;
                        null != t && t.scrollTo({
                            top: t.scrollHeight,
                            behavior: "smooth"
                        })
                    }, 10);
                    h.current.add(e)
                }
            };
            return o.h.subscribe("MESSAGE_CREATE", e), () => o.h.unsubscribe("MESSAGE_CREATE", e)
        }, []), (0, r.jsxs)("div", {
            className: s()(E.X2, {
                [E.R]: !i
            }),
            onMouseEnter: () => x.current = !0,
            onMouseLeave: () => x.current = !1,
            onWheel: e => {
                e.preventDefault(), e.stopPropagation()
            },
            onScroll: e => {
                e.preventDefault(), e.stopPropagation()
            },
            children: [(0, r.jsx)(y.A, {
                children: (0, r.jsx)("div", {
                    className: s()(E.TE, {
                        [E.N7]: n
                    }),
                    children: (0, r.jsx)(a.HOs, {
                        className: s()(E.b6, {
                            [E.N7]: D && n
                        }),
                        ref: j,
                        children: f.map(e => (0, r.jsx)(C, {
                            channel: t,
                            message: e,
                            noAnimate: !0
                        }, e.id))
                    })
                })
            }), (0, r.jsx)(p.Ay, {
                className: s()(E.CQ, {
                    [E.N7]: n && 0 === N.length
                }),
                innerClassName: E.hF,
                type: u.oU.HAVEN,
                channel: t,
                textValue: N,
                richValue: P,
                placeholder: "Send message",
                onFocus: () => I(!0),
                onBlur: () => I(!1),
                focused: S,
                disabled: !i,
                showValueWhenDisabled: !0,
                onChange: (e, t, n) => {
                    t !== N && (T(t), w(n))
                },
                onSubmit: async e => {
                    let {
                        value: n
                    } = e, r = n.trim();
                    if (0 === r.length) return {
                        shouldClear: !1,
                        shouldRefocus: !1
                    };
                    let l = m.Ay.parse(t, r);
                    try {
                        return await c.A.sendMessage(t.id, l, !0, {
                            location: "Haven"
                        }), T(""), w((0, d.x7)("")), {
                            shouldClear: !0,
                            shouldRefocus: !1
                        }
                    } catch (e) {
                        return {
                            shouldClear: !1,
                            shouldRefocus: !1
                        }
                    }
                }
            })]
        })
    }