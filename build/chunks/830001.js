/** Chunk was on 28979 **/
/** chunk id: 830001, original params: t,e,i (module,exports,require) **/
i.d(e, {
    f: () => m
});
var n = i(627968),
    l = i(934551),
    s = i(311907),
    r = i(397927),
    u = i(73153),
    a = i(631670),
    o = i(252452),
    T = i(159001),
    d = i(833336),
    A = i(103738),
    S = i(745109),
    E = i(419954),
    g = i(933297),
    _ = i(854627),
    c = i(752319),
    I = i(287809),
    O = i(780964),
    N = i(358776),
    C = i(368631),
    b = i(633817),
    L = i(531525),
    D = i(652215),
    p = i(985018),
    R = i(722125);
let P = (0, E.t_)(O.X.PROFILE_PANEL, {
        usePredicate: () => !(0, N.dk)("LegacyProfilePanel"),
        useTitle: () => p.intl.string(p.t["vi7f+q"]),
        notice: {
            stores: [d.A, c.A],
            element: A.A
        },
        initialize: () => () => u.h.wait(() => {
            (0, T.sy)(), (0, a.F7)(), o.A.clearSubsection(D.nc_.PROFILE_CUSTOMIZATION)
        }),
        StronglyDiscouragedCustomComponent: S.A,
        buildLayout: () => []
    }),
    v = (0, E.t_)(O.X.PROFILE_PANEL, {
        usePredicate: () => (0, N.dk)("ProfilePanel"),
        useTitle: () => p.intl.string(p.t["vi7f+q"]),
        notice: {
            stores: [d.A, c.A],
            element: A.A
        },
        initialize: () => () => u.h.wait(() => {
            (0, T.sy)(), (0, a.F7)(), o.A.clearSubsection(D.nc_.PROFILE_CUSTOMIZATION)
        }),
        buildLayout: () => [b.I]
    }),
    m = (0, E.i4)(O.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => p.intl.string(p.t["vi7f+q"]),
        getLegacySearchKey: () => (0, N.WJ)("ProfilePanel") ? void 0 : L.H.PROFILE_CUSTOMIZATION,
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
                className: R.a5,
                children: [(0, n.jsx)(r.euF, {
                    src: i,
                    avatarDecoration: u,
                    size: r._3J.SIZE_48,
                    "aria-label": p.intl.string(p.t.lqaIxI)
                }), (0, n.jsxs)("div", {
                    className: R.FS,
                    children: [(0, n.jsx)(r.Text, {
                        color: "text-strong",
                        variant: "text-md/medium",
                        lineClamp: 1,
                        children: null != (t = e.globalName) ? t : e.username
                    }), (0, n.jsxs)("div", {
                        className: R.Fk,
                        children: [(0, n.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "currentColor",
                            lineClamp: 1,
                            children: p.intl.string(p.t.Ip9nBS)
                        }), (0, n.jsx)(l.PencilIcon, {
                            size: "xxs",
                            color: "currentColor"
                        })]
                    })]
                })]
            })
        },
        trailing: {
            type: g.S.BADGE_NEW,
            getDismissibleContentTypes: C.Jn
        },
        buildLayout: () => (0, N.WJ)("ProfilePanel") ? [v] : [P]
    })