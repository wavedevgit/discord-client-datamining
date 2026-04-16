/** chunk id: 997877 params = (module,exports,require) **/
l.d(t, {
    x: () => q
});
var n = l(627968),
    s = l(64700),
    r = l(503698),
    a = l.n(r),
    i = l(989349),
    u = l.n(i),
    c = l(837381),
    o = l(311907),
    d = l(397927),
    h = l(966327),
    m = l(928039),
    f = l(629357),
    x = l(47167),
    g = l(598104),
    b = l(255266),
    A = l(72563),
    _ = l(223863),
    p = l(95701),
    S = l(734057),
    L = l(71393),
    j = l(576705),
    y = l(290863),
    T = l(222823),
    C = l(994500),
    N = l(287809),
    v = l(405269),
    E = l(403362),
    k = l(427262),
    P = l(652215),
    D = l(790782),
    I = l(985018),
    R = l(894385);

function M(e) {
    let {
        destination: t,
        icon: l,
        label: r,
        subLabel: i,
        selected: u,
        disabled: o,
        onPressDestination: h,
        "aria-setsize": m,
        "aria-posinset": f
    } = e, x = (0, c.rm)(t.id), g = s.useCallback(() => {
        o || h?.(t)
    }, [h, o, t]);
    return (0, n.jsxs)(d.DUT, {
        className: a()(R.HP, {
            [R.r9]: o
        }),
        onClick: g,
        "aria-selected": u,
        "aria-setsize": m,
        "aria-posinset": f,
        ...x,
        children: [(0, n.jsxs)("div", {
            className: R.D_,
            children: [(0, n.jsx)("div", {
                className: R.P0,
                children: l
            }), (0, n.jsxs)("div", {
                className: R.WD,
                children: [(0, n.jsx)(d.Text, {
                    tag: "strong",
                    className: R.Pf,
                    variant: "text-md/semibold",
                    lineClamp: 1,
                    children: r
                }), (0, n.jsx)(d.Text, {
                    className: R.J2,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: i
                })]
            })]
        }), (0, n.jsx)("div", {
            className: R.kv,
            children: (0, n.jsx)(d.P7L, {
                checked: u
            })
        })]
    })
}

function w(e) {
    let {
        user: t,
        subLabel: l,
        ...s
    } = e, r = k.Ay.useName(t), a = k.Ay.useUserTag(t, {
        decoration: "never"
    }), i = (0, o.bG)([C.A], () => C.A.getNickname(t.id)), u = (0, o.bG)([y.A], () => y.A.getStatus(t.id));
    return (0, n.jsx)(M, {
        ...s,
        icon: (0, n.jsx)(h.A, {
            "aria-hidden": !0,
            size: d._3J.SIZE_32,
            user: t,
            status: u
        }),
        label: i ?? r,
        subLabel: l ?? a
    })
}

function G(e) {
    let {
        channel: t,
        subLabel: l,
        ...s
    } = e, r = (0, x.Ay)(t), a = (0, A.i)(t);
    return (0, n.jsx)(M, {
        ...s,
        icon: (0, n.jsx)(g.A, {
            "aria-hidden": !0,
            size: d._3J.SIZE_32,
            channel: t
        }),
        label: r,
        subLabel: l ?? a
    })
}

function U(e) {
    let {
        channel: t,
        subLabel: l,
        ...s
    } = e, r = (0, o.bG)([L.A], () => L.A.getGuild(t?.guild_id)), a = (0, x.Ay)(t), i = (0, o.bG)([S.A, N.default, C.A], () => {
        let e = S.A.getChannel(t.parent_id);
        return null == e ? null : (0, x.m1)(e, N.default, C.A, !1)
    }), c = (0, o.bG)([T.Ay], () => T.Ay.lastMessageTimestamp(t.id, D.P.CHANNEL)), h = r?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.bSJ : d.N$i;
        h = (0, n.jsxs)("div", {
            className: R.vr,
            children: [(0, n.jsx)(e, {
                color: d.LU0.colors.TEXT_SUBTLE,
                className: R.Q9
            }), (0, n.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                lineClamp: 1,
                children: i
            }), null != c ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(d.Text, {
                    className: R.Ql,
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: "•"
                }), (0, n.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: (0, v.Fe)(u()(c))
                })]
            }) : null]
        })
    }
    return (0, n.jsx)(M, {
        ...s,
        icon: (0, n.jsx)(b.A, {
            size: b.q.SMALL_32,
            guild: r,
            channel: t
        }),
        label: a,
        subLabel: l ?? h
    })
}

function q(e) {
    let {
        rowData: t,
        selectedDestinations: l,
        handleToggleDestination: r,
        disableSelection: a,
        ...i
    } = e, u = s.useMemo(() => [t.length], [t.length]), o = s.useCallback(() => 48, []), h = s.useMemo(() => l?.map(_.I) ?? [], [l]), x = s.useCallback(e => {
        let {
            section: l,
            row: s
        } = e;
        if (l > 0) return;
        let {
            type: i,
            record: u
        } = t[s];
        if (i === f.rD.HEADER) return;
        let c = i === f.rD.USER ? {
                type: "user",
                id: u.id
            } : {
                type: "channel",
                id: u.id
            },
            o = (0, _.I)(c),
            d = function(e) {
                if (e instanceof p.YB && (0, p.zy)(e.type) && null != e.rateLimitPerUser && e.rateLimitPerUser > 0 && !(j.A.can(P.xBc.MANAGE_CHANNELS, e) || j.A.can(P.xBc.MANAGE_MESSAGES, e))) return {
                    label: I.intl.string(I.t.Icu3bf)
                }
            }(u),
            m = h.includes(o),
            x = {
                key: o,
                destination: c,
                subLabel: null != d ? d.label : void 0,
                disabled: a && !m || null != d,
                selected: m,
                onPressDestination: r,
                "aria-posinset": s + 1,
                "aria-setsize": t.length
            };
        return i === f.rD.USER ? (0, n.jsx)(w, {
            user: u,
            ...x
        }) : i === f.rD.GROUP_DM ? (0, n.jsx)(G, {
            channel: u,
            ...x
        }) : i === f.rD.TEXT_CHANNEL || i === f.rD.VOICE_CHANNEL ? (0, n.jsx)(U, {
            channel: u,
            ...x
        }) : void(0, E.xb)(i)
    }, [a, r, t, h]), g = s.useRef(null), b = (0, m.A)("share-command-modal", g);
    return (0, n.jsx)(c.hD, {
        navigator: b,
        children: (0, n.jsx)(c.PR, {
            children: e => {
                let {
                    ref: t,
                    ...l
                } = e;
                return (0, n.jsx)(d.OZj, {
                    ref: e => {
                        g.current = e, t.current = e?.getScrollerNode() ?? null
                    },
                    ...l,
                    ...i,
                    sections: u,
                    sectionHeight: 0,
                    renderRow: x,
                    rowHeight: o
                })
            }
        })
    })
}