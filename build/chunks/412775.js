/** chunk id: 412775, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(821269),
    a = n(437774),
    d = n(773669),
    o = n(967198),
    c = n(351906),
    u = n(183555),
    A = n(346713),
    x = n(484509),
    _ = n(389996),
    m = n(46937),
    p = n(361311),
    f = n(743987),
    h = n(900179),
    I = n(280645),
    g = n(928223),
    j = n(518477),
    b = n(985018),
    N = n(195723);

function v(e) {
    let {
        user: t,
        displayProfile: n,
        onClose: v
    } = e, {
        trackUserProfileAction: E
    } = (0, u.NJ)(), T = (0, s.bG)([o.A], () => o.A.getGuildId()), C = (0, r.q)({
        userId: t.id
    }), y = (0, s.bG)([c.A], () => c.A.hidePersonalInformation), L = (0, s.bG)([d.default], () => d.default.locale), S = (0, x.A)(t.id), O = (0, A.A)(t.id);
    return (0, i.jsxs)(l.IpV, {
        fade: !0,
        className: N.XG,
        children: [n?.bio != null && n?.bio !== "" && !y && (0, i.jsx)(_.A, {
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
            children: (0, i.jsx)(a.T, {
                userId: t.id
            })
        }), C.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t["Uv/eTx"]),
            children: (0, i.jsx)(p.A, {
                applicationIds: C
            })
        }), (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.a6XYD9),
            children: (0, i.jsx)(f.A, {
                userId: t.id,
                guildId: n?.guildId,
                tooltipDelay: j.In
            })
        }), S.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t["3fe7U5"]),
            scrollTargetId: j.bk.CONNECTIONS,
            children: (0, i.jsx)(m.Ay, {
                connectedAccounts: S,
                className: N.oQ,
                userId: t.id,
                locale: L
            })
        }), O.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.PHjkRE),
            children: O.map(e => (0, i.jsx)(m.Wc, {
                className: N.MI,
                applicationRoleConnection: e,
                locale: L,
                onApplicationClicked: () => {
                    E({
                        action: "PRESS_APP_CONNECTION"
                    }), v()
                },
                selectedGuildId: T ?? void 0
            }, e.application.id))
        }), (0, i.jsx)(g.A, {
            userId: t.id
        })]
    })
}