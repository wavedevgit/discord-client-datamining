/** chunk id: 194867, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(990078),
    a = n(397927),
    o = n(775602),
    d = n(600941),
    u = n(890942),
    c = n(744201),
    m = n(271484),
    p = n(628743);

function _(e) {
    let {
        guildId: t,
        group: n,
        powerups: _
    } = e, [x, A] = i.useState(!1), f = (0, l.bG)([o.A], () => o.A.useReducedMotion), g = (0, m.A)(n, t), v = !f && x ? g?.image?.animatedUrl : g?.image?.staticUrl, h = (0, d.A)({
        guildId: t,
        powerups: _
    }), {
        textColor: b
    } = (0, c.A)(h?.isActive ?? !1);
    if (null == h || null == g) return null;
    let {
        status: j,
        cost: E,
        costDecorator: I
    } = h;
    return (0, r.jsxs)(u.NI, {
        label: g.title,
        isActive: j?.type === "active",
        isWarning: j?.type === "expiring",
        badge: g.badge,
        onClick: () => g.openModal(_),
        onMouseOver: () => A(!0),
        onMouseLeave: () => A(!1),
        children: [(0, r.jsx)("img", {
            alt: "",
            src: v,
            className: p.S
        }), (0, r.jsx)(u.Ft, {
            title: g.title,
            textColor: b,
            footer: (0, r.jsx)(u.$L, {
                status: j,
                cost: E,
                costDecorator: I
            }),
            children: (0, r.jsx)(a.Text, {
                className: p.h,
                color: b,
                variant: "text-sm/medium",
                children: g.description
            })
        }), (0, r.jsx)(u.kd, {
            children: g?.viewCtaTooltip != null ? (0, r.jsx)(s.m, {
                asContainer: !0,
                text: g.viewCtaTooltip,
                delay: 100,
                children: (0, r.jsx)(a.Button, {
                    text: g.viewCta,
                    fullWidth: !0
                })
            }) : (0, r.jsx)(a.Button, {
                text: g.viewCta,
                fullWidth: !0
            })
        })]
    })
}