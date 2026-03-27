/** chunk id: 697865 params = (module,exports,require) **/
n.d(t, {
    A: () => L
});
var r = n(627968),
    i = n(503698),
    l = n.n(i),
    s = n(158954),
    o = n(311907),
    a = n(421380),
    u = n(397927),
    d = n(730134),
    c = n(775602),
    p = n(509536),
    _ = n(721923),
    m = n(29086),
    f = n(854627),
    A = n(696451),
    g = n(317525),
    x = n(71393),
    v = n(287809),
    h = n(562153),
    E = n(837921),
    b = n(953382),
    I = n(652215),
    j = n(333354),
    S = n(985018),
    C = n(509754),
    w = n(445826);
let y = E.Ay.getEnableHardwareAcceleration() ? u.JsQ : d.A;

function L(e) {
    let {
        guildId: t,
        showVideoCard: n = !1
    } = e, i = (0, o.bG)([x.A], () => x.A.getGuild(t)), d = (0, o.bG)([g.A], () => g.A.getSortedRoles(t).find(e => e.tags?.premium_subscriber === null)), E = (0, o.bG)([v.default], () => v.default.getCurrentUser()), L = E?.id, k = (0, o.bG)([A.Ay], () => null != L ? A.Ay.getMember(t, L) : void 0, [L, t]), N = k?.premiumSince != null, R = (0, b.q)("GuildPowerupsBoostInfoContainerMember"), T = (0, o.bG)([c.A], () => c.A.useReducedMotion), {
        avatarDecorationSrc: P,
        avatarSrc: O,
        eventHandlers: G
    } = (0, f.A)({
        userId: E?.id,
        guildId: t,
        size: u._3J.SIZE_40,
        animateOnHover: !T
    });
    if (null == i || null == k || null == E) return null;
    let D = n ? "div" : u.hLv;
    return (0, r.jsxs)(D, {
        className: n ? C.ft : C.fx,
        children: [!n && (0, r.jsx)("img", {
            alt: "",
            className: C.Sl,
            src: w
        }), (0, r.jsxs)("div", {
            className: C.FS,
            children: [(0, r.jsx)(s.EYj, {
                variant: "text-md/semibold",
                children: S.intl.string(N ? j.default.KSWK1U : j.default.XXXX5l)
            }), (0, r.jsx)(s.EYj, {
                variant: "text-sm/medium",
                children: S.intl.format(N ? j.default["7fWTg4"] : j.default["7PXeeQ"], {
                    onClick: () => {
                        (0, p.K4)({
                            guildId: t,
                            location: {
                                section: I.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                object: I.ZSU.LEARN_MORE
                            }
                        })
                    }
                })
            })]
        }), null != d && !N && (0, r.jsx)(m.V, {
            avatar: (0, r.jsx)(y, {
                ...G,
                user: E,
                src: O,
                avatarDecoration: P,
                size: u._3J.SIZE_40,
                "aria-hidden": !0,
                animate: !0
            }),
            username: (0, r.jsx)(u.gyj, {
                variant: "text-md/semibold",
                name: h.Ay.getName(t, null, E),
                colorString: d.colorString,
                colorStrings: d.colorStrings
            }),
            className: l()(C.Qs, C.cX),
            message: S.intl.string(S.t["6OSasb"]),
            decorations: (0, r.jsx)(u._Jp, {
                color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: C.$J
            })
        }), (0, r.jsx)(_.A, {
            guild: i,
            className: C.Qs,
            analyticsLocation: {
                page: I.liQ.GUILD_POWERUPS_OVERVIEW,
                section: I.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR
            },
            color: a.XD.BRAND,
            size: a.lO.MEDIUM,
            fullWidth: !0,
            useExpressiveButton: R,
            icon: (0, r.jsx)(u._Jp, {
                color: "currentColor",
                size: "sm"
            })
        })]
    })
}