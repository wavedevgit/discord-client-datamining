/** chunk id: 830001, original params: t,e,i (module,exports,require) **/
i.d(e, {
    f: () => P
});
var n = i(627968),
    l = i(934551),
    s = i(311907),
    r = i(397927),
    u = i(73153),
    a = i(631670),
    o = i(252452),
    d = i(159001),
    T = i(833336),
    A = i(103738),
    S = i(745109),
    c = i(419954),
    E = i(933297),
    g = i(836602),
    _ = i(854627),
    I = i(287809),
    O = i(780964),
    N = i(358776),
    C = i(368631),
    b = i(633817),
    p = i(531525),
    L = i(652215),
    D = i(985018),
    m = i(722125);
let R = (0, c.t_)(O.X.PROFILE_PANEL, {
        usePredicate: () => !(0, N.dk)("LegacyProfilePanel"),
        useTitle: () => D.intl.string(D.t["vi7f+q"]),
        notice: {
            stores: [T.A, g.A],
            element: A.A
        },
        initialize: () => () => u.h.wait(() => {
            (0, d.sy)(), (0, a.F7)(), o.A.clearSubsection(L.nc_.PROFILE_CUSTOMIZATION)
        }),
        StronglyDiscouragedCustomComponent: S.A,
        buildLayout: () => []
    }),
    f = (0, c.t_)(O.X.PROFILE_PANEL, {
        usePredicate: () => (0, N.dk)("ProfilePanel"),
        useTitle: () => D.intl.string(D.t["vi7f+q"]),
        notice: {
            stores: [T.A, g.A],
            element: A.A
        },
        initialize: () => () => u.h.wait(() => {
            (0, d.sy)(), (0, a.F7)(), o.A.clearSubsection(L.nc_.PROFILE_CUSTOMIZATION)
        }),
        buildLayout: () => [b.I]
    }),
    P = (0, c.i4)(O.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => D.intl.string(D.t["vi7f+q"]),
        getLegacySearchKey: () => (0, N.WJ)("ProfilePanel") ? void 0 : p.H.PROFILE_CUSTOMIZATION,
        icon: l.UserIcon,
        StronglyDiscouragedCustomComponent: () => {
            var t;
            let e = (0, s.bG)([I.default], () => I.default.getCurrentUser()),
                {
                    avatarSrc: i,
                    avatarDecorationSrc: u
                } = (0, _.A)({
                    userId: null == e ? void 0 : e.id,
                    size: r._3J.SIZE_48
                });
            return null == e ? null : (0, n.jsxs)("div", {
                className: m.a5,
                children: [(0, n.jsx)(r.euF, {
                    src: i,
                    avatarDecoration: u,
                    size: r._3J.SIZE_48,
                    "aria-label": D.intl.string(D.t.lqaIxI)
                }), (0, n.jsxs)("div", {
                    className: m.FS,
                    children: [(0, n.jsx)(r.Text, {
                        color: "text-strong",
                        variant: "text-md/medium",
                        lineClamp: 1,
                        children: null != (t = e.globalName) ? t : e.username
                    }), (0, n.jsxs)("div", {
                        className: m.Fk,
                        children: [(0, n.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "currentColor",
                            lineClamp: 1,
                            children: D.intl.string(D.t.Ip9nBS)
                        }), (0, n.jsx)(l.PencilIcon, {
                            size: "xxs",
                            color: "currentColor"
                        })]
                    })]
                })]
            })
        },
        trailing: {
            type: E.S.BADGE_NEW,
            getDismissibleContentTypes: C.Jn
        },
        buildLayout: () => (0, N.WJ)("ProfilePanel") ? [f] : [R]
    })