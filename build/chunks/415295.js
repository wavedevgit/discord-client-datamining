/** chunk id: 415295 params = (module,exports,require) **/
n.d(t, {
    $: () => c,
    S: () => d
});
var i = n(627968);
n(64700);
var l = n(827734),
    s = n(397927),
    r = n(985018),
    a = n(221553);

function o(e) {
    let {
        label: t,
        backgroundColor: n = l.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
        icon: r,
        iconColor: o
    } = e;
    return (0, i.jsxs)("div", {
        className: a.q,
        style: {
            backgroundColor: n
        },
        children: [(0, i.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: a.__invalid_badgeText,
            children: t
        }), (0, i.jsx)(r, {
            className: a.r,
            color: o ?? "currentColor",
            "aria-hidden": !0
        })]
    })
}

function d() {
    return (0, i.jsx)(o, {
        label: r.intl.string(r.t["I+02Gs"]),
        backgroundColor: "#207B8D",
        icon: s.BZI
    })
}

function c() {
    return (0, i.jsx)(o, {
        label: r.intl.string(r.t.TgsPaP),
        icon: s.R2l,
        iconColor: l.A.unsafe_rawColors.PRIMARY_330.css
    })
}