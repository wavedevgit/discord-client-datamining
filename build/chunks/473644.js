/** chunk id: 473644 params = (module,exports,require) **/
l.d(t, {
    A: () => N
});
var n = l(627968),
    i = l(64700),
    a = l(311907),
    s = l(397927),
    r = l(260451),
    c = l(997590),
    u = l(57991),
    d = l(9994),
    o = l(107123),
    m = l(86376),
    g = l(534400),
    x = l(773669),
    h = l(299091),
    j = l(473145),
    A = l(661191),
    p = l(652215),
    _ = l(985018),
    E = l(639325);

function N(e) {
    let {
        guild: t,
        invite: l,
        discoveryGuild: N,
        showGuildTag: v = !1
    } = e, f = l.approximate_presence_count ?? 0, S = l.approximate_member_count ?? 0, C = (0, a.bG)([x.default], () => x.default.locale), I = (0, o.P)(A.default.extractTimestamp(t.id), C), T = (0, a.bG)([c.A], () => N?.primary_category_id != null ? c.A.getCategoryName(N.primary_category_id) : null), L = t.premiumTier ?? p.TVA.NONE, y = L !== p.TVA.NONE, R = t.preferredLocale ?? N?.preferred_locale ?? null, O = i.useMemo(() => {
        if ("en-US" === R) return _.intl.string(_.t.LQLMGP);
        let e = (0, _.getAvailableLocales)().find(e => e.value === R);
        return null != e ? _.intl.string(e.localizedName) : R
    }, [R]), b = null != R && "" !== R, M = null != T, F = b || M || y, D = M || y, {
        enabled: P
    } = r.SH.useConfig({
        location: "AcceptInviteModalGuildDetailsHeader"
    }), k = P ? _.intl.format(_.t.hmdOwf, {
        tier: L
    }) : (0, j.gb)(L), z = (0, a.bG)([h.A], () => h.A.getInvite(l.code));
    if (null == z) return null;
    let H = (0, d.oO)(z);
    return (0, n.jsxs)("div", {
        className: E.hn,
        children: [(0, n.jsxs)("div", {
            className: E.S7,
            children: [(0, n.jsx)(s.Text, {
                tag: "span",
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: t.name
            }), (0, n.jsx)(u.A, {
                guild: t,
                tooltipPosition: "bottom",
                size: 18,
                tooltipColor: s.STz.Colors.PRIMARY
            }), v && H?.tag != null && H?.badgeHash != null && (0, n.jsx)(g.o9, {
                guildId: t.id,
                guildTag: H?.tag ?? void 0,
                guildBadge: H.badgeHash,
                inline: !1
            })]
        }), (0, n.jsx)(m.X, {
            onlineCount: f,
            memberCount: S,
            className: E.He
        }), (0, n.jsxs)("div", {
            className: E.ov,
            children: [null != I && (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: _.intl.format(_.t.zb2Q56, {
                        createdAtDate: I
                    })
                }), F && (0, n.jsx)("span", {
                    className: E.LO,
                    "aria-hidden": !0
                })]
            }), b && (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: O
                }), D && (0, n.jsx)("span", {
                    className: E.LO,
                    "aria-hidden": !0
                })]
            }), M && (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: T
                }), y && (0, n.jsx)("span", {
                    className: E.LO,
                    "aria-hidden": !0
                })]
            }), y && (0, n.jsx)(s.Text, {
                tag: "span",
                variant: "text-sm/normal",
                color: "text-subtle",
                children: k
            })]
        })]
    })
}