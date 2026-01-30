/** chunk id: 119593, original params: e,n,l (module,exports,require) **/
l.d(n, {
    A: () => I
});
var t = l(627968),
    r = l(64700),
    a = l(417597),
    i = l(397927),
    s = l(843472),
    c = l(256265),
    o = l(90084),
    d = l(42780),
    u = l(138298),
    m = l(734057),
    h = l(320501),
    f = l(576705),
    g = l(486020),
    x = l(225142),
    b = l(639245),
    j = l(652215),
    p = l(985018),
    A = l(159453);
let _ = r.memo(function(e) {
        let {
            guild: n
        } = e, {
            guildProfile: l,
            fetchGuildProfile: a
        } = (0, o.u)(n.id);
        return (r.useEffect(() => {
            a()
        }, [a]), null == l) ? null : (0, t.jsx)(d.Ay, {
            profile: l,
            disableCTA: !0,
            disableGuildNameClick: !0
        })
    }),
    v = e => {
        let n, {
                channelId: l,
                title: o,
                icon: d
            } = e,
            b = (0, a.bG)([m.A], () => m.A.getChannel(l)),
            p = (0, a.bG)([h.A], () => h.A.getMessages(l)),
            _ = (0, a.bG)([f.A], () => f.A.can(j.xBc.VIEW_CHANNEL, b)),
            v = p.first(),
            y = (0, c.yC)(v, !1),
            I = (null == y ? void 0 : y.length) > 0 ? y[0] : null,
            N = null != b && null == v && !p.loadingMore && !p.ready && !p.hasFetched && _;
        return r.useEffect(() => {
            N && s.A.fetchMessages({
                channelId: l,
                after: l,
                limit: 5
            })
        }, [l, N]), (0, t.jsx)(i.DUT, {
            className: A.Km,
            onClick: e => {
                null != b && (e.shiftKey ? (0, x.bN)(b.guild_id, b.id) : u.A.openResourceChannelAsSidebar({
                    guildId: b.guild_id,
                    channelId: b.id
                }))
            },
            children: (0, t.jsxs)(t.Fragment, {
                children: [(n = g.Ay.getResourceChannelIconURL({
                    channelId: l,
                    icon: d
                }), null != d && null != n ? (0, t.jsx)("img", {
                    src: n,
                    className: A.Oz,
                    alt: "",
                    "aria-hidden": !0
                }) : null != I ? (0, t.jsx)("img", {
                    className: A.Oz,
                    src: I.src,
                    alt: I.alt
                }) : (0, t.jsx)("div", {
                    className: A.jM,
                    children: (0, t.jsx)(i.ueQ, {
                        size: "xs",
                        color: "currentColor"
                    })
                })), (0, t.jsx)(i.Text, {
                    className: A.T2,
                    variant: "text-sm/semibold",
                    color: "none",
                    children: o
                })]
            })
        }, l)
    },
    y = r.memo(function(e) {
        let {
            guild: n
        } = e, l = (0, b.A)(n.id);
        return 0 === l.length ? null : (0, t.jsx)(i.ZpM, {
            className: A.u2,
            children: (0, t.jsxs)("div", {
                className: A.Ln,
                children: [(0, t.jsx)(i.Heading, {
                    className: A.cx,
                    variant: "heading-md/bold",
                    color: "text-strong",
                    children: p.intl.string(p.t.xwY4La)
                }), (0, t.jsx)("div", {
                    className: A.Tb,
                    children: l.map(e => (0, t.jsx)(v, {
                        channelId: e.channelId,
                        title: e.title,
                        icon: e.icon
                    }, "widget-resource-".concat(e.channelId)))
                })]
            })
        })
    }),
    I = r.memo(function(e) {
        let {
            guild: n,
            isNewMember: l
        } = e;
        return (0, t.jsxs)("aside", {
            className: A.pz,
            children: [(0, t.jsx)(_, {
                guild: n
            }), l && (0, t.jsx)(y, {
                guild: n
            })]
        })
    })