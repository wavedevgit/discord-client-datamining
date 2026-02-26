/** chunk id: 942528, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => v
});
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(311907),
    c = i(397927),
    o = i(734057),
    d = i(309010),
    u = i(287809),
    m = i(562153),
    x = i(420706),
    g = i(322789),
    h = i(506326),
    f = i(985018),
    j = i(183012),
    p = i(728528);
let v = e => {
    let {
        entry: t,
        onClose: i,
        onReaction: a,
        onRequestOpen: v,
        disableActivityProfileLinks: A,
        customCTA: _,
        popoutClassname: N,
        popoutPosition: E = "right"
    } = e, I = l.useRef(null), C = (0, r.bG)([d.A, o.A], () => o.A.getChannel(d.A.getChannelId())), S = (0, r.bG)([u.default], () => u.default.getUser(t.author_id)), {
        nick: b,
        avatar: T
    } = l.useMemo(() => {
        let e = S?.getAvatarURL(C?.guild_id, 48, !1);
        return {
            nick: m.Ay.getName(C?.guild_id, C?.id, S),
            avatar: e
        }
    }, [S, C]);
    return null == S ? null : (0, n.jsx)(c.YNO, {
        targetElementRef: I,
        position: E,
        renderPopout: e => {
            let {
                closePopout: l,
                updatePosition: s
            } = e;
            return (0, n.jsx)("div", {
                className: N,
                children: (0, n.jsx)(x.Oo, {
                    entry: t,
                    closePopout: l,
                    updatePopoutPosition: s,
                    onReaction: () => {
                        a?.(), i(), l()
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
        children: e => (0, n.jsx)(c.DUT, {
            innerRef: I,
            ...e,
            className: j.GA,
            children: (0, n.jsx)(c.vN3, {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: 4,
                    right: 4
                },
                children: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("img", {
                        className: j.my,
                        src: T,
                        alt: f.intl.formatToPlainString(f.t.IzVXxY, {
                            userName: b
                        })
                    }), (0, n.jsx)("div", {
                        className: j.Su,
                        children: (0, n.jsxs)("div", {
                            className: s()(p.fi, p.Kt),
                            children: [(0, n.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                lineClamp: 1,
                                children: b
                            }), (0, n.jsx)(h.mG, {
                                location: h.N5.APP_LAUNCHER,
                                children: g.n.map((e, i) => (0, n.jsx)(e, {
                                    entry: t
                                }, i))
                            })]
                        })
                    }), null != _ ? _ : (0, n.jsx)("div", {
                        className: j.Br,
                        children: (0, n.jsx)(c.W4J, {
                            size: "sm"
                        })
                    })]
                })
            })
        })
    })
}