/** chunk id: 194867 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(990078),
    o = n(397927),
    a = n(775602),
    d = n(600941),
    u = n(890942),
    c = n(744201),
    m = n(271484),
    p = n(526652);

function _(e) {
    let {
        guildId: t,
        group: n,
        powerups: _
    } = e, [f, g] = i.useState(!1), x = (0, s.bG)([a.A], () => a.A.useReducedMotion), A = (0, m.A)(n, t), v = !x && f ? A?.image?.animatedUrl : A?.image?.staticUrl, h = (0, d.A)({
        guildId: t,
        powerups: _
    }), {
        textColor: E
    } = (0, c.A)(h?.isActive ?? !1);
    if (null == h || null == A) return null;
    let {
        status: j,
        cost: b,
        costDecorator: I
    } = h;
    return (0, r.jsxs)(u.NI, {
        label: A.title,
        isActive: j?.type === "active",
        isWarning: j?.type === "expiring",
        badge: A.badge,
        onClick: () => A.openModal(_),
        onMouseOver: () => g(!0),
        onMouseLeave: () => g(!1),
        children: [(0, r.jsx)("img", {
            alt: "",
            src: v,
            className: p.S
        }), (0, r.jsx)(u.Ft, {
            title: A.title,
            textColor: E,
            footer: (0, r.jsx)(u.$L, {
                status: j,
                cost: b,
                costDecorator: I
            }),
            children: (0, r.jsx)(o.Text, {
                className: p.h,
                color: E,
                variant: "text-sm/medium",
                children: A.description
            })
        }), (0, r.jsx)(u.kd, {
            children: A?.viewCtaTooltip != null ? (0, r.jsx)(l.m, {
                asContainer: !0,
                text: A.viewCtaTooltip,
                delay: 100,
                children: (0, r.jsx)(o.Button, {
                    text: A.viewCta,
                    fullWidth: !0
                })
            }) : (0, r.jsx)(o.Button, {
                text: A.viewCta,
                fullWidth: !0
            })
        })]
    })
}