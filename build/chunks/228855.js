/** chunk id: 228855 params = (module,exports,require) **/
i.d(t, {
    default: () => f
});
var n = i(627968),
    s = i(64700),
    a = i(731738),
    r = i(158954),
    l = i(311907),
    d = i(397927),
    u = i(263063),
    c = i(831062),
    o = i(253932),
    S = i(71393),
    h = i(115063),
    _ = i(360966),
    A = i(386936),
    E = i(985018),
    T = i(818639);

function f(e) {
    let {
        transitionState: t,
        guildId: i,
        onClose: f
    } = e, g = (0, l.bG)([S.A], () => S.A.getGuild(i));
    if (s.useEffect(() => {
            (0, _.Q)(i), (0, A.$)(A.s.MODAL_VIEWED, i), c.A.increment({
                name: a.K.DM_SETTINGS_UPSELL_VIEW
            })
        }, [i]), null == g) return null;
    let m = e => {
        e.preventDefault();
        let t = (0, h.Tb)();
        t.add(i), o.$s.updateSetting(Array.from(t)).then(() => (0, d.showToast)((0, d.createToast)(E.intl.string(E.t.rlYD1W), d.ToastType.SUCCESS))), f(), (0, A.$)(A.s.MODAL_DISABLED_DMS, i)
    };
    return (0, n.jsx)("form", {
        onSubmit: m,
        children: (0, n.jsx)(r.Modal, {
            transitionState: t,
            onClose: f,
            title: E.intl.string(E.t.w2BvnL),
            subtitle: E.intl.format(E.t.Depjkv, {
                guild_name: g.name
            }),
            actions: [{
                text: E.intl.string(E.t.PsWbcp),
                onClick: () => {
                    f(), (0, A.$)(A.s.MODAL_DISMISSED, i)
                },
                variant: "secondary"
            }, {
                text: E.intl.string(E.t.TD7iUx),
                onClick: m
            }],
            children: (0, n.jsxs)(d.BJc, {
                direction: "vertical",
                gap: 8,
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: E.intl.string(E.t.KPB2iw)
                }), (0, n.jsx)("div", {
                    className: T.bo,
                    children: (0, n.jsxs)("div", {
                        className: T.OA,
                        children: [(0, n.jsx)(u.Ay, {
                            guild: g,
                            size: u.Ay.Sizes.SMALL
                        }), (0, n.jsx)(d.Text, {
                            className: T.J5,
                            variant: "text-md/semibold",
                            children: g.name
                        })]
                    })
                })]
            })
        })
    })
}