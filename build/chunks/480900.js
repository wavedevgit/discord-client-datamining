/** chunk id: 480900, original params: e,t,l (module,exports,require) **/
l.d(t, {
    b: () => I,
    default: () => S
});
var i = l(627968),
    n = l(64700),
    r = l(503698),
    s = l.n(r),
    o = l(158954),
    a = l(311907),
    d = l(582754),
    c = l(397927),
    u = l(442433),
    f = l(686956),
    m = l(736653),
    x = l(573648),
    p = l(104171),
    A = l(58149),
    g = l(427157),
    h = l(961350),
    v = l(696451),
    _ = l(317525),
    N = l(954571),
    j = l(975571),
    C = l(967740),
    b = l(652215),
    R = l(985018),
    k = l(661184),
    y = l(679253);

function I(e, t) {
    (0, c.mMO)(async () => {
        let {
            default: n
        } = await Promise.all([l.e("49282"), l.e("41539")]).then(l.bind(l, 488358));
        return l => (0, i.jsx)(n, {
            role: e,
            guildId: t,
            ...l
        })
    })
}
let S = function(e) {
    let {
        guildId: t,
        transitionState: r,
        onClose: S
    } = e, U = (0, a.bG)([_.A], () => _.A.getSortedRoles(t)), E = (0, a.bG)([h.default], () => h.default.getId()), T = (0, a.bG)([v.Ay], () => v.Ay.getMember(t, E)), [w, G] = n.useState([]), L = (0, m.Ay)();
    if (n.useEffect(() => {
            0 !== w.length && N.default.track(b.HAw.PASSPORT_ENTRY_VIEWED, {
                role_ids: w.map(e => {
                    let {
                        role_id: t
                    } = e;
                    return t
                }),
                ...(0, A.H$)(t)
            })
        }, [t, w]), n.useEffect(() => {
            f.A.getGuildRoleConnectionsConfigurations(t).then(e => G(e))
        }, [t]), null == T) return null;
    let z = U.filter(e => null === e.tags.guild_connections);
    return (0, i.jsx)(o.Modal, {
        transitionState: r,
        title: R.intl.string(R.t.ghtnss),
        onClose: S,
        subtitle: R.intl.format(R.t["Y+TsEV"], {
            helpdeskArticleUrl: j.A.getArticleURL(b.MVz.CONNECTION_DETAILS)
        }),
        actions: [],
        children: (0, i.jsx)(c.BJc, {
            children: z.map(e => {
                let r = T.roles.includes(e.id),
                    o = function(e) {
                        let l = w.find(t => {
                            let {
                                role_id: l
                            } = t;
                            return l === e
                        });
                        if (null == l) return [];
                        let n = {};
                        for (let e of l.rules.flat()) {
                            let r;
                            if (null != e.application_id) {
                                let n = l.applications?.[e.application_id];
                                r = n?.bot != null ? (0, i.jsx)("img", {
                                    src: new g.A(n.bot).getAvatarURL(t, 24),
                                    alt: "",
                                    className: s()(k.ZN, y.my)
                                }) : null
                            } else {
                                let t = x.A.get(e.connection_type);
                                r = (0, i.jsx)("img", {
                                    src: (0, d.qB)(L) ? t.icon.lightSVG : t.icon.darkSVG,
                                    alt: "",
                                    className: y.my
                                })
                            }
                            null != r && (n[`${e.connection_type}:${e.application_id}`] = r)
                        }
                        return Object.values(n)
                    }(e.id);
                return (0, i.jsxs)(c.DUT, {
                    className: s()(k.L5, r ? k.xN : null),
                    onClick: r ? void 0 : () => I(e, t),
                    onContextMenu: r ? n => {
                        var r;
                        return r = e.id, void(0, u.L3)(n, async () => {
                            let {
                                default: e
                            } = await l.e("68001").then(l.bind(l, 699896));
                            return l => (0, i.jsx)(e, {
                                ...l,
                                roleId: r,
                                onLeaveRole: () => f.A.unassignGuildRoleConnection(t, r)
                            })
                        })
                    } : void 0,
                    children: [r ? (0, i.jsx)("div", {
                        className: k.UA,
                        children: (0, i.jsx)(c.Uzd, {
                            size: "xs",
                            color: "currentColor"
                        })
                    }) : null, (0, i.jsx)(C.A, {
                        guildId: t,
                        role: e,
                        size: 24
                    }), (0, i.jsxs)("div", {
                        className: k.fk,
                        children: [(0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            className: k.CF,
                            children: e.name
                        }), void 0 !== e.description ? (0, i.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: k.Xr,
                            children: e.description
                        }) : null]
                    }), (0, i.jsx)(p.Ay, {
                        showUserPopout: !1,
                        guildId: t,
                        users: o.map(() => null),
                        renderUser: (e, t, l) => (0, i.jsx)(n.Fragment, {
                            children: o[l]
                        }, l),
                        max: 3
                    })]
                }, e.id)
            })
        })
    })
}