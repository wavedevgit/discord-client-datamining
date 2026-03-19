/** chunk id: 573163 params = (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(73939),
    o = n(397927),
    d = n(505527),
    c = n(960538),
    u = n(860227),
    _ = n(866630),
    m = n(260821),
    h = n(985018),
    p = n(361410),
    g = n(533990);
let A = (e, t) => null == e && null == t || e === t;
class x extends r.PureComponent {
    state = {
        disableTransitionAppear: !0,
        reactionsCount: this.props.message.reactions.length,
        isHovered: !1
    };
    static getDerivedStateFromProps(e, t) {
        let n = e.message.reactions.length;
        return 0 === t.reactionsCount && n > 0 ? {
            disableTransitionAppear: !1,
            reactionsCount: n
        } : t.reactionsCount !== n ? {
            reactionsCount: n
        } : null
    }
    render() {
        let {
            message: e,
            disableReactionCreates: t,
            disableReactionUpdates: n,
            isLurking: r,
            isPendingMember: a,
            isForumToolbar: d,
            channel: A,
            className: x,
            forceAddReactions: f,
            reactionClassName: C,
            useChatFontScaling: E,
            forceHideReactionCreates: I,
            remainingReactions: v,
            combinedReactions: b,
            visibleReactionsCount: T
        } = this.props, {
            disableTransitionAppear: y
        } = this.state, S = E ? g : p, N = T > 0;
        if (!N && !f) return null;
        let j = f || N;
        return (0, i.jsxs)(s.F, {
            component: "div",
            className: l()(S.reactions, x),
            transitionAppear: !y,
            role: "group",
            transitionLeave: !1,
            id: (0, u.JH)(e),
            onMouseEnter: () => this.setState({
                isHovered: !0
            }),
            onMouseLeave: () => this.setState({
                isHovered: !1
            }),
            children: [(0, i.jsx)(_.A, {
                reactions: b,
                message: e,
                readOnly: n,
                isLurking: r,
                isPendingMember: a,
                isForumToolbar: d,
                useChatFontScaling: E,
                className: C
            }), v > 0 && (0, i.jsx)(o.DUT, {
                onClick: t => {
                    t.stopPropagation(), (0, m.$l)(A, e)
                },
                className: l()(S.reaction, C, S.remainingReactions),
                "aria-label": h.intl.string(h.t.lfIHs4),
                children: (0, i.jsxs)(o.Text, {
                    className: S.reactionInner,
                    variant: "text-sm/normal",
                    children: ["+", v]
                })
            }), !t && !I && (0, i.jsx)(c.t, {
                tabIndex: j || this.state.isHovered ? 0 : -1,
                message: e,
                channel: A,
                useChatFontScaling: E,
                isHovered: this.state.isHovered,
                className: l()({
                    [S.forceShow]: j
                })
            })]
        })
    }
}
let f = e => {
    let {
        message: t,
        maxReactions: n,
        hoistReaction: a
    } = e, {
        combinedReactions: l,
        remainingReactions: s,
        visibleReactionsCount: o
    } = r.useMemo(() => {
        let e = [],
            i = ((e, t) => {
                if (null == t) return e;
                let n = e.findIndex(e => A(e.emoji.id, t?.id) && A(e.emoji.name, t?.name));
                return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)]
            })(t.reactions, a),
            r = null != n && n < i.length ? i.slice(0, n) : i,
            l = i.length - r.length,
            s = i.length;
        return r.forEach(t => {
            t.burst_count > 0 && e.push({
                ...t,
                type: d.v.BURST
            }), t.count > 0 && e.push({
                ...t,
                type: d.v.NORMAL
            }), null != t.me_vote && --s
        }), {
            combinedReactions: e,
            visibleReactionsCount: s,
            remainingReactions: l
        }
    }, [a, n, t.reactions]);
    return (0, i.jsx)(x, {
        ...e,
        visibleReactionsCount: o,
        combinedReactions: l,
        remainingReactions: s
    })
}