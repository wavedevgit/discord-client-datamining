/** Chunk was on 77870 **/
/** chunk id: 214660, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y,
    H: () => A
});
var r, l = n(627968);
n(64700);
var i = n(311907),
    s = n(139033),
    a = n(397927),
    o = n(830215),
    c = n(315982),
    u = n(915089),
    d = n(557722),
    p = n(834942),
    h = n(287809),
    f = n(652215),
    g = n(53516),
    m = n(985018),
    b = n(43310),
    A = ((r = {})[r.VOICE = 0] = "VOICE", r);
let y = e => {
    let {
        type: t,
        guildId: r,
        closePopout: A
    } = e, y = (0, u.GV)(), {
        notClaimed: _,
        notEmailVerified: O,
        notPhoneVerified: j,
        newAccount: v,
        newMember: x
    } = (0, i.bG)([p.A], () => p.A.getCheck(r), [r]), E = 0 === t ? m.intl.string(m.t["6zY8BI"]) : null, C = null, S = null;
    return (0 === t && (_ ? (C = m.intl.string(m.t.IRxUlG), S = m.intl.string(m.t.fiNVin)) : j ? (C = m.intl.string(m.t.vW8iUF), S = m.intl.string(m.t["50gfOv"])) : O ? (C = m.intl.string(m.t.vdSOpz), S = m.intl.string(m.t.lm1UKt)) : x ? (C = m.intl.formatToPlainString(m.t.v1ktYb, {
        min: f.$8o.MEMBER_AGE
    }), S = m.intl.string(m.t.BddRzS)) : v && (C = m.intl.formatToPlainString(m.t.sncw41, {
        min: f.$8o.ACCOUNT_AGE
    }), S = m.intl.string(m.t.BddRzS))), null == E || null == C) ? null : (0, l.jsxs)(a.lGe, {
        className: b.kL,
        "aria-labelledby": y,
        children: [(0, l.jsx)("img", {
            alt: "",
            className: b.Sl,
            src: n(303528)
        }), (0, l.jsxs)("div", {
            className: b.Qs,
            children: [(0, l.jsx)(a.Heading, {
                variant: "heading-md/semibold",
                id: y,
                children: E
            }), (0, l.jsx)(a.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: C
            }), (0, l.jsxs)("div", {
                className: b.UD,
                children: [null != S ? (0, l.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: b.FS,
                    children: (0, l.jsx)(a.Button, {
                        variant: "primary",
                        text: S,
                        onClick: () => {
                            if (_) c.R();
                            else if (j)(0, a.mMO)(async () => {
                                let {
                                    default: e
                                } = await Promise.resolve().then(n.bind(n, 615715));
                                return t => (0, l.jsx)(e, function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))), r.forEach(function(t) {
                                            var r;
                                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            }) : e[t] = r
                                        })
                                    }
                                    return e
                                }({
                                    reason: d.d.GUILD_PHONE_REQUIRED
                                }, t))
                            }, {
                                modalKey: g.V
                            });
                            else if (O) {
                                var e;
                                o.A.verifyResend(), (0, s.A)({
                                    title: m.intl.string(m.t.LykQYk),
                                    subtitle: m.intl.format(m.t.azKEPy, {
                                        email: null == (e = h.default.getCurrentUser()) ? void 0 : e.email
                                    })
                                })
                            }
                            A()
                        }
                    })
                }) : null, _ || j || O ? (0, l.jsx)(a.QWc, {
                    onClick: A,
                    text: m.intl.string(m.t.oEAioF),
                    variant: "secondary"
                }) : null]
            })]
        })]
    })
}