/** chunk id: 687021 params = (module,exports,require) **/
r.d(t, {
    A: () => b,
    v: () => x
}), r(667532);
var a = r(627968),
    n = r(64700),
    s = r(503698),
    i = r.n(s),
    l = r(311907),
    o = r(444550),
    d = r(263063),
    c = r(128450),
    u = r(836602),
    m = r(71393),
    _ = r(711014),
    p = r(403362),
    f = r(985018),
    h = r(220147);

function b(e) {
    let {
        guildId: t,
        className: r,
        globalOption: n,
        hideDivider: s = !1,
        onChange: l,
        renderOptionSuffix: o
    } = e;
    return (0, a.jsx)(c.A, {
        className: i()(h.u, r),
        title: f.intl.string(f.t.ref7Ki),
        hideDivider: s,
        forcedDivider: !0,
        children: (0, a.jsx)(x, {
            guildId: t,
            onChange: l,
            renderOptionSuffix: o,
            globalOption: n
        })
    })
}

function x(e) {
    let {
        guildId: t,
        globalOption: r,
        onChange: s,
        renderOptionSuffix: i
    } = e, c = (0, l.bG)([u.A], () => u.A.showNotice()), b = (0, l.bG)([_.Ay], () => _.Ay.getFlattenedGuildIds()), x = (0, l.bG)([m.A], () => m.A.getGuilds()), g = n.useMemo(() => {
        let e = b.map(e => {
            let t = x[e];
            return null == t ? null : {
                label: t.name,
                value: t.id
            }
        }).filter(p.Vq);
        return null != r && e.unshift(r), e
    }, [b, x, r]), C = n.useCallback(e => {
        let t = e?.label === r?.label && e?.value === r?.value;
        return null == e || "" === e.value || t ? null : (0, a.jsx)(d.Ay, {
            className: h.c,
            guild: x[e.value],
            size: d.Ay.Sizes.SMOL,
            active: !0
        })
    }, [x, r]);
    return (0, a.jsx)(o.p, {
        isDisabled: c,
        onChange: e => {
            if ("" === e || e === r?.value) return void s(null);
            let t = x[e];
            null != t && s(t)
        },
        value: t,
        options: g,
        renderOptionPrefix: C,
        renderOptionSuffix: i,
        placeholder: f.intl.string(f.t["kMgj+e"]),
        "data-migration-pending": !0
    })
}