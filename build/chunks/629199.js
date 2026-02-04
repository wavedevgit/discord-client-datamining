/** chunk id: 629199, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(692617),
    a = n(397927),
    s = n(297413),
    o = n(775602),
    c = n(29160),
    u = n(854378),
    d = n(954921),
    p = n(278539),
    h = n(571694),
    f = n(994500),
    g = n(427262),
    m = n(837921),
    A = n(800583),
    _ = n(999068),
    b = n(122943),
    E = n(985018),
    O = n(518962);
let y = e => {
        let {
            userId: t
        } = e, n = (0, _.y)(t);
        return null == n || 0 === n.length ? (0, r.jsx)(a.Text, {
            className: O.tE,
            variant: "text-sm/normal",
            color: "text-muted",
            children: E.intl.string(E.t.jpY0X5)
        }) : (0, r.jsxs)("div", {
            className: O.I9,
            children: [(0, r.jsx)(l.A, {
                guilds: n,
                maxGuilds: 3,
                size: u.$v.Sizes.SMOL,
                hideOverflowCount: !0
            }), (0, r.jsx)(a.Text, {
                className: O.tE,
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.format(E.t.eE3oep, {
                    count: n.length
                })
            })]
        })
    },
    I = m.Ay.getEnableHardwareAcceleration() ? a.JsQ : a.euF;

function v(e) {
    var t;
    let {
        channel: n,
        otherUser: l,
        active: u
    } = e, m = (0, i.bG)([o.A], () => o.A.useReducedMotion), _ = (0, i.bG)([f.A], () => null == l ? null : f.A.getNickname(l.id)), v = !m && u, S = (0, A.j)(n), {
        avatarDecorationSrc: C
    } = (0, p.A)({
        user: l,
        size: (0, d.Te)(a._3J.SIZE_40),
        onlyAnimateOnHoverOrFocus: !0
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(I, {
            className: O.my,
            src: (0, h.Y)(n, 40, v),
            avatarDecoration: C,
            size: a._3J.SIZE_40,
            "aria-label": null != (t = null == l ? void 0 : l.username) ? t : E.intl.string(E.t["30mdIx"])
        }), (0, r.jsxs)("div", {
            className: O.yt,
            children: [(0, r.jsxs)("div", {
                className: O.rU,
                children: [(0, r.jsx)(s.A, {
                    nick: _,
                    user: l,
                    showAccountIdentifier: !0,
                    className: O.I8,
                    usernameClass: O.Xh,
                    discriminatorClass: null != g.Ay.getGlobalName(l) ? O.vl : O.D2
                }), (0, r.jsx)(a.Text, {
                    className: O.L7,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: S
                })]
            }), (0, r.jsx)(c.A, {
                hoverText: (0, r.jsx)(b.A, {
                    channel: n
                }),
                forceHover: u,
                children: (0, r.jsx)(y, {
                    userId: l.id
                })
            })]
        })]
    })
}