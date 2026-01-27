/** Chunk was on 77870 **/
/** chunk id: 572448, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(837381),
    a = n(311907),
    o = n(827734),
    c = n(435371),
    u = n(397927),
    d = n(901517),
    p = n(397244),
    h = n(714114),
    f = n(729551),
    g = n(58149),
    m = n(571694),
    b = n(47167),
    A = n(713654),
    y = n(915089),
    _ = n(263063),
    O = n(616356),
    j = n(734057),
    v = n(71393),
    x = n(290863),
    E = n(222823),
    C = n(287809),
    S = n(147925),
    I = n(652215),
    N = n(985018),
    T = n(386590);
let P = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};

function w(e) {
    let {
        channelState: t,
        toggle: n,
        getNumUnreadChannels: l
    } = e;
    return (0, r.jsx)(c.m_, {
        text: N.intl.string(N.t.iTcuma),
        children: (0, r.jsx)(u.DUT, {
            className: i()(T.cS, {
                [T.yZ]: null == t ? void 0 : t.collapsed
            }),
            onClick: function() {
                var e;
                null != t && null != n && (n(t), (0, g.zV)(I.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: null != (e = null == l ? void 0 : l()) ? e : 0,
                    is_now_collapsed: !t.collapsed
                }))
            },
            children: (0, r.jsx)(S.A, {
                width: 16,
                height: 16
            })
        })
    })
}

function R(e) {
    var t, n;
    let {
        channel: l,
        children: a,
        gotoChannel: o,
        mentionCount: c,
        channelState: d,
        toggleCollapsed: p,
        showCollapseButton: h = !1,
        getNumUnreadChannels: f
    } = e, g = (0, s.rm)("recents-header-".concat(l.id, "-").concat((0, y.GV)())), m = h && !l.isNSFW() && null != d && "nsfw" !== d.type;
    return (0, r.jsx)(u.vN3, {
        offset: P,
        children: (0, r.jsxs)("div", (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({
            className: i()(T.ZO, {
                [T.b4]: m
            })
        }, g), n = n = {
            tabIndex: 0,
            "data-recents-channel": l.id,
            onKeyDown: function(e) {
                null != p && null != d && ("ArrowRight" === e.key && d.collapsed || "ArrowLeft" === e.key && !d.collapsed) && (null == p || p(d))
            },
            children: [m && null != d ? (0, r.jsx)(w, {
                channelState: d,
                toggle: p,
                getNumUnreadChannels: f
            }) : null, (0, r.jsx)(D, {
                channel: l,
                gotoChannel: o
            }), (0, r.jsx)(k, {
                channel: l,
                gotoChannel: o,
                mentionCount: c
            }), a]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
    })
}

function D(e) {
    let {
        channel: t,
        gotoChannel: n
    } = e;
    return t.isPrivate() ? (0, r.jsx)(M, {
        channel: t,
        gotoChannel: n
    }) : (0, r.jsx)(L, {
        channel: t,
        gotoChannel: n
    })
}

function M(e) {
    let {
        channel: t,
        gotoChannel: n
    } = e, l = (0, a.bG)([C.default], () => t.isDM() ? C.default.getUser(t.getRecipientId()) : null), i = null == l ? (0, m.Y)(t) : l.getAvatarURL(void 0, 40);
    return (0, r.jsx)(u.DUT, {
        onClick: n,
        tabIndex: -1,
        children: (0, r.jsx)("img", {
            className: T.ro,
            src: i,
            alt: "",
            "aria-hidden": !0
        })
    })
}

function L(e) {
    let {
        channel: t,
        gotoChannel: n
    } = e, l = (0, a.bG)([v.A], () => v.A.getGuild(t.guild_id));
    return null == l ? null : (0, r.jsx)(_.A, {
        "aria-hidden": !0,
        className: T.$f,
        guild: l,
        size: _.A.Sizes.MEDIUM,
        active: !0,
        onClick: n,
        tabIndex: -1
    })
}

function k(e) {
    let {
        channel: t,
        gotoChannel: n,
        mentionCount: l
    } = e, s = (0, a.bG)([v.A], () => v.A.getGuild(t.guild_id)), c = (0, a.bG)([j.A], () => j.A.getChannel(t.parent_id)), d = (0, a.bG)([E.Ay], () => E.Ay.getIsMentionLowImportance(t.id)), p = (0, A.gU)(t, s), h = (0, b.Ay)(t, !1), f = null == c ? null == s ? void 0 : s.name : "".concat(null == s ? void 0 : s.name, " › ").concat(c.name), g = t.isMultiUserDM() ? N.intl.formatToPlainString(N.t.CxSA5N, {
        members: t.recipients.length + 1
    }) : t.isPrivate() ? (0, r.jsx)(G, {
        channel: t
    }) : (0, r.jsx)(u.DUT, {
        className: i()(T.W$, T.J5),
        onClick: n,
        children: f
    });
    return (0, r.jsxs)("div", {
        className: T.yP,
        children: [(0, r.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            className: T.un,
            children: (0, r.jsxs)(u.DUT, {
                className: T.HA,
                onClick: n,
                children: [t.isThread() || t.isGroupDM() || null == p ? null : (0, r.jsx)(p, {
                    className: t.isForumLikeChannel() ? T.dj : void 0,
                    width: 18,
                    height: 18,
                    size: "custom",
                    color: "currentColor"
                }), (0, r.jsx)("span", {
                    className: T.je,
                    children: h
                }), null != l && l > 0 ? (0, r.jsx)("div", {
                    className: T.qS,
                    children: (0, r.jsx)(u.hVq, {
                        count: l,
                        color: d ? o.A.colors.BACKGROUND_MOD_STRONG.css : o.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css
                    })
                }) : null]
            })
        }), (0, r.jsx)(u.Text, {
            color: "text-default",
            variant: "text-xs/normal",
            className: T.PL,
            children: g
        })]
    })
}

function G(e) {
    let {
        channel: t
    } = e, {
        user: n,
        status: l,
        activities: i,
        applicationStream: s
    } = (0, a.cf)([C.default, x.A, O.A], () => {
        let e = C.default.getUser(t.getRecipientId());
        return {
            user: e,
            status: null != e ? x.A.getStatus(e.id) : null,
            activities: null != e ? x.A.getActivities(e.id) : null,
            applicationStream: null != e ? O.A.getAnyStreamForUser(e.id) : null
        }
    }), {
        voiceActivityStatusEnabled: o
    } = (0, d.G)({
        location: "RecentsChannelHeader"
    }), {
        voiceChannel: c
    } = (0, h.A)({
        userId: null == n ? void 0 : n.id
    }), u = o ? c : void 0;
    return (0, p.A)({
        activities: i,
        status: l,
        applicationStream: s,
        voiceChannel: u
    }) ? (0, r.jsx)(f.A, {
        user: n,
        activities: i,
        applicationStream: s,
        voiceChannel: u,
        hideTooltip: !0
    }) : null
}