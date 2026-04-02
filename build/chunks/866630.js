/** chunk id: 866630 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(172218),
    o = n(317097),
    d = n(565645),
    c = n(114166),
    u = n(891734),
    _ = n(505527),
    m = n(260821),
    h = n(767474),
    p = n(449014);
let g = a.memo(function(e) {
        let t, n, {
                useChatFontScaling: a,
                hideEmoji: r,
                emoji: s,
                className: g,
                count: A,
                me: x,
                me_burst: f,
                burst_count: C,
                burst_colors: I,
                readOnly: E,
                isLurking: b,
                isPendingMember: v,
                type: T,
                emojiSize: S
            } = e,
            y = T === _.v.BURST,
            N = (0, m.IN)(x, f, T),
            j = (0, u.g)(y && null != I ? I : []),
            L = a ? p : h,
            R = y ? C : A,
            P = (0, c.x)(R, m.$Z),
            w = {};
        if (y && null != j) {
            let {
                accentColor: e,
                backgroundColor: i,
                opacity: a
            } = j, r = (0, o.xp)(i ?? "", a) ?? "";
            N && (w.borderColor = i), w.background = r, t = e, n = e
        }
        let D = {
            minWidth: P,
            color: t,
            borderColor: n
        };
        return (0, i.jsxs)("div", {
            className: l()(L.reaction, L.reactionInner, g, {
                [L.reactionMe]: N,
                [L.reactionReadOnly]: E && !b && !v
            }),
            style: w,
            children: [(0, i.jsx)(d.A, {
                className: l()({
                    [L.hideEmoji]: r
                }),
                emojiId: s.id,
                emojiName: s.name,
                size: S,
                animated: y && s.animated
            }), (0, i.jsx)("div", {
                className: L.reactionCount,
                style: D,
                children: R
            })]
        })
    }),
    A = a.memo(function(e) {
        let {
            showImmediate: t,
            reactions: n,
            ...r
        } = e, [l, o] = a.useState(!1), [d, c] = a.useTransition(), u = a.useCallback(e => {
            !e || l || d || c(() => {
                o(!0)
            })
        }, [l, d]), h = (0, s.K)(u), p = l && !d || t ? m.qT : g;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                ref: h
            }), n.map(e => (0, i.jsx)(p, {
                ...r,
                ...e,
                emojiSize: "reaction"
            }, `${e.type===_.v.BURST?"burst:":""}${e.emoji.id??0}:${e.emoji.name}`))]
        })
    })