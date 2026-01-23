/** Chunk was on 47841 **/
/** chunk id: 987957, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(417597),
    o = n(990078),
    c = n(397927),
    d = n(713654),
    u = n(599119),
    g = n(202027),
    m = n(374084),
    p = n(111487),
    f = n(734057),
    b = n(71393),
    h = n(486020),
    x = n(132514),
    j = n(985018),
    _ = n(659233);
let O = function(e) {
    var t, l, O, v, y;
    let {
        guildId: A,
        action: E,
        actionIndex: N,
        onChange: S,
        onDelete: I,
        onDragStart: T,
        onDragComplete: C,
        onDragReset: P
    } = e, w = (0, a.bG)([f.A], () => f.A.getChannel(E.channelId)), R = (0, a.bG)([b.A], () => b.A.getGuild(A)), D = (0, a.bG)([x.A], () => x.A.getPendingData()[E.channelId]), {
        customEmoji: G,
        unicodeEmoji: L
    } = (0, g.A)(null == (l = E.emoji) ? void 0 : l.id, null == (O = E.emoji) ? void 0 : O.name), k = null == E.emoji || null != G || null != L, M = h.Ay.getNewMemberActionIconURL({
        channelId: E.channelId,
        icon: E.icon
    }), U = null != D ? D.iconData : M, B = null;
    null != w && (0, m.Rc)(w) ? k || (B = j.intl.string(j.t.wAkIZW)) : B = j.intl.string(j.t.CbTEKP);
    let {
        drag: F,
        dragSourcePosition: H,
        drop: V,
        setIsDraggable: K
    } = (0, u.A)({
        type: "NEW_MEMBER_ACTION",
        index: N,
        optionId: E.channelId,
        onDragStart: T,
        onDragComplete: C,
        onDragReset: P
    }), z = i.useCallback(() => {
        if (null != A) return (0, c.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("54569"), n.e("76945")]).then(n.bind(n, 251632));
            return t => {
                var n, i;
                return (0, r.jsx)(e, (n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({}, t), i = i = {
                    guildId: A,
                    action: E,
                    onSave: (e, t, n) => S(N, e, t, n),
                    onDelete: () => I(N)
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(i)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                }), n))
            }
        })
    }, [A, E, N, S, I]);
    if (null == w || null == R) return null;
    let W = null != (t = (0, d.gU)(w)) ? t : c.N$i;
    return (0, r.jsxs)("div", {
        className: _.L8,
        children: [(0, r.jsxs)("div", {
            className: s()(_.kv, {
                [_.A]: null != H && N < H,
                [_.Ze]: null != H && N > H,
                [_.e5]: null != B
            }),
            ref: e => {
                F(V(e))
            },
            children: [(0, r.jsx)("div", {
                className: _.cK,
                onMouseEnter: () => K(!0),
                onMouseLeave: () => K(!1),
                children: (0, r.jsx)(c.WP0, {
                    size: "xs",
                    color: "currentColor",
                    className: _.co
                })
            }), null != U ? (0, r.jsx)("div", {
                className: _.P0,
                children: (0, r.jsx)("img", {
                    src: U,
                    className: _.Kk,
                    width: 48,
                    height: 48,
                    alt: "",
                    "aria-hidden": !0
                })
            }) : (0, r.jsx)("div", {
                className: _.zV,
                children: (0, r.jsx)(p.A, {
                    emojiId: null == (v = E.emoji) ? void 0 : v.id,
                    emojiName: null == (y = E.emoji) ? void 0 : y.name,
                    size: p.g.MEDIUM,
                    defaultComponent: (0, r.jsx)(W, {})
                })
            }), (0, r.jsxs)("div", {
                className: _.tV,
                children: [(0, r.jsx)(c.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: E.title
                }), (0, r.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: j.intl.format(j.t.Ngk8Nr, {
                        channelName: w.name
                    })
                })]
            }), (0, r.jsx)(o.m, {
                text: j.intl.string(j.t.bt75uw),
                children: (0, r.jsx)(c.K0, {
                    icon: c.R2l,
                    size: "sm",
                    variant: "primary",
                    onClick: z,
                    "aria-label": j.intl.string(j.t.bt75uw)
                })
            })]
        }), null != B && (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-feedback-critical",
            children: B
        })]
    })
}