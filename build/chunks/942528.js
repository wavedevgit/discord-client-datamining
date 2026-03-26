/** chunk id: 942528 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    c = n(397927),
    o = n(734057),
    d = n(309010),
    u = n(287809),
    m = n(562153),
    x = n(420706),
    h = n(322789),
    f = n(506326),
    g = n(985018),
    p = n(505502),
    _ = n(851822);
let v = e => {
    let {
        entry: t,
        onClose: n,
        onReaction: i,
        onRequestOpen: v,
        disableActivityProfileLinks: j,
        customCTA: A,
        popoutClassname: C,
        popoutPosition: I = "right"
    } = e, b = l.useRef(null), E = (0, s.bG)([d.A, o.A], () => o.A.getChannel(d.A.getChannelId())), N = (0, s.bG)([u.default], () => u.default.getUser(t.author_id)), {
        nick: S,
        avatar: k
    } = l.useMemo(() => {
        let e = N?.getAvatarURL(E?.guild_id, 48, !1);
        return {
            nick: m.Ay.getName(E?.guild_id, E?.id, N),
            avatar: e
        }
    }, [N, E]);
    return null == N ? null : (0, a.jsx)(c.YNO, {
        targetElementRef: b,
        position: I,
        renderPopout: e => {
            let {
                closePopout: l,
                updatePosition: r
            } = e;
            return (0, a.jsx)("div", {
                className: C,
                children: (0, a.jsx)(x.Oo, {
                    entry: t,
                    closePopout: l,
                    updatePopoutPosition: r,
                    onReaction: () => {
                        i?.(), n(), l()
                    },
                    onUserPopoutClosed: () => l(),
                    disableGameProfileLinks: !0,
                    disableActivityProfileLinks: j
                })
            })
        },
        positionKey: `'content-entry-${t.id}`,
        onRequestOpen: () => {
            v?.()
        },
        children: e => (0, a.jsx)(c.DUT, {
            innerRef: b,
            ...e,
            className: p.GA,
            children: (0, a.jsx)(c.vN3, {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: 4,
                    right: 4
                },
                children: (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("img", {
                        className: p.my,
                        src: k,
                        alt: g.intl.formatToPlainString(g.t.IzVXxY, {
                            userName: S
                        })
                    }), (0, a.jsx)("div", {
                        className: p.Su,
                        children: (0, a.jsxs)("div", {
                            className: r()(_.fi, _.Kt),
                            children: [(0, a.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                lineClamp: 1,
                                children: S
                            }), (0, a.jsx)(f.mG, {
                                location: f.N5.APP_LAUNCHER,
                                children: h.n.map((e, n) => (0, a.jsx)(e, {
                                    entry: t
                                }, n))
                            })]
                        })
                    }), null != A ? A : (0, a.jsx)("div", {
                        className: p.Br,
                        children: (0, a.jsx)(c.W4J, {
                            size: "sm"
                        })
                    })]
                })
            })
        })
    })
}