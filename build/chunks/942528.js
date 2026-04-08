/** chunk id: 942528 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(734057),
    d = n(309010),
    u = n(287809),
    m = n(562153),
    x = n(420706),
    g = n(322789),
    h = n(506326),
    f = n(985018),
    p = n(504225),
    _ = n(282063);
let v = e => {
    let {
        entry: t,
        onClose: n,
        onReaction: l,
        onRequestOpen: v,
        disableActivityProfileLinks: A,
        customCTA: j,
        popoutClassname: E,
        popoutPosition: b = "right"
    } = e, I = i.useRef(null), C = (0, s.bG)([d.A, c.A], () => c.A.getChannel(d.A.getChannelId())), N = (0, s.bG)([u.default], () => u.default.getUser(t.author_id)), {
        nick: S,
        avatar: T
    } = i.useMemo(() => {
        let e = N?.getAvatarURL(C?.guild_id, 48, !1);
        return {
            nick: m.Ay.getName(C?.guild_id, C?.id, N),
            avatar: e
        }
    }, [N, C]);
    return null == N ? null : (0, a.jsx)(o.YNO, {
        targetElementRef: I,
        position: b,
        renderPopout: e => {
            let {
                closePopout: i,
                updatePosition: r
            } = e;
            return (0, a.jsx)("div", {
                className: E,
                children: (0, a.jsx)(x.Oo, {
                    entry: t,
                    closePopout: i,
                    updatePopoutPosition: r,
                    onReaction: () => {
                        l?.(), n(), i()
                    },
                    onUserPopoutClosed: () => i(),
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
            innerRef: I,
            ...e,
            className: p.GA,
            children: (0, a.jsx)(o.vN3, {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: 4,
                    right: 4
                },
                children: (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("img", {
                        className: p.my,
                        src: T,
                        alt: f.intl.formatToPlainString(f.t.IzVXxY, {
                            userName: S
                        })
                    }), (0, a.jsx)("div", {
                        className: p.Su,
                        children: (0, a.jsxs)("div", {
                            className: r()(_.fi, _.Kt),
                            children: [(0, a.jsx)(o.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                lineClamp: 1,
                                children: S
                            }), (0, a.jsx)(h.mG, {
                                location: h.N5.APP_LAUNCHER,
                                children: g.n.map((e, n) => (0, a.jsx)(e, {
                                    entry: t
                                }, n))
                            })]
                        })
                    }), null != j ? j : (0, a.jsx)("div", {
                        className: p.Br,
                        children: (0, a.jsx)(o.W4J, {
                            size: "sm"
                        })
                    })]
                })
            })
        })
    })
}