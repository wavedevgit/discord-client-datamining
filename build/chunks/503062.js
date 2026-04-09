/** chunk id: 503062 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    a = n(64700),
    l = n(311907),
    s = n(397927),
    r = n(442433),
    o = n(297413),
    d = n(714114),
    c = n(729551),
    u = n(178418),
    g = n(87664),
    m = n(290863),
    h = n(939496),
    x = n(652215),
    p = n(996988),
    f = n(871670);
let A = s._3J.SIZE_40,
    _ = (0, s.FT9)(A);

function I(e) {
    let {
        user: t,
        status: I,
        guildId: j,
        channelId: v,
        onSelect: b
    } = e, {
        theme: S,
        themeType: y
    } = (0, h.E)(), E = a.useMemo(() => t.isNonUserBot() || (0, u.c)(t, v), [t, v]), {
        activities: C,
        isMobileOnline: T
    } = (0, l.cf)([m.A], () => ({
        activities: m.A.getActivities(t.id),
        isMobileOnline: m.A.isMobileOnline(t.id)
    })), w = (0, g.A)(t.id), {
        voiceChannel: N
    } = (0, d.A)({
        userId: t.id,
        guildId: j
    });
    return (0, i.jsxs)(s.DUT, {
        focusProps: y === p.d.MODAL_V2 ? {
            offset: {
                top: 4,
                right: 4,
                left: 4
            }
        } : {
            offset: {
                right: 8
            }
        },
        className: f.nM,
        onClick: b,
        onContextMenu: e => {
            (0, r.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("97262"), n.e("11478"), n.e("32418"), n.e("22755")]).then(n.bind(n, 668569));
                return n => (0, i.jsx)(e, {
                    ...n,
                    user: t
                })
            })
        },
        children: [(0, i.jsx)(s.euF, {
            src: t.getAvatarURL(j, _),
            "aria-label": t.username,
            size: A,
            status: E ? x.clD.UNKNOWN : I,
            statusBackdropColor: E ? void 0 : (0, s.C$5)(S),
            isMobile: T,
            className: f.my
        }), (0, i.jsxs)("div", {
            className: f.zH,
            children: [(0, i.jsx)(o.A, {
                user: t,
                className: f.Tc,
                discriminatorClass: f.D2
            }), (0, i.jsx)(c.A, {
                user: t,
                activities: C,
                applicationStream: w,
                voiceChannel: N
            })]
        })]
    })
}