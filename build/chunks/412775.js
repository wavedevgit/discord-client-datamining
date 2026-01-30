/** chunk id: 412775, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    s = n(821269),
    o = n(437774),
    a = n(773669),
    d = n(967198),
    c = n(351906),
    u = n(183555),
    p = n(346713),
    f = n(484509),
    m = n(389996),
    A = n(46937),
    x = n(361311),
    g = n(743987),
    j = n(900179),
    h = n(280645),
    b = n(928223),
    v = n(518477),
    I = n(985018),
    y = n(195723);

function _(e) {
    let {
        user: t,
        displayProfile: n,
        onClose: _
    } = e, {
        trackUserProfileAction: O
    } = (0, u.NJ)(), N = (0, i.bG)([d.A], () => d.A.getGuildId()), E = (0, s.q)({
        userId: t.id
    }), P = (0, i.bG)([c.A], () => c.A.hidePersonalInformation), T = (0, i.bG)([a.default], () => a.default.locale), C = (0, f.A)(t.id), S = (0, p.A)(t.id);
    return (0, l.jsxs)(r.IpV, {
        fade: !0,
        className: y.XG,
        children: [(null == n ? void 0 : n.bio) != null && (null == n ? void 0 : n.bio) !== "" && !P && (0, l.jsx)(m.A, {
            userBio: n.bio,
            setLineClamp: !1
        }), (null == n ? void 0 : n.guildId) != null && (0, l.jsx)(h.A, {
            userId: t.id,
            guildId: n.guildId
        }), t.isProvisional && (0, l.jsx)(j.A, {
            heading: I.intl.string(I.t.Iyka0U),
            headingIcon: (0, l.jsx)(r.EpV, {
                size: "xxs",
                color: r.LU0.colors.TEXT_STRONG
            }),
            headingColor: "text-default",
            children: (0, l.jsx)(o.T, {
                userId: t.id
            })
        }), E.length > 0 && (0, l.jsx)(j.A, {
            heading: I.intl.string(I.t["Uv/eTx"]),
            children: (0, l.jsx)(x.A, {
                applicationIds: E
            })
        }), (0, l.jsx)(j.A, {
            heading: I.intl.string(I.t.a6XYD9),
            children: (0, l.jsx)(g.A, {
                userId: t.id,
                guildId: null == n ? void 0 : n.guildId,
                tooltipDelay: v.In
            })
        }), C.length > 0 && (0, l.jsx)(j.A, {
            heading: I.intl.string(I.t["3fe7U5"]),
            scrollTargetId: v.bk.CONNECTIONS,
            children: (0, l.jsx)(A.Ay, {
                connectedAccounts: C,
                className: y.oQ,
                userId: t.id,
                locale: T
            })
        }), S.length > 0 && (0, l.jsx)(j.A, {
            heading: I.intl.string(I.t.PHjkRE),
            children: S.map(e => (0, l.jsx)(A.Wc, {
                className: y.MI,
                applicationRoleConnection: e,
                locale: T,
                onApplicationClicked: () => {
                    O({
                        action: "PRESS_APP_CONNECTION"
                    }), _()
                },
                selectedGuildId: null != N ? N : void 0
            }, e.application.id))
        }), (0, l.jsx)(b.A, {
            userId: t.id
        })]
    })
}