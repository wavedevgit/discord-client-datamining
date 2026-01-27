/** Chunk was on 82220 **/
/** chunk id: 687021, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => p,
    v: () => x
}), t(667532);
var r = t(627968),
    i = t(64700),
    l = t(503698),
    a = t.n(l),
    d = t(311907),
    c = t(444550),
    u = t(263063),
    o = t(128450),
    s = t(71393),
    f = t(711014),
    h = t(403362),
    v = t(833336),
    m = t(985018),
    g = t(306505);

function p(e) {
    let {
        guildId: n,
        className: t,
        globalOption: i,
        hideDivider: l = !1,
        onChange: d,
        renderOptionSuffix: c
    } = e;
    return (0, r.jsx)(o.A, {
        className: a()(g.u, t),
        title: m.intl.string(m.t.ref7Ki),
        hideDivider: l,
        forcedDivider: !0,
        children: (0, r.jsx)(x, {
            guildId: n,
            onChange: d,
            renderOptionSuffix: c,
            globalOption: i
        })
    })
}

function x(e) {
    let {
        guildId: n,
        globalOption: t,
        onChange: l,
        renderOptionSuffix: a
    } = e, o = (0, d.bG)([v.A], () => v.A.showNotice()), p = (0, d.bG)([f.Ay], () => f.Ay.getFlattenedGuildIds()), x = (0, d.bG)([s.A], () => s.A.getGuilds()), A = i.useMemo(() => {
        let e = p.map(e => {
            let n = x[e];
            return null == n ? null : {
                label: n.name,
                value: n.id
            }
        }).filter(h.Vq);
        return null != t && e.unshift(t), e
    }, [p, x, t]), _ = i.useCallback(e => {
        let n = (null == e ? void 0 : e.label) === (null == t ? void 0 : t.label) && (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value);
        return null == e || "" === e.value || n ? null : (0, r.jsx)(u.A, {
            className: g.c,
            guild: x[e.value],
            size: u.A.Sizes.SMOL,
            active: !0
        })
    }, [x, t]);
    return (0, r.jsx)(c.p, {
        isDisabled: o,
        onChange: e => {
            if ("" === e || e === (null == t ? void 0 : t.value)) return void l(null);
            let n = x[e];
            null != n && l(n)
        },
        value: n,
        options: A,
        renderOptionPrefix: _,
        renderOptionSuffix: a,
        placeholder: m.intl.string(m.t["kMgj+e"]),
        "data-migration-pending": !0
    })
}