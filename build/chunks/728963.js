/** chunk id: 728963 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(155718),
    u = n(688810),
    d = n(47167),
    _ = n(740075),
    A = n(706727),
    E = n(332173),
    m = n(657331),
    I = n(734057),
    T = n(317525),
    g = n(71393),
    N = n(994500),
    f = n(287809),
    C = n(763754);
n(827669);
var p = n(985018),
    h = n(993560);
let S = {
        tag: "span",
        variant: "text-md/normal",
        color: "text-default"
    },
    R = {
        className: s()("mention", h.lE)
    };

function x(e) {
    return (0, i.jsx)(o.Text, {
        ...S,
        color: "text-strong",
        children: e
    })
}
let O = r.memo(function(e) {
    let t, {
            channel: n,
            messageId: l,
            interactionData: s
        } = e,
        {
            analyticsLocations: O
        } = (0, u.Ay)(),
        {
            onCopy: M,
            copyRef: D
        } = (0, _.A)(n, s?.application_command?.id),
        U = (0, a.bG)([g.A], () => g.A.getGuild(n.guild_id), [n.guild_id]);
    if (r.useEffect(() => {
            (null == s || s.type === c.kc.CHAT && void 0 === s.application_command) && A.S7(n.id, l)
        }, [n.id, l, s]), null == s) t = (0, i.jsx)(o.y$y, {
        type: o.y$y.Type.SPINNING_CIRCLE,
        className: h.u1
    });
    else {
        let e = [],
            a = Object.fromEntries((s.application_command?.options ?? []).map(e => [e.name, e]));
        for (let t of s.options ?? []) e = e.concat(function e(t) {
            let n, {
                    option: l,
                    channel: s,
                    guild: a,
                    messageId: u,
                    parentOptionKey: _,
                    commandOptionSpec: A,
                    sourceAnalyticsLocations: g
                } = t,
                h = null != _ ? _ + " " + l.name : l.name;
            if (l.type === c.n4.SUB_COMMAND || l.type === c.n4.SUB_COMMAND_GROUP) {
                let t = [(0, i.jsxs)(r.Fragment, {
                        children: [" ", (0, i.jsx)(o.Text, {
                            ...S,
                            children: A?.name_localized ?? l.name
                        })]
                    }, h)],
                    n = Object.fromEntries((A?.options ?? [])?.map(e => [e.name, e]));
                for (let i of l.options ?? []) t = t.concat(e({
                    option: i,
                    channel: s,
                    guild: a,
                    messageId: u,
                    parentOptionKey: h,
                    commandOptionSpec: n[i.name],
                    sourceAnalyticsLocations: g
                }));
                return t
            }
            let O = l.value;
            if (null != l.value) switch (l.type) {
                case c.n4.USER: {
                    let e = l.value.toString(),
                        t = f.default.getUser(e);
                    if (null != t) {
                        let e = (0, C.FT)(t, s);
                        n = (0, i.jsxs)(E.A, {
                            ...R,
                            onClick: () => (0, m.openUserProfileModal)({
                                userId: t.id,
                                guildId: s.guild_id,
                                channelId: s.id,
                                messageId: u,
                                sourceAnalyticsLocations: g
                            }),
                            children: ["@", e.nick]
                        })
                    }
                    break
                }
                case c.n4.CHANNEL: {
                    let e = l.value.toString(),
                        t = I.A.getChannel(e);
                    null != t && (n = (0, i.jsxs)(E.A, {
                        ...R,
                        children: ["#", (0, d.m1)(t, f.default, N.A)]
                    }));
                    break
                }
                case c.n4.ROLE: {
                    let e = l.value.toString(),
                        t = null != a ? T.A.getRole(a.id, e) : void 0;
                    null != t && (n = (0, i.jsxs)(E.A, {
                        ...R,
                        children: ["@", t.name]
                    }));
                    break
                }
                case c.n4.MENTIONABLE: {
                    let e = l.value.toString(),
                        t = null != a ? T.A.getRole(a.id, e) : void 0;
                    if (null != t) n = (0, i.jsxs)(E.A, {
                        children: ["@", t.name]
                    });
                    else {
                        let t = f.default.getUser(e);
                        if (null != t) {
                            let e = (0, C.FT)(t, s);
                            n = (0, i.jsxs)(E.A, {
                                ...R,
                                onClick: () => (0, m.openUserProfileModal)({
                                    userId: t.id,
                                    guildId: s.guild_id,
                                    sourceAnalyticsLocations: g
                                }),
                                children: ["@", e.nick]
                            })
                        }
                    }
                    break
                }
                case c.n4.ATTACHMENT:
                    n = x(p.intl.string(p.t.nONJVc));
                    break;
                default: {
                    let e = A?.choices?.find(e => e.value === l.value);
                    null != e && (O = e.name_localized ?? e.name)
                }
            }
            return null == n && (n = x(O?.toString())), [(0, i.jsxs)(r.Fragment, {
                children: [(0, i.jsxs)(o.Text, {
                    ...S,
                    children: [" ", A?.name_localized ?? l.name, ": "]
                }), n]
            }, h)]
        }({
            option: t,
            channel: n,
            guild: U,
            messageId: l,
            parentOptionKey: null,
            commandOptionSpec: a[t.name],
            sourceAnalyticsLocations: O
        }));
        t = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(o.Text, {
                ...S,
                children: ["/", s.application_command?.name_localized ?? s.name]
            }), e]
        })
    }
    return (0, i.jsxs)("div", {
        className: h.kL,
        onCopy: e => {
            let t = window?.getSelection()?.toString() ?? "";
            t.startsWith("/") && t.endsWith("\n") && M(e, s)
        },
        children: [(0, i.jsx)("div", {
            className: h.YL,
            ref: D,
            children: t
        }), (0, i.jsx)("div", {
            className: h.xQ
        })]
    })
})