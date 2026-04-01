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
    g = n(506326),
    f = n(985018),
    _ = n(504225),
    p = n(282063);
let v = e => {
    let {
        entry: t,
        onClose: n,
        onReaction: i,
        onRequestOpen: v,
        disableActivityProfileLinks: A,
        customCTA: j,
        popoutClassname: E,
        popoutPosition: C = "right"
    } = e, I = l.useRef(null), N = (0, s.bG)([d.A, o.A], () => o.A.getChannel(d.A.getChannelId())), b = (0, s.bG)([u.default], () => u.default.getUser(t.author_id)), {
        nick: S,
        avatar: T
    } = l.useMemo(() => {
        let e = b?.getAvatarURL(N?.guild_id, 48, !1);
        return {
            nick: m.Ay.getName(N?.guild_id, N?.id, b),
            avatar: e
        }
    }, [b, N]);
    return null == b ? null : (0, a.jsx)(c.YNO, {
        targetElementRef: I,
        position: C,
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
        children: e => (0, a.jsx)(c.DUT, {
            innerRef: I,
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
                        src: T,
                        alt: f.intl.formatToPlainString(f.t.IzVXxY, {
                            userName: S
                        })
                    }), (0, a.jsx)("div", {
                        className: _.Su,
                        children: (0, a.jsxs)("div", {
                            className: r()(p.fi, p.Kt),
                            children: [(0, a.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                lineClamp: 1,
                                children: S
                            }), (0, a.jsx)(g.mG, {
                                location: g.N5.APP_LAUNCHER,
                                children: h.n.map((e, n) => (0, a.jsx)(e, {
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