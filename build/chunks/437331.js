/** chunk id: 437331 params = (module,exports,require) **/
n.d(t, {
    V: () => D
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(47167),
    o = n(713654),
    u = n(941971),
    d = n(309632),
    c = n(734057),
    h = n(71393),
    g = n(290863),
    m = n(222823),
    f = n(287809),
    A = n(914853),
    I = n(1404),
    E = n(102983),
    p = n(578093),
    _ = n(912156),
    S = n(67103),
    x = n(953013),
    T = n(576420),
    N = n(336148),
    C = n(760023);

function v(e) {
    return (0, i.jsx)(s.hVq, {
        count: e
    })
}

function y(e) {
    let {
        channelId: t,
        listItemId: n,
        mentionCount: l,
        unread: r
    } = e, o = (0, a.Ay)(c.A.getChannel(t) ?? void 0, !0) ?? "???";
    return (0, i.jsx)(I.D, {
        listItemId: n,
        leftIndicator: (0, i.jsx)(u.A, {
            unread: r
        }),
        avatar: (0, i.jsx)(s.euF, {
            src: void 0,
            "aria-hidden": !0,
            size: s._3J.SIZE_32
        }),
        primaryText: (0, i.jsx)("span", {
            children: (0, i.jsx)(s.Text, {
                className: C.Xh,
                variant: "text-sm/medium",
                color: "text-muted",
                children: o
            })
        }),
        rightActions: () => l > 0 ? v(l) : null
    })
}

function M(e) {
    let {
        channel: t,
        listItemId: n,
        mentionCount: o,
        isMentionLowImportance: c,
        unread: h,
        onPrimaryAction: m,
        onContextMenu: _
    } = e, T = t.id, y = (0, a.Ay)(t, !1) ?? "???", M = (0, N.X6)(t), R = (0, d.A)(t, !1), {
        user: D,
        status: b,
        isMobile: O
    } = (0, r.cf)([f.default, g.A], () => {
        if (!t.isDM()) return {
            user: null,
            status: null,
            isMobile: !1
        };
        let e = t.getRecipientId(),
            n = null != e ? f.default.getUser(e) : null;
        return {
            user: n,
            status: null != e ? g.A.getStatus(e) : null,
            isMobile: null != e && g.A.isMobileOnline(e)
        }
    }, [t]), w = l.useCallback(e => {
        let n = t.isMultiUserDM() ? S.K.GROUP_DM_CHANNEL : S.K.DM_CHANNEL;
        _?.({
            type: n,
            event: e,
            channel: t,
            user: D ?? void 0
        })
    }, [t, _, D]), j = t.isMultiUserDM() || t.isPrivate() && t.recipients.length >= 2, U = l.useCallback(() => {
        m?.({
            type: S.c.OPEN_TEXT_CHAT_CHANNEL,
            channelId: T,
            guildId: null
        })
    }, [T, m]);
    return (0, i.jsx)(I.D, {
        listItemId: n,
        leftIndicator: (0, i.jsx)(u.A, {
            unread: h
        }),
        onClick: U,
        onContextMenu: w,
        avatar: (0, i.jsx)(E.h, {
            channel: t,
            user: D,
            "aria-hidden": !0,
            size: s._3J.SIZE_32,
            status: b,
            isMobile: O,
            isTyping: M,
            mentionCount: o,
            isMentionLowImportance: c
        }),
        primaryText: (0, i.jsx)("div", {
            className: C.QV,
            children: (0, i.jsx)(s.Text, {
                className: C.Xh,
                variant: "text-sm/medium",
                color: h || o > 0 ? "text-strong" : "text-muted",
                children: y
            })
        }),
        secondaryText: null != R ? (0, i.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: (0, i.jsx)(x.o, {
                channel: t,
                message: R
            })
        }) : null,
        rightActions: e => (0, i.jsxs)(i.Fragment, {
            children: [o > 0 ? v(o) : null, e && j ? (0, i.jsx)(p.j, {
                tab: A.x.MESSAGES,
                targetId: T
            }) : null]
        })
    })
}

function R(e) {
    let t, {
            channel: n,
            listItemId: c,
            mentionCount: g,
            unread: m,
            recentlyAddedTimestampMs: f,
            onPrimaryAction: E,
            onContextMenu: T
        } = e,
        y = n.id,
        M = n.getGuildId?.() ?? null,
        R = (0, r.bG)([h.A], () => null != M ? h.A.getGuild(M) ?? null : null, [M]),
        D = (0, a.Ay)(n, !1) ?? "???",
        b = (0, N.X6)(n),
        O = (0, N.DL)(n),
        w = (0, d.A)(n, !1),
        j = (0, s.rdh)(s.LU0.colors.TEXT_STRONG),
        U = (0, s.rdh)(s.LU0.colors.TEXT_MUTED),
        L = m || g > 0 ? "text-strong" : "text-muted",
        k = m || g > 0 ? j : U,
        G = l.useCallback(e => {
            T?.({
                type: S.K.GUILD_TEXT_CHANNEL,
                event: e,
                channel: n,
                guild: R
            })
        }, [n, R, T]),
        P = l.useCallback(() => {
            E?.({
                type: S.c.OPEN_TEXT_CHAT_CHANNEL,
                channelId: y,
                guildId: M
            })
        }, [y, M, E]);
    return (0, i.jsx)(I.D, {
        listItemId: c,
        recentlyAddedTimestampMs: f,
        leftIndicator: (0, i.jsx)(u.A, {
            unread: m
        }),
        onClick: P,
        onContextMenu: G,
        avatar: (0, i.jsx)(_.A, {
            channel: n,
            guild: R ?? void 0,
            size: _.Q.SMALL_32,
            isTyping: b,
            typingFillColor: O ?? void 0
        }),
        primaryText: (0, i.jsxs)("div", {
            className: C.QV,
            children: [null == (t = (0, o.gU)(n, R)) ? null : (0, i.jsx)(t, {
                color: k.hex(),
                size: "xxs",
                className: C.p
            }), (0, i.jsx)(s.Text, {
                className: C.Xh,
                variant: "text-sm/medium",
                color: L,
                children: D
            })]
        }),
        secondaryText: (0, i.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: (0, i.jsx)(x.o, {
                channel: n,
                message: w,
                showTypingPreview: !0
            })
        }),
        rightActions: e => (0, i.jsxs)(i.Fragment, {
            children: [g > 0 ? v(g) : null, e ? (0, i.jsx)(p.j, {
                tab: A.x.MESSAGES,
                targetId: y
            }) : null]
        })
    })
}

