/** chunk id: 336289 params = (module,exports,require) **/
l.d(n, {
    A: () => N
});
var t = l(627968);
l(64700);
var i = l(317097),
    s = l(311907),
    a = l(827734),
    r = l(397927),
    o = l(688810),
    d = l(450373),
    c = l(919395),
    u = l(385612),
    m = l(287809),
    A = l(84540),
    p = l(836602),
    x = l(950191),
    g = l(930349),
    f = l(339984),
    h = l(985018),
    v = l(111242);

function j(e) {
    let {
        backgroundColor: n
    } = e;
    return (0, t.jsx)("div", {
        className: v.o,
        style: {
            backgroundColor: n
        }
    })
}

function I(e) {
    let {
        src: n
    } = e;
    return (0, t.jsx)("img", {
        src: n,
        alt: "",
        className: v._
    })
}

function N(e) {
    let {
        userId: n,
        guildId: l,
        disabled: v
    } = e, {
        newestAnalyticsLocation: N
    } = (0, o.Ay)(), y = null != l, C = (0, x.Ay)(n, l), b = (0, s.bG)([p.A], () => p.A.getPendingChanges(l ?? void 0).pendingBanner), E = (0, s.bG)([m.default], () => m.default.getCurrentUser()?.banner != null), T = null === b, P = void 0 !== b, R = y && (C?.isUsingGuildMemberBanner() ?? !1), _ = T && y ? E : (0, c.Ac)(b, C?.banner), O = y ? R : C?.banner != null, S = P ? null != b : O, L = C?.getPreviewBanner(b, !1, 296) ?? void 0, k = (0, r.rdh)(a.A.unsafe_rawColors.PRIMARY_800).hex(), U = C?.primaryColor ?? (0, i.LX)(k), {
        hex: D
    } = (0, d.A)(U), M = () => (0, u.XD)({
        uploadType: f.HL.BANNER,
        analyticsSource: N,
        guildId: l ?? void 0,
        stackingBehavior: "stack"
    }), G = null != L ? (0, t.jsx)(I, {
        src: L
    }) : (0, t.jsx)(j, {
        backgroundColor: D
    });
    if (!_) return (0, t.jsx)(g.kL, {
        variant: "square",
        onClick: M,
        accessibleLabel: h.intl.string(h.t.N0bC3P),
        disabled: v,
        children: G
    });
    let w = y && E,
        F = S ? {
            onClick: () => (0, A.p)({
                guildId: l ?? void 0,
                banner: null
            }),
            type: w ? "reset" : "remove",
            accessibleLabel: h.intl.string(w ? h.t.jHlJNS : h.t.tT9n7D)
        } : void 0;
    return (0, t.jsx)(g.NW, {
        variant: "square",
        onClick: M,
        accessibleLabel: h.intl.string(h.t.N0bC3P),
        deleteButtonConfig: F,
        disabled: v,
        children: G
    })
}