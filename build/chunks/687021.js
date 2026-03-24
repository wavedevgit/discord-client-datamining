/** chunk id: 687021 params = (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(667532);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(444550),
    d = n(263063),
    c = n(128450),
    u = n(836602),
    m = n(71393),
    _ = n(711014),
    g = n(403362),
    x = n(985018),
    A = n(306505);

function h(e) {
    let {
        guildId: t,
        className: n,
        globalOption: s,
        hideDivider: l = !1,
        onChange: r,
        renderOptionSuffix: o
    } = e;
    return (0, i.jsx)(c.A, {
        className: a()(A.u, n),
        title: x.intl.string(x.t.ref7Ki),
        hideDivider: l,
        forcedDivider: !0,
        children: (0, i.jsx)(p, {
            guildId: t,
            onChange: r,
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
        renderOptionSuffix: a
    } = e, c = (0, r.bG)([u.A], () => u.A.showNotice()), h = (0, r.bG)([_.Ay], () => _.Ay.getFlattenedGuildIds()), p = (0, r.bG)([m.A], () => m.A.getGuilds()), f = s.useMemo(() => {
        let e = h.map(e => {
            let t = p[e];
            return null == t ? null : {
                label: t.name,
                value: t.id
            }
        }).filter(g.Vq);
        return null != n && e.unshift(n), e
    }, [h, p, n]), T = s.useCallback(e => {
        let t = e?.label === n?.label && e?.value === n?.value;
        return null == e || "" === e.value || t ? null : (0, i.jsx)(d.Ay, {
            className: A.c,
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
        options: f,
        renderOptionPrefix: T,
        renderOptionSuffix: a,
        placeholder: x.intl.string(x.t["kMgj+e"]),
        "data-migration-pending": !0
    })
}