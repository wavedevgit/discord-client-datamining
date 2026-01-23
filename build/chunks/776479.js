/** Chunk was on 21968 **/
/** chunk id: 776479, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(998874),
    o = n(542580),
    c = n(803378),
    d = n(825453),
    u = n(602418),
    p = n(2655),
    m = n(985018),
    g = n(199271);

function b(e) {
    let {
        application: t,
        canNavigate: n,
        guildId: d
    } = e, p = (0, l.bG)([c.A], () => c.A.isUnavailable());
    return (r.useEffect(() => (o.hu(t.id), o.AL), [t.id]), r.useEffect(() => {
        o.gV(t.id, d, t.id), o.Jw(d, t.id)
    }, [t.id, d]), p) ? null : (0, i.jsxs)(r.Fragment, {
        children: [(0, i.jsx)(s.A, {
            icon: (0, i.jsx)(a.kC9, {
                size: "md",
                color: "currentColor"
            }),
            title: m.intl.string(m.t.RGoJNN)
        }), (0, i.jsx)(a.Text, {
            color: "text-muted",
            variant: "text-sm/normal",
            children: m.intl.string(m.t.sCkD3Z)
        }), (0, i.jsx)(f, {
            guildId: d,
            applicationId: t.id
        }), (0, i.jsx)(u.A, {
            applicationIcon: t.icon,
            applicationName: t.name,
            canNavigate: n,
            guildId: d
        })]
    })
}

function f(e) {
    let {
        applicationId: t,
        guildId: n
    } = e, {
        originalApplicationPermissions: r,
        editedTargetPermissions: l,
        selectedPermissionCount: a
    } = (0, d.A)(n, t);
    return (0, i.jsx)("div", {
        className: g.zi,
        children: (0, i.jsx)(p.A, {
            applicationId: t,
            guildId: n,
            inModal: !1,
            editedTargetPermissions: l,
            originalApplicationPermissions: r,
            selectedPermissionCount: a
        })
    })
}