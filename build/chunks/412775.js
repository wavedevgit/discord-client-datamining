/** chunk id: 412775 params = (module,exports,require) **/
t.d(n, {
    A: () => j
});
var i = t(627968);
t(64700);
var a = t(311907),
    l = t(397927),
    r = t(821269),
    s = t(437774),
    d = t(773669),
    o = t(967198),
    c = t(351906),
    u = t(183555),
    _ = t(346713),
    p = t(484509),
    A = t(389996),
    g = t(46937),
    m = t(361311),
    I = t(743987),
    h = t(900179),
    f = t(280645),
    x = t(928223),
    v = t(518477),
    b = t(985018),
    E = t(47049);

function j(e) {
    let {
        user: n,
        displayProfile: t,
        onClose: j
    } = e, {
        trackUserProfileAction: y
    } = (0, u.NJ)(), T = (0, a.bG)([o.A], () => o.A.getGuildId()), N = (0, r.q)({
        userId: n.id
    }), S = (0, a.bG)([c.A], () => c.A.hidePersonalInformation), C = (0, a.bG)([d.default], () => d.default.locale), R = (0, p.A)(n.id), L = (0, _.A)(n.id);
    return (0, i.jsxs)(l.IpV, {
        fade: !0,
        className: E.XG,
        children: [t?.bio != null && t?.bio !== "" && !S && (0, i.jsx)(A.A, {
            userBio: t.bio,
            setLineClamp: !1
        }), t?.guildId != null && (0, i.jsx)(f.A, {
            userId: n.id,
            guildId: t.guildId
        }), n.isProvisional && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.Iyka0U),
            headingIcon: (0, i.jsx)(l.EpV, {
                size: "xxs",
                color: l.LU0.colors.TEXT_STRONG
            }),
            headingColor: "text-default",
            children: (0, i.jsx)(s.T, {
                userId: n.id
            })
        }), N.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t["Uv/eTx"]),
            children: (0, i.jsx)(m.A, {
                applicationIds: N
            })
        }), (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.a6XYD9),
            children: (0, i.jsx)(I.A, {
                userId: n.id,
                guildId: t?.guildId,
                tooltipDelay: v.In
            })
        }), R.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t["3fe7U5"]),
            scrollTargetId: v.bk.CONNECTIONS,
            children: (0, i.jsx)(g.Ay, {
                connectedAccounts: R,
                className: E.oQ,
                userId: n.id,
                locale: C
            })
        }), L.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.PHjkRE),
            children: L.map(e => (0, i.jsx)(g.Wc, {
                className: E.MI,
                applicationRoleConnection: e,
                locale: C,
                onApplicationClicked: () => {
                    y({
                        action: "PRESS_APP_CONNECTION"
                    }), j()
                },
                selectedGuildId: T ?? void 0
            }, e.application.id))
        }), (0, i.jsx)(x.A, {
            userId: n.id
        })]
    })
}