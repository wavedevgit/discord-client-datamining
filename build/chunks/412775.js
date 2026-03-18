/** chunk id: 412775 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968);
n(64700);
var s = n(311907),
    r = n(397927),
    a = n(821269),
    l = n(437774),
    o = n(773669),
    d = n(967198),
    c = n(351906),
    u = n(183555),
    _ = n(346713),
    A = n(484509),
    m = n(389996),
    x = n(46937),
    p = n(361311),
    f = n(743987),
    h = n(900179),
    g = n(280645),
    I = n(928223),
    j = n(518477),
    b = n(985018),
    v = n(195723);

function C(e) {
    let {
        user: t,
        displayProfile: n,
        onClose: C
    } = e, {
        trackUserProfileAction: N
    } = (0, u.NJ)(), y = (0, s.bG)([d.A], () => d.A.getGuildId()), E = (0, a.q)({
        userId: t.id
    }), T = (0, s.bG)([c.A], () => c.A.hidePersonalInformation), L = (0, s.bG)([o.default], () => o.default.locale), P = (0, A.A)(t.id), O = (0, _.A)(t.id);
    return (0, i.jsxs)(r.IpV, {
        fade: !0,
        className: v.XG,
        children: [n?.bio != null && n?.bio !== "" && !T && (0, i.jsx)(m.A, {
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
            children: (0, i.jsx)(l.T, {
                userId: t.id
            })
        }), E.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t["Uv/eTx"]),
            children: (0, i.jsx)(p.A, {
                applicationIds: E
            })
        }), (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.a6XYD9),
            children: (0, i.jsx)(f.A, {
                userId: t.id,
                guildId: n?.guildId,
                tooltipDelay: j.In
            })
        }), P.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t["3fe7U5"]),
            scrollTargetId: j.bk.CONNECTIONS,
            children: (0, i.jsx)(x.Ay, {
                connectedAccounts: P,
                className: v.oQ,
                userId: t.id,
                locale: L
            })
        }), O.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.PHjkRE),
            children: O.map(e => (0, i.jsx)(x.Wc, {
                className: v.MI,
                applicationRoleConnection: e,
                locale: L,
                onApplicationClicked: () => {
                    N({
                        action: "PRESS_APP_CONNECTION"
                    }), C()
                },
                selectedGuildId: y ?? void 0
            }, e.application.id))
        }), (0, i.jsx)(I.A, {
            userId: t.id
        })]
    })
}