function D(e) {
    let {
        channelId: t,
        listItemId: n,
        shouldHighlightIfRecentlyAdded: l,
        onPrimaryAction: s,
        onContextMenu: a
    } = e, o = (0, r.bG)([c.A], () => c.A.getChannel(t), [t]), {
        mentionCount: u,
        unread: d,
        isMentionLowImportance: h
    } = (0, r.cf)([m.Ay], () => ({
        mentionCount: m.Ay.getMentionCount(t),
        isMentionLowImportance: m.Ay.getIsMentionLowImportance(t),
        unread: m.Ay.hasUnread(t)
    }), [t]), g = (0, T.A2)(t);
    return null == o ? (0, i.jsx)(y, {
        channelId: t,
        listItemId: n,
        mentionCount: u,
        unread: d
    }) : o.isPrivate() ? (0, i.jsx)(M, {
        channel: o,
        listItemId: n,
        mentionCount: u,
        isMentionLowImportance: h,
        unread: d,
        onPrimaryAction: s,
        onContextMenu: a
    }) : (0, i.jsx)(R, {
        channel: o,
        listItemId: n,
        mentionCount: u,
        unread: d,
        recentlyAddedTimestampMs: l ? g : null,
        onPrimaryAction: s,
        onContextMenu: a
    })
}