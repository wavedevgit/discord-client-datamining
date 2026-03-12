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
    o = n(504049),
    s = n(997509),
    u = n(676608),
    c = n(34457),
    A = n(696451),
    g = n(317525),
    m = n(71393),
    b = n(576705),
    f = n(403362),
    E = n(652215),
    x = n(985018),
    h = n(488732);

function C(e, t, n) {
    return {
        type: "roleDot",
        variant: "dot" === t ? "dot" : "circle",
        color: e.colorString ?? E.TpD,
        colors: n ? e.colorStrings : null
    }
}

function M(e, t, n) {
    let i = e.colorString ?? E.TpD,
        r = n ? e.colorStrings : null;
    return (0, l.jsx)("div", {
        className: h.roleDotAccessory,
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
        h = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        p = (0, i.bG)([m.A], () => m.A.getGuild(t)),
        j = (0, i.bG)([g.A], () => g.A.getSortedRoles(t)),
        v = (0, i.bG)([d.A], () => d.A.roleStyle),
        I = (0, o.$9)(t, {
            location: a,
            targetUserId: e
        }),
        {
            userRoles: y,
            isGuildMember: S,
            canManageRoles: D
        } = (0, i.cf)([A.Ay, b.A], () => {
            let n = A.Ay.getMember(t, e);
            return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != p && b.A.can(E.xBc.MANAGE_ROLES, p)
            }
        }, [e, t, p]),
        O = (0, u.Ay)(t, e);
    if (__OVERLAY__ || null == y || null == p || !S) return null;
    let T = b.A.getHighestRole(p),
        _ = D && !h ? j.map(n => {
            if ((0, c.Oy)(n)) return null;
            let i = n.managed || !b.A.isRoleHigher(p, T, n),
                a = y.includes(n.id);
            return i && !a ? null : (0, l.jsx)(r.sLh, {
                id: n.id,
                leadingAccessory: C(n, v, O),
                leftIcon: M(n, v, O),
                label: n.name,
                disabled: i,
                action: () => {
                    y.includes(n.id) ? (s.A.updateMemberRoles(t, e, y.filter(e => e !== n.id), [], [n.id]), I(o.Nj.REMOVE_ROLE)) : (s.A.updateMemberRoles(t, e, y.concat([n.id]), [n.id], []), I(o.Nj.ADD_ROLE))
                },
                checked: a
            }, n.id)
        }) : j.map(e => (0, c.Oy)(e) || !y.includes(e.id) ? null : (0, l.jsx)(r.Drp, {
            id: e.id,
            leadingAccessory: C(e, v, O),
            iconLeft: M(e, v, O),
            label: e.name
        }, e.id));
    return 0 === (_ = _.filter(f.Vq)).length ? null : n ? _ : (0, l.jsx)(r.Drp, {
        id: "roles",
        label: x.intl.formatToPlainString(x.t.PCs0oo, {
            numRoles: _.length
        }),
        children: _
    })
}