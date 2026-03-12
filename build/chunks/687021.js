/** chunk id: 687021 params = (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(667532);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(444550),
    d = n(263063),
    c = n(128450),
    u = n(836602),
    _ = n(71393),
    m = n(711014),
    g = n(403362),
    A = n(985018),
    h = n(651203);

function x(e) {
    let {
        guildId: t,
        className: n,
        globalOption: s,
        hideDivider: l = !1,
        onChange: a,
        renderOptionSuffix: o
    } = e;
    return (0, i.jsx)(c.A, {
        className: r()(h.u, n),
        title: A.intl.string(A.t.ref7Ki),
        hideDivider: l,
        forcedDivider: !0,
        children: (0, i.jsx)(p, {
            guildId: t,
            onChange: a,
            renderOptionSuffix: o,
            globalOption: s
        })
    })
}

function p(e) {
    let {
        guildId: t,
        globalOption: n,
        onChange: l,
        renderOptionSuffix: r
    } = e, c = (0, a.bG)([u.A], () => u.A.showNotice()), x = (0, a.bG)([m.Ay], () => m.Ay.getFlattenedGuildIds()), p = (0, a.bG)([_.A], () => _.A.getGuilds()), T = s.useMemo(() => {
        let e = x.map(e => {
            let t = p[e];
            return null == t ? null : {
                label: t.name,
                value: t.id
            }
        }).filter(g.Vq);
        return null != n && e.unshift(n), e
    }, [x, p, n]), E = s.useCallback(e => {
        let t = e?.label === n?.label && e?.value === n?.value;
        return null == e || "" === e.value || t ? null : (0, i.jsx)(d.Ay, {
            className: h.c,
            guild: p[e.value],
            size: d.Ay.Sizes.SMOL,
            active: !0
        })
    }, [p, n]);
    return (0, i.jsx)(o.p, {
        isDisabled: c,
        onChange: e => {
            if ("" === e || e === n?.value) return void l(null);
            let t = p[e];
            null != t && l(t)
        },
        value: t,
        options: T,
        renderOptionPrefix: E,
        renderOptionSuffix: r,
        placeholder: A.intl.string(A.t["kMgj+e"]),
        "data-migration-pending": !0
    })
}