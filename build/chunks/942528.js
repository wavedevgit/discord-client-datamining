/** chunk id: 942528 params = (module,exports,require) **/
n.d(t, {
    A: () => A
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
    f = n(322789),
    h = n(506326),
    g = n(985018),
    _ = n(505502),
    p = n(851822);
let A = e => {
    let {
        entry: t,
        onClose: n,
        onReaction: i,
        onRequestOpen: A,
        disableActivityProfileLinks: v,
        customCTA: j,
        popoutClassname: E,
        popoutPosition: I = "right"
    } = e, C = l.useRef(null), b = (0, s.bG)([d.A, o.A], () => o.A.getChannel(d.A.getChannelId())), N = (0, s.bG)([u.default], () => u.default.getUser(t.author_id)), {
        nick: T,
        avatar: S
    } = l.useMemo(() => {
        let e = N?.getAvatarURL(b?.guild_id, 48, !1);
        return {
            nick: m.Ay.getName(b?.guild_id, b?.id, N),
            avatar: e
        }
    }, [N, b]);
    return null == N ? null : (0, a.jsx)(c.YNO, {
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
                    disableActivityProfileLinks: v
                })
            })
        },
        positionKey: `'content-entry-${t.id}`,
        onRequestOpen: () => {
            A?.()
        },
        children: e => (0, a.jsx)(c.DUT, {
            innerRef: C,
            ...e,
            className: _.GA,
            children: (0, a.jsx)(c.vN3, {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: 4,
                    right: 4
                },
                children: (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("img", {
                        className: _.my,
                        src: S,
                        alt: g.intl.formatToPlainString(g.t.IzVXxY, {
                            userName: T
                        })
                    }), (0, a.jsx)("div", {
                        className: _.Su,
                        children: (0, a.jsxs)("div", {
                            className: r()(p.fi, p.Kt),
                            children: [(0, a.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                lineClamp: 1,
                                children: T
                            }), (0, a.jsx)(h.mG, {
                                location: h.N5.APP_LAUNCHER,
                                children: f.n.map((e, n) => (0, a.jsx)(e, {
                                    entry: t
                                }, n))
                            })]
                        })
                    }), null != j ? j : (0, a.jsx)("div", {
                        className: _.Br,
                        children: (0, a.jsx)(c.W4J, {
                            size: "sm"
                        })
                    })]
                })
            })
        })
    })
}