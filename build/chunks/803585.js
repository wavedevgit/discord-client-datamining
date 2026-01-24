/** Chunk was on 52081 **/
/** chunk id: 803585, original params: e,t,n (module,exports,require) **/
let r, o;
n.d(t, {
    A: () => g
}), n(896048), n(733351), n(747238);
var l = n(627968),
    i = n(64700),
    a = n(421380),
    s = n(397927),
    c = n(846293),
    u = n(198982),
    d = n(235986),
    _ = n(976860),
    p = n(4274),
    f = n(652215),
    m = n(985018),
    S = n(516073),
    N = n(906471),
    I = n(168482);
let b = "hTKzmak",
    T = (r = window.GLOBAL_ENV.INVITE_HOST, o = "", null == r && (r = location.host, o = f.BVt.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(o, "/")),
    O = [b, "".concat(T).concat(b), "".concat(T).concat("wumpus-friends")],
    E = e => {
        let {
            onClick: t
        } = e;
        return (0, l.jsxs)(s.DUT, {
            className: S.qd,
            onClick: () => {
                t(), (0, _.pX)(f.BVt.GUILD_DISCOVERY)
            },
            children: [(0, l.jsx)("img", {
                width: 40,
                height: 40,
                className: S.aL,
                alt: "",
                src: I
            }), (0, l.jsxs)("div", {
                children: [(0, l.jsx)(s.Heading, {
                    className: S.qg,
                    variant: "heading-md/semibold",
                    children: m.intl.string(m.t.DwDxDU)
                }), (0, l.jsx)(s.Text, {
                    className: S.qg,
                    variant: "text-xs/normal",
                    children: m.intl.string(m.t["5RL4CD"])
                })]
            }), (0, l.jsx)("img", {
                className: S.y8,
                alt: "",
                src: N
            })]
        })
    };

function g(e) {
    let {
        onBack: t,
        onClose: n,
        isSlideReady: r
    } = e, [o, _] = i.useState(""), [f, N] = i.useState(!1), [I, g] = i.useState(null), A = i.useRef(null);
    i.useEffect(() => {
        var e;
        r && (null == (e = A.current) || e.focus())
    }, [r]);
    let C = e => {
        e.preventDefault();
        let t = o.trim();
        if ("" === t) return void g(m.intl.string(m.t.IRq5ah));
        g(null), N(!0);
        let r = t.split("/"),
            l = r[r.length - 1];
        c.Ay.resolveInvite(l, "Join Guild", {
            inputValue: t
        }).then(e => {
            let {
                invite: t
            } = e;
            if (N(!1), null == t) return void g(m.intl.string(m.t["GEYI+Z"]));
            if (null != t.channel) {
                let e = c.Ay.getInviteContext("Join Guild", t);
                c.Ay.acceptInvite({
                    inviteKey: t.code,
                    context: e,
                    callback: e => {
                        n(), c.Ay.transitionToInvite(e)
                    }
                }).then(() => {}, e => {
                    e instanceof u.Wl || e instanceof u.LG ? g((0, p.s)(e.code)) : g(m.intl.string(m.t.dDZRdy))
                })
            }
        }, e => {
            N(!1);
            let t = new u.Wl(e);
            g((0, p.s)(t.code))
        })
    };
    return (0, l.jsxs)("div", {
        children: [(0, l.jsxs)(s.rQ0, {
            "data-migration-pending": !0,
            className: S.wx,
            direction: d.A.Direction.VERTICAL,
            separator: !1,
            children: [(0, l.jsx)(s.Heading, {
                className: S.DD,
                variant: "heading-xl/semibold",
                children: m.intl.string(m.t.riOUtB)
            }), (0, l.jsx)(s.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: m.intl.string(m.t["7jub2t"])
            }), (0, l.jsx)(s.s_y, {
                "data-migration-pending": !0,
                className: S.b,
                onClick: n
            })]
        }), (0, l.jsxs)(s.$mQ, {
            "data-migration-pending": !0,
            className: S.__invalid_content,
            children: [(0, l.jsx)("form", {
                onSubmit: C,
                className: S.$j,
                children: (0, l.jsx)(s.ksK, {
                    label: m.intl.string(m.t.qreV25),
                    required: !0,
                    error: I,
                    value: o,
                    onChange: _,
                    placeholder: "".concat(T).concat(b),
                    inputRef: A
                })
            }), (0, l.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: m.intl.string(m.t.Bnq46H)
            }), (0, l.jsx)("div", {
                className: S.eU,
                children: O.map(e => (0, l.jsx)(s.DUT, {
                    className: S.Bb,
                    onClick: () => _(e),
                    children: e
                }, e))
            }), (0, l.jsx)(E, {
                onClick: n
            })]
        }), (0, l.jsxs)(s.jlY, {
            "data-migration-pending": !0,
            className: S.qr,
            children: [(0, l.jsx)(s.Button, {
                variant: "primary",
                text: m.intl.string(m.t["Ts/9Ac"]),
                loading: f,
                onClick: C
            }), (0, l.jsx)(a.$n, {
                "data-migration-pending": !0,
                color: a.$n.Colors.PRIMARY,
                look: a.$n.Looks.LINK,
                size: a.$n.Sizes.MIN,
                onClick: t,
                children: m.intl.string(m.t["13/7kX"])
            })]
        })]
    })
}