/** chunk id: 869568, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => M
}), n(733351), n(638769), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(158954),
    o = n(311907),
    c = n(990078),
    d = n(397927),
    u = n(442433),
    g = n(181658),
    m = n(80682),
    p = n(793574),
    f = n(688810),
    h = n(342296),
    b = n(287809),
    x = n(954571),
    j = n(642133),
    _ = n(997509),
    O = n(396816),
    v = n(856644),
    y = n(785312),
    A = n(316506),
    E = n(981634),
    N = n(927573),
    S = n(652215),
    I = n(985018),
    C = n(727938),
    T = n(261223);

function P(e) {
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

function w(e, t) {
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
async function R(e, t, n) {
    let i = e.roles.filter(e => e !== n);
    try {
        await _.A.updateMemberRoles(t, e.id, i, [], [n])
    } catch (t) {
        let e = new g.A(t);
        (0, d.qfG)(t => (0, r.jsx)(a.Modal, w(P({}, t), {
            title: I.intl.string(I.t.R0RpRX),
            actions: [{
                text: I.intl.string(I.t.BddRzS),
                variant: "primary",
                onClick: t.onClose
            }],
            children: (0, r.jsx)(d.Text, {
                color: "text-default",
                variant: "text-md/normal",
                children: e.getAnyErrorMessage()
            })
        })))
    }
}

function D(e) {
    let {
        member: t,
        guildId: l,
        roleId: o,
        locked: g
    } = e, p = i.useRef(null), f = i.useMemo(() => ({
        [l]: [t.id]
    }), [l, t.id]);

    function x(e) {
        if (e.stopPropagation(), !g) {
            let n;
            if (e.shiftKey) return void R(t, l, o);
            n = O.A.getRole(o), (0, d.qfG)(e => (0, r.jsx)(a.Modal, w(P({}, e), {
                title: I.intl.string(I.t["7sFNfW"]),
                subtitle: I.intl.format(I.t.scORUv, {
                    username: t.name,
                    roleName: null == n ? void 0 : n.name
                }),
                actions: [{
                    text: I.intl.string(I.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: e.onClose
                }, {
                    text: I.intl.string(I.t.N86XcP),
                    variant: "critical-primary",
                    onClick: () => {
                        R(t, l, o), e.onClose()
                    }
                }],
                children: (0, r.jsx)(d.Text, {
                    className: C.Of,
                    color: "text-muted",
                    variant: "text-md/normal",
                    children: I.intl.string(I.t.jxIxJL)
                })
            })))
        }
    }

    function j(e) {
        let i = b.default.getUser(t.id);
        null != i && (0, u.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([n.e("97262"), n.e("91042"), n.e("62841")]).then(n.bind(n, 365689));
            return t => (0, r.jsx)(e, w(P({}, t), {
                user: i,
                guildId: l,
                showChatItems: !1
            }))
        })
    }
    return (0, m.E)(f, "GuildSettingsRolesEditMembers"), (0, r.jsx)("div", {
        className: T.Q,
        children: (0, r.jsx)(h.A, {
            targetElementRef: p,
            userId: t.id,
            guildId: l,
            roleId: o,
            position: "left",
            children: e => (0, r.jsxs)(d.DUT, w(P({}, e), {
                innerRef: p,
                className: C.TL,
                onContextMenu: j,
                children: [(0, r.jsx)(E.A, {
                    className: C.bu,
                    avatarURL: t.avatarURL,
                    name: t.name,
                    bot: t.bot,
                    verifiedBot: t.verifiedBot,
                    userTag: t.userTag
                }), (0, r.jsx)("div", {
                    className: C.O6,
                    children: (0, r.jsx)(c.m, {
                        text: g ? I.intl.string(I.t.wkrQaK) : I.intl.string(I.t["7sFNfW"]),
                        position: "top",
                        children: (0, r.jsx)(d.DUT, {
                            className: s()(C.DT, {
                                [C.li]: g
                            }),
                            onClick: x,
                            children: (0, r.jsx)(d.aXh, {
                                size: "xs",
                                color: "currentColor"
                            })
                        })
                    })
                })]
            }))
        })
    })
}

function G(e) {
    let {
        handleAddClick: t,
        locked: n
    } = e;
    return (0, r.jsx)("div", {
        className: T.Q,
        children: (0, r.jsxs)("div", {
            className: s()(C.TL, C.xs),
            children: [(0, r.jsx)(d.nFg, {
                size: "md",
                color: "currentColor"
            }), (0, r.jsx)(d.Text, {
                className: C.Tf,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: I.intl.format(I.t.P9pZOW, {
                    addMembersHook: function(e, i) {
                        return n ? null : (0, r.jsx)(d.MzZ, {
                            onClick: t,
                            children: e
                        }, i)
                    }
                })
            })]
        })
    })
}

function L(e) {
    let {
        guildId: t,
        roleId: n,
        query: l,
        headerHeight: s,
        locked: a,
        onScroll: o,
        roleMembers: c,
        handleAddClick: u
    } = e, {
        analyticsLocations: g
    } = (0, f.Ay)(p.A.MEMBER_LIST), m = i.useMemo(() => l.trim().toLowerCase(), [l]);
    (0, v.cG)(t, m);
    let h = i.useMemo(() => c.filter(e => (0, v.EF)(m, e)), [c, m]),
        b = i.useMemo(() => h.sort((e, t) => e.name.localeCompare(t.name)), [h]);
    return (0, r.jsx)(f.f5, {
        value: g,
        children: (0, r.jsx)(d.Eie, {
            className: C.p_,
            sections: [Math.max(h.length, 1)],
            sectionHeight: s,
            renderSection: () => (0, r.jsx)("div", {
                style: {
                    height: s
                }
            }, "section"),
            style: {
                scrollPaddingTop: s
            },
            rowHeight: 40,
            renderRow: function(e) {
                let {
                    row: i
                } = e;
                if (0 === b.length) return (0, r.jsx)(G, {
                    handleAddClick: u,
                    locked: a
                }, "empty");
                let l = b[i];
                return (0, r.jsx)(D, {
                    member: l,
                    guildId: t,
                    roleId: n,
                    locked: a
                }, l.id)
            },
            onScroll: o
        })
    })
}

function k(e) {
    let {
        query: t,
        setQuery: n,
        locked: i,
        handleAddClick: l
    } = e;
    return (0, r.jsxs)("div", {
        className: C.MT,
        children: [(0, r.jsx)(d.IWV, {
            query: t,
            onChange: n,
            onClear: () => n(""),
            placeholder: I.intl.string(I.t.pYHobK),
            "aria-label": I.intl.string(I.t.pYHobK)
        }), (0, r.jsx)(d.Button, {
            onClick: l,
            variant: "primary",
            size: "sm",
            disabled: i,
            text: I.intl.string(I.t.cHszXg)
        })]
    })
}

function M(e) {
    let {
        guild: t,
        role: l,
        locked: a,
        setSelectedSection: c
    } = e, [u, g] = i.useState(""), {
        headerHeight: m,
        headerRef: p
    } = (0, y.A)(0), {
        scrolledToTop: f,
        handleScroll: h
    } = (0, A.u)(), b = l.managed || a, _ = (0, v.K5)(t.id, l.id), O = (0, o.bG)([j.A], () => {
        var e, n;
        return null != (e = null == (n = j.A.getRoleMemberCount(t.id)) ? void 0 : n[l.id]) ? e : 0
    }) > _.length, E = () => {
        x.default.track(S.HAw.OPEN_MODAL, {
            type: "Add Role Members",
            location_page: "Role Settings",
            location_section: "Members"
        }), (0, d.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("72271"), n.e("51711")]).then(n.bind(n, 66655));
            return n => (0, r.jsx)(e, w(P({}, n), {
                roleId: l.id,
                guildId: t.id
            }))
        })
    };
    return (0, r.jsxs)("div", {
        className: C.kL,
        children: [(0, r.jsx)("div", {
            className: C.N1,
            ref: p,
            children: (0, r.jsx)("div", {
                className: T.Q,
                children: (0, r.jsxs)("div", {
                    className: s()(T.wx, {
                        [T.l6]: !f
                    }),
                    children: [(0, r.jsx)(A.A, {
                        guild: t,
                        role: l,
                        selectedSection: N.T$.MEMBERS,
                        setSelectedSection: c
                    }), (0, r.jsx)(k, {
                        query: u,
                        setQuery: g,
                        locked: b,
                        handleAddClick: E
                    }), O ? (0, r.jsx)(d.po8, {
                        className: C.v6,
                        messageType: d.YCn.INFO,
                        children: I.intl.string(I.t.RQxHZ8)
                    }) : null]
                })
            })
        }), (0, r.jsx)(L, {
            headerHeight: m + 8,
            query: u,
            guildId: t.id,
            roleId: l.id,
            locked: b,
            onScroll: h,
            roleMembers: _,
            handleAddClick: E
        })]
    })
}