/** chunk id: 687021, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => x,
    v: () => v
}), t(667532);
var r = t(627968),
    i = t(64700),
    a = t(503698),
    l = t.n(a),
    d = t(311907),
    c = t(444550),
    s = t(263063),
    u = t(128450),
    o = t(836602),
    f = t(71393),
    m = t(711014),
    h = t(403362),
    g = t(985018),
    p = t(306505);

function x(e) {
    let {
        guildId: n,
        className: t,
        globalOption: i,
        hideDivider: a = !1,
        onChange: d,
        renderOptionSuffix: c
    } = e;
    return (0, r.jsx)(u.A, {
        className: l()(p.u, t),
        title: g.intl.string(g.t.ref7Ki),
        hideDivider: a,
        forcedDivider: !0,
        children: (0, r.jsx)(v, {
            guildId: n,
            onChange: d,
            renderOptionSuffix: c,
            globalOption: i
        })
    })
}

function v(e) {
    let {
        guildId: n,
        globalOption: t,
        onChange: a,
        renderOptionSuffix: l
    } = e, u = (0, d.bG)([o.A], () => o.A.showNotice()), x = (0, d.bG)([m.Ay], () => m.Ay.getFlattenedGuildIds()), v = (0, d.bG)([f.A], () => f.A.getGuilds()), _ = i.useMemo(() => {
        let e = x.map(e => {
            let n = v[e];
            return null == n ? null : {
                label: n.name,
                value: n.id
            }
        }).filter(h.Vq);
        return null != t && e.unshift(t), e
    }, [x, v, t]), A = i.useCallback(e => {
        let n = e?.label === t?.label && e?.value === t?.value;
        return null == e || "" === e.value || n ? null : (0, r.jsx)(s.Ay, {
            className: p.c,
            guild: v[e.value],
            size: s.Ay.Sizes.SMOL,
            active: !0
        })
    }, [v, t]);
    return (0, r.jsx)(c.p, {
        isDisabled: u,
        onChange: e => {
            if ("" === e || e === t?.value) return void a(null);
            let n = v[e];
            null != n && a(n)
        },
        value: n,
        options: _,
        renderOptionPrefix: A,
        renderOptionSuffix: l,
        placeholder: g.intl.string(g.t["kMgj+e"]),
        "data-migration-pending": !0
    })
}