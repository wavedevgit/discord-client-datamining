/** chunk id: 613760, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(172218),
    a = n(607399),
    s = n(417597),
    o = n(485724),
    c = n(529200),
    u = n(611010),
    d = n(967198),
    p = n(954571),
    m = n(354138),
    f = n(212534),
    g = n(652215),
    _ = n(985018),
    h = n(616078);

function b(e) {
    let {
        code: t,
        message: n
    } = e, [b, y, A] = (0, s.yK)([f.A], () => [f.A.getApplication(t), f.A.isInvalidApplication(t), f.A.getApplicationFetchState(t)], [t]), v = (0, s.bG)([d.A], () => {
        var e;
        return null != (e = d.A.getGuildId()) ? e : void 0
    }), [O, x] = i.useState(!1), E = i.useCallback(e => {
        e && x(!0)
    }, []), j = (0, l.K)(E), C = i.useCallback(() => {
        p.default.track(g.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
            application_id: t,
            device_platform: a.Fr ? "mobile_web" : "desktop_web",
            sender_user_id: n.author.id,
            guild_id: v,
            channel_id: n.channel_id
        })
    }, [t, v, n.author.id, n.channel_id]);
    return (i.useEffect(() => {
        (0, m.eP)(t)
    }, [t]), i.useEffect(() => {
        O && A === f.e.FETCHED && C()
    }, [O, A, C]), i.useEffect(() => {
        O && y && p.default.track(g.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
            device_platform: a.Fr ? "mobile_web" : "desktop_web",
            sender_user_id: n.author.id,
            guild_id: v,
            channel_id: n.channel_id
        })
    }, [O, v, y, n.author.id, n.channel_id]), y) ? (0, r.jsxs)(c.A, {
        containerRef: j,
        children: [(0, r.jsx)(c.A.Header, {
            text: _.intl.string(_.t.j4KtLa)
        }), (0, r.jsx)(c.A.Body, {
            children: (0, r.jsxs)("div", {
                className: h.k,
                children: [(0, r.jsx)(c.A.Icon, {
                    expired: !0
                }), (0, r.jsx)(c.A.Info, {
                    expired: !0,
                    title: _.intl.string(_.t.NaQLEx),
                    children: _.intl.string(_.t["0H5OT2"])
                })]
            })
        })]
    }) : null == b || A === f.e.FETCHING ? (0, r.jsxs)(c.A, {
        containerRef: j,
        children: [(0, r.jsx)(c.A.Header, {
            text: _.intl.string(_.t.m9hXGR)
        }), (0, r.jsx)(c.A.Body, {
            resolving: !0
        })]
    }) : (0, r.jsx)(o.W, {
        app: u.Ay.createFromServer(b),
        linkType: o.J.APP_DISCOVERY,
        onView: C,
        message: n
    })
}