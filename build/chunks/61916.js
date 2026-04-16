/** chunk id: 61916 params = (module,exports,require) **/
s.d(t, {
    s: () => I
});
var i = s(627968),
    l = s(64700),
    n = s(989349),
    a = s.n(n),
    r = s(311907),
    u = s(397927),
    d = s(966327),
    o = s(629357),
    c = s(47167),
    m = s(598104),
    h = s(255266),
    f = s(72563),
    b = s(223863),
    x = s(734057),
    A = s(71393),
    g = s(290863),
    p = s(222823),
    v = s(994500),
    N = s(287809),
    L = s(405269),
    j = s(403362),
    y = s(427262),
    P = s(513480),
    T = s(359378),
    D = s(790782),
    _ = s(745812);

function E(e) {
    let {
        user: t,
        subLabel: s,
        ...l
    } = e, n = y.Ay.useName(t), a = y.Ay.useUserTag(t, {
        decoration: "never"
    }), o = (0, r.bG)([v.A], () => v.A.getNickname(t.id)), c = (0, r.bG)([g.A], () => g.A.getStatus(t.id));
    return (0, i.jsx)(T.A, {
        listItemId: l.destination.id,
        icon: (0, i.jsx)(d.A, {
            "aria-hidden": !0,
            size: u._3J.SIZE_32,
            user: t,
            status: c
        }),
        label: o ?? n,
        subLabel: s ?? a,
        selected: l.selected,
        disabled: l.disabled,
        onPress: null != l.onPressDestination ? () => l.onPressDestination?.(l.destination) : void 0,
        "aria-setsize": l["aria-setsize"],
        "aria-posinset": l["aria-posinset"],
        className: l.className
    })
}

function S(e) {
    let {
        channel: t,
        subLabel: s,
        ...l
    } = e, n = (0, c.Ay)(t), a = (0, f.i)(t);
    return (0, i.jsx)(T.A, {
        listItemId: l.destination.id,
        icon: (0, i.jsx)(m.A, {
            "aria-hidden": !0,
            size: u._3J.SIZE_32,
            channel: t
        }),
        label: n,
        subLabel: s ?? a,
        selected: l.selected,
        disabled: l.disabled,
        onPress: null != l.onPressDestination ? () => l.onPressDestination?.(l.destination) : void 0,
        "aria-setsize": l["aria-setsize"],
        "aria-posinset": l["aria-posinset"],
        className: l.className
    })
}

function C(e) {
    let {
        channel: t,
        subLabel: s,
        ...l
    } = e, n = (0, r.bG)([A.A], () => A.A.getGuild(t?.guild_id)), d = (0, c.Ay)(t), o = (0, r.bG)([x.A, N.default, v.A], () => {
        let e = x.A.getChannel(t.parent_id);
        return null == e ? null : (0, c.m1)(e, N.default, v.A, !1)
    }), m = (0, r.bG)([p.Ay], () => p.Ay.lastMessageTimestamp(t.id, D.P.CHANNEL)), f = n?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? u.bSJ : u.N$i;
        f = (0, i.jsxs)("div", {
            className: _.vr,
            children: [(0, i.jsx)(e, {
                color: u.LU0.colors.TEXT_SUBTLE,
                className: _.Q9
            }), (0, i.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                lineClamp: 1,
                children: o
            }), null != m ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(u.Text, {
                    className: _.Ql,
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: "•"
                }), (0, i.jsx)(u.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: (0, L.Fe)(a()(m))
                })]
            }) : null]
        })
    }
    return (0, i.jsx)(T.A, {
        listItemId: l.destination.id,
        icon: (0, i.jsx)(h.A, {
            size: h.q.SMALL_32,
            guild: n,
            channel: t
        }),
        label: d,
        subLabel: s ?? f,
        selected: l.selected,
        disabled: l.disabled,
        onPress: null != l.onPressDestination ? () => l.onPressDestination?.(l.destination) : void 0,
        "aria-setsize": l["aria-setsize"],
        "aria-posinset": l["aria-posinset"],
        className: l.className
    })
}

function I(e) {
    let {
        rowData: t,
        message: s,
        originChannel: n,
        selectedDestinations: a,
        handleToggleDestination: r,
        disableSelection: u,
        rowClassName: d,
        validateDestination: c
    } = e, m = l.useMemo(() => a?.map(b.I) ?? [], [a]), h = l.useCallback(e => {
        let {
            section: l,
            row: a
        } = e;
        if (l > 0) return;
        let {
            type: h,
            record: f
        } = t[a];
        if (h === o.rD.HEADER) return;
        let x = h === o.rD.USER ? {
                type: "user",
                id: f.id
            } : {
                type: "channel",
                id: f.id
            },
            A = (0, b.I)(x),
            g = (0, P.pE)(s, n, f, c),
            p = m.includes(A),
            v = {
                key: A,
                message: s,
                destination: x,
                subLabel: null != g ? g.label : void 0,
                disabled: u && !p || null != g,
                selected: p,
                onPressDestination: r,
                "aria-posinset": a + 1,
                "aria-setsize": t.length,
                className: d
            };
        return h === o.rD.USER ? (0, i.jsx)(E, {
            user: f,
            ...v
        }) : h === o.rD.GROUP_DM ? (0, i.jsx)(S, {
            channel: f,
            ...v
        }) : h === o.rD.TEXT_CHANNEL || h === o.rD.VOICE_CHANNEL ? (0, i.jsx)(C, {
            channel: f,
            ...v
        }) : void(0, j.xb)(h)
    }, [u, r, s, n, t, m, d, c]);
    return {
        sections: [t.length],
        sectionHeight: 0,
        rowHeight: 48,
        renderRow: h
    }
}