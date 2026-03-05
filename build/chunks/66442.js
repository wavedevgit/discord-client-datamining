/** chunk id: 66442, original params: e,t,n (module,exports,require) **/
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
    p = n(734057),
    f = n(954571),
    _ = n(396787),
    E = n(652215),
    x = n(985018),
    C = n(749906);

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
        analyticsLocations: p
    } = (0, m.Ay)(r, h.A.GROUP_DM_ICON_EDITOR), f = o ? 32 : 64;
    return (0, i.jsxs)("div", {
        className: a()(C.r2, d),
        children: [(0, i.jsxs)(c.DUT, {
            className: a()(C.zc, {
                [C.ud]: o
            }),
            "aria-label": x.intl.string(x.t["0qPSMV"]),
            onClick: () => (0, _.F5)(l, p),
            children: [null != g ? (0, i.jsx)("img", {
                src: g,
                alt: "",
                className: C.Dp
            }) : (0, i.jsx)("div", {
                className: C.Pz,
                children: (0, i.jsx)(c.nFg, {
                    size: "custom",
                    width: f,
                    height: f,
                    color: "currentColor"
                })
            }), (0, i.jsx)("div", {
                className: C.qc,
                children: (0, i.jsx)(c.R2l, {
                    color: "currentColor",
                    size: o ? "xs" : "refresh_sm"
                })
            })]
        }), null != g && u ? (0, i.jsx)(c.QWc, {
            variant: "critical",
            onClick: s,
            "aria-label": x.intl.string(x.t["uY+Nk/"]),
            text: x.intl.string(x.t["uY+Nk/"]),
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
    } = e, T = (0, o.bG)([p.A], () => p.A.getChannel(t)), N = T?.name, b = (0, g.e5)(T), [y, v] = l.useState(N ?? ""), [j, R] = l.useState(void 0), M = void 0 !== j, {
        analyticsLocations: D
    } = (0, m.Ay)(I, h.A.GROUP_DM_EDIT_MODAL), O = {
        channel_id: t,
        channel_type: T?.type,
        location: I,
        location_stack: D,
        old_name_set: "" !== N,
        old_icon_set: T?.icon != null
    };
    return (l.useEffect(() => {
        a(y !== N || M)
    }, [y, N, M, a]), (0, u.Ay)(() => (f.default.track(E.HAw.GDM_EDIT_INTERACTED, {
        ...O,
        action: "opened"
    }), () => {
        f.default.track(E.HAw.GDM_EDIT_INTERACTED, {
            ...O,
            action: "dismissed"
        })
    })), null == T) ? null : (0, i.jsx)(m.f5, {
        value: D,
        children: (0, i.jsx)("form", {
            onSubmit: e => {
                e.preventDefault();
                let i = y !== N,
                    l = void 0 !== j;
                if (f.default.track(E.HAw.GDM_EDIT_INTERACTED, {
                        ...O,
                        action: "saved",
                        new_name_set: "" !== y,
                        new_icon_set: (l ? j : T?.icon) != null,
                        name_changed: i,
                        icon_changed: l
                    }), i || l) {
                    let e = {};
                    i && (e.name = y), l && (e.icon = j), d.A.updateChannel(t, e, I).catch(_.XA)
                }
                n()
            },
            children: (0, i.jsx)(r.Modal, {
                title: x.intl.string(x.t["5Q9+/L"]),
                actions: [{
                    text: x.intl.string(x.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: A
                }, {
                    text: x.intl.string(x.t["R3BPH+"]),
                    variant: "primary",
                    type: "submit",
                    disabled: y === N && !M
                }],
                onClose: () => Promise.resolve(A()),
                transitionState: s,
                children: (0, i.jsxs)("div", {
                    className: C.jE,
                    children: [(0, i.jsx)(S, {
                        channel: T,
                        previewIcon: j,
                        onIconChange: e => R(e.imageUri),
                        onIconRemove: () => R(null),
                        analyticsLocations: D
                    }), (0, i.jsx)(c.ksK, {
                        "aria-label": x.intl.string(x.t.GEGW3P),
                        placeholder: b ?? "",
                        value: y,
                        onChange: v,
                        autoFocus: !0
                    })]
                })
            })
        })
    })
}