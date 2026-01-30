/** chunk id: 803585, original params: e,t,n (module,exports,require) **/
let r, l;
n.d(t, {
    A: () => O
}), n(896048), n(733351), n(747238);
var i = n(627968),
    o = n(64700),
    a = n(421380),
    s = n(397927),
    c = n(846293),
    u = n(198982),
    _ = n(235986),
    d = n(976860),
    p = n(4274),
    f = n(652215),
    m = n(985018),
    I = n(516073),
    S = n(906471),
    N = n(168482);
let E = "hTKzmak",
    T = (r = window.GLOBAL_ENV.INVITE_HOST, l = "", null == r && (r = location.host, l = f.BVt.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(l, "/")),
    A = [E, "".concat(T).concat(E), "".concat(T).concat("wumpus-friends")],
    g = e => {
        let {
            onClick: t
        } = e;
        return (0, i.jsxs)(s.DUT, {
            className: I.qd,
            onClick: () => {
                t(), (0, d.pX)(f.BVt.GUILD_DISCOVERY)
            },
            children: [(0, i.jsx)("img", {
                width: 40,
                height: 40,
                className: I.aL,
                alt: "",
                src: N
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)(s.Heading, {
                    className: I.qg,
                    variant: "heading-md/semibold",
                    children: m.intl.string(m.t.DwDxDU)
                }), (0, i.jsx)(s.Text, {
                    className: I.qg,
                    variant: "text-xs/normal",
                    children: m.intl.string(m.t["5RL4CD"])
                })]
            }), (0, i.jsx)("img", {
                className: I.y8,
                alt: "",
                src: S
            })]
        })
    };

function O(e) {
    let {
        onBack: t,
        onClose: n,
        isSlideReady: r
    } = e, [l, d] = o.useState(""), [f, S] = o.useState(!1), [N, O] = o.useState(null), D = o.useRef(null);
    o.useEffect(() => {
        var e;
        r && (null == (e = D.current) || e.focus())
    }, [r]);
    let C = e => {
        e.preventDefault();
        let t = l.trim();
        if ("" === t) return void O(m.intl.string(m.t.IRq5ah));
        O(null), S(!0);
        let r = t.split("/"),
            i = r[r.length - 1];
        c.Ay.resolveInvite(i, "Join Guild", {
            inputValue: t
        }).then(e => {
            let {
                invite: t
            } = e;
            if (S(!1), null == t) return void O(m.intl.string(m.t["GEYI+Z"]));
            if (null != t.channel) {
                let e = c.Ay.getInviteContext("Join Guild", t);
                c.Ay.acceptInvite({
                    inviteKey: t.code,
                    context: e,
                    callback: e => {
                        n(), c.Ay.transitionToInvite(e)
                    }
                }).then(() => {}, e => {
                    e instanceof u.Wl || e instanceof u.LG ? O((0, p.s)(e.code)) : O(m.intl.string(m.t.dDZRdy))
                })
            }
        }, e => {
            S(!1);
            let t = new u.Wl(e);
            O((0, p.s)(t.code))
        })
    };
    return (0, i.jsxs)("div", {
        children: [(0, i.jsxs)(s.rQ0, {
            "data-migration-pending": !0,
            className: I.wx,
            direction: _.A.Direction.VERTICAL,
            separator: !1,
            children: [(0, i.jsx)(s.Heading, {
                className: I.DD,
                variant: "heading-xl/semibold",
                children: m.intl.string(m.t.riOUtB)
            }), (0, i.jsx)(s.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: m.intl.string(m.t["7jub2t"])
            }), (0, i.jsx)(s.s_y, {
                "data-migration-pending": !0,
                className: I.b,
                onClick: n
            })]
        }), (0, i.jsxs)(s.$mQ, {
            "data-migration-pending": !0,
            className: I.__invalid_content,
            children: [(0, i.jsx)("form", {
                onSubmit: C,
                className: I.$j,
                children: (0, i.jsx)(s.ksK, {
                    label: m.intl.string(m.t.qreV25),
                    required: !0,
                    error: N,
                    value: l,
                    onChange: d,
                    placeholder: "".concat(T).concat(E),
                    inputRef: D
                })
            }), (0, i.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: m.intl.string(m.t.Bnq46H)
            }), (0, i.jsx)("div", {
                className: I.eU,
                children: A.map(e => (0, i.jsx)(s.DUT, {
                    className: I.Bb,
                    onClick: () => d(e),
                    children: e
                }, e))
            }), (0, i.jsx)(g, {
                onClick: n
            })]
        }), (0, i.jsxs)(s.jlY, {
            "data-migration-pending": !0,
            className: I.qr,
            children: [(0, i.jsx)(s.Button, {
                variant: "primary",
                text: m.intl.string(m.t["Ts/9Ac"]),
                loading: f,
                onClick: C
            }), (0, i.jsx)(a.$n, {
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