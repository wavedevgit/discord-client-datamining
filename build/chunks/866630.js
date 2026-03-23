/** chunk id: 866630 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(172218),
    o = n(317097),
    d = n(565645),
    c = n(114166),
    u = n(891734),
    _ = n(505527),
    m = n(260821),
    h = n(233080),
    p = n(710504);
let g = r.memo(function(e) {
        let t, n, {
                useChatFontScaling: r,
                hideEmoji: a,
                emoji: s,
                className: g,
                count: A,
                me: x,
                me_burst: f,
                burst_count: C,
                burst_colors: E,
                readOnly: I,
                isLurking: v,
                isPendingMember: b,
                type: T,
                emojiSize: y
            } = e,
            S = T === _.v.BURST,
            N = (0, m.IN)(x, f, T),
            j = (0, u.g)(S && null != E ? E : []),
            L = r ? p : h,
            R = S ? C : A,
            P = (0, c.x)(R, m.$Z),
            M = {};
        if (S && null != j) {
            let {
                accentColor: e,
                backgroundColor: i,
                opacity: r
            } = j, a = (0, o.xp)(i ?? "", r) ?? "";
            N && (M.borderColor = i), M.background = a, t = e, n = e
        }
        let w = {
            minWidth: P,
            color: t,
            borderColor: n
        };
        return (0, i.jsxs)("div", {
            className: l()(L.reaction, L.reactionInner, g, {
                [L.reactionMe]: N,
                [L.reactionReadOnly]: I && !v && !b
            }),
            style: M,
            children: [(0, i.jsx)(d.A, {
                className: l()({
                    [L.hideEmoji]: a
                }),
                emojiId: s.id,
                emojiName: s.name,
                size: y,
                animated: S && s.animated
            }), (0, i.jsx)("div", {
                className: L.reactionCount,
                style: w,
                children: R
            })]
        })
    }),
    A = r.memo(function(e) {
        let {
            showImmediate: t,
            reactions: n,
            ...a
        } = e, [l, o] = r.useState(!1), [d, c] = r.useTransition(), u = r.useCallback(e => {
            !e || l || d || c(() => {
                o(!0)
            })
        }, [l, d]), h = (0, s.K)(u), p = l && !d || t ? m.qT : g;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                ref: h
            }), n.map(e => (0, i.jsx)(p, {
                ...a,
                ...e,
                emojiSize: "reaction"
            }, `${e.type===_.v.BURST?"burst:":""}${e.emoji.id??0}:${e.emoji.name}`))]
        })
    })