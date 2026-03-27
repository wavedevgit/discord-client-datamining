/** chunk id: 977851 params = (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => b
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n(311907),
    c = n(367513),
    d = n(688810),
    u = n(313961),
    h = n(384059),
    A = n(222823),
    m = n(309010),
    _ = n(741961),
    g = n(234320),
    p = n(20465),
    f = n(108460),
    x = n(709562),
    C = n(652215),
    E = n(985018);

function I(e) {
    let t = (0, o.bG)([_.A], () => !(0, r.isEmpty)(_.A.getTypingUsers(e)), [e]),
        n = (0, o.bG)([m.A], () => m.A.getVoiceChannelId() === e, [e]),
        {
            unreadCount: i,
            mentionCount: s
        } = (0, o.cf)([A.Ay], () => ({
            unreadCount: A.Ay.getUnreadCount(e),
            mentionCount: A.Ay.getMentionCount(e)
        }), [e]);
    return {
        unreadCount: i,
        mentionCount: s,
        voiceChannelIsSelected: n,
        isTyping: t
    }
}

function N(e) {
    let {
        className: t,
        channelId: n
    } = e, {
        unreadCount: s,
        mentionCount: l,
        isTyping: a,
        voiceChannelIsSelected: r
    } = I(n);
    return (0, i.jsx)(f.A, {
        className: t,
        unreadCount: s,
        mentionCount: l,
        isTyping: a,
        canBadge: r
    })
}

function b(e) {
    let t, {
            channelId: n,
            className: l,
            showingClassName: r,
            onClick: A,
            inPopout: m,
            showRequestToSpeakSidebar: _,
            toggleRequestToSpeakSidebar: f,
            ...b
        } = e,
        {
            parentAnalyticsLocation: S
        } = (0, d.Ay)(),
        {
            disabled: T
        } = b,
        v = s.useRef(null),
        y = (0, o.bG)([u.A], () => u.A.getChatOpen(n), [n]),
        {
            isShowing: j,
            unreadCount: R,
            mentionCount: O
        } = function(e) {
            let {
                unreadCount: t,
                mentionCount: n,
                isTyping: i
            } = I(e), [l, a] = s.useState(!1);
            return s.useEffect(() => {
                a(t > 0);
                let e = setTimeout(() => {
                    a(!1)
                }, p.R);
                return () => {
                    clearTimeout(e), a(!1)
                }
            }, [t]), {
                isShowing: l || n > 0 || i,
                unreadCount: t,
                mentionCount: n
            }
        }(n),
        L = s.useCallback(() => {
            (0, h.X)(S, h.O.CHAT, !y), A?.(), !y && _ && f?.(), c.A.updateChatOpen(n, !y, "toggle chat button")
        }, [n, y, A, _, f, S]),
        M = s.useCallback(e => {
            let {
                className: t
            } = e;
            return (0, i.jsx)(N, {
                className: t,
                channelId: n
            })
        }, [n]),
        D = s.useCallback(() => {
            v.current?.focus()
        }, []);
    (0, g.Vo)({
        event: C.jej.FOCUS_CHAT_BUTTON,
        handler: T ? null : D
    });
    let [G, U] = s.useState(!1), P = s.useCallback(() => {
        m && U(!0)
    }, [m]);
    (0, g.Vo)({
        event: C.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
        handler: P
    }), s.useEffect(() => {
        let e;
        return G && (e = setTimeout(() => {
            U(!1)
        }, 3e3)), () => {
            clearTimeout(e)
        }
    }, [G]);
    let w = [t = m && T ? E.intl.string(E.t.DPgc5h) : y ? E.intl.string(E.t.nthdxB) : E.intl.string(E.t["5KxXrK"])];
    return O > 0 && w.push(E.intl.formatToPlainString(E.t["3l1GOx"], {
        mentionCount: O
    })), R > 0 && w.push(E.intl.string(E.t.x5zAGZ)), (0, i.jsx)(x.A, {
        buttonRef: v,
        onClick: L,
        label: t,
        "aria-label": w.join(", "),
        iconComponent: M,
        tooltipPosition: "bottom",
        wrapperClassName: a()(l, null != r && {
            [r]: j
        }),
        forceTooltipOpen: G,
        ...b
    })
}