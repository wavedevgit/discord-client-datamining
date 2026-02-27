/** chunk id: 412775, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => v
});
var i = t(627968);
t(64700);
var s = t(311907),
    l = t(397927),
    a = t(821269),
    r = t(437774),
    d = t(773669),
    c = t(967198),
    o = t(351906),
    u = t(183555),
    A = t(346713),
    x = t(484509),
    m = t(389996),
    _ = t(46937),
    p = t(361311),
    f = t(743987),
    h = t(900179),
    I = t(280645),
    j = t(928223),
    g = t(518477),
    b = t(985018),
    N = t(195723);

function v(e) {
    let {
        user: n,
        displayProfile: t,
        onClose: v
    } = e, {
        trackUserProfileAction: T
    } = (0, u.NJ)(), E = (0, s.bG)([c.A], () => c.A.getGuildId()), y = (0, a.q)({
        userId: n.id
    }), C = (0, s.bG)([o.A], () => o.A.hidePersonalInformation), L = (0, s.bG)([d.default], () => d.default.locale), S = (0, x.A)(n.id), O = (0, A.A)(n.id);
    return (0, i.jsxs)(l.IpV, {
        fade: !0,
        className: N.XG,
        children: [t?.bio != null && t?.bio !== "" && !C && (0, i.jsx)(m.A, {
            userBio: t.bio,
            setLineClamp: !1
        }), t?.guildId != null && (0, i.jsx)(I.A, {
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
        }), y.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t["Uv/eTx"]),
            children: (0, i.jsx)(p.A, {
                applicationIds: y
            })
        }), (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.a6XYD9),
            children: (0, i.jsx)(f.A, {
                userId: n.id,
                guildId: t?.guildId,
                tooltipDelay: g.In
            })
        }), S.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t["3fe7U5"]),
            scrollTargetId: g.bk.CONNECTIONS,
            children: (0, i.jsx)(_.Ay, {
                connectedAccounts: S,
                className: N.oQ,
                userId: n.id,
                locale: L
            })
        }), O.length > 0 && (0, i.jsx)(h.A, {
            heading: b.intl.string(b.t.PHjkRE),
            children: O.map(e => (0, i.jsx)(_.Wc, {
                className: N.MI,
                applicationRoleConnection: e,
                locale: L,
                onApplicationClicked: () => {
                    T({
                        action: "PRESS_APP_CONNECTION"
                    }), v()
                },
                selectedGuildId: E ?? void 0
            }, e.application.id))
        }), (0, i.jsx)(j.A, {
            userId: n.id
        })]
    })
}