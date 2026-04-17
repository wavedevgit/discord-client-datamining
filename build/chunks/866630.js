/** chunk id: 866630 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(172218),
    o = n(317097),
    d = n(565645),
    c = n(114166),
    u = n(891734),
    _ = n(505527),
    m = n(260821),
    h = n(347353),
    p = n(866661);
let g = a.memo(function(e) {
        let t, n, {
                useChatFontScaling: a,
                hideEmoji: l,
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
            L = a ? p : h,
            R = S ? C : A,
            P = (0, c.x)(R, m.$Z),
            w = {};
        if (S && null != j) {
            let {
                accentColor: e,
                backgroundColor: i,
                opacity: a
            } = j, l = (0, o.xp)(i ?? "", a) ?? "";
            N && (w.borderColor = i), w.background = l, t = e, n = e
        }
        let M = {
            minWidth: P,
            color: t,
            borderColor: n
        };
        return (0, i.jsxs)("div", {
            className: r()(L.reaction, L.reactionInner, g, {
                [L.reactionMe]: N,
                [L.reactionReadOnly]: I && !v && !b
            }),
            style: w,
            children: [(0, i.jsx)(d.A, {
                className: r()({
                    [L.hideEmoji]: l
                }),
                emojiId: s.id,
                emojiName: s.name,
                size: y,
                animated: S && s.animated
            }), (0, i.jsx)("div", {
                className: L.reactionCount,
                style: M,
                children: R
            })]
        })
    }),
    A = a.memo(function(e) {
        let {
            showImmediate: t,
            reactions: n,
            ...l
        } = e, [r, o] = a.useState(!1), [d, c] = a.useTransition(), u = a.useCallback(e => {
            !e || r || d || c(() => {
                o(!0)
            })
        }, [r, d]), h = (0, s.K)(u), p = r && !d || t ? m.qT : g;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                ref: h
            }), n.map(e => (0, i.jsx)(p, {
                ...l,
                ...e,
                emojiSize: "reaction"
            }, `${e.type===_.v.BURST?"burst:":""}${e.emoji.id??0}:${e.emoji.name}`))]
        })
    })