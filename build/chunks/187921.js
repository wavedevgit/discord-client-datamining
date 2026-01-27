/** Chunk was on web.js **/
/** chunk id: 187921, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
}), n(896048), n(733351);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(478437),
    l = n(305866),
    c = n(355622),
    u = n(408018),
    d = n(133343),
    f = n(95701),
    p = n(403362),
    _ = n(562153),
    h = n(427262),
    m = n(448613),
    g = n(679492),
    E = n(8925),
    y = n(939496),
    b = n(518477),
    O = n(650583),
    v = n(985018),
    A = n(313877);
let I = (0, f.createChannelRecord)({
        id: "1",
        type: s.r.DM
    }),
    S = e => {
        let {
            input: t,
            username: n,
            sourceType: r,
            sourceDetails: i
        } = e;
        switch (r) {
            case b.dS.ACTIVITY:
                let a = v.intl.formatToPlainString(v.t.WmvMCo, {
                        username: n
                    }),
                    o = "\n> ".concat(i);
                return null != i ? "".concat(E.c5).concat(a, "*").concat(o, "\n").concat(t) : "".concat(E.c5).concat(a, "*\n").concat(t);
            case b.dS.AVATAR:
                let s = v.intl.formatToPlainString(v.t.lpaBsB, {
                    username: n
                });
                return "".concat(E.c5).concat(s, "*\n").concat(t);
            case b.dS.STATUS:
                let l = v.intl.formatToPlainString(v.t.lFXgFV, {
                        username: n
                    }),
                    c = "\n> ".concat(i);
                return null != i ? "".concat(E.c5).concat(l, "*").concat(c, "\n").concat(t) : "".concat(E.c5).concat(l, "*\n").concat(t);
            default:
                (0, p.xb)(r)
        }
    },
    T = e => {
        switch (e) {
            case b.dS.ACTIVITY:
                return v.t.Qn081O;
            case b.dS.AVATAR:
                return v.t.xGNPFK;
            case b.dS.STATUS:
                return v.t.g9BTCM;
            default:
                (0, p.xb)(e)
        }
    };

function C(e) {
    let {
        user: t,
        guildId: n,
        channelId: a,
        sourceType: s,
        sourceDetails: f,
        setPopoutRef: p,
        modalKey: E,
        onAction: C,
        onClose: N,
        entry: w
    } = e, {
        resetInteraction: R,
        setInteractionToast: P
    } = (0, g.Pq)(), {
        primaryColor: D
    } = (0, y.E)(), [L, x] = i.useState(""), [M, j] = i.useState((0, u.x7)(L)), k = i.useRef(!1), U = i.useRef(null), G = i.useCallback(e => {
        e.key === O.dh.ESCAPE && (e.stopPropagation(), R())
    }, [R]);
    i.useEffect(() => {
        null == p || p(null == U ? void 0 : U.current)
    }, [U, p]);
    let F = async e => {
        if (null == e) return;
        s === b.dS.AVATAR ? C({
            action: "SEND_REPLY_AVATAR"
        }) : s === b.dS.STATUS ? C({
            action: "SEND_REPLY_CUSTOM_STATUS"
        }) : C({
            action: "SEND_REPLY_ACTIVITY"
        });
        let n = S({
            input: e,
            username: h.Ay.getName(t),
            sourceType: s,
            sourceDetails: f
        });
        P(null);
        try {
            await (0, m.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReplyPopout",
                openChannel: !1,
                whenReady: !1,
                entry: w
            })
        } catch (e) {}
        P(b.AQ.REPLY)
    }, V = {
        [A.h5]: s === b.dS.STATUS,
        [A.my]: s === b.dS.AVATAR,
        [A.Eb]: s === b.dS.ACTIVITY
    };
    return (0, r.jsx)(l.l, {
        ref: U,
        onKeyDown: G,
        children: (0, r.jsx)("div", {
            className: o()(A.kL, V, {
                [A.GE]: null != D
            }),
            children: (0, r.jsx)(d.Ay, {
                parentModalKey: E,
                emojiPickerCloseOnModalOuterClick: !0,
                className: A.hF,
                innerClassName: A.rn,
                editorClassName: A.EN,
                type: c.oU.USER_PROFILE_REPLY,
                placeholder: v.intl.formatToPlainString(T(s), {
                    username: _.Ay.getName(n, a, t)
                }),
                channel: I,
                textValue: L,
                richValue: M,
                onChange: (e, t, n) => {
                    t !== L && (x(t), j(n))
                },
                focused: k.current,
                onFocus: () => {
                    k.current = !0
                },
                onSubmit: async e => {
                    let {
                        value: t
                    } = e, n = t.trim();
                    if (0 === n.length) return {
                        shouldClear: !1,
                        shouldRefocus: !1
                    };
                    try {
                        return await F(n), R(), null == N || N(), {
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
            })
        })
    })
}