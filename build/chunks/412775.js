/** chunk id: 412775 params = (module,exports,require) **/
i.d(n, {
    A: () => C
});
var t = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    s = i(821269),
    r = i(437774),
    d = i(773669),
    o = i(967198),
    c = i(351906),
    u = i(183555),
    _ = i(346713),
    A = i(484509),
    p = i(389996),
    x = i(46937),
    g = i(361311),
    m = i(743987),
    I = i(900179),
    f = i(280645),
    b = i(928223),
    h = i(518477),
    v = i(985018),
    j = i(824860);

function C(e) {
    let {
        user: n,
        displayProfile: i,
        onClose: C
    } = e, {
        trackUserProfileAction: y
    } = (0, u.NJ)(), N = (0, a.bG)([o.A], () => o.A.getGuildId()), E = (0, s.q)({
        userId: n.id
    }), T = (0, a.bG)([c.A], () => c.A.hidePersonalInformation), L = (0, a.bG)([d.default], () => d.default.locale), P = (0, A.A)(n.id), O = (0, _.A)(n.id);
    return (0, t.jsxs)(l.IpV, {
        fade: !0,
        className: j.XG,
        children: [i?.bio != null && i?.bio !== "" && !T && (0, t.jsx)(p.A, {
            userBio: i.bio,
            setLineClamp: !1
        }), i?.guildId != null && (0, t.jsx)(f.A, {
            userId: n.id,
            guildId: i.guildId
        }), n.isProvisional && (0, t.jsx)(I.A, {
            heading: v.intl.string(v.t.Iyka0U),
            headingIcon: (0, t.jsx)(l.EpV, {
                size: "xxs",
                color: l.LU0.colors.TEXT_STRONG
            }),
            headingColor: "text-default",
            children: (0, t.jsx)(r.T, {
                userId: n.id
            })
        }), E.length > 0 && (0, t.jsx)(I.A, {
            heading: v.intl.string(v.t["Uv/eTx"]),
            children: (0, t.jsx)(g.A, {
                applicationIds: E
            })
        }), (0, t.jsx)(I.A, {
            heading: v.intl.string(v.t.a6XYD9),
            children: (0, t.jsx)(m.A, {
                userId: n.id,
                guildId: i?.guildId,
                tooltipDelay: h.In
            })
        }), P.length > 0 && (0, t.jsx)(I.A, {
            heading: v.intl.string(v.t["3fe7U5"]),
            scrollTargetId: h.bk.CONNECTIONS,
            children: (0, t.jsx)(x.Ay, {
                connectedAccounts: P,
                className: j.oQ,
                userId: n.id,
                locale: L
            })
        }), O.length > 0 && (0, t.jsx)(I.A, {
            heading: v.intl.string(v.t.PHjkRE),
            children: O.map(e => (0, t.jsx)(x.Wc, {
                className: j.MI,
                applicationRoleConnection: e,
                locale: L,
                onApplicationClicked: () => {
                    y({
                        action: "PRESS_APP_CONNECTION"
                    }), C()
                },
                selectedGuildId: N ?? void 0
            }, e.application.id))
        }), (0, t.jsx)(b.A, {
            userId: n.id
        })]
    })
}