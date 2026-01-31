/** chunk id: 573163, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(73939),
    o = n(397927),
    c = n(505527),
    u = n(960538),
    d = n(860227),
    p = n(866630),
    m = n(260821),
    f = n(985018),
    g = n(233080),
    _ = n(710504);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            h(e, t, n[t])
        })
    }
    return e
}

function y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let A = (e, t) => null == e && null == t || e === t;
class v extends i.PureComponent {
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
            isLurking: i,
            isPendingMember: l,
            isForumToolbar: c,
            channel: h,
            className: b,
            forceAddReactions: y,
            reactionClassName: A,
            useChatFontScaling: v,
            forceHideReactionCreates: O,
            remainingReactions: x,
            combinedReactions: E,
            visibleReactionsCount: j
        } = this.props, {
            disableTransitionAppear: C
        } = this.state, I = v ? _ : g, S = j > 0;
        if (!S && !y) return null;
        let T = y || S;
        return (0, r.jsxs)(s.F, {
            component: "div",
            className: a()(I.reactions, b),
            transitionAppear: !C,
            role: "group",
            transitionLeave: !1,
            id: (0, d.JH)(e),
            onMouseEnter: () => this.setState({
                isHovered: !0
            }),
            onMouseLeave: () => this.setState({
                isHovered: !1
            }),
            children: [(0, r.jsx)(p.A, {
                reactions: E,
                message: e,
                readOnly: n,
                isLurking: i,
                isPendingMember: l,
                isForumToolbar: c,
                useChatFontScaling: v,
                className: A
            }), x > 0 && (0, r.jsx)(o.DUT, {
                onClick: t => {
                    t.stopPropagation(), (0, m.$l)(h, e)
                },
                className: a()(I.reaction, A, I.remainingReactions),
                "aria-label": f.intl.string(f.t.lfIHs4),
                children: (0, r.jsxs)(o.Text, {
                    className: I.reactionInner,
                    variant: "text-sm/normal",
                    children: ["+", x]
                })
            }), !t && !O && (0, r.jsx)(u.t, {
                tabIndex: T || this.state.isHovered ? 0 : -1,
                message: e,
                channel: h,
                useChatFontScaling: v,
                isHovered: this.state.isHovered,
                className: a()({
                    [I.forceShow]: T
                })
            })]
        })
    }
    constructor(...e) {
        super(...e), h(this, "state", {
            disableTransitionAppear: !0,
            reactionsCount: this.props.message.reactions.length,
            isHovered: !1
        })
    }
}
let O = e => {
    let {
        message: t,
        maxReactions: n,
        hoistReaction: l
    } = e, {
        combinedReactions: a,
        remainingReactions: s,
        visibleReactionsCount: o
    } = i.useMemo(() => {
        let e = [],
            r = ((e, t) => {
                if (null == t) return e;
                let n = e.findIndex(e => A(e.emoji.id, null == t ? void 0 : t.id) && A(e.emoji.name, null == t ? void 0 : t.name));
                return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)]
            })(t.reactions, l),
            i = null != n && n < r.length ? r.slice(0, n) : r,
            a = r.length - i.length,
            s = r.length;
        return i.forEach(t => {
            t.burst_count > 0 && e.push(y(b({}, t), {
                type: c.v.BURST
            })), t.count > 0 && e.push(y(b({}, t), {
                type: c.v.NORMAL
            })), null != t.me_vote && --s
        }), {
            combinedReactions: e,
            visibleReactionsCount: s,
            remainingReactions: a
        }
    }, [l, n, t.reactions]);
    return (0, r.jsx)(v, y(b({}, e), {
        visibleReactionsCount: o,
        combinedReactions: a,
        remainingReactions: s
    }))
}