/** chunk id: 412775 params = (module,exports,require) **/
t.d(n, {
    A: () => N
});
var i = t(627968);
t(64700);
var s = t(311907),
    l = t(397927),
    a = t(821269),
    r = t(437774),
    o = t(773669),
    d = t(967198),
    c = t(351906),
    u = t(183555),
    m = t(346713),
    A = t(484509),
    x = t(389996),
    p = t(46937),
    _ = t(361311),
    f = t(743987),
    h = t(900179),
    j = t(280645),
    g = t(928223),
    I = t(518477),
    b = t(985018),
    v = t(195723);

function N(e) {
    let {
        user: n,
        displayProfile: t,
        onClose: N
    } = e, {
        trackUserProfileAction: y
    } = (0, u.NJ)(), C = (0, s.bG)([d.A], () => d.A.getGuildId()), T = (0, a.q)({
        userId: n.id
    }), E = (0, s.bG)([c.A], () => c.A.hidePersonalInformation), L = (0, s.bG)([o.default], () => o.default.locale), P = (0, A.A)(n.id), R = (0, m.A)(n.id);
    return (0, i.jsxs)(l.IpV, {
        fade: !0,
        className: v.XG,
        children: [t?.bio != null && t?.bio !== "" && !E && (0, i.jsx)(x.A, {
            userBio: t.bio,
            setLineClamp: !1
        }), t?.guildId != null && (0, i.jsx)(j.A, {
            userId: n.id,
            guildId: t.guildId
        }), n.isProvisional && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.Iyka0U),
            headingIcon: (0, i.jsx)(l.EpV, {
                size: "xxs",
                color: l.LU0.colors.TEXT_STRONG
            }),
            headingColor: "text-default",
            children: (0, i.jsx)(r.T, {
                userId: n.id
            })
        }), T.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t["Uv/eTx"]),
            children: (0, i.jsx)(_.A, {
                applicationIds: T
            })
        }), (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.a6XYD9),
            children: (0, i.jsx)(f.A, {
                userId: n.id,
                guildId: t?.guildId,
                tooltipDelay: I.In
            })
        }), P.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t["3fe7U5"]),
            scrollTargetId: I.bk.CONNECTIONS,
            children: (0, i.jsx)(p.Ay, {
                connectedAccounts: P,
                className: v.oQ,
                userId: n.id,
                locale: L
            })
        }), R.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.PHjkRE),
            children: R.map(e => (0, i.jsx)(p.Wc, {
                className: v.MI,
                applicationRoleConnection: e,
                locale: L,
                onApplicationClicked: () => {
                    y({
                        action: "PRESS_APP_CONNECTION"
                    }), N()
                },
                selectedGuildId: C ?? void 0
            }, e.application.id))
        }), (0, i.jsx)(g.A, {
            userId: n.id
        })]
    })
}