/** Chunk was on 88615 **/
/** chunk id: 194867, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    o = n(990078),
    s = n(397927),
    a = n(775602),
    u = n(600941),
    d = n(890942),
    c = n(744201),
    p = n(271484),
    m = n(628743);

function f(e) {
    var t, n, f;
    let {
        guildId: v,
        group: g,
        powerups: A
    } = e, [_, x] = l.useState(!1), h = (0, i.bG)([a.A], () => a.A.useReducedMotion), b = (0, p.A)(g, v), j = !h && _ ? null == b || null == (n = b.image) ? void 0 : n.animatedUrl : null == b || null == (f = b.image) ? void 0 : f.staticUrl, E = (0, u.A)({
        guildId: v,
        powerups: A
    }), {
        textColor: w
    } = (0, c.A)(null != (t = null == E ? void 0 : E.isActive) && t);
    if (null == E || null == b) return null;
    let {
        status: y,
        cost: I,
        costDecorator: S
    } = E;
    return (0, r.jsxs)(d.NI, {
        label: b.title,
        isActive: (null == y ? void 0 : y.type) === "active",
        isWarning: (null == y ? void 0 : y.type) === "expiring",
        badge: b.badge,
        onClick: () => b.openModal(A),
        onMouseOver: () => x(!0),
        onMouseLeave: () => x(!1),
        children: [(0, r.jsx)("img", {
            alt: "",
            src: j,
            className: m.S
        }), (0, r.jsx)(d.Ft, {
            title: b.title,
            textColor: w,
            footer: (0, r.jsx)(d.$L, {
                status: y,
                cost: I,
                costDecorator: S
            }),
            children: (0, r.jsx)(s.Text, {
                className: m.h,
                color: w,
                variant: "text-sm/medium",
                children: b.description
            })
        }), (0, r.jsx)(d.kd, {
            children: (null == b ? void 0 : b.viewCtaTooltip) != null ? (0, r.jsx)(o.m, {
                asContainer: !0,
                text: b.viewCtaTooltip,
                delay: 100,
                children: (0, r.jsx)(s.Button, {
                    text: b.viewCta,
                    fullWidth: !0
                })
            }) : (0, r.jsx)(s.Button, {
                text: b.viewCta,
                fullWidth: !0
            })
        })]
    })
}