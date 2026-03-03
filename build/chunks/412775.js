/** chunk id: 412775, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(821269),
    r = n(437774),
    d = n(773669),
    o = n(967198),
    c = n(351906),
    u = n(183555),
    A = n(346713),
    _ = n(484509),
    x = n(389996),
    p = n(46937),
    m = n(361311),
    f = n(743987),
    h = n(900179),
    I = n(280645),
    g = n(928223),
    j = n(518477),
    b = n(985018),
    N = n(195723);

function C(e) {
    let {
        user: t,
        displayProfile: n,
        onClose: C
    } = e, {
        trackUserProfileAction: E
    } = (0, u.NJ)(), v = (0, s.bG)([o.A], () => o.A.getGuildId()), T = (0, a.q)({
        userId: t.id
    }), y = (0, s.bG)([c.A], () => c.A.hidePersonalInformation), L = (0, s.bG)([d.default], () => d.default.locale), O = (0, _.A)(t.id), S = (0, A.A)(t.id);
    return (0, i.jsxs)(l.IpV, {
        fade: !0,
        className: N.XG,
        children: [n?.bio != null && n?.bio !== "" && !y && (0, i.jsx)(x.A, {
            userBio: n.bio,
            setLineClamp: !1
        }), n?.guildId != null && (0, i.jsx)(I.A, {
            userId: t.id,
            guildId: n.guildId
        }), t.isProvisional && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.Iyka0U),
            headingIcon: (0, i.jsx)(l.EpV, {
                size: "xxs",
                color: l.LU0.colors.TEXT_STRONG
            }),
            headingColor: "text-default",
            children: (0, i.jsx)(r.T, {
                userId: t.id
            })
        }), T.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t["Uv/eTx"]),
            children: (0, i.jsx)(m.A, {
                applicationIds: T
            })
        }), (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.a6XYD9),
            children: (0, i.jsx)(f.A, {
                userId: t.id,
                guildId: n?.guildId,
                tooltipDelay: j.In
            })
        }), O.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t["3fe7U5"]),
            scrollTargetId: j.bk.CONNECTIONS,
            children: (0, i.jsx)(p.Ay, {
                connectedAccounts: O,
                className: N.oQ,
                userId: t.id,
                locale: L
            })
        }), S.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.PHjkRE),
            children: S.map(e => (0, i.jsx)(p.Wc, {
                className: N.MI,
                applicationRoleConnection: e,
                locale: L,
                onApplicationClicked: () => {
                    E({
                        action: "PRESS_APP_CONNECTION"
                    }), C()
                },
                selectedGuildId: v ?? void 0
            }, e.application.id))
        }), (0, i.jsx)(g.A, {
            userId: t.id
        })]
    })
}