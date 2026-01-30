/** chunk id: 778768, original params: e,t,n (module,exports,require) **/
n.d(t, {
    w: () => T
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    c = n(110259),
    u = n(417597),
    d = n(397927),
    h = n(846293),
    p = n(774300),
    g = n(793574),
    f = n(688810),
    m = n(139286),
    b = n(854627),
    A = n(696451),
    y = n(71393),
    O = n(958590),
    _ = n(576705),
    j = n(427262),
    x = n(582904),
    v = n(652215),
    E = n(985018),
    C = n(357694),
    S = n(248789);

function I(e) {
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
}
let N = "VoiceInviteSuggestionsPopover";

function T(e) {
    let {
        channel: t,
        onHoverOrFocus: i,
        setPopoutRef: a,
        closePopout: u
    } = e, h = l.useRef(null), p = (0, x.L7)(h), b = (0, x.kt)({
        channel: t
    }), {
        analyticsLocations: A
    } = (0, f.Ay)(g.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, m.A)({
        name: c.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: c.ImpressionTypes.POPOUT,
        properties: {
            voice_channel_id: t.id,
            voice_guild_id: t.guild_id,
            location_stack: A
        }
    }), l.useEffect(() => {
        null == a || a(h.current)
    }, [a]), l.useEffect(() => {
        null == i || i(p.isHoveringOrFocusing)
    }, [i, p]);
    let O = l.useCallback(() => {
        let e = y.A.getGuild(t.guild_id);
        o()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"), (0, d.mMO)(async () => {
            let {
                default: l
            } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(n.bind(n, 234355));
            return n => {
                var i, s;
                return (0, r.jsx)(l, (i = I({}, n), s = s = {
                    guild: e,
                    channel: t,
                    source: v.PE1.VOICE_INVITE_SUGGESTIONS
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(s)).forEach(function(e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
                }), i))
            }
        }), u()
    }, [t, u]);
    return (0, r.jsx)("div", {
        ref: h,
        "aria-label": E.intl.string(E.t.o53CL2),
        className: s()(S.popover, C.oO),
        children: (0, r.jsx)("div", {
            className: C.vW,
            children: (0, r.jsxs)("ul", {
                className: C.p_,
                children: [b.map(e => (0, r.jsx)(P, {
                    channel: t,
                    user: e
                }, e.id)), (0, r.jsxs)(d.DUT, {
                    tag: "li",
                    onClick: O,
                    className: s()(C.nM, C.vk),
                    children: [(0, r.jsx)("div", {
                        className: C.R4,
                        children: (0, r.jsx)(d.nFg, {
                            size: "xs",
                            className: C.Kk
                        })
                    }), (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        className: C.UU,
                        lineClamp: 1,
                        children: E.intl.string(E.t.NOP3Ry)
                    })]
                })]
            })
        })
    })
}

function P(e) {
    let {
        channel: t,
        user: n
    } = e, i = l.useRef(null), a = (0, u.bG)([A.Ay], () => A.Ay.getMember(t.guild_id, n.id), [t.guild_id, n.id]), {
        isHoveringOrFocusing: o
    } = (0, x.L7)(i), [c, g] = l.useState(null), f = "success" === c || "sending" === c, m = l.useCallback(async () => {
        if (f) return;
        async function e() {
            var e, n, r;
            let l = null != (e = O.A.getInvite(t.id, {})) ? e : null;
            if (null == l) {
                if (!_.A.can(v.xBc.CREATE_INSTANT_INVITE, t)) return null;
                try {
                    await h.Ay.createInvite(t.id, {}, N)
                } catch (e) {
                    return null
                }
                l = null != (r = O.A.getInvite(t.id, {})) ? r : null
            }
            return null != (n = null == l ? void 0 : l.code) ? n : null
        }
        g("sending");
        let r = await e();
        null == r ? g(null) : p.A.enqueue({
            type: p.F.USER,
            user: n,
            inviteKey: r,
            location: N,
            inviteAnalyticsMetadata: {
                source: v.PE1.VOICE_INVITE_SUGGESTIONS
            }
        }, e => {
            g(e ? "success" : null)
        })
    }, [f, n, t]), {
        avatarDecorationSrc: y,
        avatarSrc: S,
        eventHandlers: T
    } = (0, b.A)({
        userId: n.id,
        size: d._3J.SIZE_24,
        animateOnHover: !o,
        guildId: t.guild_id
    });
    if (null == a) return null;
    let P = j.Ay.getName(n),
        w = E.intl.string(E.t.jYnGPG);
    return (0, r.jsxs)(d.DUT, {
        innerRef: i,
        tag: "li",
        className: s()(C.nM, {
            [C.vk]: !f
        }),
        "aria-disabled": f,
        onClick: m,
        "aria-label": w,
        children: [(0, r.jsx)(d.euF, I({
            className: C.my,
            "aria-label": P,
            size: d._3J.SIZE_24,
            src: S,
            avatarDecoration: y
        }, T)), (0, r.jsx)(d.Text, {
            variant: "text-md/medium",
            className: C.UU,
            lineClamp: 1,
            children: P
        }), "sending" === c && (0, r.jsx)("div", {
            className: C.r$,
            children: (0, r.jsx)(d.nvX, {
                dotRadius: 2,
                themed: !0
            })
        }), "success" === c && (0, r.jsx)(d.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: C.h5,
            lineClamp: 1,
            children: E.intl.string(E.t["8BEiNn"])
        }), null == c && (0, r.jsx)("div", {
            className: C.SB,
            children: (0, r.jsx)(d.Rvf, {
                color: "currentColor",
                size: "xs",
                className: C.Kk
            })
        })]
    })
}