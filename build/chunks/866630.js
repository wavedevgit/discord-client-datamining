/** chunk id: 866630 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(172218),
    o = n(317097),
    d = n(565645),
    c = n(114166),
    u = n(891734),
    _ = n(505527),
    m = n(483202),
    h = n(486025),
    p = n(108277);
let g = l.memo(function(e) {
        let t, n, {
                useChatFontScaling: l,
                hideEmoji: s,
                emoji: a,
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
            L = l ? p : h,
            R = S ? C : A,
            P = (0, c.x)(R, m.$Z),
            D = {};
        if (S && null != j) {
            let {
                accentColor: e,
                backgroundColor: i,
                opacity: l
            } = j, s = (0, o.xp)(i ?? "", l) ?? "";
            N && (D.borderColor = i), D.background = s, t = e, n = e
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
            style: D,
            children: [(0, i.jsx)(d.A, {
                className: r()({
                    [L.hideEmoji]: s
                }),
                emojiId: a.id,
                emojiName: a.name,
                size: y,
                animated: S && a.animated
            }), (0, i.jsx)("div", {
                className: L.reactionCount,
                style: M,
                children: R
            })]
        })
    }),
    A = l.memo(function(e) {
        let {
            showImmediate: t,
            reactions: n,
            ...s
        } = e, [r, o] = l.useState(!1), [d, c] = l.useTransition(), u = l.useCallback(e => {
            !e || r || d || c(() => {
                o(!0)
            })
        }, [r, d]), h = (0, a.K)(u), p = r && !d || t ? m.qT : g;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                ref: h
            }), n.map(e => (0, i.jsx)(p, {
                ...s,
                ...e,
                emojiSize: "reaction"
            }, `${e.type===_.v.BURST?"burst:":""}${e.emoji.id??0}:${e.emoji.name}`))]
        })
    })