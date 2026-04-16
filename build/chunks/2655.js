/** chunk id: 2655 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(136722),
    o = n(311907),
    d = n(397927),
    c = n(392054),
    u = n(168186),
    m = n(495273),
    x = n(696451),
    g = n(317525),
    h = n(71393),
    p = n(576705),
    A = n(542580),
    b = n(803378),
    f = n(615723),
    _ = n(604870),
    j = n(664675),
    N = n(541956),
    v = n(636547),
    T = n(652215),
    C = n(73510),
    E = n(985018),
    I = n(996024);

function S(e) {
    let {
        applicationId: t,
        commandId: s,
        guildId: f,
        inModal: _,
        editedTargetPermissions: S,
        originalApplicationPermissions: w,
        originalCommandPermissions: k,
        selectedPermissionCount: R
    } = e, L = (0, o.bG)([b.A], () => null == s ? null : b.A.getCommand(s), [s]), M = L?.defaultMemberPermissions != null, G = (0, o.bG)([h.A, x.Ay, p.A], () => {
        let e = h.A.getGuild(f),
            t = x.Ay.getSelfMember(f);
        return null != e && null != t && (0, u.zl)({
            PermissionStore: p.A,
            guild: e,
            selfMember: t,
            applicationLevelPermissions: w,
            commandLevelPermissions: k,
            defaultMemberPermissions: L?.defaultMemberPermissions
        })
    }, [f, L, w, k]), D = s ?? t, [P, U] = l.useMemo(() => {
        let e = {},
            t = {};
        for (let [n, i] of Object.entries(S)) i.type === c.RA.CHANNEL ? e[n] = i : t[n] = i;
        return [e, t]
    }, [S]), B = l.useCallback(e => {
        let t = h.A.getGuild(f),
            n = x.Ay.getSelfMember(f);
        return null != t && null != n && (null != s ? (0, u.zl)({
            PermissionStore: p.A,
            guild: t,
            selfMember: n,
            applicationLevelPermissions: w,
            commandLevelPermissions: e,
            defaultMemberPermissions: L?.defaultMemberPermissions
        }) : (0, u.zl)({
            PermissionStore: p.A,
            guild: t,
            selfMember: n,
            applicationLevelPermissions: e
        }))
    }, [f, L, s, w]), W = l.useCallback((e, t) => {
        let n, i = null;
        if (0 !== t.length) {
            let e = S[t[0]];
            if (e.type === c.RA.USER) n = N.Q.REMOVE_SELF;
            else {
                let t = e.id;
                if (n = N.Q.REMOVE_ROLE, (0, m.N8)(f, t)) i = "@everyone";
                else {
                    let e = g.A.getRole(f, t);
                    i = null != e ? e.name : "role"
                }
            }
        } else {
            let t = Object.values(e)[0].id;
            if (n = N.Q.DENY_ROLE, (0, m.N8)(f, t)) i = "@everyone";
            else {
                let e = g.A.getRole(f, t);
                i = null != e ? e.name : "role"
            }
        }(0, N.A)(n, i)
    }, [f, S]), H = l.useCallback((e, n) => {
        let i = {};
        for (let [e, t] of Object.entries(S)) i[e] = {
            id: t.id,
            permission: t.permission,
            type: t.type
        };
        (i = Object.assign(i, e), n.length > 0 && (i = a().omit(i, n)), B(i)) ? A.T0(t, D, i): W(e, n)
    }, [t, S, D, B, W]), V = l.useCallback(() => {
        let e = Object.keys(P);
        return (0, d.mMO)(async () => {
            let {
                default: t
            } = await n.e("52532").then(n.bind(n, 192991));
            return n => (0, i.jsx)(t, {
                editPermissions: H,
                guildId: f,
                headerText: E.intl.string(E.t["i1c+kV"]),
                hasMemberSearch: !1,
                overwrittenKeys: e,
                search: y,
                searchPlaceholderText: E.intl.string(E.t["TLQo/i"]),
                selectedPermissionCount: R,
                ...n
            })
        })
    }, [H, P, f, R]), z = l.useCallback(() => {
        let e = Object.keys(U);
        return (0, d.mMO)(async () => {
            let {
                default: t
            } = await n.e("52532").then(n.bind(n, 192991));
            return n => (0, i.jsx)(t, {
                editPermissions: H,
                guildId: f,
                hasMemberSearch: !0,
                headerText: E.intl.string(E.t["56jRn8"]),
                overwrittenKeys: e,
                search: O,
                searchPlaceholderText: E.intl.string(E.t.wAfO5Y),
                selectedPermissionCount: R,
                ...n
            })
        })
    }, [H, f, U, R]), F = l.useCallback(() => (0, d.mMO)(async () => {
        let {
            default: e
        } = await n.e("29384").then(n.bind(n, 519387)), t = L.defaultMemberPermissions;
        return r.aI(t, u.Cq) && (t = T.xBc.ADMINISTRATOR), n => (0, i.jsx)(e, {
            ...n,
            defaultMemberPermissions: t
        })
    }), [L]), K = R - C.iW, Y = K >= 0, q = [{
        buttonClick: z,
        buttonText: E.intl.string(E.t["56jRn8"]),
        noneSelectedText: E.intl.string(E.t.C0rYfq),
        overwrites: U,
        title: null == s ? E.intl.string(E.t["vPWe++"]) : E.intl.string(E.t["1jLVGB"])
    }, {
        buttonClick: V,
        buttonText: E.intl.string(E.t["i1c+kV"]),
        noneSelectedText: E.intl.string(E.t["UBJhC/"]),
        overwrites: P,
        title: null == s ? E.intl.string(E.t.OGiMXJ) : E.intl.string(E.t.Ujbaqm)
    }];
    return (0, i.jsxs)(l.Fragment, {
        children: [K > 0 ? (0, i.jsx)(d.po8, {
            messageType: d.YCn.WARNING,
            children: E.intl.format(E.t["B/dFBH"], {
                removeCount: K
            })
        }) : null, M ? (0, i.jsxs)("div", {
            className: I.Yg,
            children: [(0, i.jsx)(d.mir, {
                size: "sm",
                color: "currentColor",
                className: I.Kk
            }), (0, i.jsx)("span", {
                className: I.iU,
                children: E.intl.format(E.t["2889Gq"], {})
            }), (0, i.jsx)(d.Button, {
                variant: "secondary",
                size: "sm",
                onClick: F,
                text: E.intl.string(E.t["HO/oXl"])
            })]
        }) : null, q.map((e, t) => {
            let n = null;
            return G ? Y && (n = E.intl.string(E.t["XTwtW/"])) : n = null != s ? E.intl.string(E.t.tybdas) : E.intl.string(E.t["z2hjk/"]), (0, i.jsx)(v.A, {
                bar: (0, i.jsx)(d.STz, {
                    tooltipClassName: I.YL,
                    text: n,
                    shouldShow: null != n,
                    children: t => (0, i.jsx)(d.Button, {
                        ...t,
                        variant: "secondary",
                        disabled: Y || !G,
                        onClick: e.buttonClick,
                        size: "sm",
                        text: e.buttonText
                    })
                }),
                inModal: _,
                title: e.title,
                children: (0, i.jsx)("div", {
                    className: _ ? void 0 : I.qI,
                    children: (0, i.jsx)(j.A, {
                        guildId: f,
                        commandId: s,
                        noneSelectedText: e.noneSelectedText,
                        overwrites: e.overwrites,
                        editPermissions: H,
                        hasAccessToMutatePermissions: G
                    })
                })
            }, t)
        })]
    })
}

function y(e) {
    let t = (0, f.Q)(e);
    return {
        ...t,
        results: t.results.map(e => ({
            ...e,
            type: c.RA.CHANNEL
        }))
    }
}

function O(e) {
    let t = (0, _.t)(e);
    return {
        ...t,
        results: t.results.roles.map(e => ({
            ...e,
            type: c.RA.ROLE
        })).concat(t.results.members.map(e => ({
            ...e,
            type: c.RA.USER
        })))
    }
}