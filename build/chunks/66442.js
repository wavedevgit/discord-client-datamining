/** chunk id: 66442, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => C,
    default: () => S
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(311907),
    c = n(397927),
    u = n(308528),
    d = n(964486),
    h = n(793574),
    p = n(688810),
    f = n(571694),
    m = n(47167),
    g = n(734057),
    A = n(954571),
    b = n(396787),
    _ = n(652215),
    y = n(985018),
    v = n(353528);

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function O(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function C(e) {
    let {
        channel: t,
        previewIcon: n,
        onIconChange: r,
        onIconRemove: i,
        analyticsLocations: s,
        petite: o = !1,
        className: u,
        allowRemovingIcon: d = !0
    } = e, m = void 0 !== n ? n : (null == t ? void 0 : t.icon) != null ? (0, f.Y)(t, 120) : null, {
        analyticsLocations: g
    } = (0, p.Ay)(s, h.A.GROUP_DM_ICON_EDITOR), A = o ? 32 : 64;
    return (0, l.jsxs)("div", {
        className: a()(v.r2, u),
        children: [(0, l.jsxs)(c.DUT, {
            className: a()(v.zc, {
                [v.ud]: o
            }),
            "aria-label": y.intl.string(y.t["0qPSMV"]),
            onClick: () => (0, b.F5)(r, g),
            children: [null != m ? (0, l.jsx)("img", {
                src: m,
                alt: "",
                className: v.Dp
            }) : (0, l.jsx)("div", {
                className: v.Pz,
                children: (0, l.jsx)(c.nFg, {
                    size: "custom",
                    width: A,
                    height: A,
                    color: "currentColor"
                })
            }), (0, l.jsx)("div", {
                className: v.qc,
                children: (0, l.jsx)(c.R2l, {
                    color: "currentColor",
                    size: o ? "xs" : "refresh_sm"
                })
            })]
        }), null != m && d ? (0, l.jsx)(c.QWc, {
            variant: "critical",
            onClick: i,
            "aria-label": y.intl.string(y.t["uY+Nk/"]),
            text: y.intl.string(y.t["uY+Nk/"]),
            textVariant: "text-sm/medium",
            size: "sm",
            role: "button",
            type: "button"
        }) : null]
    })
}
let S = function(e) {
    let {
        channelId: t,
        onClose: n,
        transitionState: i,
        setHasPendingChanges: a,
        closeOrShowDiscardChangesAlert: f,
        location: S
    } = e, x = (0, o.bG)([g.A], () => g.A.getChannel(t)), j = null == x ? void 0 : x.name, I = (0, m.e5)(x), [T, N] = r.useState(null != j ? j : ""), [P, w] = r.useState(void 0), R = void 0 !== P, {
        analyticsLocations: D
    } = (0, p.Ay)(S, h.A.GROUP_DM_EDIT_MODAL), M = {
        channel_id: t,
        channel_type: null == x ? void 0 : x.type,
        location: S,
        location_stack: D,
        old_name_set: "" !== j,
        old_icon_set: (null == x ? void 0 : x.icon) != null
    };
    return (r.useEffect(() => {
        a(T !== j || R)
    }, [T, j, R, a]), (0, d.Ay)(() => (A.default.track(_.HAw.GDM_EDIT_INTERACTED, O(E({}, M), {
        action: "opened"
    })), () => {
        A.default.track(_.HAw.GDM_EDIT_INTERACTED, O(E({}, M), {
            action: "dismissed"
        }))
    })), null == x) ? null : (0, l.jsx)(p.f5, {
        value: D,
        children: (0, l.jsx)("form", {
            onSubmit: e => {
                e.preventDefault();
                let l = T !== j,
                    r = void 0 !== P;
                if (A.default.track(_.HAw.GDM_EDIT_INTERACTED, O(E({}, M), {
                        action: "saved",
                        new_name_set: "" !== T,
                        new_icon_set: (r ? P : null == x ? void 0 : x.icon) != null,
                        name_changed: l,
                        icon_changed: r
                    })), l || r) {
                    let e = {};
                    l && (e.name = T), r && (e.icon = P), u.A.updateChannel(t, e, S).catch(b.XA)
                }
                n()
            },
            children: (0, l.jsx)(s.Modal, {
                title: y.intl.string(y.t["5Q9+/L"]),
                actions: [{
                    text: y.intl.string(y.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: f
                }, {
                    text: y.intl.string(y.t["R3BPH+"]),
                    variant: "primary",
                    type: "submit",
                    disabled: T === j && !R
                }],
                onClose: () => Promise.resolve(f()),
                transitionState: i,
                children: (0, l.jsxs)("div", {
                    className: v.jE,
                    children: [(0, l.jsx)(C, {
                        channel: x,
                        previewIcon: P,
                        onIconChange: e => w(e.imageUri),
                        onIconRemove: () => w(null),
                        analyticsLocations: D
                    }), (0, l.jsx)(c.ksK, {
                        "aria-label": y.intl.string(y.t.GEGW3P),
                        placeholder: null != I ? I : "",
                        value: T,
                        onChange: N,
                        autoFocus: !0
                    })]
                })
            })
        })
    })
}