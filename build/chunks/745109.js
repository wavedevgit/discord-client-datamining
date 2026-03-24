/** chunk id: 745109 params = (module,exports,require) **/
n.d(t, {
    A: () => y
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(83257),
    c = n(159001),
    u = n(766569),
    m = n(836602),
    g = n(576622),
    _ = n(740625),
    x = n(841329),
    A = n(955872),
    h = n(71393),
    p = n(967198),
    f = n(711014),
    T = n(287809),
    E = n(203982),
    S = n(115063),
    b = n(507553),
    C = n(652215),
    N = n(355097),
    v = n(985018),
    I = n(298109);
let j = {
    [N.Eq.USER_PROFILE]: "main_profile_tab",
    [N.Eq.GUILD]: "guild_profile_tab"
};

function y() {
    let e = (0, r.bG)([p.A, f.Ay, m.A], () => {
            let e = m.A.selectedGuildId ?? p.A.getGuildId();
            return null == e || m._.has(e) ? f.Ay.getFlattenedGuildIds().find(e => !m._.has(e)) : e
        }),
        t = (0, r.bG)([h.A], () => h.A.getGuild(e)),
        n = (0, r.bG)([m.A], () => m.A.showNotice()),
        l = (0, r.bG)([T.default], () => T.default.getCurrentUser()),
        y = b.A.useField("subsection");
    return s.useEffect(() => {
        (0, x._)(j[y])
    }, [y]), s.useEffect(() => {
        null != l && t?.id != null && (0, g.A)(l.id, l.getAvatarURL(t?.id, 80), {
            guildId: t?.id
        })
    }, [t?.id, l]), (0, i.jsxs)(_.R, {
        header: v.intl.string(v.t["vi7f+q"]),
        children: [(0, i.jsxs)(o.VQ0, {
            className: I.$H,
            type: "top",
            look: "brand",
            selectedItem: y,
            onItemSelect: function(e) {
                if (y !== e) {
                    if (n) {
                        (0, S.fO)({
                            duration: 300,
                            intensity: d.n3
                        }), E._.dispatch(C.jej.EMPHASIZE_NOTICE);
                        return
                    }
                    e === N.Eq.GUILD && null != t && (0, c.V2)(t.id), b.A.setState({
                        subsection: e
                    })
                }
            },
            children: [(0, i.jsx)(o.VQ0.Item, {
                className: I.YU,
                id: N.Eq.USER_PROFILE,
                children: v.intl.string(v.t["2p07FR"])
            }, N.Eq.USER_PROFILE), (0, i.jsx)(o.VQ0.Item, {
                className: a()(I.YU, I.HY),
                "aria-label": v.intl.string(v.t.kPHroX),
                id: N.Eq.GUILD,
                children: v.intl.string(v.t.kPHroX)
            }, N.Eq.GUILD)]
        }), y === N.Eq.GUILD ? (0, i.jsx)(u.A, {
            selectedGuild: t,
            onGuildChange: function(e) {
                if (n) {
                    (0, S.fO)({
                        duration: 300,
                        intensity: d.n3
                    }), E._.dispatch(C.jej.EMPHASIZE_NOTICE);
                    return
                }
                null != e && (0, c.JJ)(e.id)
            }
        }) : (0, i.jsx)(A.A, {})]
    })
}