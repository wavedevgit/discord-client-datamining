/** chunk id: 889186 params = (module,exports,require) **/
l.d(t, {
    default: () => M
}), l(321073);
var n = l(627968),
    s = l(64700),
    r = l(158954),
    i = l(311907),
    a = l(397927),
    u = l(966327),
    c = l(629357),
    d = l(47167),
    o = l(359378),
    h = l(598104),
    f = l(255266),
    g = l(223863),
    x = l(151054),
    p = l(734057),
    _ = l(71393),
    m = l(576705),
    b = l(287809),
    A = l(181079),
    y = l(422258),
    C = l(93055),
    v = l(5180),
    j = l(652215),
    k = l(665606),
    D = l(985018),
    L = l(233492);

function M(e) {
    let {
        transitionState: t,
        onClose: l,
        parentId: u
    } = e, [d, o] = s.useState(""), [h, f] = s.useState(() => new Set), {
        notifyFavoriteAdded: g
    } = (0, C.CJ)(), {
        hasHigherPrivileges: _
    } = (0, C.TW)("AddFavoriteChannelModal"), b = (0, i.bG)([A.A], () => A.A.getFavoriteChannels()), M = s.useMemo(() => new Set(Object.keys(b)), [b]), E = s.useCallback((e, t) => {
        if (e.type === c.rD.USER) {
            let l = p.A.getDMChannelFromUserId(e.record.id);
            return (!!t || null != l) && (null == l || !M.has(l.id))
        }
        return e.type === c.rD.GROUP_DM ? !M.has(e.record.id) : m.A.can(j.xBc.VIEW_CHANNEL, e.record) && (0, v.IF)(e.record, _) && !M.has(e.record.id)
    }, [M, _]), {
        results: R,
        updateSearchText: w
    } = (0, x.R)({
        includeMissingDMs: !0,
        channelFilter: E
    }), T = s.useMemo(() => [...h].filter(e => !M.has(e)).length, [M, h]), G = T >= 20, P = s.useMemo(() => T >= 2 ? D.intl.formatToPlainString(k.default.LbCa8x, {
        count: T
    }) : D.intl.string(k.default.xKXcSu), [T]), H = s.useCallback(e => {
        o(e), w(e)
    }, [w]), q = s.useCallback(e => {
        M.has(e) || f(t => {
            let l = 0;
            for (let e of t) M.has(e) || (l += 1);
            if (l >= 20 && !t.has(e)) return t;
            let n = new Set(t);
            return n.has(e) ? n.delete(e) : n.add(e), n
        })
    }, [M]), W = s.useCallback(() => {
        let e = [...h].filter(e => !M.has(e));
        e.length > 0 && (g(), (0, y.S_)(e, u ?? null)), l()
    }, [M, g, l, u, h]), U = s.useMemo(() => {
        let e = [];
        for (let t of R) t.type !== c.rD.HEADER && null != I(t) && e.push(t);
        return e
    }, [R]), F = s.useMemo(() => 0 === U.length ? {
        sections: [1],
        sectionHeight: 0,
        renderRow: () => (0, n.jsx)(S, {}),
        rowHeight: 72
    } : {
        sections: [U.length],
        sectionHeight: 0,
        rowHeight: 48,
        renderRow: e => {
            let {
                section: t,
                row: l
            } = e;
            if (t > 0) return null;
            let s = U[l];
            if (null == s) return null;
            let r = I(s);
            return null == r ? null : (0, n.jsx)(N, {
                channel: r,
                selected: h.has(r.id),
                disabled: G && !h.has(r.id),
                onToggleChannel: q
            }, r.id)
        }
    }, [U, q, h, G]);
    return (0, n.jsx)(r.Modal, {
        title: D.intl.string(k.default.Rp35U1),
        actions: [],
        transitionState: t,
        onClose: l,
        input: (0, n.jsx)(a.IWV, {
            query: d,
            onChange: H,
            onClear: () => H(""),
            placeholder: D.intl.string(D.t["5h0QOP"]),
            "aria-label": D.intl.string(D.t["5h0QOP"]),
            autoFocus: !0
        }),
        actionBarInput: (0, n.jsx)("div", {
            className: L.c,
            children: (0, n.jsx)(a.Button, {
                variant: "primary",
                size: "md",
                fullWidth: !0,
                text: P,
                onClick: W,
                disabled: 0 === T
            })
        }),
        listProps: F
    })
}

function S() {
    return (0, n.jsx)("div", {
        className: L.p,
        children: (0, n.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: D.intl.string(k.default.kQL9be)
        })
    })
}

function I(e) {
    if (e.type === c.rD.USER) {
        let t = (0, g._g)({
            type: "user",
            id: e.record.id
        });
        return null != t ? p.A.getChannel(t) ?? null : null
    }
    return e.type === c.rD.TEXT_CHANNEL || e.type === c.rD.VOICE_CHANNEL || e.type === c.rD.GROUP_DM ? e.record : null
}

function N(e) {
    let {
        channel: t,
        selected: l,
        disabled: s,
        onToggleChannel: r
    } = e, c = (0, i.bG)([_.A], () => _.A.getGuild(t.guild_id), [t.guild_id]), g = (0, d.Ay)(t), x = (0, i.bG)([b.default], () => t.isDM() ? b.default.getUser(t.recipients?.[0]) : null, [t]);
    return (0, n.jsx)(o.A, {
        listItemId: t.id,
        icon: t.isDM() && null != x ? (0, n.jsx)(u.A, {
            "aria-hidden": !0,
            size: a._3J.SIZE_32,
            user: x
        }) : t.isGroupDM() ? (0, n.jsx)(h.A, {
            "aria-hidden": !0,
            size: a._3J.SIZE_32,
            channel: t
        }) : (0, n.jsx)(f.A, {
            size: f.q.SMALL_32,
            guild: c,
            channel: t
        }),
        label: g,
        selected: l,
        disabled: s,
        onPress: () => r(t.id)
    })
}