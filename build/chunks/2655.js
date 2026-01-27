/** Chunk was on 21968 **/
/** chunk id: 2655, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
}), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(136722),
    o = n(311907),
    c = n(397927),
    d = n(392054),
    u = n(168186),
    p = n(495273),
    m = n(696451),
    g = n(317525),
    b = n(71393),
    f = n(576705),
    h = n(542580),
    x = n(803378),
    j = n(615723),
    O = n(604870),
    y = n(664675),
    A = n(541956),
    v = n(636547),
    _ = n(652215),
    N = n(73510),
    w = n(985018),
    E = n(183395);

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i
        })
    }
    return e
}

function C(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function S(e) {
    let {
        applicationId: t,
        commandId: l,
        guildId: j,
        inModal: O,
        editedTargetPermissions: S,
        originalApplicationPermissions: k,
        originalCommandPermissions: R,
        selectedPermissionCount: L
    } = e, D = (0, o.bG)([x.A], () => null == l ? null : x.A.getCommand(l), [l]), M = (null == D ? void 0 : D.defaultMemberPermissions) != null, G = (0, o.bG)([b.A, m.Ay, f.A], () => {
        let e = b.A.getGuild(j),
            t = m.Ay.getSelfMember(j);
        return null != e && null != t && (0, u.zl)({
            PermissionStore: f.A,
            guild: e,
            selfMember: t,
            applicationLevelPermissions: k,
            commandLevelPermissions: R,
            defaultMemberPermissions: null == D ? void 0 : D.defaultMemberPermissions
        })
    }, [j, D, k, R]), U = null != l ? l : t, [B, W] = r.useMemo(() => {
        let e = {},
            t = {};
        for (let [n, i] of Object.entries(S)) i.type === d.RA.CHANNEL ? e[n] = i : t[n] = i;
        return [e, t]
    }, [S]), H = r.useCallback(e => {
        let t = b.A.getGuild(j),
            n = m.Ay.getSelfMember(j);
        return null != t && null != n && (null != l ? (0, u.zl)({
            PermissionStore: f.A,
            guild: t,
            selfMember: n,
            applicationLevelPermissions: k,
            commandLevelPermissions: e,
            defaultMemberPermissions: null == D ? void 0 : D.defaultMemberPermissions
        }) : (0, u.zl)({
            PermissionStore: f.A,
            guild: t,
            selfMember: n,
            applicationLevelPermissions: e
        }))
    }, [j, D, l, k]), V = r.useCallback((e, t) => {
        let n, i = null;
        if (0 !== t.length) {
            let e = S[t[0]];
            if (e.type === d.RA.USER) n = A.Q.REMOVE_SELF;
            else {
                let t = e.id;
                if (n = A.Q.REMOVE_ROLE, (0, p.N8)(j, t)) i = "@everyone";
                else {
                    let e = g.A.getRole(j, t);
                    i = null != e ? e.name : "role"
                }
            }
        } else {
            let t = Object.values(e)[0].id;
            if (n = A.Q.DENY_ROLE, (0, p.N8)(j, t)) i = "@everyone";
            else {
                let e = g.A.getRole(j, t);
                i = null != e ? e.name : "role"
            }
        }(0, A.A)(n, i)
    }, [j, S]), z = r.useCallback((e, n) => {
        let i = {};
        for (let [e, t] of Object.entries(S)) i[e] = {
            id: t.id,
            permission: t.permission,
            type: t.type
        };
        (i = Object.assign(i, e), n.length > 0 && (i = a().omit(i, n)), H(i)) ? h.T0(t, U, i): V(e, n)
    }, [t, S, U, H, V]), K = r.useCallback(() => {
        let e = Object.keys(B);
        return (0, c.mMO)(async () => {
            let {
                default: t
            } = await n.e("52532").then(n.bind(n, 192991));
            return n => (0, i.jsx)(t, T({
                editPermissions: z,
                guildId: j,
                headerText: w.intl.string(w.t["i1c+kV"]),
                hasMemberSearch: !1,
                overwrittenKeys: e,
                search: I,
                searchPlaceholderText: w.intl.string(w.t["TLQo/i"]),
                selectedPermissionCount: L
            }, n))
        })
    }, [z, B, j, L]), F = r.useCallback(() => {
        let e = Object.keys(W);
        return (0, c.mMO)(async () => {
            let {
                default: t
            } = await n.e("52532").then(n.bind(n, 192991));
            return n => (0, i.jsx)(t, T({
                editPermissions: z,
                guildId: j,
                hasMemberSearch: !0,
                headerText: w.intl.string(w.t["56jRn8"]),
                overwrittenKeys: e,
                search: P,
                searchPlaceholderText: w.intl.string(w.t.wAfO5Y),
                selectedPermissionCount: L
            }, n))
        })
    }, [z, j, W, L]), Y = r.useCallback(() => (0, c.mMO)(async () => {
        let {
            default: e
        } = await n.e("29384").then(n.bind(n, 519387)), t = D.defaultMemberPermissions;
        return s.aI(t, u.Cq) && (t = _.xBc.ADMINISTRATOR), n => (0, i.jsx)(e, C(T({}, n), {
            defaultMemberPermissions: t
        }))
    }), [D]), q = L - N.iW, J = q >= 0, Q = [{
        buttonClick: F,
        buttonText: w.intl.string(w.t["56jRn8"]),
        noneSelectedText: w.intl.string(w.t.C0rYfq),
        overwrites: W,
        title: null == l ? w.intl.string(w.t["vPWe++"]) : w.intl.string(w.t["1jLVGB"])
    }, {
        buttonClick: K,
        buttonText: w.intl.string(w.t["i1c+kV"]),
        noneSelectedText: w.intl.string(w.t["UBJhC/"]),
        overwrites: B,
        title: null == l ? w.intl.string(w.t.OGiMXJ) : w.intl.string(w.t.Ujbaqm)
    }];
    return (0, i.jsxs)(r.Fragment, {
        children: [q > 0 ? (0, i.jsx)(c.po8, {
            messageType: c.YCn.WARNING,
            children: w.intl.format(w.t["B/dFBH"], {
                removeCount: q
            })
        }) : null, M ? (0, i.jsxs)("div", {
            className: E.Yg,
            children: [(0, i.jsx)(c.mir, {
                size: "sm",
                color: "currentColor",
                className: E.Kk
            }), (0, i.jsx)("span", {
                className: E.iU,
                children: w.intl.format(w.t["2889Gq"], {})
            }), (0, i.jsx)(c.Button, {
                variant: "secondary",
                size: "sm",
                onClick: Y,
                text: w.intl.string(w.t["HO/oXl"])
            })]
        }) : null, Q.map((e, t) => {
            let n = null;
            return G ? J && (n = w.intl.string(w.t["XTwtW/"])) : n = null != l ? w.intl.string(w.t.tybdas) : w.intl.string(w.t["z2hjk/"]), (0, i.jsx)(v.A, {
                bar: (0, i.jsx)(c.STz, {
                    tooltipClassName: E.YL,
                    text: n,
                    shouldShow: null != n,
                    children: t => (0, i.jsx)(c.Button, C(T({}, t), {
                        variant: "secondary",
                        disabled: J || !G,
                        onClick: e.buttonClick,
                        size: "sm",
                        text: e.buttonText
                    }))
                }),
                inModal: O,
                title: e.title,
                children: (0, i.jsx)("div", {
                    className: O ? void 0 : E.qI,
                    children: (0, i.jsx)(y.A, {
                        guildId: j,
                        commandId: l,
                        noneSelectedText: e.noneSelectedText,
                        overwrites: e.overwrites,
                        editPermissions: z,
                        hasAccessToMutatePermissions: G
                    })
                })
            }, t)
        })]
    })
}

function I(e) {
    let t = (0, j.Q)(e);
    return C(T({}, t), {
        results: t.results.map(e => C(T({}, e), {
            type: d.RA.CHANNEL
        }))
    })
}

function P(e) {
    let t = (0, O.t)(e);
    return C(T({}, t), {
        results: t.results.roles.map(e => C(T({}, e), {
            type: d.RA.ROLE
        })).concat(t.results.members.map(e => C(T({}, e), {
            type: d.RA.USER
        })))
    })
}