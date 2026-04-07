/** chunk id: 61916 params = (module,exports,require) **/
s.d(t, {
    s: () => F
});
var i = s(627968),
    a = s(64700),
    l = s(989349),
    n = s.n(l),
    r = s(311907),
    A = s(397927),
    u = s(966327),
    d = s(629357),
    o = s(47167),
    c = s(598104),
    _ = s(255266),
    h = s(72563),
    I = s(223863),
    E = s(734057),
    L = s(71393),
    N = s(290863),
    b = s(222823),
    m = s(994500),
    f = s(287809),
    C = s(405269),
    P = s(403362),
    g = s(427262),
    x = s(513480),
    D = s(359378),
    G = s(790782),
    T = s(337508);

function p(e) {
    let {
        user: t,
        subLabel: s,
        ...a
    } = e, l = g.Ay.useName(t), n = g.Ay.useUserTag(t, {
        decoration: "never"
    }), d = (0, r.bG)([m.A], () => m.A.getNickname(t.id)), o = (0, r.bG)([N.A], () => N.A.getStatus(t.id));
    return (0, i.jsx)(D.A, {
        listItemId: a.destination.id,
        icon: (0, i.jsx)(u.A, {
            "aria-hidden": !0,
            size: A._3J.SIZE_32,
            user: t,
            status: o
        }),
        label: d ?? l,
        subLabel: s ?? n,
        selected: a.selected,
        disabled: a.disabled,
        onPress: null != a.onPressDestination ? () => a.onPressDestination?.(a.destination) : void 0,
        "aria-setsize": a["aria-setsize"],
        "aria-posinset": a["aria-posinset"],
        className: a.className
    })
}

function S(e) {
    let {
        channel: t,
        subLabel: s,
        ...a
    } = e, l = (0, o.Ay)(t), n = (0, h.i)(t);
    return (0, i.jsx)(D.A, {
        listItemId: a.destination.id,
        icon: (0, i.jsx)(c.A, {
            "aria-hidden": !0,
            size: A._3J.SIZE_32,
            channel: t
        }),
        label: l,
        subLabel: s ?? n,
        selected: a.selected,
        disabled: a.disabled,
        onPress: null != a.onPressDestination ? () => a.onPressDestination?.(a.destination) : void 0,
        "aria-setsize": a["aria-setsize"],
        "aria-posinset": a["aria-posinset"],
        className: a.className
    })
}

function y(e) {
    let {
        channel: t,
        subLabel: s,
        ...a
    } = e, l = (0, r.bG)([L.A], () => L.A.getGuild(t?.guild_id)), u = (0, o.Ay)(t), d = (0, r.bG)([E.A, f.default, m.A], () => {
        let e = E.A.getChannel(t.parent_id);
        return null == e ? null : (0, o.m1)(e, f.default, m.A, !1)
    }), c = (0, r.bG)([b.Ay], () => b.Ay.lastMessageTimestamp(t.id, G.P.CHANNEL)), h = l?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? A.bSJ : A.N$i;
        h = (0, i.jsxs)("div", {
            className: T.vr,
            children: [(0, i.jsx)(e, {
                color: A.LU0.colors.TEXT_SUBTLE,
                className: T.Q9
            }), (0, i.jsx)(A.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                lineClamp: 1,
                children: d
            }), null != c ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(A.Text, {
                    className: T.Ql,
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: "•"
                }), (0, i.jsx)(A.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: (0, C.Fe)(n()(c))
                })]
            }) : null]
        })
    }
    return (0, i.jsx)(D.A, {
        listItemId: a.destination.id,
        icon: (0, i.jsx)(_.A, {
            size: _.q.SMALL_32,
            guild: l,
            channel: t
        }),
        label: u,
        subLabel: s ?? h,
        selected: a.selected,
        disabled: a.disabled,
        onPress: null != a.onPressDestination ? () => a.onPressDestination?.(a.destination) : void 0,
        "aria-setsize": a["aria-setsize"],
        "aria-posinset": a["aria-posinset"],
        className: a.className
    })
}

function F(e) {
    let {
        rowData: t,
        message: s,
        originChannel: l,
        selectedDestinations: n,
        handleToggleDestination: r,
        disableSelection: A,
        rowClassName: u,
        validateDestination: o
    } = e, c = a.useMemo(() => n?.map(I.I) ?? [], [n]), _ = a.useCallback(e => {
        let {
            section: a,
            row: n
        } = e;
        if (a > 0) return;
        let {
            type: _,
            record: h
        } = t[n];
        if (_ === d.rD.HEADER) return;
        let E = _ === d.rD.USER ? {
                type: "user",
                id: h.id
            } : {
                type: "channel",
                id: h.id
            },
            L = (0, I.I)(E),
            N = (0, x.pE)(s, l, h, o),
            b = c.includes(L),
            m = {
                key: L,
                message: s,
                destination: E,
                subLabel: null != N ? N.label : void 0,
                disabled: A && !b || null != N,
                selected: b,
                onPressDestination: r,
                "aria-posinset": n + 1,
                "aria-setsize": t.length,
                className: u
            };
        return _ === d.rD.USER ? (0, i.jsx)(p, {
            user: h,
            ...m
        }) : _ === d.rD.GROUP_DM ? (0, i.jsx)(S, {
            channel: h,
            ...m
        }) : _ === d.rD.TEXT_CHANNEL || _ === d.rD.VOICE_CHANNEL ? (0, i.jsx)(y, {
            channel: h,
            ...m
        }) : void(0, P.xb)(_)
    }, [A, r, s, l, t, c, u, o]);
    return {
        sections: [t.length],
        sectionHeight: 0,
        rowHeight: 48,
        renderRow: _
    }
}