/** chunk id: 745109 params = (module,exports,require) **/
n.d(t, {
    A: () => y
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    d = n(83257),
    c = n(159001),
    u = n(766569),
    m = n(836602),
    g = n(576622),
    _ = n(178241),
    x = n(183476),
    h = n(338318),
    A = n(71393),
    p = n(967198),
    T = n(711014),
    f = n(287809),
    S = n(203982),
    E = n(115063),
    b = n(507553),
    C = n(652215),
    v = n(355097),
    N = n(985018),
    I = n(127790);
let j = {
    [v.Eq.USER_PROFILE]: "main_profile_tab",
    [v.Eq.GUILD]: "guild_profile_tab"
};

function y() {
    let e = (0, a.bG)([p.A, T.Ay, m.A], () => {
            let e = m.A.selectedGuildId ?? p.A.getGuildId();
            return null == e || m._.has(e) ? T.Ay.getFlattenedGuildIds().find(e => !m._.has(e)) : e
        }),
        t = (0, a.bG)([A.A], () => A.A.getGuild(e)),
        n = (0, a.bG)([m.A], () => m.A.showNotice()),
        l = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
        y = b.A.useField("subsection");
    return s.useEffect(() => {
        (0, _._)(j[y])
    }, [y]), s.useEffect(() => {
        null != l && t?.id != null && (0, g.A)(l.id, l.getAvatarURL(t?.id, 80), {
            guildId: t?.id
        })
    }, [t?.id, l]), (0, i.jsxs)(x.R, {
        children: [(0, i.jsxs)(o.VQ0, {
            className: I.$H,
            type: "top",
            look: "brand",
            selectedItem: y,
            onItemSelect: function(e) {
                if (y !== e) {
                    if (n) {
                        (0, E.fO)({
                            duration: 300,
                            intensity: d.n3
                        }), S._.dispatch(C.jej.EMPHASIZE_NOTICE);
                        return
                    }
                    e === v.Eq.GUILD && null != t && (0, c.V2)(t.id), b.A.setState({
                        subsection: e
                    })
                }
            },
            children: [(0, i.jsx)(o.VQ0.Item, {
                className: I.YU,
                id: v.Eq.USER_PROFILE,
                children: N.intl.string(N.t["2p07FR"])
            }, v.Eq.USER_PROFILE), (0, i.jsx)(o.VQ0.Item, {
                className: r()(I.YU, I.HY),
                "aria-label": N.intl.string(N.t.kPHroX),
                id: v.Eq.GUILD,
                children: N.intl.string(N.t.kPHroX)
            }, v.Eq.GUILD)]
        }), y === v.Eq.GUILD ? (0, i.jsx)(u.A, {
            selectedGuild: t,
            onGuildChange: function(e) {
                if (n) {
                    (0, E.fO)({
                        duration: 300,
                        intensity: d.n3
                    }), S._.dispatch(C.jej.EMPHASIZE_NOTICE);
                    return
                }
                null != e && (0, c.JJ)(e.id)
            }
        }) : (0, i.jsx)(h.A, {})]
    })
}