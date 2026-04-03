/** chunk id: 866630 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(172218),
    o = n(317097),
    d = n(565645),
    c = n(114166),
    u = n(891734),
    m = n(505527),
    _ = n(483202),
    h = n(486025),
    p = n(108277);
let g = l.memo(function(e) {
        let t, n, {
                useChatFontScaling: l,
                hideEmoji: r,
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
                emojiSize: N
            } = e,
            S = T === m.v.BURST,
            y = (0, _.IN)(x, f, T),
            j = (0, u.g)(S && null != E ? E : []),
            L = l ? p : h,
            R = S ? C : A,
            P = (0, c.x)(R, _.$Z),
            D = {};
        if (S && null != j) {
            let {
                accentColor: e,
                backgroundColor: i,
                opacity: l
            } = j, r = (0, o.xp)(i ?? "", l) ?? "";
            y && (D.borderColor = i), D.background = r, t = e, n = e
        }
        let M = {
            minWidth: P,
            color: t,
            borderColor: n
        };
        return (0, i.jsxs)("div", {
            className: s()(L.reaction, L.reactionInner, g, {
                [L.reactionMe]: y,
                [L.reactionReadOnly]: I && !v && !b
            }),
            style: D,
            children: [(0, i.jsx)(d.A, {
                className: s()({
                    [L.hideEmoji]: r
                }),
                emojiId: a.id,
                emojiName: a.name,
                size: N,
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
            ...r
        } = e, [s, o] = l.useState(!1), [d, c] = l.useTransition(), u = l.useCallback(e => {
            !e || s || d || c(() => {
                o(!0)
            })
        }, [s, d]), h = (0, a.K)(u), p = s && !d || t ? _.qT : g;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                ref: h
            }), n.map(e => (0, i.jsx)(p, {
                ...r,
                ...e,
                emojiSize: "reaction"
            }, `${e.type===m.v.BURST?"burst:":""}${e.emoji.id??0}:${e.emoji.name}`))]
        })
    })