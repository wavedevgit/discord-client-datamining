/** chunk id: 573163, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(73939),
    o = n(397927),
    d = n(505527),
    c = n(960538),
    u = n(860227),
    _ = n(866630),
    m = n(260821),
    h = n(985018),
    p = n(233080),
    g = n(710504);
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
            isPendingMember: r,
            isForumToolbar: d,
            channel: A,
            className: x,
            forceAddReactions: f,
            reactionClassName: C,
            useChatFontScaling: E,
            forceHideReactionCreates: I,
            remainingReactions: b,
            combinedReactions: T,
            visibleReactionsCount: v
        } = this.props, {
            disableTransitionAppear: S
        } = this.state, y = E ? g : p, N = v > 0;
        if (!N && !f) return null;
        let j = f || N;
        return (0, i.jsxs)(s.F, {
            component: "div",
            className: a()(y.reactions, x),
            transitionAppear: !S,
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
                reactions: T,
                message: e,
                readOnly: n,
                isLurking: l,
                isPendingMember: r,
                isForumToolbar: d,
                useChatFontScaling: E,
                className: C
            }), b > 0 && (0, i.jsx)(o.DUT, {
                onClick: t => {
                    t.stopPropagation(), (0, m.$l)(A, e)
                },
                className: a()(y.reaction, C, y.remainingReactions),
                "aria-label": h.intl.string(h.t.lfIHs4),
                children: (0, i.jsxs)(o.Text, {
                    className: y.reactionInner,
                    variant: "text-sm/normal",
                    children: ["+", b]
                })
            }), !t && !I && (0, i.jsx)(c.t, {
                tabIndex: j || this.state.isHovered ? 0 : -1,
                message: e,
                channel: A,
                useChatFontScaling: E,
                isHovered: this.state.isHovered,
                className: a()({
                    [y.forceShow]: j
                })
            })]
        })
    }
}
let f = e => {
    let {
        message: t,
        maxReactions: n,
        hoistReaction: r
    } = e, {
        combinedReactions: a,
        remainingReactions: s,
        visibleReactionsCount: o
    } = l.useMemo(() => {
        let e = [],
            i = ((e, t) => {
                if (null == t) return e;
                let n = e.findIndex(e => A(e.emoji.id, t?.id) && A(e.emoji.name, t?.name));
                return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)]
            })(t.reactions, r),
            l = null != n && n < i.length ? i.slice(0, n) : i,
            a = i.length - l.length,
            s = i.length;
        return l.forEach(t => {
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
            remainingReactions: a
        }
    }, [r, n, t.reactions]);
    return (0, i.jsx)(x, {
        ...e,
        visibleReactionsCount: o,
        combinedReactions: a,
        remainingReactions: s
    })
}