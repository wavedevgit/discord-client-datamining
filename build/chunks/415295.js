/** chunk id: 415295 params = (module,exports,require) **/
n.d(t, {
    $: () => c,
    S: () => d
});
var i = n(627968);
n(64700);
var a = n(827734),
    l = n(397927),
    s = n(985018),
    r = n(387130);

function o(e) {
    let {
        label: t,
        backgroundColor: n = a.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
        icon: s,
        iconColor: o
    } = e;
    return (0, i.jsxs)("div", {
        className: r.q,
        style: {
            backgroundColor: n
        },
        children: [(0, i.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: r.__invalid_badgeText,
            children: t
        }), (0, i.jsx)(s, {
            className: r.r,
            color: o ?? "currentColor",
            "aria-hidden": !0
        })]
    })
}

function d() {
    return (0, i.jsx)(o, {
        label: s.intl.string(s.t["I+02Gs"]),
        backgroundColor: "#207B8D",
        icon: l.BZI
    })
}

function c() {
    return (0, i.jsx)(o, {
        label: s.intl.string(s.t.TgsPaP),
        icon: l.R2l,
        iconColor: a.A.unsafe_rawColors.PRIMARY_330.css
    })
}