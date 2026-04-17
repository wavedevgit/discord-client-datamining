/** chunk id: 960538 params = (module,exports,require) **/
n.d(t, {
    t: () => v
}), n(938796);
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(111956),
    o = n.n(s),
    d = n(665260),
    c = n(305866),
    u = n(435371),
    _ = n(397927),
    m = n(189551),
    h = n(659859),
    p = n(649963),
    g = n(815807),
    A = n(429433),
    x = n(652215),
    f = n(307731),
    C = n(985018),
    E = n(347353),
    I = n(866661);
class v extends a.Component {
    state = {
        isReactionPickerActive: !1
    };
    ref = a.createRef();
    onAddReaction = (e, t) => {
        if (null == e) return;
        let {
            channel: n,
            message: i,
            isForumToolbar: a
        } = this.props;
        (0, p.BB)(n.id, i.id, (0, g.jq)(e), a ? p.qN.FORUM_TOOLBAR : p.qN.MESSAGE_INLINE_BUTTON, {
            burst: t
        })
    };
    handleReactionPickerToggle = () => {
        this.setState(e => ({
            isReactionPickerActive: !e.isReactionPickerActive
        }))
    };
    handleAddReactionClick = e => {
        e.stopPropagation(), this.handleReactionPickerToggle()
    };
    renderReactionPopout = e => {
        let {
            closePopout: t
        } = e, {
            channel: n,
            message: a
        } = this.props, l = (0, i.jsx)(A.C, {
            closePopout: t,
            channel: n,
            onSelectEmoji: e => {
                let {
                    emoji: n,
                    willClose: i,
                    isBurst: a
                } = e;
                this.onAddReaction(n, a), i && (a ? o()(t, 150)() : t())
            },
            analyticsOverride: {
                openPopoutType: "message_reaction_emoji_picker"
            },
            messageId: a.id
        });
        return (0, i.jsx)(c.M.Consumer, {
            children: e => {
                let {
                    inDialog: t
                } = e;
                return t ? (0, i.jsx)(_.lGe, {
                    "aria-label": C.intl.string(C.t["7Xqzdj"]),
                    children: l
                }) : l
            }
        })
    };
    render() {
        let {
            message: e,
            className: t,
            children: n,
            useChatFontScaling: a,
            tabIndex: l = 0
        } = this.props, {
            isReactionPickerActive: s
        } = this.state;
        if (e.state === x.cmJ.SENDING || (0, d.Lt)(e.flags, x.pr7.EPHEMERAL)) return null;
        let o = a ? I : E,
            c = {
                size: "sm",
                color: "currentColor",
                className: o.icon
            };
        return e.type === x.lAJ.EMOJI_ADDED && 0 === e.reactions.length ? (0, i.jsx)(h._x, {
            message: e,
            className: r()(o.reactionBtn, t)
        }) : (0, i.jsx)(_.YNO, {
            targetElementRef: this.ref,
            shouldShow: s,
            onRequestClose: this.handleReactionPickerToggle,
            renderPopout: this.renderReactionPopout,
            position: "right",
            children: (e, a) => {
                let {
                    isShown: s
                } = a;
                return (0, i.jsx)(u.m_, {
                    asContainer: !0,
                    text: C.intl.string(C.t.lfIHs4),
                    children: (0, i.jsxs)(_.DUT, {
                        ...e,
                        innerRef: this.ref,
                        tabIndex: l,
                        onClick: e => {
                            this.handleAddReactionClick(e)
                        },
                        onMouseEnter: () => (0, m.K)(f.EmojiInteractionPoint.AddReactionPopoutMouseEntered),
                        onFocus: () => (0, m.K)(f.EmojiInteractionPoint.AddReactionPopoutFocused),
                        className: r()(o.reactionBtn, {
                            [o.active]: s
                        }, t),
                        children: [(0, i.jsx)(_.nm2, {
                            ...c
                        }), n]
                    })
                })
            }
        })
    }
}