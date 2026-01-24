/** Chunk was on 47841 **/
/** chunk id: 807165, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N,
    W: () => E
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(311907),
    o = n(36525),
    c = n(686956),
    d = n(964486),
    u = n(34457),
    g = n(498642),
    m = n(403362),
    p = n(997509),
    f = n(555337),
    b = n(636042),
    h = n(396816),
    x = n(856644),
    j = n(206774),
    _ = n(763582),
    O = n(966851),
    v = n(927573),
    y = n(652215);

function A(e) {
    p.A.selectRole(e)
}
let E = () => {
    let {
        guild: e
    } = (0, a.cf)([f.A], () => f.A.getProps()), t = (0, a.bG)([h.A], () => h.A.formState), n = (0, a.bG)([h.A], () => h.A.errorMessage);
    return (0, r.jsx)(o.A, {
        errorMessage: n,
        onSave: () => {
            if (null == e) return;
            let {
                id: t
            } = e, n = h.A.editedRoleIds.map(e => h.A.getRole(e)).filter(m.Vq), r = h.A.getSortDeltas(), i = null, l = null;
            h.A.hasRoleConfigurationChanges && (l = h.A.editedRoleIdsForConfigurations, i = h.A.getEditedRoleConnectionConfigurationsMap()), (0, b.JY)(t, n, r, l, i)
        },
        submitting: t === y.XlH.SUBMITTING,
        onReset: b.Ts
    })
};

function N(e) {
    let {
        refToScroller: t
    } = e, {
        guild: n,
        roles: l
    } = (0, a.cf)([h.A], () => ({
        guild: h.A.guild,
        roles: h.A.roles
    }), []);
    s()(null != n, "Guild cannot be null here");
    let o = i.useMemo(() => l.find(e => (0, u.Oy)(e)), [l]);
    s()(null != o, "Guild must have an everyone role");
    let m = i.useMemo(() => l.filter(e => !(0, u.Oy)(e)), [l]),
        p = (0, a.bG)([f.A], () => f.A.getSelectedRoleId()),
        [b, y] = i.useState(m.length > 0);
    i.useEffect(() => {
        y(b || m.length > 0)
    }, [b, m.length]), (0, d.Ay)(() => {
        let e = g.A.getMemberCount(n.id);
        null != e && e <= x.gz && c.A.requestMembers(n.id, "", 0, !1)
    });
    let [E, N] = i.useState(v.T$.DISPLAY);
    return (i.useEffect(() => {
        null == p && N(v.T$.DISPLAY)
    }, [p]), null != p) ? (0, r.jsx)(j.A, {
        editRoleId: p,
        setEditRoleId: A,
        selectedSection: E,
        setSelectedSection: N
    }) : b ? (0, r.jsx)(O.A, {
        setEditRoleId: A,
        guild: n,
        everyoneRole: o,
        otherRoles: m,
        setSelectedSection: N,
        refToScroller: t
    }) : (0, r.jsx)(_.A, {
        guild: n,
        everyoneRole: o,
        setEditRoleId: A
    })
}