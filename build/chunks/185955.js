/** chunk id: 185955, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(843282),
    a = n(397927),
    o = n(915089),
    c = n(145497),
    d = n(685073),
    u = n(534400),
    _ = n(128450),
    p = n(193658),
    m = n(287809),
    g = n(581781),
    A = n(743981),
    f = n(355097),
    b = n(985018),
    h = n(86267);
let E = (0, o.Ld)(),
    O = i.memo(function(e) {
        let {
            availablePrimaryGuilds: t,
            pendingPrimaryGuildId: n,
            onChange: o
        } = e, O = i.useMemo(() => new Map(t.map(e => [e.id, e])), [t]), C = (0, l.bG)([m.default], () => {
            var e;
            return (0, d.Zo)(null == (e = m.default.getCurrentUser()) ? void 0 : e.primaryGuild).guildId
        }), x = void 0 !== n ? n : C, S = i.useMemo(() => t.reduce((e, t) => {
            var n;
            return (null == (n = t.profile) ? void 0 : n.tag) != null && e.push({
                label: t.name,
                value: t.id
            }), e
        }, []), [t]), T = i.useCallback(e => {
            var t, n, i;
            if (null == e) return null;
            let l = O.get(e.value);
            if (null == l) return null;
            let s = null == (n = l.profile) ? void 0 : n.tag;
            return null == s ? null : (0, r.jsx)(g.A, {
                guildTag: s,
                guildBadge: null != (t = null == (i = l.profile) ? void 0 : i.badge) ? t : void 0,
                guildId: l.id,
                guildName: e.label,
                guildIcon: l.icon,
                guildIconSize: 32
            })
        }, [O]), I = i.useCallback(e => {
            var t;
            if (null == e) return null;
            let n = O.get(e.value);
            return null == n || null == (null == (t = n.profile) ? void 0 : t.tag) ? null : (0, r.jsx)(c.j, {
                guildId: n.id,
                guildName: n.name,
                guildIcon: n.icon,
                iconSize: 32,
                animate: !1
            })
        }, [O]), y = i.useCallback(e => {
            var t, n, i;
            if (null == e) return null;
            let l = O.get(e.value);
            if (null == l) return null;
            let s = null == (n = l.profile) ? void 0 : n.tag;
            return null == s ? null : (0, r.jsx)(u.o9, {
                guildId: l.id,
                guildTag: s,
                guildBadge: null != (t = null == (i = l.profile) ? void 0 : i.badge) ? t : void 0,
                badgeSize: A.Sl.SIZE_16,
                textColor: "interactive-text-default",
                textVariant: "text-sm/semibold"
            })
        }, [O]), N = i.useCallback(e => {
            let t = e[0];
            return null == t ? null : (0, r.jsx)(r.Fragment, {
                children: T(t)
            })
        }, [T]), j = i.useCallback(e => {
            null == o || o(e)
        }, [o]), v = i.useCallback(e => e === x, [x]), P = i.useCallback(e => e, []), R = i.useCallback(() => {
            null == o || o(null)
        }, [o]), D = i.useRef(null);
        return (0, p.A)(D, f._F.GUILD_TAG), (0, r.jsxs)(_.A, {
            title: b.intl.string(b.t.Pdd1nd),
            titleId: E,
            ref: D,
            children: [(0, r.jsx)(a.Text, {
                className: h.VA,
                variant: "text-sm/normal",
                children: b.intl.string(b.t.mlZ6Jx)
            }), (0, r.jsx)(s.Pw, {
                className: h.Lt,
                optionClassName: h.S0,
                isSelected: v,
                options: S,
                select: j,
                renderLeading: I,
                renderTrailing: y,
                renderOptionValue: N,
                serialize: P,
                clear: R,
                clearable: null != x,
                maxVisibleItems: 8,
                "data-migration-pending": !0
            })]
        })
    })