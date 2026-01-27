/** Chunk was on web.js **/
/** chunk id: 534400, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => O,
    Z9: () => y,
    o9: () => b
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(397927),
    c = n(517905),
    u = n(544028),
    d = n(287809),
    f = n(685073),
    p = n(743981),
    _ = n(985018),
    h = n(583970),
    m = n(478858);

function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            g(e, t, n[t])
        })
    }
    return e
}
let y = i.memo(function(e) {
        let {
            src: t,
            className: n,
            size: i = p.Sl.SIZE_16
        } = e;
        return null == t ? null : (0, r.jsx)("img", {
            src: t,
            alt: "",
            className: o()(m.qS, n),
            width: i,
            height: i
        })
    }),
    b = i.memo(function(e) {
        let {
            guildId: t,
            guildTag: n,
            guildBadge: i,
            className: a,
            textClassName: s,
            badgeClassName: c,
            onClick: u,
            onMouseEnter: d,
            textVariant: g = "text-xs/semibold",
            textColor: E = "text-default",
            badgeSize: b = p.Sl.SIZE_14,
            inline: O = !0
        } = e;
        return (0, r.jsx)(l.DUT, {
            "aria-label": _.intl.formatToPlainString(h.default["fw2p/x"], {
                tag: n
            }),
            tag: "span",
            tabIndex: null == u ? -1 : void 0,
            onClick: u,
            onMouseEnter: d,
            className: o()(m.nz, O && m.os, null != u && m.vk, a),
            children: (0, r.jsxs)(l.Text, {
                variant: g,
                lineClamp: 1,
                color: E,
                tag: "span",
                className: o()(m.Qq, s),
                children: [null != i && "string" == typeof i ? (0, r.jsx)(y, {
                    src: (0, f.gC)(t, i, b),
                    size: b,
                    className: c
                }) : i, (0, r.jsx)("span", {
                    className: m.em,
                    children: n
                })]
            })
        })
    }),
    O = i.memo(function(e) {
        let {
            primaryGuild: t,
            userId: n,
            contextGuildId: a,
            className: p,
            containerClassName: _,
            textVariant: h,
            textColor: g,
            badgeSize: y,
            disableGuildProfile: O = !1,
            inline: v = !0,
            onShowProfile: A,
            onClose: I
        } = e, S = i.useRef(null), T = (0, s.bG)([d.default], () => d.default.getUser(n), [n]), C = (0, s.bG)([u.A], () => u.A.theme), N = void 0 !== t ? t : null == T ? void 0 : T.primaryGuild, {
            tag: w,
            badge: R,
            guildId: P
        } = (0, f.Zo)(N);
        return (0, f.Wb)(n, a, N) && null != P ? O ? (0, r.jsx)(b, {
            guildId: P,
            guildTag: w,
            guildBadge: R,
            className: o()(m.Zy, p),
            textVariant: h,
            textColor: g,
            badgeSize: y,
            inline: v
        }) : (0, r.jsx)(l.wXn, {
            theme: C,
            children: (0, r.jsx)(c.A, {
                guildId: P,
                onRequestOpen: A,
                onClose: I,
                targetElementRef: S,
                children: e => (0, r.jsx)("span", {
                    className: _,
                    ref: S,
                    children: (0, r.jsx)(b, E({
                        guildId: P,
                        guildTag: w,
                        guildBadge: R,
                        className: p,
                        textVariant: h,
                        textColor: g,
                        badgeSize: y,
                        inline: v
                    }, e))
                })
            })
        }) : null
    })