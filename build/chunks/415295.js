/** chunk id: 415295 params = (module,exports,require) **/
n.d(t, {
    $: () => c,
    S: () => d
});
var i = n(627968);
n(64700);
var a = n(827734),
    r = n(397927),
    l = n(985018),
    s = n(387130);

function o(e) {
    let {
        label: t,
        backgroundColor: n = a.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
        icon: l,
        iconColor: o
    } = e;
    return (0, i.jsxs)("div", {
        className: s.q,
        style: {
            backgroundColor: n
        },
        children: [(0, i.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: s.__invalid_badgeText,
            children: t
        }), (0, i.jsx)(l, {
            className: s.r,
            color: o ?? "currentColor",
            "aria-hidden": !0
        })]
    })
}

function d() {
    return (0, i.jsx)(o, {
        label: l.intl.string(l.t["I+02Gs"]),
        backgroundColor: "#207B8D",
        icon: r.BZI
    })
}

function c() {
    return (0, i.jsx)(o, {
        label: l.intl.string(l.t.TgsPaP),
        icon: r.R2l,
        iconColor: a.A.unsafe_rawColors.PRIMARY_330.css
    })
}