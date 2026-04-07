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
    h = n(322789),
    f = n(506326),
    p = n(985018),
    g = n(504225),
    _ = n(282063);
let v = e => {
    let {
        entry: t,
        onClose: n,
        onReaction: i,
        onRequestOpen: v,
        disableActivityProfileLinks: A,
        customCTA: j,
        popoutClassname: E,
        popoutPosition: b = "right"
    } = e, C = l.useRef(null), I = (0, s.bG)([d.A, c.A], () => c.A.getChannel(d.A.getChannelId())), N = (0, s.bG)([u.default], () => u.default.getUser(t.author_id)), {
        nick: S,
        avatar: T
    } = l.useMemo(() => {
        let e = N?.getAvatarURL(I?.guild_id, 48, !1);
        return {
            nick: m.Ay.getName(I?.guild_id, I?.id, N),
            avatar: e
        }
    }, [N, I]);
    return null == N ? null : (0, a.jsx)(o.YNO, {
        targetElementRef: C,
        position: b,
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
            className: g.GA,
            children: (0, a.jsx)(o.vN3, {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: 4,
                    right: 4
                },
                children: (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("img", {
                        className: g.my,
                        src: T,
                        alt: p.intl.formatToPlainString(p.t.IzVXxY, {
                            userName: S
                        })
                    }), (0, a.jsx)("div", {
                        className: g.Su,
                        children: (0, a.jsxs)("div", {
                            className: r()(_.fi, _.Kt),
                            children: [(0, a.jsx)(o.Text, {
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
                    }), null != j ? j : (0, a.jsx)("div", {
                        className: g.Br,
                        children: (0, a.jsx)(o.W4J, {
                            size: "sm"
                        })
                    })]
                })
            })
        })
    })
}