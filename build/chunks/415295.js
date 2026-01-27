/** Chunk was on 92917 **/
/** chunk id: 415295, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $: () => u,
    S: () => c
});
var r = n(627968);
n(64700);
var i = n(827734),
    l = n(397927),
    a = n(985018),
    s = n(530611);

function o(e) {
    let {
        label: t,
        backgroundColor: n = i.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
        icon: a,
        iconColor: o
    } = e;
    return (0, r.jsxs)("div", {
        className: s.q,
        style: {
            backgroundColor: n
        },
        children: [(0, r.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: s.__invalid_badgeText,
            children: t
        }), (0, r.jsx)(a, {
            className: s.r,
            color: null != o ? o : "currentColor",
            "aria-hidden": !0
        })]
    })
}

function c() {
    return (0, r.jsx)(o, {
        label: a.intl.string(a.t["I+02Gs"]),
        backgroundColor: "#207B8D",
        icon: l.BZI
    })
}

function u() {
    return (0, r.jsx)(o, {
        label: a.intl.string(a.t.TgsPaP),
        icon: l.R2l,
        iconColor: i.A.unsafe_rawColors.PRIMARY_330.css
    })
}