/** chunk id: 687021 params = (module,exports,require) **/
r.d(t, {
    A: () => h,
    v: () => g
}), r(667532);
var n = r(627968),
    a = r(64700),
    i = r(503698),
    s = r.n(i),
    l = r(311907),
    d = r(444550),
    o = r(263063),
    c = r(128450),
    u = r(836602),
    m = r(71393),
    _ = r(711014),
    p = r(403362),
    f = r(985018),
    b = r(220147);

function h(e) {
    let {
        guildId: t,
        className: r,
        globalOption: a,
        hideDivider: i = !1,
        onChange: l,
        renderOptionSuffix: d
    } = e;
    return (0, n.jsx)(c.A, {
        className: s()(b.u, r),
        title: f.intl.string(f.t.ref7Ki),
        hideDivider: i,
        forcedDivider: !0,
        children: (0, n.jsx)(g, {
            guildId: t,
            onChange: l,
            renderOptionSuffix: d,
            globalOption: a
        })
    })
}

function g(e) {
    let {
        guildId: t,
        globalOption: r,
        onChange: i,
        renderOptionSuffix: s
    } = e, c = (0, l.bG)([u.A], () => u.A.showNotice()), h = (0, l.bG)([_.Ay], () => _.Ay.getFlattenedGuildIds()), g = (0, l.bG)([m.A], () => m.A.getGuilds()), x = a.useMemo(() => {
        let e = h.map(e => {
            let t = g[e];
            return null == t ? null : {
                label: t.name,
                value: t.id
            }
        }).filter(p.Vq);
        return null != r && e.unshift(r), e
    }, [h, g, r]), C = a.useCallback(e => {
        let t = e?.label === r?.label && e?.value === r?.value;
        return null == e || "" === e.value || t ? null : (0, n.jsx)(o.Ay, {
            className: b.c,
            guild: g[e.value],
            size: o.Ay.Sizes.SMOL,
            active: !0
        })
    }, [g, r]);
    return (0, n.jsx)(d.p, {
        isDisabled: c,
        onChange: e => {
            if ("" === e || e === r?.value) return void i(null);
            let t = g[e];
            null != t && i(t)
        },
        value: t,
        options: x,
        renderOptionPrefix: C,
        renderOptionSuffix: s,
        placeholder: f.intl.string(f.t["kMgj+e"]),
        "data-migration-pending": !0
    })
}