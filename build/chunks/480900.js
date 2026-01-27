/** Chunk was on 92837 **/
/** chunk id: 480900, original params: e,t,r (module,exports,require) **/
r.d(t, {
    b: () => C,
    default: () => S
}), r(896048), r(864466), r(443073), r(228524);
var n = r(627968),
    l = r(64700),
    i = r(503698),
    o = r.n(i),
    a = r(158954),
    c = r(311907),
    s = r(582754),
    u = r(397927),
    d = r(442433),
    f = r(686956),
    p = r(736653),
    b = r(573648),
    m = r(104171),
    g = r(58149),
    j = r(427157),
    y = r(961350),
    v = r(696451),
    O = r(317525),
    x = r(954571),
    h = r(975571),
    A = r(967740),
    w = r(652215),
    _ = r(985018),
    N = r(702326),
    P = r(688963);

function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        })
    }
    return e
}

function C(e, t) {
    (0, u.mMO)(async () => {
        let {
            default: l
        } = await Promise.all([r.e("49282"), r.e("58481")]).then(r.bind(r, 488358));
        return r => (0, n.jsx)(l, k({
            role: e,
            guildId: t
        }, r))
    })
}
let S = function(e) {
    let {
        guildId: t,
        transitionState: i,
        onClose: S
    } = e, R = (0, c.bG)([O.A], () => O.A.getSortedRoles(t)), E = (0, c.bG)([y.default], () => y.default.getId()), D = (0, c.bG)([v.Ay], () => v.Ay.getMember(t, E)), [I, U] = l.useState([]), T = (0, p.Ay)();
    if (l.useEffect(() => {
            0 !== I.length && x.default.track(w.HAw.PASSPORT_ENTRY_VIEWED, k({
                role_ids: I.map(e => {
                    let {
                        role_id: t
                    } = e;
                    return t
                })
            }, (0, g.H$)(t)))
        }, [t, I]), l.useEffect(() => {
            f.A.getGuildRoleConnectionsConfigurations(t).then(e => U(e))
        }, [t]), null == D) return null;
    let G = R.filter(e => null === e.tags.guild_connections);
    return (0, n.jsx)(a.Modal, {
        transitionState: i,
        title: _.intl.string(_.t.ghtnss),
        onClose: S,
        subtitle: _.intl.format(_.t["Y+TsEV"], {
            helpdeskArticleUrl: h.A.getArticleURL(w.MVz.CONNECTION_DETAILS)
        }),
        actions: [],
        children: (0, n.jsx)(u.BJc, {
            children: G.map(e => {
                let i = D.roles.includes(e.id),
                    a = function(e) {
                        let r = I.find(t => {
                            let {
                                role_id: r
                            } = t;
                            return r === e
                        });
                        if (null == r) return [];
                        let l = {};
                        for (let e of r.rules.flat()) {
                            let a;
                            if (null != e.application_id) {
                                var i;
                                let l = null == (i = r.applications) ? void 0 : i[e.application_id];
                                a = (null == l ? void 0 : l.bot) != null ? (0, n.jsx)("img", {
                                    src: new j.A(l.bot).getAvatarURL(t, 24),
                                    alt: "",
                                    className: o()(N.ZN, P.my)
                                }) : null
                            } else {
                                let t = b.A.get(e.connection_type);
                                a = (0, n.jsx)("img", {
                                    src: (0, s.qB)(T) ? t.icon.lightSVG : t.icon.darkSVG,
                                    alt: "",
                                    className: P.my
                                })
                            }
                            null != a && (l["".concat(e.connection_type, ":").concat(e.application_id)] = a)
                        }
                        return Object.values(l)
                    }(e.id);
                return (0, n.jsxs)(u.DUT, {
                    className: o()(N.L5, i ? N.xN : null),
                    onClick: i ? void 0 : () => C(e, t),
                    onContextMenu: i ? l => {
                        var i;
                        return i = e.id, void(0, d.L3)(l, async () => {
                            let {
                                default: e
                            } = await r.e("68001").then(r.bind(r, 699896));
                            return r => {
                                var l, o;
                                return (0, n.jsx)(e, (l = k({}, r), o = o = {
                                    roleId: i,
                                    onLeaveRole: () => f.A.unassignGuildRoleConnection(t, i)
                                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var n = Object.getOwnPropertySymbols(e);
                                        r.push.apply(r, n)
                                    }
                                    return r
                                })(Object(o)).forEach(function(e) {
                                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
                                }), l))
                            }
                        })
                    } : void 0,
                    children: [i ? (0, n.jsx)("div", {
                        className: N.UA,
                        children: (0, n.jsx)(u.Uzd, {
                            size: "xs",
                            color: "currentColor"
                        })
                    }) : null, (0, n.jsx)(A.A, {
                        guildId: t,
                        role: e,
                        size: 24
                    }), (0, n.jsxs)("div", {
                        className: N.fk,
                        children: [(0, n.jsx)(u.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            className: N.CF,
                            children: e.name
                        }), void 0 !== e.description ? (0, n.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: N.Xr,
                            children: e.description
                        }) : null]
                    }), (0, n.jsx)(m.Ay, {
                        showUserPopout: !1,
                        guildId: t,
                        users: a.map(() => null),
                        renderUser: (e, t, r) => (0, n.jsx)(l.Fragment, {
                            children: a[r]
                        }, r),
                        max: 3
                    })]
                }, e.id)
            })
        })
    })
}