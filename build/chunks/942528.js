/** chunk id: 942528 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var l = n(627968),
    a = n(64700),
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
    p = n(183012),
    _ = n(728528);
let v = e => {
    let {
        entry: t,
        onClose: n,
        onReaction: i,
        onRequestOpen: v,
        disableActivityProfileLinks: j,
        customCTA: A,
        popoutClassname: I,
        popoutPosition: E = "right"
    } = e, N = a.useRef(null), b = (0, s.bG)([d.A, o.A], () => o.A.getChannel(d.A.getChannelId())), C = (0, s.bG)([u.default], () => u.default.getUser(t.author_id)), {
        nick: T,
        avatar: S
    } = a.useMemo(() => {
        let e = C?.getAvatarURL(b?.guild_id, 48, !1);
        return {
            nick: m.Ay.getName(b?.guild_id, b?.id, C),
            avatar: e
        }
    }, [C, b]);
    return null == C ? null : (0, l.jsx)(c.YNO, {
        targetElementRef: N,
        position: E,
        renderPopout: e => {
            let {
                closePopout: a,
                updatePosition: r
            } = e;
            return (0, l.jsx)("div", {
                className: I,
                children: (0, l.jsx)(x.Oo, {
                    entry: t,
                    closePopout: a,
                    updatePopoutPosition: r,
                    onReaction: () => {
                        i?.(), n(), a()
                    },
                    onUserPopoutClosed: () => a(),
                    disableGameProfileLinks: !0,
                    disableActivityProfileLinks: j
                })
            })
        },
        positionKey: `'content-entry-${t.id}`,
        onRequestOpen: () => {
            v?.()
        },
        children: e => (0, l.jsx)(c.DUT, {
            innerRef: N,
            ...e,
            className: p.GA,
            children: (0, l.jsx)(c.vN3, {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: 4,
                    right: 4
                },
                children: (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("img", {
                        className: p.my,
                        src: S,
                        alt: g.intl.formatToPlainString(g.t.IzVXxY, {
                            userName: T
                        })
                    }), (0, l.jsx)("div", {
                        className: p.Su,
                        children: (0, l.jsxs)("div", {
                            className: r()(_.fi, _.Kt),
                            children: [(0, l.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                lineClamp: 1,
                                children: T
                            }), (0, l.jsx)(f.mG, {
                                location: f.N5.APP_LAUNCHER,
                                children: h.n.map((e, n) => (0, l.jsx)(e, {
                                    entry: t
                                }, n))
                            })]
                        })
                    }), null != A ? A : (0, l.jsx)("div", {
                        className: p.Br,
                        children: (0, l.jsx)(c.W4J, {
                            size: "sm"
                        })
                    })]
                })
            })
        })
    })
}