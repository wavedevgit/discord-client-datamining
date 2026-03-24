/** chunk id: 942528 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(734057),
    d = n(309010),
    u = n(287809),
    m = n(562153),
    x = n(420706),
    _ = n(322789),
    f = n(506326),
    g = n(985018),
    h = n(505502),
    p = n(851822);
let v = e => {
    let {
        entry: t,
        onClose: n,
        onReaction: i,
        onRequestOpen: v,
        disableActivityProfileLinks: A,
        customCTA: j,
        popoutClassname: E,
        popoutPosition: I = "right"
    } = e, C = l.useRef(null), N = (0, s.bG)([d.A, c.A], () => c.A.getChannel(d.A.getChannelId())), b = (0, s.bG)([u.default], () => u.default.getUser(t.author_id)), {
        nick: T,
        avatar: S
    } = l.useMemo(() => {
        let e = b?.getAvatarURL(N?.guild_id, 48, !1);
        return {
            nick: m.Ay.getName(N?.guild_id, N?.id, b),
            avatar: e
        }
    }, [b, N]);
    return null == b ? null : (0, a.jsx)(o.YNO, {
        targetElementRef: C,
        position: I,
        renderPopout: e => {
            let {
                closePopout: l,
                updatePosition: r
            } = e;
            return (0, a.jsx)("div", {
                className: E,
                children: (0, a.jsx)(x.Oo, {
                    entry: t,
                    closePopout: l,
                    updatePopoutPosition: r,
                    onReaction: () => {
                        i?.(), n(), l()
                    },
                    onUserPopoutClosed: () => l(),
                    disableGameProfileLinks: !0,
                    disableActivityProfileLinks: A
                })
            })
        },
        positionKey: `'content-entry-${t.id}`,
        onRequestOpen: () => {
            v?.()
        },
        children: e => (0, a.jsx)(o.DUT, {
            innerRef: C,
            ...e,
            className: h.GA,
            children: (0, a.jsx)(o.vN3, {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: 4,
                    right: 4
                },
                children: (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("img", {
                        className: h.my,
                        src: S,
                        alt: g.intl.formatToPlainString(g.t.IzVXxY, {
                            userName: T
                        })
                    }), (0, a.jsx)("div", {
                        className: h.Su,
                        children: (0, a.jsxs)("div", {
                            className: r()(p.fi, p.Kt),
                            children: [(0, a.jsx)(o.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                lineClamp: 1,
                                children: T
                            }), (0, a.jsx)(f.mG, {
                                location: f.N5.APP_LAUNCHER,
                                children: _.n.map((e, n) => (0, a.jsx)(e, {
                                    entry: t
                                }, n))
                            })]
                        })
                    }), null != j ? j : (0, a.jsx)("div", {
                        className: h.Br,
                        children: (0, a.jsx)(o.W4J, {
                            size: "sm"
                        })
                    })]
                })
            })
        })
    })
}