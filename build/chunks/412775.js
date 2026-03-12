/** chunk id: 412775 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var i = n(627968);
n(64700);
var s = n(311907),
    r = n(397927),
    l = n(821269),
    a = n(437774),
    d = n(773669),
    o = n(967198),
    c = n(351906),
    u = n(183555),
    A = n(346713),
    m = n(484509),
    x = n(389996),
    f = n(46937),
    p = n(361311),
    _ = n(743987),
    h = n(900179),
    g = n(280645),
    I = n(928223),
    j = n(518477),
    b = n(985018),
    v = n(199385);

function N(e) {
    let {
        user: t,
        displayProfile: n,
        onClose: N
    } = e, {
        trackUserProfileAction: C
    } = (0, u.NJ)(), y = (0, s.bG)([o.A], () => o.A.getGuildId()), E = (0, l.q)({
        userId: t.id
    }), T = (0, s.bG)([c.A], () => c.A.hidePersonalInformation), L = (0, s.bG)([d.default], () => d.default.locale), O = (0, m.A)(t.id), R = (0, A.A)(t.id);
    return (0, i.jsxs)(r.IpV, {
        fade: !0,
        className: v.XG,
        children: [n?.bio != null && n?.bio !== "" && !T && (0, i.jsx)(x.A, {
            userBio: n.bio,
            setLineClamp: !1
        }), n?.guildId != null && (0, i.jsx)(g.A, {
            userId: t.id,
            guildId: n.guildId
        }), t.isProvisional && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.Iyka0U),
            headingIcon: (0, i.jsx)(r.EpV, {
                size: "xxs",
                color: r.LU0.colors.TEXT_STRONG
            }),
            headingColor: "text-default",
            children: (0, i.jsx)(a.T, {
                userId: t.id
            })
        }), E.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t["Uv/eTx"]),
            children: (0, i.jsx)(p.A, {
                applicationIds: E
            })
        }), (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.a6XYD9),
            children: (0, i.jsx)(_.A, {
                userId: t.id,
                guildId: n?.guildId,
                tooltipDelay: j.In
            })
        }), O.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t["3fe7U5"]),
            scrollTargetId: j.bk.CONNECTIONS,
            children: (0, i.jsx)(f.Ay, {
                connectedAccounts: O,
                className: v.oQ,
                userId: t.id,
                locale: L
            })
        }), R.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.PHjkRE),
            children: R.map(e => (0, i.jsx)(f.Wc, {
                className: v.MI,
                applicationRoleConnection: e,
                locale: L,
                onApplicationClicked: () => {
                    C({
                        action: "PRESS_APP_CONNECTION"
                    }), N()
                },
                selectedGuildId: y ?? void 0
            }, e.application.id))
        }), (0, i.jsx)(I.A, {
            userId: t.id
        })]
    })
}