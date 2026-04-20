/** chunk id: 803585 params = (module,exports,require) **/
let i, l;
n.d(t, {
    A: () => v
});
var s = n(627968),
    a = n(64700),
    r = n(421380),
    o = n(397927),
    c = n(846293),
    d = n(198982),
    u = n(235986),
    m = n(976860),
    p = n(4274),
    x = n(652215),
    g = n(985018),
    h = n(250310),
    C = n(906471),
    N = n(168482);
let S = "hTKzmak",
    j = (i = window.GLOBAL_ENV.INVITE_HOST, l = "", null == i && (i = location.host, l = x.BVt.INVITE("")), `${location.protocol}//${i}${l}/`),
    A = [S, `${j}${S}`, `${j}wumpus-friends`],
    b = e => {
        let {
            onClick: t
        } = e;
        return (0, s.jsxs)(o.DUT, {
            className: h.qd,
            onClick: () => {
                t(), (0, m.pX)(x.BVt.GUILD_DISCOVERY)
            },
            children: [(0, s.jsx)("img", {
                width: 40,
                height: 40,
                className: h.aL,
                alt: "",
                src: N
            }), (0, s.jsxs)("div", {
                children: [(0, s.jsx)(o.Heading, {
                    className: h.qg,
                    variant: "heading-md/semibold",
                    children: g.intl.string(g.t.DwDxDU)
                }), (0, s.jsx)(o.Text, {
                    className: h.qg,
                    variant: "text-xs/normal",
                    children: g.intl.string(g.t["5RL4CD"])
                })]
            }), (0, s.jsx)("img", {
                className: h.y8,
                alt: "",
                src: C
            })]
        })
    };

function v(e) {
    let {
        onBack: t,
        onClose: n,
        isSlideReady: i
    } = e, [l, m] = a.useState(""), [x, C] = a.useState(!1), [N, v] = a.useState(null), I = a.useRef(null);
    a.useEffect(() => {
        i && I.current?.focus()
    }, [i]);
    let T = e => {
        e.preventDefault();
        let t = l.trim();
        if ("" === t) return void v(g.intl.string(g.t.IRq5ah));
        v(null), C(!0);
        let i = t.split("/"),
            s = i[i.length - 1];
        c.Ay.resolveInvite(s, "Join Guild", {
            inputValue: t
        }).then(e => {
            let {
                invite: t
            } = e;
            if (C(!1), null == t) return void v(g.intl.string(g.t["GEYI+Z"]));
            if (null != t.channel) {
                let e = c.Ay.getInviteContext("Join Guild", t);
                c.Ay.acceptInvite({
                    inviteKey: t.code,
                    context: e,
                    callback: e => {
                        n(), c.Ay.transitionToInvite(e)
                    }
                }).then(() => {}, e => {
                    e instanceof d.Wl || e instanceof d.LG ? v((0, p.s)(e.code)) : v(g.intl.string(g.t.dDZRdy))
                })
            }
        }, e => {
            C(!1);
            let t = new d.Wl(e);
            v((0, p.s)(t.code))
        })
    };
    return (0, s.jsxs)("div", {
        children: [(0, s.jsxs)(o.rQ0, {
            "data-migration-pending": !0,
            className: h.wx,
            direction: u.A.Direction.VERTICAL,
            separator: !1,
            children: [(0, s.jsx)(o.Heading, {
                className: h.DD,
                variant: "heading-xl/semibold",
                children: g.intl.string(g.t.riOUtB)
            }), (0, s.jsx)(o.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: g.intl.string(g.t["7jub2t"])
            }), (0, s.jsx)(o.s_y, {
                "data-migration-pending": !0,
                className: h.b,
                onClick: n
            })]
        }), (0, s.jsxs)(o.$mQ, {
            "data-migration-pending": !0,
            className: h.__invalid_content,
            children: [(0, s.jsx)("form", {
                onSubmit: T,
                className: h.$j,
                children: (0, s.jsx)(o.ksK, {
                    label: g.intl.string(g.t.qreV25),
                    required: !0,
                    error: N,
                    value: l,
                    onChange: m,
                    placeholder: `${j}${S}`,
                    inputRef: I
                })
            }), (0, s.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: g.intl.string(g.t.Bnq46H)
            }), (0, s.jsx)("div", {
                className: h.eU,
                children: A.map(e => (0, s.jsx)(o.DUT, {
                    className: h.Bb,
                    onClick: () => m(e),
                    children: e
                }, e))
            }), (0, s.jsx)(b, {
                onClick: n
            })]
        }), (0, s.jsxs)(o.jlY, {
            "data-migration-pending": !0,
            className: h.qr,
            children: [(0, s.jsx)(o.Button, {
                variant: "primary",
                text: g.intl.string(g.t["Ts/9Ac"]),
                loading: x,
                onClick: T
            }), (0, s.jsx)(r.$n, {
                "data-migration-pending": !0,
                color: r.$n.Colors.PRIMARY,
                look: r.$n.Looks.LINK,
                size: r.$n.Sizes.MIN,
                onClick: t,
                children: g.intl.string(g.t["13/7kX"])
            })]
        })]
    })
}