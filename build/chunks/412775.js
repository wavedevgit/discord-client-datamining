/** chunk id: 412775 params = (module,exports,require) **/
t.d(n, {
    A: () => C
});
var i = t(627968);
t(64700);
var l = t(311907),
    a = t(397927),
    s = t(821269),
    r = t(437774),
    d = t(773669),
    o = t(967198),
    c = t(351906),
    u = t(183555),
    A = t(346713),
    _ = t(484509),
    p = t(389996),
    x = t(46937),
    g = t(361311),
    m = t(743987),
    I = t(900179),
    f = t(280645),
    b = t(928223),
    h = t(518477),
    j = t(985018),
    v = t(824860);

function C(e) {
    let {
        user: n,
        displayProfile: t,
        onClose: C
    } = e, {
        trackUserProfileAction: N
    } = (0, u.NJ)(), y = (0, l.bG)([o.A], () => o.A.getGuildId()), E = (0, s.q)({
        userId: n.id
    }), T = (0, l.bG)([c.A], () => c.A.hidePersonalInformation), L = (0, l.bG)([d.default], () => d.default.locale), O = (0, _.A)(n.id), S = (0, A.A)(n.id);
    return (0, i.jsxs)(a.IpV, {
        fade: !0,
        className: v.XG,
        children: [t?.bio != null && t?.bio !== "" && !T && (0, i.jsx)(p.A, {
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
        }), E.length > 0 && (0, i.jsx)(I.A, {
            heading: j.intl.string(j.t["Uv/eTx"]),
            children: (0, i.jsx)(g.A, {
                applicationIds: E
            })
        }), (0, i.jsx)(I.A, {
            heading: j.intl.string(j.t.a6XYD9),
            children: (0, i.jsx)(m.A, {
                userId: n.id,
                guildId: t?.guildId,
                tooltipDelay: h.In
            })
        }), O.length > 0 && (0, i.jsx)(I.A, {
            heading: j.intl.string(j.t["3fe7U5"]),
            scrollTargetId: h.bk.CONNECTIONS,
            children: (0, i.jsx)(x.Ay, {
                connectedAccounts: O,
                className: v.oQ,
                userId: n.id,
                locale: L
            })
        }), S.length > 0 && (0, i.jsx)(I.A, {
            heading: j.intl.string(j.t.PHjkRE),
            children: S.map(e => (0, i.jsx)(x.Wc, {
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
        }), (0, i.jsx)(b.A, {
            userId: n.id
        })]
    })
}