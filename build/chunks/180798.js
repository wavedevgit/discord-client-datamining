/** Chunk was on 91042 **/
/** chunk id: 180798, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(545442),
    a = n(397927),
    o = n(775602),
    s = n(504049),
    d = n(997509),
    u = n(676608),
    c = n(34457),
    A = n(696451),
    b = n(317525),
    g = n(71393),
    f = n(576705),
    m = n(403362),
    p = n(652215),
    O = n(985018),
    y = n(658122);

function v(e, t, n) {
    var l;
    return {
        type: "roleDot",
        variant: "dot" === t ? "dot" : "circle",
        color: null != (l = e.colorString) ? l : p.TpD,
        colors: n ? e.colorStrings : null
    }
}

function E(e, t, n) {
    var i;
    let a = null != (i = e.colorString) ? i : p.TpD,
        o = n ? e.colorStrings : null;
    return (0, l.jsx)("div", {
        className: y.roleDotAccessory,
        children: "dot" === t ? (0, l.jsx)(r.W, {
            color: a,
            colors: o,
            background: !1,
            tooltip: !1
        }) : (0, l.jsx)(r.R, {
            color: a,
            colors: null != o ? o : null
        })
    })
}

function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        y = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        h = (0, i.bG)([g.A], () => g.A.getGuild(t)),
        j = (0, i.bG)([b.A], () => b.A.getSortedRoles(t)),
        x = (0, i.bG)([o.A], () => o.A.roleStyle),
        S = (0, s.$9)(t, {
            location: r,
            targetUserId: e
        }),
        {
            userRoles: M,
            isGuildMember: D,
            canManageRoles: C
        } = (0, i.cf)([A.Ay, f.A], () => {
            let n = A.Ay.getMember(t, e);
            return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != h && f.A.can(p.xBc.MANAGE_ROLES, h)
            }
        }, [e, t, h]),
        I = (0, u.Ay)(t, e);
    if (__OVERLAY__ || null == M || null == h || !D) return null;
    let P = f.A.getHighestRole(h),
        T = C && !y ? j.map(n => {
            if ((0, c.Oy)(n)) return null;
            let i = n.managed || !f.A.isRoleHigher(h, P, n),
                r = M.includes(n.id);
            return i && !r ? null : (0, l.jsx)(a.sLh, {
                id: n.id,
                leadingAccessory: v(n, x, I),
                leftIcon: E(n, x, I),
                label: n.name,
                disabled: i,
                action: () => {
                    M.includes(n.id) ? (d.A.updateMemberRoles(t, e, M.filter(e => e !== n.id), [], [n.id]), S(s.Nj.REMOVE_ROLE)) : (d.A.updateMemberRoles(t, e, M.concat([n.id]), [n.id], []), S(s.Nj.ADD_ROLE))
                },
                checked: r
            }, n.id)
        }) : j.map(e => (0, c.Oy)(e) || !M.includes(e.id) ? null : (0, l.jsx)(a.Drp, {
            id: e.id,
            leadingAccessory: v(e, x, I),
            iconLeft: E(e, x, I),
            label: e.name
        }, e.id));
    return 0 === (T = T.filter(m.Vq)).length ? null : n ? T : (0, l.jsx)(a.Drp, {
        id: "roles",
        label: O.intl.formatToPlainString(O.t.PCs0oo, {
            numRoles: T.length
        }),
        children: T
    })
}