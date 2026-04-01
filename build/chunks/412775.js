/** chunk id: 412775 params = (module,exports,require) **/
t.d(n, {
    A: () => C
});
var i = t(627968);
t(64700);
var s = t(311907),
    a = t(397927),
    l = t(821269),
    r = t(437774),
    o = t(773669),
    d = t(967198),
    c = t(351906),
    u = t(183555),
    _ = t(346713),
    A = t(484509),
    x = t(389996),
    p = t(46937),
    m = t(361311),
    g = t(743987),
    I = t(900179),
    f = t(280645),
    h = t(928223),
    b = t(518477),
    j = t(985018),
    v = t(824860);

function C(e) {
    let {
        user: n,
        displayProfile: t,
        onClose: C
    } = e, {
        trackUserProfileAction: N
    } = (0, u.NJ)(), E = (0, s.bG)([d.A], () => d.A.getGuildId()), y = (0, l.q)({
        userId: n.id
    }), T = (0, s.bG)([c.A], () => c.A.hidePersonalInformation), L = (0, s.bG)([o.default], () => o.default.locale), O = (0, A.A)(n.id), P = (0, _.A)(n.id);
    return (0, i.jsxs)(a.IpV, {
        fade: !0,
        className: v.XG,
        children: [t?.bio != null && t?.bio !== "" && !T && (0, i.jsx)(x.A, {
            userBio: t.bio,
            setLineClamp: !1
        }), t?.guildId != null && (0, i.jsx)(f.A, {
            userId: n.id,
            guildId: t.guildId
        }), n.isProvisional && (0, i.jsx)(I.A, {
            heading: j.intl.string(j.t.Iyka0U),
            headingIcon: (0, i.jsx)(a.EpV, {
                size: "xxs",
                color: a.LU0.colors.TEXT_STRONG
            }),
            headingColor: "text-default",
            children: (0, i.jsx)(r.T, {
                userId: n.id
            })
        }), y.length > 0 && (0, i.jsx)(I.A, {
            heading: j.intl.string(j.t["Uv/eTx"]),
            children: (0, i.jsx)(m.A, {
                applicationIds: y
            })
        }), (0, i.jsx)(I.A, {
            heading: j.intl.string(j.t.a6XYD9),
            children: (0, i.jsx)(g.A, {
                userId: n.id,
                guildId: t?.guildId,
                tooltipDelay: b.In
            })
        }), O.length > 0 && (0, i.jsx)(I.A, {
            heading: j.intl.string(j.t["3fe7U5"]),
            scrollTargetId: b.bk.CONNECTIONS,
            children: (0, i.jsx)(p.Ay, {
                connectedAccounts: O,
                className: v.oQ,
                userId: n.id,
                locale: L
            })
        }), P.length > 0 && (0, i.jsx)(I.A, {
            heading: j.intl.string(j.t.PHjkRE),
            children: P.map(e => (0, i.jsx)(p.Wc, {
                className: v.MI,
                applicationRoleConnection: e,
                locale: L,
                onApplicationClicked: () => {
                    N({
                        action: "PRESS_APP_CONNECTION"
                    }), C()
                },
                selectedGuildId: E ?? void 0
            }, e.application.id))
        }), (0, i.jsx)(h.A, {
            userId: n.id
        })]
    })
}