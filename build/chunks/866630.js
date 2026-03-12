/** chunk id: 866630 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(172218),
    o = n(317097),
    d = n(565645),
    c = n(114166),
    u = n(891734),
    _ = n(505527),
    m = n(260821),
    h = n(361410),
    p = n(533990);
let g = r.memo(function(e) {
        let t, n, {
                useChatFontScaling: r,
                hideEmoji: l,
                emoji: s,
                className: g,
                count: A,
                me: x,
                me_burst: f,
                burst_count: C,
                burst_colors: E,
                readOnly: I,
                isLurking: b,
                isPendingMember: T,
                type: v,
                emojiSize: S
            } = e,
            y = v === _.v.BURST,
            N = (0, m.IN)(x, f, v),
            j = (0, u.g)(y && null != E ? E : []),
            L = r ? p : h,
            R = y ? C : A,
            P = (0, c.x)(R, m.$Z),
            M = {};
        if (y && null != j) {
            let {
                accentColor: e,
                backgroundColor: i,
                opacity: r
            } = j, l = (0, o.xp)(i ?? "", r) ?? "";
            N && (M.borderColor = i), M.background = l, t = e, n = e
        }
        let w = {
            minWidth: P,
            color: t,
            borderColor: n
        };
        return (0, i.jsxs)("div", {
            className: a()(L.reaction, L.reactionInner, g, {
                [L.reactionMe]: N,
                [L.reactionReadOnly]: I && !b && !T
            }),
            style: M,
            children: [(0, i.jsx)(d.A, {
                className: a()({
                    [L.hideEmoji]: l
                }),
                emojiId: s.id,
                emojiName: s.name,
                size: S,
                animated: y && s.animated
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
            ...l
        } = e, [a, o] = r.useState(!1), [d, c] = r.useTransition(), u = r.useCallback(e => {
            !e || a || d || c(() => {
                o(!0)
            })
        }, [a, d]), h = (0, s.K)(u), p = a && !d || t ? m.qT : g;
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