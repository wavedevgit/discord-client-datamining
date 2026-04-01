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
    c = n(714114),
    d = n(729551),
    u = n(178418),
    m = n(87664),
    g = n(290863),
    p = n(939496),
    x = n(652215),
    f = n(996988),
    _ = n(871670);
let h = s._3J.SIZE_40,
    A = (0, s.FT9)(h);

function I(e) {
    let {
        user: t,
        status: I,
        guildId: v,
        channelId: j,
        onSelect: E
    } = e, {
        theme: T,
        themeType: N
    } = (0, p.E)(), C = a.useMemo(() => t.isNonUserBot() || (0, u.c)(t, j), [t, j]), {
        activities: b,
        isMobileOnline: S
    } = (0, l.cf)([g.A], () => ({
        activities: g.A.getActivities(t.id),
        isMobileOnline: g.A.isMobileOnline(t.id)
    })), y = (0, m.A)(t.id), {
        voiceChannel: R
    } = (0, c.A)({
        userId: t.id,
        guildId: v
    });
    return (0, i.jsxs)(s.DUT, {
        focusProps: N === f.d.MODAL_V2 ? {
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
        className: _.nM,
        onClick: E,
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
            src: t.getAvatarURL(v, A),
            "aria-label": t.username,
            size: h,
            status: C ? x.clD.UNKNOWN : I,
            statusBackdropColor: C ? void 0 : (0, s.C$5)(T),
            isMobile: S,
            className: _.my
        }), (0, i.jsxs)("div", {
            className: _.zH,
            children: [(0, i.jsx)(o.A, {
                user: t,
                className: _.Tc,
                discriminatorClass: _.D2
            }), (0, i.jsx)(d.A, {
                user: t,
                activities: b,
                applicationStream: y,
                voiceChannel: R
            })]
        })]
    })
}