/** chunk id: 66442 params = (module,exports,require) **/
n.d(t, {
    X: () => S,
    default: () => I
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(308528),
    u = n(964486),
    h = n(793574),
    m = n(688810),
    A = n(571694),
    g = n(47167),
    _ = n(734057),
    p = n(954571),
    f = n(396787),
    E = n(652215),
    C = n(985018),
    x = n(740885);

function S(e) {
    let {
        channel: t,
        previewIcon: n,
        onIconChange: l,
        onIconRemove: s,
        analyticsLocations: r,
        petite: o = !1,
        className: d,
        allowRemovingIcon: u = !0
    } = e, g = void 0 !== n ? n : t?.icon != null ? (0, A.Y)(t, 120) : null, {
        analyticsLocations: _
    } = (0, m.Ay)(r, h.A.GROUP_DM_ICON_EDITOR), p = o ? 32 : 64;
    return (0, i.jsxs)("div", {
        className: a()(x.r2, d),
        children: [(0, i.jsxs)(c.DUT, {
            className: a()(x.zc, {
                [x.ud]: o
            }),
            "aria-label": C.intl.string(C.t["0qPSMV"]),
            onClick: () => (0, f.F5)(l, _),
            children: [null != g ? (0, i.jsx)("img", {
                src: g,
                alt: "",
                className: x.Dp
            }) : (0, i.jsx)("div", {
                className: x.Pz,
                children: (0, i.jsx)(c.nFg, {
                    size: "custom",
                    width: p,
                    height: p,
                    color: "currentColor"
                })
            }), (0, i.jsx)("div", {
                className: x.qc,
                children: (0, i.jsx)(c.R2l, {
                    color: "currentColor",
                    size: o ? "xs" : "refresh_sm"
                })
            })]
        }), null != g && u ? (0, i.jsx)(c.QWc, {
            variant: "critical",
            onClick: s,
            "aria-label": C.intl.string(C.t["uY+Nk/"]),
            text: C.intl.string(C.t["uY+Nk/"]),
            textVariant: "text-sm/medium",
            size: "sm",
            role: "button",
            type: "button"
        }) : null]
    })
}
let I = function(e) {
    let {
        channelId: t,
        onClose: n,
        transitionState: s,
        setHasPendingChanges: a,
        closeOrShowDiscardChangesAlert: A,
        location: I
    } = e, T = (0, o.bG)([_.A], () => _.A.getChannel(t)), v = T?.name, N = (0, g.e5)(T), [y, b] = l.useState(v ?? ""), [j, R] = l.useState(void 0), M = void 0 !== j, {
        analyticsLocations: L
    } = (0, m.Ay)(I, h.A.GROUP_DM_EDIT_MODAL), D = {
        channel_id: t,
        channel_type: T?.type,
        location: I,
        location_stack: L,
        old_name_set: "" !== v,
        old_icon_set: T?.icon != null
    };
    return (l.useEffect(() => {
        a(y !== v || M)
    }, [y, v, M, a]), (0, u.Ay)(() => (p.default.track(E.HAw.GDM_EDIT_INTERACTED, {
        ...D,
        action: "opened"
    }), () => {
        p.default.track(E.HAw.GDM_EDIT_INTERACTED, {
            ...D,
            action: "dismissed"
        })
    })), null == T) ? null : (0, i.jsx)(m.f5, {
        value: L,
        children: (0, i.jsx)("form", {
            onSubmit: e => {
                e.preventDefault();
                let i = y !== v,
                    l = void 0 !== j;
                if (p.default.track(E.HAw.GDM_EDIT_INTERACTED, {
                        ...D,
                        action: "saved",
                        new_name_set: "" !== y,
                        new_icon_set: (l ? j : T?.icon) != null,
                        name_changed: i,
                        icon_changed: l
                    }), i || l) {
                    let e = {};
                    i && (e.name = y), l && (e.icon = j), d.A.updateChannel(t, e, I).catch(f.XA)
                }
                n()
            },
            children: (0, i.jsx)(r.Modal, {
                title: C.intl.string(C.t["5Q9+/L"]),
                actions: [{
                    text: C.intl.string(C.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: A
                }, {
                    text: C.intl.string(C.t["R3BPH+"]),
                    variant: "primary",
                    type: "submit",
                    disabled: y === v && !M
                }],
                onClose: () => Promise.resolve(A()),
                transitionState: s,
                children: (0, i.jsxs)("div", {
                    className: x.jE,
                    children: [(0, i.jsx)(S, {
                        channel: T,
                        previewIcon: j,
                        onIconChange: e => R(e.imageUri),
                        onIconRemove: () => R(null),
                        analyticsLocations: L
                    }), (0, i.jsx)(c.ksK, {
                        "aria-label": C.intl.string(C.t.GEGW3P),
                        placeholder: N ?? "",
                        maxLength: E.Ign,
                        value: y,
                        onChange: b,
                        autoFocus: !0
                    })]
                })
            })
        })
    })
}