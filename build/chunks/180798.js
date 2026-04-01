/** chunk id: 180798 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(545442),
    r = n(397927),
    d = n(775602),
    s = n(504049),
    o = n(997509),
    u = n(676608),
    c = n(34457),
    A = n(696451),
    g = n(317525),
    b = n(71393),
    m = n(576705),
    E = n(403362),
    f = n(652215),
    h = n(985018),
    x = n(945375);

function C(e, t, n) {
    return {
        type: "roleDot",
        variant: "dot" === t ? "dot" : "circle",
        color: e.colorString ?? f.TpD,
        colors: n ? e.colorStrings : null
    }
}

function M(e, t, n) {
    let i = e.colorString ?? f.TpD,
        r = n ? e.colorStrings : null;
    return (0, l.jsx)("div", {
        className: x.roleDotAccessory,
        children: "dot" === t ? (0, l.jsx)(a.W, {
            color: i,
            colors: r,
            background: !1,
            tooltip: !1
        }) : (0, l.jsx)(a.R, {
            color: i,
            colors: r ?? null
        })
    })
}

function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        x = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        p = (0, i.bG)([b.A], () => b.A.getGuild(t)),
        j = (0, i.bG)([g.A], () => g.A.getSortedRoles(t)),
        v = (0, i.bG)([d.A], () => d.A.roleStyle),
        I = (0, s.$9)(t, {
            location: a,
            targetUserId: e
        }),
        {
            userRoles: S,
            isGuildMember: y,
            canManageRoles: D
        } = (0, i.cf)([A.Ay, m.A], () => {
            let n = A.Ay.getMember(t, e);
            return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != p && m.A.can(f.xBc.MANAGE_ROLES, p)
            }
        }, [e, t, p]),
        T = (0, u.Ay)(t, e);
    if (__OVERLAY__ || null == S || null == p || !y) return null;
    let O = m.A.getHighestRole(p),
        _ = D && !x ? j.map(n => {
            if ((0, c.Oy)(n)) return null;
            let i = n.managed || !m.A.isRoleHigher(p, O, n),
                a = S.includes(n.id);
            return i && !a ? null : (0, l.jsx)(r.sLh, {
                id: n.id,
                leadingAccessory: C(n, v, T),
                leftIcon: M(n, v, T),
                label: n.name,
                disabled: i,
                action: () => {
                    S.includes(n.id) ? (o.A.updateMemberRoles(t, e, S.filter(e => e !== n.id), [], [n.id]), I(s.Nj.REMOVE_ROLE)) : (o.A.updateMemberRoles(t, e, S.concat([n.id]), [n.id], []), I(s.Nj.ADD_ROLE))
                },
                checked: a
            }, n.id)
        }) : j.map(e => (0, c.Oy)(e) || !S.includes(e.id) ? null : (0, l.jsx)(r.Drp, {
            id: e.id,
            leadingAccessory: C(e, v, T),
            iconLeft: M(e, v, T),
            label: e.name
        }, e.id));
    return 0 === (_ = _.filter(E.Vq)).length ? null : n ? _ : (0, l.jsx)(r.Drp, {
        id: "roles",
        label: h.intl.formatToPlainString(h.t.PCs0oo, {
            numRoles: _.length
        }),
        children: _
    })
}