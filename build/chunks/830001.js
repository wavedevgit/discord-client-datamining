/** chunk id: 830001, original params: e,t,i (module,exports,require) **/
i.d(t, {
    f: () => v
});
var n = i(627968),
    l = i(934551),
    s = i(311907),
    r = i(397927),
    a = i(73153),
    u = i(631670),
    o = i(252452),
    d = i(159001),
    T = i(833336),
    c = i(103738),
    A = i(745109),
    S = i(419954),
    _ = i(933297),
    E = i(836602),
    g = i(854627),
    I = i(287809),
    O = i(780964),
    C = i(358776),
    N = i(368631),
    b = i(633817),
    p = i(531525),
    m = i(652215),
    f = i(985018),
    L = i(722125);
let D = (0, S.t_)(O.X.PROFILE_PANEL, {
        usePredicate: () => !(0, C.dk)("LegacyProfilePanel"),
        useTitle: () => f.intl.string(f.t["vi7f+q"]),
        notice: {
            stores: [T.A, E.A],
            element: c.A
        },
        initialize: () => () => a.h.wait(() => {
            (0, d.sy)(), (0, u.F7)(), o.A.clearSubsection(m.nc_.PROFILE_CUSTOMIZATION)
        }),
        StronglyDiscouragedCustomComponent: A.A,
        buildLayout: () => []
    }),
    R = (0, S.t_)(O.X.PROFILE_PANEL, {
        usePredicate: () => (0, C.dk)("ProfilePanel"),
        useTitle: () => f.intl.string(f.t["vi7f+q"]),
        notice: {
            stores: [T.A, E.A],
            element: c.A
        },
        initialize: () => () => a.h.wait(() => {
            (0, d.sy)(), (0, u.F7)(), o.A.clearSubsection(m.nc_.PROFILE_CUSTOMIZATION)
        }),
        buildLayout: () => [b.I]
    }),
    v = (0, S.i4)(O.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => f.intl.string(f.t["vi7f+q"]),
        getLegacySearchKey: () => (0, C.WJ)("ProfilePanel") ? void 0 : p.H.PROFILE_CUSTOMIZATION,
        icon: l.UserIcon,
        StronglyDiscouragedCustomComponent: () => {
            var e;
            let t = (0, s.bG)([I.default], () => I.default.getCurrentUser()),
                {
                    avatarSrc: i,
                    avatarDecorationSrc: a
                } = (0, g.A)({
                    userId: null == t ? void 0 : t.id,
                    size: r._3J.SIZE_48
                });
            return null == t ? null : (0, n.jsxs)("div", {
                className: L.a5,
                children: [(0, n.jsx)(r.euF, {
                    src: i,
                    avatarDecoration: a,
                    size: r._3J.SIZE_48,
                    "aria-label": f.intl.string(f.t.lqaIxI)
                }), (0, n.jsxs)("div", {
                    className: L.FS,
                    children: [(0, n.jsx)(r.Text, {
                        color: "text-strong",
                        variant: "text-md/medium",
                        lineClamp: 1,
                        children: null != (e = t.globalName) ? e : t.username
                    }), (0, n.jsxs)("div", {
                        className: L.Fk,
                        children: [(0, n.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "currentColor",
                            lineClamp: 1,
                            children: f.intl.string(f.t.Ip9nBS)
                        }), (0, n.jsx)(l.PencilIcon, {
                            size: "xxs",
                            color: "currentColor"
                        })]
                    })]
                })]
            })
        },
        trailing: {
            type: _.S.BADGE_NEW,
            getDismissibleContentTypes: N.Jn
        },
        buildLayout: () => (0, C.WJ)("ProfilePanel") ? [R] : [D]
    })