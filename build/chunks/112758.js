/** chunk id: 112758 params = (module,exports,require) **/
n.d(t, {
    Am: () => k,
    Ck: () => F,
    G8: () => G,
    Ge: () => P,
    H9: () => S,
    I: () => j,
    Jo: () => R,
    T0: () => y,
    UY: () => O,
    U_: () => H,
    VL: () => M,
    Yq: () => D,
    m: () => N,
    r4: () => w,
    ri: () => U,
    yp: () => B
}), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(621466),
    s = n(665260),
    a = n(442433),
    o = n(843472),
    d = n(414798),
    c = n(267102),
    u = n(594061),
    m = n(734057),
    _ = n(580745),
    h = n(320501),
    p = n(287809),
    g = n(954571),
    A = n(203982),
    x = n(723702),
    f = n(427262),
    C = n(841549),
    E = n(439147),
    I = n(81437),
    v = n(652215);

function b(e, t, n) {
    return l.useCallback(() => {
        n({
            [e]: !t
        })
    }, [e, n, t])
}

function T(e, t, n) {
    return l.useCallback(i => {
        let l = p.default.getUser(e);
        if (null == l) return;
        if (i.preventDefault(), i.stopPropagation(), !i.shiftKey) return void n();
        let r = `@${f.Ay.getUserTag(l,{decoration:"never"})}`,
            s = `<@${e}>`;
        A._.dispatchToLastSubscribed(v.jej.INSERT_TEXT, {
            plainText: r,
            rawText: s
        }), d.A.startTyping(t)
    }, [e, t, n])
}

function N(e, t, n, i) {
    let l = b("usernameProfile", n, i);
    return T(e.author.id, t.id, l)
}

function S(e, t, n, i) {
    let l = b("referencedUsernameProfile", n, i);
    return T(e?.author.id, t.id, l)
}

function y(e, t, n, i) {
    let l = b("interactionUsernameProfile", n, i);
    return T(e?.user.id, t.id, l)
}

function j(e, t, n, i) {
    let l = b("referencedUsernameProfile", n, i);
    return T(e, t.id, l)
}

function L(e) {
    return l.useCallback(t => {
        t.preventDefault(), t.stopPropagation(), e()
    }, [e])
}

function R(e, t) {
    return L(b("avatarProfile", e, t))
}

function P(e, t) {
    return L(b("referencedAvatarProfile", e, t))
}

function D(e, t) {
    return L(b("interactionAvatarProfile", e, t))
}

function M(e, t, r, o) {
    let {
        id: d
    } = t, {
        id: u,
        flags: p
    } = e, A = (0, s.Lt)(p, v.pr7.EPHEMERAL), f = (0, c.Us)();
    return l.useCallback((e, t) => {
        if (A) return;
        if (!x.isPlatformEmbedded) {
            let t = e.target;
            if ("A" === t.tagName && "" !== t.textContent || null == window.getSelection) return;
            let n = window.getSelection();
            if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return
        }
        let l = m.A.getChannel(d),
            s = h.A.getMessage(d, u),
            c = _.A.isEditing(d, u);
        null == l || null == s || c || (g.default.track(v.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
            message_id: u,
            channel: d,
            location: "right_click"
        }), r({
            contextMenu: !0
        }), (0, a.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([n.e("11478"), n.e("91139"), n.e("76122"), n.e("79463"), n.e("54816"), n.e("11902"), n.e("1636"), n.e("35689")]).then(n.bind(n, 547983));
            return n => (0, i.jsx)(e, {
                ...n,
                message: s,
                channel: l,
                mediaItem: t,
                shouldHideMediaOptions: o
            })
        }, {
            onClose: () => r({
                contextMenu: !1
            }),
            context: f
        }))
    }, [A, d, u, r, f, o])
}

function w(e, t) {
    return l.useCallback(n => {
        let i = p.default.getUser(e),
            l = m.A.getChannel(t);
        null != i && null != l && (n.stopPropagation(), (0, C.wQ)(n, i, l))
    }, [e, t])
}

function O(e, t, n) {
    return l.useCallback(i => {
        let l = p.default.getUser(e),
            r = m.A.getChannel(t);
        null != l && null != r && (i.stopPropagation(), (0, C.B8)(i, {
            user: l,
            channel: r,
            moderationAlertId: n
        }))
    }, [e, t, n])
}

function k(e, t) {
    return l.useCallback(n => {
        let i = p.default.getUser(e),
            l = m.A.getChannel(t);
        null != i && null != l && (n.stopPropagation(), (0, C.pB)(n, i, l.guild_id))
    }, [e, t])
}

function U(e, t) {
    let {
        id: n
    } = e, {
        id: i
    } = t;
    return l.useCallback(e => {
        e.altKey && (e.preventDefault(), (0, E.A)(i, n))
    }, [i, n])
}

function B(e) {
    let {
        groupId: t,
        message: n,
        defaultValue: i
    } = e, r = n.author.id, s = `${t}:${r}`, a = l.useRef(i), [o, d] = l.useState(i);
    a.current = o || a.current;
    let c = l.useCallback(() => {
            (0, u.cE)(), o || (A._.dispatchKeyed(v.zOV.ANIMATE_CHAT_AVATAR, s, !0), d(!0))
        }, [o, s]),
        m = l.useCallback(() => {
            A._.dispatchKeyed(v.zOV.ANIMATE_CHAT_AVATAR, s, !1), d(!1)
        }, [s]);
    return {
        hasHovered: a.current,
        isHovered: o,
        handleMouseEnter: c,
        handleMouseLeave: m
    }
}

function G(e, t) {
    let [n, i] = l.useState(!1), [s, a] = l.useState(!1);
    return {
        handleFocus: l.useCallback(t => {
            let n = (0, r.BF)(t)?.activeElement ?? null;
            (t.target === t.currentTarget || t.currentTarget.contains(n)) && (a(!0), i(!0)), null != e && e(t)
        }, [e]),
        handleBlur: l.useCallback(e => {
            let n = (0, r.BF)(e)?.activeElement ?? null;
            e.target !== e.currentTarget && e.currentTarget.contains(n) || i(!1), null != t && t(e)
        }, [t]),
        isFocused: n,
        hasFocused: s
    }
}

function F(e, t) {
    return l.useCallback(() => {
        let {
            messageReference: n
        } = e, i = () => {
            o.A.jumpToMessage({
                channelId: n.channel_id,
                messageId: n.message_id,
                flash: !0,
                returnMessageId: e.id
            })
        };
        (null == t || (0, I.A)(t, i)) && i()
    }, [t, e])
}

function H(e, t) {
    let n = b("interactionData", e, t);
    return l.useCallback(e => {
        e.preventDefault(), e.stopPropagation(), n()
    }, [n])
}