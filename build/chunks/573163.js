/** chunk id: 573163 params = (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(73939),
    o = n(397927),
    d = n(505527),
    c = n(960538),
    u = n(860227),
    _ = n(866630),
    m = n(260821),
    h = n(985018),
    p = n(767474),
    g = n(449014);
let A = (e, t) => null == e && null == t || e === t;
class x extends l.PureComponent {
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
            isLurking: l,
            isPendingMember: s,
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
        } = this.state, N = E ? g : p, S = T > 0;
        if (!S && !f) return null;
        let j = f || S;
        return (0, i.jsxs)(a.F, {
            component: "div",
            className: r()(N.reactions, x),
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
                isLurking: l,
                isPendingMember: s,
                isForumToolbar: d,
                useChatFontScaling: E,
                className: C
            }), v > 0 && (0, i.jsx)(o.DUT, {
                onClick: t => {
                    t.stopPropagation(), (0, m.$l)(A, e)
                },
                className: r()(N.reaction, C, N.remainingReactions),
                "aria-label": h.intl.string(h.t.lfIHs4),
                children: (0, i.jsxs)(o.Text, {
                    className: N.reactionInner,
                    variant: "text-sm/normal",
                    children: ["+", v]
                })
            }), !t && !I && (0, i.jsx)(c.t, {
                tabIndex: j || this.state.isHovered ? 0 : -1,
                message: e,
                channel: A,
                useChatFontScaling: E,
                isHovered: this.state.isHovered,
                className: r()({
                    [N.forceShow]: j
                })
            })]
        })
    }
}
let f = e => {
    let {
        message: t,
        maxReactions: n,
        hoistReaction: s
    } = e, {
        combinedReactions: r,
        remainingReactions: a,
        visibleReactionsCount: o
    } = l.useMemo(() => {
        let e = [],
            i = ((e, t) => {
                if (null == t) return e;
                let n = e.findIndex(e => A(e.emoji.id, t?.id) && A(e.emoji.name, t?.name));
                return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)]
            })(t.reactions, s),
            l = null != n && n < i.length ? i.slice(0, n) : i,
            r = i.length - l.length,
            a = i.length;
        return l.forEach(t => {
            t.burst_count > 0 && e.push({
                ...t,
                type: d.v.BURST
            }), t.count > 0 && e.push({
                ...t,
                type: d.v.NORMAL
            }), null != t.me_vote && --a
        }), {
            combinedReactions: e,
            visibleReactionsCount: a,
            remainingReactions: r
        }
    }, [s, n, t.reactions]);
    return (0, i.jsx)(x, {
        ...e,
        visibleReactionsCount: o,
        combinedReactions: r,
        remainingReactions: a
    })
}