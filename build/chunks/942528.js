/** chunk id: 942528 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(734057),
    d = n(309010),
    u = n(287809),
    m = n(562153),
    f = n(420706),
    h = n(322789),
    x = n(506326),
    g = n(985018),
    p = n(478481),
    _ = n(141535);
let v = e => {
    let {
        entry: t,
        onClose: n,
        onReaction: i,
        onRequestOpen: v,
        disableActivityProfileLinks: A,
        customCTA: b,
        popoutClassname: E,
        popoutPosition: j = "right"
    } = e, I = a.useRef(null), C = (0, s.bG)([d.A, c.A], () => c.A.getChannel(d.A.getChannelId())), N = (0, s.bG)([u.default], () => u.default.getUser(t.author_id)), {
        nick: S,
        avatar: L
    } = a.useMemo(() => {
        let e = N?.getAvatarURL(C?.guild_id, 48, !1);
        return {
            nick: m.Ay.getName(C?.guild_id, C?.id, N),
            avatar: e
        }
    }, [N, C]);
    return null == N ? null : (0, l.jsx)(o.YNO, {
        targetElementRef: I,
        position: j,
        renderPopout: e => {
            let {
                closePopout: a,
                updatePosition: r
            } = e;
            return (0, l.jsx)("div", {
                className: E,
                children: (0, l.jsx)(f.Oo, {
                    entry: t,
                    closePopout: a,
                    updatePopoutPosition: r,
                    onReaction: () => {
                        i?.(), n(), a()
                    },
                    onUserPopoutClosed: () => a(),
                    disableGameProfileLinks: !0,
                    disableActivityProfileLinks: A
                })
            })
        },
        positionKey: `'content-entry-${t.id}`,
        onRequestOpen: () => {
            v?.()
        },
        children: e => (0, l.jsx)(o.DUT, {
            innerRef: I,
            ...e,
            className: p.GA,
            children: (0, l.jsx)(o.vN3, {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: 4,
                    right: 4
                },
                children: (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("img", {
                        className: p.my,
                        src: L,
                        alt: g.intl.formatToPlainString(g.t.IzVXxY, {
                            userName: S
                        })
                    }), (0, l.jsx)("div", {
                        className: p.Su,
                        children: (0, l.jsxs)("div", {
                            className: r()(_.fi, _.Kt),
                            children: [(0, l.jsx)(o.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                lineClamp: 1,
                                children: S
                            }), (0, l.jsx)(x.mG, {
                                location: x.N5.APP_LAUNCHER,
                                children: h.n.map((e, n) => (0, l.jsx)(e, {
                                    entry: t
                                }, n))
                            })]
                        })
                    }), null != b ? b : (0, l.jsx)("div", {
                        className: p.Br,
                        children: (0, l.jsx)(o.W4J, {
                            size: "sm"
                        })
                    })]
                })
            })
        })
    })
}