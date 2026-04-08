/** chunk id: 613760 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    l = n(64700),
    s = n(172218),
    r = n(607399),
    a = n(417597),
    o = n(485724),
    d = n(529200),
    c = n(611010),
    u = n(967198),
    _ = n(954571),
    m = n(354138),
    h = n(212534),
    p = n(652215),
    g = n(985018),
    A = n(540452);

function x(e) {
    let {
        code: t,
        message: n
    } = e, [x, f, C] = (0, a.yK)([h.A], () => [h.A.getApplication(t), h.A.isInvalidApplication(t), h.A.getApplicationFetchState(t)], [t]), E = (0, a.bG)([u.A], () => u.A.getGuildId() ?? void 0), [I, v] = l.useState(!1), b = l.useCallback(e => {
        e && v(!0)
    }, []), T = (0, s.K)(b), y = l.useCallback(() => {
        _.default.track(p.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
            application_id: t,
            device_platform: r.Fr ? "mobile_web" : "desktop_web",
            sender_user_id: n.author.id,
            guild_id: E,
            channel_id: n.channel_id
        })
    }, [t, E, n.author.id, n.channel_id]);
    return (l.useEffect(() => {
        (0, m.eP)(t)
    }, [t]), l.useEffect(() => {
        I && C === h.e.FETCHED && y()
    }, [I, C, y]), l.useEffect(() => {
        I && f && _.default.track(p.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
            device_platform: r.Fr ? "mobile_web" : "desktop_web",
            sender_user_id: n.author.id,
            guild_id: E,
            channel_id: n.channel_id
        })
    }, [I, E, f, n.author.id, n.channel_id]), f) ? (0, i.jsxs)(d.A, {
        containerRef: T,
        children: [(0, i.jsx)(d.A.Header, {
            text: g.intl.string(g.t.j4KtLa)
        }), (0, i.jsx)(d.A.Body, {
            children: (0, i.jsxs)("div", {
                className: A.k,
                children: [(0, i.jsx)(d.A.Icon, {
                    expired: !0
                }), (0, i.jsx)(d.A.Info, {
                    expired: !0,
                    title: g.intl.string(g.t.NaQLEx),
                    children: g.intl.string(g.t["0H5OT2"])
                })]
            })
        })]
    }) : null == x || C === h.e.FETCHING ? (0, i.jsxs)(d.A, {
        containerRef: T,
        children: [(0, i.jsx)(d.A.Header, {
            text: g.intl.string(g.t.m9hXGR)
        }), (0, i.jsx)(d.A.Body, {
            resolving: !0
        })]
    }) : (0, i.jsx)(o.W, {
        app: c.Ay.createFromServer(x),
        linkType: o.J.APP_DISCOVERY,
        onView: y,
        message: n
    })
}