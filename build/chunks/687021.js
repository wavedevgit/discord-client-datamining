/** chunk id: 687021 params = (module,exports,require) **/
n.d(t, {
    A: () => p
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
    A = n(985018),
    x = n(306505);

function p(e) {
    let {
        guildId: t,
        className: n,
        globalOption: s,
        hideDivider: l = !1,
        onChange: r,
        renderOptionSuffix: o
    } = e;
    return (0, i.jsx)(c.A, {
        className: a()(x.u, n),
        title: A.intl.string(A.t.ref7Ki),
        hideDivider: l,
        forcedDivider: !0,
        children: (0, i.jsx)(h, {
            guildId: t,
            onChange: r,
            renderOptionSuffix: o,
            globalOption: s
        })
    })
}

function h(e) {
    let {
        guildId: t,
        globalOption: n,
        onChange: l,
        renderOptionSuffix: a
    } = e, c = (0, r.bG)([u.A], () => u.A.showNotice()), p = (0, r.bG)([_.Ay], () => _.Ay.getFlattenedGuildIds()), h = (0, r.bG)([m.A], () => m.A.getGuilds()), T = s.useMemo(() => {
        let e = p.map(e => {
            let t = h[e];
            return null == t ? null : {
                label: t.name,
                value: t.id
            }
        }).filter(g.Vq);
        return null != n && e.unshift(n), e
    }, [p, h, n]), E = s.useCallback(e => {
        let t = e?.label === n?.label && e?.value === n?.value;
        return null == e || "" === e.value || t ? null : (0, i.jsx)(d.Ay, {
            className: x.c,
            guild: h[e.value],
            size: d.Ay.Sizes.SMOL,
            active: !0
        })
    }, [h, n]);
    return (0, i.jsx)(o.p, {
        isDisabled: c,
        onChange: e => {
            if ("" === e || e === n?.value) return void l(null);
            let t = h[e];
            null != t && l(t)
        },
        value: t,
        options: T,
        renderOptionPrefix: E,
        renderOptionSuffix: a,
        placeholder: A.intl.string(A.t["kMgj+e"]),
        "data-migration-pending": !0
    })
}