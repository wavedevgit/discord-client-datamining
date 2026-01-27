/** Chunk was on web.js **/
/** chunk id: 42780, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => O,
    CG: () => b,
    J$: () => E
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(397927),
    s = n(573435),
    l = n(946274),
    c = n(145497),
    u = n(179283),
    d = n(123213),
    f = n(86376),
    p = n(649640),
    _ = n(339984),
    h = n(838934);

function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            m(e, t, n[t])
        })
    }
    return e
}

function E(e) {
    let {
        profile: t,
        className: n
    } = e, i = (0, p._3)(t);
    return null != i ? (0, r.jsx)("div", {
        className: a()(n, h.vK),
        style: {
            background: i
        }
    }) : (0, r.jsx)(y, {
        profile: t,
        className: n
    })
}

function y(e) {
    var t;
    let {
        profile: n,
        className: i
    } = e, o = (0, p.b2)(), s = (0, p.aG)({
        profile: n,
        defaultColor: o.hex(),
        forceDefaultColor: null != n.brandColorPrimary
    }), l = null != (t = n.brandColorPrimary) ? t : s;
    return (0, r.jsx)("div", {
        className: a()(i, h.vK),
        style: {
            background: (0, p.n6)(l)
        }
    })
}

function b(e) {
    let {
        profile: t,
        onIconChange: i
    } = e;
    if (null == i) return (0, r.jsx)("div", {
        className: h.H,
        children: (0, r.jsx)(s.Ay, {
            mask: s.hW.CLAN_ICON,
            width: 70,
            height: 70,
            children: (0, r.jsx)("div", {
                className: h.R3,
                children: (0, r.jsx)(c.j, {
                    guildId: t.id,
                    guildName: t.name,
                    guildIcon: t.icon,
                    iconSize: 64
                })
            })
        })
    });

    function u(e, t) {
        null != i && (0, o.mMO)(async () => {
            let {
                default: a
            } = await Promise.all([n.e("79149"), n.e("35929"), n.e("74571"), n.e("72968")]).then(n.bind(n, 142630));
            return n => (0, r.jsx)(a, g({
                uploadType: _.HL.GUILD_ICON,
                imageUri: e,
                file: t,
                onCrop: e => {
                    let {
                        imageUri: t
                    } = e;
                    return i(t)
                }
            }, n))
        }, {})
    }
    return (0, r.jsx)("div", {
        className: h.H,
        children: (0, r.jsx)(o.vN3, {
            within: !0,
            children: (0, r.jsx)(s.Ay, {
                mask: s.hW.CLAN_ICON,
                width: 70,
                height: 70,
                children: (0, r.jsxs)("div", {
                    className: a()(h.R3, h.vk),
                    children: [(0, r.jsx)(c.j, {
                        guildId: t.id,
                        guildName: t.name,
                        guildIcon: t.icon,
                        iconSize: 64
                    }), (0, r.jsx)("div", {
                        className: h.Lw
                    }), (0, r.jsx)(o.R2l, {
                        size: "custom",
                        className: h.QY,
                        width: 20,
                        height: 20,
                        color: "white"
                    }), (0, r.jsx)(l.Ay, {
                        tabIndex: 0,
                        onChange: u
                    })]
                })
            })
        })
    })
}

function O(e) {
    let {
        profile: t,
        onIconChange: n,
        className: i,
        disableCTA: o,
        CTAOverride: s,
        onClose: l,
        disableGuildNameClick: c
    } = e, p = null;
    return null != s ? p = s : o || (p = (0, r.jsx)(d.A, {
        profile: t,
        onComplete: l
    })), (0, r.jsxs)("div", {
        className: a()(h.kL, i),
        children: [(0, r.jsx)(E, {
            profile: t
        }), (0, r.jsx)(b, {
            onIconChange: n,
            profile: t
        }), (0, r.jsx)(f.A, {
            profile: t,
            disableGuildNameClick: c
        }), (0, r.jsx)(u.P, {
            profile: t
        }), null != p && (0, r.jsx)("div", {
            className: h.UD,
            children: p
        })]
    })
}